---
title: Vianmääritys
---

### Lähetysongelmia?
Kirjoita selaimeen seuraavat tiedot omilla tiedoillasi:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

[ID] voidaan hakea myös vasemmassa yläkulmassa olevasta syöttökentästä [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1).

* Onko anturi rekisteröity [https://devices.sensor.community](https://devices.sensor.community) kautta ja näkyykö anturi kartalla?
    * Oliko WLAN-signaalin taso aiemmin heikko?
        Tässä on signaaliloki palvelimen puolella: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`
        Tässä on signaaliloki palvelimen puolella: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`

### USB-kaapeliongelmia?
* Tarkista virtalähde: USB-kaapeli
* Käynnistä uudelleen (katkaise virtalähde, esim. irrota USB-pistoke).
* Onko WLAN-konfigurointi OK (tunnistin muodostaa yhteyden määritettyyn WLAN-verkkoon) Jos ei:
    * avaako tunnistin AP:n (ensimmäisten 2-7 minuutin aikana uudelleenkäynnistyksen jälkeen)?
    * Etsi `airrohr-[ID]` WLAN-verkko. Kärsivällisyyttä, se voi kestää 1-2 minuuttia käynnistyksen jälkeen.
* Tarkista omasta reitittimestäsi, onko anturi kirjautunut verkkoon, niin muista IP-osoite
    * Vaihtoehtoisesti käytä "Discovery" [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)
    * Jos kyllä: muodosta yhteys anturiin IP:n kautta selaimella `http://[ip-of-the-sensor]` , käyttöliittymän pitäisi näkyä.
    * Jos ei: ESP:ssä on ongelmia, esim. virransyöttö riittämätön, uudelleenkäynnistyssilmukka tai vastaava.
* Kytke USB tietokoneeseen ja katso loki.
    * Seuraa tekstiä sarjaliitännässä sarjapääteohjelmalla (Asetukset: baud 9600, 8N1).
        * Linux: screen, minicom, cutecom; Windows: MacOS: screen, minicom, ...
        * Tarvitaan vielä mahdollisesti sopivia usb2serial-ajureita, katso [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen).
    * Siellä sinun pitäisi pystyä näkemään, mitä anturi tekee (käynnistysviestit, WLAN-yhteys tai AP, mittaus - vasta 3 minuutin kuluttua).

### Elektroniikkaongelmia?
* Irrota anturin elektroniikka kotelosta ja tarkkaile
* Checkreplace virtalähde uudelleen
    * vilkkuu ESP pian uudelleenkäynnistyksen jälkeen?
    * SDS011: punainen LEDfan päällä uudelleenkäynnistyksen jälkeen?
    * Tarkista ja vaihda antureiden kaapelit uudelleen.
