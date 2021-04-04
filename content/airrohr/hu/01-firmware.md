---
title: Illesztőprogram és firmware
---

Már elkészítettük a firmware-t. Önnek csak az illesztőprogramokat kell telepítenie és a NodeMCU-t (ESP8266) kell flashelnie.

A NodeMCU-val (ESP8266) való kommunikációhoz usb2serial illesztőprogramokra van szüksége az operációs rendszeréhez.

A NocdeMCU v3 chipkészlet általában CH341, csak ellenőrizze a NodeMCU (ESP8266) hátulját, hogy találjon néhány technikai információt.

Válassza ki a számítógép operációs rendszerének megfelelő linket.

### Windows

##### Illesztőprogramok a következőhöz: NodeMCU (ESP8266) V2 (CP2102) for Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - A Windows 10 képesnek kell lennie arra, hogy automatikusan letöltse ezeket a fájlokat.
* [Windows 788.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32 bites verzió - **nem** támogatja a 64 bites operációs rendszert.

##### Illesztőprogram NodeMCU (ESP8266) V3 (CH341) Windows rendszerhez
* [Windows](http://www.wch.cn/downloads/file/5.html) - A Windows 10 képesnek kell lennie arra, hogy ezeket automatikusan letöltse.

##### A letöltött fájl kicsomagolása Windows esetén:
* NodeMCU (ESP8266) V2: Nyissa meg a CP210x mappát, és kattintson duplán a CP210xVCPInstaller_x64 (vagy x86) alkalmazásra.
* NodeMCU (ESP8266) V3 esetén: nyissa meg a CH341SER mappát, és kattintson duplán a SETUP alkalmazásra.

---

### MacOS

##### MacOS illesztőprogramok
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### Csomagolja ki a letöltött fájlt MacOS esetén.
* a V2 esetében: Csomagolja ki a CP210x mappát, és kattintson duplán a CP210xVCPInstaller_x64 (vagy x86) alkalmazásra.
* V3 esetén: Csomagolja ki a CH341SER mappát, és kattintson duplán a SETUP alkalmazásra.
* Indítsa újra a Mac számítógépet

---

### Linux
Nincs szükség illesztőprogramok telepítésére. A chipnek közvetlenül támogatottnak kell lennie (dmesg segítségével ellenőrizhető).

---
### Firmware Flasher
Több operációs rendszer támogatása: Windows, MacOS és Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Forráskód](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Csatlakoztassa a NodeMCU-t a számítógépéhez egy rövid micro-USB kábellel (válasszon 1 méternél rövidebbet, különben a telepítés meghiúsulhat). Válassza ki a `latest_en.bin` (vagy egy másik nyelvi verziót), és kattintson a "Upload" gombra.
Várjon, amíg a folyamat befejeződik. Most már összeszerelhetjük az érzékelőt.

#### Linux: Végrehajthatóként való engedélyek beállítása
A letöltés után lehet, hogy a jogosultságot futtathatóra kell állítani. Ezt a következő paranccsal lehet megtenni: Letöltési fájlnév>".
<br>
Nagy köszönet illeti [Piotr, Lengyelországból](https://dropbox.inf.re), a segítségéért! 🙋♂️

#### MacOS: hogyan kell futtatni egy ellenőrizetlen alkalmazást?
Kattintson a jobb gombbal, és nyissa meg az alkalmazást többször, és mindig erősítse meg a "Megnyitás" opcióval.

Itt van egy rövid videó a Youtube-on 👉 https://youtu.be1KZiP94TYjw




