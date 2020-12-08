---
title: Foutzoeken
---

Let op: de namen "sensor" en "station" worden soms door elkaar heen gebruikt. Meestal wordt de NodeMCU (al dan niet met sensoren er aan gekoppeld) bedoeld.

### Geen meetdata (meer)?
Bekijk de data van je station op [sensor.community](https://devices.sensor.community/sensors)
* Log in
* Zie je je station (sensor UID)? 
  * Zo niet, voeg je station toe en kijk of er data binnenkomt. Zie __Registratie__
* Klik op de DATA knop en kijk of je station de juiste sensoren heeft (SDS011 en BME280 of DHT22).
  * Zo niet, wijzig dat op je station door lokaal de instellingen te wijziogen. Zie hieronder hoe je via je eigen netwerk verbinding maakt met het station.
* Wanneer is er voor het laatst data ontvangen?
  * Nog nooit? Dan kan je station de data niet versturen. Configureer je station lokaal, zie hieronder hoe je je station lokaal kunt configureren. 
* Is je Wifi netwerk of wachtwoord gewijzigd? Kijk op je station of deze nog met jouw wifi netwerk verbonden is. Of zoek naar een wifi signaal dat begint met 'airrohr'. Dat betekent dat je sensor je wifi netwerk niet kan bereiken. 
  * Kijk op het station waarom het wifi netwerk niet meer bereikt kan worden en herstel dit.
* Herstart het station door de voeding uit het stopcontact te halen en er weer in terug te stoppen. 
  * Wacht enkele minuten en kijk of er nu wel data binnenkomt.

### Station werkt niet (meer)?
* Controleer op je eigen router/modem of het station is aangemeld op het netwerk
  * Je kan ook "Discovery" in de [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/) gebruiken. Dubbelklik als je daar je sensor ziet om naar de webpagina van hetstation te gaan.
* Start je browser en verbind naar het IP-adres van het station `http://[ip-van-de-sensor]/`, de webpagina van het station zou moeten verschijnen
  * Zo niet: de ESP heeft problemen, bijvoorbeeld de voeding is niet toereikend, reboot-loop of iets dergelijks. Zie verderop bij "Problemen met de elektronica".
* Controleer of het station metingen ontvangt van de sensoren door te klikken op "Huidige data".
  * Geen metingen? Dan is de sensor mogelijk defect of los geraakt. Controleer de verbindingen, zie verderop bij "Problemen met de elektronica".
* Verbind via USB met een computer en bekijk het log
  * Volg de tekst op de seriele interface met een serieel-terminalprogramma (Instellingen: baud 9600, 8N1)
    * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, ...
    * mogelijk zijn geschikte usb2serial drivers nog steeds vereist, zie [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
    * Hier zou je moeten kunnen zien wat de sensor aan het doen is (boot messages, WiFi-verbinding of AP, meten - pas na 3 minuten)

### Problemen met de elektronica?
* Is de voeding van het station uitgevallen? Kijk of er LED's branden op het station en op de SDS011.
  * Zo niet, dan is de voeding waarschijnlijk defect. 
* Is het station zelf defect? Is het via het lokale netwerk nog te bereiken?
* Haal de elektronica uit de behuizing en kijk wat er gebeurt
* Controleer/vervang de voeding nogmaals
    * knippert de ESP LED kort na een herstart?
    * SDS011: is de rode LED/ventilator aan na een reboot?
    * controleer/vervang de kabels naar de sensoren nogmaals
