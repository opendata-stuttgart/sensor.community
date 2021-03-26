---
title: トラブルシューティング
---

### 転送の問題？
以下をご自身のデータでブラウザに入力してください。
`https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1&amp;var-chipID=esp8266-[ID]`

ID」は、ページの左側に開いている入力欄でも検索できます。[https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1](https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1)

* [https://devices.sensor.community](https://devices.sensor.community)でセンサーが登録されていて、そのセンサーが地図上に表示されているか。
* 過去に無線LANの電波が弱かったことはありますか？
  ここでは、サーバー側のシグナルプロトコルとして、`https://api-rrd.madavi.degrafanadFk6mw1WGzwifi-signal?orgId=1&amp;var-chipID=esp8266-[ID]` を紹介します。

### USBケーブルに問題がある？
* 電源の確認
* 再起動（USBプラグを抜くなどして、電源を切る
* WLANの設定はOKか（センサーは設定されたWLANに接続している）。そうでなければ
  * 再起動後、最初の2～7分で、センサーがアドホック無線LAN（アクセスポイント）を開くか？
  * WLANネットワーク `airrohr-[ID]` を検索します。再起動後、表示されるまで数分かかる場合があります。

  * AirRohr Flashing Tool](https://github.comopendata-stuttgartairrohr-firmware-flasher)の「ネットワーク検索」をご利用ください。
  * If yes: ブラウザでセンサーに接続する `http://[ip-your-sensor]`, the configuration should appear
  * 電源が入らない場合は、電源不足や再起動ループなどが考えられます。
* USBケーブルでNodeMCUをコンピュータに接続し、プロトコルを見る
  * シリアルターミナルプログラムによる追跡（設定：Baud 9600, 8N1
    * Linux: screen, minicom, cutecom
    * Windowsです。Tera Term
    * macOS: screen, minicom, ...
    * 適切なUSB-2シリアルドライバーが必要な場合があります。[https://github.comopendata-stuttgartmetawikiFirmware-einspielen](https://github.comopendata-stuttgartmetawikiFirmware-einspielen)を参照してください。
  * そこでは、センサーが何をしているか（ブートメッセージ、WLAN接続またはアクセスポイント、測定 - 3分後のみ）を確認する必要があります。

### 電子機器の問題？
* センサーの電子部品をハウジングから取り出して、よく見てみましょう。
* 電源の再確認
    * 再起動後すぐにNodeMCU(ESP8266)が点滅する？
    * SDS011：再起動後に赤いLEDFanが点灯する？
    * センサーへのケーブルを再確認してください。

  <div class="max-w-screen-xl mx-auto pt-5">。
      <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">。
      <div class="flex items-center">。
            <span class="p-2 rounded-lg bg-indigo-500">。
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">。

              <svg
            <br> <br>
        <div class="flex flex-wrap">。
          <div class="flex-wrap flex">。
            <p class="pt-1 text-indigo-700 font-medium">。
                Noiseは現在ベータ版です。ご質問は<p>までお願いします。
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">。
                  Noise@Sensor.Community<a>
          <div>
           <div>
      <div>
    <div>
  <div>