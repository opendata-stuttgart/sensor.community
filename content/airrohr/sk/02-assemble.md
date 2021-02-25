---
title: Zostavenie
---

> ⚠️ **DÔLEŽITÉ UPOZORNENIE:**
Predtým, ako sa pustíte do zostavenia nahrajte firmvér!
Pozrite si sekciu __Nástroj na inštaláciu firmvéru__.

### NodeMCU V3
Poznámka: Naše pokyny sa vzťahujú na NodeMCU V3. Ten je možné rozpoznať pomocou pripojení VU a G (na kresbe).

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em" loading="lazy"/>
<small>Copyright: roman-minyaylov, MIT License</small>


<img src="../docs/airrohr/nodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy"/>

##### Keď skončíte, takto by mal vyzerať výsledok


### Pripojenie senzoru SDS011
Kolíky (Piny) sú očíslované SPRAVA DOĽAVA, pri pripájaní káblov sa uistite, že káble sú nasunuté na kolíkoch a nie sú nesprávne vložené medzi kolíky.
```bash
SDS011 Pin 1 -> Pin D1 / GPIO5
SDS011 Pin 2 -> Pin D2 / GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> nepoužívaný
SDS011 Pin 5 -> VU (V3 NodeMCU) / VIN (V1 a V2 NodeMCU)
SDS011 Pin 6 -> nepoužívaný
SDS011 Pin 7 -> nepoužívaný
```

### Spájkovanie BME280
<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center" loading="lazy"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;" loading="lazy"/>

Pripojte kolíkovú lištu k doske BME280. Spájkujte ju zozadu. Medzery medzi kolíkmi sú veľmi malé, takže buďte trpezliví a opatrní.  

Trik spočíva v tom, že pritlačíte špičku spájkovačky na kolík, trochu ho ohrejete a potom zľahka nanesiete cín.  



### Pripojenie BME280
Kolíky (Piny) sú číslované ZĽAVA DOPRAVA.
```bash
VIN -> Pin 3V3 (3.3V)
GND->  GND/G
SDA -> PIN D3
SCL -> Pin D4
```

### Zviažte všetko dohromady

 ##### Sťahovacou svorkou spojte NodeMCU s SDS011 tak, ako vidíte na obrázku
<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg" loading="lazy"/>
Pomocou svorky spojte NodeMCU (ESP8266) a senzor prachových častíc SDS011 tak, aby anténa Wifi (kovový pliešok s textom WiFi) smerovala preč od senzora.

 ##### Pripojte ohybnú hadičku
 <img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em" loading="lazy"/>
 <img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;" loading="lazy"/>

* Pripojte hadičku k senzoru SDS011.
* Použite ďalšiu svorku na pripojenie BME280 senzora k hadičke.
* Prevlečte USB kábel cez kolienko. Namontujte SDS011 tak, aby NodeMCU smerovala hore a ventilátor smeroval dole.

 ##### Vložte senzor do plastového kolena
* Zasuňte súčiastky do kolena tak, aby sa zasekli vo vnútri.
* USB kábel, ohybná hadička a senzor BME280 by mali trčať z konca plastového kolena.
* Zatlačte do seba oba plastové kolená.

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg" loading="lazy"/>

 ##### Finalizácia
* Snímač teploty na ohybnej hadičke umiestnite tak, aby bola na okraji kolena.
* Odrežte hadičku na konci kolena.
* Voliteľné: Otvorené konce kolien môžete zakryť jemnou sieťkou. Vzduch tak môže prúdiť, ale hmyz zostáva vonku.

<img src="../docs/airrohr/position-bme280.jpeg" loading="lazy"/>
