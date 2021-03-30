---
title: Ovládač a firmvér
---

Firmvér sme už pripravili. Stačí len nainštalovať ovládače a flashnúť vaše dosky NodeMCU (ESP8266) a Teensy 4.0.

Na komunikáciu so zariadením ESP8266 potrebujete ovládače usb2serial pre svoj operačný systém.

Čipová sada pre NocdeMCU v3 je zvyčajne CH341, stačí sa pozrieť na zadnú stranu vašej NodeMCU a nájsť technické informácie. Vyberte odkaz, ktorý zodpovedá operačnému systému vášho počítača.

### Windows

##### Ovládače pre model V2 (CP2102) pre Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - systém Windows 10 by mal byť schopný ich automaticky stiahnuť
* [Windows 788.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-bitová verzia - **nepodporuje** 64-bitovú verziu OS

##### Ovládač pre model V3 (CH341) pre Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - systém Windows 10 by mal byť schopný ich automaticky stiahnuť

##### Rozbaľte stiahnutý súbor pre systém Windows:
* pre V2: Otvorte priečinok CP210x a dvakrát kliknite na aplikáciu CP210xVCPInstaller_x64 (alebo x86)
* pre V3: otvorte priečinok CH341SER a dvakrát kliknite na aplikáciu SETUP.

---

### MacOS

##### Ovládače systému MacOS
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### Rozbaľte stiahnutý súbor pre systém MacOS.
* pre V2: Rozbaľte priečinok CP210x a dvakrát kliknite na aplikáciu CP210xVCPInstaller_x64 (alebo x86)
* pre V3: Rozbaľte priečinok CH341SER a dvakrát kliknite na aplikáciu SETUP.
* Reštartovanie počítača Mac

---

### Linux
Nie je potrebné inštalovať žiadne ovládače. Čip by mal byť podporovaný priamo (overiteľné pomocou dmesg)

---
### Firmware Flasher NodeMCU
Podpora viacerých operačných systémov: Windows, MacOS a Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Zdrojový kód](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)

Pripojte NodeMCU k počítaču pomocou krátkeho kábla micro-USB (vyberte kratší ako 1 meter, inak môže inštalácia zlyhať). Vyberte súbor `latest_en.bin` (alebo inú jazykovú verziu) a kliknite na tlačidlo "Upload".
Počkajte, kým sa proces ukončí. Teraz môžeme senzor zostaviť.
<br>
Veľká vďaka patrí [Piotrovi, z Poľska](https://dropbox.inf.re), za jeho pomoc! 🙋♂️

---
### Firmware Flasher Teensy
V [Githube Helmuta Bittera](https://github.com/hbitter/DNMS/tree/master/Firmware) nájdete dva druhy firmvéru:
* .ino
* .hex

##### Teensy Loader
Súbor .hex môžete flashovať na doskách Teensy pomocou samostatného grafického softvéru [Teensy Loader](https://www.pjrc.com/teensy/loader.html) pre Windows, Mac a Linux.
Existuje aj verzia pre príkazový riadok.

##### Teensyduino
Súbor .ino môžete flashovať v doskách Teensy s príponou Arduino IDE [Teensyduino](https://www.pjrc.com/teensy/teensyduino.html).
V prípade potreby môžete firmvér upraviť priamo v prostredí Arduino IDE.
