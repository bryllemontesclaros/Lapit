const esriRasterStyle = {
  version: 8,
  sources: {
    esriWorldStreetMap: {
      type: "raster",
      tiles: [
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
      ],
      tileSize: 256,
      attribution: "Tiles &copy; Esri &mdash; Source: Esri, OpenStreetMap contributors"
    }
  },
  layers: [
    {
      id: "esri-world-street-map",
      type: "raster",
      source: "esriWorldStreetMap"
    }
  ]
};

function toLngLat(latLng) {
  if (Array.isArray(latLng)) {
    return [latLng[1], latLng[0]];
  }

  return [latLng.lng, latLng.lat];
}

function toLatLng(lngLat) {
  return {
    lat: lngLat.lat,
    lng: lngLat.lng
  };
}

function createLatLngBounds(points) {
  const lats = points.map((point) => point[0]);
  const lngs = points.map((point) => point[1]);

  return {
    points,
    getEast: () => Math.max(...lngs),
    getNorth: () => Math.max(...lats),
    getSouth: () => Math.min(...lats),
    getWest: () => Math.min(...lngs),
    toMapLibreBounds: () => [
      [Math.min(...lngs), Math.min(...lats)],
      [Math.max(...lngs), Math.max(...lats)]
    ]
  };
}

function getMarkerOffset(icon = {}) {
  const [width, height] = icon.iconSize || [0, 0];
  const [anchorX, anchorY] = icon.iconAnchor || [width / 2, height / 2];

  return [width / 2 - anchorX, height / 2 - anchorY];
}

function normalizeControlPosition(position = "topright") {
  const positions = {
    bottomleft: "bottom-left",
    bottomright: "bottom-right",
    topleft: "top-left",
    topright: "top-right"
  };

  return positions[position] || position;
}

function createHtmlMarkerElement(icon = {}) {
  const element = document.createElement("div");
  const [width, height] = icon.iconSize || [0, 0];

  element.className = icon.className || "";
  element.innerHTML = icon.html || "";

  if (width) {
    element.style.width = `${width}px`;
  }

  if (height) {
    element.style.height = `${height}px`;
  }

  return element;
}

function adaptMapEvent(event) {
  if (!event?.lngLat) {
    return event;
  }

  return {
    ...event,
    latlng: {
      lat: event.lngLat.lat,
      lng: event.lngLat.lng
    },
    originalEvent: event.originalEvent
  };
}

class MapAdapter {
  constructor(container, options = {}) {
    this._map = new maplibregl.Map({
      attributionControl: true,
      center: [120.9842, 14.5995],
      container,
      maxZoom: 19,
      minZoom: 10,
      pitchWithRotate: false,
      style: esriRasterStyle,
      zoom: 11
    });
    this._container = typeof container === "string" ? document.getElementById(container) : container;
    this._options = options;
  }

  setView(latLng, zoom) {
    this._map.jumpTo({
      center: toLngLat(latLng),
      zoom
    });
    return this;
  }

  createPane() {
    return { style: {} };
  }

  on(events, handler) {
    events.split(/\s+/).forEach((eventName) => {
      if (eventName) {
        this._map.on(eventName, (event) => handler(adaptMapEvent(event)));
      }
    });
    return this;
  }

  once(eventName, handler) {
    this._map.once(eventName, handler);
    return this;
  }

  getZoom() {
    return this._map.getZoom();
  }

  getContainer() {
    return this._container;
  }

  getBounds() {
    const bounds = this._map.getBounds();

    return {
      getEast: () => bounds.getEast(),
      getNorth: () => bounds.getNorth(),
      getSouth: () => bounds.getSouth(),
      getWest: () => bounds.getWest()
    };
  }

  flyTo(latLng, zoomOrOptions, options = {}) {
    const flyOptions = typeof zoomOrOptions === "object"
      ? zoomOrOptions
      : { ...options, zoom: zoomOrOptions };

    this._map.flyTo({
      center: toLngLat(latLng),
      duration: (flyOptions.duration || 0.7) * 1000,
      zoom: flyOptions.zoom ?? this._map.getZoom()
    });

    return this;
  }

