var map = L.map('map', { scrollWheelZoom: false });

/*

var defaultView = {
  center: L.latLng(38.8995,-77.0269),
  zoom: 13,
  waypoints: [],
  language: 'en',
  service: 'Car (fastest)',
  layer: 'Mapbox Emerald',
};

var defaultControl = {
  geocoder: L.Control.Geocoder.nominatim(),
  routeWhileDragging: true,
  routeDragInterval: 2,
  addWaypoints: false,
  waypointMode: 'snap',
};

*/
L.tileLayer('https://a.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}@2x.png?access_token=' + LRM.apiToken, {
	attribution: 'Maps by <a href="https://www.mapbox.com/about/maps/">MapBox</a>. ' +
		'Routes from <a href="http://project-osrm.org/">OSRM</a>, ' +
		'data uses <a href="http://opendatacommons.org/licenses/odbl/">ODbL</a> license'
}).addTo(map);

L.Routing.control({
	plan: L.Routing.plan([
		L.latLng(48.8588,2.3469),
		L.latLng(52.3546,4.9039)
	], {
		createMarker: function(i, wp) {
			return L.marker(wp.latLng, {
				draggable: true,
				icon: new L.Icon.Label.Default({ labelText: String.fromCharCode(65 + i) })
			});
		},
		geocoder: L.Control.Geocoder.nominatim(),
		routeWhileDragging: true
	}),
	routeWhileDragging: true,
	routeDragTimeout: 250
}).addTo(map);
