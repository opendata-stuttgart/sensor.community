---
title: Juhi ja püsivara
---

Me juba valmistasime firmware ette. Teil tuleb ainult paigaldada draiverid ja flashida oma NodeMCU (ESP8266) ja Teensy 4.0 plaadid.

ESP8266-ga suhtlemiseks on vaja usb2serial draiverid oma operatsioonisüsteemi jaoks.

NocdeMCU-de v3 kiibistik on tavaliselt CH341, vaadake lihtsalt oma NodeMCU tagaküljelt, et leida tehnilist teavet. Valige link, mis vastab teie arvuti operatsioonisüsteemile.

### Windows

##### Draiverid mudelile V2 (CP2102) Windowsi jaoks.
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 peaks neid automaatselt alla laadima.
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-bitine versioon - **ei** toeta 64-bitise versiooni operatsioonisüsteemi.

##### Draiverid mudelile V3 (CH340/CH341) Windowsi jaoks.
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 peaks saama need automaatselt alla laadida.

##### Allalaaditud faili väljavõtmine Windowsile
* V2 jaoks: Avage kaust CP210x ja tehke topeltklõps rakendusel CP210xVCPInstaller_x64 (või x86)
* V3 puhul: avage kaust CH341SER ja tehke topeltklõps rakendusel SETUP.

---

### MacOS

##### MacOS draiverid
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### Laaditud faili väljavõtmine MacOS jaoks.
* V2 jaoks: Paki kaust CP210x välja ja tee topeltklõps rakendusel CP210xVCPInstaller_x64 (või x86).
* V3 puhul: pakendage lahti kaust CH341SER ja tehke topeltklõps rakendusel SETUP.
* Käivitage Mac uuesti.

---

### Linux
Draivereid ei ole vaja paigaldada. Kiip peaks olema otse toetatud (kontrollitav dmesg abil)

---
### Firmware Flasher NodeMCU
Toetus mitmetele operatsioonisüsteemidele: Windows, MacOS ja Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Source Code](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Ühendage NodeMCU arvutiga lühikese micro-USB kaabli abil (valige lühem kui 1 meetri pikkune, muidu võib paigaldus ebaõnnestuda). Valige `latest_en.bin` (või mõni muu keeleversioon) ja klõpsake "Upload".
Oodake, kuni protsess on lõpetatud. Nüüd saame me anduri kokku panna.
<br>
Suur tänu [Piotrile, Poolast](https://dropbox.inf.re/), tema abi eest! 🙋♂️

---
### Firmware Flasher Teensy
[Helmut Bitteri Githubis](https://github.com/hbitter/DNMS/tree/master/Firmware) leiate kahte tüüpi firmware'i:
* .ino
* .hex

##### Teensy Loader
Teensy tahvlitesse saab .hex faili flashida iseseisva GUI tarkvaraga [Teensy Loader](https://www.pjrc.com/teensy/loader.html) Windowsile, Macile ja Linuxile.
Olemas on ka käsurea versioon.

##### Teensyduino
Teensy tahvlitesse saab .ino faili flashida Arduino IDE laiendiga [Teensyduino](https://www.pjrc.com/teensy/teensyduino.html).
Vajaduse korral saate muuta püsivara otse Arduino IDE-s.