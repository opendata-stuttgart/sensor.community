---
title: Įvadas
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
              Triukšmas yra beta versijoje. Klausimus siųskite adresu</p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community</a>
        </div>
    </div>
  </div>
</div>


> 🚧 Sukurkite "pasidaryk pats" jutiklį ir tapkite pasaulinio opendata ir civictech tinklo dalimi. <br> Naudodami DNMS (skaitmeninį triukšmo matavimo jutiklį) galite patys išmatuoti triukšmo taršą.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>


Originalias instrukcijas ir ankstesnes triukšmo jutiklio versijas rasite [Helmuto Bitterio "Github"](https://github.com/hbitter/DNMS/tree/master/Manual).

<br>

Toje saugykloje yra įvairių jutiklio konstravimo konfigūracijų su įvairių rūšių plokštėmis ir PCB.

<br>.

Yra dviejų skirtingų rūšių sąrankos:

* sąranka, kurioje "NodeMCU" su kai kuriais jutikliais (PM, temperatūros ir kt.) ir DNMS yra atskirti. Plokštelės vadinasi AIRROHR V1.4 ir DNMS - T4 V1.4.
* kombinuota NodeMCU ir DNMS versija toje pačioje spausdintinėje plokštėje: DNMS - T4+NodeMCU V1.4

Čia aprašomas tik variantas, kai NODEMCU ir DNMS yra atskirti. Kitų variantų ieškokite Helmuto "Github" svetainėje!

Šiuo atveju jungtis tarp NodeMCU ir DNMS gali būti net 10 m ilgio. Tai svarbu, nes norint gauti tikslius triukšmo matavimus, reikia rasti tinkamą DNMS padėtį.

### Pirkinių sąrašas

#### Pavieniai komponentai
* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 kūrimo plokštė](https://www.pjrc.com/store/teensy40.html). Kiti pardavėjai: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* itin lankstūs 0,15 mm² (AWG 26) skersmens 6 skirtingų spalvų silikoniniai kabeliai
  <br>
  DNMS (skaitmeninis triukšmo matavimo jutiklis) gali būti derinamas su "airRohr" PM jutikliu:

* [smulkių dulkių jutikliu SPS30](https://www.sparkfun.com/products/15103). Kiti pardavėjai: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1), [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). Galima naudoti ir įprastą [SDS011 kietųjų dalelių jutiklį](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011).
* [BME280 6-PIN versija, temperatūros ir drėgmės jutiklis](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3,3V). Kiti pardavėjai: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/sensoren-module/feuchtigkeit/gy-bme280-breakout-board-3in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-und-luftdruck?c=92)
* [Kabelis](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+kabelys+20cm+vyriškas-vyriškas)
* [USB kabelis, pvz.: plokščias 2 m Micro-USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+plokščias+kabelys+2m)
* [USB maitinimo šaltinis](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+mikro+usb+eu+maitinimo+šaltinis)
* [Kabelio dirželiai](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+dirželiai)

Toliau bus aprašytos spausdintinės plokštės ir apsauga nuo atmosferos poveikio.

<br>

🙌 Puiku, nusprendėte pirkti detales internetu!
Deja, pristatymas gali užtrukti nuo kelių dienų iki trijų savaičių.
Iki tol mėgaukitės gyvenimu️.
