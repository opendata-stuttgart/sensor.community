---
title: 驱动程序和固件
---

我们已经准备好了固件。您只需安装驱动程序，并更新您的NodeMCU（ESP8266）和Teensy 4.0板。

要与您的ESP8266进行通信，您需要为您的操作系统提供usb2serial驱动程序。

NocdeMCU v3的芯片组通常是CH341，查看你的NodeMCU的背面就可以找到一些技术信息。选择与你的计算机操作系统相对应的链接。

### Windows

##### 用于Windows的V2模型的驱动程序 (CP2102)
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip)----Windows 10应能自动下载这些内容。
* [Windows 788.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) -- -- 32位版本 -- -- **不支持64位版本的操作系统。

##### V3型号(CH341)的驱动程序，适用于Windows。
* [Windows](http://www.wch.cn/downloads/file/5.html)----Windows 10应能自动下载这些内容。

##### 解压下载的Windows文件。
V2的*。打开CP210x文件夹，双击CP210xVCPInstaller_x64(或x86)应用程序。
* 对于V3：打开CH341SER文件夹，双击应用程序SETUP。

---

### MacOS

##### MacOS 驱动程序
* [NodeMCU V2](https://www.silabs.comdocumentspublicsoftwareMac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### 解压下载的MacOS文件。
V2的*。解压CP210x文件夹，双击CP210xVCPInstaller_x64(或x86)应用程序。
* 对于V3：解压CH341SER文件夹，双击应用程序SETUP。
* 重新启动你的Mac

---

### Linux
不需要安装驱动。芯片应直接支持（可通过dmesg验证）。

---
### NodeMCU的Firmware Flasher。
支持多种操作系统。Windows、MacOS和Linux。

* [airRohr闪光工具](http://firmware.sensor.community/airrohr/flashing-tool/)
* [源代码](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)

用短的 micro-USB 纜線將 NodeMCU 連接到您的電腦 (選擇短於 1 米的纜線，否則可能會安裝失敗)。選擇`latest_en.bin`(或其他語言版本)，並按下「上傳」。
等到这个过程完成后。现在我们可以组装传感器了。
<br>
非常感谢[波兰的Piotr](https://dropbox.inf.re)的帮助。🙋♂️

---
### Firmware Flasher Teensy.
在[Helmut Bitter的Github](https://github.com/hbitter/DNMS/tree/master/Firmware)，你可以找到两种固件。
*.inio
* .hex

##### Teensy Loader
您可以使用独立的GUI软件[Teensy Loader](https://www.pjrc.com/teensy/loader.html)在Windows、Mac和Linux下更新Teensy板中的.hex文件。
也有一个命令行版本。

##### Teensyduino
你可以用Arduino IDE扩展名[Teensyduino](https://www.pjrc.com/teensy/teensyduino.html)在Teensy板子上闪现.inio文件。
如果需要，可以直接在Arduino IDE中修改固件。
