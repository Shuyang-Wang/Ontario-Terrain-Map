import GeoTIFFSource from 'https://cdn.jsdelivr.net/npm/ol/source/GeoTIFF.js';
import Map from 'https://cdn.jsdelivr.net/npm/ol/Map.js';
import View from 'https://cdn.jsdelivr.net/npm/ol/View.js';
import TileLayer from 'https://cdn.jsdelivr.net/npm/ol/layer/WebGLTile.js';

// URL of your Cloud Optimized GeoTIFF (COG)
const cogUrl = 'https://ccemp-bucket.s3.us-east-2.amazonaws.com/Public+Access/COG/merged_output_cog.tif';

// Create the GeoTIFF source
const source = new GeoTIFFSource({
  sources: [
    {
      url: cogUrl,
    },
  ],
});

// Initialize the map with a view centered roughly around your data
const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: source,
    }),
  ],
  view: new View({
    center: [0, 0], // Initial center (can be adjusted)
    zoom: 2, // Initial zoom level (can be adjusted)
  }),
});

// Adjust the view after the GeoTIFF is loaded
source.on('change', function () {
  if (source.getState() === 'ready') {
    map.setView(source.getView());
  }
});
