---
title: Montage
---

> ⚠️ **REMARQUE IMPORTANTE**
Installez impérativement le micrologiciel avant le montage !
Voir la section __Pilotes & micrologiciel__.

### NodeMCU V3
Remarque: Nos instructions font référence à la version 3 de la platine NodeMCU. Vérifiez les connexions VU et G (voir le schéma).

<img src="../docs/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em"/>
<small>Copyright: roman-minyaylov, MIT License</small>


<img src="../docs/nodemcu-v3-bme280.jpeg" style="margin-top: 1em"/>

##### Une fois l'assemblage terminé, cela devrait ressembler à ça. 


### Connecter le SDS011
Les connecteurs sont numérotés de DROITE à GAUCHE. Assurez-vous de bien emmanchez le connecteur dans la prise.
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
<img src="../docs/solder-a-bme-280.jpeg" style="width:49%; padding-right: 1em" class="items-center"/>
<img src="../docs/solder-bme-280.jpeg" style="width:49%;">

Placez la série de connecteur au recto et soudez au verso. Soyez méticuleux pour ne pas créer de court-circuit.

Chauffez la base de soudure et le connecteur avec la pointe du fer à souder puis appliquer l'étain avec parcimonie.  

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
<img src="../docs/tie-air-quality-sensor- together.jpeg"/>
Utilisez un serre-câbles pour attacher le NodeMCU et le SDS011, de manière à ce que l'antenne Wifi soit à l'opposé du capteur de particules fines.

 ##### Tube flexible
 <img src="../docs/sds011-with-tube.jpeg" style="width:49%; padding-right: 1em"/>
 <img src="../docs/bme280-tied-to-tube.jpeg" style="width:49%;">
 
* Connectez le tube flexible sur le capteur de particules fines SDS011.
* Avec un serre-câbles, attachez le thermomètre/hygromètre BME280 sur le tube flexible.
* passez le câble USB dans un des coudes PVC. Placez le SDS011 de manière à ce que le NodeMCU soit vers le haut et le petit ventilateur vers le bas. Le tube flexible et le câble USB sont du même côté.
 
 ##### Coudes PVC
* Insérez l'ensemble SDS011/NodeMCU dans un des coudes PVC.
* Le câble USB, le tube flexible et le BME280 doivent être visible comme ci-dessous.
* Installez le second coude PVC sur le premier.

<img src="../docs/sds011-jammed-into-tube.jpeg"/>

 ##### Finition
* Positionnez le BME280 sur le tube flexible au niveau du bord du coude PVC.
* COupez le tube flexible au ras du tube PVC.
* En option : vous pouvez installez du filet moustiquaire au extrémités des coudes PVC pour éviter l'entrée d'insectes.
 
<img src="../docs/position-bme280.jpeg"/>
