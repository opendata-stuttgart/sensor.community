---
title: Vianmääritys
---

### Ongelmia siirrossa?
Kirjoita seuraavat tiedot selaimeesi omilla tiedoillasi:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

[ID] voidaan hakea myös sivun [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1) vasemmassa reunassa avoinna olevasta syöttökentästä.

* Onko anturi rekisteröity [https://devices.sensor.community](https://devices.sensor.community) kautta ja näkyykö anturi kartalla?
* Onko langaton signaali ollut aiemmin heikko?
  Tässä on palvelinpuolen signaaliprotokolla: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`.

### Ongelmia USB-kaapelin kanssa?
* Tarkista virtalähde
* Käynnistä uudelleen (katkaise virtalähde, esim. irrota USB-pistoke).
* Onko WLAN-konfiguraatio kunnossa (tunnistin muodostaa yhteyden konfiguroituun WLAN-verkkoon). Jos ei:
  * Aukaiseeko anturi adhoc-wlan (yhteyspiste) ensimmäisten 2-7 minuutin aikana uudelleenkäynnistyksen jälkeen?
  * Etsi WLAN-verkko `airrohr-[ID]`. Uudelleenkäynnistyksen jälkeen voi kestää muutaman minuutin, ennen kuin tämä näkyy.
* Tarkista omasta reitittimestäsi, onko anturi rekisteröity verkkoon ja merkitse IP-osoite muistiin.
  * Vaihtoehtoisesti käytä [airRohr Flashing Tool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/) -työkalun "Search in network" -toimintoa.
  * Jos kyllä: Yhdistä sensori selaimen kautta `http://[ip-sensorisi]`, konfiguraation pitäisi näkyä.
  * Jos ei: syynä voi olla riittämätön virransyöttö, uudelleenkäynnistyssilmukka tai vastaava.
* Liitä NodeMCU tietokoneeseen USB-kaapelilla ja katso protokollaa.
  * Seuraa sarjapääteohjelmalla (asetukset: Baud 9600, 8N1).
    * Linux: näyttö, minicom, cutecom
    * Windows: Tera Term
    * macOS: näyttö, minicom, ...
    * sopivia USB-2-sarjaohjaimia saatetaan tarvita, katso [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen).
  * Siellä sinun pitäisi nähdä, mitä anturi tekee (käynnistysviestit, WLAN-yhteys tai tukiasema, mittaus - vasta 3 minuutin kuluttua).

### Ongelmia elektroniikan kanssa?
* Irrota anturielektroniikka kotelosta ja tarkastele sitä tarkkaan.
* Tarkista virtalähde uudelleen
    * Vilkkuu NodeMCU (ESP8266) pian uudelleenkäynnistyksen jälkeen?
    * SDS011: punainen LEDTuuletin syttyy uudelleenkäynnistyksen jälkeen?
    * Tarkista antureiden kaapelit uudelleen.

  <div class="max-w-screen-xl mx-auto pt-5">
      <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
      <div class="flex items-center">
            <span class="p-2 rounded-lg bg-indigo-500">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">

              <svg>
            <span>
        <div class="flex flex-wrap">
          <div class="flex-wrap flex">
            <p class="pt-1 text-indigo-700 font-medium">
                Noise on tällä hetkellä beta-versiossa. Lähetä kysymyksesi osoitteeseen<p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community<a>
          <div>
           <div>
      <div>
    <div>
  <div>
