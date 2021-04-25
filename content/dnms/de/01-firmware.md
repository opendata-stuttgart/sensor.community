---
title: Treiber & Firmware
---

Wir haben die Firmware bereits vorbereitet. Du musst nur noch die Treiber installieren und den NodeMCU (ESP8266) und Teensy 4.0 Boards flashen.
Um mit deinem ESP8266 zu kommunizieren, benötigst du den USB-2-Seriell-Treiber für dein Betriebssystem.
Der Chipsatz für die NodeMCUs v3 ist normalerweise der CH341, schaue einfach auf der Rückseite deiner NodeMCU nach, um einige technische Informationen zu finden.

Wähle den Link, der dem Betriebssystem deines Computers entspricht.

### Windows

##### Treiber für das Modell V2 (CP2102) für Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 sollte in der Lage sein, die Treiber automatisch herunterzuladen
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-Bit-Version - **nicht** unterstützt 64-Bit-Version OS

##### Treiber für das Modell V3 (CH340/CH341) für Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 sollte in der Lage sein, die Treiber automatisch herunterzuladen

##### Entpacken der heruntergeladene Datei für Windows:
* für V2: Entpacken Ordner CP210x und starte die Anwendung CP210xVCPInstaller_x64 (oder x86)
* für V3: Entpacke Ordner CH341SER und starte die Anwendung SETUP.

---

### MacOS

##### MacOS-Treiber
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### Entpacken der heruntergeladene Datei für MacOS.
* für V2: Entpacke Ordner CP210x und starte die Anwendung CP210xVCPInstaller_x64 (oder x86)
* für V3: Entpacke Ordner CH341SER und starte die Anwendung SETUP.
* Mac neustarten

---

### Linux
Es müssen keine Treiber installiert werden. Chip sollte direkt unterstützt werden (überprüfbar mit dmesg)

---
### Firmware Flasher NodeMCU
Unterstützung für mehrere Betriebssysteme: Windows, MacOS und Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Quellcode](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

NodeMCU mit deinem Computer und einem kurzen Micro-USB-Kabel verbinden. Unter 1 Meter wählen, sonst kann die Installation fehlschlagen kann. Wähle `latest_de.bin` (oder eine andere Sprachversion) und klicke auf "Upload".
Warte bis der Vorgang abgeschlossen ist. Nun können wir den Sensor zusammenbauen.
<br>
Ein großer Dank geht an [Piotr, aus Polen](https://dropbox.inf.re/), für seine Hilfe! 🙋♂️

---
### Firmware Flasher Teensy
Auf [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Firmware) gibt es zwei Arten von Firmware:
* .ino
* .hex

##### Teensy Loader
Die .hex-Datei kann man mit dem [Teensy Loader](https://www.pjrc.com/teensy/loader.html) (Windows, Mac und Linux) flashen.
Eine Kommandozeilenversion existiert ebenfalls.

##### Teensyduino
Die .ino-Datei kann man mit der Arduino IDE-Erweiterung [Teensyduino](https://www.pjrc.com/teensy/teensyduino.html) flashen.
Bei Bedarf kann man die Firmware direkt in der Arduino-IDE modifizieren.