---
title: Konfigurer
---
#### Hent det unikke stations-ID
1. Tilslut stationen til et USB-kabel for at sætte sensoren i gang.

2. Stationen vil forsøge at oprette forbindelse til det konfigurerede WiFi-netværk. Ved en ny opsætning vil forbindelsen mislykkes, og stationen vil oprette et WiFi-netværk med navnet `Particulate Matter ID` , `Feinstaubsensor-ID` eller `airRohr-ID`. ID'et er **ChipID** (f.eks. 13597771). **Notér venligst dette nummer, da du skal bruge det i forbindelse med registreringen**

3. Opret forbindelse til det WiFi-netværk, der er oprettet af stationen på din computer eller smartphone. Vent, indtil forbindelsen er etableret.<br>*Android*: Hvis forbindelsen afbrydes med det samme, skal du muligvis deaktivere indstillingen "Smart network switch" under "Connections -> WiFi -> Advanced" (Forbindelser -> WiFi -> Avanceret).

4. Åbn din browser, og skriv [http://192.168.4.1](http://192.168.4.1).

> ⚠️ **Bemærk** Det kan tage et par forsøg, før NodeMCU'en opretter forbindelse til hjemmets WiFi-netværk. Vær tålmodig, og prøv trinene flere gange, indtil det virker. Hvis konfigurationen af sensoren har fungeret, vil stationens WiFi-netværk ikke være tilgængeligt, og konfigurationssiden vil ikke længere være tilgængelig under denne IP 192.168.4.1

### Konfigurer stationen
1. På siden "Configuration" (konfiguration) skal du indtaste SSID (navnet på dit WiFi-hjemmenetværk), netværkssikkerhedsnøglen (under Windows) eller WiFi-adgangskoden.

2. Hvis du bruger den anbefalede sensor til fint støv (SDS011), er det ikke nødvendigt at foretage yderligere konfigurationsændringer.

3. Klik på knappen "Gem konfiguration og genstart". Stationen genstartes og vil ikke længere være tilgængelig på denne måde, når den opretter forbindelse til dit WiFi-hjemmenetværk.

<br>

<img src="..docsairrohr_config_initial.jpg" loading="lazy">

<br>

#### Kontroller, at stationen er korrekt konfigureret
Hvis du ikke har foretaget andre ændringer i det foregående trin end konfigurationen af WiFi-netværket, begynder sensoren nu at registrere og uploade dataene. Du kan kontrollere, at alting fungerer korrekt efter ca. 10 minutter ved at navigere til de følgende sider. På disse sider skal du søge efter ChipID (i eksemplet ovenfor 13597771).

 * [Sensordata](https://www.madavi.desensorgraph.php)
 * [WiFi-signaldata](https://www.madavi.desensorsignal.php)
