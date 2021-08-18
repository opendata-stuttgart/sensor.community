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
              Støj er i betaversion. Send spørgsmål til</p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community</a>
        </div>
    </div>
  </div>
</div>



> 🚧 Byg din gør-det-selv-sensor, og bliv en del af det verdensomspændende opendata- og civictech-netværk. <br> Med DNMS (Digital Noise Measuring Sensor) kan du selv måle støjforurening.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>


Se den oprindelige vejledning og tidligere versioner af støjsensoren på [Helmut Bitters Github](https://github.com/hbitter/DNMS/tree/master/Manual).

<br>

Dette repository indeholder forskellige opsætninger til at bygge sensoren med forskellige typer printkort og PCB'er.

<br>

Der er to forskellige former for opsætninger:

* en opsætning, hvor NodeMCU'en med nogle sensorer (PM, temperatur osv.) og DNMS'en er adskilt. PCB'erne hedder AIRROHR V1.4 og DNMS - T4 V1.4
* en kombineret version med NodeMCU og DNMS på samme printkort: DNMS - T4+NodeMCU V1.4

Kun den variant, hvor NODEMCU og DNMS er adskilt, er beskrevet her. Tag et kig på Helmut's Github for de andre varianter!

I dette tilfælde kan forbindelsen mellem NodeMCU og DNMS være op til 10 m lang. Dette er vigtigt, fordi du skal finde den rigtige position for DNMS'en for at opnå nøjagtige støjmålinger.

### Indkøbsliste

#### Enkeltkomponenter
* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 udviklingskort](https://www.pjrc.com/store/teensy40.html). Andre sælgere: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* ultrafleksible silikonekabler med en diameter på 0,15 mm² (AWG 26) i 6 forskellige farver
  <br>
  DNMS (Digital Noise Measuring Sensor) kan kombineres med en airRohr PM-sensor:

* [SPS30-fjernstøvsensor](https://www.sparkfun.com/products/15103). Andre sælgere: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1), [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). Den sædvanlige [SDS011 PM-sensor](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011) kan også anvendes.
* [BME280 6-PIN Version, temperatur og luftfugtighed](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3,3V). Andre sælgere: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/sensoren-module/feuchtigkeit/gy-bme280-breakout-board-3in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-und-luftdruck?c=92)
* [Kabel](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+kablet+20cm+female-female)
* [USB-kabel f.eks.: flad 2m Micro-USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+flad+kabel+2m)
* [Strømforsyning USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+strømforsyning+strømforsyning)
* [Kabelstropper](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+stropper)

PCB'erne og vejrbeskyttelsen vil blive beskrevet nedenfor.

<br>

🙌 Fedt, du besluttede dig for at købe delene online!
Desværre kan leveringen tage fra dage op til tre uger.
Indtil da kan du nyde dit liv️.
