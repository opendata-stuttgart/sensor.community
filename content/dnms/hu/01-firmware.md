---
title: Illesztőprogram és firmware
---

Már elkészítettük a firmware-t. Önnek csak az illesztőprogramokat kell telepítenie és flashelnie a NodeMCU (ESP8266) és a Teensy 4.0 lapokat.

Az ESP8266-tal való kommunikációhoz usb2serial illesztőprogramokra van szüksége az operációs rendszeréhez.

A NocdeMCU v3 chipkészlet általában CH341, nézd meg a NodeMCU hátulját, hogy megtaláld a technikai információkat. Válassza ki a számítógép operációs rendszerének megfelelő linket.

### Windows

##### illesztőprogramok a V2 (CP2102) modellhez Windows rendszerhez
* [Windows 10](https://www.silabs.comdocumentspublicsoftwareCP210x_Universal_Windows_Driver.zip) - A Windows 10 képesnek kell lennie arra, hogy automatikusan letöltse ezeket a fájlokat.
* [Windows 788.1](https://www.silabs.comdocumentspublicsoftwareCP210x_Windows_Drivers.zip) - 32 bites verzió - **nem** támogatja a 64 bites operációs rendszert.

##### illesztőprogram a V3 modellhez (CH341) a Windowshoz
* [Windows](http://www.wch.cndownloadsfile5.html) - A Windows 10 képesnek kell lennie arra, hogy ezeket automatikusan letöltse.

##### A letöltött fájl kicsomagolása Windows esetén:
* a V2 esetében: Nyissa meg a CP210x mappát, és kattintson duplán a CP210xVCPInstaller_x64 (vagy x86) alkalmazásra.
* V3 esetén: nyissa meg a CH341SER mappát, és kattintson duplán a SETUP alkalmazásra.

---

### MacOS

##### MacOS illesztőprogramok
* [NodeMCU V2](https://www.silabs.comdocumentspublicsoftwareMac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cndownloadsfile178.html)

##### Csomagolja ki a letöltött fájlt MacOS esetén.
* a V2 esetében: Csomagolja ki a CP210x mappát, és kattintson duplán a CP210xVCPInstaller_x64 (vagy x86) alkalmazásra.
* V3 esetén: Csomagolja ki a CH341SER mappát, és kattintson duplán a SETUP alkalmazásra.
* Indítsa újra a Mac számítógépet

---

### Linux
Nincs szükség illesztőprogramok telepítésére. A chipnek közvetlenül támogatottnak kell lennie (dmesg segítségével ellenőrizhető).

---
### Firmware Flasher NodeMCU
Több operációs rendszer támogatása: Windows, MacOS és Linux.

* [airRohr Flashing Tool](http://firmware.sensor.communityairrohrflashing-tool)
* [Forráskód](https://github.comopendata-stuttgartairrohr-firmware-flasher)

Csatlakoztassa a NodeMCU-t a számítógépéhez egy rövid micro-USB kábellel (válasszon 1 méternél rövidebbet, különben a telepítés meghiúsulhat). Válassza ki a `latest_en.bin` (vagy egy másik nyelvi verziót), és kattintson a "Upload" gombra.
Várjon, amíg a folyamat befejeződik. Most már összeszerelhetjük az érzékelőt.
<br>
Nagy köszönet illeti [Piotr, Lengyelországból](https://dropbox.inf.re), a segítségéért! 🙋♂️

---
### Firmware Flasher Teensy
A [Helmut Bitter Githubjában](https://github.comhbitterDNMStreemasterFirmware) kétféle firmware található:
* .ino
* .hex

##### Teensy Loader
A .hex fájlt a Teensy kártyákon az önálló GUI szoftverrel [Teensy Loader](https://www.pjrc.comteensyloader.html) flashelheti a Windows, Mac és Linux operációs rendszerekhez.
Létezik egy parancssoros verzió is.

##### Teensyduino
A .ino fájlt az Arduino IDE kiterjesztéssel [Teensyduino](https://www.pjrc.comteensyteensyduino.html) rendelkező Teensy kártyákon flashelheti.
Ha szükséges, a firmware-t közvetlenül az Arduino IDE-ben is módosíthatja.
