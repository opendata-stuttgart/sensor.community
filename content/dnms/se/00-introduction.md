---
title: Introduktion
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
              Buller är i beta. Skicka frågor till</p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community</a>
        </div>
    </div>
  </div>
</div>


> 🚧 Bygg din DIY-sensor och bli en del av det globala nätverket för opendata & civictech. <br> Med DNMS (Digital Noise Measuring Sensor) kan du själv mäta buller.

 <img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>

Kolla in originalinstruktionerna och tidigare versioner av brusgivaren på [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Manual).

<br>

Förvaret innehåller olika inställningar för att bygga sensorn med olika typer av kort och kretskort.

 <br>
 
 Det finns två olika typer av inställningar:
  
 * en installation där NodeMCU med vissa sensorer (PM, temperatur etc.) och DNMS är separerade. PCB: erna kallas AIRROHR V1.4 och DNMS - T4 V1.4
 * en kombinerad version av NodeMCU och DNMS på samma PCB: DNMS - T4 + NodeMCU V1.4
   
  Endast varianten där NODEMCU och DNMS separeras beskrivs här. Ta en titt på Helmuts Github för de andra varianterna!
  
   I det här fallet kan anslutningen mellan NodeMCU och DNMS vara så lång som 10m. Detta är viktigt eftersom du måste hitta rätt position för DNMS för att få exakta brusmätningar.

### Inköpslista

##### Enskilda komponenter
* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 utvecklingskort](https://www.pjrc.com/store/teensy40.html). Andra säljare: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* ultra flexibla silikonkablar med en diameter på 0,15 mm² (AWG 26) i 6 olika färger
<br>
DNMS (Digital Noise Measuring Sensor) kan kombineras med en airRohr PM-sensor:

* [SPS30 fin dammsensor](https://www.sparkfun.com/products/15103). Andra säljare: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1), [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). Den vanliga [SDS011 PM-sensorn](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011) kan också användas.
* [BME280 6-PIN-version, temperatur och fuktighet](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V). Andra säljare: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/bauelemente/sensoren-module/feuchtigkeit/bme680-breakout-board-4in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-luftdruck-und-luftg-252-t)
* [Cable](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+cable+20cm+female-female)
* [USB-kabel t.ex.: platt 2m Micro-USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+flat+cable+2m)
* [Strömförsörjning USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [Kabelremmar](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+straps)

PCB och väderskydd kommer att beskrivas nedan.

<br>

🙌 Bra, du bestämde dig för att köpa delarna online!
Tyvärr kan leveransen ta från dagar upp till tre veckor.
Tills dess njut av ditt liv️.