  fitBounds(bounds, options = {}) {
    this._map.fitBounds(bounds.toMapLibreBounds(), {
      maxZoom: options.maxZoom,
      padding: {
        bottom: options.paddingBottomRight?.[1] || 0,
        left: options.paddingTopLeft?.[0] || 0,
        right: options.paddingBottomRight?.[0] || 0,
        top: options.paddingTopLeft?.[1] || 0
      }
    });
    return this;
  }

  invalidateSize() {
    this._map.resize();
    return this;
  }

  addControl(control, position) {
    this._map.addControl(control, position);
    return this;
  }
}

class TileLayerAdapter {
  addTo(map) {
    this._map = map;
    return this;
  }

  once(eventName, handler) {
    if (this._map._map.loaded()) {
      window.setTimeout(handler, 0);
      return this;
    }

    this._map.once(eventName === "load" ? "load" : eventName, handler);
    return this;
  }
}

class LayerGroupAdapter {
  constructor() {
    this._layers = new Set();
    this._map = null;
  }

  addTo(map) {
    this._map = map;
    this._layers.forEach((layer) => layer.addTo(map));
    return this;
  }

  addLayer(layer) {
    this._layers.add(layer);

    if (this._map) {
      layer.addTo(this._map);
    }

    return this;
  }

  clearLayers() {
    this._layers.forEach((layer) => layer.remove());
    this._layers.clear();
    return this;
  }
}

class CircleMarkerAdapter {
  constructor(latLng, options = {}) {
    this._latLng = latLng;
    this._options = options;
    this._popupHtml = null;
    this._popup = null;
    this._clickHandlers = [];
    this._hoverHandlers = new Map();
    this._element = document.createElement("button");
    this._element.className = "maplibre-dot-marker";
    this._element.type = "button";
    this._element.style.background = options.fillColor || "#475569";
    this._element.style.border = `${options.weight || 3}px solid ${options.color || "#ffffff"}`;
    this._element.style.opacity = options.opacity ?? 1;
    this._element.style.width = `${(options.radius || 10) * 2}px`;
    this._element.style.height = `${(options.radius || 10) * 2}px`;
    this._element.addEventListener("click", (event) => {
      event.stopPropagation();
      this._clickHandlers.forEach((handler) => handler(event));
      if (this._popup && !this._clickHandlers.length) {
        this.openPopup();
      }
    });
  }

  addTo(map) {
    this._map = map;
    this._marker = new maplibregl.Marker({
      anchor: "center",
      element: this._element
    })
      .setLngLat(toLngLat(this._latLng))
      .addTo(map._map);

    return this;
  }

  remove() {
    this._marker?.remove();
    return this;
  }

  bindPopup(html) {
    this._popupHtml = html;
    this._popup = new maplibregl.Popup({
      closeButton: true,
      closeOnClick: true,
      maxWidth: "280px",
      offset: 20
    }).setHTML(html);

    return this;
  }

  openPopup() {
    if (!this._marker || !this._popup) {
      return this;
    }

    this._popup.setLngLat(toLngLat(this._latLng)).addTo(this._map._map);

    return this;
  }

  closePopup() {
    this._popup?.remove();
    return this;
  }

  on(eventName, handler) {
    if (eventName === "click") {
      this._clickHandlers.push(handler);
      return this;
    }

    const eventMap = {
      mouseenter: "mouseenter",
      mouseleave: "mouseleave",
      mouseout: "mouseleave",
      mouseover: "mouseenter"
    };
    const domEventName = eventMap[eventName];

    if (domEventName) {
      this._element.addEventListener(domEventName, handler);
      this._hoverHandlers.set(handler, domEventName);
    }

    return this;
  }

  getElement() {
    return this._element;
  }

  setStyle(style = {}) {
    if (style.fillOpacity !== undefined) {
      this._element.style.setProperty("--pin-fill-opacity", style.fillOpacity);
    }

    if (style.opacity !== undefined) {
      this._element.style.opacity = style.opacity;
    }

    return this;
  }

  setLatLng(latLng) {
    this._latLng = latLng;
    this._marker?.setLngLat(toLngLat(latLng));
    return this;
  }

  setRadius(radius) {
    this._element.style.width = `${radius * 2}px`;
    this._element.style.height = `${radius * 2}px`;
    return this;
  }

