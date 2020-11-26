---
title: Foutzoeken
---

### Problemen met verzenden?
Ga naar het volgende adres in je browser, gebruik je eigen IDs:
https://www.madavi.de/sensor/graph.php?sensor=esp8266-[ID]-[sensor_type]

Je kan zoeken op [ID] in de tekst op de pagina [https://www.madavi.de/sensor/graph.php](https://www.madavi.de/sensor/graph.php)

* Is de sensor geregistreerd via [https://devices.sensor.community/](https://devices.sensor.community/) en is de sensor zichtbaar op de kaart?
* Had je vroeger een zwak WiFi-signaal? Hier is het server-side signaallog: https://www.madavi.de/sensor/signal.php?sensor=esp8266-[ID]


### Problemen met de USB-kabel?
* Controleer de voeding: USB-kabel
* Herstart (haal de voeding los, trek bijvoorbeeld de USB plug eruit)
* Is de WiFi-configuratie OK? (de sensor verbindt met het geconfigureerde WiFi-netwerk) Zo niet:
    * maakt de sensor een access-point aan (in de eerste 2-7 minuten na een herstart)?
    * kijk of er een `airrohr-[ID]` WiFi-netwerk is opgezet. Dit kan 1-2 minuten duren na een herstart.
* Controleer op je eigen router of de sensor is aangemeld op het netwerk, onthou het IP-adres
    * je kan "Discovery" in de [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/) gebruiken
    * zo ja: verbind naar de sensor via IP met een browser `http://[ip-van-de-sensor]/` , de webpagina zou moeten verschijnen
    * zo niet: de ESP heeft problemen, bijvoorbeeld de voeding is niet toereikend, reboot-loop of iets dergelijks
* Verbind via USB met een computer en bekijk het log
    * Volg de tekst op de seriele interface met een serieel-terminalprogramma (Instellingen: baud 9600, 8N1)
        * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, ...
        * mogelijk zijn geschikt usb2serial drivers nog steeds vereist, zie [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
    * Hier zou je moeten kunnen zien wat de sensor aan het doen is (boot messages, WiFi-verbinding of AP, meten - pas na 3 minuten)

### Problemen met de elektronica?
* Haal de elektronica uit de behuizing en kijk wat er gebeurt
* Controleer/vervang de voeding nogmaals
    * knippert de ESP LED kort na een herstart?
    * SDS011: is de rode LED/ventilator aan na een reboot?
    * controleer/vervang de kabels naar de sensoren nogmaals
