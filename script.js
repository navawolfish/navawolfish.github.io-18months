// script.js

// Set access token
mapboxgl.accessToken = 'pk.eyJ1IjoibmF2YXdvbGZpc2giLCJhIjoiY21iOWxyczk5MHV1ZDJrcHQ5aW12YTZ2MCJ9.asecPSLeRToQBLK9UlzVwA';

// Initialize the map
const map = new mapboxgl.Map({
  container: 'my-map', // ID of the container
  style: 'mapbox://styles/navawolfish/cmbf5x65d006m01s1dsru502y', // Map style
  center: [-79.3832, 43.6532], // [lng, lat] — Toronto
  zoom: 12
});



map.on('load', () => {
  map.loadImage('assets/restaurant.svg', (error, image) => {
    if (error) throw error;
    map.addImage('restaurant-icon', image);
  });

  map.loadImage('assets/tree.svg', (error, image) => {
    if (error) throw error;
    map.addImage('park-icon', image);
  });
  map.addSource('Toronto', {
    type: 'geojson',
    // Use a URL for the value for the `data` property.
    data: 'https://raw.githubusercontent.com/navawolfish/navawolfish.github.io-18months/refs/heads/main/toronto.geojson'
  });


  map.addLayer({
    id: 'places',
    type: 'symbol',
    source: 'Toronto',
    layout: {
      'icon-size': 10,
      'text-field': ['get', 'title'],
      'icon-image': [
        'match',
        ['get', 'type'],
        'food', 'restaurant-icon',
        'nature', 'park-icon',
            /* default */ 'restaurant-icon'
      ],
      'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
      'text-offset': [0, 1.25],
      'text-anchor': 'top'
    }
  });



});

  map.on('click', (event) => {
    // If the user clicked on one of your markers, get its information.
    const features = map.queryRenderedFeatures(event.point, {
      layers: ['places']
    });
    if (!features.length) {
      return;
    }
    const feature = features[0];

  });

  

// Add zoom and rotation controls
map.addControl(new mapboxgl.NavigationControl());

