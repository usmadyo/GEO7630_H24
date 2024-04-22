// création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
    center: [-73.55, 45.55], // position centrale de la carte
    zoom: 9, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
});

function loadTeam(teamName) {
    // Vider toutes les divs
    document.getElementById('Equipe1').innerHTML = '';
    document.getElementById('Equipe2').innerHTML = '';
    document.getElementById('Equipe3').innerHTML = '';
    document.getElementById('Equipe4').innerHTML = '';
    document.getElementById('Equipe5').innerHTML = '';
    document.getElementById('Equipe6').innerHTML = '';
    document.getElementById('Equipe7').innerHTML = '';
    // Charger le contenu de l'équipe sélectionnée
    fetch('./' + teamName + '/index.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(teamName).innerHTML = data;
            // Charger les fichiers .js depuis le répertoire spécifique
            const scripts = document.getElementById(teamName).querySelectorAll('script[src]');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                newScript.src = `./${teamName}/${script.getAttribute('src')}`;
                document.body.appendChild(newScript);
            });
            // Charger les fichiers .css depuis le répertoire spécifique
            const links = document.getElementById(teamName).querySelectorAll('link[rel="stylesheet"]');
            links.forEach(link => {
                const newLink = document.createElement('link');
                newLink.rel = 'stylesheet';
                newLink.type = 'text/css';  // Ajoutez ce type pour éviter l'erreur de type MIME
                newLink.href = `./${teamName}/${link.getAttribute('href')}`;
                document.head.appendChild(newLink);
            });
        })
        .catch(error => {
            console.error('There was a problem with fetching the team content:', error);
        });
}

//const myLayers = ['stationsRSQA', 'h4', 'h5', 'h6', 'h7', 'h8'];


map.on('click', 'stationsRSQA', function (e) {
    var coordinates = turf.centroid(e.features[0]).geometry.coordinates; // Calcul des coordonnées du centre de la géométrie cliquée

    // Création du contenu du popup
    var popupContent = '<h3>' + e.features[0].properties.stationid + '</h3>'; // Vous pouvez personnaliser le contenu du popup en fonction de vos besoins

    // Ajout du popup à la carte Maplibre
    new maplibregl.Popup()
        .setLngLat(coordinates)
        .setHTML(popupContent)
        .addTo(map);
});

map.on('click', 'h4', function (e) {
    var coordinates = turf.centroid(e.features[0]).geometry.coordinates; // Calcul des coordonnées du centre de la géométrie cliquée

    // Création du contenu du popup
    var popupContent = '<h3>' + e.features[0].properties.nom + '</h3>'; // Vous pouvez personnaliser le contenu du popup en fonction de vos besoins

    // Ajout du popup à la carte Maplibre
    new maplibregl.Popup()
        .setLngLat(coordinates)
        .setHTML(popupContent)
        .addTo(map);
});

map.on('click', 'h2', function (e) {
    var coordinates = turf.centroid(e.features[0]).geometry.coordinates; // Calcul des coordonnées du centre de la géométrie cliquée

    // Création du contenu du popup
    var popupContent = '<h3>' + e.features[0].properties.secteur + '</h3>'; // Vous pouvez personnaliser le contenu du popup en fonction de vos besoins

    // Ajout du popup à la carte Maplibre
    new maplibregl.Popup()
        .setLngLat(coordinates)
        .setHTML(popupContent)
        .addTo(map);
});

map.on('idle', function () {
    const layers = map.getStyle().layers;
    layers.forEach((layer) => {
        if (layer.id == 'stationsRSQA') {
            featureCount() // Appelez la fonction de votre module qui compte le nombre de points à l'ecran
        }
    });
});

/**
* Fonction qui génère une couleur aléatoire en format hexadécimal.
* @returns {string} Couleur générée au format hexadécimal.
*/
function getRandomColor() {
    // Définition des caractères hexadécimaux possibles
    var letters = '0123456789ABCDEF';
    // Initialisation de la couleur avec le préfixe hexadécimal (#)
    var color = '#';
    // Boucle pour générer chaque caractère de la couleur (6 caractères)
    for (var i = 0; i < 6; i++) {
        // Sélection aléatoire d'un caractère hexadécimal
        color += letters[Math.floor(Math.random() * 16)];
    }
    // Retourne la couleur générée au format hexadécimal
    return color;
}