---
title: Introduction
---

  <div class="max-w-screen-xl mx-auto pb-5">
    <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
    <div class="flex items-center">
          <span class="p-2 rounded-lg bg-indigo-500">
            <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </span>
        <div class="flex-wrap flex">
          <p class="pt-1 text-indigo-700 font-medium">
              噪声还在测试阶段。发送问题到</p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community</a>
        </div>
    </div>
  </div>
</div>


> 🚧 建立您的DIY传感器，并成为全球的一部分，opendata和civictech网络。<br> 通过DNMS（数字噪声测量传感器），您可以自己测量噪声污染。

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/><br /> <br />


在[Helmut Bitter的Github](https://github.com/hbitter/DNMS/tree/master/Manual)上查看噪声传感器的原始说明和以前的版本。

<br>

该资源库包含不同的设置，以建立不同种类的电路板和PCB的传感器。

<br>

有两种不同的设置。

* NodeMCU与一些传感器（PM、温度等）和DNMS分开的设置。PCB被称为AIRROHR V1.4和DNMS - T4 V1.4。
* NodeMCU和DNMS在同一PCB板上的组合版本：DNMS - T4+NodeMCU V1.4。

这里只介绍NODEMCU和DNMS分开的版本。请看Helmut的Github，了解其他变体。

在这种情况下，NodeMCU和DNMS之间的连接可以长达10米。这一点很重要，因为您需要为DNMS找到正确的位置，以获得精确的噪声测量。

###购物清单

##### 单个组件
* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0开发板](https://www.pjrc.com/store/teensy40.html)。其他卖家。[EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board)、[Antratek](https://www.antratek.de/teensy-4-0)、[PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)。
* [数字式麦克风ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* 直径为0.15mm²（AWG 26）的超柔韧硅胶电缆，有6种不同颜色。
  <br>
  DNMS（数字式噪声测量传感器）可与airRohr PM传感器组合使用。

* [SPS30微尘传感器](https://www.sparkfun.com/products/15103)。其他销售商。[TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1) ，[SOS电子](https://www.soselectronic.de/products/sensirion/sps30-2-304234)。一般的[SDS011 PM传感器](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011)也可以使用。
* [BME280 6-PIN版，温湿度](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V)。其他销售商。[Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/sensoren-module/feuchtigkeit/gy-bme280-breakout-board-3in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-und-luftdruck?c=92)
* [电缆](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+电缆+20厘米+雌性-雌性)
* [USB电缆，例如：扁平的2m Micro-USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+flat+cable+2m)
* [电源USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [电缆带](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+电缆带)

下面将介绍PCB和天气保护。

<br>

很好，您决定在网上购买零件了!
不幸的是，交付可能需要几天到三个星期。
在那之前，享受你的生活️。