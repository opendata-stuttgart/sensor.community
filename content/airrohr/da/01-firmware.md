---
title: Driver & firmware
---

Vi har allerede forberedt firmwaren. Du skal kun installere drivere og flashe din NodeMCU (ESP8266).

For at kommunikere med din NodeMCU (ESP8266) har du brug for usb2serial-drivere til dit operativsystem.

Chipsættet til NocdeMCU'er v3 er normalt CH341, du skal blot tjekke bagsiden af din NodeMCU (ESP8266) for at finde nogle tekniske oplysninger.

Vælg det link, der svarer til operativsystemet på din computer.

### Windows

#### drivere til NodeMCU (ESP8266) V2 (CP2102) til Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 skulle automatisk kunne downloade disse
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-bit version - **understøtter **ikke** 64-bit version OS

#### Driver til NodeMCU (ESP8266) V3 (CH340/CH341) til Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 skulle automatisk kunne downloade disse

#### Udpak den downloadede fil til Windows
* til NodeMCU (ESP8266) V2: Åbn mappen CP210x og dobbeltklik på programmet CP210xVCPInstaller_x64 (eller x86)
* for NodeMCU (ESP8266) V3: Åbn mappen CH341SER og dobbeltklik på programmet SETUP.

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
#### Firmware-flasher
Understøttelse af flere operativsystemer: Windows, MacOS og Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Source Code](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Tilslut NodeMCU til computeren med et kort mikro-USB-kabel (vælg et kortere end 1 meter, ellers kan installationen mislykkes). Vælg `latest_en.bin` (eller en anden sprogversion), og klik på "Upload".
Vent, indtil processen er afsluttet. Nu kan vi samle sensoren.

#### Linux: Indstil tilladelser som eksekverbar
Efter downloadet skal du muligvis indstille tilladelsen til eksekverbar. Dette kan gøres med kommandoen: Dette kan gøres ved at bruge følgende kommando: `chmod o+x <download filnavn>`.
<br>
En stor tak går til [Piotr, fra Polen](https://dropbox.inf.re/), for hans hjælp! 🙋♂️

#### MacOS: hvordan man kører en ubekræftet app
Højreklik og åbn programmet flere gange og bekræft altid med "Open" (Åbn).

Her er en kort video på Youtube 👉 https://youtu.be/1KZiP94TYjw




