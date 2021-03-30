---
title: Driver og firmware
---

Vi har allerede forberedt firmwaren. Du skal blot installere drivere og flashe din NodeMCU (ESP8266).

For at kommunikere med din NodeMCU (ESP8266) har du brug for usb2serial-drivere til dit operativsystem.

Chipsættet til NocdeMCU'er v3 er normalt CH341, du skal bare se på bagsiden af din NodeMCU (ESP8266) for at finde nogle tekniske oplysninger.

Vælg det link, der svarer til din computers styresystem.

#### Windows

##### Drivere til NodeMCU (ESP8266) V2 (CP2102) til Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 bør automatisk kunne downloade disse
* [Windows 788.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-bit version - understøtter **ikke** 64-bit version OS

##### Driver til NodeMCU (ESP8266) V3 (CH341) til Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 bør automatisk kunne downloade disse

##### Udpak den downloadede fil til Windows:
* til NodeMCU (ESP8266) V2: Åbn mappen CP210x og dobbeltklik på programmet CP210xVCPInstaller_x64 (eller x86)
* for NodeMCU (ESP8266) V3: åbn mappen CH341SER og dobbeltklik på programmet SETUP.

---

#### MacOS

##### MacOS-drivere
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### Udpak den downloadede fil til MacOS.
* for V2: Udpak mappen CP210x og dobbeltklik på programmet CP210xVCPInstaller_x64 (eller x86)
* for V3: Pak mappen CH341SER ud og dobbeltklik på programmet SETUP.
* Genstart din Mac

---

#### Linux
Der skal ikke installeres nogen drivere. Chip bør understøttes direkte (kan kontrolleres med dmesg)

---
#### Firmware-flasher
Understøttelse af flere operativsystemer: Windows, MacOS og Linux.

* [airRohr Flashing Tool] (http://firmware.sensor.community/airrohr/flashing-tool/)
* [Source Code] (https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Tilslut NodeMCU til din computer med et kort mikro-USB-kabel (vælg et kortere end 1 meter, ellers kan installationen mislykkes). Vælg `latest_en.bin` (eller en anden sprogversion), og klik på "Upload".
Vent, indtil processen er afsluttet. Nu kan vi montere sensoren.

#### Linux: Indstil tilladelser som eksekverbar
Efter downloadet skal du muligvis indstille tilladelsen til at være eksekverbar. Dette kan gøres med kommandoen: Dette kan gøres ved hjælp af følgende kommando: `chmod o+x <download filnavn>`.
<br>
En stor tak til [Piotr, fra Polen](https://dropbox.inf.re), for hans hjælp! 🙋♂️

#### MacOS: Sådan kører du en ubekræftet app
Højreklik og åbn programmet flere gange, og bekræft altid med "Open".

Her er en kort video på Youtube 👉 https://youtu.be1KZiP94TYjw




