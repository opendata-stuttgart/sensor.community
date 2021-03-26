---
title: 驱动程序和固件
---

我们已经准备好了固件，您只需要安装驱动程序和闪现您的NodeMCU（ESP8266）。您只需要安装驱动程序并更新您的NodeMCU（ESP8266）。

要与您的NodeMCU（ESP8266）进行通信，您需要为您的操作系统提供usb2serial驱动程序。

NocdeMCU v3的芯片组通常是CH341，只要查看你的NodeMCU（ESP8266）的背面就可以找到一些技术信息。

选择与您的计算机操作系统相对应的链接。

### Windows

##### NodeMCU (ESP8266) V2 (CP2102) for Windows 的驱动程序。
* [Windows 10](https://www.silabs.comdocumentspublicsoftwareCP210x_Universal_Windows_Driver.zip)----Windows 10应能自动下载这些内容。
* [Windows 788.1](https://www.silabs.comdocumentspublicsoftwareCP210x_Windows_Drivers.zip) -- -- 32位版本 -- -- **不支持64位版本的操作系统。

##### NodeMCU (ESP8266) V3 (CH341) for Windows 的驱动程序。
* [Windows](http://www.wch.cndownloadsfile5.html)----Windows 10应能自动下载这些内容。

##### 解压下载的Windows文件。
NodeMCU (ESP8266) V2的*。打开CP210x文件夹，双击CP210xVCPInstaller_x64(或x86)应用程序。
* 对于NodeMCU (ESP8266) V3：打开CH341SER文件夹，双击应用程序SETUP。

---

### MacOS

##### MacOS 驱动程序
* [NodeMCU V2](https://www.silabs.comdocumentspublicsoftwareMac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cndownloadsfile178.html)

##### 解压下载的MacOS文件。
V2的*。解压CP210x文件夹，双击CP210xVCPInstaller_x64(或x86)应用程序。
* 对于V3：解压CH341SER文件夹，双击应用程序SETUP。
* 重新启动你的Mac

---

### Linux
不需要安装驱动。芯片应直接支持（可通过dmesg验证）。

---
#### 固件闪现器
支持多种操作系统。Windows、MacOS和Linux。

* [airRohr闪光工具](http://firmware.sensor.communityairrohrflashing-tool)
* [源代码](https://github.comopendata-stuttgartairrohr-firmware-flasher)

用短的 micro-USB 纜線將 NodeMCU 連接到您的電腦 (選擇短於 1 米的纜線，否則可能會安裝失敗)。選擇`latest_en.bin`(或其他語言版本)，並按下「上傳」。
等到这个过程完成后。现在我们可以组装传感器了。

#### Linux。设置权限为可执行文件
下载后，你可能需要将权限设置为可执行。这可以通过命令来完成。`chmod o+x &lt;下载文件名&gt;`。
&lt;br&gt;
非常感谢[波兰的Piotr](https://dropbox.inf.re)的帮助。🙋♂️

#### MacOS：如何运行一个未经验证的应用？
右键单击并多次打开应用程序，并始终以 "打开 "确认。

下面是Youtube上的一个简短视频👉 https://youtu.be1KZiP94TYjw。




