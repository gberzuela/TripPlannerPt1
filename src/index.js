import mapboxgl from 'mapbox-gl';

console.log('Webpack worked!');

mapboxgl.accessToken =
	'pk.eyJ1IjoiZ3VtamEiLCJhIjoiY2todXNnOTViMHdwZjJ6b2x2aHduOWQ2ayJ9.n24_sLNch5m_hNjQRxfQ9A';

const map = new mapboxgl.Map({
	container: 'map',
	center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
	zoom: 12, // starting zoom
	style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});
