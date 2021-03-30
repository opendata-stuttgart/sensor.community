---
title: Trikčių šalinimas
---

#### Perdavimo problemos?
Naršyklėje įveskite šiuos savo duomenis:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

[ID] taip pat galima ieškoti viršutiniame kairiajame kampe esančiame įvesties lauke [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1).

* Ar jutiklis užregistruotas per [https://devices.sensor.community](https://devices.sensor.community) ir ar jis matomas žemėlapyje?
    * Ar anksčiau WLAN signalo lygis buvo silpnas?
        čia yra serverio pusės signalo žurnalas: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`
        čia yra serverio pusės signalo žurnalas: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`

#### USB kabelio problemos?
* Patikrinkite maitinimo šaltinį: USB laidas
* Perkraukite kompiuterį (atjunkite maitinimą, pvz., ištraukite USB kištuką)
* Ar WLAN konfigūracija yra tinkama (jutiklis jungiasi prie sukonfigūruoto WLAN) Jei ne:
    * ar jutiklis atidaro AP (per pirmąsias 2-7 minutes po perkrovimo)?
    * Ieškokite `airrohr-[ID]` WLAN tinklo. Turėkite kantrybės, tai gali užtrukti 1-2 minutes po įkrovos.
* Savo maršrutizatoriuje patikrinkite, ar jutiklis yra prisijungęs prie tinklo, tada įsiminkite IP adresą
    * alternatyviai naudokite "Discovery" [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
    * Jei taip: prisijunkite prie jutiklio per IP per naršyklę `http://[jutiklio ip]` , turėtų pasirodyti sąsaja
    * Jei ne: ESP turi problemų, pvz., nepakankamas maitinimo šaltinis, perkrovimo kilpa ar pan.
* Prijunkite USB prie kompiuterio ir peržiūrėkite žurnalą
    * Teksto sekimas nuosekliąja sąsaja su nuosekliojo terminalo programa (Nustatymai: 9600 baudų, 8N1)
        * Linux: screen, minicom, cutecom; Windows: MacOS: screen, minicom, ...
        * vis dar reikalingos tinkamos usb2serial tvarkyklės, žr. [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
    * Ten turėtumėte matyti, ką daro jutiklis (įkrovos pranešimai, WLAN ryšys arba prieigos taškas, matavimas - tik po 3 minučių).

#### Elektronikos problemos?
* Išimkite jutiklio elektroniką iš korpuso ir stebėkite
* Dar kartą patikrinkite ir pakeiskite maitinimo šaltinį
    * ESP mirksi netrukus po perkrovimo?
    * SDS011: raudonas LEDfan įjungtas po perkrovimo?
    * dar kartą patikrinkite ir pakeiskite jutiklių kabelius
