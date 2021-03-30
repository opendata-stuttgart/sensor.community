---
title: Introduzione
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
              Noise è in beta. Invia domande a<p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community<a>
        <div>
    <div>
  <div>
<div>


> 🚧 Costruisci il tuo sensore fai da te e diventa parte della rete mondiale, opendata &amp; civictech. <br> Con DNMS (Digital Noise Measuring Sensor) puoi misurare da solo l'inquinamento acustico.

 <img src="..docsdnmsdnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy">


Controlla le istruzioni originali e le versioni precedenti del sensore di rumore su [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Manual).

<br>

Questo repository contiene diverse configurazioni per costruire il sensore con diversi tipi di schede e PCB.
Questo repository contiene diverse configurazioni per costruire il sensore con diversi tipi di schede e PCB.
 <br>
 <br>
 Ci sono due diversi tipi di setup:
 Ci sono due diversi tipi di setup:
* una configurazione in cui il NodeMCU con alcuni sensori (PM, temperatura ecc.) e il DNMS sono separati. I PCB sono chiamati AIRROHR V1.4 e DNMS - T4 V1.4
* una versione combinata di NodeMCU e DNMS sulla stessa PCB: DNMS - T4+NodeMCU V1.4
* una versione combinata di NodeMCU e DNMS sulla stessa PCB: DNMS - T4+NodeMCU V1.4
 Qui è descritta solo la variante in cui il NODEMCU e il DNMS sono separati. Date un'occhiata al Github di Helmut per le altre varianti!
 Qui è descritta solo la variante in cui il NODEMCU e il DNMS sono separati. Date un'occhiata al Github di Helmut per le altre varianti!
  In questo caso, la connessione tra il NodeMCU e il DNMS può essere lunga fino a 10m. Questo è importante perché è necessario trovare la giusta posizione per il DNMS per ottenere misure di rumore accurate.

### Lista della spesa

##### Componenti singoli
* [NodeMCU ESP8266 CPUWLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Scheda di sviluppo Teensy 4.0](https://www.pjrc.com/store/teensy40.html). Altri venditori: EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* cavi in silicone ultra flessibili con un diametro di 0,15mm² (AWG 26) in 6 colori diversi
<br>
Il DNMS (Digital Noise Measuring Sensor) può essere combinato con un airRohr PM-Sensor:

* Sensore di polvere fine SPS30](https://www.sparkfun.com/products/15103). Altri venditori: TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1), [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). Si può usare anche il solito [SDS011 PM sensor](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011).
* [Versione BME280 6-PIN, temperatura e umidità] (https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V). Altri venditori: Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/bauelemente/sensoren-module/feuchtigkeit/bme680-breakout-board-4in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-luftdruck-und-luftg-252-t)
* [Cavo](http://www.aliexpress.comwholesale?groupsort=1&amp;SortType=price_asc&amp;SearchText=Dupont+cavo+20cm+femmina-femmina)
* [Cavo USB per esempio: piatto 2m Micro-USB] (https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040708&amp;SearchText=micro+usb+piatto+cavo+2m)
* [Alimentazione USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [Cinghie per cavi](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+straps)

I PCB e la protezione dalle intemperie saranno descritti di seguito.

<br>

🙌 Fantastico, hai deciso di comprare i pezzi online!
Purtroppo la consegna può richiedere da giorni a tre settimane.
Fino ad allora goditi la tua vita️.
