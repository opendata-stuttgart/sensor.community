---
title: Sestavite
---

> ⚠️ **POMEMBNA OPOMBA**
Pred sestavljanjem namestite vdelano programsko opremo!
Glejte poglavje __firmware flasher__.

### NodeMCU v3
Opomba: Naša navodila se nanašajo na različico 3 enote NodeMCU. To lahko prepoznate po priključkih VU in G (glejte risbo).

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em" loading="lazy"/>
<small>Copyright: roman-minyaylov, licenca MIT</small>


<img src="../docs/airrohr/nodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy"/>

##### Ko končate, mora biti videti takole


### Ožičenje SDS011
Pine so oštevilčene od desne proti levi, pri povezovanju pazite, da kabli sedijo na pinih, saj se večina kablov Dupont prilega tudi med pine.

```bash
SDS011 Pin 1 -> Pin D1 / GPIO5
SDS011 Pin 2 -> Pin D2 / GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> neuporabljen
SDS011 Pin 5 -> VU (NodeMCU v3) / VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> neuporabljen
SDS011 Pin 7 -> neuporabljen
```

<br>

💡 Najdete lahko seznam [senzorjev, ki jih podpira naša vdelana programska oprema](https://github.com/opendata-stuttgart/sensors-software/blob/master/airrohr-firmware/Readme.md)


### Spajkanje BME280
<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center" loading="lazy"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;" loading="lazy"/>

Povežite glavo z nožicami s ploščo BME280. Spajkajte ga s hrbtne strani. Razmiki med nožicami so zelo majhni, zato bodite potrpežljivi in previdni.  

Trik je v tem, da konico spajkalnika prislonite na zatič, ga nekoliko segrejete in nato rahlo nanesete spajko.  


### Ožičenje BME280
Pine so oštevilčeni od leve proti desni.
```bash
VIN -> pin 3V3 (3,3 V)
GND-> GND/G
SDA -> PIN D3
SCL -> pin D4
```

### Povezati vse skupaj

#### Povežite NodeMCU in SDS011 skupaj
<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg" loading="lazy"/>
S kabelsko vezavo povežite enoto NodeMCU (ESP8266) in senzor SDS011 tako, da antena Wifi kaže stran od senzorja

#### Povežite upogljivo cev
<img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em" loading="lazy"/>
<img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;" loading="lazy"/>

* povežite upogljivo cev s senzorjem SDS011
* z drugo kabelsko vezalko pritrdite temperaturni senzor BME280 na cev
* Kabel USB speljite skozi cev. Namestite senzor SDS011 tako, da je enota NodeMCU obrnjena navzgor, ventilator pa navzdol.
 
#### Senzor potisnite v cev
* Dele potisnite v cev, tako da so zataknjeni v notranjosti
* Kabel USB, gibljiva cev in BME280 morajo gledati iz konca cevi
* Drugo cev potisnite na prvo.

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg" loading="lazy"/>

#### Zaključna dela
* Temperaturni senzor namestite na gibljivo cev, tako da bo na robu cevi.
* Odrežite gibljivo cev na koncu cevi
* Po želji: odprte konce cevi lahko prekrijete z drobno mrežo. Tako lahko zrak kroži, žuželke pa ostanejo zunaj.
 
<img src="../docs/airrohr/position-bme280.jpeg" loading="lazy"/>

#### Postavitev 
Idealno mesto bi bilo 1,5 do 3,5 metra nad ulico in dobro prezračevano. Vendar tega ni mogoče storiti za vse ljudi, saj se zato med registracijo zahtevajo informacije, kot sta višina nad tlemi in položaj glede na ulico.
