---
title: Úvod
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
              Noise is in beta. Send questions to</p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community</a>
        </div>
    </div>
  </div>
</div>


> 🚧 Postavte si svůj vlastní senzor a staňte se součástí celosvětové občanské tech sítě a otevřených dat. <br> S pomocí DNMS (Digitální senzor pro měření hluku) můžete sami měřit hluk.

 <img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>


Původní pokyny a dřívější verze senzoru hluku (DNMS) můžete nalézt na [Github Helmuta Bittera](https://github.com/hbitter/DNMS/tree/master/Manual).

<br>

Jeho úložiště obsahuje různé konfigurace senzoru a návody pro jeho sestavení s více druhy desek a plošných spojů.

 <br>

Existují dva různé druhy sestavení:

* sestavení, kde je NodeMCU s několika senzory (PM, teplota, atd.) oddělené od DNMS. Plošné spoje pro toto sestavení se nazývají AIRROHR V1.4 a DNMS - T4 V1.4
* kombinovaná verze sestavení NodeMCU a DNMS na jednom plošném spoji: DNMS - T4+NodeMCU V1.4

 Zde je popsána pouze varianta, kde jsou NODEMCU a DNMS odděleny. Podívejte se na Helmutův Github pro další varianty!

  V tomto případě může být spojení mezi NodeMCU a DNMS dlouhé až 10 m. To je důležité, protože pro relevantní měření hluku musíte vhodně umístit mikrofon.

### Nákupní seznam

##### Jednotlivé komponenty
* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 development board](https://www.pjrc.com/store/teensy40.html). Ostatní prodejci: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitální Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* ultra flexibilní silikonové kabely o průměru 0,15mm² (AWG 26) v 6 různých barvách
<br>
DNMS (Digitální senzor pro měření hluku) může být zkombinován s airRohr senzorem aerosolových částic PM2,5 a PM10:

* SPS30 senzor pevných a kapalných částic](https://www.sparkfun.com/products/15103). Jiní prodejci: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1), [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). Běžně užívaný [SDS011 PM senzor](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011) lze též použít.
* [BME280 6-PIN Verze, teplota & tlak](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V). Jiní prodejci: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/bauelemente/sensoren-module/feuchtigkeit/bme680-breakout-board-4in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-luftdruck-und-luftg-252-t)
* [Kabel](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+cable+20cm+female-female)
* [USB kabel: plochý 2m Micro-USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+flat+cable+2m)
* [Napájecí USB zdroj](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [Stahovací pásky](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+straps)

Desky plošných spojů a kryt proti povětrnostním vlivům jsou popsány níže.

<br>

🙌 Skvělé, rozhodli jste se nakoupit díly online! Dodání může někdy bohužel trvat několik dní až jeden měsíc. Do té doby si užívejte života.
