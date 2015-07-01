/*  MAP options */
var defaultView = {
  center: L.latLng(38.8995,-77.0269),
  zoom: 13,
  waypoints: [],
  language: 'en',
  service: 'Car (fastest)',
  layer: 'Mapbox Emerald',
};

var services = {
 'Car (fastest)': '//router.project-osrm.org/viaroute'
};

var layers = {
  'Mapbox Light': L.tileLayer('http://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}@2x.png?access_token=pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg',
  {
    attribution:'<a href="https://www.mapbox.com/about/maps">© Mapbox</a> <a href="http://openstreetmap.org/copyright">© OpenStreetMap</a> | <a href="http://mapbox.com/map-feedback/">Improve this map</a>',
    maxZoom: 18
  }),
  'Mapbox Dark': L.tileLayer('http://api.tiles.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}@2x.png?access_token=pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg',
  {
    attribution:'<a href="https://www.mapbox.com/about/maps">© Mapbox</a> <a href="http://openstreetmap.org/copyright">© OpenStreetMap</a> | <a href="http://mapbox.com/map-feedback/">Improve this map</a>',
    maxZoom: 18
  }),

  'Mapbox Outdoors': L.tileLayer('http://api.tiles.mapbox.com/v4/mapbox.outdoors/{z}/{x}/{y}@2x.png?access_token=pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg',
  {
    attribution: '<a href="https://www.mapbox.com/about/maps">© Mapbox</a> <a href="http://openstreetmap.org/copyright">© OpenStreetMap</a> | <a href="http://mapbox.com/map-feedback/">Improve this map</a>',
    maxZoom: 18
  }),
  'Mapbox Satellite': L.tileLayer('http://api.tiles.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}@2x.png?access_token=pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg',
  {
    attribution: '<a href="https://www.mapbox.com/about/maps">© Mapbox</a> <a href="http://openstreetmap.org/copyright">© OpenStreetMap</a> | <a href="http://mapbox.com/map-feedback/">Improve this map</a>',
    maxZoom: 18
  }),
  'Mapbox Streets Satellite': L.tileLayer('http://api.tiles.mapbox.com/v4/mapbox.streets-satellite/{z}/{x}/{y}@2x.png?access_token=pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg',
  {
    attribution: '<a href="https://www.mapbox.com/about/maps">© Mapbox</a> <a href="http://openstreetmap.org/copyright">© OpenStreetMap</a> | <a href="http://mapbox.com/map-feedback/">Improve this map</a>',
    maxZoom: 18
  }),
  'osm.org': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '© <a href="http://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors',
    maxZoom: 18
  }),
  'osm.de': L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
  {
    attribution: '© <a href="http://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors',
    maxZoom: 18
  }),
  'Mapbox Emerald': L.tileLayer('http://api.tiles.mapbox.com/v4/mapbox.emerald/{z}/{x}/{y}@2x.png?access_token=pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg',
  {
    attribution: '<a href="https://www.mapbox.com/about/maps">© Mapbox</a> <a href="http://openstreetmap.org/copyright">© OpenStreetMap</a> | <a href="http://mapbox.com/map-feedback/">Improve this map</a>',
    maxZoom: 18
  })
};

var options = {
  lrm: {
    lineOptions: {
      styles: [
        {color: 'black', opacity: 0.35, weight: 8},
        {color: 'white', opacity: 0.3, weight: 6}
      ],
    },
    dragStyles: [
      {color: 'black', opacity: 0.35, weight: 9},
      {color: 'white', opacity: 0.8, weight: 7}
    ],
    summaryTemplate: '<div class="mapbox-directions-summary"><h2>{name}</h2><h3>{distance}, {time}</h3></div>',
    containerClassName: "dark pad2",
    alternativeClassName: "mapbox-directions-instructions",
    stepClassName: "mapbox-directions-step",
    geocodersClassName: "mapbox-directions-inputs",
    itineraryBuilder: "mapbox-directions-steps",
  },

  popup: {
    removeButtonClass: 'mapbox-directions-icon mapbox-close-light-icon',
    uturnButtonClass: 'mapbox-directions-icon mapbox-u-turn-icon',
    markerOptions: {
    }
  },

  tools: {
    popupWindowClass: "fill-dark dark",
    popupCloseButtonClass: 'mapbox-directions-icon mapbox-close-icon',
    linkButtonClass: 'mapbox-directions-icon mapbox-link-icon',
    editorButtonClass: 'mapbox-directions-icon mapbox-editor-icon',
    josmButtonClass: 'mapbox-directions-icon mapbox-josm-icon',
    localizationButtonClass: 'mapbox-directions-icon mapbox-flag-icon',
    printButtonClass: 'icon printer',
    toolsContainerClass: 'fill-dark dark',
  }
};




/* Initialize MAP */
var map = L.map('map', {
  zoomControl: false,
  layers: layers[defaultView.layer]
}).setView(defaultView.center, defaultView.zoom);

/*  Overlay tileLayers */
L.tileLayer(defaultView.layer + LRM.apiToken, {
	attribution: 'Maps by <a href="https://www.mapbox.com/about/maps/">MapBox</a>. ' +
		'Routes from <a href="http://project-osrm.org/">OSRM</a>, ' +
		'data uses <a href="http://opendatacommons.org/licenses/odbl/">ODbL</a> license'
}).addTo(map);


/*  Setup controls seperate from plan  */
function createButton(label, container) {
    var btn = L.DomUtil.create('button', '', container);
    btn.setAttribute('type', 'button');
    btn.innerHTML = label;
    return btn;
}

/*  Override the control's L.Routing.Plan, since it method / function creates the panel you need.  */

var ReversablePlan = L.Routing.Plan.extend({
    createGeocoders: function() {
        var container = L.Routing.Plan.prototype.createGeocoders.call(this)
        return container;
    }
});

// console.log();

/* Create Control, Itineneray and Plan */

var plan = new ReversablePlan([], {
        geocoder: L.Control.Geocoder.nominatim(),
        routeWhileDragging: true,
  		position: 'topright',
  		useZoomParameter: true,
		reverseWaypoints: true,
		dragStyles: options.lrm.dragStyles,
	    geocodersClassName: options.lrm.geocodersClassName
    }),
    control = L.Routing.control({
        routeWhileDragging: true,
        plan: plan,
        lineOptions: options.lrm.lineOptions,
		summaryTemplate: options.lrm.summaryTemplate,
		containerClassName: options.lrm.containerClassName,
	    alternativeClassName: options.lrm.alternativeClassName,
	    stepClassName: options.lrm.stepClassName
    }).addTo(map)//,
	/*  This is how you EXTEND a class, it just has all the options of it's base  */
	/*SummaryBox = L.Routing.control({

	}).addTo(map);*/



/*  Click on map to choose Start or End locations  */

var start = true;
var end = false;

map.on('click', function(e) {
	if (start) {
		end = true;
		start = false;
		control.spliceWaypoints(0, 1, e.latlng);
		//control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
	} else if (end) {
		//control.spliceWaypoints(0, 1, e.latlng);
		control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
	}
});


