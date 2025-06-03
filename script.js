// script.js

// Set access token
mapboxgl.accessToken = 'pk.eyJ1IjoibmF2YXdvbGZpc2giLCJhIjoiY21iOWxyczk5MHV1ZDJrcHQ5aW12YTZ2MCJ9.asecPSLeRToQBLK9UlzVwA';

// Initialize the map
const map = new mapboxgl.Map({
  container: 'my-map', // ID of the container
  style: 'mapbox://styles/navawolfish/cmbfbxeuz007x01s1gxgya1u8', // Map style
  center: [-79.3832, 43.6532], // [lng, lat] — New York City
  zoom: 12
});

map.on('load', () => {
  map.addSource('toronto_neighbourhoods', {
    type: 'vector',
    url: 'mapbox://carolinenee.3bs4acz8'
  });
map.on('click', (event) => {
  // If the user clicked on one of your markers, get its information.
      const features = map.queryRenderedFeatures(event.point, {
        layers: ['map-points'] // replace with your layer name
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];

})
  // Load custom marker image
  map.loadImage('assets/coffee_icon.png', (error, image) => {
    if (error) throw error;

    map.addImage('coffee-marker', image);

    map.addLayer({
      id: 'neighbourhoods-fill',
      type: 'fill',
      source: 'toronto_neighbourhoods',
      'source-layer': 'original',
      paint: {
        'fill-color': '#888888',
        'fill-opacity': 0.4,
        'fill-outline-color': '#000000'
      }
    });

    map.addLayer({
      id: 'places',
      type: 'symbol',
      source: 'places',
      layout: {
        'icon-size': 0.5,
        'text-field': ['get', 'title'],
        'icon-image': ['get', 'icon'],
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, 1.25],
        'text-anchor': 'top'
      }
    });
    map.addLayer({
      id: 'debug-points',
      type: 'circle',
      source: 'places',
      paint: {
        'circle-radius': 6,
        'circle-color': '#ff0000'
      }
    });

  });
});


// Add zoom and rotation controls
map.addControl(new mapboxgl.NavigationControl());

  