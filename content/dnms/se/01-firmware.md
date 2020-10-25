---
title: Drivrutin och firmware
---

Vi har redan förberett firmware. Du behöver bara installera drivrutiner och flasha dina NodeMCU (ESP8266) och Teensy 4.0-kort.

För att kommunicera med din ESP8266 behöver du usb2serialdrivrutiner för ditt operativsystem.

Chipset för NocdeMCUs v3 är vanligtvis CH341, kolla bara på baksidan av din NodeMCU för att hitta teknisk information. Välj den länk som motsvarar datorns operativsystem.

### Windows

##### Drivrutiner för modell V2 (CP2102) för Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 bör kunna ladda ner dessa automatiskt
* [Windows 7/8 / 8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-bitarsversion - ** inte ** stödjer 64-bitars version OS

##### Drivrutin för modell V3 (CH341) för Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 bör kunna ladda ner dessa automatiskt

##### Extrahera den nedladdade filen för Windows:
* för V2: Öppna mappen CP210x och dubbelklicka på applikationen CP210xVCPInstaller_x64 (eller x86)
* för V3: öppna mappen CH341SER och dubbelklicka på applikationsinställningen.

---

### MacOS

##### MacOS-drivrutiner
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### Extrahera den nedladdade filen för MacOS.
* för V2: Packa upp mappen CP210x och dubbelklicka på applikationen CP210xVCPInstaller_x64 (eller x86)
* för V3: Packa upp mappen CH341SER och dubbelklicka på applikationsinställningen.
* Starta om din Mac
---

### Linux
Inga drivrutiner behöver installeras. Chip bör stödjas direkt (kan verifieras med dmesg)

---
### Firmware Flasher NodeMCU
Stöd för flera operativsystem: Windows, MacOS och Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Källkod](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)

Anslut NodeMCU till din dator med en kort mikro-USB-kabel (välj en kortare än 1 meter, annars kan installationen misslyckas). Välj `latest_en.bin` (eller en annan språkversion) och klicka på" Upload ".
Vänta tills processen är klar. Nu kan vi montera sensorn.
<br>
Ett stort tack till [Piotr, från Polen] (https://dropbox.inf.re/), för hans hjälp! 🙋‍♂️

---

### Firmware Flasher Teensy
I [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Firmware) kan du hitta två typer av firmware:
* .ino
* .hex

##### Teensy Loader
Du kan blinka .hex-filen i Teensy-korten med den fristående GUI-programvaran [Teensy Loader](https://www.pjrc.com/teensy/loader.html) för Windows, Mac och Linux.
En kommandoradsversion finns också.

##### Teensyduino
Du kan blinka .ino-filen i Teensy-korten med Arduino IDE-tillägget [Teensyduino] (https://www.pjrc.com/teensy/teensyduino.html).
Om det behövs kan du ändra firmware direkt i Arduino IDE.