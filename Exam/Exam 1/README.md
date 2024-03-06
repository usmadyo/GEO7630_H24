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

~~_ANCIEN HOST :_  **_geo7630h24.czxpipfmtgbl.us-east-2.rds.amazonaws.com_**~~

**NOUVELLE HOST : geo7630h24.cvwywmuc8u6v.us-east-1.rds.amazonaws.com**

PORT : 5432

DATABASE: GEO7630H24

USERNAME: votre code ms

PASSWORD: password

NOM DU SCHEMA : VOTRECODEMS

NOM DE VOTRE TABLE: VOTRECODEMS\_EXAM1

![](https://lh7-us.googleusercontent.com/NwGZb89MkgW6_3HULTzTOkSu2n-0wm3CCu2LRGYUDzu1WeZTSwOAyQZnH-lH7xWl4fSPfvZ32NNA6d1ziOzavx0eb6d3S3t9L5h6AXOJbkLHjn9vRW7i0zEIVdpGkrZvogtDa7L2ijygb53jgkl-raM)

Exemple de processus donné à titre indicatif de la marche à suivre. 

Bien certainement il y a des pièges qu’il faudra déjouer.

Indice : EPSG:4326 vs EPSG:3857

**TABLE QUALIFIER : VOTRECODEMS**![](https://lh7-us.googleusercontent.com/g55L4C4npTkHOmZCVRVh2sGJZLW_8Ye2rTT-dYOEoRbfndxANoPcJOUGt-lAdWlzDLLvaAzN9QuPcrpCH2sgrIGwBNbwqPpTBcmrti1IN4z9Z75H3vSV-rH2SdxM_hzUY48gsWN_5v6XNFH7OYAQ32Y)

\
![](https://lh7-us.googleusercontent.com/lLkTMdKQbHqTNfJKPRm2MPCUnDvDxPUosJaiUzEFKeMmgXSb2Q1K1Cd_DGyHfO5RKfmwwUYbdYJajar1Grg9LOl5cX0FGFGmE0L5VpG1Yw9iIRq63PymWzi193TZUv4ODyowePvUhk9JL8tITSOaXmc)
