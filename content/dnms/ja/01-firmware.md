---
title: Driver & firmware
---

ファームウェアはすでに用意されています。あなたは、ドライバをインストールして、NodeMCU（ESP8266）とTeensy 4.0ボードをフラッシュするだけです。

ESP8266と通信するためには、OS用のusb2serialドライバが必要です。

NocdeMCU v3のチップセットは通常CH341で、NodeMCUの背面に技術情報が記載されています。お使いのコンピュータのOSに対応したリンクを選択してください。

### Windows

##### Drivers for model V2 (CP2102) for Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10では、これらを自動的にダウンロードできるはずです。
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32 ビット版 - **64 ビット版 OS には対応していません。

##### モデルV3（CH341）用ドライバー（Windows版
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 は自動的にこれらをダウンロードできるはずです。

##### Windows用にダウンロードしたファイルを解凍します。
* V2用です。CP210x」フォルダを開き、アプリケーション「CP210xVCPInstaller_x64（またはx86）」をダブルクリックします。
* V3の場合：CH341SERフォルダを開き、アプリケーションSETUPをダブルクリックしてください。

---

### MacOS

##### MacOS ドライバ
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### MacOS用にダウンロードしたファイルを解凍する
* V2用です。V2の場合：フォルダCP210xを解凍し、アプリケーションCP210xVCPInstaller_x64(またはx86)をダブルクリックしてください。
* V3 の場合：CH341SER フォルダを解凍して、アプリケーション SETUP をダブルクリックしてください。
* Macを再起動してください。

---

### Linux
ドライバをインストールする必要はありません。チップが直接サポートされている必要があります（dmesgで確認可能）。

---
### ファームウェア フラッシャー NodeMCU
複数のOSをサポートしています。Windows, MacOS, Linuxに対応しています。

* airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [ソースコード](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

NodeMCUとコンピュータを短いマイクロUSBケーブルで接続する（1メートルより短いものを選ぶと、インストールに失敗する可能性があります）。「latest_en.bin」（または他の言語バージョン）を選択し、「Upload」をクリックします。
処理が完了するまで待ちます。これで、センサーを組み立てることができました。
<br>。
ご協力いただいた[Piotr, from Poland](https://dropbox.inf.re/)さんに感謝します。🙋♂️

---
<br> ファームウェア Flasher Teensy
Helmut Bitter氏のGithub](https://github.com/hbitter/DNMS/tree/master/Firmware)には、2種類のファームウェアがあります。
* .ino
* .hex

##### Teensy Loader
Windows、Mac、Linux用のスタンドアロンGUIソフトウェア[Teensy Loader](https://www.pjrc.com/teensy/loader.html)を使って、Teensyボードの.hexファイルをフラッシュすることができます。
コマンドライン版もあります。

##### Teensyduino
Arduino IDEの拡張機能[Teensyduino](https://www.pjrc.com/teensy/teensyduino.html)を使って、Teensyボードの.inoファイルをフラッシュすることができます。
必要に応じて、Arduino IDEで直接ファームウェアを変更することができます。