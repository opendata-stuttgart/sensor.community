---
title: Fejlfinding
---

#### Overførselsproblemer?
Indtast følgende i browseren med dine egne data:
`https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1&var-chipID=esp8266-[ID]`

Der kan også søges efter [ID] i indtastningsfeltet i øverste venstre hjørne [https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1](https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1)

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
  * Teensy: rød LED blinker efter genstart?
  * kontrollér/udskift kablerne til sensorerne igen

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
                Noise er i betaversion. Send spørgsmål til</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>
