---
title: Driver & firmware
---

ファームウェアはすでに用意されています。ドライバーをインストールして、NodeMCU（ESP8266）とTeensy 4.0ボードをフラッシュするだけです。

ESP8266と通信するためには、お使いのOSに対応したusb2serialドライバが必要です。

NocdeMCU v3のチップセットは通常CH341で、NodeMCUの背面に技術情報が記載されています。あなたのコンピュータのオペレーティングシステムに対応するリンクを選択してください。

### Windows

##### Drivers for model V2 (CP2102) for Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10では、これらを自動的にダウンロードできるはずです。
* [Windows 788.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32 ビット版 - **64 ビット版には対応していません OS

##### Driver for model V3 (CH341) for Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10では、これらを自動的にダウンロードできるはずです。

##### Extract the downloaded file for Windows
* V2の場合。CP210x」フォルダを開き、アプリケーション「CP210xVCPInstaller_x64（またはx86）」をダブルクリックします。
* V3の場合：CH341SERフォルダを開き、アプリケーションのSETUPをダブルクリックします。

---

### MacOS

##### MacOS Drivers
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

#####  Extract the downloaded file for MacOS.
* V2の場合。フォルダCP210xを解凍し、アプリケーションCP210xVCPInstaller_x64（またはx86）をダブルクリックしてください。
* V3の場合：CH341SERフォルダを解凍し、アプリケーションのSETUPをダブルクリックします。
* Macの再起動

---

### Linux
ドライバをインストールする必要はありません。チップが直接サポートされている必要があります（dmesgで確認可能）。

---
### Firmware Flasher NodeMCU
複数のオペレーティング・システムに対応。Windows、MacOS、Linuxに対応しています。

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [ソースコード](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)

NodeMCUとコンピュータを短いマイクロUSBケーブルで接続します（1メートル以上の短いケーブルを選ぶと、インストールに失敗することがあります）。「latest_en.bin」（または他の言語バージョン）を選択し、「アップロード」をクリックします。
処理が終了するまで待ちます。これで、センサーを組み立てることができます。
<br>
ポーランド出身のピョートルさん】(https://dropbox.inf.re)に大感謝です! 🙋♂️

---
### Firmware Flasher Teensy
Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Firmware)には、2種類のファームウェアが掲載されています。
* .ino
* .hex

##### Teensy Loader
Windows、Mac、Linuxに対応したスタンドアローンのGUIソフト[Teensy Loader](https://www.pjrc.com/teensy/loader.html)を使って、.hexファイルをTeensyボードにフラッシュすることができます。
コマンドライン版もあります。

##### Teensyduino
この.inoファイルは、Arduino IDEの拡張子が[Teensyduino](https://www.pjrc.com/teensy/teensyduino.html)のTeensyボードでフラッシュできます。
必要に応じて、Arduino IDEで直接ファームウェアを変更することができます。
