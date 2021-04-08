---
title: Trükkplaadid ja elektriskeemid
---

Parim viis DNMSi ehitamiseks on kasutada ühte meie trükkplaati.
Nüüd on üsna palju PCB tootjaid, kes saavad toota trükkplaate mõne dollari eest ilma miinimumkoguste puudumisel. Näiteks [JLCPCB](https://jlcpcb.com//).
Lihtsalt laadige alla meie elektriskeemid ja/või Gerber-failid, laadige need üles tootja veebisaidil ja tellige oma trükkplaadid.

<br>
PCB-de viimased versioonid on kirjeldatud siin. Lisateavet ja juurdepääsu KiCad-failidele leiate [Helmut Bitteri Githubist](https://github.com/hbitter/DNMS/tree/master/PCBs). 

### AIRROHR V1.4
<img src="../docs/dnms/airrohr-PCB.jpg" style="display: block; width:40%;margin: 1em 0" loading="lazy"/>
PCB NodeMCU ESP8266 CPU/WLAN jaoks koos I2C Bus laiendiga, et ühendada DNMS-i ja ka teisi andureid (SDS011, BME280...).


##### Allalaadimine
* [elektriskeem](../docs/dnms/airrohr-PCB-circuit-diagram.pdf)
* [Gerber-faili üleslaadimiseks trükkplaaditootja veebisaidil](../docs/dnms/airrohr-PCB-ahela skeem-gerber.zip)

---

### DNMS - T4 V1.4
<img src="../docs/dnms/dnms-müra-mõõtmine-teensy-4.jpg" style="display: block;width:40%; margin: 1em 0" loading="lazy"/>
PCB DNMS Teensy 4.0 jaoks, mida saab ühendada otse NodeMCU ESP8266 või ülaltoodud AIRROHR PCB-le.


##### Lae alla
* [elektriskeem](../docs/dnms/dnms-müra-mõõtmine-teensy-40-elektriskeem.pdf)
* [Gerber-faili üleslaadimiseks trükkplaadi tootja veebisaidil](../docs/dnms/dnms-noise-measuring-teensy-40-circuit-gerber.zip)

