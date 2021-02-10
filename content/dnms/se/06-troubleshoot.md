---
title: Felsök
---

### Överföringsproblem?
Ange följande i webbläsaren med dina egna data:
`https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1&var-chipID=esp8266-[ID]`

[ID] kan också sökas i inmatningsfältet i det övre vänstra hörnet [https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1](https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1)

* Är sensorn registrerad via [https://devices.sensor.community/ ](https://devices.sensor.community/) och är sensorn synlig på kartan?
    * Var WLAN-signalnivån svag tidigare?
        här är signalloggens serversida: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`

### USB-kabelproblem?
* Kontrollera strömförsörjningen: USB-kabel
* Starta om (koppla bort strömförsörjningen, t.ex. dra ut USB-kontakten)
* Är WLAN-konfigurationen OK (sensorn ansluter till det konfigurerade WLAN) Om inte:
    * öppnar sensorn en AP (under de första 2-7 minuterna efter en omstart)?
    * Leta efter ʻairrohr- [ID] `WLAN-nätverk. Tålamod, det kan ta 1-2 minuter efter start.
* Kontrollera på din egen router om sensorn är inloggad i nätverket, kom ihåg IP-adressen
    * använd alternativt "Discovery" i [flashverktyget](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
    * Om ja: anslut till sensorn via IP med en webbläsare `http://[ip-of-the-sensor]/`, bör gränssnittet visas
    * Om nej: ESP har problem, t.ex. strömförsörjning otillräcklig, omstartslinga eller liknande
* Anslut USB till en dator och visa loggen
    * Spåra text på seriellt gränssnitt med seriellt terminalprogram (Inställningar: baud 9600, 8N1)
        * Linux: skärm, minicom, cutecom; Windows: Tera Term; MacOS: skärm, minicom, ...
        * möjligen lämpliga drivrutiner för usb2 är fortfarande nödvändiga, se [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware- einspielen/)
    * Där borde du kunna se vad sensorn gör (startmeddelanden, WLAN-anslutning eller AP, mätning - bara efter 3 minuter)

### Elektronikproblem?
* Ta bort sensorelektroniken från huset och observera
* Kontrollera / byt ut strömförsörjningen igen
    * blinkar ESP strax efter omstart?
    * Teensy: röd lysdiod blinkar efter omstart?
    * kontrollera / byt ut kablarna till sensorerna igen


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
                 Buller är i beta. Skicka frågor till </p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>
