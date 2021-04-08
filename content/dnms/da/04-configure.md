---
title: Konfigurer
---

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


## Hent ID
1. Tilslut stationen med et USB-kabel for at sætte sensoren i gang

2. Stationen forsøger at oprette forbindelse til det konfigurerede WiFi-adgangspunkt. Hvis dette ikke virker, åbner sensoren et adgangspunkt med navnet `Particulate Matter ID` , `Feinstaubsensor-ID` eller `airRohr-ID`. ID'et er **ChipID** (f.eks. 13597771). **Notér venligst dette nummer, da du skal bruge det til registreringen**

3. 3. Opret forbindelse til det oprettede adgangspunkt. Vent, indtil forbindelsen er etableret.<br>*Android*: Hvis forbindelsen afbrydes med det samme, skal du muligvis deaktivere indstillingen "Smart network switch" under "Connections -> WiFi -> Advanced

4. 4. Åbn din browser, og skriv [http://192.168.4.1/](http://192.168.4.1/)

> ⚠️ **Bemærk** Det kan tage et par forsøg, før NodeMCU'en opretter forbindelse til hjemmets WiFi-netværk. Bliv venligst ikke utålmodig og prøv, indtil det virker. Sensoren kan også konfigureres via en smartphone. Hvis konfigurationen af sensoren har fungeret, er konfigurationssiden ikke længere tilgængelig under denne IP 192.168.4.1

### Konfigurer stationen
1. Indtast under "Configure" SSID (navnet på dit WiFi-hjemmenetværk), netværkssikkerhedsnøglen (under Windows) eller WiFi-adgangskoden.

2. For støjsensorer (DNMS) i henhold til denne manual er der ikke behov for yderligere ændringer

3. Når du trykker på gem, genstarter sensoren og er ikke længere tilgængelig på denne måde, når den opretter forbindelse til WLAN.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Test stationen
Hvis der ikke er foretaget andre ændringer end indtastning af WiFi-netværksdata, kan sensoren "testes" på de følgende sider efter ca. 10 minutter. På disse sider skal du søge efter ChipID'et (i eksemplet ovenfor 13597771).

* [Sensordaten](www.madavi.de/sensor/graph.php)
* [WLAN-Signal](www.madavi.de/sensor/signal.php) 
        