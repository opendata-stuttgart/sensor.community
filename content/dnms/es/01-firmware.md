---
title: Driver & firmware
---

Ya hemos preparado el firmware. Sólo tienes que instalar los drivers y flashear tus placas NodeMCU (ESP8266) y Teensy 4.0. 

Para comunicarte con tu ESP8266 necesitas los drivers usb2serial para tu sistema operativo. 

El chipset para NocdeMCUs v3 es usualmente CH341, solo revisa la parte de atrás de tu NodeMCU para encontrar alguna información técnica. Elige el enlace que corresponda al sistema operativo de tu ordenador.

### Windows

##### Controladores para el modelo V2 (CP2102) para Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 debería ser capaz de descargar automáticamente estos
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - versión de 32-bit - **no** soportando la versión de 64-bit del sistema operativo

##### Controlador para el modelo V3 (CH341) para Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 debería ser capaz de descargar automáticamente estos

##### Extraiga el archivo descargado para Windows:
* para V2: Abra la carpeta CP210x y haga doble clic en la aplicación CP210xVCPInstaller_x64 (o x86)
* para V3: abra la carpeta CH341SER y haga doble clic en la aplicación SETUP.

---

### MacOS

##### Conductores de MacOS
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html) 

##### Extraer el archivo descargado para MacOS.
* para V2: Descomprima la carpeta CP210x y haga doble clic en la aplicación CP210xVCPInstaller_x64 (o x86)
* para V3: Descomprima la carpeta CH341SER y haga doble clic en la aplicación SETUP.
* Reinicie su Mac

---

### Linux
No es necesario instalar ningún controlador. El chip debe ser soportado directamente (verificable con dmesg)

---
### Firmware Flasher NodeMCU
Soporte para múltiples sistemas operativos: Windows, MacOS y Linux.

* [AirRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Código fuente](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)

Conecte NodeMCU a su ordenador con un cable micro USB corto (elija uno más corto que 1 metro, de lo contrario la instalación puede fallar). Seleccione "latest_en.bin" (o la versión en otro idioma) y haga clic en "Upload".
Espere hasta que el proceso haya terminado. Ahora podemos montar el sensor.
<br>
Un gran agradecimiento a [Piotr, de Polonia](https://dropbox.inf.re/), por su ayuda! 🙋♂️ 

---

### Firmware Flasher Teensy
En [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Firmware) puedes encontrar dos tipos de firmware: 
* .ino
* .hex

##### Teensy Loader
Puedes flashear el archivo .hex en los tableros de Teensy con el software GUI independiente [Teensy Loader](https://www.pjrc.com/teensy/loader.html) para Windows, Mac y Linux.
También existe una versión de línea de comandos.

##### Teensyduino
Puedes flashear el archivo .ino en los tableros de Teensy con la extensión IDE de Arduino [Teensyduino](https://www.pjrc.com/teensy/teensyduino.html).
Si es necesario, puede modificar el firmware directamente en el IDE de Arduino.