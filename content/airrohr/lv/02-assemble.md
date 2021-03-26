---
title: Salikt
---

> ⚠️ **SVARĪGA PIEZĪME**
Pirms montāžas instalējiet programmaparatūru!
Skatiet __firmware flasher__ sadaļu.

#### NodeMCU v3
Piezīme: Mūsu norādījumi attiecas uz NodeMCU 3. versiju. To var atpazīt pēc savienojumiem VU un G (skatīt rasējumu).

Piezīme: Mūsu norādījumi attiecas uz NodeMCU 3. versiju. To var atpazīt pēc savienojumiem VU un G (skatīt rasējumu).
<small>Autortiesības: roman-minyaylov, MIT licence<small>


<img src="...docsairrohrnodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy">

##### Kad esat pabeidzis, tam vajadzētu izskatīties šādi.


#### SDS011 vadu savienojums
Adatas ir numurētas no labās uz kreiso pusi, tāpēc, savienojot kabeļus, pārliecinieties, ka tie atrodas uz adatām, jo lielākā daļa Dupont kabeļu ietilpst arī starp adatām.
````bash
SDS011 Pin 1 -> Pin D1 GPIO5
SDS011 Pin 2 -> Pin D2 GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> neizmantots
SDS011 Pin 5 -> VU (NodeMCU v3) VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> neizmantots
SDS011 Pin 7 -> neizmantots
```

<br>

💡 Jūs varat atrast [sensoru, kurus atbalsta mūsu programmaparatūra, sarakstu](https://github.comopendata-stuttgartsensors-softwareblobmasterairrohr-firmwareReadme.md).



#### Lodējiet kopā BME280
#### Lodējiet kopā BME280
#### Lodējiet kopā BME280

Savienojiet kontakttīkla galveni ar BME280 plati. Lodējiet to no aizmugures puses. Spraugas starp kontaktiem ir ļoti mazas, tāpēc esiet pacietīgi un uzmanīgi.

Triks ir pielikt lodāmura galu pie tapas, nedaudz to uzsildīt un pēc tam viegli uzklāt lodmetālu.



#### BME280 vadu savienojums
Kontakti ir numurēti no kreisās uz labo pusi.
````bash
VIN -> Pin 3V3 (3,3 V)
GND-> GNDG
SDA -> PIN D3
SCL -> kontakts D4
```

#### Sasieniet visu kopā

 ##### NodeMCU un SDS011 sasiet kopā
<img src="...docsairrohrtie-air-quality-sensor-together.jpeg" loading="lazy">
NodeMCU (ESP8266) un sensoru SDS011 savienojiet ar kabeļu saiti tā, lai Wifi antena būtu vērsta prom no sensora.

 ##### Connect elastīga caurule
 ##### Connect elastīga caurule
 ##### Connect elastīga caurule

* savienojiet elastīgo caurulīti ar sensoru SDS011
* Izmantojiet vēl vienu kabeļu saiti, lai piestiprinātu BME280 temperatūras sensoru pie caurules.
* USB kabeli izvelciet caur caurulīti. Uzstādiet SDS011 tā, lai NodeMCU būtu vērsts uz augšu, bet ventilators - uz leju.
* USB kabeli izvelciet caur caurulīti. Uzstādiet SDS011 tā, lai NodeMCU būtu vērsts uz augšu, bet ventilators - uz leju.
 ##### Ievietojiet sensoru caurulē
* Ievietojiet detaļas caurulē tā, lai tās iestrēgtu iekšpusē.
* USB kabelim, elastīgajai caurulītei un BME280 jāizskatās no caurules gala.
* Otru cauruli uzspiediet uz pirmās caurules.

<img src="...docsairrohrsds011-jammed-into-tube.jpeg" loading="lazy">

##### Apdare
* Uzlieciet temperatūras sensoru uz elastīgās caurules tā, lai tas atrastos uz caurules malas.
* Nogrieziet elastīgo cauruli caurules galā.
* Pēc izvēles: caurules vaļējos galus var aizklāt ar smalku sietu. Tādējādi gaiss var cirkulēt, bet kukaiņi paliek ārpusē.
* Pēc izvēles: caurules vaļējos galus var aizklāt ar smalku sietu. Tādējādi gaiss var cirkulēt, bet kukaiņi paliek ārpusē.
<img src="...docsairrohrposition-bme280.jpeg" loading="lazy">

#### izvietojums
Ideālā vieta būtu 1,5 līdz 3,5 metrus virs ielas un labi vēdināma. Tomēr to nav iespējams izdarīt visiem cilvēkiem, tāpēc reģistrācijas laikā tiek pieprasīta tāda informācija kā augstums virs zemes un novietojums attiecībā pret ielu.

