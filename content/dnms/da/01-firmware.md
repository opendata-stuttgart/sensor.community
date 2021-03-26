---
title: Driver og firmware
---

Vi har allerede forberedt firmwaren. Du skal blot installere drivere og flashe din NodeMCU (ESP8266) og dit Teensy 4.0-kort.

For at kommunikere med din ESP8266 skal du bruge usb2serial-drivere til dit operativsystem.

Chipsættet til NocdeMCU'er v3 er normalt CH341, du skal bare se på bagsiden af din NodeMCU for at finde nogle tekniske oplysninger. Vælg det link, der svarer til din computers styresystem.

#### Windows

##### drivere til model V2 (CP2102) til Windows
* [Windows 10](https://www.silabs.comdocumentspublicsoftwareCP210x_Universal_Windows_Driver.zip) - Windows 10 bør automatisk kunne downloade disse
* [Windows 788.1](https://www.silabs.comdocumentspublicsoftwareCP210x_Windows_Drivers.zip) - 32-bit version - understøtter **ikke** 64-bit version OS

##### Driver for model V3 (CH341) for Windows
* [Windows](http://www.wch.cndownloadsfile5.html) - Windows 10 bør automatisk kunne downloade disse

##### Udpak den downloadede fil til Windows:
* for V2: Åbn mappen CP210x og dobbeltklik på programmet CP210xVCPInstaller_x64 (eller x86)
* for V3: åbn mappen CH341SER og dobbeltklik på programmet SETUP.

---

#### MacOS

##### MacOS-drivere
* [NodeMCU V2](https://www.silabs.comdocumentspublicsoftwareMac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cndownloadsfile178.html)

##### Udpak den downloadede fil til MacOS.
* for V2: Udpak mappen CP210x og dobbeltklik på programmet CP210xVCPInstaller_x64 (eller x86)
* for V3: Pak mappen CH341SER ud og dobbeltklik på programmet SETUP.
* Genstart din Mac

---

#### Linux
Der skal ikke installeres nogen drivere. Chip bør understøttes direkte (kan kontrolleres med dmesg)

---
#### Firmware-flasher NodeMCU
Understøttelse af flere operativsystemer: Windows, MacOS og Linux.

* [airRohr Flashing Tool] (http://firmware.sensor.communityairrohrflashing-tool)
* [Source Code] (https://github.comopendata-stuttgartairrohr-firmware-flasher)

Tilslut NodeMCU til din computer med et kort mikro-USB-kabel (vælg et kortere end 1 meter, ellers kan installationen mislykkes). Vælg `latest_en.bin` (eller en anden sprogversion), og klik på "Upload".
Vent, indtil processen er afsluttet. Nu kan vi montere sensoren.
<br>
En stor tak til [Piotr, fra Polen](https://dropbox.inf.re), for hans hjælp! 🙋♂️

---
#### Firmware Flasher Teensy
I [Helmut Bitters Github](https://github.comhbitterDNMStreemasterFirmware) kan du finde to slags firmware:
* .ino
* .hex

##### Teensy Loader
Du kan flashe .hex-filen i Teensy-kortene med den selvstændige GUI-software [Teensy Loader] (https://www.pjrc.comteensyloader.html) til Windows, Mac og Linux.
Der findes også en version til kommandolinjen.

##### Teensyduino
Du kan flashe .ino-filen i Teensy-boardet med Arduino IDE-udvidelsen [Teensyduino] (https://www.pjrc.comteensyteensyduino.html).
Hvis det er nødvendigt, kan du ændre firmwaren direkte i Arduino IDE.
