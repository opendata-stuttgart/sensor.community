---
title: 組み立て
---

> ⚠️ **重要なお知らせ**)
組み立て前にファームウェアをインストールしてください
firmware flasher__の項を参照。

### NodeMCU v3
注：ここでの説明は、NodeMCUのバージョン3を参照しています。これは、VUとGの接続によって認識できます（図参照）。

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em" loading="lazy"/>
<small>Copyright: roman-minyaylov, MIT License</small>


<img src="../docs/airrohr/nodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy"/>

##### 完成すると、こんな感じになります。


### SDS011の配線
ピンは右から左へと番号が振られています。接続の際には、ケーブルがピンの上に乗っていることを確認してください。ほとんどのDupont社製ケーブルはピンの間にも収まります。
``bash
SDS011端子1→端子D1 / GPIO5
SDS011端子2→端子D2 / GPIO4
SDS011端子3→GND
SDS011端子4→未使用
SDS011ピン5 -> VU (NodeMCU v3) / VIN (NodeMCU v1,v2)
SDS011端子6→未使用
SDS011端子7→未使用
```

<br>

💡 「ファームウェアが対応しているセンサー」の一覧を見ることができます(https://github.com/opendata-stuttgart/sensors-software/blob/master/airrohr-firmware/Readme.md)



### 半田付け BME280

<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center" loading="lazy"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;" loading="lazy"/>


ピンヘッダをBME280基板に接続します。裏側からハンダ付けしてください。ピンとピンの間の隙間は非常に小さいので、根気よく注意してください。

コツは、ハンダゴテの先をピンに当て、少し温めてから、軽くハンダを塗ること。



### BME280の配線
ピンには左から右に番号が振られています。
``bash
VIN -> Pin 3V3 (3.3V)
GND->GND/G
SDA -> PIN D3
SCL -> D4端子
```

### Tie everything together

 ##### NodeMCU と SDS011 を結びつける
<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg" loading="lazy"/>
NodeMCU（ESP8266）とSDS011センサーをケーブルタイでつなぎ、Wifiアンテナがセンサーから離れるようにする。

 ##### フレキシブルチューブの接続
 <img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em" loading="lazy"/>
 <img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;" loading="lazy"/>

* SDS011センサーにフレキシブルチューブを接続する。
* BME280温度センサーを別のケーブルタイでチューブに取り付ける
* USBケーブルをチューブに通します。SDS011を、NodeMCUが上向き、ファンが下向きになるように取り付ける
* USBケーブルをチューブに通します。SDS011を、NodeMCUが上向き、ファンが下向きになるように取り付ける
 ##### センサーをパイプに押し込む
* チューブの中にパーツを押し込み、中に詰まった状態にする
* USBケーブル、フレキシブルチューブ、BME280がチューブの先端から出ていること。
* もう一方のパイプを1本目のパイプに押し付ける。

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg" loading="lazy"/>

##### フィニッシング
* 温度センサーをフレキシブルチューブの端に位置させる。
* パイプの先端のフレキシブルチューブを切り離す。
* オプションで、チューブの両端を細かいメッシュで覆うことができます。そうすれば、空気は循環するが、虫は外に出ない。
* オプションで、チューブの両端を細かいメッシュで覆うことができます。そうすれば、空気は循環するが、虫は外に出ない。
<img src="../docs/airrohr/position-bme280.jpeg" loading="lazy"/>

### Placement
理想的な場所は、道路から1.5～3.5メートルの高さにあり、風通しの良い場所です。しかし、すべての人がこれを実現できるわけではないので、登録の際には地上からの高さや道路との位置関係などの情報を求めています。

