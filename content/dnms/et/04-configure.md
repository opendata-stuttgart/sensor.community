---
title: Konfigureeri
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
                Müra on beeta-versioonis. Saada küsimused aadressile</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>


### Get the ID
1. Ühendage jaam USB-kaabli abil anduri toiteks.

2. Jaam üritab luua ühendust konfigureeritud WiFi juurdepääsupunktiga. Kui see ei õnnestu, avab sensor juurdepääsu punkti nimega `Particulate Matter ID` , `Feinstaubsensor-ID` või `airRohr-ID`. ID on **ChipID** (näiteks 13597771). **Palun märkige see number üles, sest seda on vaja registreerimiseks**.

3. Ühendage loodud juurdepääsupunktiga. Oodake, kuni ühendus on loodud.<br>*Android*: Kui ühendus katkeb kohe, peate võib-olla deaktiveerima valiku 'Smart network switch' jaotises 'Connections -> WiFi -> Advanced'.

4. Avage brauser ja sisestage [http://192.168.4.1/](http://192.168.4.1/)

> ⚠️ **Pöörake tähelepanu** NodeMCU ühendamiseks koduse WiFi-võrguga võib kuluda paar katset. Palun ärge muutuge kannatamatuks ja proovige, kuni see töötab. Andurit saab konfigureerida ka nutitelefoni kaudu. Kui anduri konfigureerimine on toiminud, ei ole konfigureerimisleht enam kättesaadav selle IP 192.168.4.1 all.

### Jaama konfigureerimine
1. Sisestage punktis "Configure" SSID (teie koduse WiFi võrgu nimi), võrgu turvavõti (Windowsis) või WiFi parool.

2. Müraandurite (DNMS) puhul vastavalt käesolevale kasutusjuhendile ei ole vaja teha täiendavaid muudatusi

3. Pärast salvestamise vajutamist käivitub andur uuesti ja ei ole enam niimoodi kättesaadav, kui ta ühendub WLANiga.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Testige jaama
Kui peale WiFi võrguandmete sisestamise muid muudatusi ei ole tehtud, saab andurit umbes 10 minuti pärast järgmistel lehekülgedel "testida". Nendel lehekülgedel tuleb otsida ChipID (ülaltoodud näites 13597771).

* [Sensordaten](www.madavi.de/sensor/graph.php)
* [WLAN-signaal](www.madavi.de/sensor/signal.php) 
        


 


