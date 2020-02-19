---
title: Installation du firmware
---

Ne vous inquiétez pas, vous n'avez pas à programmer !
Le firmware est déjà prêt. Vous devez seulement l'installer dans la platine NodeMCU (ESP8288). Même les débutants en informatique peuvent y arriver !

### Firmware Windows

#### Téléchargement et installation des pilotes pour Windows
Pour communiquer avec la platine ESP8266 vous avez besoin d'un pilote usb2serial. Le circuit intégré de la platine NodeMCU est normalement de type CH341 mais certain modèles plus anciens (V2) utilisent le type CP2102. Veillez à bien choisir le pilote correspondant à votre système d'exploitation (32-bit ou 64-bit).

#### Pilote pour le modèle V2 (CP2102) pour Windows
* Windows 10: https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip
* Windows 7/8/8/8/8.1: https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip (version 32-bit incompatible avec les systèmes 64-bit)

#### Pilote pour le modèle V3 (CH341) pour Windows
* Windows: http://www.wch.cn/downloads/file/5.html

#### Décompresser le fichier pour Windows:
* V2: Ouvrez le répertoire CP210x et double-cliquez sur le fichier exécutable CP210xVCPInstaller_x64.exe (système 64-bit) ou CP210xVCPInstaller_x86.exe (système 32-bit). 
* V3: Ouvrez le répertoire CH341SER et double-cliquez sur le fichier exécutable SETUP.exe.

### Download Firmware Flasher for Windows
Download Firmware Flasher Tool   
* Windows (64-bit): https://luftdaten.info/flashtool/luftdaten-tool.zip
* Source Code: https://github.com/opendata-stuttgart/airrohr-firmware-flasher

### Install Firmware for Windows
Now connect the NodeMCU to the computer with a short micro-USB cable (the cable should not be longer than 1m, otherwise the installation may fail). Select the latest version latest_en.bin (or another language version) and click “Upload”.
Wait until the process is done and done. Now we assemble the sensor.

A big thank you goes to [Piotr, from Poland](https://dropbox.inf.re/), for his help! 🙋‍♂️ 


### Firmware MacOS

#### Download and install drivers for MacOS
To communicate with the ESP8266 you need usb2serial drivers. The chipset for NocdeMCUs is usually CH341. Choose the link that corresponds to the operating system of your computer.

#### MacOS Drivers for the old V2 model (CP2102)
* MacOS: https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip (restart computer after installation)

#### MacOS Driver for model V3 (CH341)
* MacOS: http://www.wch.cn/downloads/file/178.html (restart your computer after installation)

#### Extract the downloaded file for MacOS.
* for V2: Open the folder CP210x and double click on the application CP210xVCPInstaller_x64 (or x86)
* for V3: open the folder CH341SER and double click on the application SETUP.

### Download Firmware Flasher for MacOS
Download Firmware Flasher Tool   
* MacOS: https://luftdaten.info/flashtool/luftdaten-tool.dmg
* Source Code: https://github.com/opendata-stuttgart/airrohr-firmware-flasher

### Install Firmware for MacOS
Now connect the NodeMCU to the computer with a short micro-USB cable (the cable should not be longer than 1m, otherwise the installation may fail). Select the latest version latest_en.bin (or another language version) and click “Upload”.
Wait until the process is done and done. Now we assemble the sensor.

A big thank you goes to [Piotr, from Poland](https://dropbox.inf.re/), for his help! 🙋‍♂️ 


### Firmware Linux

#### Download and install drivers for Linux 
To communicate with the ESP8266 you need usb2serial drivers. The chipset for NocdeMCUs is usually CH341. Choose the link that corresponds to the operating system of your computer.

#### Drivers for the old V2 model (CP2102) & V3 (CH341)
No drivers need to be installed. Chip should be supported directly (verifiable with dmesg)

#### Driver for model V3 (CH341)
* MacOS: http://www.wch.cn/downloads/file/178.html (restart your computer after installation)

#### Extract the downloaded file for Linux:
Download Firmware Flasher Tool   
* Linux (64-bit): https://luftdaten.info/flashtool/luftdaten-tool.linux-x64
* Source Code: https://github.com/opendata-stuttgart/airrohr-firmware-flasher

### Download Firmware Flasher for Linux
Download Firmware Flasher Tool   
* Linux (64-bit): https://luftdaten.info/flashtool/luftdaten-tool.linux-x64
* Source Code: https://github.com/opendata-stuttgart/airrohr-firmware-flasher

### Install Firmware for Linux 
Now connect the NodeMCU to the computer with a short micro-USB cable (the cable should not be longer than 1m, otherwise the installation may fail). Select the latest version latest_en.bin (or another language version) and click “Upload”.
Wait until the process is done and done. Now we assemble the sensor.

Un grand merci à [Piotr, from Poland](https://dropbox.inf.re/) pour son aide ! 🙋‍♂️ 

