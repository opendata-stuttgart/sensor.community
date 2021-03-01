---
title: Driver & firmware
---

Já preparamos o firmware. Você só precisa instalar os drivers e instalar em seu NodeMCU (ESP8266).

Para se comunicar com seu NodeMCU (ESP8266), você precisa de drivers USB2serial para seu sistema operacional.

O chipset para NocdeMCUs v3 é geralmente CH341, basta verificar a parte de trás do seu NodeMCU (ESP8266) para encontrar algumas informações técnicas.

Escolha o link que corresponde ao sistema operacional do seu computador.

### Windows

##### Drivers para NodeMCU (ESP8266) V2 (CP2102) para Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 deve baixar automaticamente
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - versão 32-bit  - **não** suporta a versão do SO 64-bit 

##### Driver para NodeMCU (ESP8266) V3 (CH341) para Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 deve baixar automaticamente

##### Extraia o arquivo baixado para o Windows:
* para o NodeMCU (ESP8266) V2: Abra a pasta CP210x e clique duas vezes no aplicativo CP210xVCPInstaller_x64 (ou x86)
* para o NodeMCU (ESP8266) V3: abra a pasta CH341SER e clique duas vezes no aplicativo SETUP.

---

### MacOS

#####  Drivers do MacOS 
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html) 

#####  Extraia o arquivo baixado para MacOS.
* para V2: Descompacte a pasta CP210x e clique duas vezes no aplicativo CP210xVCPInstaller_x64 (ou x86)
* para V3: Descompacte a pasta CH341SER e clique duas vezes no aplicativo SETUP.
* Reinicie o seu Mac

---

### Linux
Nenhum driver precisa ser instalado. O chip deve ser suportado diretamente (verificável com dmesg)

---
### Firmware Flasher 
Suporte para vários sistemas operacionais: Windows, MacOS e Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Código fonte](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)

Conecte o NodeMCU ao computador com um cabo micro-USB curto (escolha um cabo que seja maior que 1 metro, caso contrário, a instalação pode falhar). Selecione `latest_en.bin` (ou outra versão de idioma) e clique em “Upload”.
Espere até que o processo seja concluído. Agora podemos montar o sensor.

#### Linux: Definir permissões como executáveis
Após o download, pode ser necessário definir a permissão para executável. Isso pode ser feito com o comando: `chmod o + x <nome do arquivo baixado>`
<br>
Um grande obrigado para [Piotr, da Polônia](https://dropbox.inf.re/), por sua ajuda! 🙋‍♂️ 

#### MacOS: como executar um aplicativo não verificado
Clique com o botão direito e abra o aplicativo várias vezes e sempre confirme com "Abrir".

Aqui está um pequeno vídeo no Youtube 👉 https://youtu.be/1KZiP94TYjw




