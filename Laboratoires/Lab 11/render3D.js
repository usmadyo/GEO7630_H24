/**
 * Fonction pour générer une représentation 3D d'une grille sur une carte
 */
function generate3D() {
    // Affiche un message de test dans la console

    // Supprime toutes les couches et sources existantes de la carte
    removeAllLayersAndSources();

    // Crée une grille en utilisant la fonction makeGrid() du module createGrid.js
    var grid = makeGrid();

    // Ajoute une nouvelle source de données geojson à la carte avec la grille générée
    map.addSource('3d-source', {
        type: 'geojson',
        data: grid
    });

    // Ajoute une nouvelle couche de type fill-extrusion à la carte pour afficher la grille en 3D
    map.addLayer({
        'id': '3dgrip',
        'source': '3d-source',
        'type': 'fill-extrusion',
        'paint': {
            // Définit la couleur de remplissage de l'extrusion en fonction de la valeur aléatoire 'randomValue'
            'fill-extrusion-color': [
                'interpolate', ['linear'], ['get', 'randomValue'],
                0, '#f3e79b',
                30, '#fac484',
                50, '#eb7f86',
                80, '#ce6693',
                100, '#a059a0'
            ],
            // Définit la hauteur de l'extrusion en fonction de la valeur aléatoire 'randomValue'
            'fill-extrusion-height': [
                'interpolate', ['linear'], ['get', 'randomValue'],
                0, 100,
                100, 4000
            ],
            // Définit l'opacité de l'extrusion
            'fill-extrusion-opacity': 0.6
        }
    });
}

// Ajoute un événement d'écoute du clic sur l'élément HTML avec l'ID 'generate3D'
document
    .getElementById('generate3D')
    .addEventListener('click', generate3D);
