---
title: Montage
---

> ⚠️ **BELANGRIJK**
Installeer eerst de firmware voordat je de sensor monteert
Lees daarover in de __firmware flasher__ sectie.

### NodeMCU v3
Let op: onze instructies gaan over versie 3 van de NodeMCU. Deze kan je herkennen aan de pinnen VU en GNG (zie tekening).

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em" loading="lazy"/>
<small>Copyright: roman-minyaylov, MIT License</small>

##### Dit is hoe het eruit zou moeten zien wanneer je klaar bent


### Aansluiten van de SDS011
De pinnen zijn genummerd van RECHTS naar LINKS, zorg ervoor dat de kabels op de pinnen zitten, de meeste Dupont kabeltjes passen ook tussen de pinnen.
```bash
SDS011 Pin 1 -> Pin D1 / GPIO5
SDS011 Pin 2 -> Pin D2 / GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> niet aangesloten
SDS011 Pin 5 -> VU (NodeMCU v3) / VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> niet aangesloten
SDS011 Pin 7 -> niet aangesloten
```

### Solderen van de BME280
<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center" loading="lazy"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;" loading="lazy"/>

Steek de pinheader vanaf de achterkant (dekant zonder componenten) door het BME280 bord. Soldeer vanaf de kant met de componenten. De afstand tussen de pinnen is erg klein, dus wees geduldig en voorzichtig. De truuk is om de soldeerbout tegen de pin te houden, deze op te warmen en dan de soldeer toe te voegen.

### Aansluiten van de BME280
Pinnen zijn genummerd van LINKS naar RECHTS.
```bash
VIN -> Pin 3V3 (3.3V)
GND->  GND/G
SDA -> PIN D3
SCL -> Pin D4
```

### Testen
Voordat je nu alles in elkaar gaat zetten, is het verstandig om eerst te testen of de set werkt. Sluit de sensor aan op de USB voeding en wacht tot de senser een wifi server heeft opgezet. Zoek daarvoor naar een draadloos netwerk met de naam "airrohr_<sensor_UID>". Maak daar verbinding mee en ga in je browser naar http://192.168.4.1/config. Stel bij Sensors in dat je geen DHT22 hebt maar een BME280. Dit hoeft uiteraard maar 1 keer en bij latere stappen dus niet meer. Sla dit op en herstart het station. Wacht tot het airrohr wifi netwerk weer bereikbaar is, maak verbinding en ga naar http://192.168.4.1/values en kijk of er goede metingen binnenkomen.
Lees over het configureren eventueel meer in de __Configuratie__ sectie. Optioneel kun je de configuratie ook eerst doen, voordat je verder gaat met in elkaar zetten.


### Alles bij elkaar binden

##### Bind de NodeMCU en de SDS011 samen
<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg" style="display: block" loading="lazy"/>
Gebruik een kabelbinder om de NodeMCU en de SDS011-sensor aan elkaar te verbinden zodat de WiFi-antenne van de sensor afwijst

##### Verbind de flexibele slang
<img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em" loading="lazy"/>
<img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;" loading="lazy"/>

* Steek de flexibele slang op de SDS011 sensor
* Gebruik een kabelbinder om de BME280-temperatuursensor aan de slang te binden
* Haal de USB-kabel door de pijp. Monteer de SDS011 met de NodeMCU naar boven wijzend en de ventilator naar beneden
 
 ##### Stop de sensor in de pijp
* Duw de onderdelen in de pijp, zodat ze stevig vast zitten
* De USB-kabel, flexibele slang en de BME280 zouden uit de pijp moeten steken
* Duw het andere pijpdeel op de eerste

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg" loading="lazy"/>

 ##### Afwerking
* Positioneer de temperatuursensor op de flexibele slang, zodat deze bij het uiteinde van de pijp zit.
* Knip de flexibele slang af aan het eind van de pijp
* Optioneel: je kan de open einden van de pijp bedekken met een fijn gaas. Zo kan de lucht circuleren maar hou je insecten buiten.
 
<img src="../docs/airrohr/position-bme280.jpeg" loading="lazy"/>
