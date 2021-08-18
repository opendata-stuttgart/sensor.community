---
title: Sissejuhatus
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
                Müra on beeta-versioonis. Saada küsimused aadressile</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>



> 🚧 Ehita oma DIY-sensor ja saa osa ülemaailmsest, opendata & civictech võrgustikust. <br> DNMS (Digital Noise Measuring Sensor) abil saate ise mõõta mürasaastet.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>


Vaadake müraanduri originaaljuhiseid ja varasemaid versioone [Helmut Bitteri Githubis](https://github.com/hbitter/DNMS/tree/master/Manual).

<br>

See repositoorium sisaldab erinevaid seadistusi anduri ehitamiseks erinevate plaatide ja PCB-dega.

<br>

Seal on kaks erinevat tüüpi seadistusi:

* seadistus, kus NodeMCU koos mõne anduriga (PM, temperatuur jne) ja DNMS on eraldi. Trükkplaate nimetatakse AIRROHR V1.4 ja DNMS - T4 V1.4.
* NodeMCU ja DNMS kombineeritud versioon samal trükkplaadil: DNMS - T4+NodeMCU V1.4.

Siin on kirjeldatud ainult seda varianti, kus NODEMCU ja DNMS on eraldatud. Vaadake Helmut'i Githubis teisi variante!

Sellisel juhul võib NodeMCU ja DNMS vaheline ühendus olla kuni 10 m pikk. See on oluline, sest DNMSi jaoks tuleb leida õige asukoht, et saada täpseid müramõõtmisi.

### Ostunimekiri

##### Üksikud komponendid
* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 arendusplaat](https://www.pjrc.com/store/teensy40.html). Muud müüjad: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* ülipaindlikud silikoonkaablid läbimõõduga 0,15mm² (AWG 26) 6 eri värvitoonis.
  <br>
  DNMS (digitaalne müra mõõtmise andur) on kombineeritav airRohr PM-anduriga:

* [SPS30 peentolmuanduriga](https://www.sparkfun.com/products/15103). Muud müüjad: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1), [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). Võib kasutada ka tavalist [SDS011 PM-andurit](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011).
* [BME280 6-PIN versioon, temperatuur ja niiskus](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V). Muud müüjad: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/sensoren-module/feuchtigkeit/gy-bme280-breakout-board-3in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-und-luftdruck?c=92)
* [Kaabel](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+kaabel+20cm+naine-naine)
* [USB-kaabel nt: lame 2m Micro-USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+lame+kaabel+2m)
* [toiteallikas USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+mikro+usb+eu+toiteallikas+toiteallikas)
* [kaabli rihmad](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+rihmad)

Trükkplaate ja ilmastikukaitset kirjeldatakse allpool.

<br>

🙌 Suurepärane, sa otsustasid osta osad veebist!
Kahjuks võib tarne võtta päevadest kuni kolme nädalani.
Seniks naudi oma elu️.