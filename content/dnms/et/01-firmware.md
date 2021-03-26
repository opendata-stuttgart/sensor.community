---
title: Juhi ja püsivara
---

Me juba valmistasime ette püsivara. Teil tuleb vaid paigaldada draiverid ja flashida oma NodeMCU (ESP8266) ja Teensy 4.0 plaadid.

ESP8266-ga suhtlemiseks vajate oma operatsioonisüsteemi usb2serial draiverit.

NocdeMCU-de v3 kiibistik on tavaliselt CH341, vaadake oma NodeMCU tagaküljelt, et leida tehnilist teavet. Valige link, mis vastab teie arvuti operatsioonisüsteemile.

### Windows

##### Draiverid mudelile V2 (CP2102) Windowsile
* [Windows 10](https://www.silabs.comdocumentspublicsoftwareCP210x_Universal_Windows_Driver.zip) - Windows 10 peaks olema võimeline neid automaatselt alla laadima.
* [Windows 788.1](https://www.silabs.comdocumentspublicsoftwareCP210x_Windows_Drivers.zip) - 32-bitine versioon - **ei toeta** 64-bitise versiooni operatsioonisüsteemi

##### Driver for model V3 (CH341) for Windows
* [Windows](http://www.wch.cndownloadsfile5.html) - Windows 10 peaks olema võimeline neid automaatselt alla laadima.

##### Laaditud faili väljavõte Windowsi jaoks:
* V2 jaoks: Avage kaust CP210x ja tehke topeltklõps rakendusel CP210xVCPInstaller_x64 (või x86).
* V3 puhul: avage kaust CH341SER ja tehke topeltklõps rakendusel SETUP.

---

### MacOS

##### MacOS draiverid
* [NodeMCU V2](https://www.silabs.comdocumentspublicsoftwareMac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cndownloadsfile178.html)

##### Laaditud faili ekstraheerimine MacOS-i jaoks.
* V2 jaoks: Paki kaust CP210x välja ja tee topeltklõps rakendusel CP210xVCPInstaller_x64 (või x86).
* V3 puhul: Paki lahti kaust CH341SER ja tee topeltklõps rakendusel SETUP.
* Taaskäivitage oma Mac

---

### Linux
Juhtseadmeid ei ole vaja paigaldada. Kiip peaks olema otse toetatud (kontrollitav dmesg abil).

---
### Firmware Flasher NodeMCU
Mitme operatsioonisüsteemi tugi: Windows, MacOS ja Linux.

* [airRohr Flashing Tool](http://firmware.sensor.communityairrohrflashing-tool)
* [lähtekood](https://github.comopendata-stuttgartairrohr-firmware-flasher)

Ühendage NodeMCU arvutiga lühikese micro-USB-kaabli abil (valige lühike kaabel, mis on lühem kui 1 meeter, muidu võib paigaldus ebaõnnestuda). Valige `latest_en.bin` (või mõni muu keeleversioon) ja klõpsake nuppu "Upload".
Oodake, kuni protsess on lõppenud. Nüüd saame me anduri kokku panna.
<br>
Suur tänu [Piotrile, Poolast](https://dropbox.inf.re), tema abi eest! 🙋♂️

---
### Firmware Flasher Teensy
[Helmut Bitteri Githubis](https://github.comhbitterDNMStreemasterFirmware) leiate kahte tüüpi firmware:
* .ino
* .hex

##### Teensy Loader
Teensy tahvlitesse saab .hex faili flashida iseseisva GUI tarkvaraga [Teensy Loader](https://www.pjrc.comteensyloader.html) Windowsile, Macile ja Linuxile.
Olemas on ka käsurea versioon.

##### Teensyduino
Teensy plaatide .ino faili saab flashida Arduino IDE laiendiga [Teensyduino](https://www.pjrc.comteensyteensyduino.html).
Vajaduse korral saate muuta püsivara otse Arduino IDE-s.
