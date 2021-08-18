---
title: Úvod
---
---
  <div class="max-w-screen-xl mx-auto pb-5">
    <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
    <div class="flex items-center">
          <span class="p-2 rounded-lg bg-indigo-500">
            <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">

            <svg>
          <span>
        <div class="flex-wrap flex">
          <p class="pt-1 text-indigo-700 font-medium">
              Hluk je v beta verzii. Otázky posielajte na adresu<p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community<a>
        <div>
    <div>
  <div>
<div>


> 🚧 Zostavte si svoj DIY senzor a staňte sa súčasťou celosvetovej siete opendata &amp; civictech. <br> Pomocou DNMS (digitálny senzor na meranie hluku) môžete sami merať hlukové znečistenie.

  <img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>


Pozrite si pôvodné pokyny a predchádzajúce verzie snímača šumu na [Github Helmuta Bittera](https://github.com/hbitter/DNMS/tree/master/Manual).

<br>

Toto úložisko obsahuje rôzne nastavenia na zostavenie senzora s rôznymi druhmi dosiek a PCB.
Toto úložisko obsahuje rôzne nastavenia na zostavenie senzora s rôznymi druhmi dosiek a PCB.
 <br>
 <br>
 Existujú dva rôzne druhy nastavení:
 Existujú dva rôzne druhy nastavení:
* nastavenie, v ktorom sú oddelené NodeMCU s niektorými snímačmi (PM, teplota atď.) a DNMS. DPS sa nazývajú AIRROHR V1.4 a DNMS - T4 V1.4
* kombinovaná verzia NodeMCU a DNMS na tej istej doske plošných spojov: DNMS - T4+NodeMCU V1.4
* kombinovaná verzia NodeMCU a DNMS na tej istej doske plošných spojov: DNMS - T4+NodeMCU V1.4
 Tu je opísaný len variant, pri ktorom sú NODEMCU a DNMS oddelené. Ostatné varianty nájdete na Helmutovom Githube!
 Tu je opísaný len variant, pri ktorom sú NODEMCU a DNMS oddelené. Ostatné varianty nájdete na Helmutovom Githube!
  V tomto prípade môže byť spojenie medzi NodeMCU a DNMS dlhé až 10 m. Je to dôležité, pretože na získanie presných meraní hluku je potrebné nájsť správnu polohu DNMS.

### Nákupný zoznam

##### Jednotlivé komponenty
* [NodeMCU ESP8266 CPUWLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Vývojová doska Teensy 4.0](https://www.pjrc.com/store/teensy40.html). Ďalší predajcovia: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* ultra flexibilné silikónové káble s priemerom 0,15 mm² (AWG 26) v 6 rôznych farbách
<br>
DNMS (digitálny senzor na meranie hluku) možno kombinovať so senzorom PM airRohr:

* [Senzor jemného prachu SPS30](https://www.sparkfun.com/products/15103). Ostatní predajcovia: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1), [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). Možno použiť aj bežný senzor [SDS011 PM](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011).
* [BME280 6-PIN verzia, teplota a vlhkosť](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040440&amp;SearchText=bme280+-5V++3,3V). Ďalší predajcovia: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/sensoren-module/feuchtigkeit/gy-bme280-breakout-board-3in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-und-luftdruck?c=92)
* [Kábel](http://www.aliexpress.comwholesale?groupsort=1&amp;SortType=price_asc&amp;SearchText=Dupont+kábel+20cm+ženský-ženský)
* [USB kábel napr.: plochý 2m Micro-USB](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040708&amp;SearchText=micro+usb+plochý+kábel+2m)
* [Napájanie USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [Káblové pásy](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040852&amp;SearchText=cable+pásy)

PCB a ochrana proti poveternostným vplyvom budú opísané nižšie.

<br>

🙌 Skvelé, rozhodli ste sa kúpiť diely online!
Bohužiaľ, doručenie môže trvať niekoľko dní až tri týždne.
Dovtedy si užívajte život️.
