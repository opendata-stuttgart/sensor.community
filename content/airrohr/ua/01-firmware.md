---
title: Драйвер та прошивка
---

Ми вже підготували прошивку. Вам потрібно лише встановити драйвери та прошити ваш NodeMCU (ESP8266).

Для спілкування з вашим NodeMCU (ESP8266) вам потрібні драйвери usb2serial для вашої операційної системи.

Набір мікросхем для NocdeMCUs v3 зазвичай становить CH341, просто перевірте задню частину вашого NodeMCU (ESP8266), щоб знайти якусь технічну інформацію.

Виберіть посилання, яке відповідає операційній системі вашого комп’ютера.

### Windows
##### Drivers for NodeMCU (ESP8266) V2 (CP2102) for Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 should be able to automatically download these
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-bit version - **not** supporting 64-bit version OS

##### Driver for NodeMCU (ESP8266) V3 (CH341) for Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 should be able to automatically download these

##### Extract the downloaded file for Windows:
* for NodeMCU (ESP8266) V2: Open the folder CP210x and double click on the application CP210xVCPInstaller_x64 (or x86)
* for NodeMCU (ESP8266) V3: open the folder CH341SER and double click on the application SETUP.

---

### MacOS

#####  MacOS Drivers
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html) 

#####  Extract the downloaded file for MacOS.
* for V2: Unzip the folder CP210x and double click on the application CP210xVCPInstaller_x64 (or x86)
* for V3: Unzip the folder CH341SER and double click on the application SETUP.
* Restart your Mac

---

### Linux
No drivers need to be installed. Chip should be supported directly (verifiable with dmesg)

---
### Firmware Flasher 
Support for multiple Operating Systems: Windows, MacOS and Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Source Code](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)

Connect NodeMCU to your computer with a short micro-USB cable (choose one shorter than 1 Meter, otherwise the installation may fail). Select `latest_en.bin` (or another language version) and click “Upload”.
Wait until the process is done. Now we can assemble the sensor.

#### Linux: Set permissions as executable
After the download you may have to set the permission to executable. This can be done with the command: `chmod o+x <download filename>` 
<br>
A big thanks goes to [Piotr, from Poland](https://dropbox.inf.re/), for his help! 🙋‍♂️ 