---
title: Fejlfinding
---

#### Overførselsproblemer?
Indtast følgende i browseren med dine egne data:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

Der kan også søges efter [ID] i indtastningsfeltet i øverste venstre hjørne [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1)

* Er sensoren registreret via [https://devices.sensor.community/](https://devices.sensor.community/), og er sensoren synlig på kortet?
    * Var WLAN-signalniveauet svagt tidligere?
      her er signalloggen på serversiden: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`


### Problemer med USB-kabel?
* Kontroller strømforsyningen: USB-kabel
* Genstart (afbryd strømforsyningen, f.eks. træk USB-stikket ud)
* Er WLAN-konfigurationen OK (sensoren opretter forbindelse til det konfigurerede WLAN) Hvis ikke:
    * åbner sensoren et AP (i de første 2-7 minutter efter en genstart)?
    * Kig efter `airrohr-[ID]` WLAN-netværk. Tålmodighed, det kan tage 1-2 minutter efter opstart.
* Tjek på din egen router, om sensoren er logget ind på netværket, så husk IP
    * alternativt brug "Discovery" i [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher//)
    * Hvis ja: forbind til sensoren via IP med en browser `http://[ip-of-the-sensor]/` , grænsefladen bør vises
    * Hvis nej: ESP'en har problemer, f.eks. utilstrækkelig strømforsyning, reboot loop eller lignende
* Tilslut USB til en computer, og se loggen
    * Spor tekst på den serielle grænseflade med et serielt terminalprogram (indstillinger: baud 9600, 8N1)
        * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: skærm, minicom, ...
        * evt. er der stadig brug for passende usb2serial-drivere, se [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
    * Der skulle du kunne se, hvad sensoren laver (opstartmeddelelser, WLAN-forbindelse eller AP, måling - først efter 3 minutter)

### Elektronikproblemer?
* Fjern sensorelektronikken fra huset og observer
* Kontroller/udskift strømforsyningen igen
    * blinker ESP kort efter genstart?
    * SDS011: rød LED/blæser tændt efter genstart?
    * kontrollér/udskift kablerne til sensorerne igen
