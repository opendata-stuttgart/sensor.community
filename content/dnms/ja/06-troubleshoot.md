---
title: Troubleshoot
---

### Transmitting problems?
以下をご自身のデータでブラウザに入力してください。
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

ID」は、ページの左側に開いている入力欄でも検索できます。[https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1)

* [https://devices.sensor.community](https://devices.sensor.community)でセンサーが登録されていて、そのセンサーが地図上に表示されているか。
* 過去に無線LANの電波が弱かったことはありますか？
  ここでは、サーバー側のシグナルプロトコルとして、`https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]` を紹介します。

### USB cable problems?
* 電源の確認
* 再起動（USBプラグを抜くなどして、電源を切る
* WLANの設定はOKか（センサーは設定されたWLANに接続している）。そうでなければ
  * 再起動後、最初の2～7分で、センサーがアドホック無線LAN（アクセスポイント）を開くか？
  * WLANネットワーク `airrohr-[ID]` を検索します。再起動後、表示されるまで数分かかる場合があります。

  * AirRohr Flashing Tool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)の「ネットワーク検索」をご利用ください。
  * If yes: ブラウザでセンサーに接続する `http://[ip-your-sensor]`, the configuration should appear
  * 電源が入らない場合は、電源不足や再起動ループなどが考えられます。
* USBケーブルでNodeMCUをコンピュータに接続し、プロトコルを見る
  * シリアルターミナルプログラムによる追跡（設定：Baud 9600, 8N1
    * Linux: screen, minicom, cutecom
    * Windowsです。Tera Term
    * macOS: screen, minicom, ...
    * 適切なUSB-2シリアルドライバーが必要な場合があります。[https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)を参照してください。
  * そこでは、センサーが何をしているか（ブートメッセージ、WLAN接続またはアクセスポイント、測定 - 3分後のみ）を確認する必要があります。

### Electronics problems?
* センサーの電子部品をハウジングから取り出して、よく見てみましょう。
* 電源の再確認
    * 再起動後すぐにNodeMCU(ESP8266)が点滅する？
    * SDS011：再起動後に赤いLEDFanが点灯する？
    * センサーへのケーブルを再確認してください。

  <div class="max-w-screen-xl mx-auto pb-5">
      <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
      <div class="flex items-center">
            <span class="p-2 rounded-lg bg-indigo-500">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </span>
        <div class="flex flex-wrap">
          <div class="flex-wrap flex">
            <p class="pt-1 text-indigo-700 font-medium">
                Noiseはベータ版です。質問は<p>までお願いします。</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>
