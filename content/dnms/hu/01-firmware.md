---
title: Drivert és firmware-t
---

Már elkészítettük a firmware-t. Önnek csak telepítenie kell az illesztőprogramokat és flashelnie kell a NodeMCU (ESP8266) és a Teensy 4.0 lapokat.

Az ESP8266-oddal való kommunikációhoz usb2serial illesztőprogramokra van szükséged az operációs rendszeredhez.

A NocdeMCU v3 chipkészlet általában CH341, csak ellenőrizze a NodeMCU hátoldalán, hogy találjon néhány technikai információt. Válassza ki a számítógép operációs rendszerének megfelelő linket.

### Windows

##### Illesztőprogramok a V2-es modellhez (CP2102) Windowshoz
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - A Windows 10 képesnek kell lennie arra, hogy automatikusan letöltse ezeket.
* [Windows 7/8/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32 bites verzió - **nem** támogatja a 64 bites verziójú operációs rendszert.

##### illesztőprogram a V3 modellhez (CH341) Windowshoz
* [Windows](http://www.wch.cn/downloads/file/5.html) - A Windows 10 képesnek kell lennie arra, hogy automatikusan letöltse ezeket.

##### A letöltött fájl kicsomagolása Windows számára
* a V2-es modellhez: Nyissa meg a CP210x mappát, és kattintson duplán a CP210xVCPInstaller_x64 (vagy x86) alkalmazásra.
* V3 esetében: nyissa meg a CH341SER mappát, és kattintson duplán a SETUP alkalmazásra.

---

### MacOS

##### MacOS illesztőprogramok
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### A letöltött fájl kicsomagolása MacOS esetén
* V2 esetében: Csomagolja ki a CP210x mappát, és kattintson duplán a CP210xVCPInstaller_x64 (vagy x86) alkalmazásra.
* V3 esetében: Csomagolja ki a CH341SER mappát, és kattintson duplán a SETUP alkalmazásra.
* Indítsa újra a Mac számítógépet

---

### Linux
Nem kell illesztőprogramokat telepíteni. A chipnek közvetlenül támogatottnak kell lennie (ellenőrizhető a dmesg segítségével).

---
### Firmware Flasher NodeMCU
Több operációs rendszer támogatása: Windows, MacOS és Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Forráskód](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Csatlakoztassa a NodeMCU-t a számítógépéhez egy rövid micro-USB kábellel (válasszon 1 méternél rövidebbet, különben a telepítés meghiúsulhat). Válassza ki a `latest_en.bin` (vagy egy másik nyelvi verziót) és kattintson a "Upload" gombra.
Várjon, amíg a folyamat befejeződik. Most már összeszerelhetjük az érzékelőt.
<br>
Nagy köszönet illeti [Piotr, Lengyelországból](https://dropbox.inf.re/), a segítségéért! 🙋♂️

---
### Firmware Flasher Teensy
A [Helmut Bitter Githubjában](https://github.com/hbitter/DNMS/tree/master/Firmware) kétféle firmware-t találsz:
* .ino
* .hex

##### Teensy Loader
A .hex fájlt a Teensy kártyákon a [Teensy Loader](https://www.pjrc.com/teensy/loader.html) önálló GUI szoftverrel flashelheted a Teensy kártyákon Windows, Mac és Linux operációs rendszerekhez.
Létezik egy parancssoros verzió is.

##### Teensyduino
A .ino fájlt az Arduino IDE kiterjesztésű [Teensyduino](https://www.pjrc.com/teensy/teensyduino.html) szoftverrel flashelheti a Teensy kártyákon.
Szükség esetén a firmware-t közvetlenül az Arduino IDE-ben módosíthatja.