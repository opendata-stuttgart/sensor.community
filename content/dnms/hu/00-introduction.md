---
title: Bevezetés
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
                A zaj béta verzióban van. Kérdéseket a</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>

> 🚧 Építse meg barkács érzékelőjét, és váljon a világméretű, opendata & civictech hálózat részévé. <br> A DNMS (Digitális zajmérő érzékelő) segítségével saját maga is mérheti a zajszennyezést.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>

Nézze meg a zajérzékelő eredeti utasításait és korábbi verzióit [Helmut Bitter Githubján](https://github.com/hbitter/DNMS/tree/master/Manual).

<br>
Ez az adattár különböző beállításokat tartalmaz az érzékelő építéséhez különböző típusú táblákkal és NYÁK-okkal.
<br>

Kétféle beállítás létezik:

* egy olyan beállítás, ahol a NodeMCU néhány érzékelővel (PM, hőmérséklet stb.) és a DNMS elkülönül. A nyomtatott áramköri lapok neve AIRROHR V1.4 és DNMS - T4 V1.4.
* a NodeMCU és a DNMS kombinált változata ugyanazon a NYÁK-on: DNMS - T4+NodeMCU V1.4.

Itt csak azt a változatot ismertetjük, ahol a NODEMCU és a DNMS külön van. A többi változatért nézze meg Helmut Githubját!

Ebben az esetben a NodeMCU és a DNMS közötti kapcsolat akár 10 m hosszú is lehet. Ez azért fontos, mert a pontos zajmérésekhez meg kell találni a DNMS megfelelő pozícióját.

### Vásárlási lista

##### Egyedi alkatrészek
* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 fejlesztői kártya](https://www.pjrc.com/store/teensy40.html). Egyéb eladók: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* ultra rugalmas szilikon kábelek 0,15 mm² átmérővel (AWG 26) 6 különböző színben.
  <br>
  A DNMS (digitális zajmérő érzékelő) kombinálható airRohr PM-érzékelővel:

* [SPS30 finom porérzékelő](https://www.sparkfun.com/products/15103). Egyéb eladók: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1), [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). A szokásos [SDS011 PM-érzékelő](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011) is használható.
* [BME280 6-PIN verzió, hőmérséklet és páratartalom](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V). Egyéb eladók: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/sensoren-module/feuchtigkeit/gy-bme280-breakout-board-3in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-und-luftdruck?c=92)
* [Kábel](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+kábel+20cm+női-női)
* [USB kábel pl.: lapos 2m Micro-USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+lapos+kábel+2m)
* [Tápegység USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+mikro+usb+eu+tápegység+tápegység](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+mikro+usb+eu+tápegység)
* [Kábelpántok](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+pántok)

A nyomtatott áramköri lapok és az időjárás elleni védelem az alábbiakban kerül ismertetésre.

<br>

🙌 Remek, úgy döntöttél, hogy online vásárolod meg az alkatrészeket!
Sajnos a szállítás napoktól akár három hétig is eltarthat.
Addig is élvezd az életed️.
