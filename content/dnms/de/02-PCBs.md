---
title: PCBs und Schaltpläne
---

Der beste Weg, den DNMS (Digital Noise Measuring Sensor) zu bauen, ist, eine unserer Leiterplatten zu verwenden. Es gibt mittlerweile eine ganze Reihe von Leiterplattenherstellern, die für wenig Geld und ohne Mindestmengen Leiterplatten ätzen können. Zum Beispiel [JLCPCB](https://jlcpcb.com//).
Einfach unsere Schaltpläne und/oder Gerber-Dateien herunterladen, diese auf der Website des Herstellers hochladen und Leiterplatten bestellen.

<br>
Die aktuellste Version der Leiterplatten ist hier beschrieben. Weitere Informationen und Zugriff auf die KiCad-Dateien gibt es auf [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/PCBs). 

### AIRROHR V1.4
<img src="../docs/dnms/airrohr-PCB.jpg" style="display: block; width:40%;margin: 1em 0" loading="lazy"/>
Platine für den NodeMCU ESP8266 CPU/WLAN mit einer I2C-Bus-Erweiterung zum Anschluss des DNMS sowie weiterer Sensoren (SDS011, BME280...).

##### Download
* [Schaltplan](../docs/dnms/airrohr-PCB-circuit-diagram.pdf)
* [Gerber-Datei zum Hochladen auf der Website des Leiterplattenherstellers](../docs/dnms/airrohr-PCB-circuit-diagram-gerber.zip)

---

### DNMS - T4 V1.4
<img src="../docs/dnms/dnms-noise-measuring-teensy-4.jpg" style="display: block;width:40%; margin: 1em 0" loading="lazy"/>
Platine für den DNMS Teensy 4.0, der direkt auf einen NodeMCU ESP8266 oder auf die obige AIRROHR-Platine gesteckt werden kann.


##### Download
* [Schaltplan](../docs/dnms/dnms-noise-measuring-teensy-40-circuit-diagram.pdf)
* [Gerber-Datei zum Hochladen auf der Website des Leiterplattenherstellers](../docs/dnms/dnms-noise-measuring-teensy-40-circuit-gerber.zip)


