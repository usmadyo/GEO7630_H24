****

TP2 - Intégration des données vectorielles et matricielles

****

L’objectif est de vous familiariser avec l’outil de traitement et d’intégration (ETL ou ELT) FME, ainsi que de préparer vos données pour les TP3.

****

- Lire ou charger des données depuis une URL, une BD ~~ou un fichier~~

- Valider l’intégrité des données entrantes

- Nettoyer (si besoin)

- Reprojeter

- Calculer, analyser

- Valider l’intégrité des données sortantes

- Intégrer dans une base de données

- Choisir une symbologie adéquate pour comprendre la problématique

- Documenter l’ensemble du processus dans un outil de développement collaboratif

****


# Prérequis pour le TP2

****

- [Compte Github](https://github.com/)

- Faire une demande [FME pour étudiant](https://www.safe.com/free-fme-licenses/students/?gclid=Cj0KCQiA8aOeBhCWARIsANRFrQHboqn2kCWedX1W7KI-gB1Be6CzwFZRFAfr6bjBlrtlL0029J3PqfAaAm1oEALw_wcB)

- Un ou plusieurs nuages de points Lidar format .las (facultatif)

- Une ou plusieurs Images aériennes format libre 

- Données vectorielles qualitatives format libre

- Données vectorielles quantitatives format libre

- Données vectorielles avec une variable 3D format libre

****


#

# Consignes 

****

1. Le TP2 doit être remis sous la forme d’un dépôt github (obligatoire)

2. Toutes les données doivent être traitées dans un seul workbench (tp2.fmw)

3. La projection de TOUTES les données sortantes doit être EPSG-3857

4. Un schéma explicatif du processus ETL / ELT (draw\.io ou autre) (sous forme d’image dans le README.md

5. Toute la nomenclature des fichiers, tables, vues, colonnes doit être en minuscule et underscore et ne pas commencer par un chiffre.

6. La connexion à la base de données dans FME doit se configurer comme suit

7. Un projet QGIS avec les différentes couches de données et un fichier de style .sld

8. Une documentation explicative de l’ensemble de votre travail dans le fichier /TP2/README.md rédigé en MARKDOWN

****


# Précisions

****


## 1 - Architecture du dépôt github

****

Vos répertoires, qui serviront d’architecture pour votre dépôt Github devra être identique à celui ci-dessous

****

![](https://lh7-us.googleusercontent.com/SEn0bziPgktZ3Mb_QDF0LeoFU7UHMZ3LnfR0O4JqHx-N841Jy2Oiq1_vnLEUvbH8mvpxE0TbVb-p6Ly-SHuo4WNR4wY3oVndHzy9mqqPNk8mp7QcMYjsi9yJpJdtmxhDkxg31tBb69J7daJO5afChoM)


## 2 - Workbench FME

****

Votre workbench doit être bien structuré avec des “bookmarks” et bien annoté pour que le lecteur comprenne les enjeux d’un transformer ex : ![](https://lh7-us.googleusercontent.com/OVtJq7yfQen8IF3t-G0w8Tp_WG3x6MZuA3ZrAIhlyE9FZbDUzBGMuu0ds1kooiXPnWL-UkhCTCrb7oKrNzStaYQ-AGLgIBWauo4HnziT-9eS-kgQV2DlpJrczNpH2rDY7KiMq0D0aL2LJX9wqm3OXcM)


## 4 - Schématisation du processus

****

Grâce à l’outil de votre choix (ex: [draw.io](http://draw.io)) vous devez schématiser simplement avec les étapes avec peu de mots. 

****

Chacun des processus devra être regroupé par catégorie

Vectoriel, Matriciel, PointCloud

****

Ces schémas serviront de support à votre documentation dans le README.md du projet

****

ex: ![](https://lh7-us.googleusercontent.com/TgvjN-bY5g5FuDvh1brsW3w-wOGHVEIASKT4TGm5bGKeWfX4nOcJ5OLrhD4JQYK8WoDD6Ce1aWV0LFFuW3lSBUWMxT6uYi4LY9dz-nVJVCHXvRDuByjp6C3gNtxvgVwrKlpSwRl3OBYk5Ygy93-WTSA)


## 7 - Projet QGIS

****

Un fichier .qgz (Projet QGIS) devra être fourni avec toutes les couches de données 2D et les données matricielles

****

Les données doivent provenir de la base de données Postgresql locale

****

Vos données 2D devront être accompagnées d’une symbologie décrivant le phénomène d’une manière simple et vulgarisé pour qu’un enfant de 10 ans puisse comprendre votre carte.

****

Le projet devra s’ouvrir sans que les couches, ni la symbologie soient brisées.

****


## 8  - Documentation

****

Vous pouvez utiliser un traducteur comme celui-ci (spécialement pour Google Docs) pour générer du markdown à partir de google doc ou tout autre format (il faudra trouver un autre convertisseur, si le format est différent) <https://mr0grog.github.io/google-docs-to-markdown/>

****

****


# Grille d’évaluation

****

1. Respect des consignes :  **10%**

2. Capable de rouler le FMW sans erreur du premier coup :  **10%**

3. Workbench FME bien structuré, bien documenté :  **10%** (tel que vu en laboratoire)

4. Qualité de la validation intrantes et nettoyage :  **15%**

5. Qualité de la validation sortante :  **15%**

6. Qualité de l’analyse technique :  **10%**

7. Qualité de la méthode et sémiologie choisi pour représenter l’analyse :  **10%**

8. Documentation globale de l’approche ETL/ELT et schéma explicatif : **10%**

9. Un projet QGIS qui ouvre automatiquement les données depuis la base de données Postgis et la symbologie depuis la base de données postgis : **10%**
