import GeoTIFF from 'https://cdn.jsdelivr.net/npm/ol/source/GeoTIFF.js';
import Map from 'https://cdn.jsdelivr.net/npm/ol/Map.js';
import TileLayer from 'https://cdn.jsdelivr.net/npm/ol/layer/WebGLTile.js';

// URL of your Cloud Optimized GeoTIFF (COG)
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
        new TileLayer({
            source: source,
        }),
    ],
    view: source.getView(),
});
