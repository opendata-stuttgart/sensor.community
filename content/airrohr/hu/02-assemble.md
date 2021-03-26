---
title: Összeállítás
---

> ⚠️ **FONTOS MEGJEGYZÉS**
Összeszerelés előtt telepítse a firmware-t!
Lásd a __firmware flasher__ szakaszt.

### NodeMCU v3
Megjegyzés: Utasításaink a NodeMCU 3. verziójára vonatkoznak. Ezt a VU és G csatlakozókról lehet felismerni (lásd a rajzot).

Megjegyzés: Utasításaink a NodeMCU 3. verziójára vonatkoznak. Ezt a VU és G csatlakozókról lehet felismerni (lásd a rajzot).
<small>Copyright: roman-minyaylov, MIT License<small>


<img src="..docsairrohrnodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy">

##### Ha kész van, így kell kinéznie


### Vezessük be az SDS011-et
A csapok jobbról balra vannak számozva, győződjön meg róla, hogy a csatlakoztatáskor a kábelek a csapokon ülnek, mivel a legtöbb Dupont kábel a csapok között is elfér.
```bash
SDS011 Pin 1 -> Pin D1 GPIO5
SDS011 Pin 2 -> Pin D2 GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> nem használt
SDS011 Pin 5 -> VU (NodeMCU v3) VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> nem használt
SDS011 Pin 7 -> nem használt
```

<br>

💡 Megtalálhatja a [firmware által támogatott érzékelők listáját](https://github.comopendata-stuttgartsensors-softwareblobmasterairrohr-firmwareReadme.md)

### Forraszd össze a BME280-at

Csatlakoztassa a tűs fejlécet a BME280 laphoz. Forrasztja be a hátoldalról. A csapok közötti hézagok nagyon kicsik, ezért legyen türelmes és óvatos.

A trükk az, hogy a forrasztópáka hegyét a csapra helyezzük, kicsit felmelegítjük, majd enyhén felhordjuk a forrasztópácot.



### A BME280 bekötése
A csapok balról jobbra haladva vannak számozva.
```bash
VIN -> Pin 3V3 (3.3V)
GND-> GNDG
SDA -> PIN D3
SCL -> D4 csatlakozó
```

### Kösd össze az egészet

 ##### A NodeMCU és az SDS011 összekapcsolása
<img src="..docsairrohrtie-air-quality-sensor-together.jpeg" loading="lazy">
Egy kábelkötegelővel kösse össze a NodeMCU-t (ESP8266) és az SDS011 érzékelőt úgy, hogy a Wifi antenna az érzékelőtől távolabb mutasson.

 ##### Connect hajlékony cső
* csatlakoztassa a hajlékony csövet az SDS011 érzékelőhöz.
* Egy másik kábelkötegelővel rögzítse a BME280 hőmérséklet-érzékelőt a csőhöz.
* Vezesse át az USB-kábelt a csövön. Szerelje fel az SDS011-et úgy, hogy a NodeMCU felülre, a ventilátor pedig alulra nézzen.

 ##### Tolja be az érzékelőt a csőbe
* Nyomja az alkatrészeket a csőbe, úgy, hogy a cső belsejébe szoruljon.
* Az USB-kábel, a hajlékony cső és a BME280 nézzen ki a cső végéből.
* Nyomja a másik csövet az elsőre.

<img src="..docsairrohrsds011-jammed-into-tube.jpeg" loading="lazy">

##### Befejezés
* Helyezze a hőmérséklet-érzékelőt a hajlékony csőre úgy, hogy az a cső szélén legyen.
* Vágja le a flexibilis csövet a cső végénél
* Választható: a cső nyitott végeit finom hálóval fedheti le. Így a levegő keringhet, de a rovarok kint maradnak.
* Választható: a cső nyitott végeit finom hálóval fedheti le. Így a levegő keringhet, de a rovarok kint maradnak.
<img src="..docsairrohrposition-bme280.jpeg" loading="lazy">

### Placement
Az ideális hely 1,5-3,5 méterrel az utca felett van, és jól szellőzik. Ez azonban nem minden ember esetében lehetséges, ezért a regisztráció során olyan információkat kérnek, mint a föld feletti magasság és az utcához viszonyított helyzet.

