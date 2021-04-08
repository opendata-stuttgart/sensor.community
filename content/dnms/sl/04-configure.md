---
title: Konfiguracija spletne strani
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
              Hrup je v beta različici. Vprašanja pošljite na<p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community</a>
        </div>
    </div>
  </div>
</div>

### Pridobite ID
1. Postajo povežite s kablom USB, da napolnite senzor.

2. Postaja se poskuša povezati z nastavljeno dostopno točko WiFi. Če to ne uspe, senzor odpre dostopno točko z imenom `Particulate Matter ID` , `Feinstaubsensor-ID` ali `airRohr-ID`. ID je **ChipID** (na primer 13597771). **To številko si zapišite, saj jo potrebujete za registracijo**.

3. Povežite se z ustvarjeno dostopno točko. Počakajte, da se vzpostavi povezava.<br>*Android*: Če se povezava takoj prekine, boste morda morali deaktivirati možnost "Smart network switch" v razdelku "Connections -> WiFi -> Advanced".

4. Odprite brskalnik in vnesite [http://192.168.4.1/](http://192.168.4.1/)

> ⚠️ **Upoštevajte** Morda bo potrebnih nekaj poskusov, da se bo naprava NodeMCU povezala z domačim omrežjem WiFi. Ne bodite nestrpni in poskušajte, dokler ne bo delovalo. Senzor lahko konfigurirate tudi prek pametnega telefona. Če je konfiguracija senzorja delovala, stran za konfiguracijo ni več dostopna pod tem IP 192.168.4.1

#### Konfiguracija postaje
1. Pod "Configure" (Konfiguriranje) vnesite SSID (ime domačega omrežja WiFi), varnostni ključ omrežja (v sistemu Windows) ali geslo WiFi.

2. Za senzorje hrupa (DNMS) v skladu s tem priročnikom nadaljnje spremembe niso potrebne.

3. Po pritisku na gumb shrani se senzor ponovno zažene in ni več dostopen na ta način, ko se poveže z omrežjem WLAN.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

#### Preizkusite postajo
Če razen vnosa podatkov o omrežju WiFi niste izvedli nobenih drugih sprememb, lahko senzor po približno 10 minutah "preizkusite" na naslednjih straneh. Na teh straneh morate poiskati ChipID (v zgornjem primeru 13597771).

* [Sensordaten](www.madavi.de/sensor/graph.php)
* [WLAN-Signal](www.madavi.de/sensor/signal.php)



