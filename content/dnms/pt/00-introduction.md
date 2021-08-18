---
title: Introdução
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
              O Noise está na versão beta. Envie perguntas para</p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community</a>
        </div>
    </div>
  </div>
</div>


> 🚧 Construa seu sensor DIY e torne-se parte da rede mundial de dados abertos e tecnologia cívica. <br> Com o DNMS (Digital Noise Measuring Sensor), você pode medir a poluição sonora por conta própria.

 <img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>


Confira as instruções originais e versões anteriores do sensor de ruído no [Github do Helmut Bitter](https://github.com/hbitter/DNMS/tree/master/Manual).

<br>

Esse repositório contém configurações diferentes para construir o sensor com diferentes tipos de placa e PCBs.
 
 <br>
 
 Existem dois tipos diferentes de configurações:
 
* uma configuração onde o NodeMCU fica com alguns sensores (PM, temperatura etc.) e o DNMS são separados. Os PCBs são chamados de AIRROHR V1.4 e DNMS - T4 V1.4
* uma versão combinada do NodeMCU e DNMS no mesmo PCB: DNMS - T4 + NodeMCU V1.4
  
 Apenas a variante em que o NODEMCU e o DNMS são separados é descrita aqui. Dê uma olhada no Github do Helmut para as outras variantes!
 
  Neste caso, a conexão entre o NodeMCU e o DNMS pode ser de até 10m. Isso é importante porque você precisa encontrar a posição certa para o DNMS para obter medições de ruído precisas.

### Lista de compras

##### Componentes individuais
* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Placa de desenvolvimento Teensy 4.0](https://www.pjrc.com/store/teensy40.html). Other sellers: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Microfone Digital ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* cabos de silicone ultraflexíveis com diâmetro de 0,15mm² (AWG 26) em 6 cores diferentes
<br>
O DNMS (Digital Noise Measuring Sensor) pode ser combinado com um sensor airRohr PM:

* [Sensor de poeira fina SPS30](https://www.sparkfun.com/products/15103). Outros vendedores: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1), [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). The usual [Sensor SDS011 PM](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011) can be used as well.
* [BME280 versão de 6 pinos, temperatura & umidade](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V). Outros vendedores: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/sensoren-module/feuchtigkeit/gy-bme280-breakout-board-3in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-und-luftdruck?c=92)
* [Cabo](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+cable+20cm+female-female)
* [Cabo USB, por exemplo: Micro-USB flat de 2 m](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+flat+cable+2m)
* [Fonte de alimentação USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [Correias para cabos](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+straps)

Os PCBs e a proteção contra intempéries serão descritos abaixo.

<br>

🙌 Ótimo, você decidiu comprar as peças online!
Infelizmente, a entrega pode demorar de dias a três semanas.
Até então, aproveite sua vida️.
