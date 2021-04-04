---
title: Driver & firmware
---

ファームウェアはすでに用意されています。あなたは、ドライバをインストールして、NodeMCU（ESP8266）をフラッシュするだけです。

NodeMCU（ESP8266）と通信するためには、OS用のusb2serialドライバが必要です。

NocdeMCU v3のチップセットは通常CH341で、NodeMCU（ESP8266）の背面に技術情報が記載されていますのでご確認ください。

お使いのパソコンのOSに対応するリンクを選択してください。

### Windows

##### Windows版NodeMCU (ESP8266) V2 (CP2102)用ドライバ
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10では、これらを自動的にダウンロードできるはずです。
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32 ビット版 - **64 ビット版には対応していません OS

##### Windows版NodeMCU (ESP8266) V3 (CH341)用ドライバ
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10では、これらを自動的にダウンロードできるはずです。

##### ダウンロードしたWindows用のファイルを解凍します。
* for NodeMCU (ESP8266) V2: CP210xフォルダを開き、アプリケーションCP210xVCPInstaller_x64（またはx86）をダブルクリックしてください。
* for NodeMCU (ESP8266) V3: CH341SERフォルダを開き、アプリケーションSETUPをダブルクリックしてください。

---

### MacOS

##### MacOS用ドライバー
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### ダウンロードしたMacOS用のファイルを解凍します。
* V2の場合。フォルダCP210xを解凍し、アプリケーションCP210xVCPInstaller_x64（またはx86）をダブルクリックしてください。
* V3の場合：CH341SERフォルダを解凍し、アプリケーションのSETUPをダブルクリックします。
* Macの再起動

---

### Linux
ドライバをインストールする必要はありません。チップが直接サポートされている必要があります（dmesgで確認可能）。

---
### Firmware Flasher
複数のオペレーティング・システムに対応。Windows、MacOS、Linuxに対応しています。

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [ソースコード](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

NodeMCUとコンピュータを短いマイクロUSBケーブルで接続します（1メートル以上の短いケーブルを選ぶと、インストールに失敗することがあります）。「latest_en.bin」（または他の言語バージョン）を選択し、「アップロード」をクリックします。
処理が完了するまで待ちます。これで、センサーを組み立てることができます。

#### Linux: Set permissions as executable
ダウンロードした後に、パーミッションを実行可能に設定する必要があります。これは、以下のコマンドで行うことができます。chmod o+x &lt;ダウンロードファイル名&gt;`。
<br>
ポーランド出身のピョートルさん】(https://dropbox.inf.re/)に大感謝です! 🙋♂️

#### MacOS: how to run a unverified app
右クリックしてアプリケーションを何度か開き、必ず「開く」で確認してください。

こちらはYoutubeのショートビデオです👉 https://youtu.be/1KZiP94TYjw




