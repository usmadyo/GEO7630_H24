Laboratoire 10 - GEO7630H24

Configuration Geoserver et mise en place de service WMS, WFS

[Configuration et lancement d’une instance de Geoserver 2](https://docs.google.com/document/d/1R3A75g_y_A_T7BLmh6MJyKAeMTDd4KYmTzTV0oqv_4U/edit#heading=h.d1nzl2zi4y2v)

[Étape 1 2](https://docs.google.com/document/d/1R3A75g_y_A_T7BLmh6MJyKAeMTDd4KYmTzTV0oqv_4U/edit#heading=h.fhuzvg6r031d)

[Étape 2 3](https://docs.google.com/document/d/1R3A75g_y_A_T7BLmh6MJyKAeMTDd4KYmTzTV0oqv_4U/edit#heading=h.2ljf5rr9ygjh)

[**Étape 3 Les contrôles de carte ****7**](https://docs.google.com/document/d/1R3A75g_y_A_T7BLmh6MJyKAeMTDd4KYmTzTV0oqv_4U/edit#heading=h.il4btunf4o2a)

[**Étape 4 Charger des données depuis un serveur de tuiles vectorielles ****9**](https://docs.google.com/document/d/1R3A75g_y_A_T7BLmh6MJyKAeMTDd4KYmTzTV0oqv_4U/edit#heading=h.g9x6d457902c)

[**Etape 5 Stylisation ****12**](https://docs.google.com/document/d/1R3A75g_y_A_T7BLmh6MJyKAeMTDd4KYmTzTV0oqv_4U/edit#heading=h.nhwo0n35nrim)

[**Étape 6 style avancé ****13**](https://docs.google.com/document/d/1R3A75g_y_A_T7BLmh6MJyKAeMTDd4KYmTzTV0oqv_4U/edit#heading=h.18puux48he9g)

[**Étape 7 Ajouter une couche WFS ****14**](https://docs.google.com/document/d/1R3A75g_y_A_T7BLmh6MJyKAeMTDd4KYmTzTV0oqv_4U/edit#heading=h.90hqh0oxgjrv)


## Étape 1 Configuration et lancement d’une instance de Geoserver

Ouvrez github (assurez vous d’être connecté)  : <https://github.com/Captain-Oski/GEO7630_H24>

Lancer un codespace à partir de Main : 

![](https://lh7-us.googleusercontent.com/Pj6R-zNyFV5Q3I4Z4T9dUvNxzPv176Af80b67-lxhjkkTNkRBmb-TRmsThSkzYemWqGMzrofrDsRl_eUGYPk59tCiFqrXHeV2ltJ1ecUO1VrKuoV6n9XZmeAICdEyJNOwvvTekyTu1RZTV1lGG17X3c)

Cela va installer démarrer une instance du projet github dans un environnement virtuel cloud dans lequel vous pourrez modifier et tester du code, mais aussi démarrer des services et applications informatiques et cartographiques.

![](https://lh7-us.googleusercontent.com/vHmexkkd4PilZPQdWlj0Cf5Oo3QS5amYHuDhSEksdL-k5LlW0OtAA4CGuPtQdhZ5x0IySr-9pdQceP7RkAValq6XJcWhfcuHtvosYKhlfuA1T6as2GMLZYcUCPv_5s3blwYq77Dp2vVvDKnL48YywD4)


## Étape 2

Pour démarrer les applications de service cartographiques (Geoserver entre autres)

Allez dans le dossier Atlas, puis cliquez droit sur le fichier docker-compose.yml 

(prononcez YAMEUL ;-)

\
![](https://lh7-us.googleusercontent.com/CCRCH95nS66vn0WSuWquBJ2zyHpLNH7uhI7fs00TuiWdkOkl83w5Tk79RbDbRpvmcMSUGC4birfp1L0NxKzqBXsuqYBCMp0N6QP8QEG2A45sFdJLTGorBiQIyjmJbdWWUGuPKtQZispR-0veZcp-4ag)

Cliquez sur la baleine à gauche pour voir que le container roule bien comme il faut.

Soit des triangles verts et non des carrés rouges ( ;-) )

![](https://lh7-us.googleusercontent.com/qdfCGFQTQ0I0UMUZaQ3wsuCUN5Hd7fPQwJqlmXLHqrOX6Aydl_kjf4_mhxois6GlDAGTTElk2wseUiGg0eZZgcKHk-9LH4w7IVB7PX-6i4fu7FjHrQwRnfpV3a7Lg7R5xkD7hQn2gPVYpYg-TNF6umI)

Vérifier que l’application roule correctement en allant voir la page d’accueil ex : 

Ouvrez un terminal (CTRL+J) ou via l’interface comme ci-dessous.

![](https://lh7-us.googleusercontent.com/CawEa5xWhnJuR3aSLCwC42WNEgh0kLZqSrOc-8xVerJv9lMRCsvRdSi72NIvhzRgpjVO_l3DFb4JnnuQKGtBTW7QqhG1gZN23auYNFPUSEMNMbXuXo1AvBxaCjdArDCpHYBuwQSl-MHmEUDvN-Qrh0Q)

![](https://lh7-us.googleusercontent.com/yYlrA14k2jx5gpyLkz0ztVNIvN90G0yvby6qddwieyazhJjTEXu7lOtESwCbKpSK4tiFViaGvZrqXL9oHvje-NLHM8r5P0t3mtjUSz2KsosEbwTfxGoxKcy8YPskKvgYYOqBT5_pJSPLZbqjjaLmFtk)

Vous devriez voir apparaître l'Atlas Urbain Interactif dans votre navigateur

![](https://lh7-us.googleusercontent.com/q8JI4TaeNhmOXEK5eRHLmKk2NVfvIsaEG5yVsLKgwwaBWVzqLkkUxJBO5mWGEWTHOv-YifDGabjXmQ-jUj3NrnQcnAyC92DfJ8smz1ujjfTktweLutok7X3JVbPc38JylvtXaZ6OQCGDl-yyqgiTSMk)

********


## Étape 3 Les contrôles de carte

[Class: NavigationControl - MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/API/classes/NavigationControl/)

**Ajoutez un contrôle de Navigation en haut à droite**

Dans le fichier **/Atlas/app/app.js qui** est le fichier javascript qui contrôle toute notre application cartographique maplibre comme nous l’avons vu la semaine dernière

Vous pouvez jouer avec l’ajout et la suppression des différents contrôleurs

 ****

**// création du contrôle de navigation**

**var nav = new maplibregl.NavigationControl({**

    **showCompass: true, // affichage de la boussole**

    **showZoom: true, // affichage des boutons de zoom**

    **visualizePitch: true // affichage de l'angle d'inclinaison**

**});**

**// Finalement on ajoute le contrôleur à la carte**

**map.addControl(nav, 'top-right'); // ajout du contrôle en haut à droite de la carte**

**Ajoutez un contrôle de Géolocalisation en bas à droite**

// création du contrôle de géolocalisation

var geolocateControl = new maplibregl.GeolocateControl({

    positionOptions: {

        enableHighAccuracy: true // activation de la géolocalisation précise

    },

    trackUserLocation: true // suivi automatique de la position de l'utilisateur

})

map.addControl(geolocateControl, 'bottom-right'); // ajout du contrôle en bas à droite de la carte

**Ajoutez un contrôle d’échelle**

// création du contrôle d'échelle

var scale = new maplibregl.ScaleControl({

    unit: 'metric' // utilisation de l'unité métrique

});

map.addControl(scale); // ajout du contrôle en bas à gauche de la carte

Une fois que vous avez enregistré votre fichier (ctrls+s) vous pouvez recharger la page web de l’application pour voir apparaître les contrôleurs comme ci dessous

![](https://lh7-us.googleusercontent.com/A0xyqQ3SirPIW_PevWQuP9l8_Pg8Cg72M3hYB86gG1Cx8tAY3HpWa2BRyoGkK69eiB5qbn6LV5YwX8zdlye9XFcIjvMOpmAfv2uBo_hRizKoaAPOkIRRFEDHsASwaPHjwERFku0xBCkn_H7XHRbhpV4)


##

## Étape 4 Charger des données depuis un serveur de tuiles vectorielles

[Class: VectorTileSource - MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/API/classes/VectorTileSource/)

Toujours dans app.js

Ajouter une méthode map.onLoad() qui permet d’écouter l’évènement de chargement de la carte et qui execute les fonctions que vous voulez lors du chargement

Ce que nous cherchons à faire ici est de charger automatiquement des données cartographique au chargement de l’application

Néanmoins avant de procéder il faudra ouvrir publiquement le serveur de tuile pour que notre application puisse lire les tuiles depuis le serveur de tuiles (private pour le moment)

![](https://lh7-us.googleusercontent.com/XhRDZT-Xm0bARJqakq_xisfHknv54073zIGo-FYIdWyQ0qm6FeR-y1JqTUjfa3YFy-BUHFiX7TXv_blDV0pZVdimTxaHrelZuX7vTAWgTzI6Yybg6RixjfwTbE_oITlFk7dDnoJUQMOR-Y1U82NiH1A)

![](https://lh7-us.googleusercontent.com/ZyfN4h15fqzQlMNjVPn96PMcRaGhb4HFw1GeYDt9TAwebrV9Tr9ZQYuSfWjxAr8vID_MJoVxs20sbegJdKoFImIEBkWdG_6TRFLTs-8x1vDkfHRg0hVDSS6uPXv7BUsMORGyQ99bf529OASfFr_77OM)

Vous avez désormais accès à tous les services (OUVERTS) dans la base de données postGIS du cours

![](https://lh7-us.googleusercontent.com/EOXLbd1eVSfQFPF7gQ18RKTwIqsw9Ab6S67Zibuc1p73rV3WVaVYpr2nNDLRf9RWCL0WBt17e95GhMXopYZ5eLsxfZi4-EADgUR0O2m6lQQt3p--f_u3YS_gSfmjavuIAtj1NRn_JjJ6DIg-ZEqG_Yc)

Ensuite vous allez devoir trouver l’url et les informations liées à votre service de tuiles vectorielles pour ce faire il faut aller dans l’interface du serveur de tuile

Cliquez sur le lien JSON

![](https://lh7-us.googleusercontent.com/m0QCMGO014dHaik_vMs8gmt289ZAOCFw6jb6a3TQfU4S_Le-0KU00fOF_wP1RVQgI2iEzUYezCFlCoxhCdZPeY3OQet_OlGaIsXJYKXPgy7bZFmTYyO5qCkCT2Yhdp_U-DMxsSwOLSV-fykCoZ2qRx8)

Puis trouvez l’URL du service, et le id du service qui serviront dans Maplibre pour charger les données 

![](https://lh7-us.googleusercontent.com/XKLa2wqd7NU6RdvJbdPv-okmyNppGkZrK27wIaTVAWNB3R2B2ZsCYIS9-8szvTeB4v2Lb3TseWhiiQsp2_LlTIwRvzduv7h5hJTCY1EIuCg1Kiufu_a4Gf0zk__Y5OEI6IWWfxajfEhwuIktBo2E-wE)

Voici un exemple fonctionnel pour charger les données dans le app.js

// Fonction qui écoute l'événement de fin de chargement de la carte au démarrage de l'app

// ajout des sources et des couches de la carte

map.on('load', function () {

    // ajout de la source des garages

    map.addSource('indice\_emv\_hex\_200m\_result-source', {

        type: 'vector', // https\://maplibre.org/maplibre-style-spec/sources/

        tiles: \['https\://**solid-robot-66qj67v4535v7g-8801**.app.github.dev/geo7630.indice\_emv\_hex\_200m\_result/{z}/{x}/{y}.pbf

'] // URL des tuiles vectorielles attention à bien mettre là votre

    })

    // ajout de la couche des garages

    map.addLayer({

        'id': 'indice\_emv\_hex\_200m\_result', // identifiant de la couche

        'type': 'fill', // type de géométrie de la couche

        'source': 'indice\_emv\_hex\_200m\_result-source', // source des données de la couche

        'source-layer': 'geo7630.indice\_emv\_hex\_200m\_result', // source des données de la couche (id dans le JSON de pgtileserv), majoritairement nom du schéma.nomdelatable

    })

});

Si vous recharger la carte (apres avoir sauvegarder app.js) Vous devriez voir une carte avec des hexagones comme celle-ci

![](https://lh7-us.googleusercontent.com/wvXemGgf7jtJjuwL3jvNgZD5BGPgK4yQabkFRFBag2xSoBgprxg-1nOLqHWdWmvdhejb7b7s3CpraOo3CZ-gits5kpR4KUpKMPKyqqvZHWvyYH9XoYoKoZy9R0SfqFiGP0tXZf7jXky_ASr-XB05AW0)


## Etape 5 Stylisation

Ajouter à votre layer une propriété paint simple pour modifier le rendu cartographique

  'paint': {

            'fill-color': '#FF0000', // Couleur de remplissage (rouge)

            'fill-opacity': 0.5 // Opacité du remplissage (50%)

        }

\
![](https://lh7-us.googleusercontent.com/DTnF3oeLXqshRp2LCKhXtoCyXLlz88DGQlisHmvTYCuvSj8Nq30R00iyX1kF_PZf9PUzYjEkcj2OJoKBmyP61oT2QuDhuRcyrjveCRvE_ma4HwZpm-NLddZVswZkQ3lJ89CVKtj6BpCFcw__iAd2WwM)


##

## Étape 6 style avancé

À la place du style précédent modifier pour appliquer un style un peu plus avancé qui va montrer l’intensité de la composante environnementale dans les inéquités sociales à Montréal

        'paint': {

            'fill-color': \[  // Définition de la couleur de remplissage

                'interpolate',  // Utilisation de la fonction interpolate pour créer un dégradé de couleur

                \['linear'],  // Spécification de l'interpolation linéaire

                \['get', 'acp\_sociale'],  // Récupération de la valeur de la propriété 'acp\_sociale' de la couche

                0, 'rgb(255, 255, 255)', // Pour une valeur de 0 de 'acp\_sociale', utiliser la couleur blanche (RGB 255, 255, 255)

                1, 'rgb(0, 0, 255)' // Pour une valeur de 1 de 'acp\_sociale', utiliser la couleur bleue (RGB 0, 0, 255)

            ],

            'fill-opacity': 0.7 // Définition de l'opacité de remplissage à 0.7 (70%)

        }

![](https://lh7-us.googleusercontent.com/3UFpVrYnMcRy38kAKy_rALMjfE_ZswAaNzh747zNmlli7bCFei3nTEAdUcvayCHIcUgtxH9gPdaUPnmdpnoZ_o8pL6sXXeZr-TcfRG_spfmgWin-FxLnDnS7TVzI8K1uSemn0uxkKCzWiTuDJRBuMiE)


## Étape 7 Ajouter une couche WFS

**Mettez le port 9000 (pg\_featureserv) à public**

Ensuite dans ajouter dans le app.js une nouvelle fonction distincte de toutes les autres qui va s’occuper de charger (addsource + addLayer) une couche WFS

J’ai mis une petite fonction sympas qui calcule une couleur au hasard ca pourra vous aider +tard.

/\*\*

 \* Fonction qui génère une couleur aléatoire en format hexadécimal.

 \* @returns {string} Couleur générée au format hexadécimal.

 \*/

function getRandomColor() {

    // Définition des caractères hexadécimaux possibles

    var letters = '0123456789ABCDEF';

    // Initialisation de la couleur avec le préfixe hexadécimal (#)

    var color = '#';

    // Boucle pour générer chaque caractère de la couleur (6 caractères)

    for (var i = 0; i < 6; i++) {

        // Sélection aléatoire d'un caractère hexadécimal

        color += letters\[Math.floor(Math.random() \* 16)];

    }

    // Retourne la couleur générée au format hexadécimal

    return color;

}

/\*\*

 \* Fonction qui charge une couche WFS depuis pgFeatureServ et l'ajoute à la carte MapLibre.

 \* Cette fonction ajoute une source de données GeoJSON à partir d'une URL pgFeatureServ

 \* et ajoute une couche de remplissage ('fill') à la carte MapLibre en utilisant cette source de données.

 \*/

function loadWFS() {

    // Ajout de la source de données des arrondissements depuis pgFeatureServ

    map.addSource('arrondissements-source', {

        type: 'geojson', // Type de source de données

        data: 'https\://solid-robot-66qj67v4535v7g-9000.app.github.dev/collections/geo7630.arrondissements/items.json?limit=10000' // URL pgFeatureServ GeoJSON

    });

    // Ajout de la couche des arrondissements à la carte MapLibre

    map.addLayer({

        'id': 'arrondissements', // Identifiant de la couche

        'type': 'fill', // Type de géométrie de la couche (remplissage)

        'source': 'arrondissements-source', // Source des données de la couche

        'paint': {

            'fill-outline-color': 'black',

            'fill-color': getRandomColor(), // Si la condition est vraie, utilisez une couleur aléatoire

            'fill-opacity': 0.3 // Opacité de remplissage (30%)

        }

    });

}

Ici nous allons procéder autrement, nous allons créer un bouton dans le HTML pour charger une source WFS, car si vous l’avez remarqué correctement, rien ne se passe si vous faites juste recharger la carte, c’est normal la fonction loadWFS() n’est exécuté par aucun déclencheur (chargement map.onLoad ou autre …)

Idéalement après l’équipe 7 autour de la ligne 170++

![](https://lh7-us.googleusercontent.com/e__WmWICJ0_Ks61fOXIsdGcuww8i4EA9lpXf-jOn0e-EPFXTljvffUU8vaOXr3GewvSEG2SbyWW0nYZNiBsXfOzC_4P9ExwtjUU_NeJ-f1atGrBNqrPuPuaDoXO4GTk4g1exnNpQIC9H2zywrcmMZzQ)

Code ici : 

    \<button type="button" class="btn btn-primary" onclick="loadWFS()">Load WFS Data\</button>

![](https://lh7-us.googleusercontent.com/vQXmf8vguWQLIos76_g-c3nsOyt-mtRArf-gwVDFe628-cpHfXFvynPdMrEWgV3jNAJ9AjQo9lkJ44dvZc_caN6VNVEH1ha1KZ0fAe2RSnL3hYNCrv44jcb60YpyPQbdMhF1KHanauEgnqj80zRYyQQ)

Maintenant cliquez sur le bouton est la magie opère (si vous êtes un bon magicien ;-) héhé )

![](https://lh7-us.googleusercontent.com/rqzNsyzKACdandg0_-Oa6zWopj2srSu1uYtaCjcc6UvqdRVIRZ4UEhViKaix5E8SJx6MfPSidHVsGpvKWov5sRbkujp9FuWihlhXeVmwkLmr69Wef6mBcFextsF6FbQagzJZTSHPminD3k0iR2xYAJ4)

Bravo semaine prochaine on monte le niveau encore un peu

- Filtres dynamique

- Déplacement automatisé

- Événements de souris (popup et autres)

- Visualisation avancée
