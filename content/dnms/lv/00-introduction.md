---
title: Ievads
---
---
  <div class="max-w-screen-xl mx-auto pb-5">
    <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
    <div class="flex items-center">
          <span class="p-2 rounded-lg bg-indigo-500">
            <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5. 436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" >
            </svg>
          </span>
        <div class="flex-wrap flex">
          <p class="pt-1 text-indigo-700 font-medium">
              Trokšņi ir beta versijā. Sūtiet jautājumus uz<p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-whover:text-yellow-600">
                Noise@Sensor.Community</a>
        </div>
    </div>
  </div>
</div>


> 🚧 Izveido savu DIY sensoru un kļūsti par daļu no pasaules opendata &amp; civictech tīkla. <br> Ar DNMS (digitālo trokšņa mērīšanas sensoru) jūs varat paši izmērīt trokšņa piesārņojumu.

 <img src="..docsdnmsdnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy">


Sākotnējās instrukcijas un iepriekšējās trokšņu sensora versijas skatiet [Helmut Bitter's Github](https://github.comhbitterDNMStreemasterManual).

<br>

Šajā repozitorijā ir dažādi iestatījumi sensora izveidei, izmantojot dažāda veida plates un PCB.
Šajā repozitorijā ir dažādi iestatījumi sensora izveidei, izmantojot dažāda veida plates un PCB.
 <br>
 <br>
 Ir divu veidu iestatījumi:
 Ir divu veidu iestatījumi:
* konfigurācija, kurā NodeMCU ar dažiem sensoriem (PM, temperatūra u. c.) un DNMS ir atdalīti. PCB sauc AIRROHR V1.4 un DNMS - T4 V1.4.
* kombinētā NodeMCU un DNMS versija uz vienas PCB: DNMS - T4+NodeMCU V1.4.
* kombinētā NodeMCU un DNMS versija uz vienas PCB: DNMS - T4+NodeMCU V1.4.
 Šeit ir aprakstīts tikai variants, kurā NODEMCU un DNMS ir atdalīti. Pārējos variantus apskatiet Helmuta Github vietnē!
 Šeit ir aprakstīts tikai variants, kurā NODEMCU un DNMS ir atdalīti. Pārējos variantus apskatiet Helmuta Github vietnē!
  Šādā gadījumā savienojums starp mezgla mezgluMCU un DNMS var būt līdz pat 10 m garš. Tas ir svarīgi, jo ir jāatrod DNMS pareizā atrašanās vieta, lai iegūtu precīzus trokšņa mērījumus.

### Iepirkumu saraksts

##### Atsevišķas sastāvdaļas
* [NodeMCU ESP8266 CPUWLAN](https://www.aliexpress.comwholesale?groupsort=1&amp;SortType=price_asc&amp;SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 izstrādes plate](https://www.pjrc.comstoreteensy40.html). Citi pārdevēji: [EXPTECH](https://www.exp-tech.deplattformenteensy9596teensy-4.0-development-board), [Antratek](https://www.antratek.deteensy-4-0), [PIMORONI](https://shop.pimoroni.comproductsteensy-4-0-development-board).
* [Digitales Mikrofon ICS-43434](https://www.tindie.comproductsonehorseics43434-i2s-digital-microphone)
* īpaši elastīgi silikona kabeļi ar diametru 0,15 mm² (AWG 26) 6 dažādās krāsās.
<br>
DNMS (digitālo trokšņa mērīšanas sensoru) var kombinēt ar airRohr PM sensoru:

* SPS30 smalko putekļu sensors](https://www.sparkfun.comproducts15103). Citi pārdevēji: [TME](https://www.tme.eudedetailssps30gassensorensensirion1-101638-10?brutto=1), [SOS electronic](https://www.soselectronic.deproductssensirionsps30-2-304234). Var izmantot arī parasto [SDS011 PM sensoru](https://de.aliexpress.comwholesale?catId=0&amp;initiative_id=AS_20200813122806&amp;SearchText=sds011).
* [BME280 6-PIN versija, temperatūra un mitrums] (https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040440&amp;SearchText=bme280+-5V++3.3V). Citi pārdevēji: [Nettigo](https://nettigo.euproductsmodule-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.debauelementesensoren-modulefeuchtigkeitbme680-breakout-board-4in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-luftdruck-und-luftg-252-t).
* [Cable] (http://www.aliexpress.comwholesale?groupsort=1&amp;SortType=price_asc&amp;SearchText=Dupont+cable+20cm+female-female)
* [USB kabelis, piemēram: plakans 2 m Micro-USB](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040708&amp;SearchText=micro+usb+plakans+kabeļš+2m)
* [USB barošanas bloks](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040834&amp;SearchText=single+micro+usb+eu+power+supply)
* [Kabeļu siksnas](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040852&amp;SearchText=cable+siksnas)








