function generateHeatmap() {
    
    removeAllLayersAndSources();

    map.addSource('heatmap-source', {
        type: 'geojson',
        data: randomPoints
    });
    
    map.addLayer({
        id: 'heatmap',
        source: 'heatmap-source',
        type: 'heatmap',
        paint: {
            'heatmap-weight': ['get', 'point_count'], // Poids des points
            'heatmap-radius': 20,                         // Rayon des points de chaleur
            'heatmap-intensity': 0.5,                      // Intensité globale du heatmap
            'heatmap-color': [                             // Couleurs personnalisées
                'interpolate',
                ['linear'],
                ['heatmap-density'],
                0, 'rgba(0, 255, 0, 0)',
                0.2, 'yellow',
                0.4, 'orange',
                0.6, 'red'
            ],
            'heatmap-opacity': 0.8,                        // Opacité du heatmap
        }
    });
}

document
  .getElementById('generateHeatmap')
  .addEventListener('click', generateHeatmap);
