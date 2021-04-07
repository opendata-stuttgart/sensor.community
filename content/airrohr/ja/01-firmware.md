---
title: Driver & firmware
---

ファームウェアはすでに用意されています。あなたは、ドライバをインストールして、NodeMCU(ESP8266)をフラッシュするだけです。

NodeMCU(ESP8266)と通信するためには、あなたのOSに対応したusb2serialドライバが必要です。

NocdeMCU v3のチップセットは通常CH341で、NodeMCU (ESP8266)の背面に技術情報が記載されています。

お使いのコンピュータのOSに対応するリンクを選択してください。

### Windows

##### Windows版NodeMCU (ESP8266) V2 (CP2102)のドライバです。
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 では自動的にダウンロードできるはずです。
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32ビット版 - **64ビット版OSには対応していません。

##### Windows版 NodeMCU (ESP8266) V3 (CH341)用ドライバ
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 では自動的にダウンロードできるはずです。

##### ダウンロードしたファイルを解凍する for Windows
NodeMCU (ESP8266) V2用 *。フォルダCP210xを開き、アプリケーションCP210xVCPInstaller_x64(またはx86)をダブルクリックしてください。
* for NodeMCU (ESP8266) V3: CH341SERフォルダを開き、アプリケーションSETUPをダブルクリックしてください。

---

### MacOS

##### MacOS ドライバ
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### MacOS用にダウンロードしたファイルを解凍する
* V2用です。V2の場合：フォルダCP210xを解凍し、アプリケーションCP210xVCPInstaller_x64(またはx86)をダブルクリックしてください。
* V3 の場合：CH341SER フォルダを解凍して、アプリケーション SETUP をダブルクリックしてください。
* Macを再起動してください。

---

### Linux
ドライバをインストールする必要はありません。チップが直接サポートされている必要があります（dmesgで確認可能）。

---
### Firmware Flasher
複数のオペレーティングシステムに対応しています。Windows、MacOS、Linux に対応しています。

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/) をご利用ください。
* [ソースコード](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

NodeMCUとコンピュータを短いマイクロUSBケーブルで接続します（1メートル以上の短いケーブルを選ぶとインストールに失敗することがあります）。「latest_en.bin」（または他の言語バージョン）を選択し、「Upload」をクリックします。
処理が完了するまで待ちます。これで、センサーを組み立てることができます。

#### Linux: Set permissions as executable
ダウンロードの後、パーミッションを実行可能に設定する必要があるかもしれません。これは、次のコマンドで行うことができます。`chmod o+x <ダウンロードファイル名>`。
<br>
ご協力いただいた[Piotr, from Poland](https://dropbox.inf.re/)さんに感謝します。🙋♂️

#### MacOS: how to run a unverified app
右クリックでアプリを何度か開き、必ず「開く」で確認してください。

Youtubeに短い動画がありますので、ご覧ください 👉 https://youtu.be/1KZiP94TYjw






