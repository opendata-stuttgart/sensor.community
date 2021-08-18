---
title: Introduzione
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
                Noise è attualmente in beta. Inviate le vostre domande a</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>



> 🚧 Costruisci il tuo sensore fai da te e diventa parte della rete mondiale, opendata & civictech. <br> Con DNMS (Digital Noise Measuring Sensor) puoi misurare tu stesso l'inquinamento acustico.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>


Controlla le istruzioni originali e le versioni precedenti del sensore di rumore su [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Manual).

<br>

Quel repository contiene diversi setup per costruire il sensore con diversi tipi di schede e PCB.

<br>

Ci sono due diversi tipi di setup:

* un setup dove il NodeMCU con alcuni sensori (PM, temperatura ecc.) e il DNMS sono separati. I PCB sono chiamati AIRROHR V1.4 e DNMS - T4 V1.4
* una versione combinata di NodeMCU e DNMS sulla stessa PCB: DNMS - T4+NodeMCU V1.4

Qui è descritta solo la variante in cui la NODEMCU e il DNMS sono separati. Date un'occhiata al Github di Helmut per le altre varianti!

In questo caso, la connessione tra il NodeMCU e il DNMS può essere lunga fino a 10m. Questo è importante perché è necessario trovare la giusta posizione per il DNMS per ottenere misure di rumore accurate.

### Lista della spesa

##### Componenti singoli
* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Scheda di sviluppo Teensy 4.0](https://www.pjrc.com/store/teensy40.html). Altri venditori: EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* cavi in silicone ultra flessibili con un diametro di 0,15mm² (AWG 26) in 6 colori diversi
  <br>
  Il DNMS (Digital Noise Measuring Sensor) può essere combinato con un airRohr PM-Sensor:

* [SPS30 sensore di polveri sottili](https://www.sparkfun.com/products/15103). Altri venditori: TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1), [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). Si può usare anche il solito [SDS011 PM sensor](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011).
* [BME280 Versione 6-PIN, temperatura e umidità](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V). Altri venditori: Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/sensoren-module/feuchtigkeit/gy-bme280-breakout-board-3in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-und-luftdruck?c=92)
* [Cavo](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+cavo+20cm+femmina-femmina)
* [Cavo USB ad esempio: piatto 2m Micro-USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+piatto+cavo+2m)
* [Alimentazione USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [Cinghie per cavi](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+straps)

I PCB e la protezione dalle intemperie saranno descritti di seguito.

<br>

🙌 Ottimo, hai deciso di comprare i pezzi online!
Purtroppo la consegna può richiedere da giorni fino a tre settimane.
Fino ad allora goditi la tua vita️.
