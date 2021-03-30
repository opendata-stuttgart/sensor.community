---
title: Trükkplaadid ja elektriskeemid
---

Parim viis DNMSi ehitamiseks on kasutada ühte meie trükkplaati.
Praegu on üsna palju trükkplaatide tootjaid, kes saavad toota trükkplaate mõne dollari eest ilma miinimumkoguste puudumisel. Näiteks [JLCPCB](https://jlcpcb.com/).
Lihtsalt laadige alla meie elektriskeemid ja/või Gerber-failid, laadige need üles tootja veebisaidil ja tellige oma trükkplaadid.

<br>
Siin on kirjeldatud trükkplaatide viimaseid versioone. Lisateavet ja juurdepääsu KiCad-failidele leiate [Helmut Bitteri Githubist](https://github.com/hbitter/DNMS/tree/master/PCBs).

### AIRROHR V1.4
<img src="../docs/dnms/airrohr-PCB.jpg" style="display: block; width:40%;margin: 1em 0" loading="lazy"/>
Trükkplaat NodeMCU ESP8266 CPUWLAN jaoks koos I2C bussi laiendusega, et ühendada DNMS ja teised andurid (SDS011, BME280...).


##### Lae alla:
* [elektriskeem](..docsdnmsairrohr-PCB-circuit-diagram.pdf)
* [Gerber-faili üleslaadimiseks PCB tootja veebilehel](../docs/dnms/airrohr-PCB-circuit-diagram-gerber.zip)

---

### DNMS - T4 V1.4
Trükkplaat DNMS Teensy 4.0 jaoks, mida saab ühendada otse NodeMCU ESP8266 või ülaltoodud AIRROHR trükkplaadile.


##### Lae alla:
* [elektriskeem](..docsdnmsdnms-müra-mõõtmine-teensy-40-elektriskeem.pdf)
* [Gerber-faili üleslaadimiseks PCB tootja veebilehel](..docsdnmsdnms-noise-measuring-teensy-40-circuit-gerber.zip)

