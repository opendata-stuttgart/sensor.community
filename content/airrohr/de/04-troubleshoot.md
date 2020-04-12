---
title: Troubleshoot
---

## wurden Daten online übermittelt?
Folgendes im Browser mit den eigenen Daten eintragen:
`https://www.madavi.de/sensor/graph.php?sensor=esp8266-[ID]-[sensortyp]`

Nach der [ID] kann auch im Text auf der Seite `https://www.madavi.de/sensor/graph.php` gesucht werden

* Ist der Sensor via https://devices.sensor.community/ registiert und befindet sich der Sensor auf der Karte?
    * War das WLAN Signalpegel in der Vergangenheit schwach?
        hier ist das Signal-Log serverseitig: ``https://www.madavi.de/sensor/signal.php?sensor=esp8266-[ID]`
        


## USB-Kabel:

* Stromversorgung checken: USB Kabel
* Reboot (Stromversorgung unterbrechen, z.B. USB Stecker ziehen)
* Ist die WLAN Konfig OK (der Sensor verbindet auf das konfigurierte WLAN)? Falls nicht:
    * macht der Sensor einen AP auf (in den ersten 2-7 Minuten nach einem Reboot)?
    * Nach airrohr-[ID] WLAN Netzwerk Ausschau halten. Geduld, es kann nach dem Boot 1-2 Minuten dauern.
* Auf dem eigenen Router nachsehen, ob der Sensor im Netzwerk angemeldet ist, dann die IP merken 
    * alternativ "Discovery" im flashtool nutzen: https://github.com/opendata-stuttgart/airrohr-firmware-flasher/
    * Falls ja: auf die IP mit einem Browser verbinden http://[IP]/ , dort sollte die Oberfläche erscheinen
    * Falls nein: der ESP hat Probleme, z.B. Stromversorgung nicht ausreichend, reboot loop o.ä.
* USB an einen Rechner anschließen und dort das Log ansehen 
    * Text auf serieller Schnittstelle mit seriellem Terminal-Programm verfolgen (Settings: baud 9600, 8N1)
        * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, ...?
        * evtl. sind passende usb2serial Treiber noch nötig, siehe https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen
    * Dort sollte man erkennen können, was der Sensor gerade tut (Bootmeldungen, WLAN Verbindung oder AP, Messung - erst nach 3 Minuten)

## Elektronik:

* Sensorelektronik aus dem Gehäuse nehmen und beobachten
* Stromversorgung noch einmal checken/tauschen
    * blinkt der ESP kurz nach Reboot?
    * SDS011: rote LED/Lüfter an nach Reboot?
    * die Kabel zu den Sensoren noch einmal checken/tauschen


