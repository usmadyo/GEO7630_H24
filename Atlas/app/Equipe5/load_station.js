// Fonction pour générer des clusters de points sur la carte
function load_station() {
    alert('test')
    // Suppression de toutes les couches et sources existantes de la carte
    removeAllLayersAndSources();

    // Ajout d'une source de données à la carte avec clustering
    map.addSource('h3_source', {
        type: 'vector',
        tiles: ['https://fluffy-space-bassoon-6wwg7w7p9x73x46q-8801.app.github.dev/KA791969.IQA_Station/{z}/{x}/{y}.pbf']
    });

    // Ajout d'une couche pour afficher les clusters
    map.addLayer({
        'id': 'h3',
        'type': 'circle',           // Type de la couche : cercle
        'source': 'h3_source', // Source de données utilisée pour la couche
        'source-layer': 'KA791969.IQA_Station'

    });
}
// Écouteur d'événement pour le bouton de génération des clusters 
document
    .getElementById('load_station'); // id unique du bouton
//.addEventListener('click', load_station); // ajoute un event de type click qui lance la fonction load_station()