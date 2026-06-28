const stations = [
  { name: "MRT-3 North Avenue Station", lat: 14.6521693, lng: 121.0323313, type: "Train Station" },
  { name: "MRT-3 Quezon Avenue Station", lat: 14.6425550, lng: 121.0385751, type: "Train Station" },
  { name: "MRT-3 GMA-Kamuning Station", lat: 14.6353465, lng: 121.0432937, type: "Train Station" },
  { name: "MRT-3 Araneta Center-Cubao Station", lat: 14.6194837, lng: 121.0510726, type: "Train Station" },
  { name: "MRT-3 Santolan-Annapolis Station", lat: 14.6078561, lng: 121.0565240, type: "Train Station" },
  { name: "MRT-3 Ortigas Station", lat: 14.5878620, lng: 121.0567162, type: "Train Station" },
  { name: "MRT-3 Shaw Boulevard Station", lat: 14.5810649, lng: 121.0534794, type: "Train Station" },
  { name: "MRT-3 Boni Station", lat: 14.5737744, lng: 121.0481887, type: "Train Station" },
  { name: "MRT-3 Guadalupe Station", lat: 14.5671140, lng: 121.0455357, type: "Train Station" },
  { name: "MRT-3 Buendia Station", lat: 14.5543705, lng: 121.0342223, type: "Train Station" },
  { name: "MRT-3 Ayala Station", lat: 14.5491940, lng: 121.0279190, type: "Train Station" },
  { name: "MRT-3 Magallanes Station", lat: 14.5419448, lng: 121.0193919, type: "Train Station" },
  { name: "MRT-3 Taft Avenue Station", lat: 14.5375644, lng: 121.0018185, type: "Train Station" },
  { name: "LRT-1 Fernando Poe Jr. Station", lat: 14.6575590, lng: 121.0211373, type: "Train Station" },
  { name: "LRT-1 Balintawak Station", lat: 14.6574243, lng: 121.0038959, type: "Train Station" },
  { name: "LRT-1 Monumento Station", lat: 14.6543118, lng: 120.9838745, type: "Train Station" },
  { name: "LRT-1 5th Avenue Station", lat: 14.6444062, lng: 120.9835359, type: "Train Station" },
  { name: "LRT-1 R. Papa Station", lat: 14.6360145, lng: 120.9822793, type: "Train Station" },
  { name: "LRT-1 Abad Santos Station", lat: 14.6306063, lng: 120.9814053, type: "Train Station" },
  { name: "LRT-1 Blumentritt Station", lat: 14.6227839, lng: 120.9828902, type: "Train Station" },
  { name: "LRT-1 Tayuman Station", lat: 14.6167151, lng: 120.9827226, type: "Train Station" },
  { name: "LRT-1 Bambang Station", lat: 14.6111327, lng: 120.9824870, type: "Train Station" },
  { name: "LRT-1 Doroteo Jose Station", lat: 14.6053092, lng: 120.9820496, type: "Train Station" },
  { name: "LRT-1 Carriedo Station", lat: 14.5991704, lng: 120.9813635, type: "Train Station" },
  { name: "LRT-1 Central Terminal", lat: 14.5927962, lng: 120.9816199, type: "Train Station" },
  { name: "LRT-1 United Nations Station", lat: 14.5819636, lng: 120.9849066, type: "Train Station" },
  { name: "LRT-1 Pedro Gil Station", lat: 14.5765754, lng: 120.9880197, type: "Train Station" },
  { name: "LRT-1 Quirino Station", lat: 14.5702879, lng: 120.9915257, type: "Train Station" },
  { name: "LRT-1 Vito Cruz Station", lat: 14.5634699, lng: 120.9947509, type: "Train Station" },
  { name: "LRT-1 Gil Puyat Station", lat: 14.5541814, lng: 120.9971661, type: "Train Station" },
  { name: "LRT-1 Libertad Station", lat: 14.5477514, lng: 120.9986373, type: "Train Station" },
  { name: "LRT-1 EDSA Station", lat: 14.5388434, lng: 121.0006192, type: "Train Station" },
  { name: "LRT-1 Baclaran Station", lat: 14.5342877, lng: 120.9983980, type: "Train Station" },
  { name: "LRT-1 Redemptorist-Aseana Station", lat: 14.5302786, lng: 120.9929379, type: "Train Station" },
  { name: "LRT-1 MIA Road Station", lat: 14.5184318, lng: 120.9929872, type: "Train Station" },
  { name: "LRT-1 PITX Station", lat: 14.5083027, lng: 120.9912681, type: "Train Station" },
  { name: "LRT-1 Ninoy Aquino Avenue Station", lat: 14.4988903, lng: 120.9943732, type: "Train Station" },
  { name: "LRT-1 Dr. Santos Station", lat: 14.4852337, lng: 120.9895723, type: "Train Station" },
  { name: "LRT-2 Recto Station", lat: 14.6035073, lng: 120.9833708, type: "Train Station" },
  { name: "LRT-2 Legarda Station", lat: 14.6008770, lng: 120.9925686, type: "Train Station" },
  { name: "LRT-2 Pureza Station", lat: 14.6016769, lng: 121.0050939, type: "Train Station" },
  { name: "LRT-2 V. Mapa Station", lat: 14.6042216, lng: 121.0172471, type: "Train Station" },
  { name: "LRT-2 J. Ruiz Station", lat: 14.6105686, lng: 121.0260986, type: "Train Station" },
  { name: "LRT-2 Gilmore Station", lat: 14.6135362, lng: 121.0341458, type: "Train Station" },
  { name: "LRT-2 Betty Go-Belmonte Station", lat: 14.6185972, lng: 121.0427060, type: "Train Station" },
  { name: "LRT-2 Cubao Station", lat: 14.6228614, lng: 121.0531248, type: "Train Station" },
  { name: "LRT-2 Anonas Station", lat: 14.6279862, lng: 121.0647231, type: "Train Station" },
  { name: "LRT-2 Katipunan Station", lat: 14.6310833, lng: 121.0729164, type: "Train Station" },
  { name: "LRT-2 Santolan Station", lat: 14.6221076, lng: 121.0859641, type: "Train Station" },
  { name: "LRT-2 Marikina-Pasig Station", lat: 14.6204412, lng: 121.1006479, type: "Train Station" },
  { name: "LRT-2 Antipolo Station", lat: 14.6247704, lng: 121.1213090, type: "Train Station" },
  { name: "EDSA Carousel - One Ayala Terminal", lat: 14.5502858, lng: 121.0281606, type: "Bus Terminal" },
  { name: "EDSA Carousel - North Avenue Bus Stop", lat: 14.6556980, lng: 121.0317703, type: "Bus" },
  { name: "BGC Bus - Market Market Terminal", lat: 14.5470779, lng: 121.0554976, type: "Bus Terminal" },
  { name: "PITX (Paranaque Integrated Terminal Exchange)", lat: 14.5083027, lng: 120.9912681, type: "Bus Terminal" },
  { name: "Farmers Market UV Express Station", lat: 14.6197373, lng: 121.0516725, type: "UV Express Terminal" },
  { name: "Araneta City Busport", lat: 14.6200745, lng: 121.0574601, type: "Bus Terminal" },
  { name: "Five Star Cubao Terminal", lat: 14.6238189, lng: 121.0496820, type: "Bus Terminal" },
  { name: "Victory Liner Kamias Terminal", lat: 14.6323852, lng: 121.0455880, type: "Bus Terminal" },
  { name: "DLTBCo Buendia/Gil Puyat Terminal", lat: 14.5545591, lng: 120.9966518, type: "Bus Terminal" },
  { name: "Ceres Transport Pasay Terminal", lat: 14.5541741, lng: 120.9965241, type: "Bus Terminal" },
  { name: "Monumento/MCU Bus Stop", lat: 14.6571948, lng: 120.9871577, type: "Bus" },
  { name: "Victory Liner Caloocan Bus Terminal", lat: 14.6541251, lng: 120.9804808, type: "Bus Terminal" },
  { name: "SM City North EDSA Bus Terminal", lat: 14.6561962, lng: 121.0291193, type: "Bus Terminal" },
  { name: "Alabang South Station Terminal", lat: 14.4209255, lng: 121.0441730, type: "Bus Terminal" },
  { name: "Starmall Alabang Terminal Area", lat: 14.4171015, lng: 121.0475924, type: "Bus Terminal" },
  { name: "NAIA Terminal 3 Airport Shuttle Terminal", lat: 14.5203730, lng: 121.0150310, type: "Bus Terminal" },
  { name: "Escolta Ferry Station", lat: 14.5964421, lng: 120.9774965, type: "Ferry Station" },
  { name: "Lawton River Ferry Station", lat: 14.5955828, lng: 120.9814649, type: "Ferry Station" },
  { name: "Quinta Ferry Station", lat: 14.5959362, lng: 120.9822120, type: "Ferry Station" },
  { name: "PUP Ferry Station", lat: 14.5961031, lng: 121.0108352, type: "Ferry Station" },
  { name: "Santa Ana Ferry Station", lat: 14.5826827, lng: 121.0120249, type: "Ferry Station" },
  { name: "Lambingan Ferry Station", lat: 14.5873639, lng: 121.0183921, type: "Ferry Station" },
  { name: "Valenzuela Ferry Station", lat: 14.5739102, lng: 121.0257227, type: "Ferry Station" },
  { name: "Hulo Ferry Station", lat: 14.5680217, lng: 121.0337052, type: "Ferry Station" },
  { name: "Guadalupe Ferry Station", lat: 14.5679919, lng: 121.0478734, type: "Ferry Station" },
  { name: "San Joaquin Ferry Station", lat: 14.5545985, lng: 121.0738509, type: "Ferry Station" },
  { name: "Maybunga Ferry Station", lat: 14.5787263, lng: 121.0811965, type: "Ferry Station" },
  { name: "Pinagbuhatan Ferry Station", lat: 14.5359379, lng: 121.1021445, type: "Ferry Station" },
  { name: "Kalawaan Ferry Station", lat: 14.5531698, lng: 121.0821208, type: "Ferry Station" },
  { name: "Bagumbayan-Santolan Ferry Station", lat: 14.6080009, lng: 121.0854040, type: "Ferry Station" },
  { name: "Santolan-Bagumbayan Ferry Station", lat: 14.6084901, lng: 121.0861072, type: "Ferry Station" },
  { name: "Manila North Harbor Ferry Terminal", lat: 14.6094435, lng: 120.9600768, type: "Ferry Station" },
  { name: "Eva Macapagal Super Terminal", lat: 14.5818085, lng: 120.9703155, type: "Ferry Station" },

  { name: "Baguio Gov. Pack Road Terminal", lat: 16.4108, lng: 120.5987, type: "Bus Terminal" },
  { name: "Dau Bus Terminal", lat: 15.1844, lng: 120.5889, type: "Bus Terminal" },
  { name: "Clark International Airport Transport Hub", lat: 15.1860, lng: 120.5604, type: "Bus Terminal" },
  { name: "Olongapo City Victory Liner Terminal", lat: 14.8375, lng: 120.2834, type: "Bus Terminal" },
  { name: "Balanga Transport Terminal", lat: 14.6760, lng: 120.5364, type: "Bus Terminal" },
  { name: "Tarlac City Bus Terminal", lat: 15.4864, lng: 120.5898, type: "Bus Terminal" },
  { name: "Dagupan City Bus Terminal", lat: 16.0431, lng: 120.3342, type: "Bus Terminal" },
  { name: "Urdaneta City Transport Terminal", lat: 15.9765, lng: 120.5701, type: "Bus Terminal" },
  { name: "Laoag City Bus Terminal", lat: 18.1975, lng: 120.5953, type: "Bus Terminal" },
  { name: "Tuguegarao City Bus Terminal", lat: 17.6132, lng: 121.7283, type: "Bus Terminal" },
  { name: "Batangas Grand Terminal", lat: 13.7858, lng: 121.0704, type: "Bus Terminal" },
  { name: "Batangas Port Passenger Terminal", lat: 13.7544, lng: 121.0436, type: "Ferry Station" },
  { name: "Lucena Grand Central Terminal", lat: 13.9347, lng: 121.6177, type: "Bus Terminal" },
  { name: "Dalahican Port Lucena", lat: 13.9163, lng: 121.6501, type: "Ferry Station" },
  { name: "Naga City Bicol Central Station", lat: 13.6212, lng: 123.1855, type: "Bus Terminal" },
  { name: "Legazpi Grand Central Terminal", lat: 13.1427, lng: 123.7352, type: "Bus Terminal" },
  { name: "Tabaco Port", lat: 13.3581, lng: 123.7315, type: "Ferry Station" },
  { name: "Matnog Port", lat: 12.5875, lng: 124.0852, type: "Ferry Station" },
  { name: "Calapan Port Passenger Terminal", lat: 13.4212, lng: 121.1849, type: "Ferry Station" },
  { name: "Puerto Princesa San Jose Terminal", lat: 9.7873, lng: 118.7445, type: "Bus Terminal" },

  { name: "Cebu South Bus Terminal", lat: 10.2960, lng: 123.8947, type: "Bus Terminal" },
  { name: "Cebu North Bus Terminal", lat: 10.3216, lng: 123.9325, type: "Bus Terminal" },
  { name: "Cebu Pier 1 Ferry Terminal", lat: 10.2967, lng: 123.9064, type: "Ferry Station" },
  { name: "Mactan-Cebu Airport Bus Bay", lat: 10.3141, lng: 123.9793, type: "Bus Terminal" },
  { name: "Cebu IT Park Transport Terminal", lat: 10.3315, lng: 123.9074, type: "Bus Terminal" },
  { name: "Bacolod Ceres South Terminal", lat: 10.6407, lng: 122.9510, type: "Bus Terminal" },
  { name: "Bacolod North Bus Terminal", lat: 10.6876, lng: 122.9565, type: "Bus Terminal" },
  { name: "Iloilo Ceres Bus Terminal", lat: 10.7208, lng: 122.5621, type: "Bus Terminal" },
  { name: "Iloilo Port Passenger Terminal", lat: 10.6948, lng: 122.5898, type: "Ferry Station" },
  { name: "Dumaguete Ceres Bus Terminal", lat: 9.3067, lng: 123.3034, type: "Bus Terminal" },
  { name: "Dumaguete Port", lat: 9.3073, lng: 123.3095, type: "Ferry Station" },
  { name: "Tagbilaran Dao Integrated Bus Terminal", lat: 9.6724, lng: 123.8733, type: "Bus Terminal" },
  { name: "Tagbilaran City Port", lat: 9.6454, lng: 123.8520, type: "Ferry Station" },
  { name: "Tacloban New Bus Terminal", lat: 11.2287, lng: 125.0049, type: "Bus Terminal" },
  { name: "Ormoc City Port", lat: 11.0056, lng: 124.6074, type: "Ferry Station" },
  { name: "Kalibo Ceres Bus Terminal", lat: 11.7060, lng: 122.3699, type: "Bus Terminal" },
  { name: "Caticlan Jetty Port", lat: 11.9272, lng: 121.9508, type: "Ferry Station" },
  { name: "Roxas City Integrated Transport Terminal", lat: 11.5853, lng: 122.7518, type: "Bus Terminal" },

  { name: "Davao Ecoland Transport Terminal", lat: 7.0499, lng: 125.5945, type: "Bus Terminal" },
  { name: "Davao City Overland Transport Terminal", lat: 7.0509, lng: 125.5947, type: "Bus Terminal" },
  { name: "Cagayan de Oro Agora Bus Terminal", lat: 8.4807, lng: 124.6589, type: "Bus Terminal" },
  { name: "Cagayan de Oro Bulua Bus Terminal", lat: 8.4860, lng: 124.6066, type: "Bus Terminal" },
  { name: "Cagayan de Oro Macabalan Port", lat: 8.4980, lng: 124.6540, type: "Ferry Station" },
  { name: "Zamboanga Integrated Bus Terminal", lat: 6.9476, lng: 122.0797, type: "Bus Terminal" },
  { name: "Zamboanga City Port", lat: 6.9016, lng: 122.0762, type: "Ferry Station" },
  { name: "General Santos Bulaong Terminal", lat: 6.1164, lng: 125.1716, type: "Bus Terminal" },
  { name: "Butuan Integrated Bus Terminal", lat: 8.9495, lng: 125.5319, type: "Bus Terminal" },
  { name: "Surigao City Bus Terminal", lat: 9.7775, lng: 125.4920, type: "Bus Terminal" },
  { name: "Surigao City Port", lat: 9.7856, lng: 125.4934, type: "Ferry Station" },
  { name: "Iligan Tambo Integrated Bus Terminal", lat: 8.2261, lng: 124.2413, type: "Bus Terminal" },
  { name: "Ozamiz Port", lat: 8.1465, lng: 123.8443, type: "Ferry Station" },
  { name: "Dipolog City Integrated Bus Terminal", lat: 8.5871, lng: 123.3419, type: "Bus Terminal" },
  { name: "Cotabato City Mega Market Terminal", lat: 7.2230, lng: 124.2462, type: "Bus Terminal" },
  { name: "Koronadal Yellow Bus Terminal", lat: 6.4976, lng: 124.8466, type: "Bus Terminal" },
  { name: "Digos City Overland Transport Terminal", lat: 6.7497, lng: 125.3572, type: "Bus Terminal" },

  // EDSA Carousel
  { name: "EDSA Carousel - Bagong Barrio", lat: 14.6534, lng: 120.9888, type: "Bus Stop" },
  { name: "EDSA Carousel - Balintawak", lat: 14.6575, lng: 121.0039, type: "Bus Stop" },
  { name: "EDSA Carousel - Roosevelt", lat: 14.6573, lng: 121.0210, type: "Bus Stop" },
  { name: "EDSA Carousel - Quezon Ave", lat: 14.6434, lng: 121.0385, type: "Bus Stop" },
  { name: "EDSA Carousel - Kamuning", lat: 14.6346, lng: 121.0433, type: "Bus Stop" },
  { name: "EDSA Carousel - Nepa Q-Mart", lat: 14.6264, lng: 121.0482, type: "Bus Stop" },
  { name: "EDSA Carousel - Main Avenue", lat: 14.6133, lng: 121.0544, type: "Bus Stop" },
  { name: "EDSA Carousel - Santolan", lat: 14.6083, lng: 121.0564, type: "Bus Stop" },
  { name: "EDSA Carousel - Ortigas", lat: 14.5881, lng: 121.0567, type: "Bus Stop" },
  { name: "EDSA Carousel - Guadalupe", lat: 14.5670, lng: 121.0456, type: "Bus Stop" },
  { name: "EDSA Carousel - Buendia", lat: 14.5545, lng: 121.0340, type: "Bus Stop" },
  { name: "EDSA Carousel - Taft Avenue", lat: 14.5381, lng: 121.0011, type: "Bus Stop" },
  { name: "EDSA Carousel - Roxas Boulevard", lat: 14.5350, lng: 120.9930, type: "Bus Stop" },
  { name: "EDSA Carousel - Macapagal", lat: 14.5300, lng: 120.9890, type: "Bus Stop" },

  // Airports
  { name: "NAIA Terminal 1", lat: 14.5086, lng: 121.0006, type: "Terminal" },
  { name: "NAIA Terminal 2", lat: 14.5097, lng: 121.0035, type: "Terminal" },
  { name: "NAIA Terminal 4", lat: 14.5241, lng: 120.9961, type: "Terminal" },
  { name: "Clark Airport Passenger Terminal", lat: 15.1873, lng: 120.5517, type: "Terminal" },
  { name: "Mactan-Cebu International Airport", lat: 10.3157, lng: 123.9791, type: "Terminal" },

  // P2P & UV Express & Major Jeepney Hubs
  { name: "Trinoma P2P Terminal", lat: 14.6542, lng: 121.0326, type: "Bus Terminal" },
  { name: "SM Megamall UV Express Terminal", lat: 14.5846, lng: 121.0569, type: "UV Express Terminal" },
  { name: "Glorietta 3 P2P Terminal", lat: 14.5528, lng: 121.0253, type: "Bus Terminal" },
  { name: "Alabang Town Center P2P Terminal", lat: 14.4258, lng: 121.0270, type: "Bus Terminal" },
  { name: "U.P. Town Center P2P Terminal", lat: 14.6508, lng: 121.0754, type: "Bus Terminal" },
  { name: "Quiapo Church Jeepney Terminal", lat: 14.5986, lng: 120.9839, type: "Jeepney Terminal" },
  { name: "Baclaran Jeepney Terminal", lat: 14.5332, lng: 120.9933, type: "Jeepney Terminal" },
  { name: "SM North EDSA UV Express Terminal", lat: 14.6563, lng: 121.0290, type: "UV Express Terminal" },
  { name: "Centris Station Transport Hub", lat: 14.6422, lng: 121.0402, type: "UV Express Terminal" },
  { name: "Starmall EDSA-Shaw Transport Terminal", lat: 14.5815, lng: 121.0543, type: "UV Express Terminal" },
  { name: "Festival Mall Alabang UV Express", lat: 14.4179, lng: 121.0422, type: "UV Express Terminal" },
  { name: "SM Southmall Transport Terminal", lat: 14.4333, lng: 121.0127, type: "UV Express Terminal" },
  { name: "Lawton Transport Hub", lat: 14.5930, lng: 120.9817, type: "Jeepney Terminal" },

  // PNR Stations
  { name: "PNR Tutuban Station", lat: 14.6120, lng: 120.9723, type: "Train Station" },
  { name: "PNR Blumentritt Station", lat: 14.6231, lng: 120.9832, type: "Train Station" },
  { name: "PNR España Station", lat: 14.6136, lng: 120.9969, type: "Train Station" },
  { name: "PNR Sta. Mesa Station", lat: 14.5996, lng: 121.0084, type: "Train Station" },
  { name: "PNR EDSA Station", lat: 14.5401, lng: 121.0159, type: "Train Station" },
  { name: "PNR FTI Station", lat: 14.5034, lng: 121.0436, type: "Train Station" },
  { name: "PNR Alabang Station", lat: 14.4187, lng: 121.0468, type: "Train Station" }
];

