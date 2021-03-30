---
title: Depanare
---

### Probleme de transfer?
Introduceți următoarele în browserul dvs. cu propriile date:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

[ID-ul] poate fi, de asemenea, căutat în câmpul de introducere deschis în partea stângă a paginii [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1).

* Este senzorul înregistrat prin [https://devices.sensor.community](https://devices.sensor.community) și este senzorul vizibil pe hartă?
* A fost semnalul wireless slab în trecut?
  Iată protocolul de semnal de pe partea serverului: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`.

### Probleme cu cablul USB?
* Verificați alimentarea cu energie electrică
* Repornire (deconectați sursa de alimentare, de exemplu, scoateți ștecherul USB)
* Este configurația WLAN OK (senzorul se conectează la WLAN-ul configurat). Dacă nu:
  * Deschide senzorul un wifi adhoc (punct de acces), în primele 2-7 minute după o repornire?
  * Căutați rețeaua WLAN `airrohr-[ID]`. Este posibil să dureze câteva minute după o repornire până când acest lucru este vizibil.
* Verificați pe propriul router dacă senzorul este înregistrat în rețea și notați adresa IP.
  * alternativ, utilizați "Căutare în rețea" în [airRohr Flashing Tool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/).
  * Dacă da: Conectați-vă la senzor prin intermediul unui browser `http://[ip-your-sensor]`, ar trebui să apară configurația
  * Dacă nu: ar putea fi din cauza unei alimentări insuficiente cu energie electrică, a unei bucle de repornire sau similar.
* Conectați NodeMCU la un computer prin intermediul unui cablu USB și uitați-vă la protocol.
  * Urmărire cu un program de terminal serial (setări: Baud 9600, 8N1)
    * Linux: ecran, minicom, cutecom
    * Windows: Tera Term
    * macOS: ecran, minicom, ...
    * pot fi necesare drivere seriale USB-2 adecvate, a se vedea [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
  * Acolo ar trebui să vedeți ce face senzorul (mesaje de pornire, conexiune WLAN sau punct de acces, măsurători - numai după 3 minute).

### Probleme cu electronica?
* Scoateți componentele electronice ale senzorului din carcasă și priviți-le cu atenție.
* Verificați din nou alimentarea cu energie electrică
    * Nu NodeMCU (ESP8266) clipește la scurt timp după repornire?
    * SDS011: LEDFan roșu se aprinde după repornire?
    * Verificați din nou cablurile către senzori.

  <div class="max-w-screen-xl mx-auto pt-5">
      <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
      <div class="flex items-centru">
            <span class="p-2 rounded-lg bg-indigo-500">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5. 436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" >
              <svg>
            <span>
        <div class="flex flex-wrap">
          <div class="flex-wrap flex">
            <p class="pt-1 text-indigo-700 font-medium">
                Noise este în prezent în versiune beta. Trimiteți întrebările dumneavoastră la<p>.
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community<a>
          <div>
           <div>
      <div>
    <div>
  <div>
