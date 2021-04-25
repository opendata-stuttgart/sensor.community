---
title: Konfigūruoti
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
                Triukšmas yra beta versijoje. Klausimus siųskite adresu</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>

### Gaukite ID
1. Prijunkite stotį USB kabeliu, kad įjungtumėte jutiklį.
2. Stotis bando prisijungti prie sukonfigūruoto "WiFi" prieigos taško. Jei tai nepavyksta, jutiklis atidaro prieigos tašką su pavadinimu `Particulate Matter ID` , `Feinstaubsensor-ID` arba `airRohr-ID`. ID yra **ChipID** (pavyzdžiui, 13597771). **Prašome užsirašyti šį numerį, nes jis reikalingas registracijai**.
3. Prisijunkite prie sukurto prieigos taško. Palaukite, kol bus užmegztas ryšys.<br>*Android*: Jei ryšys iš karto nutrūksta, gali tekti išjungti parinktį "Smart network switch" (išmanusis tinklo perjungimas), esančią "Connections -> WiFi -> Advanced" (Ryšiai -> "WiFi" -> "Advanced").
4. Atidarykite naršyklę ir įveskite [http://192.168.4.1/](http://192.168.4.1/).

> ⚠️ **Atkreipkite dėmesį** Gali prireikti kelių bandymų, kad "NodeMCU" prisijungtų prie namų "WiFi" tinklo. Nebūkite nekantrūs ir bandykite, kol pavyks prisijungti. Jutiklį taip pat galima konfigūruoti per išmanųjį telefoną. Jei jutiklio konfigūravimas pavyko, konfigūravimo puslapis nebėra pasiekiamas šiuo IP 192.168.4.1

### Konfigūruokite stotį
1. Srityje "Konfigūruoti" įveskite SSID (namų WiFi tinklo pavadinimą), tinklo saugumo raktą (sistemoje "Windows") arba WiFi slaptažodį.
2. Triukšmo jutikliams (DNMS) pagal šį vadovą jokių papildomų pakeitimų atlikti nereikia
3. Paspaudus Išsaugoti, jutiklis bus paleistas iš naujo ir nebebus pasiekiamas tokiu būdu prisijungus prie WLAN.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Išbandykite stotį
Jei nebuvo atlikta jokių pakeitimų, išskyrus "WiFi" tinklo duomenų įvedimą, maždaug po 10 minučių jutiklį galima "išbandyti" tolesniuose puslapiuose. Šiuose puslapiuose reikia ieškoti ChipID (aukščiau pateiktame pavyzdyje 13597771).

* [Sensordaten](www.madavi.de/sensor/graph.php)
* [WLAN-signalas](www.madavi.de/sensor/signal.php) 
        




