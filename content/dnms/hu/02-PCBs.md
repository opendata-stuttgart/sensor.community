---
title: PCB-k és áramköri rajzok
---

A DNMS építésének legjobb módja az egyik nyomtatott áramköri lapunk használata.
Most már elég sok NYÁK gyártó van, akik néhány dollárért, minimális mennyiség nélkül képesek áramköri lapokat gyártani. Például a [JLCPCB](https://jlcpcb.com//).
Csak töltse le az alábbi áramköri rajzainkat és/vagy Gerber fájljainkat, töltse fel őket a gyártó weboldalára, és rendelje meg a NYÁK-okat.

<br>
A nyomtatott áramköri lapok legutóbbi változatait itt ismertetjük. További információkért és a KiCad fájlok eléréséhez lásd [Helmut Bitter Github](https://github.com/hbitter/DNMS/tree/master/PCBs). 

### AIRROHR V1.4
<img src="../docs/dnms/airrohr-PCB.jpg" style="display: block; width:40%;margin: 1em 0" loading="lazy"/>
NYÁK a NodeMCU ESP8266 CPU/WLAN számára I2C busz kiterjesztéssel a DNMS, valamint más érzékelők (SDS011, BME280...) csatlakoztatásához.


##### Letöltés
* [Áramköri diagram](../docs/dnms/airrohr-PCB-áramköri diagram.pdf)
* [Gerber fájl a nyomtatott áramköri lap gyártójának weboldalára történő feltöltéshez](../docs/dnms/airrohr-PCB-circuit-diagram-gerber.zip)

---

### DNMS - T4 V1.4
<img src="../docs/dnms/dnms-noise-measuring-teensy-4.jpg" style="display: block;width:40%; margin: 1em 0" loading="lazy"/>
NYÁK a DNMS Teensy 4.0-hoz, amely közvetlenül csatlakoztatható egy NodeMCU ESP8266-ra vagy a fenti AIRROHR NYÁK-ra.


##### Letöltés
* [Áramköri diagram](../docs/dnms/dnms-noise-measuring-teensy-40-circuit-diagram.pdf)
* [Gerber fájl a NYÁK gyártójának weboldalára történő feltöltéshez](../docs/dnms/dnms-noise-measuring-teensy-40-circuit-gerber.zip)