const hardcodedRouteConnections = [];

const trainPinTypes = new Set(["Train", "Train Station", "Train Entrance"]);
const busPinTypes = new Set(["Bus", "Bus Stop", "Bus Terminal"]);
const jeepneyPinTypes = new Set(["Jeepney Stop", "Jeepney Route", "Jeepney Terminal"]);
const uvVanPinTypes = new Set(["UV Express Terminal", "Van Terminal"]);
const terminalPinTypes = new Set(["Terminal"]);
const transferPinTypes = new Set(["Transfer Point"]);
const sharedPinTypes = new Set([
  "Jeepney Stop",
  "Jeepney Route",
  "Jeepney Terminal",
  "Bus Stop",
  "Bus Terminal",
  "Train Station",
  "Train Entrance",
  "Tricycle Terminal",
  "UV Express Terminal",
  "Ferry Station",
  "Van Terminal",
  "Terminal",
  "Transfer Point",
  "Other"
]);
const markerColors = {
  bus: "#E11D48",       // Deep Rose
  ferry: "#06B6D4",     // Bright Aqua/Cyan
  jeepney: "#10B981",   // Emerald Green
  other: "#64748B",     // Slate
  pending: "#FBBF24",   // Golden Yellow
  terminal: "#334155",  // Dark Slate
  train: "#4F46E5",     // Indigo
  transfer: "#8B5CF6",  // Violet
  tricycle: "#D946EF",  // Fuchsia
  user: "#2563EB",      // Standard Location Blue
  uvVan: "#F97316"      // Vibrant Orange
};

const routeColors = {
  Bus: markerColors.bus,
  Ferry: markerColors.ferry,
  Jeepney: markerColors.jeepney,
  Other: markerColors.other,
  Train: markerColors.train,
  Tricycle: markerColors.tricycle,
  "UV/Van": markerColors.uvVan,
  "Walk Transfer": markerColors.transfer
};

const panel = document.querySelector("#panel");
const panelDragHandle = document.querySelector("#panel-drag-handle");
const stationList = document.querySelector("#station-list");
const statusText = document.querySelector("#status");
const mapLoading = document.querySelector("#map-loading");
const nearbySummaryPill = document.querySelector("#nearby-summary-pill");
const destinationSearchInput = document.querySelector("#destination-search-input");
const clearSearchButton = document.querySelector("#clear-search-button");
const searchResultsDropdown = document.querySelector("#search-results-dropdown");
const addPinButton = document.querySelector("#add-pin-button");
const addRouteButton = document.querySelector("#add-route-button");
const myLocationButton = document.querySelector("#my-location-button");
const routeModeBanner = document.querySelector("#route-mode-banner");
const routeModeStep = document.querySelector("#route-mode-step");
const routeModeTitle = document.querySelector("#route-mode-title");
const routeModeText = document.querySelector("#route-mode-text");
const cancelRouteModeButton = document.querySelector("#cancel-route-mode");
const routeDrawer = document.querySelector("#route-drawer");
const routeDrawerTitle = document.querySelector("#route-drawer-title");
const routeDrawerMeta = document.querySelector("#route-drawer-meta");
const routeTimeline = document.querySelector("#route-timeline");
const closeRouteDrawerBtn = document.querySelector("#close-route-drawer");
const onboardingOverlay = document.querySelector("#onboarding-overlay");
const onboardingSignInButton = document.querySelector("#onboarding-sign-in");
const onboardingGuestButton = document.querySelector("#onboarding-guest");
const accountMenuButton = document.querySelector("#account-menu-button");
const accountMenu = document.querySelector("#account-menu");
const authStatus = document.querySelector("#auth-status");
const authButton = document.querySelector("#auth-button");
const exitGuestButton = document.querySelector("#exit-guest-button");
const authDialog = document.querySelector("#auth-dialog");
const authForm = document.querySelector("#auth-form");
const authEmailInput = document.querySelector("#auth-email");
const authPasswordInput = document.querySelector("#auth-password");
const authMessage = document.querySelector("#auth-message");
const authCancelButton = document.querySelector("#auth-cancel");
const authSignUpButton = document.querySelector("#auth-sign-up");
const authForgotButton = document.querySelector("#auth-forgot-password");
const legalDialog = document.querySelector("#legal-dialog");
const legalDialogTitle = document.querySelector("#legal-dialog-title");
const legalCloseButton = document.querySelector("#legal-close");
const legalLinkButtons = document.querySelectorAll("[data-legal-page]");
const legalPages = document.querySelectorAll("[data-legal-content]");
const reportDialog = document.querySelector("#report-dialog");
const reportForm = document.querySelector("#report-form");
const reportMessage = document.querySelector("#report-message");
const reportReasonInput = document.querySelector("#report-reason");
const reportCancelButton = document.querySelector("#report-cancel");
const communityList = document.querySelector("#community-list");
const communityStatus = document.querySelector("#community-status");
const confirmPinDialog = document.querySelector("#confirm-pin-dialog");
const confirmPinLocation = document.querySelector("#confirm-pin-location");
const confirmPinLocationButton = document.querySelector("#confirm-pin-location-button");
const rejectPinLocationButton = document.querySelector("#reject-pin-location");
const pinDialog = document.querySelector("#pin-dialog");
const pinForm = document.querySelector("#pin-form");
const pinDialogTitle = document.querySelector("#pin-dialog-title");
const pinLocation = document.querySelector("#pin-location");
const cancelPinButton = document.querySelector("#cancel-pin");
const savePinButton = document.querySelector("#save-pin");
const deletePinButton = document.querySelector("#delete-pin");
const pinTypeInput = document.querySelector("#pin-type");
const pinNameInput = document.querySelector("#pin-name");
const pinRouteInput = document.querySelector("#pin-route");
const pinHoursInput = document.querySelector("#pin-hours");
const pinFareInput = document.querySelector("#pin-fare");
const pinNoteInput = document.querySelector("#pin-note");
const routeDialog = document.querySelector("#route-dialog");
const routeForm = document.querySelector("#route-form");
const routeDialogTitle = document.querySelector("#route-dialog-title");
const routeMessage = document.querySelector("#route-message");
const routeTypeInput = document.querySelector("#route-type");
const routeNameInput = document.querySelector("#route-name");
const routePathStatus = document.querySelector("#route-path-status");
const addRoutePathPointButton = document.querySelector("#add-route-path-point");
const resetRoutePathButton = document.querySelector("#reset-route-path");
const cancelRouteButton = document.querySelector("#cancel-route");
const deleteRouteButton = document.querySelector("#delete-route");
const saveRouteButton = document.querySelector("#save-route");
const filterButtons = document.querySelectorAll(".filter-button");
const mapLegend = document.querySelector(".map-legend");
const stationMarkers = new Map();
const stationLabelMarkers = new Map();
const osmTransitMarkers = new Map();
const osmTransitLabelMarkers = new Map();
const communityMarkers = new Map();
const communityLabelMarkers = new Map();
const communityPinsById = new Map();
const communityRoutesById = new Map();
const spotPopupMarkers = new Set();
const activeRouteLayers = L.layerGroup();
let routeVisualOverlay = null;
let activeRouteVisualPaths = [];
const guestChoiceKey = "lapit-guest-mode";
const adminEmails = new Set(["montesclarosbrylle@gmail.com"]);
let routeConnections = [...hardcodedRouteConnections];

const firebaseConfig = window.LAPIT_FIREBASE || {};
const hasFirebaseConfig =
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  !firebaseConfig.apiKey.includes("PASTE_YOUR") &&
  !firebaseConfig.projectId.includes("PASTE_YOUR");

let firebaseApp = null;
let firebaseAuth = null;
let firebaseDb = null;

if (hasFirebaseConfig) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseAuth = firebase.auth();
  firebaseDb = firebase.firestore();
}

// Convenience alias used throughout the module
const dbClient = firebaseDb;

let addPinMode = false;
let pendingPinLatLng = null;
let pendingPinMarker = null;
let userLatLng = null;
let userMarker = null;
let currentUser = null;
let currentReportPinId = null;
let currentReportRouteId = null;
let editingPinId = null;
let createRouteMode = false;
let pendingRouteStartId = null;
let pendingRouteEndId = null;
let routePathPickMode = false;
let routeDraftPathPoints = [];
let editingRouteId = null;
let selectedRouteStartMarkerId = null;
let selectedConnectedRoutePinId = null;
let activePinFilter = "All";
let latestCommunityPins = [];
let userAccuracyCircle = null;
let labelMode = "none";
let latestOsmTransitItems = [];
let osmFetchTimer = null;
let osmRequestId = 0;

const map = L.map("map", {
  fadeAnimation: false,
  markerZoomAnimation: true,
  preferCanvas: true,
  zoomControl: false
}).setView([14.5995, 120.9842], 11);

map.createPane("transit-pin-pane").style.zIndex = 640;
map.createPane("user-location-pane").style.zIndex = 660;
map.createPane("label-pane").style.zIndex = 700;

const tileLayer = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
  maxZoom: 19,
  minZoom: 10,
  keepBuffer: 3,
  tileSize: 256,
  detectRetina: false,
  attribution: "Tiles &copy; Esri &mdash; Source: Esri, OpenStreetMap contributors"
}).addTo(map);

activeRouteLayers.addTo(map);
updateMapLabelVisibility();

let landingAnimationInterval = null;

function startLandingAnimation() {
  if (landingAnimationInterval) return;
  landingAnimationInterval = window.setInterval(() => {
    if (!shouldShowOnboarding()) {
      stopLandingAnimation();
      return;
    }
    map.panBy([1, 0], { animate: false });
  }, 50);
}

function stopLandingAnimation() {
  if (landingAnimationInterval) {
    window.clearInterval(landingAnimationInterval);
    landingAnimationInterval = null;
  }
}

function refreshMapLayout() {
  window.requestAnimationFrame(() => {
    map.invalidateSize({
      pan: false
    });
  });
}

tileLayer.once("load", () => {
  mapLoading.classList.add("is-hidden");
  refreshMapLayout();
  if (shouldShowOnboarding()) {
    startLandingAnimation();
  }
});

window.setTimeout(() => {
  mapLoading.classList.add("is-hidden");
  refreshMapLayout();
  if (shouldShowOnboarding()) {
    startLandingAnimation();
  }
}, 1500);

window.addEventListener("resize", () => {
  refreshMapLayout();
  updateMapLabelVisibility();
});

window.addEventListener("load", refreshMapLayout);
window.setTimeout(refreshMapLayout, 50);
window.setTimeout(refreshMapLayout, 350);
map.on("zoomend", updateMapLabelVisibility);
map.on("moveend zoomend", scheduleOsmTransitLoad);
map.on("move zoom moveend zoomend", updateActiveRouteVisualOverlay);

L.DomEvent.disableClickPropagation(addPinButton);
L.DomEvent.disableClickPropagation(addRouteButton);
L.DomEvent.disableClickPropagation(myLocationButton);
L.DomEvent.disableClickPropagation(authButton);
L.DomEvent.disableClickPropagation(accountMenuButton);
L.DomEvent.disableClickPropagation(accountMenu);

const userIcon = L.divIcon({
  className: "marker-dot-icon marker-dot-icon-user",
  html: '<span class="user-dot" aria-hidden="true"></span>',
  iconSize: [22, 22],
  iconAnchor: [11, 11]
});

const stationIcon = L.divIcon({
  className: "marker-dot-icon marker-dot-icon-small",
  html: '<span class="station-dot" aria-hidden="true"></span>',
  iconSize: [18, 18],
  iconAnchor: [9, 9]
});

const communityIcon = L.divIcon({
  className: "marker-dot-icon marker-dot-icon-small",
  html: '<span class="community-dot" aria-hidden="true"></span>',
  iconSize: [18, 18],
  iconAnchor: [9, 9]
});

