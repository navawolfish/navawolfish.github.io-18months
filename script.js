// script.js

// Set access token
mapboxgl.accessToken = 'pk.eyJ1IjoibmF2YXdvbGZpc2giLCJhIjoiY21iOWxyczk5MHV1ZDJrcHQ5aW12YTZ2MCJ9.asecPSLeRToQBLK9UlzVwA';

// Initialize the map
const map = new mapboxgl.Map({
  container: 'map', // ID of the container
  style: 'mapbox://styles/mapbox/streets-v12', // Map style
  center: [-74.006, 40.7128], // [lng, lat] — New York City
  zoom: 12
});

// Add zoom and rotation controls
map.addControl(new mapboxgl.NavigationControl());

// Add a marker
new mapboxgl.Marker()
  .setLngLat([-74.006, 40.7128])
  .setPopup(new mapboxgl.Popup().setText('Hello from NYC!'))
  .addTo(map);
