---
title: ドライバとファームウェア
---

ファームウェアはすでに用意されています。ドライバーをインストールして、NodeMCU（ESP8266）とTeensy 4.0ボードをフラッシュするだけです。

ESP8266と通信するためには、お使いのOSに対応したusb2serialドライバが必要です。

NocdeMCU v3のチップセットは通常CH341で、NodeMCUの背面に技術情報が記載されています。あなたのコンピュータのオペレーティングシステムに対応するリンクを選択してください。

### Windows

##### Windows 用モデルV2（CP2102）のドライバーです。
* [Windows 10](https://www.silabs.comdocumentspublicsoftwareCP210x_Universal_Windows_Driver.zip) - Windows 10では、これらを自動的にダウンロードできるはずです。
* [Windows 788.1](https://www.silabs.comdocumentspublicsoftwareCP210x_Windows_Drivers.zip) - 32 ビット版 - **64 ビット版には対応していません OS

##### Windows 版モデルV3（CH341）用ドライバー
* [Windows](http://www.wch.cndownloadsfile5.html) - Windows 10では、これらを自動的にダウンロードできるはずです。

##### ダウンロードしたWindows用のファイルを解凍します。
* V2の場合。CP210x」フォルダを開き、アプリケーション「CP210xVCPInstaller_x64（またはx86）」をダブルクリックします。
* V3の場合：CH341SERフォルダを開き、アプリケーションのSETUPをダブルクリックします。

---

### MacOS

##### MacOS用ドライバー
* [NodeMCU V2](https://www.silabs.comdocumentspublicsoftwareMac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cndownloadsfile178.html)

##### ダウンロードしたMacOS用のファイルを解凍します。
* V2の場合。フォルダCP210xを解凍し、アプリケーションCP210xVCPInstaller_x64（またはx86）をダブルクリックしてください。
* V3の場合：CH341SERフォルダを解凍し、アプリケーションのSETUPをダブルクリックします。
* Macの再起動

---

### Linux
ドライバをインストールする必要はありません。チップが直接サポートされている必要があります（dmesgで確認可能）。

---
### ファームウェア フラッシャー NodeMCU
複数のオペレーティング・システムに対応。Windows、MacOS、Linuxに対応しています。

* [airRohr Flashing Tool](http://firmware.sensor.communityairrohrflashing-tool)
* [ソースコード](https://github.comopendata-stuttgartairrohr-firmware-flasher)

NodeMCUとコンピュータを短いマイクロUSBケーブルで接続します（1メートル以上の短いケーブルを選ぶと、インストールに失敗することがあります）。「latest_en.bin」（または他の言語バージョン）を選択し、「アップロード」をクリックします。
処理が終了するまで待ちます。これで、センサーを組み立てることができます。
<br>
ポーランド出身のピョートルさん】(https://dropbox.inf.re)に大感謝です! 🙋♂️

---
### ファームウェア フラッシャー Teensy
Helmut Bitter's Github](https://github.comhbitterDNMStreemasterFirmware)には、2種類のファームウェアが掲載されています。
* .ino
* .hex

##### Teensy Loader
Windows、Mac、Linuxに対応したスタンドアローンのGUIソフト[Teensy Loader](https://www.pjrc.comteensyloader.html)を使って、.hexファイルをTeensyボードにフラッシュすることができます。
コマンドライン版もあります。

##### Teensyduino
この.inoファイルは、Arduino IDEの拡張子が[Teensyduino](https://www.pjrc.comteensyteensyduino.html)のTeensyボードでフラッシュできます。
必要に応じて、Arduino IDEで直接ファームウェアを変更することができます。
