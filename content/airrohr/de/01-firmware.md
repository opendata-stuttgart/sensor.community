---
title: Treiber & Firmware
---

Wir haben die Firmware bereits vorbereitet. Du musst nur noch Treiber installieren und die NodeMCU (ESP8266) flashen.

Um mit deinem ESP8266 zu kommunizieren, benötigst du den USB-2-Seriell-Treiber für dein Betriebssystem. 

Der Chipsatz für die NodeMCUs v3 ist normalerweise der CH341, schaue einfach auf der Rückseite deiner NodeMCU nach, um einige technische Informationen zu finden. 

Wähle den Link, der dem Betriebssystem deines Computers entspricht.

### Windows

##### Treiber für Modell V2 (CP2102) für Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 sollte in der Lage sein, diese automatisch herunterzuladen
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-Bit-Version - **keine** Unterstützung für die 64-Bit-Version des Betriebssystems

##### Treiber für Modell V3 (CH340/CH341) für Windows
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
### Firmware Flashing Tool 
Unterstützung für mehrere Betriebssysteme: Windows, MacOS und Linux.

* [airRohr-Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Quellcode](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Schließe deine NodeMCU mit einem kurzen Mikro-USB-Kabel an deinem Computer an (wähle dabei ein Kabel, das kürzer als 1 Meter ist, sonst kann die Installation fehlschlagen). Wähle `latest_de.bin` (oder eine andere Sprachversion) und klicke auf "Hochladen".
Warte, bis der Vorgang abgeschlossen ist. Jetzt können wir den Sensor zusammenbauen.

#### Linux: Berechtigungen als ausführbare Datei setzen
Nach dem Download muss die Datei eventuell noch ausführbar gemacht werden. Dies lässt sich mit dem Befehl: `chmod o+x <download filename>` 
<br>
Ein grosser Dank geht an [Piotr aus Polen](https://dropbox.inf.re) für seine Hilfe! 🙋‍♂️


#### MacOS: So starten Sie eine nicht verifizierte App
Klicken Sie mit der rechten Maustaste und öffnen Sie die Anwendung mehrmals und bestätigen Sie immer mit "Öffnen".

Hier ist ein kurzes Video auf Youtube 👉 https://youtu.be/1KZiP94TYjw

