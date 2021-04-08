---
title: Illesztőprogram és firmware
---

Már elkészítettük a firmware-t. Önnek csak az illesztőprogramokat kell telepítenie és a NodeMCU-t (ESP8266) kell flashelnie.

A NodeMCU-val (ESP8266) való kommunikációhoz usb2serial illesztőprogramokra van szüksége az operációs rendszeréhez.

A NocdeMCU v3 chipkészlet általában CH341, nézze meg a NodeMCU (ESP8266) hátoldalán, hogy találjon néhány technikai információt.

Válassza ki a számítógép operációs rendszerének megfelelő linket.

### Windows

##### Illesztőprogramok NodeMCU (ESP8266) V2 (CP2102) számára Windowshoz
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - A Windows 10 képesnek kell lennie arra, hogy automatikusan letöltse ezeket.
* [Windows 7/8/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32 bites verzió - **nem** támogatja a 64 bites verziójú operációs rendszert.

##### Illesztőprogram NodeMCU (ESP8266) V3 (CH341) Windows számára
* [Windows](http://www.wch.cn/downloads/file/5.html) - A Windows 10 képesnek kell lennie arra, hogy automatikusan letöltse ezeket.

##### A letöltött fájl kicsomagolása Windows számára
* for NodeMCU (ESP8266) V2: Nyissa meg a CP210x mappát, és kattintson duplán a CP210xVCPInstaller_x64 (vagy x86) alkalmazásra.
* NodeMCU (ESP8266) V3 esetén: nyissa meg a CH341SER mappát, és kattintson duplán a SETUP alkalmazásra.

---

### MacOS

##### MacOS illesztőprogramok
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### A letöltött fájl kicsomagolása MacOS esetén
* V2 esetében: Csomagolja ki a CP210x mappát, és kattintson duplán a CP210xVCPInstaller_x64 (vagy x86) alkalmazásra.
* V3 esetében: Csomagolja ki a CH341SER mappát, és kattintson duplán a SETUP alkalmazásra.
* Indítsa újra a Mac számítógépet

---

### Linux
Nem kell illesztőprogramokat telepíteni. A chipnek közvetlenül támogatottnak kell lennie (ellenőrizhető a dmesg segítségével).

---
### Firmware Flasher
Több operációs rendszer támogatása: Windows, MacOS és Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Forráskód](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Csatlakoztassa a NodeMCU-t a számítógépéhez egy rövid micro-USB kábellel (válasszon 1 méternél rövidebbet, különben a telepítés meghiúsulhat). Válassza ki a `latest_en.bin` (vagy egy másik nyelvi verziót) és kattintson a "Upload" gombra.
Várjon, amíg a folyamat befejeződik. Most már összeszerelhetjük az érzékelőt.

#### Linux: Jogosultságok beállítása végrehajthatóként
A letöltés után előfordulhat, hogy a jogosultságot futtathatóra kell állítani. Ezt a paranccsal lehet megtenni: `chmod o+x <letöltési fájlnév>`
<br>
Nagy köszönet illeti [Piotr, Lengyelországból](https://dropbox.inf.re/), a segítségéért! 🙋♂️

#### MacOS: hogyan futtassunk egy nem ellenőrzött alkalmazást?
Jobb egérgombbal kattintva többször nyisd meg az alkalmazást, és mindig a "Megnyitás"-sal erősítsd meg.

Itt van egy rövid videó a Youtube-on 👉 https://youtu.be/1KZiP94TYjw




