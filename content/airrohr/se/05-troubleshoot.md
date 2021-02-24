---
title: Felsök
---

### Överföringsproblem?
Ange följande i webbläsaren med dina egna data:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

[ID] kan också sökas i inmatningsfältet i det övre vänstra hörnet på denna sida [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1)

* Är sensorn registrerad via [https://devices.sensor.community/ ](https://devices.sensor.community/) och är sensorn synlig på kartan?
* Var WLAN-signalnivån svag tidigare?
    Här är signalloggsserversidan: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`
        

### USB-kabelproblem?
* Kontrollera strömförsörjningen: USB-kabel
* Starta om (koppla bort strömförsörjningen, t.ex. dra ut USB-kontakten)
* Är WLAN-konfigurationen OK (sensorn ansluter till det konfigurerade WLAN) Om inte:
    * öppnar sensorn en AP (under de första 2-7 minuterna efter en omstart)?
    * Leta efter `airrohr-[ID]` WLAN-nätverk. Tålamod, det kan ta 1-2 minuter efter start.
* Kontrollera på din egen router om sensorn är inloggad i nätverket, kom ihåg IP-adressen
    * använd alternativt "Discovery" i [flashverktyget](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
    * Om ja: anslut till sensorn via IP med en webbläsare `http://[ip-of-the-sensor]/`, bör gränssnittet visas
    * Om nej: ESP har problem, t.ex. strömförsörjning otillräcklig, omstartslinga eller liknande
* Anslut USB till en dator och visa loggen
    * Spåra text på seriellt gränssnitt med seriellt terminalprogram (Inställningar: baud 9600, 8N1)
        * Linux: skärm, minicom, cutecom; Windows: Tera Term; MacOS: skärm, minicom, ...
        * möjligen lämpliga drivrutiner för usb2 är fortfarande nödvändiga, se [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware- einspielen)
    * Där borde du kunna se vad sensorn gör (startmeddelanden, WLAN-anslutning eller AP, mätning - bara efter 3 minuter)

### Elektronikproblem?
* Ta bort sensorelektroniken från huset och observera
* Kontrollera / byt ut strömförsörjningen igen
    * blinkar ESP strax efter omstart?
    * SDS011: röd lysdiod / fläkt på efter omstart?
    * kontrollera / byt ut kablarna till sensorerna igen
