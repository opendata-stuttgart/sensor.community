---
title: Asamblați
---

> ⚠️ **NOTA IMPORTANTĂ**
Înainte de asamblare, instalați firmware-ul!
A se vedea secțiunea __firmware flasher__.

### NodeMCU v3
Notă: Instrucțiunile noastre se referă la versiunea 3 a NodeMCU. Aceasta poate fi recunoscută prin conexiunile VU și G (a se vedea desenul).

Notă: Instrucțiunile noastre se referă la versiunea 3 a NodeMCU. Aceasta poate fi recunoscută prin conexiunile VU și G (a se vedea desenul).
<small>Copyright: roman-minyaylov, MIT License<small>.


<img src="..docsairrohrnodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy">

##### Când ați terminat, iată cum ar trebui să arate


### Wire the SDS011
Pinii sunt numerotați de la DREAPTA la STÂNGA, asigurați-vă că atunci când conectați cablurile sunt așezate pe ace, deoarece majoritatea cablurilor Dupont se potrivesc și între ace.
```bash
SDS011 Pin 1 -> Pin D1 GPIO5
SDS011 Pin 2 -> Pin D2 GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> nefolosit
SDS011 Pin 5 -> VU (NodeMCU v3) VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> nefolosit
SDS011 Pin 7 -> nefolosit
```

<br>

💡 Puteți găsi o listă de [senzori suportați de firmware-ul nostru](https://github.comopendata-stuttgartsensors-softwareblobmasterairrohr-firmwareReadme.md)



### Lipiți împreună BME280
### Lipiți împreună BME280
### Lipiți împreună BME280

Conectați capătul de pini cu placa BME280. Lipiți-l din spate. Spațiile dintre pini sunt foarte mici, așa că aveți răbdare și atenție.

Trucul constă în a pune vârful fierului de lipit pe acul de lipit, a-l încălzi puțin și apoi a aplica ușor lipitura.



### Wire the BME280
Pini sunt numerotați de la stânga la dreapta.
```bash
VIN -> Pin 3V3 (3,3V)
GND-> GNDG
SDA -> PIN D3
SCL -> Pin D4
```

### Tie everything together

 ##### Legați NodeMCU și SDS011 împreună
<img src="..docsairrohrtie-air-quality-sensor-together.jpeg" loading="lazy">
Folosiți o cravată de cablu pentru a lega NodeMCU (ESP8266) și senzorul SDS011, astfel încât antena Wifi să fie îndreptată în direcția opusă senzorului.

 ##### Conectați tubul flexibil
 ##### Conectați tubul flexibil
 ##### Conectați tubul flexibil

* conectați tubul flexibil la senzorul SDS011
* Folosiți o altă cravată de cablu pentru a atașa senzorul de temperatură BME280 la tub.
* Treceți cablul USB prin tub. Montați SDS011 cu NodeMCU orientat în partea de sus și ventilatorul orientat în partea de jos.
* Treceți cablul USB prin tub. Montați SDS011 cu NodeMCU orientat în partea de sus și ventilatorul orientat în partea de jos.
 ##### Împingeți senzorul în țeavă
* Împingeți piesele în tub, astfel încât să fie blocate înăuntru.
* Cablul USB, tubul flexibil și BME280 trebuie să iasă din capătul tubului.
* Împingeți cealaltă țeavă pe prima.

<img src="..docsairrohrsds011-jammed-into-tube.jpeg" loading="lazy">

##### Finisare
* Poziționați senzorul de temperatură pe tubul flexibil, astfel încât să se afle pe marginea țevii.
* Tăiați tubul flexibil de la capătul țevii.
* Opțional: se pot acoperi capetele deschise ale tubului cu o plasă fină. Astfel, aerul poate circula, dar insectele rămân afară
* Opțional: se pot acoperi capetele deschise ale tubului cu o plasă fină. Astfel, aerul poate circula, dar insectele rămân afară
<img src="..docsairrohrposition-bme280.jpeg" loading="lazy">

### Plasament
Locul ideal ar fi între 1,5 și 3,5 metri deasupra străzii și bine ventilat. Cu toate acestea, acest lucru nu se poate face pentru toate persoanele, deoarece, prin urmare, în timpul înregistrării se cer informații precum înălțimea deasupra solului și poziția față de stradă.

