---
title: Treiber & Firmware
---

Wir haben die Firmware bereits vorbereitet. Du muss nur noch Treiber installieren und den NodeMCU (ESP8266) flashen. 

Um mit deinem ESP8266 zu kommunizieren, benötigst du den usb2serielle Treiber für dein Betriebssystem. 

Der Chipsatz für die NocdeMCUs v3 ist normalerweise der CH341, schaue einfach auf der Rückseite deines NodeMCU nach, um einige technische Informationen zu finden. 

Wählen den Link, der dem Betriebssystem deinesComputers entspricht.

### Windows

##### Treiber für Modell V2 (CP2102) für Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 sollte in der Lage sein, diese automatisch herunterzuladen
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-Bit-Version - **keine** Unterstützung für die 64-Bit-Version des Betriebssystems

##### Treiber für Modell V3 (CH341) für Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 sollte in der Lage sein, diese automatisch herunterzuladen.

##### Entpacke die heruntergeladene Datei für Windows:
* für V2: Öffne den Ordner CP210x und doppelklicke auf die Anwendung CP210xVCPInstaller_x64 (oder x86)
* für V3: Öffnen den Ordner CH341SER und doppelklicke auf die Anwendung SETUP.

---

### MacOS

##### MacOS-Treiber
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html) 

##### Entpacke die heruntergeladene Datei für MacOS.
* für V2: Entpacke den Ordner CP210x und doppelklicke auf die Anwendung CP210xVCPInstaller_x64 (oder x86)
* für V3: Entpacke den Ordner CH341SER und doppelklicke auf die Anwendung SETUP.
* Starten deinen Mac neu

---

### Linux
Es müssen keine Treiber installiert werden. Der Chip sollte direkt unterstützt werden (verifizierbar mit `dmesg`)

---
### Firmware-Blinker 
Unterstützung für mehrere Betriebssysteme: Windows, MacOS und Linux.

* [airRohr-Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Quellcode](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)

Schließe deine NodeMCU mit einem kurzen Mikro-USB-Kabel an deinem Computer an (wählen dabei ein Kabel, das kürzer als 1 Meter ist, sonst kann die Installation fehlschlagen). Wähle `latest_de.bin` (oder eine andere Sprachversion) und klicken auf "Hochladen".
Warte, bis der Vorgang abgeschlossen ist. Jetzt können wir den Sensor zusammenbauen.
<br>
Ein grosser Dank geht an [Piotr, aus Polen] (https://dropbox.inf.re/), für seine Hilfe! 🙋‍♂️♂️ 

