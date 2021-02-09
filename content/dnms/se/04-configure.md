---
title: Konfigurera
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
                Buller är i beta. Skicka frågor till</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>
    
### Få ID
1. Anslut stationen med en USB-kabel för att slå på sensorn

2. Stationen försöker ansluta till den konfigurerade WiFi-åtkomstpunkten. Om detta inte fungerar öppnar sensorn en åtkomstpunkt med namnet "Particulate Matter ID", "Feinstaubsensor-ID" eller "airRohr-ID". ID är ** ChipID ** (till exempel 13597771). ** Observera att numret är nere, eftersom du behöver det för registreringen **

3. Anslut till den skapade åtkomstpunkten. Vänta tills anslutningen är upprättad. <br> * Android *: Om anslutningen kopplas bort omedelbart kan du behöva inaktivera alternativet "Smart nätverksomkopplare" under "Anslutningar -> WiFi -> Avancerat"

4. Öppna din webbläsare och skriv in [http://192.168.4.1/](http://192.168.4.1/)

> ⚠️ **Observera** Det kan ta några försök för NodeMCU att ansluta till hem-WiFi-nätverket. Bli inte otålig och försök tills den fungerar. Sensorn kan också konfigureras via en smartphone. Om konfigurationen av sensorn har fungerat är konfigurationssidan inte längre tillgänglig under denna IP 192.168.4.1

### Konfigurera stationen
1. Under "Konfigurera" anger du SSID (namnet på ditt WiFi-nätverk), nätverkssäkerhetsnyckeln (under Windows) eller WiFi-lösenordet.

2. För bullersensorer (DNMS) enligt denna manual är inga ytterligare ändringar nödvändiga

3. Efter att ha tryckt på spara startar sensorn om och är inte längre tillgänglig på det här sättet när den ansluts till WLAN.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Testa stationen
Om inga ändringar har gjorts förutom att ange WiFi-nätverksdata, kan sensorn testas på följande sidor efter cirka 10 minuter. På dessa sidor måste du söka efter ChipID (i exemplet ovanför 13597771).

 * [Sensordaten](www.madavi.de/sensor/graph.php) 
 * [WLAN-Signal](www.madavi.de/sensor/signal.php) 
        


 
