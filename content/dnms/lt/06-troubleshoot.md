---
title: Trikčių šalinimas
---

### Perdavimo problemos?
Naršyklėje įveskite šiuos savo duomenis:
`https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1&var-chipID=esp8266-[ID]`

[ID] taip pat galima ieškoti viršutiniame kairiajame kampe esančiame įvesties lauke [https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1](https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1).

* Ar jutiklis užregistruotas per [https://devices.sensor.community/](https://devices.sensor.community/) ir ar jis matomas žemėlapyje?
  * Ar anksčiau WLAN signalo lygis buvo silpnas?
    čia pateikiamas serverio pusėje esantis signalo žurnalas: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`



### USB kabelio problemos?
* Patikrinkite maitinimo šaltinį: USB kabelį
* Iš naujo paleiskite kompiuterį (atjunkite maitinimą, pvz., ištraukite USB kištuką)
* Ar WLAN konfigūracija tinkama (jutiklis jungiasi prie sukonfigūruoto WLAN) Jei ne:
  * Ar jutiklis atidaro prieigos tašką (per pirmąsias 2-7 minutes po perkrovimo)?
  * Ieškokite `airrohr-[ID]` WLAN tinklo. Kantrybės, tai gali užtrukti 1-2 minutes po įkrovos.
* Patikrinkite savo maršrutizatoriuje, ar jutiklis yra prisijungęs prie tinklo, tada prisiminkite IP
  * alternatyviai naudokite [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher//) esančią funkciją "Discovery" (Atradimas).
  * Jei taip: prie jutiklio per IP prisijunkite naršykle `http://[jutiklio ip]/` , turėtų pasirodyti sąsaja.
  * Jei ne: ESP turi problemų, pvz., nepakankamas maitinimas, perkrovimo kilpa ar pan.
* Prijunkite USB jungtį prie kompiuterio ir peržiūrėkite žurnalą
  * Sekite tekstą nuosekliojoje sąsajoje naudodami nuosekliojo terminalo programą (nustatymai: 9600 baudų, 8N1)
    * Linux: screen, minicom, cutecom; Windows: MacOS: screen, minicom, ...
    * galbūt dar reikia tinkamų usb2serial tvarkyklių, žr. [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
  * Ten turėtų būti galima matyti, ką jutiklis daro (įkrovos pranešimai, WLAN ryšys arba prieigos taškas, matavimas - tik po 3 minučių).

### Elektronikos problemos?
* Išimkite jutiklio elektroniką iš korpuso ir stebėkite
* Dar kartą patikrinkite ir (arba) pakeiskite maitinimo šaltinį
  * Ar ESP mirksi netrukus po perkrovimo?
  * Teensy: po perkrovimo mirksi raudonas šviesos diodas?
  * dar kartą patikrinkite ir (arba) pakeiskite jutiklių kabelius

  <div class="max-w-screen-xl mx-auto pt-5">
      <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
      <div class="flex items-center">
            <span class="p-2 rounded-lg bg-indigo-500">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </span>
        <div class="flex flex-wrap">
          <div class="flex-wrap flex">
            <p class="pt-1 text-indigo-700 font-medium">
                Triukšmas yra beta versijoje. Klausimus siųskite adresu</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>