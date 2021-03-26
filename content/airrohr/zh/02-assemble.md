---
title: 组装
---

&gt;⚠️ **重要提示**。
装配前先安装固件!
请参见__固件刷新器__部分。

### NodeMCU v3
注意：我们的说明是指NodeMCU的版本3。这可以通过VU和G的连接来识别（见图）。

注意：我们的说明是指NodeMCU的版本3。这可以通过VU和G的连接来识别（见图）。
&lt;小&gt;版权：roman-minyaylov，MIT授权&lt;小&gt;。


&lt;img src=".docsairrohrnodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy"&gt;。

##### 当你完成后，它应该是这样的。


### Wire the SDS011
引脚的编号从右到左，在连接电缆时要确保坐在引脚上，因为大多数杜邦电缆也适合在引脚之间。
```bash
SDS011 针 1 -&gt; 针 D1 GPIO5
SDS011 针 2 -&gt; 针 D2 GPIO4
SDS011 引脚3 -&gt; GND
SDS011 引脚4 -&gt; 未使用
SDS011 引脚 5 -&gt; VU (NodeMCU v3) VIN (NodeMCU v1,v2)
SDS011 引脚6 -&gt; 未使用
SDS011 引脚7 -&gt; 未使用
```

&lt;br&gt;

💡 您可以找到[我们固件支持的传感器](https://github.comopendata-stuttgartsensors-softwareblobmasterairrohr-firmwareReadme.md)的列表。



###焊接在一起BME280
###焊接在一起BME280
###焊接在一起BME280

将引脚头与BME280板连接。从背面焊接。引脚之间的缝隙非常小，所以要耐心和小心。

诀窍是把烙铁头放在引脚上，稍微热一下，然后轻轻涂上焊料。



### Wire the BME280
针脚的编号从左到右。
```bash
VIN -&gt; 引脚 3V3 (3.3V)
GND-&gt; GNDG
SDA -&gt; PIN D3
SCL -&gt; 引脚D4
```

###把所有的东西绑在一起

 ##### 将NodeMCU和SDS011绑在一起。
&lt;img src=".docsairrohrti-空气质量传感器-together.jpeg" loading="lazy"&gt;。
使用扎线带连接NodeMCU (ESP8266)和SDS011传感器，使Wifi天线远离传感器。

 ##### 连接柔性管
 ##### 连接柔性管
 ##### 连接柔性管

* 将柔性管连接到SDS011传感器上。
* 使用另一条扎线带将BME280温度传感器连接到管子上。
* 将USB线穿过管子。安装SDS011时，NodeMCU朝上，风扇朝下。
* 将USB线穿过管子。安装SDS011时，NodeMCU朝上，风扇朝下。
 ##### 将传感器推入管道中
* 将零件推入管内，使其卡在里面。
* USB线、软管和BME280应从管子的末端看出去。
* 将另一根管子推到第一根管子上。

&lt;img src=".docsairrohrsds011-jammed-into-tube.jpeg" loading="lazy"&gt;。

##### Finishing
* 将温度传感器放在柔性管上，使其位于管道的边缘。
* 切断管道末端的柔性管。
* 可选：你可以用细网罩住管子的开口端。这样空气就可以流通，但昆虫就会留在外面。
* 可选：你可以用细网罩住管子的开口端。这样空气就可以流通，但昆虫就会留在外面。
&lt;img src=".docsairrohrposition-bme280.jpeg" loading="lazy"&gt;。

###安置
最理想的地方是离街道1.5-3.5米，通风良好。但是，这并不是所有的人都能做到的，因为，在登记的时候会要求提供离地面的高度和离街道的位置等信息。

