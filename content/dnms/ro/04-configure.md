---
title: Configurați
---

  <div class="max-w-screen-xl mx-auto pb-5">
      <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
      <div class="flex items-centru">
            <span class="p-2 rounded-lg bg-indigo-500">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5. 436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" >
              <svg>
            <span>
        <div class="flex flex-wrap">
          <div class="flex-wrap flex">
            <p class="pt-1 text-indigo-700 font-medium">
                Zgomotul este în versiune beta. Trimiteți întrebări la<p>.
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community<a>
          <div>
           <div>
      <div>
    <div>
  <div>
  <div>
### Get the ID
1. Conectați stația cu un cablu USB pentru a alimenta senzorul.

2. Stația încearcă să se conecteze la punctul de acces WiFi configurat. Dacă acest lucru nu funcționează, senzorul deschide un punct de acces cu numele `Particulate Matter ID` , `Feinstaubsensor-ID` sau `airRohr-ID`. ID-ul este **ChipID** (de exemplu, 13597771). **Vă rugăm să notați acest număr, deoarece aveți nevoie de el pentru înregistrare**.

3. Conectați-vă la punctul de acces creat. Așteptați până când se stabilește conexiunea.<br>*Android*: Dacă conexiunea se deconectează imediat, este posibil să trebuiască să dezactivați opțiunea "Smart network switch" (Comutare inteligentă a rețelei) din "Connections -> WiFi -> Advanced" (Conexiuni -> WiFi -> Avansat)

4. Deschideți browserul și tastați [http://192.168.4.1](http://192.168.4.1)

> ⚠️ **Atenție** Este posibil să fie nevoie de câteva încercări pentru ca NodeMCU să se conecteze la rețeaua WiFi de acasă. Vă rugăm să nu vă impacientați și să încercați până când funcționează. Senzorul poate fi configurat și prin intermediul unui smartphone. În cazul în care configurarea senzorului a funcționat, pagina de configurare nu mai este accesibilă sub acest IP 192.168.4.1

### Configurați stația
1. La "Configure" (Configurare) introduceți SSID (numele rețelei WiFi de acasă), cheia de securitate a rețelei (în Windows) sau parola WiFi.

2. Pentru senzorii de zgomot (DNMS) în conformitate cu prezentul manual, nu sunt necesare alte modificări

3. După ce apăsați Salvare, senzorul se va reporni și nu mai este accesibil în acest mod atunci când se conectează la WLAN.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>
<br>

### Testează stația
Dacă nu au fost efectuate alte modificări decât introducerea datelor rețelei WiFi, senzorul poate fi "testat" pe paginile următoare după aproximativ 10 minute. Pe aceste pagini trebuie să căutați ChipID (în exemplul de mai sus, 13597771).

 * [Date senzoriale](www.madavi.de/sensor/graph.php)
 * [WLAN-Signal](www.madavi.de/sensor/signal.php)
 * [WLAN-Signal](www.madavi.de/sensor/signal.php)