const trainPinIcon = L.divIcon({
  className: "marker-dot-icon marker-dot-icon-pin",
  html: '<span class="pin-dot train-pin-dot" aria-hidden="true"></span>',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

const busPinIcon = L.divIcon({
  className: "marker-dot-icon marker-dot-icon-pin",
  html: '<span class="pin-dot bus-pin-dot" aria-hidden="true"></span>',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

const jeepneyPinIcon = L.divIcon({
  className: "marker-dot-icon marker-dot-icon-pin",
  html: '<span class="pin-dot jeepney-pin-dot" aria-hidden="true"></span>',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

const tricyclePinIcon = L.divIcon({
  className: "marker-dot-icon marker-dot-icon-pin",
  html: '<span class="pin-dot tricycle-pin-dot" aria-hidden="true"></span>',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

const terminalPinIcon = L.divIcon({
  className: "marker-dot-icon marker-dot-icon-pin",
  html: '<span class="pin-dot terminal-pin-dot" aria-hidden="true"></span>',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

const uvVanPinIcon = L.divIcon({
  className: "marker-dot-icon marker-dot-icon-pin",
  html: '<span class="pin-dot uv-pin-dot" aria-hidden="true"></span>',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

const ferryPinIcon = L.divIcon({
  className: "marker-dot-icon marker-dot-icon-pin",
  html: '<span class="pin-dot ferry-pin-dot" aria-hidden="true"></span>',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

const transferPinIcon = L.divIcon({
  className: "marker-dot-icon marker-dot-icon-pin",
  html: '<span class="pin-dot transfer-pin-dot" aria-hidden="true"></span>',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

const otherPinIcon = L.divIcon({
  className: "marker-dot-icon marker-dot-icon-pin",
  html: '<span class="pin-dot other-pin-dot" aria-hidden="true"></span>',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

const pendingPinIcon = L.divIcon({
  className: "marker-dot-icon marker-dot-icon-pending",
  html: '<span class="pending-dot" aria-hidden="true"></span>',
  iconSize: [24, 24],
  iconAnchor: [12, 12]
});

function toRadians(degrees) {
  return degrees * Math.PI / 180;
}

// Haversine formula for straight-line distance between two GPS points.
function calculateDistanceMeters(originLat, originLng, targetLat, targetLng) {
  const earthRadiusMeters = 6371000;
  const deltaLat = toRadians(targetLat - originLat);
  const deltaLng = toRadians(targetLng - originLng);
  const lat1 = toRadians(originLat);
  const lat2 = toRadians(targetLat);

  const haversine =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) *
    Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);

  const centralAngle = 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
  return earthRadiusMeters * centralAngle;
}

function formatDistance(meters) {
  if (meters < 1000) {
    return `${Math.round(meters)} m`;
  }

  return `${(meters / 1000).toFixed(1)} km`;
}

function getTransitIcon(type) {
  return type === "Train" ? "TRN" : "BUS";
}

function getNearestBadgeType(type) {
  if (type === "Bus Terminal" || terminalPinTypes.has(type)) {
    return type;
  }

  if (trainPinTypes.has(type)) {
    return "Train";
  }

  if (busPinTypes.has(type)) {
    return "Bus";
  }

  return type;
}

function getNearestBadgeIcon(type) {
  if (type === "Bus Terminal" || terminalPinTypes.has(type)) {
    return "TERM";
  }

  if (trainPinTypes.has(type)) {
    return "TRN";
  }

  if (busPinTypes.has(type)) {
    return "BUS";
  }

  if (jeepneyPinTypes.has(type)) {
    return "JEEP";
  }

  if (type === "Ferry Station") {
    return "FRY";
  }

  if (type === "Transfer Point") {
    return "XFER";
  }

  return "PIN";
}

function getCommunityMarkerIcon(type) {
  if (type === "Bus Terminal" || terminalPinTypes.has(type)) {
    return terminalPinIcon;
  }

  if (trainPinTypes.has(type)) {
    return trainPinIcon;
  }

  if (busPinTypes.has(type)) {
    return busPinIcon;
  }

  if (jeepneyPinTypes.has(type)) {
    return jeepneyPinIcon;
  }

  if (type === "Tricycle Terminal") {
    return tricyclePinIcon;
  }

  if (uvVanPinTypes.has(type)) {
    return uvVanPinIcon;
  }

  if (type === "Ferry Station") {
    return ferryPinIcon;
  }

  if (transferPinTypes.has(type)) {
    return transferPinIcon;
  }

  return otherPinIcon;
}

function getTransitMarkerColor(type) {
  if (type === "Bus Terminal" || terminalPinTypes.has(type)) {
    return markerColors.terminal;
  }

  if (trainPinTypes.has(type)) {
    return markerColors.train;
  }

  if (busPinTypes.has(type)) {
    return markerColors.bus;
  }

  if (jeepneyPinTypes.has(type)) {
    return markerColors.jeepney;
  }

  if (type === "Tricycle Terminal") {
    return markerColors.tricycle;
  }

  if (uvVanPinTypes.has(type)) {
    return markerColors.uvVan;
  }

  if (type === "Ferry Station") {
    return markerColors.ferry;
  }

  if (transferPinTypes.has(type)) {
    return markerColors.transfer;
  }

  return markerColors.other;
}

function createExactDotMarker(latLng, color, options = {}) {
  const marker = L.circleMarker(latLng, {
    bubblingMouseEvents: false,
    color: "#ffffff",
    fillColor: color,
    fillOpacity: options.fillOpacity ?? 1,
    interactive: options.interactive ?? true,
    opacity: options.opacity ?? 1,
    pane: options.pane || "transit-pin-pane",
    radius: options.radius || 10,
    weight: options.weight || 3
  });

  marker.on("add", () => {
    marker.bringToFront();
  });

  spotPopupMarkers.add(marker);

  return marker;
}

function closeSpotPopups(exceptMarkers = []) {
  const exceptions = new Set(exceptMarkers.filter(Boolean));

  spotPopupMarkers.forEach((marker) => {
    if (!exceptions.has(marker)) {
      marker.closePopup?.();
    }
  });

  if (!exceptions.size && !selectedConnectedRoutePinId) {
    map.getContainer().classList.remove("is-popup-open");
  }
}

function openSpotPopup(marker) {
  closeSpotPopups([marker]);
  clearActiveRouteLines();
  map.getContainer().classList.add("is-popup-open");
  marker.openPopup();
}

function getTransitPopupHtml(item, sourceText, directionsUrl) {
  const badgeType = getNearestBadgeType(item.type);
  const badgeClass = badgeType.toLowerCase().replaceAll(" ", "-");
  const isOsm = sourceText.includes('OpenStreetMap');
  const sourceLabel = isOsm ? '<span>OpenStreetMap</span>' : '';

  return `
    <article class="spot-popup-card">
      <h3>${escapeHtml(item.name)}</h3>
      <div class="spot-popup-meta">
        <span class="badge ${badgeClass}">${getNearestBadgeIcon(item.type)} ${escapeHtml(badgeType)}</span>
        ${sourceLabel}
      </div>
      <a class="directions-link popup-directions-link" href="${directionsUrl}" target="_blank" rel="noopener">Directions</a>
    </article>
  `;
}

function getCommunityPinPopupHtml(pin, directionsUrl) {
  const badgeType = getNearestBadgeType(pin.type);
  const badgeClass = badgeType.toLowerCase().replaceAll(" ", "-");
  const statusLabel = pin.status === "approved" ? "Verified" : "Unverified";
  const confirmationCount = pin.confirmation_count || 0;
  const isHighlyTrusted = confirmationCount >= 5;

  return `
    <article class="spot-popup-card">
      <h3>
        ${escapeHtml(pin.name)}
        ${isHighlyTrusted ? '<span class="trusted-badge" title="Highly Trusted Community Pin">✔ Verified</span>' : ''}
      </h3>
      <div class="spot-popup-meta">
        <span class="badge ${badgeClass}">${getNearestBadgeIcon(pin.type)} ${escapeHtml(badgeType)}</span>
        <span>${statusLabel}</span>
      </div>
      ${pin.route_name ? `<p class="spot-popup-note">${escapeHtml(pin.route_name)}</p>` : ""}
      ${pin.operating_hours ? `<p class="spot-popup-note">🕒 ${escapeHtml(pin.operating_hours)}</p>` : ""}
      ${pin.fare_info ? `<p class="spot-popup-note">💵 ${escapeHtml(pin.fare_info)}</p>` : ""}
      ${pin.note ? `<p class="spot-popup-note">${escapeHtml(pin.note)}</p>` : ""}
      <p class="spot-popup-note">${confirmationCount} confirmation${confirmationCount === 1 ? "" : "s"}</p>
      <div class="spot-popup-actions">
        <a class="directions-link popup-directions-link" href="${directionsUrl}" target="_blank" rel="noopener">Directions</a>
        <button class="confirm-pin-button" type="button" data-pin-id="${pin.id}">Confirm</button>
        <button class="report-pin-button" type="button" data-pin-id="${pin.id}">Report</button>
      </div>
    </article>
  `;
}

function setRoutePickHover(marker, labelMarker = null, onRoutePick = null) {
  const markerElement = marker.getElement?.();
  const labelElement = labelMarker?.getElement?.();

  if (!markerElement) {
    return;
  }

  marker.on("mouseenter", () => {
    if (!createRouteMode) {
      return;
    }

    markerElement.classList.add("is-route-pick-hover");
    labelElement?.classList.add("is-route-pick-hover");
  });

  marker.on("mouseleave", () => {
    markerElement.classList.remove("is-route-pick-hover");
    labelElement?.classList.remove("is-route-pick-hover");
  });

  if (!labelElement || !onRoutePick) {
    return;
  }

  labelElement.addEventListener("click", (event) => {
    if (!createRouteMode) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    onRoutePick();
  });
}

function shortenMapLabel(name) {
  return name
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/\s+Terminal Area$/i, "")
    .trim();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function truncateText(value, maxLength) {
  const text = String(value || "").trim();

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 3).trim()}...`;
}

function normalizeTransitIdentity(value) {
  return normalizeOsmText(value)
    .replace(/&/g, " and ")
    .replace(/\([^)]*\)/g, " ")
    .replace(/mrt|lrt|pnr|edsa carousel|bgc bus|station|terminal|busport|bus stop|bus|area|main building|airport shuttle|integrated|exchange|transport|city|inc|co|corp/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\b(the|and|to|of|jr|3|2|1)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenSet(value) {
  return new Set(normalizeTransitIdentity(value).split(" ").filter((token) => token.length > 2));
}

function haveSimilarTransitNames(firstName, secondName) {
  const first = normalizeTransitIdentity(firstName);
  const second = normalizeTransitIdentity(secondName);

  if (!first || !second) {
    return false;
  }

  if (first === second || first.includes(second) || second.includes(first)) {
    return true;
  }

  const firstTokens = tokenSet(firstName);
  const secondTokens = tokenSet(secondName);
  const sharedTokens = [...firstTokens].filter((token) => secondTokens.has(token));

  return sharedTokens.length >= 2 || (sharedTokens.length === 1 && Math.min(firstTokens.size, secondTokens.size) <= 2);
}

function getTransitPriority(item) {
  if (item.source === "community") {
    return 5;
  }

  if (item.type === "Bus Terminal" || terminalPinTypes.has(item.type)) {
    return 4;
  }

  if (trainPinTypes.has(item.type)) {
    return 3;
  }

  if (uvVanPinTypes.has(item.type) || jeepneyPinTypes.has(item.type)) {
    return 2;
  }

  return 1;
}

function areTransitDuplicates(first, second) {
  const distance = calculateDistanceMeters(first.lat, first.lng, second.lat, second.lng);
  const sameCategory = getPinCategory(first.type) === getPinCategory(second.type);
  const similarName = haveSimilarTransitNames(first.name, second.name);

  return (sameCategory && distance <= 35) || (similarName && distance <= 120);
}

function dedupeTransitItems(items) {
  return items.reduce((deduped, item) => {
    const duplicateIndex = deduped.findIndex((existing) => areTransitDuplicates(existing, item));

    if (duplicateIndex === -1) {
      deduped.push(item);
      return deduped;
    }

    const existing = deduped[duplicateIndex];
    const shouldReplace =
      getTransitPriority(item) > getTransitPriority(existing) ||
      (getTransitPriority(item) === getTransitPriority(existing) && (item.distanceMeters ?? Infinity) < (existing.distanceMeters ?? Infinity));

    if (shouldReplace) {
      deduped[duplicateIndex] = item;
    }

    return deduped;
  }, []);
}

function createMapLabelMarker(latLng, name, className) {
  return L.marker(latLng, {
    icon: L.divIcon({
      className: `map-label-marker ${className}`,
      html: `
        <span class="map-pin-label">${escapeHtml(shortenMapLabel(name))}</span>
        <span class="map-label-stem" aria-hidden="true"></span>
      `,
      iconAnchor: [75, 44],
      iconSize: [150, 44]
    }),
    interactive: false,
    keyboard: false,
    pane: "label-pane"
  });
}

function isMajorBuiltInStation(station) {
  return station.type === "Bus Terminal" || station.type === "Ferry Station" || /PITX|One Ayala|Market Market|Araneta|Alabang|North Avenue|Buendia|Monumento|NAIA|Cebu|Davao|Baguio|Batangas|Iloilo|Cagayan de Oro|Zamboanga|Tacloban|Dau|Naga|Legazpi|Matnog|Caticlan/i.test(station.name);
}

function isCompactMapViewport() {
  return window.matchMedia("(max-width: 899px)").matches;
}

function updateMapLabelVisibility() {
  const zoom = map.getZoom();
  const compact = isCompactMapViewport();
  const nextLabelMode = compact
    ? zoom >= 17 ? "all" : zoom >= 14 ? "major" : "none"
    : zoom >= 15 ? "all" : zoom >= 11 ? "major" : "none";

  if (nextLabelMode === labelMode) {
    return;
  }

  labelMode = nextLabelMode;
  map.getContainer().dataset.labelMode = labelMode;
}

function normalizeOsmText(value) {
  return (value || "").toLowerCase();
}

function getOsmTransitType(tags = {}) {
  const name = normalizeOsmText(tags.name);

  if (name.includes("tricycle") || name.includes("toda")) {
    return "Tricycle Terminal";
  }

  if (name.includes("uv express") || name.includes("uv terminal")) {
    return "UV Express Terminal";
  }

  if (name.includes("van terminal")) {
    return "Van Terminal";
  }

  if (name.includes("jeep") || tags.route === "jeepney") {
    return name.includes("terminal") ? "Jeepney Terminal" : "Jeepney Stop";
  }

  if (tags.amenity === "ferry_terminal" || tags.route === "ferry") {
    return "Ferry Station";
  }

  if (tags.railway === "subway_entrance" || name.includes("entrance")) {
    return "Train Entrance";
  }

  if (tags.railway || tags.station === "subway") {
    return "Train Station";
  }

  if (tags.amenity === "bus_station") {
    return "Bus Terminal";
  }

  if (tags.highway === "bus_stop") {
    return "Bus Stop";
  }

  if (tags.public_transport === "station") {
    return "Terminal";
  }

  if (tags.public_transport) {
    return "Transfer Point";
  }

  return "Other";
}

function getOsmTransitName(element, type) {
  if (element.tags?.name) {
    return element.tags.name;
  }

  return `OpenStreetMap ${type}`;
}

function getOsmElementLatLng(element) {
  const lat = element.lat ?? element.center?.lat;
  const lng = element.lon ?? element.center?.lon;

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    return null;
  }

  return { lat, lng };
}

function getPinCategory(type) {
  if (type === "Bus Terminal" || terminalPinTypes.has(type)) {
    return "Terminal";
  }

  if (jeepneyPinTypes.has(type)) {
    return "Jeepney";
  }

  if (busPinTypes.has(type)) {
    return "Bus";
  }

  if (trainPinTypes.has(type)) {
    return "Train";
  }

  if (type === "Tricycle Terminal") {
    return "Tricycle";
  }

  if (uvVanPinTypes.has(type)) {
    return "UV/Van";
  }

  if (type === "Ferry Station") {
    return "Ferry";
  }

  if (transferPinTypes.has(type)) {
    return "Transfer";
  }

  return "Other";
}

function isMultiRouteTerminalType(type) {
  return [
    "Bus Terminal",
    "Jeepney Terminal",
    "Tricycle Terminal",
    "UV Express Terminal",
    "Van Terminal",
    "Ferry Station",
    "Terminal",
    "Transfer Point"
  ].includes(type);
}

function pinMatchesActiveFilter(pin) {
  return activePinFilter === "All" || getPinCategory(pin.type) === activePinFilter;
}

function getSharedPinType(type) {
  if (sharedPinTypes.has(type)) {
    return type;
  }

  if (type === "Bus") {
    return "Bus Stop";
  }

  if (type === "Train") {
    return "Train Station";
  }

  if (type === "Jeepney") {
    return "Jeepney Stop";
  }

  if (type === "Tricycle") {
    return "Tricycle Terminal";
  }

  if (type === "UV/Van") {
    return "UV Express Terminal";
  }

  if (type === "Ferry") {
    return "Ferry Station";
  }

  if (type === "Transfer") {
    return "Transfer Point";
  }

  return "Other";
}

function getRouteImportTypeCandidates(type) {
  const sharedType = getSharedPinType(type);
  let candidates = [sharedType];

  if (busPinTypes.has(sharedType)) {
    candidates = [sharedType, "Bus Stop", "Bus Terminal", "Terminal", "Other"];
  } else if (trainPinTypes.has(sharedType)) {
    candidates = [sharedType, "Train Station", "Train Entrance", "Other"];
  } else if (jeepneyPinTypes.has(sharedType)) {
    candidates = [sharedType, "Jeepney Terminal", "Jeepney Stop", "Jeepney Route", "Other"];
  } else if (sharedType === "Tricycle Terminal") {
    candidates = [sharedType, "Other"];
  } else if (uvVanPinTypes.has(sharedType)) {
    candidates = [sharedType, "UV Express Terminal", "Van Terminal", "Terminal", "Other"];
  } else if (sharedType === "Ferry Station") {
    candidates = [sharedType, "Terminal", "Other"];
  } else if (transferPinTypes.has(sharedType)) {
    candidates = [sharedType, "Other"];
  } else if (terminalPinTypes.has(sharedType)) {
    candidates = [sharedType, "Bus Terminal", "Other"];
  }

  return [...new Set(candidates)].filter((candidate) => sharedPinTypes.has(candidate));
}

function syncCommunityMarkerVisibility() {
  communityPinsById.forEach((pin, pinId) => {
    const marker = communityMarkers.get(pinId);
    const labelMarker = communityLabelMarkers.get(pinId);

    if (!marker) {
      return;
    }

    const isVisible = pinMatchesActiveFilter(pin);
    marker.setStyle({
      fillOpacity: isVisible ? 1 : 0.16,
      opacity: isVisible ? 1 : 0.28
    });

    if (labelMarker) {
      labelMarker.setOpacity(isVisible ? 1 : 0);
    }
  });
}

function setRouteMode(message, step = "Step 1 of 2", title = "Choose starting point") {
  if (!message) {
    routeModeBanner.classList.add("is-hidden");
    routeModeStep.textContent = "Step 1 of 2";
    routeModeTitle.textContent = "Choose starting point";
    routeModeText.textContent = "Select any transit spot on the map.";
    updateRoutePickCursor();
    return;
  }

  routeModeStep.textContent = step;
  routeModeTitle.textContent = title;
  routeModeText.textContent = message;
  routeModeBanner.classList.remove("is-hidden");
  updateRoutePickCursor();
}

function updateRoutePickCursor() {
  map.getContainer().classList.toggle("is-creating-route", createRouteMode);
  map.getContainer().classList.toggle("is-choosing-route-end", createRouteMode && Boolean(pendingRouteStartId));
}

function resetRouteMode(message = "Community spots are visible to everyone.") {
  createRouteMode = false;
  routePathPickMode = false;
  routeDraftPathPoints = [];
  pendingRouteStartId = null;
  pendingRouteEndId = null;
  clearSelectedRouteStartPin();
  addRouteButton.setAttribute("aria-pressed", "false");
  const rl1 = addRouteButton.querySelector(".action-label"); if (rl1) rl1.textContent = "Route";
  setRouteMode(null);
  communityStatus.textContent = message;
}

function updateCommunityFilterStatus() {
  const visibleCount = latestCommunityPins.filter(pinMatchesActiveFilter).length;
  const builtInCount = stations.length;
  const osmCount = latestOsmTransitItems.length;
  const communityCount = latestCommunityPins.length;
  const totalMapCount = communityCount + builtInCount + osmCount;
  const mapSourceText = `Map total: ${totalMapCount} spots (${communityCount} community, ${builtInCount} built-in${osmCount ? `, ${osmCount} OpenStreetMap` : ""}).`;

  if (activePinFilter === "All") {
    communityStatus.textContent = `${communityCount} community spot${communityCount === 1 ? "" : "s"} saved. ${mapSourceText}`;
    return;
  }

  communityStatus.textContent = `${visibleCount} ${activePinFilter.toLowerCase()} community spot${visibleCount === 1 ? "" : "s"} shown from ${communityCount} saved. ${mapSourceText}`;
}

function getDirectionsUrl(originLat, originLng, station) {
  const origin = `${originLat},${originLng}`;
  const destination = `${station.lat},${station.lng}`;

  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=walking`;
}

function getBuiltInStationDirectionsUrl(station) {
  const destination = `${station.lat},${station.lng}`;

  if (!userLatLng) {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&travelmode=walking`;
  }

  return getDirectionsUrl(userLatLng[0], userLatLng[1], station);
}

function getCommunityPinDirectionsUrl(pin) {
  const destination = `${pin.lat},${pin.lng}`;

  if (!userLatLng) {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&travelmode=walking`;
  }

  const origin = `${userLatLng[0]},${userLatLng[1]}`;
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=walking`;
}

function normalizeRouteText(value) {
  return (value || "").toLowerCase();
}

function pinText(pin) {
  return normalizeRouteText(`${pin.name} ${pin.type} ${pin.route_name || ""} ${pin.note || ""}`);
}

function pinMatchesKeywords(pin, keywords) {
  const text = pinText(pin);
  return keywords.every((keyword) => text.includes(keyword));
}

function findRouteEndpoint(keywords, ignoredPinId = null) {
  return [...communityPinsById.values()].find((pin) => {
    if (pin.id === ignoredPinId) {
      return false;
    }

    return pinMatchesKeywords(pin, keywords);
  });
}

function getBearingDegrees(startPin, endPin) {
  const startLat = toRadians(startPin.lat);
  const endLat = toRadians(endPin.lat);
  const deltaLng = toRadians(endPin.lng - startPin.lng);
  const y = Math.sin(deltaLng) * Math.cos(endLat);
  const x =
    Math.cos(startLat) * Math.sin(endLat) -
    Math.sin(startLat) * Math.cos(endLat) * Math.cos(deltaLng);

  return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
}

function normalizeRoutePathPoints(points = []) {
  if (!Array.isArray(points)) {
    return [];
  }

  return points
    .map((point) => ({
      lat: Number(point.lat),
      lng: Number(point.lng)
    }))
    .filter((point) => Number.isFinite(point.lat) && Number.isFinite(point.lng));
}

function getRouteDraftPath(startPin, endPin) {
  return [
    { lat: startPin.lat, lng: startPin.lng },
    ...normalizeRoutePathPoints(routeDraftPathPoints),
    { lat: endPin.lat, lng: endPin.lng }
  ];
}

function getRouteRenderPath(route) {
  const pathPoints = normalizeRoutePathPoints(route.path_points);

  if (pathPoints.length >= 2) {
    return pathPoints;
  }

  return [
    { lat: route.startPin.lat, lng: route.startPin.lng },
    { lat: route.endPin.lat, lng: route.endPin.lng }
  ];
}

function ensureRouteVisualOverlay() {
  if (routeVisualOverlay) {
    return routeVisualOverlay;
  }

  routeVisualOverlay = document.createElement("div");
  routeVisualOverlay.classList.add("route-visual-overlay");
  routeVisualOverlay.setAttribute("aria-hidden", "true");
  map.getContainer().appendChild(routeVisualOverlay);
  return routeVisualOverlay;
}

function projectRoutePoint(point) {
  if (map._map?.project) {
    return map._map.project([point.lng, point.lat]);
  }

  if (map.latLngToContainerPoint) {
    return map.latLngToContainerPoint([point.lat, point.lng]);
  }

  return null;
}

function createRouteVisualPolyline(points, className) {
  const fragment = document.createDocumentFragment();
  const projectedPoints = points.map(projectRoutePoint).filter(Boolean);

  projectedPoints.slice(0, -1).forEach((startPoint, index) => {
    const endPoint = projectedPoints[index + 1];
    const deltaX = endPoint.x - startPoint.x;
    const deltaY = endPoint.y - startPoint.y;
    const length = Math.hypot(deltaX, deltaY);

    if (length < 1) {
      return;
    }

    const segment = document.createElement("span");
    segment.className = className;
    segment.style.left = `${startPoint.x}px`;
    segment.style.top = `${startPoint.y}px`;
    segment.style.width = `${length}px`;
    segment.style.transform = `rotate(${Math.atan2(deltaY, deltaX)}rad)`;
    fragment.appendChild(segment);
  });

  return fragment;
}

function updateActiveRouteVisualOverlay() {
  if (!routeVisualOverlay && !activeRouteVisualPaths.length) {
    return;
  }

  const overlay = ensureRouteVisualOverlay();
  const { width, height } = map.getContainer().getBoundingClientRect();
  overlay.style.width = `${width}px`;
  overlay.style.height = `${height}px`;
  overlay.replaceChildren();

  activeRouteVisualPaths.forEach((points) => {
    if (points.length < 2) {
      return;
    }

    overlay.appendChild(createRouteVisualPolyline(points, "route-visual-line route-visual-line-shadow"));
    overlay.appendChild(createRouteVisualPolyline(points, "route-visual-line route-visual-line-casing"));
    overlay.appendChild(createRouteVisualPolyline(points, "route-visual-line route-visual-line-blue"));
  });
}

function setActiveRouteVisualPaths(routePaths) {
  activeRouteVisualPaths = routePaths;
  updateActiveRouteVisualOverlay();
  window.setTimeout(updateActiveRouteVisualOverlay, 80);
}

function clearActiveRouteLines() {
  activeRouteLayers.clearLayers();
  setActiveRouteVisualPaths([]);
  map.getContainer().classList.remove("is-viewing-route");
  map.getContainer().classList.remove("is-popup-open");
  selectedConnectedRoutePinId = null;
  routeDrawer.classList.remove("is-active");
  routeDrawer.setAttribute("aria-hidden", "true");
}

function fitMapToRoutePoints(points) {
  if (points.length < 2) {
    return;
  }

  map.fitBounds(L.latLngBounds(points), {
    maxZoom: 16,
    paddingTopLeft: [40, 120],
    paddingBottomRight: [420, 80]
  });
}

function getCommunityPinMarkerElements(pinId) {
  return {
    labelElement: communityLabelMarkers.get(pinId)?.getElement?.(),
    markerElement: communityMarkers.get(pinId)?.getElement?.()
  };
}

function clearSelectedRouteStartPin() {
  if (!selectedRouteStartMarkerId) {
    return;
  }

  const { labelElement, markerElement } = getCommunityPinMarkerElements(selectedRouteStartMarkerId);
  markerElement?.classList.remove("is-route-start-selected");
  labelElement?.classList.remove("is-route-start-selected");
  selectedRouteStartMarkerId = null;
}

function setSelectedRouteStartPin(pinId) {
  clearSelectedRouteStartPin();

  const { labelElement, markerElement } = getCommunityPinMarkerElements(pinId);
  markerElement?.classList.add("is-route-start-selected");
  labelElement?.classList.add("is-route-start-selected");
  selectedRouteStartMarkerId = pinId;
}

function updateRoutePathStatus() {
  if (!routePathStatus) {
    return;
  }

  const pointCount = routeDraftPathPoints.length;
  routePathStatus.textContent = pointCount
    ? `${pointCount} path point${pointCount === 1 ? "" : "s"} added. The route will follow the blue preview line.`
    : "Straight path. Add points to trace the real road or rail path.";
}

function showPendingRoutePreview(startPin, endPin) {
  clearActiveRouteLines();

  const routePath = getRouteDraftPath(startPin, endPin);
  const points = routePath.map((point) => [point.lat, point.lng]);
  setActiveRouteVisualPaths([routePath]);
  const casingLine = L.polyline(points, {
    className: "route-line route-line-casing route-line-preview-casing",
    color: "#ffffff",
    weight: 10,
    opacity: 1,
    lineCap: "round",
    lineJoin: "round"
  });
  const shadowLine = L.polyline(points, {
    className: "route-line route-line-shadow",
    color: "#0f172a",
    weight: 15,
    opacity: 0.12,
    lineCap: "round",
    lineJoin: "round"
  });
  const line = L.polyline(points, {
    className: "route-line route-line-preview",
    color: "#2563eb",
    weight: 6,
    opacity: 1,
    lineCap: "round",
    lineJoin: "round"
  });

  activeRouteLayers.addLayer(shadowLine);
  activeRouteLayers.addLayer(casingLine);
  activeRouteLayers.addLayer(line);
}

function addRouteEndpointMarker(pin, label, color) {
  const endpointMarker = L.circleMarker([pin.lat, pin.lng], {
    bubblingMouseEvents: false,
    color: "#ffffff",
    fillColor: color,
    fillOpacity: 1,
    interactive: false,
    opacity: 1,
    radius: 10,
    weight: 4
  });
  const endpointLabel = createMapLabelMarker([pin.lat, pin.lng], `${label}: ${pin.name}`, "route-endpoint-label");

  activeRouteLayers.addLayer(endpointMarker);
  activeRouteLayers.addLayer(endpointLabel);
}

function updateRouteDrawer(connectedRoutes) {
  if (!connectedRoutes.length) {
    routeDrawer.classList.remove("is-active");
    routeDrawer.setAttribute("aria-hidden", "true");
    return;
  }

  const firstRoute = connectedRoutes[0];
  routeDrawerTitle.textContent = connectedRoutes.length === 1
    ? firstRoute.name
    : `${connectedRoutes.length} connected routes`;
  routeDrawerMeta.textContent = connectedRoutes.length === 1
    ? `${firstRoute.startPin.name} to ${firstRoute.endPin.name}`
    : "Tap another routed spot to inspect its connections.";
    
  // Build timeline if single route is selected
  routeTimeline.innerHTML = "";
  if (connectedRoutes.length === 1) {
    const stops = [
      { name: firstRoute.startPin.name, desc: "Start location", type: "is-start" },
      // Optional: Add intermediate stops if they existed on the data model
      { name: firstRoute.endPin.name, desc: "Destination", type: "is-end" }
    ];
    
    stops.forEach((stop) => {
      const li = document.createElement("li");
      li.className = `timeline-stop ${stop.type}`;
      li.innerHTML = `
        <div class="timeline-stop-name">${stop.name}</div>
        <div class="timeline-stop-desc">${stop.desc}</div>
      `;
      routeTimeline.appendChild(li);
    });
  } else {
    // If multiple routes are shown, just show a list of them
    connectedRoutes.forEach((route) => {
      const li = document.createElement("li");
      li.className = "timeline-stop";
      li.innerHTML = `
        <div class="timeline-stop-name">${route.name}</div>
        <div class="timeline-stop-desc">${route.startPin.name} to ${route.endPin.name}</div>
      `;
      routeTimeline.appendChild(li);
    });
  }

  routeDrawer.classList.add("is-active");
  routeDrawer.setAttribute("aria-hidden", "false");
}

function getRouteById(routeId) {
  return routeConnections.find((route) => route.id === routeId) || null;
}

function canManageRoute(route) {
  return Boolean(
    route &&
    route.source === "community" &&
    currentUser &&
    (route.created_by === currentUser.uid || isAdminUser())
  );
}

function getConnectedRoutesForPin(pinId) {
  const selectedPin = communityPinsById.get(pinId);

  if (!selectedPin) {
    return [];
  }

  return routeConnections.reduce((routes, route) => {
    const selectedIsStart = route.startPinId
      ? route.startPinId === pinId
      : pinMatchesKeywords(selectedPin, route.fromKeywords || []);
    const selectedIsEnd = route.endPinId
      ? route.endPinId === pinId
      : pinMatchesKeywords(selectedPin, route.toKeywords || []);

    if (!selectedIsStart && !selectedIsEnd) {
      return routes;
    }

    const otherPin = selectedIsStart
      ? route.endPinId
        ? communityPinsById.get(route.endPinId)
        : findRouteEndpoint(route.toKeywords || [], selectedPin.id)
      : route.startPinId
        ? communityPinsById.get(route.startPinId)
        : findRouteEndpoint(route.fromKeywords || [], selectedPin.id);

    if (!otherPin) {
      return routes;
    }

    routes.push({
      ...route,
      startPin: selectedIsStart ? selectedPin : otherPin,
      endPin: selectedIsStart ? otherPin : selectedPin
    });

    return routes;
  }, []);
}

function getRoutePopupHtml(route) {
  const canManage = canManageRoute(route);
  const canInteract = Boolean(currentUser && route.source === "community");
  const statusLabel = route.status === "approved" ? "Verified" : "Unverified";
  const confirmCount = route.confirmation_count || 0;
  const reportCount = route.report_count || 0;

  return `
    <article class="spot-popup-card route-popup-card">
      <h3>${escapeHtml(route.name)}</h3>
      <div class="spot-popup-meta">
        <span class="badge transfer-point">${escapeHtml(route.type)}</span>
        <span>${statusLabel}</span>
      </div>
      <p class="spot-popup-note">${confirmCount} confirmation${confirmCount === 1 ? "" : "s"}${canInteract ? ` · ${reportCount} report${reportCount === 1 ? "" : "s"}` : ""}</p>
      <div class="spot-popup-actions">
        ${canInteract ? `<button class="confirm-route-button" type="button" data-route-id="${route.id}">Confirm route</button>` : ""}
        ${canInteract ? `<button class="report-route-button" type="button" data-route-id="${route.id}">Report route</button>` : ""}
        ${canManage ? `<button class="edit-route-button" type="button" data-route-id="${route.id}">Edit route</button>` : ""}
        ${canManage ? `<button class="delete-route-button" type="button" data-route-id="${route.id}">Delete route</button>` : ""}
      </div>
    </article>
  `;
}

function showConnectedRoutesForPin(pinId) {
  clearActiveRouteLines();
  closeSpotPopups();

  const connectedRoutes = getConnectedRoutesForPin(pinId);
  selectedConnectedRoutePinId = connectedRoutes.length ? pinId : null;
  const routeBoundsPoints = [];
  const routeVisualPaths = [];

  connectedRoutes.forEach((route) => {
    const routePath = getRouteRenderPath(route);
    const points = routePath.map((point) => [point.lat, point.lng]);
    routeBoundsPoints.push(...points);
    routeVisualPaths.push(routePath);
    const casingLine = L.polyline(points, {
      className: "route-line route-line-casing route-line-active-casing",
      color: "#ffffff",
      weight: 10,
      opacity: 1,
      lineCap: "round",
      lineJoin: "round"
    });
    const shadowLine = L.polyline(points, {
      className: "route-line route-line-shadow",
      color: "#0f172a",
      weight: 15,
      opacity: 0.12,
      lineCap: "round",
      lineJoin: "round"
    });
    const line = L.polyline(points, {
      className: "route-line route-line-active",
      color: "#2563eb",
      weight: 6,
      opacity: 1,
      lineCap: "round",
      lineJoin: "round"
    }).bindPopup(getRoutePopupHtml(route));

    activeRouteLayers.addLayer(shadowLine);
    activeRouteLayers.addLayer(casingLine);
    activeRouteLayers.addLayer(line);
    addRouteEndpointMarker(route.startPin, "Start", "#16a34a");
    addRouteEndpointMarker(route.endPin, "End", "#dc2626");
  });

  if (connectedRoutes.length) {
    setActiveRouteVisualPaths(routeVisualPaths);
    map.getContainer().classList.add("is-viewing-route");
    fitMapToRoutePoints(routeBoundsPoints);
    updateRouteDrawer(connectedRoutes);
    communityStatus.textContent = `${connectedRoutes.length} connected route${connectedRoutes.length === 1 ? "" : "s"} highlighted.`;
  } else {
    updateRouteDrawer([]);
    communityStatus.textContent = "No connected routes for this spot yet.";
  }
}

function findCommunityPinForTransitSpot(spot) {
  const routePinIds = new Set(
    routeConnections.flatMap((route) => [route.startPinId, route.endPinId]).filter(Boolean)
  );
  const candidates = [...communityPinsById.values()]
    .filter((pin) => routePinIds.has(pin.id))
    .map((pin) => ({
      pin,
      distance: calculateDistanceMeters(pin.lat, pin.lng, spot.lat, spot.lng),
      sameCategory: getPinCategory(pin.type) === getPinCategory(spot.type),
      similarName: haveSimilarTransitNames(pin.name, spot.name)
    }))
    .filter(({ distance, sameCategory, similarName }) => {
      return (sameCategory && distance <= 250) || (similarName && distance <= 700);
    })
    .sort((first, second) => {
      const firstScore = (first.similarName ? 0 : 1000) + (first.sameCategory ? 0 : 500) + first.distance;
      const secondScore = (second.similarName ? 0 : 1000) + (second.sameCategory ? 0 : 500) + second.distance;
      return firstScore - secondScore;
    });

  return candidates[0]?.pin || null;
}

function showConnectedRoutesForTransitSpot(spot) {
  const routePin = findCommunityPinForTransitSpot(spot);

  if (!routePin || !getConnectedRoutesForPin(routePin.id).length) {
    return false;
  }

  showConnectedRoutesForPin(routePin.id);
  return true;
}

function renderBuiltInStationMarkers() {
  stationMarkers.forEach((marker) => marker.remove());
  stationMarkers.clear();
  stationLabelMarkers.forEach((marker) => marker.remove());
  stationLabelMarkers.clear();

  dedupeTransitItems(stations.map((station) => ({ ...station, source: "built-in" }))).forEach((station) => {
    const latLng = [station.lat, station.lng];
    const marker = createExactDotMarker([station.lat, station.lng], getTransitMarkerColor(station.type), {
      radius: station.type === "Bus Terminal" ? 10 : 9
    })
      .addTo(map)
      .bindPopup(getTransitPopupHtml(station, station.type, getBuiltInStationDirectionsUrl(station)));

    const selectBuiltInStationForRoute = () => {
      if (createRouteMode) {
        handleTransitRouteSelection({ ...station, source: "built-in" });
        return;
      }

      if (showConnectedRoutesForTransitSpot(station)) {
        return;
      }

      openSpotPopup(marker);
    };

    marker.on("click", selectBuiltInStationForRoute);

    const labelClass = `built-in-label${isMajorBuiltInStation(station) ? " major-label" : ""}`;
    const labelMarker = createMapLabelMarker(latLng, station.name, labelClass).addTo(map);
    setRoutePickHover(marker, labelMarker, selectBuiltInStationForRoute);
    stationMarkers.set(station.name, marker);
    stationLabelMarkers.set(station.name, labelMarker);
  });
}

function clearOsmTransitMarkers() {
  osmTransitMarkers.forEach((marker) => {
    spotPopupMarkers.delete(marker);
    marker.remove();
  });
  osmTransitMarkers.clear();
  osmTransitLabelMarkers.forEach((marker) => marker.remove());
  osmTransitLabelMarkers.clear();
}

function renderOsmTransitMarkers(items) {
  clearOsmTransitMarkers();

  const visibleOsmItems = items.filter((item) => {
    const duplicatesBuiltIn = stations.some((station) => areTransitDuplicates(station, item));
    const duplicatesCommunity = [...communityPinsById.values()].some((pin) => areTransitDuplicates(pin, item));

    return !duplicatesBuiltIn && !duplicatesCommunity;
  });

  visibleOsmItems.forEach((item) => {
    const latLng = [item.lat, item.lng];
    const marker = createExactDotMarker(latLng, getTransitMarkerColor(item.type), {
      radius: item.type === "Bus Terminal" || item.type === "Train Station" ? 9 : 8,
      weight: 2
    })
      .addTo(map)
      .bindPopup(getTransitPopupHtml(item, `${item.type} · OpenStreetMap`, getBuiltInStationDirectionsUrl(item)));
    const labelMarker = createMapLabelMarker(latLng, item.name, "osm-label").addTo(map);

    const selectOsmTransitForRoute = () => {
      if (createRouteMode) {
        handleTransitRouteSelection(item);
        return;
      }

      if (showConnectedRoutesForTransitSpot(item)) {
        return;
      }

      openSpotPopup(marker);
    };

    marker.on("click", selectOsmTransitForRoute);

    setRoutePickHover(marker, labelMarker, selectOsmTransitForRoute);
    osmTransitMarkers.set(item.id, marker);
    osmTransitLabelMarkers.set(item.id, labelMarker);
  });
}

function focusOsmTransit(itemId) {
  const marker = osmTransitMarkers.get(itemId);
  const item = latestOsmTransitItems.find((transitItem) => transitItem.id === itemId);

  if (!marker) {
    return;
  }

  if (item && showConnectedRoutesForTransitSpot(item)) {
    map.flyTo(marker.getLatLng(), 17, {
      duration: 0.7
    });
    return;
  }

  clearActiveRouteLines();
  map.flyTo(marker.getLatLng(), 17, {
    duration: 0.7
  });
  openSpotPopup(marker);
}

async function ensureRoutePinFromTransit(transit) {
  if (transit.source === "community") {
    return transit.id;
  }

  if (!dbClient || !currentUser) {
    return null;
  }

  const sharedType = getSharedPinType(transit.type);
  const sharedName = truncateText(transit.name || `${sharedType} spot`, 80);
  const existing = [...communityPinsById.values()].find((pin) => {
    const sameName = normalizeOsmText(pin.name) === normalizeOsmText(sharedName);
    const nearby = calculateDistanceMeters(pin.lat, pin.lng, transit.lat, transit.lng) <= 12;
    return sameName && nearby;
  });

  if (existing) {
    return existing.id;
  }

  communityStatus.textContent = `Preparing ${sharedName} as a route point...`;

  const typeCandidates = getRouteImportTypeCandidates(transit.type);
  let importedData = null;
  let lastImportError = null;

  for (const candidateType of typeCandidates) {
    try {
      const docRef = await dbClient.collection("pins").add({
        created_by: currentUser.uid,
        lat: transit.lat,
        lng: transit.lng,
        name: sharedName,
        note: transit.source === "osm" ? "Imported from OpenStreetMap for route connection." : "Imported from built-in Lapit data for route connection.",
        route_name: null,
        status: "unverified",
        type: candidateType,
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
        report_count: 0,
        confirmation_count: 0
      });
      importedData = {
        id: docRef.id,
        created_by: currentUser.uid,
        lat: transit.lat,
        lng: transit.lng,
        name: sharedName,
        note: null,
        route_name: null,
        status: "unverified",
        type: candidateType,
        created_at: new Date().toISOString()
      };
      break;
    } catch (err) {
      lastImportError = err;
      console.warn("Firebase route endpoint import retry:", candidateType, err);
    }
  }

  if (!importedData) {
    communityStatus.textContent = `Could not prepare ${sharedName}: ${lastImportError?.message || "Firebase rejected the pin type"}.`;
    console.error("Firebase route endpoint import error:", lastImportError);
    return null;
  }

  const importedPin = {
    ...importedData,
    confirmation_count: 0,
    report_count: 0
  };

  communityPinsById.set(importedPin.id, importedPin);
  latestCommunityPins = [
    importedPin,
    ...latestCommunityPins.filter((pin) => pin.id !== importedPin.id)
  ];
  addCommunityPinMarker(importedPin);
  renderCommunityPins(latestCommunityPins);
  updateCommunityFilterStatus();

  return importedPin.id;
}

async function handleTransitRouteSelection(transit) {
  const pinId = await ensureRoutePinFromTransit(transit);

  if (!pinId) {
    return;
  }

  handleCommunityPinSelection(pinId);
}

function scheduleOsmTransitLoad() {
  window.clearTimeout(osmFetchTimer);
  osmFetchTimer = window.setTimeout(loadOsmTransitInView, 450);
}

async function loadOsmTransitInView() {
  const zoom = map.getZoom();

  if (zoom < 11) {
    latestOsmTransitItems = [];
    clearOsmTransitMarkers();
    updateCommunityFilterStatus();

    if (userLatLng) {
      updateNearestTransitList({ moveMap: false });
    }

    return;
  }

  const bounds = map.getBounds();
  const bbox = [
    bounds.getSouth().toFixed(5),
    bounds.getWest().toFixed(5),
    bounds.getNorth().toFixed(5),
    bounds.getEast().toFixed(5)
  ].join(",");
  const requestId = ++osmRequestId;
  const query = `
    [out:json][timeout:25];
    (
      nwr["railway"~"station|halt|tram_stop|subway_entrance"](${bbox});
      nwr["public_transport"~"station|platform|stop_position"](${bbox});
      nwr["highway"="bus_stop"](${bbox});
      nwr["amenity"~"bus_station|ferry_terminal"](${bbox});
      nwr["name"~"jeepney|jeep|tricycle|toda|uv express|van terminal",i](${bbox});
    );
    out center 180;
  `;

  try {
    const response = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      body: query
    });

    if (!response.ok) {
      throw new Error(`Overpass ${response.status}`);
    }

    const payload = await response.json();

    if (requestId !== osmRequestId) {
      return;
    }

    const osmItems = payload.elements
      .map((element) => {
        const latLng = getOsmElementLatLng(element);

        if (!latLng) {
          return null;
        }

        const type = getOsmTransitType(element.tags || {});
        const name = getOsmTransitName(element, type);

        return {
          id: `osm-${element.type}-${element.id}`,
          lat: latLng.lat,
          lng: latLng.lng,
          name,
          source: "osm",
          type
        };
      })
      .filter(Boolean);

    latestOsmTransitItems = dedupeTransitItems(osmItems)
      .filter((item) => {
        const duplicatesBuiltIn = stations.some((station) => areTransitDuplicates(station, item));
        const duplicatesCommunity = [...communityPinsById.values()].some((pin) => areTransitDuplicates(pin, item));

        return !duplicatesBuiltIn && !duplicatesCommunity;
      });

    renderOsmTransitMarkers(latestOsmTransitItems);
    updateCommunityFilterStatus();

    if (userLatLng) {
      updateNearestTransitList({ moveMap: false });
    }
  } catch (error) {
    console.error("OpenStreetMap transit load error:", error);
  }
}

function focusStation(stationName) {
  const marker = stationMarkers.get(stationName);
  const station = stations.find((stationItem) => stationItem.name === stationName);

  if (!marker) {
    return;
  }

  if (station && showConnectedRoutesForTransitSpot(station)) {
    map.flyTo(marker.getLatLng(), 16, {
      duration: 0.7
    });
    return;
  }

  clearActiveRouteLines();
  map.flyTo(marker.getLatLng(), 16, {
    duration: 0.7
  });
  openSpotPopup(marker);
}

function focusCommunityPin(pinId) {
  const marker = communityMarkers.get(pinId);

  if (!marker) {
    return;
  }

  map.flyTo(marker.getLatLng(), 16, {
    duration: 0.7
  });

  if (getConnectedRoutesForPin(pinId).length) {
    showConnectedRoutesForPin(pinId);
    return;
  }

  openSpotPopup(marker);
}

function handleCommunityPinSelection(pinId) {
  if (!createRouteMode) {
    focusCommunityPin(pinId);
    return;
  }

  const pin = communityPinsById.get(pinId);

  if (!pin) {
    return;
  }

  if (!pendingRouteStartId) {
    pendingRouteStartId = pinId;
    setSelectedRouteStartPin(pinId);
    const rl2 = addRouteButton.querySelector(".action-label"); if (rl2) rl2.textContent = "Pick end";
    communityStatus.textContent = `Start selected: ${pin.name}. Choose the destination.`;
    setRouteMode(`Start selected: ${pin.name}. Now choose the destination.`, "Step 2 of 2", "Choose destination");
    renderCommunityPins(latestCommunityPins);
    updateNearestTransitList({ moveMap: false });
    return;
  }

  if (pendingRouteStartId === pinId) {
    communityStatus.textContent = "Choose a different destination pin for this route.";
    return;
  }

  pendingRouteEndId = pinId;
  createRouteMode = false;
  addRouteButton.setAttribute("aria-pressed", "false");
  const rl3 = addRouteButton.querySelector(".action-label"); if (rl3) rl3.textContent = "Route";
  showPendingRoutePreview(communityPinsById.get(pendingRouteStartId), pin);
  setRouteMode(`Previewing: ${communityPinsById.get(pendingRouteStartId).name} to ${pin.name}. Save or cancel this route.`, "Ready to save", "Route preview");
  openRouteDialog(pendingRouteStartId, pendingRouteEndId);
}

function renderNearestStations(transitItems) {
  stationList.innerHTML = "";
  const actionLabel = createRouteMode
    ? (pendingRouteStartId ? "Choose as destination" : "Choose as start")
    : "Show on map";

  transitItems.forEach((station, index) => {
    const item = document.createElement("li");
    item.className = `station-card${index < 3 ? " nearest-top-card" : ""}`;
    const badgeType = getNearestBadgeType(station.type);
    const badgeClass = badgeType.toLowerCase().replaceAll(" ", "-");
    const sourceLabel = station.source === "community" ? "Community pin" : station.type;
    const rankLabel = index < 3 ? index + 1 : "All";

    item.innerHTML = `
      <button class="station-main" type="button" aria-label="${actionLabel}: ${station.name}">
        <div>
          <p class="station-name">${station.name}</p>
          <div class="station-meta">
            <span class="badge ${badgeClass}">${getNearestBadgeIcon(station.type)} ${badgeType}</span>
            <span class="distance">${formatDistance(station.distanceMeters)}</span>
            <span class="distance">${sourceLabel}</span>
          </div>
        </div>
        <span class="rank${index >= 3 ? " all-rank" : ""}" aria-label="${index < 3 ? `Rank ${index + 1}` : "Additional transit"}">${rankLabel}</span>
      </button>
      ${createRouteMode ? `<span class="route-card-hint">${actionLabel}</span>` : `<a class="directions-link" href="${station.directionsUrl}" target="_blank" rel="noopener">Directions</a>`}
    `;

    item.querySelector(".station-main").addEventListener("click", () => {
      if (station.source === "community") {
        handleCommunityPinSelection(station.id);
        return;
      }

      if (createRouteMode) {
        handleTransitRouteSelection(station);
        return;
      }

      if (station.source === "osm") {
        focusOsmTransit(station.id);
        return;
      }

      focusStation(station.name);
    });

    stationList.appendChild(item);
  });
}

function renderCommunityPins(pins) {
  const visiblePins = pins.filter(pinMatchesActiveFilter);
  const actionLabel = createRouteMode
    ? (pendingRouteStartId ? "Choose as destination" : "Choose as start")
    : "Show on map";
  communityList.innerHTML = "";
  syncCommunityMarkerVisibility();

  if (!pins.length) {
    communityList.innerHTML = '<li class="message">No community spots yet. Add the first local sakayan or terminal.</li>';
    return;
  }

  if (!visiblePins.length) {
    communityList.innerHTML = `<li class="message">No ${activePinFilter.toLowerCase()} spots in this filter yet.</li>`;
    return;
  }

  visiblePins.forEach((pin) => {
    const item = document.createElement("li");
    item.className = "community-card";
    const reportText = currentUser ? "Report" : "Sign in to report";
    const statusLabel = pin.status === "approved" ? "Verified" : "Unverified";
    const reportCount = pin.report_count || 0;
    const confirmCount = pin.confirmation_count || 0;
    const isOwner = Boolean(currentUser && pin.created_by === currentUser.uid);
    const canManagePin = isOwner || isAdminUser();
    const directionsUrl = getCommunityPinDirectionsUrl(pin);
    const connectedRouteCount = getConnectedRoutesForPin(pin.id).length;
    const isHighlyTrusted = confirmCount >= 5;

    item.innerHTML = `
      <button class="community-main" type="button" aria-label="${actionLabel}: ${pin.name}">
        <p class="community-name">
          ${pin.name} 
          ${isHighlyTrusted ? '<span class="trusted-badge" title="Highly Trusted Community Pin">✔ Verified</span>' : ''}
        </p>
        <p class="community-meta">${pin.type}${pin.route_name ? ` · ${pin.route_name}` : ""}</p>
        ${pin.operating_hours ? `<p class="community-meta community-rich-data">🕒 ${pin.operating_hours}</p>` : ''}
        ${pin.fare_info ? `<p class="community-meta community-rich-data">💵 ${pin.fare_info}</p>` : ''}
      </button>
      <div class="community-actions">
        <span class="pin-status ${pin.status}">${statusLabel}</span>
        ${isOwner ? '<span class="owner-tag">My pin</span>' : ""}
        <span class="confirm-count">${confirmCount} confirm${confirmCount === 1 ? "" : "s"}</span>
        ${connectedRouteCount ? `<span class="route-count">${connectedRouteCount} connected route${connectedRouteCount === 1 ? "" : "s"}</span>` : ""}
        ${createRouteMode ? `<span class="route-card-hint">${actionLabel}</span>` : `<a class="directions-link community-directions-link" href="${directionsUrl}" target="_blank" rel="noopener">Directions</a>`}
        <button class="confirm-pin-button" type="button" data-pin-id="${pin.id}">${currentUser ? "Confirm" : "Sign in to confirm"}</button>
        <details class="card-more">
          <summary>More</summary>
          <div class="card-more-actions">
            ${currentUser ? `<span class="report-count">${reportCount} report${reportCount === 1 ? "" : "s"}</span>` : ""}
            <button class="report-pin-button" type="button" data-pin-id="${pin.id}">${reportText}</button>
            ${canManagePin ? `<button class="edit-pin-button" type="button" data-pin-id="${pin.id}">Edit</button>` : ""}
            ${canManagePin ? `<button class="delete-pin-button" type="button" data-pin-id="${pin.id}">Delete</button>` : ""}
          </div>
        </details>
      </div>
    `;

    item.querySelector(".community-main").addEventListener("click", () => {
      handleCommunityPinSelection(pin.id);
    });

    communityList.appendChild(item);
  });
}

function addCommunityPinMarker(pin) {
  const directionsUrl = getCommunityPinDirectionsUrl(pin);
  const latLng = [pin.lat, pin.lng];

  const marker = createExactDotMarker(latLng, getTransitMarkerColor(pin.type), {
    radius: 10
  })
    .addTo(map)
    .bindPopup(getCommunityPinPopupHtml(pin, directionsUrl));

  const labelMarker = createMapLabelMarker(latLng, pin.name, "community-label").addTo(map);
  const selectCommunityPin = () => {
    handleCommunityPinSelection(pin.id);
  };

  marker.on("click", selectCommunityPin);

  setRoutePickHover(marker, labelMarker, selectCommunityPin);
  communityMarkers.set(pin.id, marker);
  communityLabelMarkers.set(pin.id, labelMarker);
}

// With Firebase, report_count and confirmation_count are stored directly on each
// document, so these helpers simply extract them from the already-loaded data.
function getReportCounts(pins) {
  return pins.reduce((map, pin) => {
    map.set(pin.id, pin.report_count || 0);
    return map;
  }, new Map());
}

function getConfirmationCounts(pins) {
  return pins.reduce((map, pin) => {
    map.set(pin.id, pin.confirmation_count || 0);
    return map;
  }, new Map());
}

function getRouteReportCounts(routes) {
  return routes.reduce((map, route) => {
    map.set(route.id, route.report_count || 0);
    return map;
  }, new Map());
}

function getRouteConfirmationCounts(routes) {
  return routes.reduce((map, route) => {
    map.set(route.id, route.confirmation_count || 0);
    return map;
  }, new Map());
}

function removePendingPinMarker() {
  if (!pendingPinMarker) {
    return;
  }

  pendingPinMarker.remove();
  pendingPinMarker = null;
}

async function loadCommunityRoutes() {
  if (!dbClient) {
    routeConnections = [...hardcodedRouteConnections];
    return;
  }

  let snapshot;
  try {
    snapshot = await dbClient.collection("community_routes")
      .where("status", "in", ["unverified", "approved"])
      .limit(100)
      .get();
  } catch (error) {
    routeConnections = [...hardcodedRouteConnections];
    console.error("Firebase route load error:", error);
    return;
  }

  const data = snapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .sort((a, b) => (b.created_at?.toMillis?.() || 0) - (a.created_at?.toMillis?.() || 0));
  const reportCounts = getRouteReportCounts(data);
  const confirmationCounts = getRouteConfirmationCounts(data);
  const communityRoutes = data.map((route) => ({
    id: route.id,
    name: route.name,
    type: route.type,
    startPinId: route.from_pin_id,
    endPinId: route.to_pin_id,
    path_points: normalizeRoutePathPoints(route.path_points),
    status: route.status,
    color: route.color || "#dc2626",
    created_by: route.created_by,
    report_count: reportCounts.get(route.id) || 0,
    confirmation_count: confirmationCounts.get(route.id) || 0,
    source: "community"
  }));

  communityRoutesById.clear();
  communityRoutes.forEach((route) => {
    communityRoutesById.set(route.id, route);
  });
  routeConnections = [...hardcodedRouteConnections, ...communityRoutes];
}

async function loadCommunityPins() {
  if (!dbClient) {
    communityStatus.textContent = "Connect Firebase to enable community spots.";
    communityList.innerHTML = '<li class="message">Add your Firebase project config to firebase-config.js.</li>';
    return;
  }

  communityStatus.textContent = "Loading community spots...";

  let snapshot;
  try {
    snapshot = await dbClient.collection("pins")
      .where("status", "in", ["unverified", "approved"])
      .limit(100)
      .get();
  } catch (error) {
    communityStatus.textContent = "Could not load community spots.";
    communityList.innerHTML = '<li class="message error">Firebase is connected, but pins could not be loaded. Check your Firestore rules.</li>';
    console.error("Firebase pin load error:", error);
    return;
  }

  const data = snapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .sort((a, b) => (b.created_at?.toMillis?.() || 0) - (a.created_at?.toMillis?.() || 0));
  const reportCounts = getReportCounts(data);
  const confirmationCounts = getConfirmationCounts(data);
  const pinsWithReports = data.map((pin) => ({
    ...pin,
    report_count: reportCounts.get(pin.id) || 0,
    confirmation_count: confirmationCounts.get(pin.id) || 0,
    created_by: pin.created_by || null
  })).filter(pin => pin.report_count < 3); // Auto-moderation: hide if 3+ reports

  communityMarkers.forEach((marker) => {
    spotPopupMarkers.delete(marker);
    marker.remove();
  });
  communityMarkers.clear();
  communityLabelMarkers.forEach((marker) => marker.remove());
  communityLabelMarkers.clear();
  clearActiveRouteLines();
  communityPinsById.clear();
  communityRoutesById.clear();

  pinsWithReports.forEach((pin) => {
    communityPinsById.set(pin.id, pin);
    addCommunityPinMarker(pin);
  });
  await loadCommunityRoutes();
  latestCommunityPins = pinsWithReports;
  renderCommunityPins(latestCommunityPins);
  updateCommunityFilterStatus();

  if (selectedConnectedRoutePinId && communityPinsById.has(selectedConnectedRoutePinId)) {
    showConnectedRoutesForPin(selectedConnectedRoutePinId);
  }

  if (userLatLng) {
    updateNearestTransitList({ moveMap: false });
  }
}

function getUserLabel(user) {
  return user.email || "Signed in";
}

function isAdminUser(user = currentUser) {
  return Boolean(user?.email && adminEmails.has(user.email.toLowerCase()));
}

function getGuestChoice() {
  try {
    return window.localStorage?.getItem(guestChoiceKey) === "true";
  } catch (_error) {
    return false;
  }
}

function setGuestChoice() {
  try {
    window.localStorage?.setItem(guestChoiceKey, "true");
  } catch (_error) {
    // Some embedded browsers disable localStorage; hiding the overlay still works for this page view.
  }
}

function clearGuestChoice() {
  try {
    window.localStorage?.removeItem(guestChoiceKey);
  } catch (_error) {
    // Ignore storage failures so sign-out still completes.
  }
}

function hideOnboardingOverlay() {
  stopLandingAnimation();
  onboardingOverlay.classList.add("is-hidden");
  onboardingOverlay.setAttribute("aria-hidden", "true");
  refreshMapLayout();
  // Trigger location now that the user is on the map
  if (!userLatLng) {
    requestLocation();
  }
}

function showOnboardingOverlay() {
  onboardingOverlay.classList.remove("is-hidden");
  onboardingOverlay.removeAttribute("aria-hidden");
  refreshMapLayout();
  startLandingAnimation();
}

function shouldShowOnboarding() {
  return !currentUser && !getGuestChoice();
}

function syncOnboardingState() {
  if (shouldShowOnboarding()) {
    showOnboardingOverlay();
    return;
  }

  hideOnboardingOverlay();
}

function updateAuthUi() {
  if (!dbClient) {
    authStatus.textContent = "Guest browsing. Connect Firebase to enable accounts.";
    accountMenuButton.textContent = "Guest mode";
    accountMenuButton.setAttribute("aria-label", "Guest mode account menu");
    authButton.textContent = "Sign in / create account";
    exitGuestButton.hidden = !getGuestChoice();
    syncOnboardingState();
    return;
  }

  if (currentUser) {
    authStatus.textContent = isAdminUser()
      ? `Admin: ${getUserLabel(currentUser)}`
      : getUserLabel(currentUser);
    accountMenuButton.textContent = isAdminUser() ? "Admin" : "Account";
    accountMenuButton.setAttribute("aria-label", isAdminUser() ? "Admin account menu" : "Account menu");
    authButton.textContent = "Sign out";
    exitGuestButton.hidden = true;
    syncOnboardingState();
    return;
  }

  authStatus.textContent = "Guest browsing. Sign in to add, confirm, report, or create routes.";
  accountMenuButton.textContent = "Guest mode";
  accountMenuButton.setAttribute("aria-label", "Guest mode account menu");
  authButton.textContent = "Sign in / create account";
  exitGuestButton.hidden = !getGuestChoice();
  syncOnboardingState();
}

async function initializeAuth() {
  if (!firebaseAuth) {
    updateAuthUi();
    return;
  }

  firebaseAuth.onAuthStateChanged((user) => {
    currentUser = user || null;
    updateAuthUi();
    loadCommunityPins();
  });
}

function openAuthDialog(message = "Use your email and password to sign in or create an account.") {
  authMessage.textContent = message;
  authForm.reset();
  authDialog.showModal();
}

async function signInWithEmailPassword(email, password) {
  if (!firebaseAuth) {
    authMessage.textContent = "Firebase is not connected yet.";
    return;
  }

  authMessage.textContent = "Signing in...";

  try {
    await firebaseAuth.signInWithEmailAndPassword(email, password);
    hideOnboardingOverlay();
    authDialog.close();
  } catch (error) {
    authMessage.textContent = `Could not sign in: ${error.message}`;
    console.error("Firebase sign in error:", error);
  }
}

async function signUpWithEmailPassword(email, password) {
  if (!firebaseAuth) {
    authMessage.textContent = "Firebase is not connected yet.";
    return;
  }

  authMessage.textContent = "Creating account...";

  try {
    await firebaseAuth.createUserWithEmailAndPassword(email, password);
    // Firebase signs the user in immediately after account creation
    hideOnboardingOverlay();
    authDialog.close();
  } catch (error) {
    authMessage.textContent = `Could not create account: ${error.message}`;
    console.error("Firebase sign up error:", error);
  }
}

function openReportDialog(pinId) {
  if (!dbClient) {
    communityStatus.textContent = "Connect Firebase before reporting pins.";
    return;
  }

  if (!currentUser) {
    openAuthDialog("Sign in or create an account to report incorrect community spots.");
    return;
  }

  const pin = communityPinsById.get(pinId);
  currentReportPinId = pinId;
  currentReportRouteId = null;
  reportMessage.textContent = pin ? `Reporting ${pin.name}` : "Tell us what looks wrong.";
  reportForm.reset();
  reportDialog.showModal();
}

function openRouteReportDialog(routeId) {
  if (!dbClient) {
    communityStatus.textContent = "Connect Firebase before reporting routes.";
    return;
  }

  if (!currentUser) {
    openAuthDialog("Sign in or create an account to report incorrect routes.");
    return;
  }

  const route = getRouteById(routeId);
  currentReportRouteId = routeId;
  currentReportPinId = null;
  reportMessage.textContent = route ? `Reporting ${route.name}` : "Tell us what looks wrong.";
  reportForm.reset();
  reportDialog.showModal();
}

async function savePinReport() {
  if ((!currentReportPinId && !currentReportRouteId) || !currentUser || !dbClient) {
    return;
  }

  try {
    if (currentReportRouteId) {
      const docId = `${currentReportRouteId}_${currentUser.uid}`;
      await dbClient.collection("route_reports").doc(docId).set({
        route_id: currentReportRouteId,
        reason: reportReasonInput.value,
        created_by: currentUser.uid,
        created_at: firebase.firestore.FieldValue.serverTimestamp()
      });
      // Increment report count and auto-hide after 3 reports
      await dbClient.runTransaction(async (t) => {
        const routeRef = dbClient.collection("community_routes").doc(currentReportRouteId);
        const routeDoc = await t.get(routeRef);
        if (!routeDoc.exists) return;
        const newCount = (routeDoc.data().report_count || 0) + 1;
        const update = { report_count: newCount };
        if (newCount >= 3 && routeDoc.data().status === "unverified") update.status = "hidden";
        t.update(routeRef, update);
      });
    } else {
      const docId = `${currentReportPinId}_${currentUser.uid}`;
      await dbClient.collection("pin_reports").doc(docId).set({
        pin_id: currentReportPinId,
        reason: reportReasonInput.value,
        created_by: currentUser.uid,
        created_at: firebase.firestore.FieldValue.serverTimestamp()
      });
      // Increment report count and auto-hide after 3 reports
      await dbClient.runTransaction(async (t) => {
        const pinRef = dbClient.collection("pins").doc(currentReportPinId);
        const pinDoc = await t.get(pinRef);
        if (!pinDoc.exists) return;
        const newCount = (pinDoc.data().report_count || 0) + 1;
        const update = { report_count: newCount };
        if (newCount >= 3 && pinDoc.data().status === "unverified") update.status = "hidden";
        t.update(pinRef, update);
      });
    }
    reportDialog.close();
    currentReportPinId = null;
    currentReportRouteId = null;
    communityStatus.textContent = "Report submitted. Thanks for helping keep the map accurate.";
    await loadCommunityPins();
  } catch (error) {
    reportMessage.textContent = `Report was not saved: ${error.message}`;
    console.error("Firebase report save error:", error);
  }
}

function openPinDialog(latlng) {
  editingPinId = null;
  pendingPinLatLng = latlng;
  pinDialogTitle.textContent = "Add Community Spot";
  pinLocation.textContent = `Pinned at ${latlng.lat.toFixed(5)}, ${latlng.lng.toFixed(5)}`;
  savePinButton.textContent = "Save pin";
  deletePinButton.hidden = true;
  pinForm.reset();
  pinDialog.showModal();
}

function findPossibleDuplicatePin(pinPayload) {
  const normalizedName = pinPayload.name.trim().toLowerCase();

  return [...communityPinsById.values()].find((pin) => {
    if (pin.id === editingPinId) {
      return false;
    }

    const sameName = pin.name.trim().toLowerCase() === normalizedName;
    const nearby = calculateDistanceMeters(pin.lat, pin.lng, pinPayload.lat, pinPayload.lng) <= 20;

    return sameName && nearby;
  });
}

function openEditPinDialog(pinId) {
  const pin = communityPinsById.get(pinId);

  if (!pin || !currentUser || (pin.created_by !== currentUser.uid && !isAdminUser())) {
    return;
  }

  editingPinId = pinId;
  pendingPinLatLng = { lat: pin.lat, lng: pin.lng };
  pinDialogTitle.textContent = "Edit Community Spot";
  pinLocation.textContent = `Pinned at ${pin.lat.toFixed(5)}, ${pin.lng.toFixed(5)}`;
  savePinButton.textContent = "Save changes";
  deletePinButton.hidden = false;
  pinTypeInput.value = pin.type;
  pinNameInput.value = pin.name;
  pinRouteInput.value = pin.route_name || "";
  pinHoursInput.value = pin.operating_hours || "";
  pinFareInput.value = pin.fare_info || "";
  pinNoteInput.value = pin.note || "";
  pinDialog.showModal();
}

function showPinLocationConfirmation(latlng) {
  pendingPinLatLng = latlng;
  removePendingPinMarker();

  pendingPinMarker = createExactDotMarker([latlng.lat, latlng.lng], markerColors.pending, {
    pane: "user-location-pane",
    radius: 12,
    weight: 4
  })
    .addTo(map)
    .bindPopup("Confirm this pin location")
    .openPopup();

  confirmPinLocation.textContent = `Selected ${latlng.lat.toFixed(5)}, ${latlng.lng.toFixed(5)}`;
  confirmPinDialog.showModal();
}

async function saveCommunityPin() {
  if (!pendingPinLatLng || !dbClient || !currentUser) {
    return false;
  }

  const pinPayload = {
    type: pinTypeInput.value,
    name: pinNameInput.value.trim(),
    route_name: pinRouteInput.value.trim() || null,
    operating_hours: pinHoursInput.value.trim() || null,
    fare_info: pinFareInput.value.trim() || null,
    note: pinNoteInput.value.trim() || null,
    lat: pendingPinLatLng.lat,
    lng: pendingPinLatLng.lng
  };

  const possibleDuplicate = findPossibleDuplicatePin(pinPayload);

  if (possibleDuplicate) {
    pinLocation.textContent = `Possible duplicate: ${possibleDuplicate.name}. Adjust the location or use a clearer name.`;
    return false;
  }

  // --- Anti-spam: proximity check (soft warning if > 50 km from user) ---
  if (userLatLng && !isAdminUser() && savePinButton.dataset.proximityWarned !== "true") {
    const [uLat, uLng] = userLatLng;
    const dLat = (pinPayload.lat - uLat) * (Math.PI / 180);
    const dLng = (pinPayload.lng - uLng) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) ** 2 +
      Math.cos(uLat * Math.PI / 180) * Math.cos(pinPayload.lat * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
    const distanceKm = 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    if (distanceKm > 50) {
      pinLocation.textContent = `⚠️ This pin is ${Math.round(distanceKm)} km from your location. Only add spots you can personally verify.`;
      savePinButton.dataset.proximityWarned = "true";
      savePinButton.textContent = "Save anyway";
      return false;
    }
  }
  // Reset proximity warning flag on successful save attempt
  savePinButton.dataset.proximityWarned = "";

  try {
    if (editingPinId) {
      await dbClient.collection("pins").doc(editingPinId).update(pinPayload);
    } else {
      await dbClient.collection("pins").add({
        ...pinPayload,
        created_by: currentUser.uid,
        status: "unverified",
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
        report_count: 0,
        confirmation_count: 0
      });
    }
    communityStatus.textContent = editingPinId ? "Pin updated." : "Pin saved.";
    editingPinId = null;
    await loadCommunityPins();
    return true;
  } catch (error) {
    communityStatus.textContent = editingPinId ? "Could not update pin." : "Could not save pin.";
    communityList.innerHTML = `<li class="message error">${editingPinId ? "Pin was not updated" : "Pin was not saved"}: ${error.message}</li>`;
    pinLocation.textContent = `${editingPinId ? "Pin was not updated" : "Pin was not saved"}: ${error.message}`;
    console.error("Firebase pin save error:", error);
    return false;
  }
}

function openRouteDialog(startPinId, endPinId) {
  const startPin = communityPinsById.get(startPinId);
  const endPin = communityPinsById.get(endPinId);

  if (!startPin || !endPin) {
    communityStatus.textContent = "Could not connect route. Select two visible transit spots.";
    return;
  }

  editingRouteId = null;
  pendingRouteStartId = startPinId;
  pendingRouteEndId = endPinId;
  setSelectedRouteStartPin(startPinId);
  routeDialogTitle.textContent = "Save Route";
  routeMessage.textContent = `Review this route: ${startPin.name} to ${endPin.name}.`;
  routeNameInput.value = `${startPin.name} to ${endPin.name}`;
  routeTypeInput.value = "Jeepney";
  routeDraftPathPoints = [];
  routePathPickMode = false;
  updateRoutePathStatus();
  saveRouteButton.textContent = "Save route";
  deleteRouteButton.hidden = true;
  routeDialog.showModal();
}

function openEditRouteDialog(routeId) {
  const route = getRouteById(routeId);

  if (!route || !canManageRoute(route)) {
    return;
  }

  const startPin = communityPinsById.get(route.startPinId);
  const endPin = communityPinsById.get(route.endPinId);

  editingRouteId = routeId;
  pendingRouteStartId = route.startPinId;
  pendingRouteEndId = route.endPinId;
  routeDialogTitle.textContent = "Edit Transit Connection";
  routeMessage.textContent = `${startPin?.name || "Start pin"} to ${endPin?.name || "End pin"}`;
  routeNameInput.value = route.name;
  routeTypeInput.value = route.type;
  routeDraftPathPoints = normalizeRoutePathPoints(route.path_points).slice(1, -1);
  routePathPickMode = false;
  updateRoutePathStatus();
  saveRouteButton.textContent = "Save changes";
  deleteRouteButton.hidden = false;
  routeDialog.showModal();
}

function beginRoutePathPointPick() {
  const startPin = communityPinsById.get(pendingRouteStartId);
  const endPin = communityPinsById.get(pendingRouteEndId);

  if (!startPin || !endPin) {
    routeMessage.textContent = "Choose a start and destination before tracing a path.";
    return;
  }

  routePathPickMode = true;
  routeDialog.close();
  showPendingRoutePreview(startPin, endPin);
  setRouteMode("Tap the map where this route bends. The point will be added before the destination.", "Trace path", "Add path point");
  communityStatus.textContent = "Tap the map to add a route path point.";
}

function resetRoutePath() {
  const startPin = communityPinsById.get(pendingRouteStartId);
  const endPin = communityPinsById.get(pendingRouteEndId);

  routeDraftPathPoints = [];
  updateRoutePathStatus();

  if (startPin && endPin) {
    showPendingRoutePreview(startPin, endPin);
  }
}

function findPossibleDuplicateRoute(startPinId, endPinId) {
  return routeConnections.find((route) => {
    if (route.id === editingRouteId || route.source !== "community") {
      return false;
    }

    const sameDirection = route.startPinId === startPinId && route.endPinId === endPinId;
    const reverseDirection = route.startPinId === endPinId && route.endPinId === startPinId;
    return sameDirection || reverseDirection;
  });
}

async function saveCommunityRoute() {
  if (!pendingRouteStartId || !pendingRouteEndId || !dbClient || !currentUser) {
    return false;
  }

  const duplicateRoute = findPossibleDuplicateRoute(pendingRouteStartId, pendingRouteEndId);

  if (duplicateRoute) {
    routeMessage.textContent = `Possible duplicate: ${duplicateRoute.name}.`;
    return false;
  }

  const routePayload = {
    name: routeNameInput.value.trim(),
    type: routeTypeInput.value,
    from_pin_id: pendingRouteStartId,
    to_pin_id: pendingRouteEndId,
    color: routeColors[routeTypeInput.value] || markerColors.bus,
    path_points: getRouteDraftPath(
      communityPinsById.get(pendingRouteStartId),
      communityPinsById.get(pendingRouteEndId)
    )
  };
  const savedStartPinId = pendingRouteStartId;
  const savedStartPin = communityPinsById.get(savedStartPinId);
  const shouldKeepTerminalSelected = !editingRouteId && savedStartPin && isMultiRouteTerminalType(savedStartPin.type);

  try {
    if (editingRouteId) {
      await dbClient.collection("community_routes").doc(editingRouteId).update(routePayload);
    } else {
      await dbClient.collection("community_routes").add({
        ...routePayload,
        created_by: currentUser.uid,
        status: "unverified",
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
        report_count: 0,
        confirmation_count: 0
      });
    }
  } catch (error) {
    routeMessage.textContent = `Route was not saved: ${error.message}`;
    console.error("Firebase route save error:", error);
    return false;
  }

  routeDialog.close();
  editingRouteId = null;
  pendingRouteEndId = null;
  routePathPickMode = false;
  await loadCommunityPins();
  clearActiveRouteLines();

  if (shouldKeepTerminalSelected) {
    createRouteMode = true;
    pendingRouteStartId = savedStartPinId;
    routeDraftPathPoints = [];
    updateRoutePathStatus();
    addRouteButton.setAttribute("aria-pressed", "true");
    const rl4 = addRouteButton.querySelector(".action-label"); if (rl4) rl4.textContent = "Pick end";
    setSelectedRouteStartPin(savedStartPinId);
    setRouteMode(`Route saved from ${savedStartPin.name}. Choose another destination to add another route from this terminal.`, "Step 2 of 2", "Choose another destination");
    communityStatus.textContent = `Route saved. ${savedStartPin.name} is still selected for another route.`;
    renderCommunityPins(latestCommunityPins);
    updateNearestTransitList({ moveMap: false });
    return true;
  }

  pendingRouteStartId = null;
  routeDraftPathPoints = [];
  updateRoutePathStatus();
  clearSelectedRouteStartPin();
  setRouteMode(null);
  communityStatus.textContent = "Route saved.";
  return true;
}

async function deleteCommunityRoute(routeId) {
  const route = getRouteById(routeId);

  if (!route || !canManageRoute(route)) {
    return;
  }

  const confirmed = window.confirm(`Delete ${route.name}? This cannot be undone.`);

  if (!confirmed) {
    return;
  }

  try {
    await dbClient.collection("community_routes").doc(routeId).delete();
    clearActiveRouteLines();
    communityStatus.textContent = "Route deleted.";
    await loadCommunityPins();
  } catch (error) {
    communityStatus.textContent = `Could not delete route: ${error.message}`;
  }
}

async function deleteOwnPin(pinId) {
  const pin = communityPinsById.get(pinId);

  if (!pin || !currentUser || (pin.created_by !== currentUser.uid && !isAdminUser())) {
    return;
  }

  const confirmed = window.confirm(`Delete ${pin.name}? This cannot be undone.`);

  if (!confirmed) {
    return;
  }

  try {
    await dbClient.collection("pins").doc(pinId).delete();
    communityStatus.textContent = "Pin deleted.";
    await loadCommunityPins();
  } catch (error) {
    communityStatus.textContent = "Could not delete pin.";
  }
}

async function confirmCommunityPin(pinId) {
  if (!dbClient) {
    communityStatus.textContent = "Connect Firebase before confirming pins.";
    return;
  }

  if (!currentUser) {
    openAuthDialog("Sign in or create an account to confirm accurate community spots.");
    return;
  }

  const pin = communityPinsById.get(pinId);

  if (pin && pin.created_by === currentUser.uid) {
    communityStatus.textContent = "You cannot confirm your own pin.";
    return;
  }

  try {
    const docId = `${pinId}_${currentUser.uid}`;
    await dbClient.collection("pin_confirmations").doc(docId).set({
      pin_id: pinId,
      created_by: currentUser.uid,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    });
    // Increment confirmation count and auto-approve after 3 confirmations
    await dbClient.runTransaction(async (t) => {
      const pinRef = dbClient.collection("pins").doc(pinId);
      const pinDoc = await t.get(pinRef);
      if (!pinDoc.exists) return;
      const newCount = (pinDoc.data().confirmation_count || 0) + 1;
      const update = { confirmation_count: newCount };
      if (newCount >= 3 && pinDoc.data().status === "unverified") update.status = "approved";
      t.update(pinRef, update);
    });
    communityStatus.textContent = "Pin confirmed. Thanks for helping verify the map.";
    await loadCommunityPins();
  } catch (error) {
    communityStatus.textContent = "Confirmation was not saved. You may have already confirmed this pin.";
    console.error("Firebase pin confirm error:", error);
  }
}

async function confirmCommunityRoute(routeId) {
  if (!dbClient) {
    communityStatus.textContent = "Connect Firebase before confirming routes.";
    return;
  }

  if (!currentUser) {
    openAuthDialog("Sign in or create an account to confirm accurate routes.");
    return;
  }

  const route = getRouteById(routeId);

  if (!route || route.source !== "community") {
    return;
  }

  if (route.created_by === currentUser.uid) {
    communityStatus.textContent = "You cannot confirm your own route.";
    return;
  }

  try {
    const docId = `${routeId}_${currentUser.uid}`;
    await dbClient.collection("route_confirmations").doc(docId).set({
      route_id: routeId,
      created_by: currentUser.uid,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    });
    // Increment confirmation count and auto-approve after 3 confirmations
    await dbClient.runTransaction(async (t) => {
      const routeRef = dbClient.collection("community_routes").doc(routeId);
      const routeDoc = await t.get(routeRef);
      if (!routeDoc.exists) return;
      const newCount = (routeDoc.data().confirmation_count || 0) + 1;
      const update = { confirmation_count: newCount };
      if (newCount >= 3 && routeDoc.data().status === "unverified") update.status = "approved";
      t.update(routeRef, update);
    });
    const selectedPinId = route.startPinId;
    communityStatus.textContent = "Route confirmed. Thanks for helping verify the map.";
    await loadCommunityPins();
    showConnectedRoutesForPin(selectedPinId);
  } catch (error) {
    communityStatus.textContent = `Confirmation was not saved: ${error.message}`;
    console.error("Firebase route confirm error:", error);
  }
}

function showLocationError() {
  statusText.textContent = "Location is off. You can still browse transit spots.";
  stationList.innerHTML = `
    <li class="message">
      <strong>Location services are off.</strong>
      Enable location to rank the nearest transit spots, or browse the map manually.
    </li>
  `;
}

function updateNearestTransitList(options = {}) {
  if (!userLatLng) {
    return;
  }

  const shouldMoveMap = options.moveMap ?? !createRouteMode;
  const [userLat, userLng] = userLatLng;
  const userPoint = [userLat, userLng];

  const builtInCandidates = stations
    .map((station) => ({
      ...station,
      source: "built-in",
      distanceMeters: calculateDistanceMeters(userLat, userLng, station.lat, station.lng),
      directionsUrl: getDirectionsUrl(userLat, userLng, station)
    }));

  const communityCandidates = [...communityPinsById.values()]
    .map((pin) => ({
      ...pin,
      source: "community",
      distanceMeters: calculateDistanceMeters(userLat, userLng, pin.lat, pin.lng),
      directionsUrl: getCommunityPinDirectionsUrl(pin)
    }));

  const osmCandidates = latestOsmTransitItems
    .map((item) => ({
      ...item,
      distanceMeters: calculateDistanceMeters(userLat, userLng, item.lat, item.lng),
      directionsUrl: getBuiltInStationDirectionsUrl(item)
    }));

  const sortedTransit = dedupeTransitItems([...builtInCandidates, ...osmCandidates, ...communityCandidates])
    .sort((a, b) => a.distanceMeters - b.distanceMeters);
  const nearestStations = sortedTransit.slice(0, 3);

  if (shouldMoveMap) {
    const bounds = L.latLngBounds([
      userPoint,
      ...nearestStations.map((station) => [station.lat, station.lng])
    ]);

    map.fitBounds(bounds, {
      paddingTopLeft: [28, 28],
      paddingBottomRight: [28, 180],
      maxZoom: 15
    });
    refreshMapLayout();
  }

  const limit = 15;
  const displayedTransit = sortedTransit.slice(0, limit);
  const totalCount = sortedTransit.length;

  statusText.textContent = totalCount > limit
    ? `Showing nearest ${limit} of ${totalCount} transit spots.`
    : `Showing all ${totalCount} transit spots, sorted by distance.`;

  if (nearbySummaryPill) {
    const nearbyRadiusMeters = 2000; // 2km
    const nearbyItems = sortedTransit.filter(item => item.distanceMeters <= nearbyRadiusMeters);
    
    if (nearbyItems.length > 0) {
      const counts = {};
      nearbyItems.forEach(item => {
        let typeLabel = item.type;
        if (trainPinTypes.has(item.type)) typeLabel = "Train";
        else if (busPinTypes.has(item.type)) typeLabel = "Bus";
        else if (jeepneyPinTypes.has(item.type)) typeLabel = "Jeepney";
        else if (uvVanPinTypes.has(item.type)) typeLabel = "UV Express";
        
        counts[typeLabel] = (counts[typeLabel] || 0) + 1;
      });

      const countStrings = Object.entries(counts)
        .sort((a, b) => b[1] - a[1]) // Highest count first
        .slice(0, 3) // Top 3 categories
        .map(([type, count]) => `<span>${count}</span> ${type}${count > 1 && type !== 'UV Express' && !type.endsWith('s') ? 's' : ''}`);
      
      let summaryText = countStrings.join(', ');
      if (Object.keys(counts).length > 3) {
        summaryText += ', etc.';
      }

      nearbySummaryPill.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        ${summaryText} Near You
      `;
      nearbySummaryPill.classList.remove("is-hidden");
    } else {
      nearbySummaryPill.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        Terminal and Transit Spots are far away from you.
      `;
      nearbySummaryPill.classList.remove("is-hidden");
    }
  }
    
  renderNearestStations(displayedTransit);
}

function showNearestStations(position) {
  const userLat = position.coords.latitude;
  const userLng = position.coords.longitude;
  const accuracyMeters = position.coords.accuracy;
  const userPoint = [userLat, userLng];
  userLatLng = userPoint;

  map.setView(userPoint, 15);

  if (userMarker) {
    userMarker.setLatLng(userPoint);
  } else {
    userMarker = createExactDotMarker(userPoint, markerColors.user, {
      pane: "user-location-pane",
      radius: 11
    })
      .addTo(map)
      .bindPopup("<div class='spot-popup-card user-popup-card'>You are here</div>");
  }

  if (Number.isFinite(accuracyMeters)) {
    if (userAccuracyCircle) {
      userAccuracyCircle.setLatLng(userPoint);
      userAccuracyCircle.setRadius(accuracyMeters);
    } else {
      userAccuracyCircle = L.circle(userPoint, {
        radius: accuracyMeters,
        color: "#0ea5e9",
        weight: 1,
        opacity: 0.5,
        fillColor: "#0ea5e9",
        fillOpacity: 0.12,
        interactive: false
      }).addTo(map);
    }
  }

  renderBuiltInStationMarkers();
  updateNearestTransitList({ moveMap: true });
}

function requestLocation() {
  if (!navigator.geolocation) {
    showLocationError();
    return;
  }

  navigator.geolocation.getCurrentPosition(showNearestStations, showLocationError, {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 60000
  });
}

function jumpToCurrentLocation() {
  if (userLatLng && userMarker) {
    map.flyTo(userLatLng, 16, {
      duration: 0.7
    });
    userMarker.openPopup();
    statusText.textContent = "Centered on your current location.";
    return;
  }

  statusText.textContent = "Finding your current location...";
  requestLocation();
}

addPinButton.addEventListener("click", async () => {
  if (!dbClient) {
    communityStatus.textContent = "Connect Firebase before adding community spots.";
    communityList.innerHTML = '<li class="message">Add your Firebase config to firebase-config.js, then reload.</li>';
    return;
  }

  if (!currentUser) {
    openAuthDialog("Sign in or create an account to add community spots. You can keep browsing as a guest.");
    return;
  }

  // --- Anti-spam: account age check (must be at least 1 hour old) ---
  const creationTime = new Date(currentUser.metadata.creationTime).getTime();
  const accountAgeMs = Date.now() - creationTime;
  const ONE_HOUR_MS = 60 * 60 * 1000;
  if (accountAgeMs < ONE_HOUR_MS && !isAdminUser()) {
    const minutesLeft = Math.ceil((ONE_HOUR_MS - accountAgeMs) / 60000);
    communityStatus.textContent = `New accounts can add spots after 1 hour. Ready in ${minutesLeft} min.`;
    return;
  }

  // --- Anti-spam: rate limit (max 5 pins per user per 24 hours) ---
  if (!isAdminUser()) {
    try {
      const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
      const recentSnap = await dbClient
        .collection("pins")
        .where("created_by", "==", currentUser.uid)
        .where("created_at", ">=", oneDayAgo)
        .get();
      if (recentSnap.size >= 5) {
        communityStatus.textContent = "You've reached the 5 pin limit per 24 hours. Try again tomorrow.";
        return;
      }
    } catch (_err) {
      // If rate limit check fails, allow the action rather than block
    }
  }

  createRouteMode = false;
  pendingRouteStartId = null;
  pendingRouteEndId = null;
  resetRouteMode();
  addPinMode = !addPinMode;
  addPinButton.setAttribute("aria-pressed", String(addPinMode));
  const addPinLabel = addPinButton.querySelector(".action-label");
  if (addPinLabel) { addPinLabel.textContent = addPinMode ? "Tap map" : "Add Pin"; }
  communityStatus.textContent = addPinMode ? "Tap the map where the transit spot should go." : "Community spots are visible to everyone.";

  if (!addPinMode) {
    removePendingPinMarker();
  }
});

addRouteButton.addEventListener("click", () => {
  if (!dbClient) {
    communityStatus.textContent = "Connect Firebase before creating community routes.";
    return;
  }

  if (!currentUser) {
    openAuthDialog("Sign in or create an account to create community routes. Guests can keep browsing.");
    return;
  }

  addPinMode = false;
  removePendingPinMarker();
  addPinButton.setAttribute("aria-pressed", "false");
  const fallbackLabel = addPinButton.querySelector(".action-label");
  if (fallbackLabel) { fallbackLabel.textContent = "Add Pin"; }
  createRouteMode = !createRouteMode;
  pendingRouteStartId = null;
  pendingRouteEndId = null;
  addRouteButton.setAttribute("aria-pressed", String(createRouteMode));
  const addRouteLabel = addRouteButton.querySelector(".action-label");
  if (addRouteLabel) addRouteLabel.textContent = createRouteMode ? "Pick start" : "Route";

  if (createRouteMode) {
    clearSelectedRouteStartPin();
    clearActiveRouteLines();
    setRouteMode("Choose any visible transit spot on the map or from the list.", "Step 1 of 2", "Choose starting point");
    communityStatus.textContent = "Route creation started. Choose a starting point.";
  } else {
    resetRouteMode();
    clearActiveRouteLines();
  }
});

cancelRouteModeButton.addEventListener("click", () => {
  resetRouteMode();
  clearActiveRouteLines();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activePinFilter = button.dataset.filter || "All";

    filterButtons.forEach((filterButton) => {
      filterButton.classList.toggle("is-active", filterButton === button);
    });

    renderCommunityPins(latestCommunityPins);
    updateCommunityFilterStatus();
  });
});

function setAccountMenuOpen(isOpen) {
  accountMenu.hidden = !isOpen;
  accountMenuButton.setAttribute("aria-expanded", String(isOpen));
}

function syncLegendDisclosure() {
  if (!mapLegend) {
    return;
  }

  mapLegend.open = window.matchMedia("(min-width: 900px)").matches;
}

function openLegalPage(pageKey) {
  const activePage = [...legalPages].find((page) => page.dataset.legalContent === pageKey) || legalPages[0];

  if (!activePage) {
    return;
  }

  legalPages.forEach((page) => {
    page.classList.toggle("is-active", page === activePage);
  });

  legalDialogTitle.textContent = activePage.querySelector("h3")?.textContent || "Legal";
  setAccountMenuOpen(false);
  legalDialog.showModal();
}

accountMenuButton.addEventListener("click", () => {
  setAccountMenuOpen(accountMenu.hidden);
});

document.addEventListener("click", (event) => {
  if (!accountMenu.contains(event.target) && !accountMenuButton.contains(event.target)) {
    setAccountMenuOpen(false);
  }
});

window.addEventListener("resize", syncLegendDisclosure);
syncLegendDisclosure();

authButton.addEventListener("click", async () => {
  if (!firebaseAuth) {
    communityStatus.textContent = "Connect Firebase before signing in.";
    return;
  }

  if (currentUser) {
    clearGuestChoice();
    await firebaseAuth.signOut();
    setAccountMenuOpen(false);
    return;
  }

  setAccountMenuOpen(false);
  openAuthDialog();
});

onboardingSignInButton.addEventListener("click", () => {
  if (!firebaseAuth) {
    openAuthDialog("Firebase is not connected yet.");
    return;
  }

  openAuthDialog("Use your email and password to sign in or create an account.");
});

onboardingGuestButton.addEventListener("click", () => {
  setGuestChoice();
  hideOnboardingOverlay();
  updateAuthUi();
});

exitGuestButton.addEventListener("click", () => {
  clearGuestChoice();
  setAccountMenuOpen(false);
  showOnboardingOverlay();
  updateAuthUi();
});

legalLinkButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openLegalPage(button.dataset.legalPage);
  });
});

legalCloseButton.addEventListener("click", () => {
  legalDialog.close();
});

authCancelButton.addEventListener("click", () => {
  setGuestChoice();
  hideOnboardingOverlay();
  authDialog.close();
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await signInWithEmailPassword(authEmailInput.value.trim(), authPasswordInput.value);
});

authSignUpButton.addEventListener("click", async () => {
  if (!authForm.reportValidity()) {
    return;
  }

  await signUpWithEmailPassword(authEmailInput.value.trim(), authPasswordInput.value);
});

authForgotButton.addEventListener("click", async () => {
  const email = authEmailInput.value.trim();
  if (!email) {
    authMessage.textContent = "Enter your email address above, then tap Forgot password.";
    authEmailInput.focus();
    return;
  }

  if (!firebaseAuth) {
    authMessage.textContent = "Firebase is not connected.";
    return;
  }

  try {
    await firebaseAuth.sendPasswordResetEmail(email);
    authMessage.textContent = `Reset link sent to ${email}. Check your inbox (and spam folder).`;
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      authMessage.textContent = "No account found with that email. Try creating one.";
    } else {
      authMessage.textContent = `Could not send reset email: ${error.message}`;
    }
  }
});

map.on("click", (event) => {
  if (routePathPickMode) {
    const startPin = communityPinsById.get(pendingRouteStartId);
    const endPin = communityPinsById.get(pendingRouteEndId);

    routeDraftPathPoints.push({
      lat: event.latlng.lat,
      lng: event.latlng.lng
    });
    routePathPickMode = false;
    updateRoutePathStatus();

    if (startPin && endPin) {
      showPendingRoutePreview(startPin, endPin);
    }

    setRouteMode("Path point added. Add another point or save the route.", "Ready to save", "Route path");
    routeDialog.showModal();
    return;
  }

  if (!addPinMode) {
    map.getContainer().classList.remove("is-popup-open");
    return;
  }

  addPinMode = false;
  addPinButton.setAttribute("aria-pressed", "false");
  const fallbackLabel1 = addPinButton.querySelector(".action-label");
  if (fallbackLabel1) { fallbackLabel1.textContent = "Add Pin"; }
  showPinLocationConfirmation(event.latlng);
});

rejectPinLocationButton.addEventListener("click", () => {
  confirmPinDialog.close();
  removePendingPinMarker();
  pendingPinLatLng = null;
  addPinMode = true;
  addPinButton.setAttribute("aria-pressed", "true");
  const fallbackLabel2 = addPinButton.querySelector(".action-label");
  if (fallbackLabel2) { fallbackLabel2.textContent = "Tap map"; }
  communityStatus.textContent = "Tap the map again to choose a better pin location.";
});

confirmPinLocationButton.addEventListener("click", () => {
  confirmPinDialog.close();
  openPinDialog(pendingPinLatLng);
});

cancelPinButton.addEventListener("click", () => {
  pinDialog.close();
  removePendingPinMarker();
  pendingPinLatLng = null;
  editingPinId = null;
});

cancelRouteButton.addEventListener("click", () => {
  routeDialog.close();
  editingRouteId = null;
  routePathPickMode = false;
  routeDraftPathPoints = [];
  resetRouteMode();
  clearActiveRouteLines();
});

addRoutePathPointButton.addEventListener("click", beginRoutePathPointPick);
resetRoutePathButton.addEventListener("click", resetRoutePath);

pinForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const wasSaved = await saveCommunityPin();

  if (!wasSaved) {
    return;
  }

  pinDialog.close();
  removePendingPinMarker();
  pendingPinLatLng = null;
  editingPinId = null;
});

routeForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await saveCommunityRoute();
});

deletePinButton.addEventListener("click", async () => {
  if (!editingPinId) {
    return;
  }

  const pinId = editingPinId;
  pinDialog.close();
  editingPinId = null;
  await deleteOwnPin(pinId);
});

deleteRouteButton.addEventListener("click", async () => {
  if (!editingRouteId) {
    return;
  }

  const routeId = editingRouteId;
  routeDialog.close();
  editingRouteId = null;
  await deleteCommunityRoute(routeId);
});

myLocationButton.addEventListener("click", jumpToCurrentLocation);

reportCancelButton.addEventListener("click", () => {
  currentReportPinId = null;
  currentReportRouteId = null;
  reportDialog.close();
});

reportForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await savePinReport();
});

document.addEventListener("click", (event) => {
  const reportButton = event.target.closest(".report-pin-button");

  if (reportButton && reportButton.dataset.pinId) {
    openReportDialog(reportButton.dataset.pinId);
    return;
  }

  const confirmButton = event.target.closest(".confirm-pin-button");

  if (confirmButton && confirmButton.dataset.pinId) {
    confirmCommunityPin(confirmButton.dataset.pinId);
    return;
  }

  const editButton = event.target.closest(".edit-pin-button");

  if (editButton && editButton.dataset.pinId) {
    openEditPinDialog(editButton.dataset.pinId);
    return;
  }

  const deleteButton = event.target.closest(".delete-pin-button");

  if (deleteButton && deleteButton.dataset.pinId) {
    deleteOwnPin(deleteButton.dataset.pinId);
    return;
  }

  const reportRouteButton = event.target.closest(".report-route-button");

  if (reportRouteButton && reportRouteButton.dataset.routeId) {
    openRouteReportDialog(reportRouteButton.dataset.routeId);
    return;
  }

  const confirmRouteButton = event.target.closest(".confirm-route-button");

  if (confirmRouteButton && confirmRouteButton.dataset.routeId) {
    confirmCommunityRoute(confirmRouteButton.dataset.routeId);
    return;
  }

  const editRouteButton = event.target.closest(".edit-route-button");

  if (editRouteButton && editRouteButton.dataset.routeId) {
    openEditRouteDialog(editRouteButton.dataset.routeId);
    return;
  }

  const deleteRouteButton = event.target.closest(".delete-route-button");

  if (deleteRouteButton && deleteRouteButton.dataset.routeId) {
    deleteCommunityRoute(deleteRouteButton.dataset.routeId);
  }
});

initializeAuth();
renderBuiltInStationMarkers();
scheduleOsmTransitLoad();
loadCommunityPins();
window.addEventListener("load", requestLocation);

// --- Bottom Sheet Drag Logic ---
let isDraggingPanel = false;
let startY = 0;
let currentY = 0;
let startTransformY = 0;

function getPanelStateHeight(state) {
  const vh = window.innerHeight;
  switch(state) {
    case "expanded": return 0;
    case "half": return vh * 0.42; // 42vh
    case "minimized": return vh - 120;
    default: return vh * 0.42;
  }
}

function handleDragStart(e) {
  isDraggingPanel = true;
  panel.classList.add("is-dragging");
  startY = e.type.includes("mouse") ? e.pageY : e.touches[0].pageY;
  
  // Parse the current translate Y value
  const style = window.getComputedStyle(panel);
  const matrix = new DOMMatrixReadOnly(style.transform);
  startTransformY = matrix.m42;
}

function handleDragMove(e) {
  if (!isDraggingPanel) return;
  e.preventDefault(); // Prevent scrolling while dragging
  const y = e.type.includes("mouse") ? e.pageY : e.touches[0].pageY;
  const deltaY = y - startY;
  currentY = startTransformY + deltaY;
  
  // Bounds checking (don't go above expanded or below minimized)
  const minTransform = 0; // expanded
  const maxTransform = window.innerHeight - 120; // minimized
  
  const boundedY = Math.max(minTransform, Math.min(currentY, maxTransform));
  panel.style.transform = `translateY(${boundedY}px)`;
}

function handleDragEnd() {
  if (!isDraggingPanel) return;
  isDraggingPanel = false;
  panel.classList.remove("is-dragging");
  panel.style.transform = ""; // Remove inline style to let CSS take over
  
  // Determine closest snap point
  const vh = window.innerHeight;
  const expandedY = 0;
  const halfY = vh * 0.58; // 100vh - 42vh
  const minimizedY = vh - 120;
  
  const distances = [
    { state: "expanded", dist: Math.abs(currentY - expandedY) },
    { state: "half", dist: Math.abs(currentY - halfY) },
    { state: "minimized", dist: Math.abs(currentY - minimizedY) }
  ];
  
  distances.sort((a, b) => a.dist - b.dist);
  const closestState = distances[0].state;
  
  panel.setAttribute("data-sheet-state", closestState);
}

if (panelDragHandle && panel) {
  panelDragHandle.addEventListener("mousedown", handleDragStart);
  window.addEventListener("mousemove", handleDragMove, { passive: false });
  window.addEventListener("mouseup", handleDragEnd);
  
  panelDragHandle.addEventListener("touchstart", handleDragStart, { passive: true });
  window.addEventListener("touchmove", handleDragMove, { passive: false });
  window.addEventListener("touchend", handleDragEnd);
}

if (closeRouteDrawerBtn) {
  closeRouteDrawerBtn.addEventListener("click", () => {
    clearActiveRouteLines();
  });
}

// --- DESTINATION SEARCH & ROUTING ---
let destinationMarker = null;
let searchDebounceTimeout = null;

if (destinationSearchInput) {
  destinationSearchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    if (query.length > 2) {
      clearSearchButton.classList.remove("is-hidden");
      clearTimeout(searchDebounceTimeout);
      searchDebounceTimeout = setTimeout(() => {
        fetchNominatimResults(query);
      }, 500);
    } else {
      searchResultsDropdown.innerHTML = "";
      searchResultsDropdown.classList.add("is-hidden");
      clearSearchButton.classList.add("is-hidden");
    }
  });

  clearSearchButton.addEventListener("click", () => {
    destinationSearchInput.value = "";
    searchResultsDropdown.innerHTML = "";
    searchResultsDropdown.classList.add("is-hidden");
    clearSearchButton.classList.add("is-hidden");
    if (destinationMarker) {
      map.removeLayer(destinationMarker);
      destinationMarker = null;
    }
    clearActiveRouteLines();
    if (routeModeBanner && routeModeBanner.dataset.isSearchRoute === "true") {
      routeModeBanner.classList.add("is-hidden");
      routeModeBanner.dataset.isSearchRoute = "false";
    }
  });
}

async function fetchNominatimResults(query) {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=ph&limit=5`);
    const data = await response.json();
    
    searchResultsDropdown.innerHTML = "";
    
    if (data && data.length > 0) {
      data.forEach(place => {
        const li = document.createElement("li");
        li.className = "search-result-item";
        
        const titleSpan = document.createElement("span");
        titleSpan.className = "search-result-title";
        const parts = place.display_name.split(", ");
        titleSpan.textContent = parts[0];
        
        const addressSpan = document.createElement("span");
        addressSpan.className = "search-result-address";
        addressSpan.textContent = parts.slice(1).join(", ");
        
        li.appendChild(titleSpan);
        li.appendChild(addressSpan);
        
        li.addEventListener("click", () => {
          handleDestinationSelection(place);
        });
        
        searchResultsDropdown.appendChild(li);
      });
      searchResultsDropdown.classList.remove("is-hidden");
    } else {
      searchResultsDropdown.innerHTML = `<li class="search-result-item"><span class="search-result-address">No results found in the Philippines.</span></li>`;
      searchResultsDropdown.classList.remove("is-hidden");
    }
  } catch (error) {
    console.error("Nominatim search error:", error);
  }
}

function handleDestinationSelection(place) {
  destinationSearchInput.value = place.display_name.split(", ")[0];
  searchResultsDropdown.innerHTML = "";
  searchResultsDropdown.classList.add("is-hidden");
  
  const destLat = parseFloat(place.lat);
  const destLng = parseFloat(place.lon);
  
  if (destinationMarker) {
    map.removeLayer(destinationMarker);
  }
  
  const destIcon = L.divIcon({
    html: `
      <div style="background: #e11d48; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
      </div>
    `,
    className: "",
    iconSize: [24, 24],
    iconAnchor: [12, 24]
  });
  
  destinationMarker = L.marker([destLat, destLng], { icon: destIcon }).addTo(map);
  
  calculateMultiLegRoute(destLat, destLng, place.display_name.split(", ")[0]);
}

function calculateMultiLegRoute(destLat, destLng, destName) {
  const startLat = userLatLng ? userLatLng.lat : map.getCenter().lat;
  const startLng = userLatLng ? userLatLng.lng : map.getCenter().lng;
  
  let nearestA = null;
  let minDistanceA = Infinity;
  let nearestB = null;
  let minDistanceB = Infinity;
  
  stations.forEach(spot => {
    const distA = calculateDistanceMeters(startLat, startLng, spot.lat, spot.lng);
    if (distA < minDistanceA) {
      minDistanceA = distA;
      nearestA = spot;
    }
    
    const distB = calculateDistanceMeters(destLat, destLng, spot.lat, spot.lng);
    if (distB < minDistanceB) {
      minDistanceB = distB;
      nearestB = spot;
    }
  });
  
  if (!nearestA || !nearestB) {
    console.error("Could not find transit spots to create a route.");
    return;
  }
  
  clearActiveRouteLines();
  
  // Create polylines
  const leg1 = L.polyline([[startLat, startLng], [nearestA.lat, nearestA.lng]], {
    className: "route-line route-line-walking",
    color: '#64748b', weight: 4, dashArray: '8, 8', opacity: 0.8
  }).addTo(map);
  
  const leg2Casing = L.polyline([[nearestA.lat, nearestA.lng], [nearestB.lat, nearestB.lng]], {
    className: "route-line route-line-casing route-line-preview-casing",
    color: '#ffffff', weight: 10, opacity: 1, lineCap: "round", lineJoin: "round"
  }).addTo(map);

  const leg2 = L.polyline([[nearestA.lat, nearestA.lng], [nearestB.lat, nearestB.lng]], {
    className: "route-line route-line-core route-line-preview",
    color: '#0f172a', weight: 6, opacity: 0.9, lineCap: "round", lineJoin: "round"
  }).addTo(map);
  
  const leg3 = L.polyline([[nearestB.lat, nearestB.lng], [destLat, destLng]], {
    className: "route-line route-line-walking",
    color: '#64748b', weight: 4, dashArray: '8, 8', opacity: 0.8
  }).addTo(map);
  
  // Add to activeRouteLayers to be cleared later
  activeRouteLayers.addLayer(leg1);
  activeRouteLayers.addLayer(leg2Casing);
  activeRouteLayers.addLayer(leg2);
  activeRouteLayers.addLayer(leg3);
  
  // Fit map bounds
  const bounds = L.latLngBounds([
    [startLat, startLng],
    [nearestA.lat, nearestA.lng],
    [nearestB.lat, nearestB.lng],
    [destLat, destLng]
  ]);
  
  const isMobile = window.innerWidth < 900;
  map.fitBounds(bounds, { padding: isMobile ? [40, 40] : [80, 80] });
  
  // Show UI Banner
  if (routeModeBanner) {
    routeModeStep.textContent = "Suggested Route";
    routeModeTitle.textContent = `To ${destName}`;
    routeModeText.textContent = `Walk to ${nearestA.name}, take transit to ${nearestB.name}, then walk to destination.`;
    routeModeBanner.classList.remove("is-hidden");
    routeModeBanner.dataset.isSearchRoute = "true";
    
    if (cancelRouteModeButton) {
      cancelRouteModeButton.textContent = "Clear Route";
      cancelRouteModeButton.onclick = () => {
        clearSearchButton.click();
        // Restore standard cancel button behavior
        cancelRouteModeButton.textContent = "Cancel";
        cancelRouteModeButton.onclick = null; 
      };
    }
  }
}
