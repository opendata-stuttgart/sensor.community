---
title: Introducción
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
              Noise is in beta. Send questions to</p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community</a>
        </div>
    </div>
  </div>
</div>


> 🚧 Construye tu sensor de bricolaje y conviértete en parte de la red mundial, opendata & civictech. <Con el DNMS (Sensor Digital de Medición de Ruido) puedes medir la contaminación acústica por ti mismo.

 <img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>


Echa un vistazo a las instrucciones originales y a las versiones anteriores del sensor de ruido en [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Manual).

<br>

Ese depósito contiene diferentes configuraciones para construir el sensor con diferentes tipos de placas y PCBs.
 
 <br>
 
 Hay dos tipos diferentes de configuraciones:
  
 * una configuración en la que el NodeMCU con algunos sensores (PM, temperatura, etc.) y el DNMS están separados. Los PCBs se llaman AIRROHR V1.4 y DNMS - T4 V1.4
 * Una versión combinada del NodeMCU y el DNMS en el mismo PCB: DNMS - T4+NodeMCU V1.4
   
  Sólo se describe aquí la variante en la que el NODEMCU y el DNMS están separados. Echa un vistazo al Github de Helmut para ver las otras variantes!
  
   En este caso, la conexión entre el NodeMCU y el DNMS puede ser tan larga como 10m. Esto es importante porque es necesario encontrar la posición correcta de la DNMS para obtener mediciones de ruido precisas.
 

### Lista de compras

##### Componentes individuales
* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 development board](https://www.pjrc.com/store/teensy40.html). Otros vendedores: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* Cables de silicona ultra flexibles con un diámetro de 0,15mm² (AWG 26) en 6 colores diferentes
<br>
El DNMS (Digital Noise Measuring Sensor) puede ser combinado con un sensor PM de airRohr:

* SPS30 fine dust sensor](https://www.sparkfun.com/products/15103). Otros vendedores: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1), [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). También se puede utilizar el habitual [SDS011 PM sensor](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011).
* [BME280 6-PIN Version, temperature & humidity](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V). Other sellers: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/bauelemente/sensoren-module/feuchtigkeit/bme680-breakout-board-4in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-luftdruck-und-luftg-252-t)
* [Cable](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+cable+20cm+female-female)
* [USB cable e.g.: flat 2m Micro-USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+flat+cable+2m)
* [Power supply USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [Cable straps](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+straps)

Los PCB y la protección climática se describirán a continuación.

<br>

🙌 ¡Genial, has decidido comprar las piezas en línea! 
Desafortunadamente la entrega puede tardar desde días hasta tres semanas. 
