---
title: はじめに
---

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


> 🚧 DIYセンサーを作って、世界中のopendata &amp; civictechネットワークの一員になりましょう。<br> DNMS（Digital Noise Measuring Sensor）を使えば、自分で騒音を測定することができます。

 <img src="...docsdnmsdnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy">。


Helmut Bitter氏のGithub](https://github.comhbitterDNMStreemasterManual)で、オリジナルの説明書やノイズセンサーの旧バージョンをチェックしてみてください。

<br>

そのリポジトリには、さまざまな種類のボードやPCBを使ってセンサーを構築するためのさまざまなセットアップが含まれています。
そのリポジトリには、さまざまな種類のボードやPCBを使ってセンサーを構築するためのさまざまなセットアップが含まれています。
 <br>
 <br>
 セットアップには2つの種類があります。
 セットアップには2つの種類があります。
* いくつかのセンサー（PM、温度など）を持つNodeMCUとDNMSが分離しているセットアップ。PCBはAIRROHR V1.4とDNMS - T4 V1.4と呼ばれています。
* NodeMCUとDNMSを同じPCB上に統合したバージョン：DNMS - T4+NodeMCU V1.4
* NodeMCUとDNMSを同じPCB上に統合したバージョン：DNMS - T4+NodeMCU V1.4
 ここでは、NODEMCUとDNMSが分離しているバリエーションのみを説明します。その他のバリエーションについては、HelmutのGithubをご覧ください。
 ここでは、NODEMCUとDNMSが分離しているバリエーションのみを説明します。その他のバリエーションについては、HelmutのGithubをご覧ください。
  この場合、NodeMCUとDNMSの間の接続は10mにもなります。正確なノイズ測定を行うためには、DNMSの適切な位置を見つける必要があるため、この点は重要です。

### ショッピングリスト

##### シングルコンポーネント
* [NodeMCU ESP8266 CPUWLAN](https://www.aliexpress.comwholesale?groupsort=1&amp;SortType=price_asc&amp;SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0開発ボード](https://www.pjrc.comstoreteensy40.html)。その他の販売者 EXPTECH](https://www.exp-tech.deplattformenteensy9596teensy-4.0-development-board), [Antratek](https://www.antratek.deteensy-4-0), [PIMORONI](https://shop.pimoroni.comproductsteensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.comproductsonehorseics43434-i2s-digital-microphone)
* 直径0.15mm² (AWG 26)の超フレキシブルなシリコンケーブル（6色）。
<br>
DNMS（デジタルノイズ測定センサー）は、airRohr PM-Sensorと組み合わせることができます。

* [SPS30 ファインダストセンサー](https://www.sparkfun.comproducts15103)。その他の販売者 TME](https://www.tme.eudedetailssps30gassensorensensirion1-101638-10?brutto=1)、[SOS electronic](https://www.soselectronic.deproductssensirionsps30-2-304234)。通常の[SDS011 PMセンサー](https://de.aliexpress.comwholesale?catId=0&amp;initiative_id=AS_20200813122806&amp;SearchText=sds011)も使用可能です。
* [BME280 6-PIN Version, temperature &amp; humidity](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040440&amp;SearchText=bme280+-5V++3.3V)になります。その他の販売者 Nettigo](https://nettigo.euproductsmodule-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.debauelementesensoren-modulefeuchtigkeitbme680-breakout-board-4in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-luftdruck-und-luftg-252-t)
* [ケーブル](http://www.aliexpress.comwholesale?groupsort=1&amp;SortType=price_asc&amp;SearchText=Dupont+ケーブル+20cm+メス-メス)
* [USBケーブル 例：フラット2m Micro-USB](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040708&amp;SearchText=micro+USB+フラット+ケーブル+2m)
* [Power supply USB](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040834&amp;SearchText=single+micro+usb+eu+power+supply)
* [ケーブルストラップ](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040852&amp;SearchText=cable+straps)

PCBと耐候性については後述します。

<br>

🙌 いいですね、パーツをネットで買うことにしたんですね！？
残念ながら、お届けには数日から3週間ほどかかることがあります。
それまでは、人生を楽しんでください️。
