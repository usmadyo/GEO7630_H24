// Fonction pour générer des clusters de points sur la carte
function generateClusters () {

    // Suppression de toutes les couches et sources existantes de la carte
    removeAllLayersAndSources();

    // Ajout d'une source de données à la carte avec clustering
    map.addSource('clusters-source', {
        type: 'geojson',          // Type de la source de données : géojson
        data: randomPoints,       // Données à utiliser pour la source
        cluster: true,            // Activation du clustering pour regrouper les points proches
        clusterMaxZoom: 14,       // Zoom maximal pour regrouper les points
        clusterRadius: 50         // Rayon de chaque cluster lors du regroupement des points (par défaut à 50)
    });
    
    // Ajout d'une couche pour afficher les clusters
    map.addLayer({
        id: 'clusters',
        type: 'circle',           // Type de la couche : cercle
        source: 'clusters-source', // Source de données utilisée pour la couche
        filter: ['has', 'point_count'], // Filtrage pour afficher uniquement les clusters
        paint: {
            'circle-color': [      // Couleur du cercle basée sur le nombre de points
                'step',
                ['get', 'point_count'],
                '#51bbd6',
                5,
                '#f1f075',
                10,
                '#f28cb1'
            ],
            'circle-radius': [     // Rayon du cercle basé sur le nombre de points
                'step',
                ['get', 'point_count'],
                20,
                20,
                40,
                40,
                60
            ]
        }                
    });
    
    // Ajout d'une couche pour afficher le nombre de points dans chaque cluster
    map.addLayer({
        id: 'cluster-count',
        type: 'symbol',          // Type de la couche : symbole
        source: 'clusters-source', // Source de données utilisée pour la couche
        filter: ['has', 'point_count'], // Filtrage pour afficher uniquement les clusters
        layout: {
            'text-field': '{point_count_abbreviated}',   // Champ de texte affichant le nombre de points
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],  // Police du texte
            'text-size': 12  // Taille du texte
        }
    });
    
    // Ajout d'une couche pour afficher les points non regroupés
    map.addLayer({
        id: 'unclustered-point',
        type: 'circle',          // Type de la couche : cercle
        source: 'clusters-source', // Source de données utilisée pour la couche
        filter: ['!', ['has', 'point_count']], // Filtrage pour afficher uniquement les points non regroupés
        paint: {
            'circle-color': '#11b4da',          // Couleur des points non regroupés
            'circle-radius': 4,                 // Rayon des points non regroupés
            'circle-stroke-width': 1,           // Largeur de la bordure des points
            'circle-stroke-color': '#fff'       // Couleur de la bordure des points
        }
    });
}

// Écouteur d'événement pour le bouton de génération des clusters
document
  .getElementById('generateClusters')
  .addEventListener('click', generateClusters);
