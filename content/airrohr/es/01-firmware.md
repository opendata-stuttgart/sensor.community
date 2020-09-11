---
title: Driver & firmware
---

Ya hemos preparado el firmware. Tú solo tienes que instalar los drivers y conectar tu NodeMCU(ESP8266). 

Para comunicarte con el NodeMCU (ESP8266) necesitas controladores para tu sistema operativo.

La placa base para NocdeMCUs v3 es normalmente CH341, comprueba la parte trasera de tu NodeMCU (ESP8266) para encontrar la información técnica. 

Elige la url correspondiente al sistema operativo de tu ordenador.

### Windows

##### Drivers para NodeMCU (ESP8266) V2 (CP2102) en Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 - Windows 10 debería descargarlo automáticamente
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-bit version - **no** soporta la versión 64-bit OS

##### Driver for NodeMCU (ESP8266) V3 (CH341) for Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 debería descargarlo automáticamente

##### Extraer el archivo descargado para Windows:
* Para el NodeMCU (ESP8266) V2: Abre la carpera CP210x y haz doble click en el archivo CP210xVCPInstaller_x64 (or x86)
* Para el NodeMCU (ESP8266) V3: Abre la carpeta CH341SER y haz doble click en el archivo SETUP.

---

### MacOS

#####  MacOS Drivers
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html) 

##### Extrae el archivo descargado para MacOS.
* Para V2: descomprime la carpeta CP210x y haz doble click en el archivo CP210xVCPInstaller_x64 (o x86)
* for V3: descomprime la carpeta folder CH341SER y haz doble click en el archivo SETUP.
* Reinicia tu Mac

---

### Linux
No es necesario instalar los drivers. El chip debe estar instalado (puedes verificarlo con dmesg)

---
### Firmware Flasher 
Soporte para múltiples sistemas operativos: Windows, MacOS and Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Source Code](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)

Conecta el NodeMCU a tu ordenador con un cable micro-USB  (elige un cable que no sea más largo de 1 metro, si no, la instalación podría fallar). Selecciona latest_en.bin (o el lenguaje que prefieras) y haz click en “Upload”.
Espera hasta que finalice el proceso. Ahora puedes conectar el sensor.
<br>
¡Muchas gracias a [Piotr, from Poland](https://dropbox.inf.re/), por su ayuda! 🙋‍♂️ 
