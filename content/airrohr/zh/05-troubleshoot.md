---
title: Troubleshoot
---

### Transmitting problems?
在浏览器中输入以下自己的数据。
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

也可以在左上角的输入栏中搜索[ID][https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1)

* 传感器是否通过[https://devices.sensor.community](https://devices.sensor.community)注册，传感器在地图上是否可见？
    * 过去的WLAN信号水平是否很弱？
        这是服务器端的信号记录：`https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`。
        这是服务器端的信号记录：`https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`。

### USB cable problems?
* 检查电源。USB线
* 重新启动（断开电源，如拔出USB插头）。
* WLAN配置是否正常（传感器连接到已配置的WLAN）如果不正常，请注意。
    * 传感器是否打开了一个AP（在重启后的头2-7分钟内）？
    * 寻找`airrohr-[ID]`WLAN网络。耐心点，启动后可能需要1-2分钟。
* 在自己的路由器上检查传感器是否已登录到网络中，然后记住 IP
    * 或者使用[flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/) 中的 "发现"。
    * 如果是：用浏览器通过IP连接到传感器`http://[ip-of-the-sensor]`，应出现界面。
    * 如果没有：ESP有问题，如电源不足，重启循环或类似情况。
* 将USB连接到电脑上，查看日志。
    * 用串行终端程序在串行接口上跟踪文本（设置：波特9600，8N1）。
        * Linux：屏幕、迷你电脑、cutecom；Windows：Tera Term；MacOS：屏幕、迷你电脑、......。Tera Term；MacOS：screen、minicom、.。
        * 可能还需要合适的usb2serial驱动程序，见[https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
    * 在这里，您应该能够看到传感器正在做什么（启动信息、WLAN连接或AP、测量--仅在3分钟后）。

### Electronics problems?
* 从外壳上拆下传感器电子元件并观察
* 再次检查更换电源
    * 重启后不久ESP是否会闪烁？
    * SDS011：重启后红色LED风扇亮起？
    * 再次检查更换传感器的电缆。
