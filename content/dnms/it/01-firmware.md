---
title: Driver e firmware
---

Abbiamo già preparato il firmware. Devi solo installare i driver e flashare le tue schede NodeMCU (ESP8266) e Teensy 4.0.

Per comunicare con il tuo ESP8266 hai bisogno di driver usb2serial per il tuo sistema operativo.

Il chipset per i NocdeMCU v3 è solitamente CH341, basta controllare il retro del tuo NodeMCU per trovare alcune informazioni tecniche. Scegli il link che corrisponde al sistema operativo del tuo computer.

### Windows

##### Driver per il modello V2 (CP2102) per Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 dovrebbe essere in grado di scaricare automaticamente questi
* [Windows 788.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - versione a 32 bit - **non** supporta la versione a 64 bit

##### Driver per il modello V3 (CH341) per Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 dovrebbe essere in grado di scaricare automaticamente questi

##### Estrarre il file scaricato per Windows:
* per V2: Aprire la cartella CP210x e fare doppio clic sull'applicazione CP210xVCPInstaller_x64 (o x86)
* per V3: aprire la cartella CH341SER e fare doppio clic sull'applicazione SETUP.

---

### MacOS

##### Driver MacOS
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### Estrarre il file scaricato per MacOS.
* per V2: Decomprimere la cartella CP210x e fare doppio clic sull'applicazione CP210xVCPInstaller_x64 (o x86)
* per V3: decomprimere la cartella CH341SER e fare doppio clic sull'applicazione SETUP.
* Riavviare il Mac

---

### Linux
Non è necessario installare alcun driver. Il chip dovrebbe essere supportato direttamente (verificabile con dmesg)

---
### Firmware Flasher NodeMCU
Supporto per più sistemi operativi: Windows, MacOS e Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Codice sorgente](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)

Collega il NodeMCU al tuo computer con un cavo micro-USB corto (scegline uno più corto di 1 metro, altrimenti l'installazione potrebbe fallire). Seleziona `latest_it.bin` (o un'altra versione in lingua) e clicca su "Upload".
Aspettate che il processo sia finito. Ora possiamo assemblare il sensore.
<br>
Un grande ringraziamento va a [Piotr, dalla Polonia](https://dropbox.inf.re), per il suo aiuto! 🙋♂️

---
### Firmware Flasher Teensy
Nel [Github di Helmut Bitter](https://github.com/hbitter/DNMS/tree/master/Firmware) si possono trovare due tipi di firmware:
* .ino
* .hex

##### Teensy Loader
Puoi flashare il file .hex nelle schede Teensy con il software standalone GUI [Teensy Loader](https://www.pjrc.com/teensy/loader.html) per Windows, Mac e Linux.
Esiste anche una versione a linea di comando.

##### Teensyduino
Puoi flashare il file .ino nelle schede Teensy con l'estensione Arduino IDE [Teensyduino](https://www.pjrc.com/teensy/teensyduino.html).
Se necessario, potete modificare il firmware direttamente nell'IDE di Arduino.
