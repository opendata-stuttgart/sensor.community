---
title: Sastavljanje
---

> ⚠️ **VAŽNA NAPOMENA**
Prije sastavljanja instalirajte firmware!
Vidi __programiranje Firmware-a__ poglavlje.

### NodeMCU v3
Napomena: Naše se upute odnose na verziju 3 NodeMCU. To se može prepoznati po pinovima VU i GND
(vidi gore-lijevo na slici).

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em" loading="lazy"/>
<small>Copyright: roman-minyaylov, MIT License</small>


<img src="../docs/airrohr/nodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy"/>

##### Kada ste gotovi, to bi trebalo izgledati ovako


### Spojite SDS011
Pinovi su numerirani s DESNA na LIJEVO, pazite da pri spajanju kabeli sjede na pinovima, jer većina spojnih  žica također stane i između pinova.
```bash
SDS011 Pin 1 -> Pin D1 / GPIO5
SDS011 Pin 2 -> Pin D2 / GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> neiskorišten
SDS011 Pin 5 -> VU (NodeMCU v3) / VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> neiskorišten
SDS011 Pin 7 -> neiskorišten
```

<br>

💡 Možete pronaći popis [senzora koje podržava naš firmware](https://github.com/opendata-stuttgart/sensors-software/blob/master/airrohr-firmware/Readme.md)


### Zalemi BME280
<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center" loading="lazy"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;" loading="lazy"/>

Spojite strip pin konektor s BME280 pločicom. Zalemite ga sa stražnje strane. Razmaci između pinova su vrlo mali pa budite strpljivi i oprezni.  

Trik je u tome da vršak lemilice prislonite na pin, malo zagrijete i zatim lagano nanesete lem.


### Spojite BME280
Pinovi su numerirani s LIJEVA na DESNO.
```bash
VIN -> Pin 3V3 (3.3V)
GND->  GND/G
SDA -> PIN D3
SCL -> Pin D4
```

### Sve skupa povežite

##### Povežite NodeMCU i SDS011
<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg" loading="lazy"/>
Upotrijebite kabelsku vezicu za povezivanje NodeMCU (ESP8266) i SDS011 senzora tako da Wifi antena bude odmaknuta od senzora

##### Povežite fleksibilnu cijev
<img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em" loading="lazy"/>
<img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;" loading="lazy"/>

* Spojite fleksibilnu cijev na senzor SDS011
* Upotrijebite drugu kabelsku vezicu za pričvršćivanje senzora temperature BME280 na cijev
* Provucite USB kabel kroz cijev. Montirajte SDS011 s NodeMCU okrenutim prema gore i ventilatorom prema dolje
 
##### Umetnite senzor u cijev
* gurnite dijelove u cijev, tako da budu unutra uglavljeni
* USB kabel, savitljiva cijev i BME280 trebaju gledati prema vani
* Gurnite drugu cijev u prvu.

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg" loading="lazy"/>

##### Završna obrada
* Postavite senzor temperature na savitljivu cijev tako da bude na rubu cijevi.
* Odrežite fleksibilnu cijev na kraju PVC odvodne cijevi
* Po želji: otvorene krajeve cijevi možete pokriti finom mrežicom. Dakle, zrak može prolaziti, ali insekti ostaju vani
 
<img src="../docs/airrohr/position-bme280.jpeg" loading="lazy"/>

### Postavljanje 
idealno mjesto bi bilo oko 1,5 do 3,5 metra iznad razine ulice i na dobro prozračenom mjestu. Međutim, to nije kod svih moguće učiniti i stoga su prilikom registracije potrebni podaci poput visine iznad tla i položaja prema ulici.

