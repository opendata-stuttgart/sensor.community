---
title: Introduction
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
              Hałas jest w fazie beta. Wyślij pytania do</p></p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community</a>
        </div>
    </div>
  </div>
</div>


> 🚧 Zbuduj swój czujnik DIYY i stań się częścią światowej sieci opendata i civictech. Dzięki DNMS (Digital Noise Measuring Sensor) możesz samodzielnie mierzyć poziom hałasu.

 <img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>


Sprawdź oryginalne instrukcje i poprzednie wersje czujnika hałasu na [Helmut Bitter's Github] (https://github.com/hbitter/DNMS/tree/master/Manual).

<br>

To repozytorium zawiera różne konfiguracje do budowy czujnika z różnych rodzajów płytek i płytek drukowanych.
 
 <br>
 
 Istnieją dwa różne rodzaje ustawień:
 
* konfiguracja, w której NodeMCU z niektórymi czujnikami (PM, temperatura itp.) i DNMS są rozdzielone. Płytki drukowane nazywają się AIRROHR V1.4 a DNMS - T4 V1.4.
* połączona wersja NodeMCU i DNMS na tej samej płytce PCB: DNMS - T4+NodeMCU V1.4
  
 Opisany jest tu tylko wariant, w którym NODEMCU i DNMS są rozdzielone. Spójrz na Helmut's Github dla pozostałych wariantów!
 
  W tym przypadku połączenie pomiędzy NodeMCU i DNMS może mieć długość nawet 10 m. Jest to ważne, ponieważ należy znaleźć odpowiednie położenie DNMS, aby uzyskać dokładne pomiary hałasu.

### Lista zakupów

##### Pojedyncze komponenty
* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 development board](https://www.pjrc.com/store/teensy40.html). Inni sprzedawcy: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* ultra elastyczne kable silikonowe o średnicy 0,15 mm² (AWG 26) w 6 różnych kolorach
<br>
Czujnik DNMS (Digital Noise Measuring Sensor) może być połączony z czujnikiem PM AirRohr:

* SPS30 Czujnik drobnego pyłu](https://www.sparkfun.com/products/15103).  Inni sprzedawcy: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1), [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). Można również zastosować zwykły czujnik [SDS011 PM sensor](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011) can be used as well.
* [BME280 6-PIN Version, temperatura i wilgotność](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V). Inni sprzedawcy: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/bauelemente/sensoren-module/feuchtigkeit/bme680-breakout-board-4in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-luftdruck-und-luftg-252-t)
* [Przewód](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+cable+20cm+female-female)
* [Przewód USB np.: płaski 2m Micro-USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+flat+cable+2m)
* [Zasilacz USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [Taśmy kablowe](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+straps)

Poniżej opisane zostaną płytki drukowane i ochrona przed warunkami atmosferycznymi.

<br>

🙌 Świetnie, zdecydowałeś się na zakup części online! 
Niestety dostawa może trwać od dni do trzech tygodni. 
Do tego czasu można korzystać z witryny life️.
