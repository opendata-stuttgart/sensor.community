---
title: Assemble
---

> ⚠️ **重要なお知らせ**)
組み立ての前に、ファームウェアをインストールしてください。
firmware flasher__の項を参照してください。

### NodeMCU v3
注：本説明書はNodeMCUのバージョン3を参照しています。これは、VUとGの接続によって認識することができます（図参照）。

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top:3em" loading="lazy"/>。
<small>Copyright: oman-minyaylov, MIT License</small>


<img src="../docs/airrohr/nodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy"/>。

##### 完成すると、こんな感じになります。


### SDS011の配線
ピンには右から左へと番号が振られています。接続する際には、ケーブルがピンに収まっていることを確認してください。ほとんどのDupont社製ケーブルはピンの間に収まっています。

```bash
SDS011 Pin 1 -> Pin D1 / GPIO5
SDS011 Pin 2 -> Pin D2 / GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> unused
SDS011 Pin 5 -> VU (NodeMCU v3) / VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> unused
SDS011 Pin 7 -> unused
```

<br>

💡 [Sensors supported by our firmware](https://github.com/opendata-stuttgart/sensors-software/blob/master/airrohr-firmware/Readme.md)のリストを見ることができます。


### BME280をはんだ付けする
<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center" loading="lazy"/>。
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;" loading="lazy"/>。

ピンヘッダをBME280基板に接続します。裏側からハンダ付けします。ピンとピンの間の隙間は非常に小さいので、我慢して慎重に作業してください。 

はんだごての先をピンに当て、少し温めてから、軽くはんだを塗るのがコツです。 


### BME280の配線
ピンには左から右へと番号が振られています。
````bash
VIN→ピン3V3(3.3V)
GND→GND/G
SDA -> D3ピン
SCL -> D4ピン
```

### すべてを結びつける

##### NodeMCU と SDS011 を結びつける
<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg" loading="lazy"/>。
NodeMCU(ESP8266)とSDS011センサーをケーブルタイで繋ぎ、Wifiアンテナがセンサーから離れるようにする

##### フレキシブルチューブを接続
<img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em" loading="lazy"/>。
<img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;" loading="lazy"/>。

* SDS011センサーにフレキシブルチューブを接続します。
* 別のケーブルタイを使用して、BME280温度センサーをチューブに取り付ける
* USBケーブルをチューブに通します。SDS011を、NodeMCUが上向き、ファンが下向きになるように取り付ける
 
##### センサーをパイプに押し込む
* センサーをパイプに押し込む
* USBケーブル、フレキシブルチューブ、BME280はチューブの端から見えるようにしてください。
* もう一方のパイプを最初のパイプの上に押し込みます。

<img src=".../docs/airrohr/sds011-jammed-into-tube.jpeg" loading="lazy"/>。

##### 仕上がり
* 温度センサーがパイプの端にくるように、フレキシブルチューブに配置します。
* パイプの端にあるフレキシブルチューブを切り取ります。
* オプション：チューブのオープンエンドを細かいメッシュで覆うことができます。これで、空気は循環し、虫は外に出られなくなります。
 
<img src=".../docs/airrohr/position-bme280.jpeg" loading="lazy"/>。

### 置き場所 
理想的な場所は、道路から1.5～3.5メートルの高さで、風通しの良い場所です。しかし、すべての人がこのようにできるわけではないので、登録時に地上からの高さや道路との位置関係などの情報を求めています。

