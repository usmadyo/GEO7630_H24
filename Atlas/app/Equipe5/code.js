// création du contrôle de navigation
var nav = new maplibregl.NavigationControl({
    showCompass: true, // affichage de la boussole
    showZoom: true, // affichage des boutons de zoom
    visualizePitch: true // affichage de l'angle d'inclinaison
    });
    // Finalement on ajoute le contrôleur à la carte
    map.addControl(nav, 'bottom-right'); // ajout du contrôle en haut à droite de la carte
    
// création du contrôle de géolocalisation
var geolocateControl = new maplibregl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true // activation de la géolocalisation précise
    },
    trackUserLocation: true // suivi automatique de la position de l'utilisateur
})
map.addControl(geolocateControl, 'bottom-right'); // ajout du contrôle en bas à droite de la carte

// création du contrôle d'échelle
var scale = new maplibregl.ScaleControl({
    unit: 'metric' // utilisation de l'unité métrique
});
map.addControl(scale); // ajout du contrôle en bas à gauche de la carte

// list des couches à supprimr avec le bouton Reset map
const myLayers = ['stationsRSQA','h2','h4', 'h5', 'h6','h7', 'h8'];

// Compteur de nombre des enregistrements RSQA
function featureCount() {
    var features = map.queryRenderedFeatures({ layers: ['stationsRSQA'] }); // UTILISER LA FONCTION MaplibreGL pour requeter les elements a l'ecran
    document.getElementById('featureCount').value = features.length;
}
// Appel de la fonction calculateDistance (turf.js) pour calculer la distance moyenne entre les stations RSQA
function calculateDistance(){
    featureCollection = ['stationsRSQA'];
    document.getElementById('distanceResult').value = Math.round(averageDistance(randomPoints), 2);
}

// Appel de la fonction createBuffer (turj.js) pour créer des buffer avec les stations RSQA
function createBuffer(){
    featureCollection = ['stationsRSQA'];
    console.log(radiusInput)
}

// Appeler la fonction pour créer une couche 2.5D
function generate3D(){
}