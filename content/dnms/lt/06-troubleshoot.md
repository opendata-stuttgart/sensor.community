---
title: Trikčių šalinimas
---

#### Problemos su perkėlimu?
Naršyklėje įveskite šiuos savo duomenis:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

[ID] taip pat galima ieškoti įvesties lauke, atidarytame puslapio kairėje pusėje [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1).

* Ar jutiklis užregistruotas per [https://devices.sensor.community](https://devices.sensor.community) ir ar jis matomas žemėlapyje?
* Ar anksčiau belaidžio ryšio signalas buvo silpnas?
  Čia pateikiamas serverio pusės signalo protokolas: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`.

#### Problemos su USB kabeliu?
* Patikrinkite maitinimo šaltinį
* Paleiskite iš naujo (atjunkite maitinimą, pvz., ištraukite USB kištuką)
* Ar WLAN konfigūracija yra tinkama (jutiklis prisijungia prie sukonfigūruoto WLAN). Jei ne:
  * Ar jutiklis atidaro adhoc wifi (prieigos tašką) per pirmąsias 2-7 minutes po perkrovimo?
  * Ieškoti WLAN tinklo `airrohr-[ID]`. Po perkrovimo gali praeiti kelios minutės, kol tai bus matoma.
* Savo maršrutizatoriuje patikrinkite, ar jutiklis užregistruotas tinkle, ir užsirašykite IP adresą.
  * taip pat naudokite [airRohr Flashing Tool] (https://github.com/opendata-stuttgart/airrohr-firmware-flasher) "Search in network" (Ieškoti tinkle).
  * Jei taip: Prisijunkite prie jutiklio per naršyklę `http://[ip-your-sensor]`, turėtų pasirodyti konfigūracija.
  * Jei ne: tai gali būti dėl nepakankamo maitinimo šaltinio, pakartotinio paleidimo kilpos ar pan.
* USB kabeliu prijunkite NodeMCU prie kompiuterio ir peržiūrėkite protokolą
  * Sekite nuosekliojo terminalo programa (nustatymai: Baud 9600, 8N1)
    * "Linux": ekranas, minicom, cutecom
    * "Windows": Tera Term
    * MacOS: ekranas, minicom, ...
    * gali prireikti tinkamų USB-2 serijinių tvarkyklių, žr. [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen).
  * Ten turėtumėte matyti, ką jutiklis veikia (įkrovos pranešimai, WLAN ryšys arba prieigos taškas, matavimas - tik po 3 minučių).

#### Problemos su elektronika?
* Išimkite jutiklio elektroniką iš korpuso ir atidžiai ją apžiūrėkite.
* Dar kartą patikrinkite maitinimo šaltinį
    * Ar NodeMCU (ESP8266) mirksi netrukus po perkrovimo?
    * SDS011: raudonas LEDFan užsidega po perkrovimo?
    * Dar kartą patikrinkite jutiklių kabelius.

  <div class="max-w-screen-xl mx-auto pb-5">
    <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
    <div class="flex items-center">
          <span class="p-2 rounded-lg bg-indigo-500">
            <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5. 436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" >
            </svg>
          </span>
        <div class="flex-wrap flex">
          <p class="pt-1 text-indigo-700 font-medium">
              Triukšmas yra beta versijoje. Klausimus siųskite adresu<p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community</a>
        </div>
    </div>
  </div>
</div>