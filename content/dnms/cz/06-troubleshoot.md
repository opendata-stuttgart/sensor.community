---
title: Řešení problémů
---

### Problémy s přenosem?
Do prohlížeče zadejte svoje vlastní údaje v následujícím formátu::
`https://www.madavi.de/sensor/graph.php?sensor=esp8266-[ID]-[typ senzoru]`

[ID] můžete nalézt na následující stránce [https://www.madavi.de/sensor/graph.php](https://www.madavi.de/sensor/graph.php)

* Je senzor zaregistrovaný prostřednictvím [https://devices.sensor.community/](https://devices.sensor.community/) a je senzor viditelný na mapě?
    * Byla intenzita WIFi signálu v minulosti nízká? Zde je stránka s log souborem signálu: `https://www.madavi.de/sensor/signal.php?sensor=esp8266-[ID]`



### Problémy s USB kabelem?
* Zkontrolujte napájecí zdroj USB kabelu
* Restart (odpojte napájení ze sítě, nebo vytáhněte USB konektor ze zařízení).
* Je WiFi síť správně nakonfigurovaná (senzor se připojí k nakonfigurované síti)? Jestliže ne:
    * vytvoří senzor vlastní otevřenou WiFi síť (v průběhu 2-7 minut po restartu)?
    * Hledejte síť s názvem `airrohr-[ID]`. Buďte trpěliví, může to trvat 1-2 minuty po spuštění.
* Zkontrolujte v nastavení vašeho routeru, jestli je senzor připojený k vaší síti. Poznačte si jeho IP adresu.
    * můžete také využít možnost "Prohledat síť" v [nástroji na instalaci firmware](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
    * Jestliže ano: připojte se k senzoru přes IP adresu pomocí prohlížeče `http://[ip-senzoru]/`, mělo by se vám zobrazit rozhraní senzoru.
    * Jestliže ne: ESP má problémy, např. je nedostatečné napájení, restartuje ve smyčce nebo podobně.
* Připojte USB k počítači a zkontrolujte log.
    * Sledujte text na sériovém rozhraní pomocí programu sériový terminál (Nastavení: baud 9600, 8N1).
        * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, ...
        * pro správnou funkci jsou potřeba vhodné ovladače usb2serial [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)     
    * Zde byste měli vidět co senzor dělá (bootovací zprávy, připojení k WiFi, měření - až po 3 minutách).

### Problémy s elektronikou?
* Vyjměte elektroniku z krytu a zkontrolujte ji.
* Zkontrolujte nebo vyměňte napájecí zdroj:
    * bliká ESP8266 krátce po restartu?
    * Teensy: červeně bliká po restartu?
    * Opět zkontrolujte zapojení kabelů k senzoru nebo kabely vyměňte.


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
                Noise is in beta. Send questions to</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>
