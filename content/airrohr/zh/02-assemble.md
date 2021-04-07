---
title: Assemble
---

&gt;⚠️ **重要提示**。
装配前先安装固件!
请参见__固件刷新器__部分。

### NodeMCU v3
注意：我们的说明是指NodeMCU的版本3。这可以通过VU和G的连接来识别（见图）。

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em" loading="lazy"/>
<small>版权：roman-minyaylov，MIT授权</small>


<img src="../docs/airrohr/nodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy"/>

##### When you are done, this is how it should look like


### Wire the SDS011
引脚的编号从右到左，在连接电缆时要确保坐在引脚上，因为大多数杜邦电缆也适合在引脚之间。
```bash
SDS011 针 1 -> 针 D1 GPIO5
SDS011 针 2 -> 针 D2 GPIO4
SDS011 引脚3 -> GND
SDS011 引脚4 -> 未使用
SDS011 引脚 5 -> VU (NodeMCU v3) VIN (NodeMCU v1,v2)
SDS011 引脚6 -> 未使用
SDS011 引脚7 -> 未使用
```

<br>

💡 您可以找到[我们固件支持的传感器](https://github.com/opendata-stuttgart/sensors-software/blob/master/airrohr-firmware/Readme.md)的列表。

### Solder together BME280
<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center" loading="lazy"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;" loading="lazy"/>

将引脚头与BME280板连接。从背面焊接。引脚之间的缝隙非常小，所以要耐心和小心。
诀窍是把烙铁头放在引脚上，稍微热一下，然后轻轻涂上焊料。


### Wire the BME280
针脚的编号从左到右。

```bash
VIN ->  引脚 3V3 (3.3V)
GND -> GNDG
SDA -> PIN D3
SCL -> 引脚D4
```

### Tie everything together

##### Tie NodeMCU and SDS011 together
<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg" loading="lazy"/>
使用扎线带连接NodeMCU (ESP8266)和SDS011传感器，使Wifi天线远离传感器。

##### Connect flexible tube
<img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em" loading="lazy"/>
<img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;" loading="lazy"/>

* 将柔性管连接到SDS011传感器上。
* 使用另一条扎线带将BME280温度传感器连接到管子上。
* 将USB线穿过管子。安装SDS011时，NodeMCU朝上，风扇朝下。

##### Push in sensor into the pipe
* 将零件推入管内，使其卡在里面。
* USB线、软管和BME280应从管子的末端看出去。
* 将另一根管子推到第一根管子上。

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg" loading="lazy"/>

##### Finishing
* 将温度传感器放在柔性管上，使其位于管道的边缘。
* 切断管道末端的柔性管。
* 可选：你可以用细网罩住管子的开口端。这样空气就可以流通，但昆虫就会留在外面。
* 可选：你可以用细网罩住管子的开口端。这样空气就可以流通，但昆虫就会留在外面。

<img src="../docs/airrohr/position-bme280.jpeg" loading="lazy"/>

### Placement
最理想的地方是离街道1.5-3.5米，通风良好。但是，这并不是所有的人都能做到的，因为，在登记的时候会要求提供离地面的高度和离街道的位置等信息。

