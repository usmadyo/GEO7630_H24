GEO7630H24 examen #1 

5 MARS 2024 17h30 

Salle A-4160

Chargé de cours : Clément Glogowski

Démonstrateur : Alexis-Raphael, Gauthier


# Micro TP FME<a id="micro-tp-fme"></a>

Vous devrez produire une couche d’index H3 qui représente la quantité de commerces vacants dans chacun des hexagones.

**\*\*Données entrantes\*\*: Couches de commerces :** [**geojson**](https://data.montreal.ca/dataset/f8582c4d-a933-4306-bb27-d883e13dd207/resource/7e736f37-c935-4028-8ffe-02e1403c1eaa/download/occupation-commerciale-2022.geojson)

https\://data.montreal.ca/dataset/f8582c4d-a933-4306-bb27-d883e13dd207/resource/7e736f37-c935-4028-8ffe-02e1403c1eaa/download/occupation-commerciale-2022.geojson

**\*\*Données entrantes \*\*: Couche pour créer les hexagones de remplissage :** [**geojson**](https://data.montreal.ca/dataset/b628f1da-9dc3-4bb1-9875-1470f891afb1/resource/92cb062a-11be-4222-9ea5-867e7e64c5ff/download/limites-terrestres.geojson)

https\://data.montreal.ca/dataset/b628f1da-9dc3-4bb1-9875-1470f891afb1/resource/92cb062a-11be-4222-9ea5-867e7e64c5ff/download/limites-terrestres.geojson

- \*\*Astuces\*\* Il faudra ajouter un vertexCreator pour créer correctement la géométrie les coordonnées x et y (long,lat) pour la couche des commerces.

- \*\*Requis \*\* Vous devrez \*\*filtrer\*\* les commerces pour avoir seulement les commerces vacants sur la propriété: USAGE1

- \*\*Requis \*\*La taille de vos hexagones doit être de résolution 9 (0.2km par segments)

\*\*Indices \*\*: 54 est le nombre de commerces dans le polygone avec le plus de commerces vacants

\*\*Résultat à fournir\*\* : 

Votre WRITER devra écrire les hexagones dans la base de données suivante :

NAME : GEO7630H24

HOST :  **geo7630h24.czxpipfmtgbl.us-east-2.rds.amazonaws.com**

PORT : 5432

DATABASE: GEO7630H24

USERNAME: votre code ms

PASSWORD: password

NOM DU SCHEMA : geo7630

NOM DE VOTRE TABLE: VOTRECODEMS\_EXAM1

![](https://lh7-us.googleusercontent.com/gq78uLHlhiD4WFaO41vymqWw_5OTF6mCSz3MiNeHLAJSVT1ETzfVpbToG8lm4nYCDgbdaKeQi2G4ZaoBiUU_UpGTCV8mNfdUeLOTH6vesj4vSiUbDKRpzKb5NWLc_RRPCIZvMtvvUBg0DuDTS4kOO1E)

Exemple de processus donné à titre indicatif de la marche à suivre. 

Bien certainement il y a des pièges qu’il faudra déjouer.

Indice : EPSG:4326 vs EPSG:3857

\
![](https://lh7-us.googleusercontent.com/NtZXxetLfejB6znWSyFzZgCe_pOxeXI9Ife5uA1ZH-J1IGz35ctegv0OJzr_sSZsaAmP5jEqjxl_ZTPJcTx6LKqlQQVFW7u1_ZOyj4sflnAaibtPmNeMTOghdK-1Ai9ADnSMzQBUmw5jujxlUfcLnWI)
