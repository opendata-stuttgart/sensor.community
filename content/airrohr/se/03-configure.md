---
title: Konfigurera
---
### Få det unika stations-ID: t
1. Anslut stationen till en USB-kabel för att slå på sensorn.

2. Stationen försöker ansluta till det konfigurerade WiFi-nätverket. För en ny installation kommer anslutningen att misslyckas och stationen skapar ett WiFi-nätverk med namnet `Particulate Matter ID`, `Feinstaubsensor-ID` eller `airRohr-ID`. ID är **ChipID** (till exempel 13597771). **Vänligen notera detta nummer, eftersom du behöver det för registrering**

3. Anslut till det WiFi-nätverk som skapats av stationen på din dator eller smartphone. Vänta tills anslutningen upprättas. <br> * Android *: Om anslutningen kopplas bort omedelbart kan du behöva inaktivera alternativet "Smart nätverksväxel" under "Anslutningar -> WiFi -> Avancerat".

4. Öppna din webbläsare och skriv in [http://192.168.4.1/](http://192.168.4.1/).

> ⚠️ **Observera** Det kan ta några försök för NodeMCU att ansluta till hem-WiFi-nätverket. Var tålmodig och prova stegen flera gånger tills det fungerar. Om konfigurationen av sensorn har fungerat är stationens WiFi-nätverk inte tillgängligt och konfigurationssidan kommer inte längre att vara tillgänglig under denna IP 192.168.4.1

### Konfigurera stationen
1. På sidan 'Konfiguration' anger du ditt SSID (namn på ditt WiFi-nätverk), nätverkssäkerhetsnyckeln (under Windows) eller WiFi-lösenordet.

2. Om du använder den rekommenderade sensorn för fin damm (SDS011) är inga ytterligare konfigurationsändringar nödvändiga.

3. Klicka på knappen "Spara konfiguration och starta om". Stationen startas om och kommer inte längre att vara tillgänglig på det här sättet när den ansluts till ditt WiFi-nätverk.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Kontrollera att stationen är korrekt konfigurerad
Om du inte gjorde några andra ändringar i föregående steg än WiFi-nätverkskonfiguration, kommer sensorn nu att börja spela in och ladda upp data. Du kan verifiera att allting fungerar korrekt efter cirka 10 minuter genom att navigera till följande sidor. På dessa sidor söker du efter ChipID (i exemplet ovan 13597771).

 * [Sensor data](https://www.madavi.de/sensor/graph.php)
 * [WiFi signal data](https://www.madavi.de/sensor/signal.php)
