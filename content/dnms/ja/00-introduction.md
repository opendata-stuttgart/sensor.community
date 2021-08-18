---
title: Introduction
---

  <div class="max-w-screen-xl mx-auto pb-5">
    <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
    <div class="flex items-center">
          <span class="p-2 rounded-lg bg-indigo-500">
            <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </span>
        <div class="flex-wrap flex">
          <p class="pt-1 text-indigo-700 font-medium">
                Noiseはベータ版です。質問は<p>までお願いします。</p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community</a>
        </div>
    </div>
  </div>
</div>


> 🚧 DIYセンサーを作って、世界中のopendata & civictechネットワークの一員になりましょう。<br> DNMS（Digital Noise Measuring Sensor）を使えば、自分で騒音を測定することができます。

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>


[Helmut Bitter氏のGithub](https://github.com/hbitter/DNMS/tree/master/Manual) にあるノイズセンサーのオリジナルの説明書や旧バージョンをチェックしてみてください。

<br>

そのリポジトリには、様々な種類のボードやPCBを使ってセンサーを作るための異なるセットアップが含まれています。

<br>

2つの異なる種類のセットアップがあります。
* 2種類のセットアップがあります： * NodeMCUといくつかのセンサー（PM、温度など）とDNMSが分離しているセットアップ。PCBはAIRROHR V1.4とDNMS - T4 V1.4と呼ばれています。
* NodeMCUとDNMSを同じPCBに搭載したバージョン：DNMS - T4+NodeMCU V1.4

ここでは、NODEMCUとDNMSを分離したバージョンについてのみ説明します。他のバリエーションについては、Helmut氏のGithubをご覧ください。

このケースでは、NodeMCUとDNMSの間の接続は10mにもなります。これは、正確なノイズ測定を行うためには、DNMSの適切な位置を見つける必要があるため、重要です。

### ショッピングリスト
##### 単一コンポーネント
* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 開発ボード](https://www.pjrc.com/store/teensy40.html). その他の販売者 [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* 直径0.15mm² (AWG 26)の超柔軟なシリコンケーブル、6種類のカラーバリエーション
  <br>
  DNMS（デジタルノイズ測定センサー）は、airRohr PM-Sensorと組み合わせることができます。

* [SPS30 ファインダストセンサー](https://www.sparkfun.com/products/15103)。その他の販売者 [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1)、[SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234) 。通常の [SDS011 PMセンサー](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011) も使用可能です。
* [BME280 6-PIN Version, temperature & humidity](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V). その他の販売者 [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/sensoren-module/feuchtigkeit/gy-bme280-breakout-board-3in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-und-luftdruck?c=92)
* [ケーブル](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+ケーブル+20cm+メス-メス)
* [USB ケーブル 例：フラット 2m Micro-USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+フラット+ケーブル+2m)
* [パワーサプライUSB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [ケーブルストラップ](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+straps)

プリント基板と耐候性については後述します。

<br>

🙌 オンラインでパーツを購入することに決めましたね。
残念ながらお届けには数日から3週間ほどかかります。
それまではお楽しみください️。
