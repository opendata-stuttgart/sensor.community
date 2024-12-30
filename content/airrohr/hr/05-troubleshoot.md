---
title: Rješavanje problema
---

### Problemi kod prijenosa podataka?
EUnesite sljedeće u preglednik sa svojim podacima:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

[ID] se također može pretraživati ​​u polju za unos u gornjem lijevom kutu [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1)

* Je li senzor registriran putem [https://devices.sensor.community/](https://devices.sensor.community/) ai vidi li se senzor na karti?
    * Je li razina WiFi signala u prošlosti bila slaba?
        ovdje je evidencija signala na strani poslužitelja: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`
        

### Problemi s USB kabelom?
* Provjerite napajanje: USB kabel
* Ronovno pokretanje (odspojite napajanje, npr. izvucite USB utikač)
* Je li WiFi konfiguracija u redu (senzor se spaja na konfigurirani WLAN) Ako nije:
    * otvara li senzor WiFi pristupnu točku / AP (u prvih 2-7 minuta nakon ponovnog pokretanja)?
    * Potražite `airrohr-[ID]` WLAN mrežu. Strpljenje, to može potrajati 1-2 minute nakon pokretanja.
* Provjerite na vlastitom routeru je li senzor prijavljen na mrežu, a zatim zapamtite IP adresu
    * alternativno koristite "Discovery" u programu [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher//)
    * Ako da: spojite se na senzor putem IP-a s preglednikom `http://[ip-of-the-sensor]/`, sučelje bi se trebalo pojaviti
    * ako ne: ESP ima problema, npr. nedovoljno napajanje, pokretanja u petlji i sl.
* Spojite USB na računalo i pogledajte zapisnik 
    * Pratite tekst na serijskom sučelju preko serijskog terminala (Postavke: baud 9600, 8N1)
        * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, ...
        * eventualno prikladni usb2serial drajveri su i dalje potrebni, vidi [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)                                                                                                                                                                                                                                                                                                                      
    * Tamo biste trebali moći vidjeti što senzor radi (poruke za pokretanje, WiFi veza ili AP, mjerenje - tek nakon 3 minute)

### Problemi s elektronikom?
* Izvadite elektroniku senzora iz kućišta i provjerite
* Ponovno provjerite/zamijenite napajanje
    * treperi li ESP ubrzo nakon ponovnog pokretanja?
    * SDS011: crveni LED/ventilator uključen nakon ponovnog pokretanja?
    * ponovno provjerite/zamijenite kabele do senzora