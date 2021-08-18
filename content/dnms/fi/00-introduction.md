---
title: Johdanto
---
---
  <div class="max-w-screen-xl mx-auto pb-5">
    <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
    <div class="flex items-center">
          <span class="p-2 rounded-lg bg-indigo-500">
            <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5. 436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" >
            <svg>
          <span>
        <div class="flex-wrap flex">
          <p class="pt-1 text-indigo-700 font-medium">
              Noise on beta-versiossa. Lähetä kysymyksiä osoitteeseen<p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community<a>
        <div>
    <div>
  <div>
<div>


> 🚧 Rakenna DIY-anturi ja tule osaksi maailmanlaajuista opendata &amp; civictech -verkostoa. <br> DNMS:n (Digital Noise Measuring Sensor) avulla voit mitata melusaastetta itse.

  <img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>


Tutustu alkuperäisiin ohjeisiin ja meluanturin aiempiin versioihin [Helmut Bitterin Githubissa](https://github.com/hbitter/DNMS/tree/master/Manual).

<br>

Kyseinen arkisto sisältää erilaisia kokoonpanoja anturin rakentamiseksi erilaisilla levyillä ja piirilevyillä.
Kyseinen arkisto sisältää erilaisia kokoonpanoja anturin rakentamiseksi erilaisilla levyillä ja piirilevyillä.
 <br>
 <br>
 Asetuksia on kahta eri tyyppiä:
 Asetuksia on kahta eri tyyppiä:
* asetelma, jossa NodeMCU, jossa on joitakin antureita (PM, lämpötila jne.), ja DNMS on erotettu toisistaan. Piirilevyjen nimet ovat AIRROHR V1.4 ja DNMS - T4 V1.4.
* NodeMCU:n ja DNMS:n yhdistetty versio samalla piirilevyllä: DNMS - T4+NodeMCU V1.4.
* NodeMCU:n ja DNMS:n yhdistetty versio samalla piirilevyllä: DNMS - T4+NodeMCU V1.4.
 Tässä kuvataan vain se vaihtoehto, jossa NODEMCU ja DNMS on erotettu toisistaan. Katso Helmutin Githubista muut vaihtoehdot!
 Tässä kuvataan vain se vaihtoehto, jossa NODEMCU ja DNMS on erotettu toisistaan. Katso Helmutin Githubista muut vaihtoehdot!
  Tässä tapauksessa NodeMCU:n ja DNMS:n välinen yhteys voi olla jopa 10 metriä pitkä. Tämä on tärkeää, koska DNMS:lle on löydettävä oikea sijainti tarkkojen melumittausten saamiseksi.

### Ostoslista

##### Yksittäiset komponentit
* [NodeMCU ESP8266 CPUWLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 -kehitysalusta](https://www.pjrc.com/store/teensy40.html). Muut myyjät: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board).
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* erittäin taipuisat silikonikaapelit, joiden halkaisija on 0,15 mm² (AWG 26), 6 eri väriä.
<br>
DNMS (Digital Noise Measuring Sensor) voidaan yhdistää airRohr PM-anturiin:

* SPS30 hienopölyanturi](https://www.sparkfun.com/products/15103). Muut myyjät: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1), [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). Myös tavallista [SDS011 PM-anturia](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011) voidaan käyttää.
* [BME280 6-PIN versio, lämpötila ja kosteus](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040440&amp;SearchText=bme280+-5V ++3.3V). Muut myyjät: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/sensoren-module/feuchtigkeit/gy-bme280-breakout-board-3in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-und-luftdruck?c=92).
* [Kaapeli](http://www.aliexpress.comwholesale?groupsort=1&amp;SortType=price_asc&amp;SearchText=Dupont+kaapeli+20cm+naaras-naaras)
* [USB-kaapeli esim.: litteä 2m Micro-USB](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040708&amp;SearchText=micro+usb+litteä+kaapeli+2m)
* [Virtalähde USB](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040834&amp;SearchText=single+micro+usb+eu+virtalähde)
* [Kaapelihihnat](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040852&amp;SearchText=cable+hihnat)

Jäljempänä kuvataan piirilevyt ja sääsuojaus.

<br>

🙌 Hienoa, päätit ostaa osat netistä!
Valitettavasti toimitus voi kestää päivistä jopa kolmeen viikkoon.
Siihen asti nauti elämästäsi.
