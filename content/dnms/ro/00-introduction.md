---
title: Introducere
---
---
  <div class="max-w-screen-xl mx-auto pb-5">
    <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
    <div class="flex items-centru">
          <span class="p-2 rounded-lg bg-indigo-500">
            <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5. 436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" >
            <svg>
          <span>
        <div class="flex-wrap flex">
          <p class="pt-1 text-indigo-700 font-medium">
              Zgomotul este în versiune beta. Trimiteți întrebări la<p>.
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community<a>
        <div>
    <div>
  <div>
<div>


> 🚧 Construiește-ți un senzor DIY și fă parte din rețeaua mondială opendata &amp; civictech. <br> Cu DNMS (Digital Noise Measuring Sensor) puteți măsura singuri poluarea fonică.

  <img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>


Consultați instrucțiunile originale și versiunile anterioare ale senzorului de zgomot pe [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Manual).

<br>

Acest depozit conține diferite configurații pentru a construi senzorul cu diferite tipuri de plăci și PCB-uri.
Acest depozit conține diferite configurații pentru a construi senzorul cu diferite tipuri de plăci și PCB-uri.
 <br>
 <br>
 Există două tipuri diferite de configurații:
 Există două tipuri diferite de configurații:
* o configurație în care NodeMCU cu unii senzori (PM, temperatură etc.) și DNMS sunt separate. PCB-urile se numesc AIRROHR V1.4 și DNMS - T4 V1.4.
* o versiune combinată a NodeMCU și DNMS pe același PCB: DNMS - T4+NodeMCU V1.4.
* o versiune combinată a NodeMCU și DNMS pe același PCB: DNMS - T4+NodeMCU V1.4.
 Aici este descrisă numai varianta în care NODEMCU și DNMS sunt separate. Aruncați o privire pe Github-ul lui Helmut pentru celelalte variante!
 Aici este descrisă numai varianta în care NODEMCU și DNMS sunt separate. Aruncați o privire pe Github-ul lui Helmut pentru celelalte variante!
  În acest caz, conexiunea dintre NodeMCU și DNMS poate fi de până la 10 m. Acest lucru este important deoarece trebuie să găsiți poziția corectă pentru DNMS pentru a obține măsurători precise ale zgomotului.

### Lista de cumpărături

##### Componente unice
* [NodeMCU ESP8266 CPUWLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Placa de dezvoltare Teensy 4.0](https://www.pjrc.com/store/teensy40.html). Alți vânzători: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* cabluri ultra flexibile din silicon cu un diametru de 0,15mm² (AWG 26) în 6 culori diferite
<br>
Senzorul DNMS (Digital Noise Measuring Sensor) poate fi combinat cu un senzor PM de la airRohr:

* [Senzor de praf fin SPS30](https://www.sparkfun.com/products/15103). Alți vânzători: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1), [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). Se poate utiliza și senzorul obișnuit [SDS011 PM sensor](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011).
* [Versiunea BME280 6-PIN, temperatură și umiditate](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V). Alți vânzători: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/sensoren-module/feuchtigkeit/gy-bme280-breakout-board-3in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-und-luftdruck?c=92)
* [Cablu](http://www.aliexpress.comwholesale?groupsort=1&amp;SortType=price_asc&amp;SearchText=Dupont+cablu+20cm+femelă-femelă)
* [Cablu USB, de exemplu: plat 2m Micro-USB](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040708&amp;SearchText=micro+usb+bucată+cablu+2m)
* [Sursă de alimentare USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [Curele de cablu](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+straps)

PCB-urile și protecția împotriva intemperiilor vor fi descrise mai jos.

<br>

🙌 Minunat, te-ai decis să cumperi piesele online!
Din păcate, livrarea poate dura de la câteva zile până la trei săptămâni.
Până atunci bucurați-vă de viață️.
