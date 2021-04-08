---
title: Konfigurēt
---
  <div class="max-w-screen-xl mx-auto pb-5">
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
                Trokšņi ir beta versijā. Sūtiet jautājumus uz</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>



### Iegūstiet ID
1. Savienojiet staciju ar USB kabeli, lai ieslēgtu sensoru.

2. Stacija mēģina izveidot savienojumu ar konfigurēto WiFi piekļuves punktu. Ja tas neizdodas, sensors atver piekļuves punktu ar nosaukumu `Particulate Matter ID` , `Feinstaubsensor-ID` vai `airRohr-ID`. ID ir **ChipID** (piemēram, 13597771). **Pierakstiet šo numuru, jo tas ir nepieciešams reģistrācijai**.

3. Pievienojieties izveidotajam piekļuves punktam. Pagaidiet, līdz izveidojas savienojums.<br>*Android*: Ja savienojums nekavējoties pārtrūkst, iespējams, ir jādeaktivizē opcija "Smart network switch" sadaļā "Connections -> WiFi -> Advanced".

4. Atveriet pārlūkprogrammu un ierakstiet [http://192.168.4.1/](http://192.168.4.1/).

> ⚠️ ** Lūdzu, ņemiet vērā** Var būt nepieciešami vairāki mēģinājumi, lai NodeMCU izveidotu savienojumu ar mājas WiFi tīklu. Lūdzu, nekļūstiet nepacietīgi un mēģiniet, līdz tas darbojas. Sensoru var konfigurēt arī, izmantojot viedtālruni. Ja sensora konfigurēšana ir izdevusies, konfigurācijas lapa vairs nav pieejama ar šo IP 192.168.4.1.

### Stacijas konfigurēšana
1. Sadaļā "Konfigurēt" ievadiet SSID (mājas WiFi tīkla nosaukumu), tīkla drošības atslēgu (operētājsistēmā Windows) vai WiFi paroli.

2. Trokšņa sensoriem (DNMS) saskaņā ar šo rokasgrāmatu papildu izmaiņas nav nepieciešamas.

3. Pēc nospiešanas Save (Saglabāt) sensors tiks restartēts un vairs nebūs pieejams šādā veidā, kad tas pieslēgsies WLAN.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Pārbaudiet staciju
Ja nav veiktas nekādas izmaiņas, izņemot WiFi tīkla datu ievadīšanu, pēc aptuveni 10 minūtēm sensoru var "testēt" nākamajās lapās. Šajās lapās ir jāmeklē ChipID (iepriekš minētajā piemērā 13597771).

 * [Sensordaten](www.madavi.de/sensor/graph.php) 
 * [WLAN-Signal](www.madavi.de/sensor/signal.php) 
        


 
