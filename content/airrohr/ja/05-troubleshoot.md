---
title: Troubleshoot
---

### 送信時の問題？
自分のデータを使ってブラウザに以下のように入力してください。
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

ID]は、左上の入力欄でも検索できます [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1)

* [https://devices.sensor.community/](https://devices.sensor.community/)でセンサーが登録されていて、そのセンサーが地図上に表示されていますか？
    * 過去に WLAN の信号レベルが弱くなかったか？
      サーバ側の信号ログは以下の通りです： `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]` ### USB ケーブルの問題？


### USB ケーブルに問題はありませんか？
* 電源を確認してください。USBケーブル
* Reboot (USBプラグを抜くなどして、電源を切断)
* Is the WLAN Config OK (センサーが設定された WLAN に接続している) そうでない場合。
    * センサーは AP を開いていますか（再起動後の最初の 2～7 分間）？
    * `airrohr-[ID]` WLAN ネットワークを探します。起動後1～2分かかることがありますのでご了承ください。
* センサーがネットワークにログインしているかどうかを自分のルーターで確認し、IPを記憶します。
    * 代わりに、[flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher//)の "Discovery "を使用してください。
    * If yes: ブラウザで IP 経由でセンサーに接続 `http://[ip-of-the-sensor]/` , インターフェースが表示されるはずです。
    * If no: ESPに問題がある。例：電源不足、再起動ループなど。
* USB をコンピュータに接続して、ログを表示します。
    * シリアルターミナルプログラムを使用して、シリアルインターフェースのテキストを追跡する（設定：ボー9600、8N1）。
        * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, ...
        * おそらく適切な usb2serial ドライバが必要ですが、[https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen) を参照してください。
    * そこでは、センサーの動作を確認できるはずです（ブートメッセージ、WLAN接続やAP、測定 - 3分後のみ）。

### Electronics problems?
* センサーの電子機器を筐体から外して観察します。
* 電源を再度確認/交換する
    * does ESP flash shortly after reboot?
    * SDS011: 再起動後に赤色LED/ファンが点灯しますか？
    * センサーへのケーブルを再度チェック/交換する