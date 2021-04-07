---
title: Troubleshoot
---

### Transmitting problems?

请在浏览器中输入以下内容，并输入自己的数据。
`https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1&var-chipID=esp8266-[ID]`

也可以在左上角的输入栏中搜索[ID][https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1](https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1)

* 传感器是否通过[https://devices.sensor.community/](https://devices.sensor.community/)注册，传感器在地图上是否可见？
  * 过去的WLAN信号是否很弱？
    这里是服务器端的信号记录：`https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`。

### USB cable problems?

* 检查电源。USB线
* 重新启动（断开电源，如拔出USB插头）。 WLAN配置是否正常（传感器连接到配置的WLAN）如果不正常，*传感器是否打开了一个AP（在重启后的前2-7分钟）？
  * 传感器是否打开了一个AP（在重启后的前2-7分钟）？
  * 寻找`airrohr-[ID]`WLAN网络。耐心点，重启后可能需要1-2分钟。
* 在自己的路由器上查看传感器是否登录了网络，然后记住IP。
  * 或者使用[flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher//)中的 "发现"。
  * 如果是：用浏览器通过IP连接到传感器`http://[ip-of-the-sensor]/`，应出现界面。
  * 如果没有：ESP有问题，如电源不足，重启循环或类似情况。
* 将USB连接到电脑上，查看日志。
  * 用串行终端程序在串行接口上跟踪文本（设置：波特9600，8N1）。
    * Linux：屏幕、迷你电脑、cutecom；Windows：Tera Term；MacOS：屏幕、迷你电脑、......。Tera Term; MacOS: screen, minicom, ...
    *
    可能还需要合适的usb2serial驱动程序，见[https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
  * 在这里你应该能够看到传感器正在做什么（启动信息、WLAN连接或AP、测量--仅在3分钟后）。

### Electronics problems?

* 从外壳上拆下传感器电子元件并观察
* 再次检查/更换电源
  * 重启后不久ESP会闪烁吗？
  * Teensy：重启后红色LED灯闪烁？
  * 再次检查/更换传感器的电缆。

  <div class="max-w-screen-xl mx-auto pt-5">
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
                噪声还在测试阶段。发送问题到</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>

