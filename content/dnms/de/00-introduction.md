---
title: Einleitung
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
                Noise befindet sich in der Beta-Phase. Senden deine Fragen an</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>

<br>

> 🚧 Bauen deinen DIY-Sensor und werden ein Teil des weltweiten, opendata & civictech Netzwerks. <br> Mit dem DNMS (Digital Noise Measuring Sensor) kannst du die Lärmbelastung selbst messen.

 <img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>

 <br>

Es gibt zwei verschiedene Setups:  

* Die NodeMCU mit Sensoren (PM, Temperatur etc.) und das DNMS sind getrennt. Die Platinen heißen AIRROHR V1.4 und DNMS - T4 V1.4
* Eine kombinierte Version auf der gleichen Platine: DNMS - T4 + NodeMCU V1.4

Hier wird nur die erste Variante beschrieben. Die anderen Variante des Lärmsensors gibt es auf [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Manual).   
In der Variante kann die Verbindung zwischen dem NodeMCU und dem DNMS bis zu 10m lang sein. Dies ist wichtig, weil man die richtige Position für den DNMS finden muss, um genaue Rauschmessungen zu erhalten.

### Einkaufsliste

##### Einzelne Komponenten
* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 Entwicklungsboard](https://www.pjrc.com/store/teensy40.html). Andere Anbieter: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* ultraflexible Silikonkabel mit einem Durchmesser von 0,15mm² (AWG 26) in 6 verschiedenen Farben
  <br>


##### Einzelne KomponentenDer für die airRohr-DNMS-Kombi:
* [SPS30 Feinstaubsensor](https://www.sparkfun.com/products/15103). Andere Anbieter: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1), [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). Der [SDS011 Feinstaubsensor](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011) kann ebenfalls verwendet werden.
* [BME280 6-PIN Version, temperature & humidity](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V). Andere Anbieter®: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/sensoren-module/feuchtigkeit/gy-bme280-breakout-board-3in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-und-luftdruck?c=92)
* [Kabel](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+cable+20cm+female-female)
* [USB-Kabel z.B.: flach 2m Micro-USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+flat+cable+2m)
* [USB-Netzteil](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [Kabelbinder](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+straps)

Die Leiterplatten und der Wetterschutz werden unten beschrieben.

<br>

🙌 Toll, du hast dich entschieden, die Teile online zu kaufen! Leider kann die Lieferung einige Tagen oder bis zu drei Wochen dauern. Genieße bis dahin dein Leben.