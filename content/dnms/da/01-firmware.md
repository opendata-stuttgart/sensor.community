---
title: Driver & firmware
---

Vi har allerede forberedt firmwaren. Du skal kun installere drivere og flashe dine NodeMCU (ESP8266) og Teensy 4.0 boards.

For at kommunikere med din ESP8266 har du brug for usb2serial-drivere til dit operativsystem.

Chipsættet til NocdeMCU'er v3 er normalt CH341, du skal bare tjekke bagsiden af din NodeMCU for at finde nogle tekniske oplysninger. Vælg det link, der svarer til operativsystemet på din computer.

### Windows

#### Drivere til model V2 (CP2102) til Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 skulle automatisk kunne downloade disse
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-bit version - **understøtter **ikke** 64-bit version OS

#### Driver til model V3 (CH340/CH341) til Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 bør automatisk kunne downloade disse

#### Udpak den downloadede fil til Windows
* til V2: Åbn mappen CP210x og dobbeltklik på programmet CP210xVCPInstaller_x64 (eller x86)
* for V3: åbn mappen CH341SER og dobbeltklik på programmet SETUP.

---

### MacOS

#### MacOS-drivere
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

#### Udpak den downloadede fil til MacOS
* for V2: Udpak mappen CP210x, og dobbeltklik på programmet CP210xVCPInstaller_x64 (eller x86)
* for V3: Udpak mappen CH341SER og dobbeltklik på programmet SETUP.
* Genstart din Mac

---

### Linux
Der skal ikke installeres nogen drivere. Chip bør understøttes direkte (kan kontrolleres med dmesg)

---
#### Firmware Flasher NodeMCU
Understøttelse af flere operativsystemer: Windows, MacOS og Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Source Code](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Tilslut NodeMCU til din computer med et kort mikro-USB-kabel (vælg et kortere end 1 meter, ellers kan installationen mislykkes). Vælg `latest_en.bin` (eller en anden sprogversion), og klik på "Upload".
Vent, indtil processen er afsluttet. Nu kan vi samle sensoren.
<br>
En stor tak går til [Piotr, fra Polen](https://dropbox.inf.re/), for hans hjælp! 🙋♂️

---
### Firmware Flasher Teensy
I [Helmut Bitters Github](https://github.com/hbitter/DNMS/tree/master/Firmware) kan du finde to slags firmware:
* .ino
* .hex

#### Teensy Loader
Du kan flashe .hex-filen i Teensy-kortene med den selvstændige GUI-software [Teensy Loader](https://www.pjrc.com/teensy/loader.html) til Windows, Mac og Linux.
Der findes også en kommandolinjeversion.

#### Teensyduino
Du kan flashe .ino-filen i Teensy-kortene med Arduino IDE-udvidelsen [Teensyduino](https://www.pjrc.com/teensy/teensyduino.html).
Hvis det er nødvendigt, kan du ændre firmwaren direkte i Arduino IDE'en.