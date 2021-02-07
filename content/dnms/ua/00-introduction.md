---
title: Вступ
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
              Шум знаходиться в бета-версії. Надішліть запитання</p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community</a>
        </div>
    </div>
  </div>
</div>


> 🚧 Створіть свій датчик «зроби сам» і станьте частиною всесвітньої мережі opendata та civictech. <br> За допомогою DNMS (цифровий датчик вимірювання шуму) ви можете самостійно виміряти шумове забруднення.

 <img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>


Ознайомтесь з оригінальними інструкціями та колишніми версіями датчика шуму на [Github Гельмута Біттера](https://github.com/hbitter/DNMS/tree/master/Manual).

<br>

Це сховище містить різні установки для побудови датчика з різними видами плати та друкованих плат.
 
 <br>
 
 Існує два різні типи установок:
  
* налаштування, де NodeMCU з деякими датчиками (PM, температура тощо) та DNMS розділені. Друковані плати називаються AIRROHR V1.4, а DNMS - T4 V1.4
* комбінована версія NodeMCU і DNMS на одній друкованій платі: DNMS - T4 + NodeMCU V1.4
  
Тут описаний лише варіант, де NODEMCU та DNMS розділені. Погляньте на інші варіанти Github Гельмута!
 
  У цьому випадку зв’язок між NodeMCU та DNMS може становити до 10 м. Це важливо, оскільки вам потрібно знайти правильне положення для DNMS, щоб отримати точні вимірювання шуму.

### Список покупок

##### Поодинокі компоненти
* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Рада з розробки Teensy 4.0](https://www.pjrc.com/store/teensy40.html). Інші продавці: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* надзвичайно гнучкі силіконові кабелі діаметром 0,15 мм² (AWG 26) у 6 різних кольорах
<br>
DNMS (цифровий датчик вимірювання шуму) можна поєднати з датчиком airRohr PM:

* [Датчик тонкої пилу SPS30](https://www.sparkfun.com/products/15103). Інші продавці: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1), [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). Також можна використовувати звичайний [датчик SDS011 PM](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011).
* [BME280 6-PIN Version, temperature & humidity](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V). Інші продавці: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/bauelemente/sensoren-module/feuchtigkeit/bme680-breakout-board-4in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-luftdruck-und-luftg-252-t)
* [Кабель](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+cable+20cm+female-female)
* [USB-кабель, наприклад: плоский 2 м Micro-USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+flat+cable+2m)
* [Блок живлення USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [Кабельні ремінці](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+straps)

Друковані плати та захист від атмосферних впливів будуть описані нижче.

<br>

🙌 Чудово, ви вирішили придбати запчастини через Інтернет!
На жаль, доставка може зайняти від днів до трьох тижнів.
До того часу насолоджуйся своїм життям️.
