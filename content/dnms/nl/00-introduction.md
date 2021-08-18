---
title: Inleiding
---
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
                Ruis is in beta. Vragen kunt u sturen naa</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>
<br>


> 🚧 Bouw je eigen DIY sensor en wordt onderdeel van het wereldwijde, opendata &amp; civictech netwerk. <br> Met DNMS (Digitale Geluids Metende Sensor) kunt u zelf geluidsoverlast meten.

  <img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>


Bekijk de originele instructies en eerdere versies van de geluidssensor op [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Manual).

<br>

Die repository bevat verschillende setups om de sensor te bouwen met verschillende soorten printplaten en PCB's.
Die repository bevat verschillende setups om de sensor te bouwen met verschillende soorten printplaten en PCB's.
 <br>
 <br>
 Er zijn twee verschillende soorten opstellingen:
 Er zijn twee verschillende soorten opstellingen:
* een opstelling waarbij de NodeMCU met enkele sensoren (PM, temperatuur etc.) en de DNMS gescheiden zijn. De PCB's heten AIRROHR V1.4 en DNMS - T4 V1.4
* een gecombineerde versie van de NodeMCU en DNMS op dezelfde PCB: DNMS - T4+NodeMCU V1.4
* een gecombineerde versie van de NodeMCU en DNMS op dezelfde PCB: DNMS - T4+NodeMCU V1.4
 Alleen de variant waarbij de NODEMCU en DNMS gescheiden zijn, wordt hier beschreven. Kijk op Helmut's Github voor de andere varianten!
 Alleen de variant waarbij de NODEMCU en DNMS gescheiden zijn, wordt hier beschreven. Kijk op Helmut's Github voor de andere varianten!
  In dit geval kan de verbinding tussen de NodeMCU en de DNMS wel 10 m lang zijn. Dit is belangrijk omdat u de juiste positie voor de DNMS moet vinden om nauwkeurige geluidsmetingen te verkrijgen.

### Boodschappenlijstje

##### Afzonderlijke onderdelen
* [NodeMCU ESP8266 CPUWLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 ontwikkelingsbord](https://www.pjrc.com/store/teensy40.html). Andere verkopers: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* ultra soepele siliconen kabels met een diameter van 0,15mm² (AWG 26) in 6 verschillende kleuren
<br>
De DNMS (Digitale Ruis Meet Sensor) kan gecombineerd worden met een airRohr PM-Sensor:

* [SPS30 fijnstof sensor](https://www.sparkfun.com/products/15103). Andere verkopers: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1), [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). De gebruikelijke [SDS011 PM sensor](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011) kan ook worden gebruikt.
* [BME280 6-PIN Versie, temperatuur &amp; vochtigheid](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V). Andere verkopers: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/sensoren-module/feuchtigkeit/gy-bme280-breakout-board-3in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-und-luftdruck?c=92)
* [Kabel](http://www.aliexpress.comwholesale?groupsort=1&amp;SortType=price_asc&amp;SearchText=Dupont+kabel+20cm+vrouwtje-vrouwtje)
* [USB-kabel bijv.: 2m Micro-USB plat](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040708&amp;SearchText=micro+usb+plat+kabel+2m)
* [Voeding USB](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040834&amp;SearchText=single+micro+usb+eu+voeding+toevoer)
* [Kabel riemen](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040852&amp;SearchText=cable + riemen)

De PCB's en de bescherming tegen weersinvloeden zullen hieronder worden beschreven.

<br>

Geweldig, je hebt besloten om de onderdelen online te kopen!
Helaas kan de levering dagen tot drie weken duren.
Tot dan, geniet van je leven.
