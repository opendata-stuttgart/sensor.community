---
title: Montera
---

> ⚠️ **VIKTIGT ANMÄRKNING** Installera firmware innan montering! Se avsnittet __firmware flasher__.

### NodeMCU v3
Obs! Våra instruktioner hänvisar till version 3 av NodeMCU. Detta kan kännas igen av anslutningarna VU och G (se ritning).

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em" loading="lazy"/>
<small>Copyright: roman-minyaylov, MIT License</small>


<img src="../docs/airrohr/nodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy"/>

##### När du är klar så ska det se ut

### Anslut SDS011
Stiften är numrerade från HÖGER till VÄNSTER, se till att kablarna sitter på stiften när du ansluter, eftersom de flesta Dupont-kablar också passar mellan stiften.
```bash
SDS011 Stift 1 -> Stift D1 / GPIO5
SDS011 Stift 2 -> Stift D2 / GPIO4
SDS011 Stift 3 -> GND
SDS011 Stift 4 -> oanvänd
SDS011 stift 5 -> VU (NodeMCU v3) / VIN (NodeMCU v1, v2)
SDS011 stift 6 -> oanvänd
SDS011 stift 7 -> oanvänd
```

### Löd tillsammans BME280
<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center" loading="lazy"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;" loading="lazy"/>

Anslut stifthuvudet med BME280-kortet. Löd det från baksidan. Avstånden mellan stiften är mycket små så var tålamod och försiktig.

Tricket är att sätta lödkolvspetsen på stiftet, värma upp det lite och applicera sedan lödet lätt.


### Anslut BME280
Pins är numrerade från VÄNSTER till HÖGER.
```bash
VIN -> Stift 3V3 (3.3V)
GND-> GND / G
SDA -> PIN D3
SCL -> Stift D4
```

### Fäst allt ihop

##### Knyt ihop NodeMCU och SDS011
<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg" loading="lazy"/>
Använd en buntband för att länka NodeMCU (ESP8266) och SDS011-sensorn så att Wifi-antennen pekar bort från sensorn

##### Anslut flexibelt rör
<img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em" loading="lazy"/>
<img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;" loading="lazy"/>

* anslut det flexibla röret till SDS011-sensorn
* Använd en annan buntband för att fästa BME280-temperatursensorn till röret
* För USB-kabeln genom röret. Montera SDS011 med NodeMCU vänd uppåt och fläkten vänd mot botten
 
##### Skjut in sensorn i röret
* Skjut in delarna i röret så att det fastnar inuti
* USB-kabel, flexibelt rör och BME280 ska se ut ur rörets ände
* Skjut det andra röret på det första.

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg" loading="lazy"/>

##### Efterbehandling
* Placera temperaturgivaren på det flexibla röret så att det ligger på rörets kant.
* Klipp av det flexibla röret i slutet av röret
* Valfritt: du kan täcka rörets öppna ändar med ett fint nät. Så luft kan cirkulera men insekter stannar utanför
 
<img src="../docs/airrohr/position-bme280.jpeg" loading="lazy"/>
