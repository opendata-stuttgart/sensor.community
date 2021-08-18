---
title: Ievads
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
              Trokšņi ir beta versijā. Sūtiet jautājumus uz<p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community</a>
        </div>
    </div>
  </div>
</div>


> 🚧 Izveido savu DIY sensoru un kļūsti par daļu no pasaules opendata & civictech tīkla. <br> Ar DNMS (digitālo trokšņa mērīšanas sensoru) jūs varat paši izmērīt trokšņa piesārņojumu.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>


Iepazīstieties ar trokšņu sensora oriģinālajām instrukcijām un iepriekšējām versijām [Helmut Bitter Github](https://github.com/hbitter/DNMS/tree/master/Manual).

<br>

Minētajā repozitorijā ir ietverti dažādi iestatījumi sensora uzbūvei, izmantojot dažāda veida plates un PCB.

<br>

Ir divu veidu iestatījumi:

* iestatījums, kurā NodeMCU ar dažiem sensoriem (PM, temperatūras utt.) un DNMS ir atdalīti. PCB sauc AIRROHR V1.4 un DNMS - T4 V1.4.
* kombinētā NodeMCU un DNMS versija uz vienas PCB: DNMS - T4+NodeMCU V1.4.

Šeit ir aprakstīts tikai variants, kurā NODEMCU un DNMS ir atdalīti. Pārējos variantus apskatiet Helmuta Github vietnē!

Šajā gadījumā savienojums starp NodeMCU un DNMS var būt pat 10 m garš. Tas ir svarīgi, jo ir jāatrod DNMS pareizā atrašanās vieta, lai iegūtu precīzus trokšņa mērījumus.

### Iepirkumu saraksts

##### Atsevišķi komponenti
* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 izstrādes plate](https://www.pjrc.com/store/teensy40.html). Citi pārdevēji: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board).
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).
* īpaši elastīgi silikona kabeļi ar diametru 0,15 mm² (AWG 26) 6 dažādās krāsās.
  <br>
  DNMS (digitālo trokšņa mērīšanas sensoru) var kombinēt ar airRohr PM sensoru:

* [smalko putekļu sensoru SPS30](https://www.sparkfun.com/products/15103). Citi pārdevēji: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1), [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). Var izmantot arī parasto [SDS011 PM sensoru](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011).
* [BME280 6-PIN versija, temperatūra un mitrums](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3,3V). Citi pārdevēji: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/sensoren-module/feuchtigkeit/gy-bme280-breakout-board-3in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-und-luftdruck?c=92).
* [Kabelis](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+kabeļš+20cm+vīriešu-vīriešu)
* [USB kabelis, piemēram: plakans 2m Micro-USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+plakans+kabeļš+2m).
* [USB barošanas bloks](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [Kabeļa siksnas](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+siksnas)

PCB un aizsardzība pret laikapstākļiem tiks aprakstīta tālāk.

<br>

🙌 Lieliski, jūs nolēmāt iegādāties detaļas tiešsaistē!
Diemžēl piegāde var aizņemt no dažām dienām līdz pat trim nedēļām.
Līdz tam baudiet savu dzīvi️.
