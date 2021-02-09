---
title: Configure
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
                Hałas jest w fazie beta. Wyślij pytania do</p>  
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>
    
## Get the ID
1. Podłączyć stację za pomocą kabla USB do zasilania czujnika

2. Stacja próbuje się połączyć z skonfigurowanym punktem dostępu WiFi. Jeśli to nie działa, czujnik otwiera punkt dostępowy o nazwie `Particulate Matter ID` , `Feinstaubsensor-ID` lub `airRohr-ID`. ID to **ChipID** (na przykład 13597771). **Proszę zanotować ten numer w dół, ponieważ jest on potrzebny do rejestracji**

3. Połącz się z utworzonym punktem dostępowym. Poczekaj, aż połączenie zostanie nawiązane.<br>*Android*: Jeśli połączenie zostanie natychmiast rozłączone, być może trzeba będzie wyłączyć opcję "Przełącznik sieci inteligentnej" pod "Połączenia -> WiFi -> Zaawansowane".

4. Otwórz swoją przeglądarkę i wpisz [http://192.168.4.1/](http://192.168.4.1/)

> ⚠️ **Proszę o uwagę** Może się zdarzyć, że NodeMCU podejmie kilka prób połączenia z domową siecią WiFi. Proszę się nie zniecierpliwić i spróbować, aż zadziała. Czujnik może być również skonfigurowany za pomocą smartfona. Jeśli konfiguracja czujnika zadziałała, strona konfiguracyjna nie jest już dostępna pod tym adresem IP 192.168.4.1.

### Skonfiguruj stację
1. W polu "Konfiguruj" wpisz SSID (nazwę domowej sieci WiFi), klucz bezpieczeństwa sieci (pod Windows) lub hasło WiFi.

2. W przypadku czujników hałasu (DNMS) zgodnie z niniejszą instrukcją nie są konieczne żadne dalsze zmiany

3. Po naciśnięciu przycisku Zapisz, czujnik uruchomi się ponownie i nie będzie już dostępny w ten sposób, gdy połączy się z siecią WLAN.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Przetestuj stację
Jeżeli nie dokonano żadnych zmian poza wprowadzeniem danych dotyczących sieci WiFi, czujnik może zostać "przetestowany" na kolejnych stronach po upływie około 10 minut. Na tych stronach należy wyszukać ChipID (w przykładzie powyżej 13597771).

 * [Sensordaten](www.madavi.de/sensor/graph.php) 
 * [WLAN-Signal](www.madavi.de/sensor/signal.php) 


 
