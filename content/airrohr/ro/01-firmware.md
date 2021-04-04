---
title: Driver și firmware
---

Am pregătit deja firmware-ul. Nu trebuie decât să instalați driverele și să flashati NodeMCU (ESP8266).

Pentru a comunica cu NodeMCU (ESP8266) aveți nevoie de driverele usb2serial pentru sistemul dvs. de operare.

Chipset-ul pentru NocdeMCU v3 este de obicei CH341, verificați partea din spate a NodeMCU (ESP8266) pentru a găsi informații tehnice.

Alegeți legătura care corespunde sistemului de operare al computerului dumneavoastră.

### Windows

##### Drivere pentru NodeMCU (ESP8266) V2 (CP2102) pentru Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 ar trebui să fie capabil să descarce automat acestea
* [Windows 788.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - versiune pe 32 de biți - **nu** suportă versiunea pe 64 de biți OS

##### Driver pentru NodeMCU (ESP8266) V3 (CH341) pentru Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 ar trebui să fie capabil să le descarce automat.

##### Extrageți fișierul descărcat pentru Windows:
* pentru NodeMCU (ESP8266) V2: Deschideți folderul CP210x și faceți dublu clic pe aplicația CP210xVCPInstaller_x64 (sau x86)
* pentru NodeMCU (ESP8266) V3: deschideți folderul CH341SER și faceți dublu clic pe aplicația SETUP.

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
### Firmware Flasher
Suport pentru mai multe sisteme de operare: Windows, MacOS și Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Cod sursă](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Conectați NodeMCU la computerul dumneavoastră cu un cablu micro-USB scurt (alegeți unul mai scurt de 1 metru, altfel instalarea poate eșua). Selectați `latest_en.bin` (sau o altă versiune lingvistică) și faceți clic pe "Upload".
Așteptați până când procesul se termină. Acum putem asambla senzorul.

#### Linux: Setați permisiunile ca executabil
După descărcare, este posibil să trebuiască să setați permisiunea la executabil. Acest lucru se poate face cu ajutorul comenzii: `chmod o+x <descărcare nume fișier>``.
<br>
Îi mulțumim mult lui [Piotr, din Polonia](https://dropbox.inf.re), pentru ajutor! 🙋♂️

#### MacOS: cum să rulați o aplicație neverificată
Faceți clic dreapta și deschideți aplicația de mai multe ori și confirmați întotdeauna cu "Open".

Iată un scurt video pe Youtube 👉 https://youtu.be1KZiP94TYjw




