---
title: Aufbau
---


> ⚠️ **WICHTIGE ANMERKUNG**
Installiere vor dem Zusammenbau die Firmware!
Siehe Abschnitt __Firmware-Flasher__.

### NodeMCU v3
Hinweis: Unsere Anweisungen beziehen sich auf Version 3 der NodeMCU. Dies ist an den Anschlüssen VU und G zu erkennen (siehe Zeichnung). 

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em" loading="lazy"/>
<small>Copyright: roman-minyaylov, MIT-Lizenz</small>


<img src="../docs/airrohr/nodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy"/>

####### Wenn du fertig bist, sollte es so aussehen


### Verdrahten des SDS011
Die Stifte sind von RECHTS nach LINKS nummeriert. Achte beim Anschließen darauf, dass die Kabel auf den Stiften sitzen, da die meisten Dupont-Kabel auch zwischen die Stifte passen.

```Bash
SDS011 Stift 1 -> Stift D1 / GPIO5
SDS011 Stift 2 -> Stift D2 / GPIO4
SDS011 Stift 3 -> GND
SDS011 Pin 4 -> unbenutzt
SDS011 Stift 5 -> VU (NodeMCU v3) / VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> unbenutzt
SDS011 Pin 7 -> unbenutzt
```

<br>

💡 Weitere [von unserer Firmware unterstützten Sensoren](https://github.com/opendata-stuttgart/sensors-software/blob/master/airrohr-firmware/Readme.md) 


### Zusammenlöten BME280
<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:48%; padding-right: 0.5em" class="items-center" loading="lazy"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;" loading="lazy"/>

Verbinde die Stiftleiste mit der BME280-Platine. Löte diese von der Rückseite zusammen. Die Abstände zwischen den Pins sind sehr klein, sei also geduldig und vorsichtig.  

Der Trick besteht darin, die Lötkolbenspitze auf den Pin aufzusetzen, diese etwas zu erwärmen und dann das Lötzinn leicht aufzutragen.  

### Verdrahten den BME280
Die Stifte sind von LINKS nach RECHTS nummeriert.

```Bash
VIN -> Stift 3V3 (3,3V)
GND-> GND/G
SDA -> PIN D3
SCL -> Stift D4
```

### Alles miteinander verbinden

##### Verbinde die NodeMCU und den SDS011 miteinander
<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg" loading="lazy"/>
Verwende den Kabelbinder, um die NodeMCU (ESP8266) und den SDS011-Sensor so zu verbinden, dass die Wifi-Antenne vom Sensor weg zeigt.

 ##### Flexiblen Schlauch anschließen
 <img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em" loading="lazy"/>
 <img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;" loading="lazy"/>

* Schließe den flexiblen Schlauch an den Sensor SDS011 an.
* Verwende den zweiten Kabelbinder, um den Temperatursensor BME280 am Schlauch zu befestigen
* Führe das USB-Kabel durch das Rohr. Montiere den SDS011 so, dass die NodeMCU nach oben und der Lüfter nach unten zeigt.
 
##### Sensor in das Rohr einschieben
* Schiebe die Teile in das Rohr, so dass es innen eingeklemmt wird.
* USB-Kabel, flexibler Schlauch und BME280 sollten aus dem Ende des Schlauchs herausschauen.
* Schiebe das andere Rohr drauf.

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg" loading="lazy"/>

###### Endbearbeitung
* Positioniere den Temperatursensor so auf dem flexiblen Schlauch, dass er sich am Rand des Rohrs befindet.
* Schneide den flexiblen Schlauch am Ende des Rohrs ab.
* Optional: Du kannst die offenen Enden des Rohrs mit einem feinen Netz abdecken. So kann die Luft zirkulieren, aber die Insekten bleiben draußen.
 
<img src="../docs/airrohr/position-bme280.jpeg" loading="lazy"/>

### Platzierung
Der ideale Platz wäre 1,5 bis 3,5 Meter über der Straße und gut belüftet. Dies ist jedoch nicht für alle Personen möglich, daher werden bei der Anmeldung Angaben wie Höhe über dem Boden und Lage zur Straße abgefragt.
