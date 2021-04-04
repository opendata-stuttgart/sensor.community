---
title: Configureer
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
                Ruis is in beta. Vragen kunt u sturen naa</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>


### Krijg de ID
1. Sluit het station aan met een USB-kabel om de sensor van stroom te voorzien

2. Het station probeert verbinding te maken met het geconfigureerde WiFi toegangspunt. Als dit niet lukt, opent de sensor een toegangspunt met de naam `Particulate Matter ID` , `Feinstaubsensor-ID` of `airRohr-ID`. Het ID is het **ChipID** (bijvoorbeeld 13597771). **Noteer dat nummer, want u heeft het nodig voor de registratie**

3. Maak verbinding met het aangemaakte toegangspunt. Wacht tot de verbinding tot stand is gebracht.<br>*Android*: Als de verbinding onmiddellijk wordt verbroken, moet u mogelijk de optie 'Slimme netwerkswitch' onder 'Verbindingen -> WiFi -> Geavanceerd' deactiveren

4. Open uw browser en typ in [http://192.168.4.1](http://192.168.4.1)

> ⚠️ **Let op** Het kan een paar pogingen duren voordat de NodeMCU verbinding maakt met het WiFi-thuisnetwerk. Wordt alstublieft niet ongeduldig en probeer tot het werkt. De sensor kan ook worden geconfigureerd via een smartphone. Als de configuratie van de sensor is gelukt, is de configuratiepagina niet meer toegankelijk onder dit IP 192.168.4.1

### Configureer het station
1. Voer onder 'Configureren' de SSID (naam van uw WiFi-thuisnetwerk), de netwerkbeveiligingssleutel (onder Windows) of het WiFi-wachtwoord in.

2. Voor geluidssensoren (DNMS) volgens deze handleiding zijn geen verdere wijzigingen nodig

3. Na het drukken op save, zal de sensor opnieuw opstarten en is niet meer op deze manier bereikbaar wanneer hij verbinding maakt met het WLAN.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>
<br>

### Test het station
Als er geen andere wijzigingen zijn aangebracht dan het invoeren van de WiFi-netwerkgegevens, kan de sensor na ongeveer 10 minuten op de volgende pagina's worden 'getest'. Op deze pagina's moet u zoeken naar de ChipID (in bovenstaand voorbeeld 13597771).

 * [Sensorgegevens](www.madavi.de/sensor/graph.php)
 * [WLAN-signaal](www.madavi.de/sensor/signal.php)



