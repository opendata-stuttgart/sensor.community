---
title: Driver & firmware
---

We hebben de firmware al voorbereid. Je hoeft alleen maar de drivers te installeren op de computer waarmee je de firmware op je NodeMCU (ESP8266) gaat laden en de flahing tool te downloaden.

## USB Drivers
Om met de ESP8266 te communiceren heb je usb2serial drivers voor je Operating Systeem.

De seriele chip voor de NodeMCU v3 is meestal CH341, kijk op de achterkant van je NodeMCU voor de technische informatie.

Kies hieronder de link die overeenkomt met het operating systeem van je computer en jouw type NodeMCU (v2 of v3).

### Windows

##### Drivers voor NodeMCU V2 (CP2102) voor Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 zou deze automatisch moeten kunnen downloaden
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-bit versie - ondersteunt **niet** 64-bit

##### Driver voor NodeMCU V3 (CH341) voor Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 zou deze automatisch moeten kunnen downloaden

##### Uitpakken van de gedownloade file voor Windows:
* Pak de geZIPte drivers uit met behulp van de uitpak functie in de Windows Verkenner.
* voor NodeMCU (ESP8266) V2: open de folder CP210x en dubbelklik op de applicatie CP210xVCPInstaller_x64 (of x86)
* voor NodeMCU (ESP8266) V3: open de folder CH341SER en dubbelklik op de applicatie SETUP.

### MacOS

#####  MacOS Drivers
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html) 

#####  Uitpakken van de gedownloade file for MacOS.
* voor V2: Unzip de folder CP210x en dubbelklik op de applicatie CP210xVCPInstaller_x64 (or x86)
* voor V3: Unzip de folder CH341SER en dubbelklik op de applicatie SETUP.
* Herstart je Mac

### Linux
Er hoeven geen drivers te worden geinstalleerd. De chip zou direct ondersteund moeten worden (controleer met dmesg)

---
### Firmware Flasher 
De flasher ondersteunt  verschillende Operating Systemen: Windows, MacOS en Linux.

* Download hier de [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* Als je wilt, kun je hier de [broncode](https://github.com/opendata-stuttgart/airrohr-firmware-flasher) bekijken.

Verbind de NodeMCU met je computer via een korte micro-USB kabel (kies een kabel korter dan 1 meter, anders mislukt de installatie mogelijk). Kies in de Flashing Tool `latest_en.bin` (of een versie voor een andere taal) en klik op “Upload”
Wacht totdat het proces klaar is. 

**Noteer het Sensor UID** dat onderin het scherm van de Flashing Tool komt te staan. Dit heb je later nodig bij het registreren van je sensor.

Nu kunnen we de sensor in elkaar zetten.

#### Linux: Zet rechten op uitvoerbaar
Na de download moet je mogelijk de rechten nog op executable zetten. Dit kan je doen met het commando: `chmod o+x <download filename>` 
<br>
Met dank aan [Piotr, from Poland](https://dropbox.inf.re/) voor zijn hulp! 🙋‍♂️ 

