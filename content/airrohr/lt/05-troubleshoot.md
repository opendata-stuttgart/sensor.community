---
title: Trikčių šalinimas
---

### Perdavimo problemos?
Naršyklėje įveskite šiuos savo duomenis:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

[ID] taip pat galima ieškoti viršutiniame kairiajame kampe esančiame įvesties lauke [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1).

* Ar jutiklis užregistruotas per [https://devices.sensor.community/](https://devices.sensor.community/) ir ar jis matomas žemėlapyje?
    * Ar anksčiau WLAN signalo lygis buvo silpnas?
      čia pateikiamas serverio pusėje esantis signalo žurnalas: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`


### USB kabelio problemos?
* Patikrinkite maitinimo šaltinį: USB kabelį
* Iš naujo paleiskite kompiuterį (atjunkite maitinimą, pvz., ištraukite USB kištuką)
* Ar WLAN konfigūracija tinkama (jutiklis jungiasi prie sukonfigūruoto WLAN) Jei ne:
    * Ar jutiklis atidaro prieigos tašką (per pirmąsias 2-7 minutes po perkrovimo)?
    * Ieškokite `airrohr-[ID]` WLAN tinklo. Kantrybės, tai gali užtrukti 1-2 minutes po įkrovos.
* Patikrinkite savo maršrutizatoriuje, ar jutiklis yra prisijungęs prie tinklo, tada prisiminkite IP
    * alternatyviai naudokite [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher//) esančią funkciją "Discovery" (Atradimas).
    * Jei taip: prie jutiklio per IP prisijunkite naršykle `http://[jutiklio ip]/` , turėtų pasirodyti sąsaja.
    * Jei ne: ESP turi problemų, pvz., nepakankamas maitinimas, perkrovimo kilpa ar pan.
* Prijunkite USB jungtį prie kompiuterio ir peržiūrėkite žurnalą
    * Sekite tekstą nuosekliojoje sąsajoje naudodami nuosekliojo terminalo programą (nustatymai: 9600 baudų, 8N1)
        * Linux: screen, minicom, cutecom; Windows: MacOS: screen, minicom, ...
        * galbūt dar reikia tinkamų usb2serial tvarkyklių, žr. [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
    * Ten turėtų būti galima matyti, ką jutiklis veikia (įkrovos pranešimai, WLAN ryšys arba prieigos taškas, matavimas - tik po 3 minučių).

### Elektronikos problemos?
* Išimkite jutiklio elektroniką iš korpuso ir stebėkite
* Dar kartą patikrinkite ir (arba) pakeiskite maitinimo šaltinį
    * Ar ESP mirksi netrukus po perkrovimo?
    * SDS011: raudonas šviesos diodas / ventiliatorius įsijungia po perkrovimo?
    * dar kartą patikrinkite ir (arba) pakeiskite jutiklių kabelius
