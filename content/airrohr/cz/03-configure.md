---
title: Konfigurace
---
### Získejte ID
1. Připojte stanici USB kabelem ke zdroji, tím dojde k zapnutí.

2. Stanice se pokusí připojit k nakonfigurované síti (je-li nějaká). Jestliže se jí to nepodaří, stanice vytvoří otevřenou Wi-Fi síť s názvem `Particulate Matter ID`,  `Feinstaubsensor-ID` nebo `airRohr-ID`. ID je **ChipID** (například 13597771). **Prosím zapište si toto číslo. Budete ho potřebovat při registraci.**

3. Připojte se k vytvořené Wi-Fi síti. Počkejte na dokončení připojení. <br>*Android*: Jestliže dojde k okamžitému odpojení, pravděpodobně bude nutné v nastavení deaktivovat možnost 'Inteligentní síťový přepínač' v 'Připojení -> Wi-Fi -> Rozšířené'

4. Otevřete prohlížeč a napište [http://192.168.4.1/](http://192.168.4.1/)

> ⚠️ **Poznámka**  Připojení NodeMCU k domácí Wi-Fi síti může nekdy vyžadovat vícero pokusů. Prosím buďte trpělivý a zkoušejte to, dokud se to nepodaří. Senzor můžete nakonfigurovat i pomocí chytrého telefonu. Pokud byla konfigurace úspěšná, IP adresa konfigurační stránky 192.168.4.1. už není přístupná.

### Konfigurace senzoru
1. V části 'Konfigurace' zadejte SSID (název vaší domácí Wi-Fi sítě), bezpečnostní klíč sítě (v systému Windows) nebo heslo k Wi-Fi.

2. Pro doporučený senzor prachových částic (SDS011) nejsou potřeba vykonávat další změny.

3. Po zmáčknutí Uložit a restartovat, se senzor restartuje a po úspěšném připojení k Wi-Fi síti se k němu tímto způsobem již nelze připojit.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Otestujte senzor
Jestliže jste kromě zadání Wi-Fi sítě nezměnili žádné jiné údaje, senzor můžete po cca. 10 minutách 'otestovat' na následujících stránkách. Na těchto stránkách vyhledejte vaše ChipID (v příkladě výše 13597771).

 * [Sensordaten](https://www.madavi.de/sensor/graph.php)
 * [WLAN-Signal](https://www.madavi.de/sensor/signal.php)
