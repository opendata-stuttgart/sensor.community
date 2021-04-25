---
title: Driver & firmware
---

Já preparamos o firmware. Você só precisa instalar os drivers e atualizar suas placas NodeMCU (ESP8266) e Teensy 4.0.

Para se comunicar com o ESP8266, você precisa de drivers usb2serial para o seu sistema operacional.

O chipset para NocdeMCUs v3 é geralmente o CH341, basta verificar no verso do seu NodeMCU para encontrar algumas informações técnicas. Escolha o link que corresponde ao sistema operacional do seu computador.

### Windows

##### Drivers para modelo o V2 (CP2102) para Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - O Windows 10 deve ser capaz de baixar automaticamente.
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - versão 32-bit - **não** suporta a versão 64-bit do SO

##### Driver para modelo V3 (CH340/CH341) para Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - O Windows 10 deve ser capaz de baixar automaticamente.

##### Extraia o arquivo baixado para Windows:
* para o V2: Abra a pasta CP210x e clique duas vezes no aplicativo CP210xVCPInstaller_x64 (ou x86)
* para o V3: abra a pasta CH341SER e clique duas vezes no aplicativo SETUP.

---

### MacOS

##### Drivers para o MacOS
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html) 

#####  Extraia o arquivo baixado para MacOS.
* para o V2: Descompacte a pasta CP210x e clique duas vezes no aplicativo CP210xVCPInstaller_x64 (ou x86)
* para o V3: Descompacte a pasta CH341SER e clique duas vezes no aplicativo SETUP.
* Reinicie o seu Mac

---

### Linux
Nenhum driver precisa ser instalado. O chip deve ser suportado diretamente (verificável com dmesg)

---
### Firmware Flasher NodeMCU
Suporte para vários sistemas operacionais: Windows, MacOS e Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Código fonte](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Conecte o NodeMCU ao seu computador com um cabo micro-USB curto (escolha um menor que 1 metro, caso contrário, a instalação pode falhar). Selecione `latest_en.bin` (ou outra versão de idioma) e clique em “Upload ”.
Espere até que o processo seja concluído. Agora podemos montar o sensor.
<br>
Um grande obrigado vai para [Piotr, da Polônia](https://dropbox.inf.re/), pela sua ajuda! 🙋‍♂️ 

---
### Firmware Flasher Teensy
No [Github do Helmut Bitter](https://github.com/hbitter/DNMS/tree/master/Firmware) você pode encontrar dois tipos de firmware:
* .ino
* .hex

#####  Teensy Loader
Você pode atualizar o arquivo .hex nas placas Teensy com o software GUI independente [Teensy Loader](https://www.pjrc.com/teensy/loader.html) para Windows, Mac e Linux.
Também existe uma versão de linha de comando.

#####  Teensyduino
Você pode atualizar o arquivo .ino nas placas Teensy com a extensão IDE do Arduino [Teensyduino](https://www.pjrc.com/teensy/teensyduino.html).
Se necessário, você pode modificar o firmware diretamente no IDE do Arduino.