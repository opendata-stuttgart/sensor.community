---
title: トラブルシューティング
---

### トランスミッションの問題？
以下の内容をご自身のデータでブラウザに入力してください。
`https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1&amp;var-chipID=esp8266-[ID]`

ID」は、左上の入力欄でも検索できます。 [https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1](https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1)

* [https://devices.sensor.community](https://devices.sensor.community)でセンサーが登録されていて、そのセンサーが地図上に表示されているか。
    * 過去にWLANの信号レベルが弱かったのか？
        以下はサーバー側のシグナルログです： `https://api-rrd.madavi.degrafanadFk6mw1WGzwifi-signal?orgId=1&amp;var-chipID=esp8266-[ID]`.
        以下はサーバー側のシグナルログです： `https://api-rrd.madavi.degrafanadFk6mw1WGzwifi-signal?orgId=1&amp;var-chipID=esp8266-[ID]`.

### USBケーブルの問題？
* 電源の確認 USBケーブル
* 再起動（USBプラグを抜くなどして、電源を切る
* Is the WLAN Config OK (センサーは設定されたWLANに接続している) If not:
    * センサーがAPを開くのは（再起動後の最初の2～7分）？
    * Airrohr-[ID]`のWLANネットワークを探します。起動後1～2分かかることがありますのでご了承ください。
* センサーがネットワークにログインしているかどうかを自分のルーターで確認し、IPを記憶する。
    * 代わりに、[flashtool](https://github.comopendata-stuttgartairrohr-firmware-flasher)の "Discovery "を使用してください。
    * If yes: ブラウザでIP経由でセンサーに接続します `http://[ip-of-the-sensor]` , インターフェースが表示されます。
    * いいえ」の場合：電源供給不足やリブートループなど、ESPに問題が発生しています。
* USBをパソコンに接続してログを見る
    * シリアルターミナルプログラムによるシリアルインターフェース上のテキストの追跡（設定：ボー9600、8N1
        * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, ...
        * おそらく適切な usb2serial ドライバがまだ必要です。[https://github.comopendata-stuttgartmetawikiFirmware-einspielen](https://github.comopendata-stuttgartmetawikiFirmware-einspielen) を参照してください。
    * そこでは、センサーが何をしているか（ブートメッセージ、WLAN接続またはAP、測定 - 3分後のみ）を確認できるはずです。

### 電子機器の問題？
* センサーの電子部品をハウジングから取り出して観察する
* 電源を交換してください。
    * 再起動後すぐにESPが点滅する？
    * SDS011：再起動後に赤のLEDファンが点灯する？
    * センサーに接続されているケーブルを再度確認・交換する。
