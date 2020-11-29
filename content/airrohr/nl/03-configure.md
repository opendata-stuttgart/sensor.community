---
title: Configuratie
---
### Het unieke ID bepalen
1. Sluit het station met de USB-kabel aan op een spanningsbron om de sensor aan te zetten.

2. Het station zal proberen te verbinden met het geconfigureerde WiFi-netwerk. De eerste keer zal deze connectie falen en het station zal dan zelf een WiFi-netwerk opzetten met als naam `Particulate Matter ID` , `Feinstaubsensor-ID` of `airRohr-ID`. Hierbij is ID het zogenaamde **ChipID** (bijvoorbeeld 13597771). **Schrijf dit nummer op, je hebt dit later nodig voor registratie van de sensor**

3. Verbind met je computer of smartphone naar het WiFi netwerk dat door het station is opgezet. Wacht totdat de verbinding tot stand is gebracht.<br>*Android*: Als de verbinding onmiddellijk wordt verbroken, moet je mogelijk de optie 'Smart network switch' onder 'Connection -> WiFi -> Advanced' deactiveren.

4. Open je browser en typ in [http://192.168.4.1/](http://192.168.4.1/).

> ⚠️ **Let op**  Het kan een paar pogingen duren voordat de NodeMCU met het WiFi thuisnetwerk verbindt. Probeer de stappen een aantal keer totdat het werkt en wees geduldig. Wanneer de configuratie van de sensor gelukt is, zal het WiFi-netwerk van het station niet langer actief zijn en de configuratie-pagina is niet langer bereikbaar op IP-adres 192.168.4.1

### Het station configureren
1. Vul op de 'Configuratie' pagina je SSID (naam van je WiFi-thuisnetwerk) en WiFi-wachtwoord in.

2. Als je de aanbevolen fijnstofsensor (SDS011) gebruikt, zijn er geen verdere aanpassingen aan de configuratie nodig.

3. Klik op de 'Opslaan en herstarten' knop. Het station zal herstarten en is niet langer toegankelijk op deze manier wanneer het met het WiFi-thuisnetwerk verbonden is.

<br>

![](../docs/airrohr_config_initial.png)
<br>

### Controleer dat het station juist is geconfigureerd
Als je geen andere wijzigingen hebt gemaakt in de vorige stap, anders dan WiFi netwerkconfiguratie, zal de sensor nu starten met meten en uploaden van data. Je kan na ongeveer 10 minuten controleren dat alles juist werkt, door naar de volgende pagina's te gaan. Zoek op deze pagina's naar je ChipID (in het voorbeeld hierboven 13597771).

 * [Sensordata](https://www.madavi.de/sensor/graph.php)
 * [WiFi-signaaldata](https://www.madavi.de/sensor/signal.php)
