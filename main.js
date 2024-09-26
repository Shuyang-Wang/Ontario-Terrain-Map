import GeoTIFF from 'https://cdn.jsdelivr.net/npm/ol/source/GeoTIFF.js';
import Map from 'https://cdn.jsdelivr.net/npm/ol/Map.js';
import WebGLTile from 'https://cdn.jsdelivr.net/npm/ol/layer/WebGLTile.js';

const cogUrl = 'https://ccemp-bucket.s3.us-east-2.amazonaws.com/Public+Access/COG/merged_output_cog.tif';

// Create the GeoTIFF source
const source = new GeoTIFF({
  sources: [
    {
      url: cogUrl,
    },
  ],
});

// Initialize the map
const map = new Map({
  target: 'map',
  layers: [
    new WebGLTile({
      source: source,
    }),
  ],
  view: source.getView(),
});
