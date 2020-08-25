---
title: Controlador y firmware
---

Ya hemos preparado el firmware. Sólo tienes que instalar los drivers y flashear tu NodeMCU (ESP8266). 

Para comunicarse con su NodeMCU (ESP8266) necesita los drivers usb2serial para su sistema operativo. 

El chipset para NocdeMCUs v3 es usualmente CH341, solo revisa la parte de atrás de tu NodeMCU (ESP8266) para encontrar alguna información técnica. 

Elija el enlace que corresponda al sistema operativo de su ordenador.

### Windows

##### Controladores para NodeMCU (ESP8266) V2 (CP2102) para Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 debería ser capaz de descargar automáticamente estos
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - versión de 32-bit - **no** soportando la versión de 64-bit del sistema operativo

##### Driver for NodeMCU (ESP8266) V3 (CH341) for Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 debería ser capaz de descargar automáticamente estos

##### Extraer el archivo descargado para Windows:
* para NodeMCU (ESP8266) V2: Abre la carpeta CP210x y haz doble clic en la aplicación CP210xVCPInstaller_x64 (o x86)
* para NodeMCU (ESP8266) V3: abra la carpeta CH341SER y haga doble clic en la aplicación SETUP.

---

### MacOS

#####  MacOS Drivers
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html) 

##### Extraer el archivo descargado para MacOS.
* para V2: Descomprime la carpeta CP210x y haz doble clic en la aplicación CP210xVCPInstaller_x64 (o x86)
* para V3: Descomprima la carpeta CH341SER y haga doble clic en la aplicación SETUP.
* Reinicie su Mac

---

### Linux
No es necesario instalar ningún controlador. El chip debe ser soportado directamente (verificable con dmesg)

---
### Firmware Flasher 
Soporte para múltiples sistemas operativos: Windows, MacOS y Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Source Code](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)

Conecte NodeMCU a su ordenador con un cable micro USB corto (elija uno más corto que 1 metro, de lo contrario la instalación puede fallar). Seleccione "latest_en.bin" (o la versión en otro idioma) y haga clic en "Upload".
Espere hasta que el proceso haya terminado. Ahora podemos montar el sensor.
<br>
Un gran agradecimiento a [Piotr, de Polonia](https://dropbox.inf.re/), por su ayuda! 🙋♂️ 
