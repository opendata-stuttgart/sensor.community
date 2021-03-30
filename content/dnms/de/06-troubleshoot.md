---
title: Troubleshoot
---

### Problemen beim Übertragen?
Gebe folgendes in deinem Browser mit deinen eigenen Daten ein:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

Die [ID] kann auch im Eingabefeld open links auf der Seite [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1) gesucht werden.

* Ist der Sensor über [https://devices.sensor.community/](https://devices.sensor.community/) registriert und ist der Sensor auf der Karte sichtbar?
* War das WLAN-Signal in der Vergangenheit schwach?
  Hier ist das server-seitige Signalprotokoll: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`

### Probleme mit dem USB-Kabel?
* Überprüfe die Stromversorgung
* Neustart (Stromversorgung trennen, z.B. USB-Stecker ziehen)
* Ist die WLAN-Konfiguration okay (der Sensor verbindet sich mit dem konfigurierten WLAN). Wenn nicht:
  * Öffnet der Sensor einen Adhoc Wifi (Access Point), in den ersten 2-7 Minuten nach einem Neustart?
  * Suche nach dem WLAN-Netzwerk `airrohr-[ID]`. Es kann einige Minuten nach einem Neustart brauchen bis dieses sichtbar ist.
* Prüfe an deinem eigenen Router, ob der Sensor im Netzwerk angemeldet ist, und merke dir die IP
  * alternativ "Im Netzwerk suchen" im [airRohr Flashing Tool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher//) verwenden
  * Falls ja: Verbinde dich mit dem Sensor über einen Browser `http://[ip-deines-sensors]/`, die Konfiguration sollte erscheinen
  * Falls nein: könnte es an einer unzureichenden Stromversorgung, Neustartschleife oder ähnlichem liegen.
* Schließe die NodeMCU über ein USB-Kabel an einen Computer an und schau dir das Protokoll an
  * Mit einem seriellen Terminalprogramm verfolgen (Einstellungen: Baud 9600, 8N1)
    * Linux: Bildschirm, Minicom, cutecom
    * Windows: Tera Term
    * MacOS: Bildschirm, Minicom, ...
    * evtl. sind noch geeignete USB-2-Seriell-Treiber notwendig, siehe [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
  * Dort sollte zu sehen sein, was der Sensor gerade macht (Boot-Meldungen, WLAN-Verbindung oder Access Point, Messung - erst nach 3 Minuten)

### Probleme mit der Elektronik?
* Entferne die Sensorelektronik aus dem Gehäuse und schau sie dir genau an
* Stromversorgung erneut prüfen/ersetzen
  * Blinkt die NodeMCU(ESP8266) kurz nach dem Neustart?
  * SDS011: rote LED/Lüfter leuchtet nach dem Neustart?
  * Überprüfe/ersetze die Kabel zu den Sensoren erneut

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
                Noise befindet sich in der Beta-Phase. Senden deine Fragen an</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>
