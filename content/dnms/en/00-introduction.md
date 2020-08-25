---
title: Introduction
---
> 🚧 Build your DIY sensor and become part of the worldwide, opendata & civictech network. <br> With DNMS (Digital Noise Measuring Sensor) you can measure noise pollution yourself.

 <img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0"/>


Check out the original instructions and former versions of the noise sensor on [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Manual).
<br>
 That repository contains different setups to build the sensor with different kinds of board and PCBs.
 
 <br>
 
 There are two different kinds of setups:
 
* a setup where the NodeMCU with some sensors (PM, temperature etc.) and the DNMS are separated. The PCBs are called AIRROHR V1.4 and DNMS - T4 V1.4
* a combined version of the NodeMCU and DNMS on the same PCB: DNMS - T4+NodeMCU V1.4
  
 Only the variant where the NODEMCU and DNMS are separated is described here. Have a look at Helmut's Github for the other variants!
 
  In this case, the connection between the NodeMCU and the DNMS can be as long as 10m. This is important because you need to find the right position for the DNMS to obtain accurate noise measurements.

### Shopping list

##### Single components
* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 development board](https://www.pjrc.com/store/teensy40.html). Other sellers: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0?gclid=EAIaIQobChMIydqP3t2Y6wIVhtKyCh1IagurEAQYASABEgJAKPD_BwE), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* ultra flexible silicone cables with a diameter of 0,15mm² (AWG 26) in 6 different colours
<br>
The DNMS (Digital Noise Measuring Sensor)  can be combined with an airRohr PM-Sensor:

* SPS30 fine dust sensor](https://www.sparkfun.com/products/15103). Other sellers: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1&gclid=EAIaIQobChMI-63cmP6Y6wIVDM53Ch1hNwmGEAYYASABEgLp5PD_BwE), [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234?gclid=EAIaIQobChMIsYW85oOZ6wIVAtGyCh0f8wU_EAYYASABEgK8PfD_BwE). The usual [SDS011 PM sensor](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011) can be used as well.
* [BME280 6-PIN Version, temperature & humidity](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V). Other sellers: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/bauelemente/sensoren-module/feuchtigkeit/bme680-breakout-board-4in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-luftdruck-und-luftg-252-t)
* [Cable](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+cable+20cm+female-female)
* [USB cable e.g.: flat 2m Micro-USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+flat+cable+2m)
* [Power supply USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [Cable straps](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+straps)

The PCBs and the weather protection will be described below.

<br>

🙌 Great, you decided to buy the parts online! 
Unfortunately the delivery can take from days up to three weeks. 
Until then enjoy your life️.