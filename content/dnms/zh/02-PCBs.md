---
title: PCBs and circuit diagrams
---

构建DNMS的最佳方式是使用我们的PCB之一。
现在有不少PCB厂家可以用几块钱生产电路板，而且没有最低数量。比如【JLCPCB】(https://jlcpcb.com/)。
只需下载我们的电路图或下面的Gerber文件，将它们上传到制造商的网站，然后订购您的PCB。

<br>
这里描述的是PCBs的最后版本。请参考[Helmut Bitter的Github](https://github.com/hbitter/DNMS/tree/master/PCBs) 以获取更多信息和KiCad文件。

### AIRROHR V1.4
<img src="../docs/dnms/airrohr-PCB.jpg" style="display: block; width:40%;margin: 1em 0" loading="lazy"/>
NodeMCU ESP8266 CPUWLAN的PCB，带有I2C总线扩展，可以连接DNMS以及其他传感器（SDS011，BME280...）。


##### Download
* [电路图](../docs/dnms/airrohr-PCB-circuit-diagram.pdf)
* [Gerber文件上传至PCB制造商的网站](../docs/dnms/airrohr-PCB-circuit-diagram-gerber.zip)


### DNMS - T4 V1.4
DNMS Teensy 4.0的PCB，可以直接连接在NodeMCU ESP8266上，也可以连接在上面的AIRROHR PCB上。


##### Download
* [电路图](../docs/dnms/dnms-noise-measuring-teensy-40-circuit-diagram.pdf)
* [在PCB制造商的网站上上传Gerber文件](../docs/dnms/dnms-noise-measuring-teensy-40-circuit-gerber.zip)

