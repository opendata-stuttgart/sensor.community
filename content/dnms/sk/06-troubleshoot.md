---
title: Riešenie problémov
---

### Problémy s prenosom?
Do prehliadača zadajte nasledujúce údaje:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

[ID] môžete vyhľadať aj vo vstupnom poli otvorenom na ľavej strane stránky [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1).

* Je senzor zaregistrovaný prostredníctvom [https://devices.sensor.community](https://devices.sensor.community) a je senzor viditeľný na mape?
* Bol v minulosti bezdrôtový signál slabý?
  Tu je protokol signálu na strane servera: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`.

### Problémy s káblom USB?
* Skontrolujte napájanie
* Reštart (odpojte napájanie, napr. vytiahnite zástrčku USB)
* Je konfigurácia siete WLAN v poriadku (senzor sa pripojí ku nakonfigurovanej sieti WLAN). Ak nie:
  * Otvorí senzor adhoc wifi (prístupový bod) počas prvých 2-7 minút po reštarte?
  * Vyhľadajte sieť WLAN `airrohr-[ID]`. Po reštarte môže trvať niekoľko minút, kým sa to prejaví.
* Na svojom routeri skontrolujte, či je snímač zaregistrovaný v sieti, a zapíšte si jeho IP adresu.
  * prípadne použite "Search in network" v [airRohr Flashing Tool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
  * Ak áno: Pripojte sa k senzoru prostredníctvom prehliadača `http://[ip-your-sensor]`, mala by sa zobraziť konfigurácia
  * Ak nie: môže to byť spôsobené nedostatočným napájaním, reštartovacou slučkou alebo podobne.
* Pripojte NodeMCU k počítaču pomocou kábla USB a pozrite si protokol
  * Sledovanie pomocou programu sériového terminálu (nastavenia: Baud 9600, 8N1)
    * Linux: screen, minicom, cutecom
    * Windows: Tera Term
    * macOS: obrazovka, minicom,...
    * môžu byť potrebné vhodné sériové ovládače USB-2, pozri [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)


### Problémy s elektronikou?
* Vyberte elektroniku snímača z puzdra a pozorne si ju prezrite.
* Opätovne skontrolujte napájanie
    * Bliká NodeMCU(ESP8266) krátko po reštarte?
    * SDS011: červená LEDVentilátor sa rozsvieti po reštarte?
    * Prekontrolujte káble k snímačom.

  <div class="max-w-screen-xl mx-auto pt-5">
      <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
      <div class="flex items-center">
            <span class="p-2 rounded-lg bg-indigo-500">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5. 436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" >
              <svg>
            <span>
        <div class="flex flex-wrap">
          <div class="flex-wrap flex">
            <p class="pt-1 text-indigo-700 font-medium">
                Hluk je v súčasnosti vo fáze beta. Svoje otázky posielajte na adresu<p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community<a>
          <div>
           <div>
      <div>
    <div>
  <div>
