---
title: PCBs和电路图
---

构建DNMS最好的方法就是使用我们的PCB。
现在有不少PCB厂商可以用几块钱生产电路板，而且没有最低数量限制。比如[JLCPCB](https://jlcpcb.com//)。
只要下载我们的电路图和/或下面的Gerber文件，在制造商的网站上传，然后订购你的PCB。

<br>
这里描述的是PCBs的最后版本。请参考[Helmut Bitter的Github](https://github.com/hbitter/DNMS/tree/master/PCBs)以获取更多信息和KiCad文件。

###AIRROHR V1.4
<img src="../docs/dnms/airrohr-PCB.jpg" style="display: block; width:40%;margin: 1em 0" loading="lazy"/>
NodeMCU ESP8266 CPU/WLAN的PCB，带有I2C总线扩展，可以连接DNMS以及其他传感器（SDS011，BME280...）。


##### 下载
* [电路图](./docs/dnms/airrohr-PCB-电路图.pdf)
* [Gerber文件要上传到PCB制造商的网站](./docs/dnms/airrohr-PCB-circuit-diagram-gerber.zip)

---

### DNMS - T4 V1.4
<img src="../docs/dnms/dnms-noise-measuring-teensy-4.jpg" style="display: block;width:40%; margin: 1em 0" loading="lazy"/>。
DNMS Teensy 4.0的PCB，可以直接连接在NodeMCU ESP8266上，也可以连接在上面的AIRROHR PCB上。


##### 下载
* [电路图](.../docs/dnms/dnms-噪声测量-teensy-40-电路图.pdf)
* [Gerber文件要在PCB制造商的网站上上传](./docs/dnms/dnms-噪声测量-teensy-40-circuit-gerber.zip)

