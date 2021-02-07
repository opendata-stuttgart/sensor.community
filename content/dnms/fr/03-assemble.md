---
title: Montage
---

> ⚠️ **REMARQUE IMPORTANTE**
Installez impérativement le micrologiciel avant le montage ! 
Voir la section Pilotes & micrologiciel.


### Microphone

Le microphone est basé sur une platine Pesky Products avec un composant MEMS ICS-43434. VOus pouvez trouver cette platine sur le [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/). 

<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>


##### Corps du microphone
Le corps du microphone est réalisé avec du tube de polystyrène .500" (12.7mm). Ce diamètre permet d'insérer directement le microphone dans la plupart des calibrateurs.

Le prototype a été fabriqué avec un [tube Evergreen No. 236](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

<img src="../docs/dnms/dnms-noise-measuring-microphone-anschluesse.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>
<br>
La platine doit être limé au diamètre du tube. Utilisez du ruban de masquage pour protéger l'orifice du mircophone.
<br>

<img src="../docs/dnms/dnms-noise-measuring-microphone-protection.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection-front.jpg" style="width:41%; margin: 2em 0" loading="lazy"/>


Soudez les 6 câbles silicone en notant bien les connexions.

<img src="../docs/dnms/dnms-noise-measuring-microphone-with-cable.jpg" style="display: block; width:40%; margin: 2em 0" loading="lazy"/>
Coupez un morceau de tube de 115 mm.
<br>
Collez le microphone sur des morceaux de ruban de masquage croisés. Faites passser les câble dans le tube.
<br>
<img src="../docs/dnms/dnms-noise-measuring-microphone-preparing-housing.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-housing.jpg" style="width:42%; margin: 2em 0" loading="lazy"/>

Refermez bien l'extrémité du tube avec le ruban de masquage.

<img src="../docs/dnms/dnms-noise-measuring-microphone-tube.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>

Vous pouvez maintenant remplir le tube avec de la résine isolante. Cette étape est nécessaire pour éviter tout phénomène de résonnance et ainsi obentir des valeurs calibrées et reproductibles.

Le prototype a été développé avec de la [résine PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900) de la marque Copaltec GmbH.

##### Spécifications:
* rigidité diélectrique : 28 kV/mm
* résistance directe : 5,8.1014 ohm/cm
* résistance de surface : 1,3.1016 ohm
* proportions résine/durcisseur : 2 : 1
* durée d'usage après mélange: 20 à 30 min.
* durcissement : 16 à 30 h
* dureté définitive : 10 à 14 jours
* viscosité après mélange : 500 à 600 mPa.s
* dureté Shore : D 50 to 55 (ISO 868, DIN 53505)
* conductivité thermique : 0,3 W/mK
* température d'application : - 20 to +130 °C

La [résine polyuréthane UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) de la marque Electrolube convient également.

15 grammes de résine environ sont nécessaires au remplissage de chaque tube.

<img src="../docs/dnms/dnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy"/>

Après durcissement de la résine, retirez le ruban de masquage. Le microphone est prêt !


### Boitier du DNMS

Il est possible d'obtenir un boîtier bon marché et disposant de bonnes propriétés acoustiques sur la base de tubes pour installations électriques. La pièce principale est un morceau droit de 25 mm de section sans élargissement. Un manchon d'enfichage de 25 mm de diamètre, un coude de 90° et un connecteur presse-étoupe M25 IP68 viennent s'y ajouter.
<br>
La portion droite fait environ 160 mm. Le manchon vient prolonger cette partie, il est collé avec de la colle synthétique ou silicone.

Collez le connecteur presse-étoupe M25 IP68 au manchon.

Fixez le coude de 90° (avec seulement un peu de colle pour pouvoir ultérieurement mettre à jour le firmware de la platine Teensy) une fois le circuit imprimé installé. Placé vers le bas, il empêchera l'humidité d'atteindre le DNMS.

<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

Installez le câble reliant le DNMS au processeur de communication. S'il fait plus de 250 mm de long, l'extension du bus I2C intégrée dans la platine AIRROHR V1.4 est nécessaire. Un câble RJ12 est utilisé pour relier les platines AIRROHR V1.4 et DNMS - T4 V1.4.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

Quand tout est bien connecté, vous pouvez coller les différentes parties.

Résultat:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

La platine portant le microcontrôleur NodeMCU peut être placé dans n'importe quel boitier électrique.

### Protection contre les intempéries

Les boitiers doivent être étanches. Seul l'orifice du microphone peut être un point senible. TDK, le fabricant du composant a publié des recommandations pour protéger les microphones MEMS de la poussière et des liquides mais ces composants sont difficiles à trouver et n'ont pas été testé par nos soins.
<br>
Par contre, il est nécessaire d'installer une bonnette en mousse. Un morceau d'éponge synthétique peut convenir. Les raisons sont les suivantes :
* protection contre le bruit du vent.
* protection contre les gouttes d'eau. Pour éviter la condensation, laissez une petite cavité entre la bonnettte et l'orifice du microphone.
* protection contre les UV. Une lumière intense peut réduire la durée de vie du microphone et influencer les mesures.

<img src="../docs/dnms/dnms-noise-measuring-microphone-bonette.jpg" style="width:45%; margin: 3em 0" loading="lazy"/>

Les bonnettes pour microphones de mesure sont chères mais vous pouvez facilement découper des bonnettes rondes.

Consultez [ce site](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2).

### Position du microphone 

Il est important de placer le microphone dans un espace le plus libre possible pour éviter les phénomènes de réflexion sur les surfaces environnantes. La distance entre les murs et le sonomètre doit être la plus grande possible. Essayez de ne pas monter le DNMS directement contre le mur. Une distante d'un mètre serait idéale. L'erreur dans les mesures est encore raisonnable pour une distance de 50 cm.
<br>
Les meilleures positions sont les rambardes de balcon ou encore sur un petit mât.
<br>
Vous pouvez éventuellement placer le DNMS sur le coin d'un bâtiment pour entrainer l'annulation des phénomème de réflexion.
<br>
Un petit mât de 1 mètre de haut est la solution si vous placer le DNMS dans un jardin. Ceci atténuera la réflexion du son sur le sol (le revêtement a aussi une influence).
<br>
Il faut être conscient que le DNMS mesure le bruit ambiant. La pollution sonore générée par des voies ferrées ou les routes ne pourra être mesurée que de manière approximative. Cependant, plus vous êtes proche de la source, plus la détection du bruit est précise. Des améliorations du firmware pourraient permettre à l'avenir de mesurer le niveau sonore d'une source précisément identifiée.

<img src="../docs/dnms/measuring-sensor-on-balcony.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<img src="../docs/dnms/measuring-sensor-on-terasse.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<br>
<img src="../docs/dnms/measuring-sensor-on-wall.jpg" style="width:99%; margin-bottom: 2em;" loading="lazy"/>