  getLatLng() {
    const lngLat = this._marker?.getLngLat();
    return lngLat ? toLatLng(lngLat) : { lat: this._latLng[0], lng: this._latLng[1] };
  }

  bringToFront() {
    this._element.style.zIndex = 5;
    return this;
  }
}

class HtmlMarkerAdapter {
  constructor(latLng, options = {}) {
    this._latLng = latLng;
    this._options = options;
    this._element = createHtmlMarkerElement(options.icon);
    this._offset = getMarkerOffset(options.icon);
  }

  addTo(map) {
    this._map = map;
    this._marker = new maplibregl.Marker({
      anchor: "center",
      element: this._element,
      offset: this._offset
    })
      .setLngLat(toLngLat(this._latLng))
      .addTo(map._map);
    return this;
  }

  remove() {
    this._marker?.remove();
    return this;
  }

  setOpacity(opacity) {
    this._element.style.opacity = opacity;
    return this;
  }

  getLatLng() {
    const lngLat = this._marker?.getLngLat();
    return lngLat ? toLatLng(lngLat) : { lat: this._latLng[0], lng: this._latLng[1] };
  }

  getElement() {
    return this._element;
  }
}

class PolylineAdapter {
  constructor(points, options = {}) {
    this._points = points;
    this._options = options;
    this._id = `route-${crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
    this._popupHtml = null;
    this._popup = null;
    this._clickHandler = null;
  }

  addTo(map) {
    this._map = map;
    const addLine = () => {
      if (map._map.getSource(this._id)) {
        return;
      }

      map._map.addSource(this._id, {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: this._points.map((point) => [point[1], point[0]])
          }
        }
      });
      map._map.addLayer({
        id: this._id,
        type: "line",
        source: this._id,
        layout: {
          "line-cap": this._options.lineCap || "round",
          "line-join": this._options.lineJoin || "round"
        },
        paint: {
          "line-color": this._options.color || "#dc2626",
          "line-opacity": this._options.opacity ?? 1,
          "line-width": this._options.weight || 6
        }
      });
      map._map.moveLayer(this._id);
      map._map.triggerRepaint?.();

      if (this._popupHtml) {
        this._clickHandler = (event) => {
          this._popup
            .setLngLat(event.lngLat)
            .addTo(map._map);
        };
        map._map.on("click", this._id, this._clickHandler);
        map._map.on("mouseenter", this._id, () => {
          map._map.getCanvas().style.cursor = "pointer";
        });
        map._map.on("mouseleave", this._id, () => {
          map._map.getCanvas().style.cursor = "";
        });
      }
    };

    if (map._map.loaded()) {
      addLine();
    } else {
      map._map.once("load", addLine);
    }

    return this;
  }

  bindPopup(html) {
    this._popupHtml = html;
    this._popup = new maplibregl.Popup({
      closeButton: true,
      closeOnClick: true
    }).setHTML(html);
    return this;
  }

  remove() {
    if (this._map?._map.getLayer(this._id) && this._clickHandler) {
      this._map._map.off("click", this._id, this._clickHandler);
    }

    if (this._map?._map.getLayer(this._id)) {
      this._map._map.removeLayer(this._id);
    }

    if (this._map?._map.getSource(this._id)) {
      this._map._map.removeSource(this._id);
    }

    return this;
  }
}

window.L = {
  DomEvent: {
    disableClickPropagation(element) {
      element.addEventListener("click", (event) => event.stopPropagation());
    }
  },
  circleMarker(latLng, options) {
    return new CircleMarkerAdapter(latLng, options);
  },
  control: {
    zoom(options = {}) {
      return {
        addTo(map) {
          map.addControl(
            new maplibregl.NavigationControl({ showCompass: false }),
            normalizeControlPosition(options.position)
          );
          return this;
        }
      };
    }
  },
  divIcon(options) {
    return options;
  },
  latLngBounds(points) {
    return createLatLngBounds(points);
  },
  layerGroup() {
    return new LayerGroupAdapter();
  },
  map(container, options) {
    return new MapAdapter(container, options);
  },
  marker(latLng, options) {
    return new HtmlMarkerAdapter(latLng, options);
  },
  polyline(points, options) {
    return new PolylineAdapter(points, options);
  },
  tileLayer() {
    return new TileLayerAdapter();
  }
};
