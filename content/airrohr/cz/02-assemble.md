---
title: Sestavení
---

> ⚠️ **DŮLEŽITÉ UPOZORNĚNÍ**
Před sestavením nahrajte firmware!
Viz sekce __Nástroj na instalaci firmware__.

### NodeMCU v3
Poznámka: Naše pokyny se vztahují k NodeMCU verze 3. Verze je možno rozpoznat podle připojení VU a G (viz kresba).

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em" loading="lazy"/>
<small>Copyright: roman-minyaylov, MIT License</small>


<img src="../docs/airrohr/nodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy"/>

##### Po zapojení by měl takto vypadat výsledek


### Připojení senzoru SDS011
Kolíky (Piny) jsou číslované ZPRAVA DOLEVA. Přesvědčte se při připojování, že konektory jsou dobře nasunuty na kolících a nejsou vsunuty mezi ně.
```bash
SDS011 Pin 1 -> Pin D1 / GPIO5
SDS011 Pin 2 -> Pin D2 / GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> nepoužívaný
SDS011 Pin 5 -> VU (NodeMCU v3) / VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> nepoužívaný
SDS011 Pin 7 -> nepoužívaný
```

### Pájení BME280
<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 1em" class="items-center" loading="lazy"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;" loading="lazy"/>

Připojte kolíkovou lištu k desce BME280. Připájejte ji zezadu. Mezery mezi kolíky jsou velmi malé, takže buďte trpěliví a opatrní.

Trik spočívá v tom, že přitlačíte špičku pájky na kolík, tím ho trochu nahřejete a potom zlehka nanesete cín.



### Zapojení BME280
Kolíky (Piny) jsou číslované ZLEVA DOPRAVA.
```bash
VIN -> Pin 3V3 (3.3V)
GND->  GND/G
SDA -> Pin D3
SCL -> Pin D4
```

### Svažte všechno dohromady

 ##### Svažte NodeMCU a SDS011 dohromady
<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg" loading="lazy"/>
Stahovací svorkou svažte NodeMCU (ESP8266) a senzor SDS011 tak, aby Wifi anténa směřovala pryč od senzoru.

 ##### Připojte ohebnou trubičku
 <img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 1em" loading="lazy"/>
 <img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;" loading="lazy"/>

* Připojte ohebnou trubičku k senzoru SDS011.
* Použijte další svorku pro připojení teplotního čidla BME280 k hadičce.
* Provlečte USB kabel skrz plastové koleno. Namontujte SDS011 tak, aby NodeMCU směřovala nahoru a ventilátor senzoru směřoval dolů.

 ##### Vložte senzor do plastového kolena
* Zasuňte součástky do kolena tak, aby se uvnitř zasekly.
* USB kabel, ohebná trubička and senzor BME280 by měly čouhat z konce plastového kolena.
* Spojte dohromady obě plastová kolena.

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg" loading="lazy"/>

 ##### Finalizace
* Snímač teploty umístěte na ohebné trubičce tak, any byl na okraji kolena.
* Ořízněte hadičku na koci kolena.
* Volitelné: Otevřené konce kolen je vhodné zakrýt jemnou síťkou. Vzduch tak může dovnitř proudit, ale hmyz zůstane venku.

<img src="../docs/airrohr/position-bme280.jpeg" loading="lazy"/>
