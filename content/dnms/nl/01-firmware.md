---
title: Stuurprogramma &amp; firmware
---

We hebben de firmware al voorbereid. U hoeft alleen de drivers te installeren en uw NodeMCU (ESP8266) en Teensy 4.0-bordjes te flashen.

Om te communiceren met uw ESP8266 heeft u usb2serial drivers nodig voor uw besturingssysteem.

De chipset voor NocdeMCUs v3 is meestal CH341, kijk maar eens op de achterkant van je NodeMCU om wat technische informatie te vinden. Kies de link die overeenkomt met het besturingssysteem van uw computer.

### Windows

##### Stuurprogramma's voor model V2 (CP2102) voor Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 zou in staat moeten zijn om deze automatisch te downloaden
* [Windows 788.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-bits versie - **niet** ondersteuning voor 64-bits versie OS

##### Stuurprogramma voor model V3 (CH341) voor Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 zou in staat moeten zijn om deze automatisch te downloaden

##### Pak het gedownloade bestand voor Windows uit:
* voor V2: Open de map CP210x en dubbelklik op de toepassing CP210xVCPInstaller_x64 (of x86)
* voor V3: open de map CH341SER en dubbelklik op de toepassing SETUP.

---

### MacOS

##### MacOS-stuurprogramma's
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### Pak het gedownloade bestand voor MacOS uit.
* voor V2: Unzip de map CP210x en dubbelklik op de toepassing CP210xVCPInstaller_x64 (of x86)
* voor V3: Unzip de map CH341SER en dubbelklik op de toepassing SETUP.
* Herstart uw Mac

---

### Linux
Er hoeven geen drivers geïnstalleerd te worden. Chip zou rechtstreeks ondersteund moeten worden (controleerbaar met dmesg)

---

Ondersteuning voor meerdere besturingssystemen: Windows, MacOS en Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Bron Code](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)

Verbind NodeMCU met je computer met een korte micro-USB kabel (kies er een korter dan 1 meter, anders kan de installatie mislukken). Selecteer `latest_en.bin` (of een andere taalversie) en klik op "Upload".
Wacht tot het proces klaar is. Nu kunnen we de sensor in elkaar zetten.
<br>
Een grote dank gaat uit naar [Piotr, uit Polen](https://dropbox.inf.re), voor zijn hulp! 🙋♂️

---
### Firmware Flasher Teensy
In [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Firmware) zijn twee soorten firmware te vinden:
* .ino
* .hex

##### Teensy Loader

Er bestaat ook een opdrachtregelversie.

##### Teensyduino
Je kan het .ino bestand flashen in de Teensy boards met de Arduino IDE extensie [Teensyduino](https://www.pjrc.com/teensy/teensyduino.html).
Indien nodig, kunt u de firmware rechtstreeks in de Arduino IDE wijzigen.
