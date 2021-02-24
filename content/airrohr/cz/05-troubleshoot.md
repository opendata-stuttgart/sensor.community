---
title: Řešení problémů
---

### Problémy s přenosem?
Do prohlížeče zadejte svoje vlastní údaje v následujícím formátu:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

[ID] lze také vyhledat ve vstupním poli v levém horním rohu [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1)

* Je senzor zaregistrovaný prostřednictvím [https://devices.sensor.community/](https://devices.sensor.community/) a je senzor viditelný na mapě?
* Byla intenzita WIFi signálu v minulosti nízká?
    Zde je stránka s log souborem signálu: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`



### Problémy s USB kabelem?
* Zkontrolujte napájecí zdroj USB kabelu.
* Restart (odpojte napájení ze sítě, nebo vytáhněte USB konektor ze zařízení).
* Je WiFi síť správně nakonfigurovaná (senzor se připojí k nakonfigurované síti)? Jestliže ne:
    * vytvoří senzor vlastní otevřenou WiFi síť (v průběhu 2-7 minut po restartu)?
    * Hledejte síť s názvem `airrohr-[ID]`. Buďte trpěliví, může to trvat 1-2 minuty po spuštění.
* Zkontrolujte v nastavení vašeho routeru, jestli je senzor připojený k vaší síti. Poznačte si jeho IP adresu.
    * můžete také využít možnost "Prohledat síť" v [nástroji na instalaci firmware](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
    * Jestliže ano: připojte se k senzoru přes IP adresu pomocí prohlížeče `http://[ip-senzoru]/` , mělo by se vám zobrazit rozhraní senzoru.
    * Jestliže ne: ESP má problémy, např. je nedostatečné napájení, restartuje ve smyčce nebo podobné.
* Připojte USB k počítači a zkontrolujte log.
    * Sledujte text na sériovém rozhraní pomocí programu sériový terminál (Nastavení: baud 9600, 8N1).
        * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, ...
        * pro správnou funkci jsou potřeba vhodné ovladače usb2serial [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)                                                                                                                                                                                                                                                                                                                      
    * Zde byste měli vidět co senzor dělá (bootovací zprávy, připojení k WiFi, měření - až po 3 minutách).

### Problémy s elektronikou?
* Vyjměte elektroniku z krytu a zkontrolujte ji.
* Zkontrolujte nebo vyměňte napájecí zdroj:
    * bliká ESP8266 krátce po restartu?
    * SDS011: červená LED svítí / ventilátor se točí po restartu?
    * opět zkontrolujte zapojení kabelů k senzoru nebo kabely vyměňte.
