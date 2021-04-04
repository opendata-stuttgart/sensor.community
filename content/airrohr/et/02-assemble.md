---
title: Koosta
---

> ⚠️ **OLULINE MÄRKUS**
Enne kokkupanekut paigaldage püsivara!
Vt __firmware flasher__ jagu.

### NodeMCU v3
Märkus: Meie juhised viitavad NodeMCU versioonile 3. Seda on võimalik ära tunda ühenduste VU ja G järgi (vt joonist).

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em" loading="lazy"/>
<small>Copyright: roman-minyaylov, MIT License</small>


<img src="../docs/airrohr/nodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy"/>

##### Kui olete lõpetanud, peaks see välja nägema selline.


### Juhtmestik SDS011
Pins on nummerdatud paremalt vasakule, veenduge, et kaablite ühendamisel istuvad pinsid, kuna enamik Dupont'i kaableid sobivad ka pinside vahele.
```bash
SDS011 Pin 1 -> Pin D1 GPIO5
SDS011 Pin 2 -> Pin D2 GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> unused
SDS011 Pin 5 -> VU (NodeMCU v3) VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> unused
SDS011 Pin 7 -> unused
```

<br>

💡 Siit leiate nimekirja [meie püsivara poolt toetatud anduritest](https://github.com/opendata-stuttgart/sensors-software/blob/master/airrohr-firmware/Readme.md)

### Joota kokku BME280
<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center" loading="lazy"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;" loading="lazy"/>

Ühendage viiguotsik BME280-plaadiga. Joodetage see tagaküljelt. Pinnide vahelised vahed on väga väikesed, nii et olge kannatlik ja ettevaatlik.

Trikk on asetada jootekolvi ots viigule, soojendada seda veidi ja seejärel kanda joodet kergelt peale.



### Juhtmestik BME280
Pinsid on nummerdatud vasakult paremale.

```bash
VIN -> Pin 3V3 (3.3V)
GND-> GNDG
SDA -> PIN D3
SCL -> Pin D4
```

### Siduge kõik kokku

##### Siduda NodeMCU ja SDS011 kokku.
<img src="..docsairrohrtie-õhk-kvaliteet-sensor-koos.jpeg" loading="lazy">
Ühendage NodeMCU (ESP8266) ja SDS011 andur kaablisidemega nii, et Wifi antenn näitab andurist eemale.

##### Connect paindlik toru
<img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em" loading="lazy"/>
<img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;" loading="lazy"/>

* ühendage painduv toru SDS011 anduriga.
* Kasutage teist kaablisidet, et kinnitada BME280 temperatuuriandur toru külge.
* Viige USB-kaabel läbi toru. Paigaldage SDS011 nii, et NodeMCU on suunatud ülespoole ja ventilaator allapoole.

##### Anduri surumine torusse
* Lükake osad torusse, nii et see on kinni.
* USB-kaabel, painduv toru ja BME280 peaksid vaatama toru otsast välja
* Lükake teine toru esimesele peale.

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg" loading="lazy"/>

##### Viimistlemine
* Asetage temperatuuriandur painduvale torule nii, et see oleks toru servas.
* Lõigake painduv toru toru otsast ära.
* Valikuline: võite katta toru lahtised otsad peene võrguga. Nii saab õhk ringlema, kuid putukad jäävad välja.

<img src="../docs/airrohr/position-bme280.jpeg" loading="lazy"/>


### Paigutamine
Ideaalne koht oleks 1,5 kuni 3,5 meetri kõrgusel tänavast ja hästi ventileeritud. See ei ole aga kõigi inimeste puhul võimalik, sest seetõttu küsitakse registreerimisel teavet, nagu kõrgus maapinnast ja asend tänava suhtes.

