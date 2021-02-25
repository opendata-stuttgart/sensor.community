---
title: Montage
---

> ⚠️ **REMARQUE IMPORTANTE**
Installez impérativement le micrologiciel avant le montage !
Voir la section __Pilotes & micrologiciel__.

### NodeMCU V3
Remarque: Nos instructions font référence à la version 3 de la platine NodeMCU. Vérifiez les connexions VU et G (voir le schéma).

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em" loading="lazy"/>
<small>Copyright: roman-minyaylov, MIT License</small>


<img src="../docs/airrohr/nodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy"/>

##### Une fois l'assemblage terminé, cela devrait ressembler à ça. 


### Connecter le SDS011
Les connecteurs sont numérotés de DROITE à GAUCHE. Assurez-vous de bien emmancher le connecteur dans la prise.
```bash
SDS011 Pin 1 -> Pin D1 / GPIO5
SDS011 Pin 2 -> Pin D2 / GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> inutilisé
SDS011 Pin 5 -> VU (NodeMCU v3) / VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> inutilisé
SDS011 Pin 7 -> inutilisé
```

### Soudure BME280
<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center" loading="lazy"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;" loading="lazy"/>

Placez la série de connecteurs au recto et soudez au verso. Soyez méticuleux pour ne pas créer de court-circuit.

Chauffez la base de soudure et le connecteur avec la pointe du fer à souder puis appliquez l'étain avec parcimonie.  

### Connecter le BME280
Les connecteurs sont numérotés de GAUCHE à DROITE.
```bash
VIN -> Pin 3V3 (3.3V)
GND->  GND/G
SDA -> PIN D3
SCL -> Pin D4
```

### Assemblage

 ##### NodeMCU et SDS011
<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg" loading="lazy"/>
Utilisez un serre-câble pour attacher le NodeMCU et le SDS011, de manière à ce que l'antenne Wifi soit à l'opposé du capteur de particules fines.

 ##### Tube flexible
 <img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em" loading="lazy"/>
 <img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;" loading="lazy"/>

* Connectez le tube flexible sur le capteur de particules fines SDS011.
* Avec un serre-câble, attachez le thermomètre/hygromètre BME280 sur le tube flexible.
* passez le câble USB dans un des coudes PVC. Placez le SDS011 de manière à ce que le NodeMCU soit vers le haut et le petit ventilateur vers le bas. Le tube flexible et le câble USB sont du même côté.

 ##### Coudes PVC
* Insérez l'ensemble SDS011/NodeMCU dans un des coudes PVC.
* Le câble USB, le tube flexible et le BME280 doivent être visibles comme ci-dessous.
* Installez le second coude PVC sur le premier.

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg" loading="lazy"/>

 ##### Finition
* Positionnez le BME280 sur le tube flexible au niveau du bord du coude PVC.
* Coupez le tube flexible au ras du tube PVC.
* En option : vous pouvez installez du filet moustiquaire aux extrémités des coudes PVC pour éviter l'entrée d'insectes.
 
<img src="../docs/airrohr/position-bme280.jpeg" loading="lazy"/>

### Installation
La position idéale serait de 1,5 à 3,5 mètres au-dessus du niveau de la chaussée avec une bonne circulation de l'air. Ceci n'est bien sûr pas toujours possible. C'est pourquoi, lors de l'enregistrement de la station, il est demandé d'indiquer la hauteur et la position par rapport à la rue.
