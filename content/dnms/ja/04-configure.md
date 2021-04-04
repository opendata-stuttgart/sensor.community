---
title: Configure
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

### Get the ID
1. ステーションとUSBケーブルで接続し、センサーの電源を入れる

2. ステーションは設定されたWiFiアクセスポイントへの接続を試みます。これがうまくいかない場合、センサーは、`Particulate Matter ID` , `Feinstaubsensor-ID` または `airRohr-ID` という名前のアクセスポイントを開きます。IDは**ChipID**（例：13597771）です。**登録の際に必要となりますので、この番号をメモしておいてください**。

3. 作成したアクセスポイントに接続します。接続が確立するまで待ちます。<br>*Android*: 接続がすぐに切れてしまう場合は、「接続」→「WiFi」→「詳細設定」で「スマートネットワークスイッチ」のオプションを無効にする必要があるかもしれません。

4. ブラウザを開き、[http://192.168.4.1](http://192.168.4.1)と入力します。

> ⚠️ **ご注意** NodeMCUがホームWiFiネットワークに接続するのに何度か試行錯誤することがあります。焦らず、うまくいくまで試してみてください。センサーの設定は、スマートフォンからも行うことができます。センサーの設定がうまくいった場合、このIP 192.168.4.1では設定ページにアクセスできなくなります。

### Configure the station
1. 設定」で、SSID（ご自宅のWiFiネットワークの名前）、ネットワークセキュリティキー（Windowsの場合）またはWiFiパスワードを入力します。

2. 本マニュアルに従ったノイズセンサー（DNMS）の場合、これ以上の変更は必要ありません。

3. 保存」をクリックすると、センサーは再起動し、WLANに接続してもこの方法ではアクセスできなくなります。

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/><br>

### Test the station
WiFi ネットワークデータの入力以外に変更がない場合は、約 10 分後に次のページでセンサーを「テスト」することができます。これらのページでは、ChipIDを検索する必要があります（上の例では13597771）。

 * [センサーデータ](www.madavi.de/sensor/graph.php)
 * [WLAN-Signal](www.madavi.de/sensor/signal.php)



