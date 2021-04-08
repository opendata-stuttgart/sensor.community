---
title: Összeállítás
---

> ⚠️ **FONTOS MEGJEGYZÉS**
Összeszerelés előtt telepítse a firmware-t!
Lásd a __firmware flasher__ szakaszt.

### NodeMCU v3
Megjegyzés: Utasításaink a NodeMCU 3-as verziójára vonatkoznak. Ezt a VU és G csatlakozókról lehet felismerni (lásd a rajzot).

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em" loading="lazy"/>
<small>Szerzői jog: roman-minyaylov, MIT License</small>


<img src="../docs/airrohr/nodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy"/>

##### Ha kész vagy, így kell kinéznie


### Vezessük be az SDS011-et
A csapok jobbra-balra vannak számozva, győződjön meg róla, hogy a csatlakoztatáskor a kábelek a csapokon ülnek, mivel a legtöbb Dupont kábel a csapok között is elfér.
```bash
SDS011 Pin 1 -> Pin D1 / GPIO5
SDS011 Pin 2 -> Pin D2 / GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> nem használt
SDS011 Pin 5 -> VU (NodeMCU v3) / VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> nem használt
SDS011 Pin 7 -> nem használt
```

<br>

💡 A [firmware által támogatott érzékelők listáját](https://github.com/opendata-stuttgart/sensors-software/blob/master/airrohr-firmware/Readme.md) találja.


### Forraszd össze a BME280-at
<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center" loading="lazy"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;" loading="lazy"/>

Csatlakoztassa a tűs fejlécet a BME280 laphoz. Forraszd be a hátoldalról. A csapok közötti hézagok nagyon kicsik, ezért legyen türelmes és óvatos.

A trükk az, hogy a forrasztópáka hegyét a tűhöz kell helyezni, kicsit felmelegíteni, majd enyhén felvinni a forrasztót.


### A BME280 bekötése
A csapok balról jobbra haladva vannak számozva.
```bash
VIN -> Pin 3V3 (3,3V)
GND-> GND/G
SDA -> PIN D3
SCL -> Pin D4
```

### Kössünk össze mindent

##### Kösd össze a NodeMCU-t és az SDS011-et!
<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg" loading="lazy"/>
Egy kábelkötegelővel kösse össze a NodeMCU-t (ESP8266) és az SDS011 érzékelőt úgy, hogy a Wifi antenna az érzékelőtől távolabb mutasson.

##### Csatlakoztassa a hajlékony csövet
<img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em" loading="lazy"/>
<img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;" loading="lazy"/>

* Csatlakoztassa a hajlékony csövet az SDS011 érzékelőhöz.
* Egy másik kábelkötegelővel rögzítse a BME280 hőmérséklet-érzékelőt a csőhöz.
* Vezesse át az USB-kábelt a csövön. Szerelje fel az SDS011-et úgy, hogy a NodeMCU felülre, a ventilátor pedig alulra nézzen.

##### Tolja be az érzékelőt a csőbe
* Nyomja be az alkatrészeket a csőbe, úgy, hogy beakadjon a csőbe.
* Az USB-kábelnek, a rugalmas csőnek és a BME280-nak ki kell néznie a cső végéből.
* Nyomja a másik csövet az elsőre.

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg" loading="lazy"/>

##### Befejezés
* Helyezze a hőmérséklet-érzékelőt a hajlékony csőre úgy, hogy az a cső szélén legyen.
* Vágja le a hajlékony csövet a cső végénél.
* Opcionális: a cső nyitott végeit finom hálóval fedheti le. Így a levegő keringhet, de a rovarok kívül maradnak.

<img src="../docs/airrohr/position-bme280.jpeg" loading="lazy"/>

### Elhelyezés
Ideális hely lenne 1,5-3,5 méterrel az utca felett és jól szellőztethető. Ez azonban nem minden ember esetében valósítható meg, ezért a regisztráció során olyan információkat kérnek, mint a föld feletti magasság és az utcához viszonyított helyzet.

