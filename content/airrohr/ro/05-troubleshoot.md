---
title: Depanare
---

### Transmitting problems?
Introduceți următoarele în browser cu propriile date:
`https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1&amp;var-chipID=esp8266-[ID]`

[ID] poate fi, de asemenea, căutat în câmpul de introducere din colțul din stânga sus [https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1](https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1)

* Este senzorul înregistrat prin [https://devices.sensor.community](https://devices.sensor.community) și este senzorul vizibil pe hartă?
    * Nivelul semnalului WLAN a fost slab în trecut?
        aici este jurnalul de semnal server-side: `https://api-rrd.madavi.degrafanadFk6mw1WGzwifi-signal?orgId=1&amp;var-chipID=esp8266-[ID]`
        aici este jurnalul de semnal server-side: `https://api-rrd.madavi.degrafanadFk6mw1WGzwifi-signal?orgId=1&amp;var-chipID=esp8266-[ID]`

### Probleme cu cablul USB?
* Verificați alimentarea cu energie electrică: Cablu USB
* Reboot (deconectați sursa de alimentare, de exemplu, scoateți ștecherul USB)
* Este configurația WLAN OK (senzorul se conectează la WLAN-ul configurat) Dacă nu:
    * senzorul deschide un AP (în primele 2-7 minute după o repornire)?
    * Căutați rețeaua WLAN `airrohr-[ID]`. Răbdare, poate dura 1-2 minute după pornire.
* Verificați pe propriul router dacă senzorul este conectat la rețea, apoi rețineți IP-ul.
    * alternativ, utilizați "Discovery" în [flashtool](https://github.comopendata-stuttgartairrohr-firmware-flasher)
    * Dacă da: conectați-vă la senzor prin IP cu un browser `http://[ip-of-the-sensor]` , ar trebui să apară interfața
    * Dacă nu: ESP are probleme, de exemplu, alimentarea cu energie electrică insuficientă, buclă de repornire sau altele similare.
* Conectați USB la un computer și vizualizați jurnalul
    * Urmăriți textul pe interfața serială cu un program de terminal serial (Setări: baud 9600, 8N1)
        * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, ...
        * sunt încă necesare drivere usb2serial adecvate, vezi [https://github.comopendata-stuttgartmetawikiFirmware-einspielen](https://github.comopendata-stuttgartmetawikiFirmware-einspielen)
    * Acolo ar trebui să puteți vedea ce face senzorul (mesaje de pornire, conexiune WLAN sau AP, măsurători - numai după 3 minute).

### Probleme electronice?
* Scoateți componentele electronice ale senzorului din carcasă și observați
* Verificațiînlocuiți din nou sursa de alimentare
    * ESP clipește la scurt timp după repornire?
    * SDS011: LEDfan roșu pe după repornire?
    * verificați și înlocuiți din nou cablurile către senzori
