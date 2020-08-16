---
title: Riešenie problémov
---

### Problémy s prenosom?
Do prehliadača zadajte svoje vlastné údaje v nasledujúcom formáte:
https://www.madavi.de/sensor/graph.php?sensor=esp8266-[ID]-[typ_senzora]

[ID] môžete nájsť aj v texte na tejto stránke (načítanie stránky môže chvíľu trvať): [https://www.madavi.de/sensor/graph.php](https://www.madavi.de/sensor/graph.php)

* Je senzor zaregistrovaný prostredníctvom [https://devices.sensor.community/](https://devices.sensor.community/) a je senzor viditeľný na mape?
* Bola intenzita WiFi signálu v minulosti slabá?
Tu je stránka s log súborom signálu: https://www.madavi.de/sensor/signal.php?sensor=esp8266-[ID]



### Problémy s USB káblom?
* Skontrolujte napájací zdroj USB kábla.
* Reštart (odpojte kábel od zdroja, alebo odpojte zdroj z elektriky).
* Je WiFi sieť správne nakonfigurovaná (senzor sa pripojí k nakonfigurovanej sieti)? Ak nie:
    * vytvorí senzor vlastnú WiFi sieť (v priebehu 2-7 minút po reštarte)?
    * hľadajte sieť s názvom `airrohr-[ID]`. Buďte trpezlivý, môže to trvať 1-2 minúty po spustení.
* Skontrolujte prostredníctvom rútra, či je senzor pripojený k vašej sieti, potom si poznačte jeho IP adresu.
    * alebo využite možnosť "Prehľadať sieť" v [nástroji na inštaláciu firmvéru](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
    * Ak áno: pripojte sa k senzoru cez IP pomocou prehliadača stránok `http://[ip-of-the-sensor]/`, malo by sa zobraziť rozhranie senzora.
    * Ak nie: ESP má problémy, napr. nedostatočné napájanie, reštartovacia slučka alebo podobné.
* Pripojte USB k počítaču a pozrite si log.
    * Sledujte text na sériovom rozhraní pomocou programu sériový terminál (Nastavenie: baud 9600, 8N1).
        * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, atď.
        * na správne fungovanie sú potrebné vhodné ovládače usb2serial [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)                                                                                                                                                                                                                                                                                                                      
    * Keď funguje, uvidíte, čo senzor robí (bootovacie správy, pripojenie k WiFi, vytvorenie WiFi, meranie - až po 3 minútach).

### Problémy s elektronikou?
* Vyberte elektroniku snímača z krytu a skontrolujte ju.
* Skontrolujte alebo vymeňte napájací zdroj:
    * bliká ESP8266 krátko po reštarte?
    * SDS011: červená LED svieti / ventilátor sa točí po reštarte?
    * opäť skontrolujte pripojenie káblikov k senzoru, alebo kábliky vymeňte.
