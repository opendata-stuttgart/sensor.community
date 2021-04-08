---
title: Salikt
---

> ⚠️ **SVARĪGA PIEZĪME**
Pirms montāžas instalējiet programmaparatūru!
Skatiet __firmware flasher__ sadaļu.

### NodeMCU v3
Piezīme: mūsu norādījumi attiecas uz NodeMCU 3. versiju. To var atpazīt pēc savienojumiem VU un G (skatīt rasējumu).

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em" loading="lazy"/>
<small>Autortiesības: roman-minyaylov, MIT licence</small>.


<img src="../docs/airrohr/nodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy"/>

##### Kad esat pabeidzis, tam vajadzētu izskatīties šādi.


### Savienojiet SDS011
Kontakti ir numurēti no labās puses uz kreiso, pieslēdzot kabeļus, pārliecinieties, ka tie atrodas uz kontaktiem, jo vairums Dupont kabeļu ietilpst arī starp kontaktiem.
```bash
SDS011 Pin 1 -> Pin D1 / GPIO5
SDS011 Pin 2 -> Pin D2 / GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> neizmantots
SDS011 Pin 5 -> VU (NodeMCU v3) / VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> neizmantots
SDS011 Pin 7 -> neizmantots
```
<br>

💡  Jūs varat atrast [sensoru, kurus atbalsta mūsu programmaparatūra sarakstu](https://github.com/opendata-stuttgart/sensors-software/blob/master/airrohr-firmware/Readme.md).


### Lodējiet kopā BME280
<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center" loading="lazy"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;" loading="lazy"/>

Savienojiet adatu galviņu ar BME280 plati. Lodējiet to no aizmugures puses. Spraugas starp kontaktiem ir ļoti mazas, tāpēc esiet pacietīgi un uzmanīgi.

Triks ir pielikt lodāmura galu pie tapas, nedaudz to uzsildīt un pēc tam viegli uzklāt lodmetālu.


#### BME280 vadu pievienošana
Adatas ir numurētas no kreisās uz labo pusi.
```bash
VIN -> Pin 3V3 (3,3 V)
GND-> GND/G
SDA -> PIN D3
SCL -> Pin D4
```

### Visu sasiet kopā

##### Sasieniet NodeMCU un SDS011 kopā
<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg" loading="lazy"/>
Izmantojiet kabeļu saiti, lai savienotu NodeMCU (ESP8266) un sensoru SDS011 tā, lai Wifi antena būtu vērsta prom no sensora.

##### Savienojiet elastīgo cauruli
<img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em" loading="lazy"/>
<img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;" loading="lazy"/>

* savienojiet elastīgo caurulīti ar sensoru SDS011.
* Izmantojiet vēl vienu kabeļu saiti, lai piestiprinātu BME280 temperatūras sensoru pie caurules.
* USB kabeli izvelciet caur caurulīti. Uzstādiet SDS011 ar NodeMCU uz augšu un ventilatoru uz leju.

##### Ievietojiet sensoru caurulē.
* Iebīdiet detaļas caurulē tā, lai tās būtu iespiestas iekšpusē.
* USB kabelim, elastīgajai caurulei un BME280 jāskatās ārā no caurules gala.
* Uzstumiet otru cauruli uz pirmās caurules.

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg" loading="lazy"/>

##### Apdare
* Uzlieciet temperatūras sensoru uz elastīgās caurules tā, lai tas atrastos uz caurules malas.
* Nogrieziet elastīgo cauruli caurules galā.
* Pēc izvēles: caurulītes atvērtos galus var aizklāt ar smalku sietu. Lai gaiss varētu cirkulēt, bet kukaiņi paliktu ārpusē.

<img src="../docs/airrohr/position-bme280.jpeg" loading="lazy"/>

#### izvietojums
Ideāla vieta būtu 1,5 līdz 3,5 metrus virs ielas un labi vēdināma. Tomēr to nevar izdarīt visiem cilvēkiem, jo tāpēc reģistrācijas laikā tiek pieprasīta tāda informācija kā augstums virs zemes un novietojums attiecībā pret ielu.

