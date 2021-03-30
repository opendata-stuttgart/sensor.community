---
title: Driver și firmware
---

Am pregătit deja firmware-ul. Nu trebuie decât să instalați driverele și să flashați plăcile NodeMCU (ESP8266) și Teensy 4.0.

Pentru a comunica cu ESP8266 aveți nevoie de drivere usb2serial pentru sistemul dvs. de operare.

Chipset-ul pentru NocdeMCU v3 este de obicei CH341, verificați partea din spate a NodeMCU pentru a găsi informații tehnice. Alegeți linkul care corespunde sistemului de operare al computerului dvs.

### Windows

##### Drivere pentru modelul V2 (CP2102) pentru Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 ar trebui să fie capabil să descarce automat acestea
* [Windows 788.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - versiune pe 32 de biți - **nu** suportă versiunea pe 64 de biți OS

##### Driver pentru modelul V3 (CH341) pentru Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 ar trebui să fie capabil să le descarce automat.

##### Extrageți fișierul descărcat pentru Windows:
* pentru V2: Deschideți folderul CP210x și faceți dublu clic pe aplicația CP210xVCPInstaller_x64 (sau x86).
* pentru V3: deschideți dosarul CH341SER și faceți dublu clic pe aplicația SETUP.

---

### MacOS

##### Drivere MacOS
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### Extrageți fișierul descărcat pentru MacOS.
* pentru V2: Descompuneți folderul CP210x și faceți dublu clic pe aplicația CP210xVCPInstaller_x64 (sau x86).
* pentru V3: Dezarhivați folderul CH341SER și faceți dublu clic pe aplicația SETUP.
* Reporniți Mac-ul

---

### Linux
Nu este necesară instalarea niciunui driver. Cipul ar trebui să fie suportat direct (verificabil cu dmesg).

---
### Firmware Flasher NodeMCU
Suport pentru mai multe sisteme de operare: Windows, MacOS și Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Cod sursă](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)

Conectați NodeMCU la computerul dumneavoastră cu un cablu micro-USB scurt (alegeți unul mai scurt de 1 metru, altfel instalarea poate eșua). Selectați `latest_en.bin` (sau o altă versiune lingvistică) și faceți clic pe "Upload".
Așteptați până când procesul se termină. Acum putem asambla senzorul.
<br>
Îi mulțumim mult lui [Piotr, din Polonia](https://dropbox.inf.re), pentru ajutor! 🙋♂️

---
### Firmware Flasher Flasher Teensy
În [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Firmware) puteți găsi două tipuri de firmware:
* .ino
* .hex

##### Teensy Loader
Puteți să introduceți fișierul .hex în plăcile Teensy cu ajutorul software-ului independent GUI [Teensy Loader](https://www.pjrc.com/teensy/loader.html) pentru Windows, Mac și Linux.
Există și o versiune în linie de comandă.

##### Teensyduino
Puteți să afișați fișierul .ino în plăcile Teensy cu extensia Arduino IDE [Teensyduino](https://www.pjrc.com/teensy/teensyduino.html).
Dacă este necesar, puteți modifica firmware-ul direct în Arduino IDE.
