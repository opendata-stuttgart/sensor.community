---
title: Pilotes & micrologiciel
---

Nous avons déjà programmé les micrologiciels. Vous devez seulement installer des pilotes sur votre ordinateur et les charger dans les microcontrôleurs NodeMCU (ESP8266) et Teensy 4.0. 

Pour communiquer avec l'ESP8266, il vous faut les pilotes usb2serial compatibles avec votre système d'exploitation.

La puce présente sur le NodeMCU V3 est normalement de type CH341. Regardez au verso de la platine pour trouver la référence.

Choisissez le lien correspondsant à votre ordinateur.

### Windows

##### Pilotes Windows pour le modèle V2 (CP2102)
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 devrait pouvoir charger automatiquement ce pilote.
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - Version 32-bit - Incompatible avec la version 64-bit du système d'exploitation.

##### Pilotes Windows pour le modèle V3 (CH341)
* [Windows](http://www.wch.cn/downloads/file/5.html) -  Windows 10 devrait pouvoir charger automatiquement ce pilote.

##### Installer le fichier téléchargé pour Windows :
* V2 : Ouvrez le dossier CP210x et double-cliquez sur le fichier exécutable CP210xVCPInstaller_x64 (or x86).
* V3 : Ouvrez le dossier CH341SER et double-cliquez sur le fichier exécutable SETUP.

---

### MacOS

##### Pilotes MacOS
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html) 

##### Décompresser et installer le fichier téléchargé pour MacOS. 
* V2 : Décompressez le dossier CP210x et double-cliquez sur le fichier exécutable CP210xVCPInstaller_x64 (or x86)
* V3 : Décompressez le dossier CH341SER et double-cliquez sur le fichier exécutable SETUP.
* Redémarrez votre Mac

---

### Linux
Aucune installation requise. La platine devrait être immédiatement reconnue (vérifiable avec dmesg)

---
### Firmware Flasher NodeMCU
Compatible avec les systèmes d'exploitation suivants : Windows, MacOS and Linux.
* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Source Code](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Connectez la platine NodeMCU à votre ordianteur avec un câble USB court (câble charge + transfert de données, moins de 1 mètre, sinon l'installation peut échouer). Sélectionnez `latest_fr.bin` (ou un autre langue) ét cliquez sur "Téléverser". Attendez la fin du chargement. Vous pouvez maintenant commencer le montage.
<br>
Un grand merci à [Piotr, from Poland](https://dropbox.inf.re/), de Pologne pour son aide! 🙋‍♂️ 

---
### Firmware Flasher Teensy
Dans le [GitHub de Helmut Bitter](https://github.com/hbitter/DNMS/tree/master/Firmware) vous pouvez trouver deux types de firmware : 
* .ino
* .hex

#####  Teensy Loader
Vous pouvez flasher le fichier .hex dans le microconrôleur Teensy avec le logiciel [Teensy Loader](https://www.pjrc.com/teensy/loader.html) pour Windows, Mac et Linux.
Une version en ligne de commande est également disponible.

#####  Teensyduino
Vous pouvez flasher le fichier .ino dans le microconrôleur Teensy avec le logiciel Arduino IDE disposant de l'extension [Teensyduino](https://www.pjrc.com/teensy/teensyduino.html).
Si besoin, vous pouvez modifier le firmware directement dans l'IDE Arduino.