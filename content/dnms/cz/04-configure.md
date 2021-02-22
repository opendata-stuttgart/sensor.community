---
title: Konfigurace
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
                Noise is in beta. Send questions to</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>

### Získejte ID
1. Připojte stanici USB kabelem ke zdroji, tím dojde k zapnutí.

2. Stanice se pokusí připojit k nakonfigurované síti (je-li nějaká). Jestliže se jí to nepodaří, stanice vytvoří otevřenou Wi-Fi síť s názvem `Particulate Matter ID` , `Feinstaubsensor-ID` nebo `airRohr-ID`. ID je **ChipID** (například 13597771). **Prosím zapište si toto číslo. Budete ho potřebovat při registraci.**

3. Připojte se k vytvořené Wi-Fi síti. Počkejte na dokončení připojení.<br>*Android*: Jestliže dojde k okamžitému odpojení, pravděpodobně bude nutné v nastavení deaktivovat možnost 'Inteligentní síťový přepínač' v 'Připojení -> Wi-Fi -> Rozšířené'

4. Otevřete prohlížeč a napište [http://192.168.4.1/](http://192.168.4.1/)

> ⚠️ **Poznámka**  Připojení NodeMCU k domácí Wi-Fi síti může někdy vyžadovat vícero pokusů. Prosím buďte trpělivý a zkoušejte to, dokud se to nepodaří. Senzor můžete nakonfigurovat i pomocí chytrého telefonu. Pokud byla konfigurace úspěšná, IP adresa konfigurační stránky 192.168.4.1. už není přístupná.

### Konfigurace senzoru
1. V části 'Konfigurace' zadejte SSID (název vaší domácí Wi-Fi sítě), bezpečnostní klíč sítě (v systému Windows) nebo heslo k Wi-Fi.

2. Pro senzor hluku (DNMS) v souladu s tímto manuálem již nejsou potřeba vykonávat další změny.

3. Po zmáčknutí Uložit a restartovat, se senzor restartuje a po úspěšném připojení k Wi-Fi síti se k němu tímto způsobem již nelze připojit.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Otestujte senzor
Jestliže jste kromě zadání Wi-Fi sítě nezměnili žádné jiné údaje, senzor můžete po cca. 10 minutách 'otestovat' na následujících stránkách. Na těchto stránkách vyhledejte vaše ChipID (v příkladě výše 13597771).

 * [Sensordaten](www.madavi.de/sensor/graph.php)
 * [WLAN-Signal](www.madavi.de/sensor/signal.php)
