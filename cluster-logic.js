// Cluster State
let markerClusterIndex = null;
let currentClusterMarkers = new Map();
let builtInGeoJson = [];
let communityGeoJson = [];

// Initialize Supercluster
function initClusterIndex() {
  if (!window.supercluster) return;
  markerClusterIndex = new window.supercluster({
    radius: 45,
    maxZoom: 15,
  });
}

function refreshClusters() {
  if (!markerClusterIndex) initClusterIndex();
  if (!markerClusterIndex) return;

  const points = [...builtInGeoJson, ...communityGeoJson];
  markerClusterIndex.load(points);
  updateClusterMarkers();
}

function updateClusterMarkers() {
  if (!markerClusterIndex || !map) return;
  
  const bounds = map.getBounds();
  const bbox = [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()];
  const zoom = Math.floor(map.getZoom());
  
  const clusters = markerClusterIndex.getClusters(bbox, zoom);
  const newClusterMarkers = new Map();
  
  clusters.forEach(cluster => {
    const { geometry, properties } = cluster;
    const [lng, lat] = geometry.coordinates;
    const isCluster = properties.cluster;
    
    // Create unique ID
    const id = isCluster ? `cluster-${cluster.cluster_id}` : `point-${properties.id}-${properties.source}`;
    
    if (currentClusterMarkers.has(id)) {
      newClusterMarkers.set(id, currentClusterMarkers.get(id));
      currentClusterMarkers.delete(id);
      return;
    }
    
    let marker;
    if (isCluster) {
      // Render Cluster HTML Marker
      const count = properties.point_count_abbreviated;
      const size = count < 10 ? 30 : count < 50 ? 40 : 50;
      
      const el = document.createElement("div");
      el.className = "transit-cluster-marker";
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.innerHTML = `<span>${count}</span>`;
      
      // Click to zoom
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        const expansionZoom = markerClusterIndex.getClusterExpansionZoom(cluster.cluster_id);
        map.flyTo({ center: [lng, lat], zoom: expansionZoom });
      });
      
      marker = new maplibregl.Marker({ element: el })
        .setLngLat([lng, lat])
        .addTo(map._map || map);
        
    } else {
      // Render Individual Point
      const spot = properties.spot;
      marker = createExactDotMarker([lat, lng], getTransitMarkerColor(spot.type), {
        radius: spot.type === "Bus Terminal" ? 10 : 9
      }).addTo(map);
      
      if (properties.source === "built-in") {
        marker.bindPopup(getTransitPopupHtml(spot, spot.type, getBuiltInStationDirectionsUrl(spot)));
        marker.on("click", () => {
          if (createRouteMode) { handleTransitRouteSelection({ ...spot, source: "built-in" }); return; }
          if (showConnectedRoutesForTransitSpot(spot)) return;
          openSpotPopup(marker);
        });
        
        // Add label if major
        if (isMajorBuiltInStation(spot)) {
           // We can keep label handling separate or simple for now
        }
      } else {
        marker.bindPopup(getTransitPopupHtml(spot, spot.type, getCommunityPinDirectionsUrl(spot)));
        marker.on("click", () => {
          if (createRouteMode) { handleTransitRouteSelection({ ...spot, source: "community" }); return; }
          if (showConnectedRoutesForTransitSpot(spot)) return;
          openSpotPopup(marker);
        });
      }
    }
    
    newClusterMarkers.set(id, marker);
  });
  
  // Remove old markers
  currentClusterMarkers.forEach(marker => marker.remove());
  currentClusterMarkers = newClusterMarkers;
}

// Hook into map movements
if (map) {
  map.on('moveend', updateClusterMarkers);
  map.on('zoomend', updateClusterMarkers);
}
