---
title: Configuratie
---
### Het unieke ID bepalen
1. Sluit het station met de USB-kabel aan op een spanningsbron om de sensor aan te zetten.

2. Het station zal zelf een WiFi-netwerk opzetten met als naam `airRohr-sensor-UID`. Dit kan een minuut of 2 duren. Hierbij is 'sensor-UID' het ID van de **ChipID** op je NodeMCU (bijvoorbeeld 13597771). Dat is het nummer dat je te zien kreeg in de firmware flasher, na het flashen en had je als het goed is al genoteed. **Schrijf anders nu dit nummer op, je hebt dit later nodig voor registratie van de sensor**

3. Verbind je computer of smartphone met het WiFi netwerk dat door het station is opgezet. Een wachtoord wordt niet gevraagd. Wacht totdat de verbinding tot stand is gebracht.<br>*Android*: Als de verbinding onmiddellijk wordt verbroken, moet je mogelijk de optie 'Smart network switch' onder 'Connection -> WiFi -> Advanced' deactiveren.

4. Open je browser en typ in [http://192.168.4.1/](http://192.168.4.1/).

### Het station configureren
1. Vul op de 'Configuratie' pagina je SSID (naam van je WiFi-thuisnetwerk, je kunt er ook op klikken in de lijst WiFi-netwerken) en je WiFi-wachtwoord voor dat netwerk in.

2. Als je de aanbevolen fijnstofsensor (SDS011) en vroeger toegepaste DHT22 sensor gebruikt, zijn er geen verdere aanpassingen aan de configuratie nodig.

3. Gebruik je niet de DHT22 maar de BME280 sensor, wijzig dit dan op de Sensors tab.

4. Stel indien gewenst de taal van de software op het station in op Nederlands. Dit kan op het tabblad "Meer instellingen".

5. Klik op de 'Opslaan en herstarten' knop. Het station zal herstarten en is niet langer toegankelijk op deze manier wanneer het met het WiFi-thuisnetwerk verbonden is.

> ⚠️ **Let op**  Het kan een paar pogingen duren voordat de NodeMCU met het WiFi thuisnetwerk verbindt. Probeer de stappen een aantal keer totdat het werkt en wees geduldig. Wanneer de configuratie van de sensor gelukt is, zal het WiFi-netwerk van het station niet langer actief zijn en de configuratie-pagina is niet langer bereikbaar op IP-adres 192.168.4.1

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Controleer dat het station juist is geconfigureerd
Het station zal nu starten met meten en uploaden van data. Je kan na ongeveer 10 minuten controleren dat alles juist werkt, door naar de volgende pagina's te gaan. Zoek op deze pagina's naar je ChipID (in het voorbeeld hierboven 13597771).

* [Sensordata](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors)
* [WiFi-signaaldata](https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal)
