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
    * alternativ "Im Netzwerk suchen" im [airRohr Flashing Tool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/) verwenden
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


