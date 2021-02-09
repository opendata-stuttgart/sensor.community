---
title: Kofigurácia
---
### Získajte ID
1. Pripojte meraciu stanicu pomocou USB kábla so zdrojom k elektrike, aby ste snímač zapli.

2. Stanica sa pokúsi pripojiť k nakonfigurovanej WiFi sieti. Ak sa jej to nepodarí, stanica vytvorí WiFi sieť s názvom `Particulate Matter ID`, `Feinstaubsensor-ID`, alebo `airRohr-ID`. ID je **ChipID** (napríklad 13597771). **Prosím, zapíšte si toto číslo. Budete ho potrebovať pri registráciu.**


3. Pripojte sa k vytvorenej WiFi sieti. Počkajte, na dokončenie pripojenia. <br>*Android*: Ak dôjde k okamžitému odpojeniu, pravdepodobne bude potrebné v nastaveniach deaktivovať možnosť 'Prepínač inteligentnej siete' v 'Pripojenia -> WiFi -> Rozšírené'.


4. Otvorte prehliadač a napíšte [http://192.168.4.1/](http://192.168.4.1/)

> ⚠️ **Poznámka:** Pripojenie NodeMCU k WiFi sieti niekedy vyžaduje viac pokusov. Prosím, buďte trpezlivý a skúšajte to, kým sa to podarí. Senzor môžete nakonfigurovať aj pomocou smartfónu. Ak sa senzor podarí správne nakonfigurovať, konfiguračná stránka už nie je dostupná cez IP 192.168.4.1.


### Konfigurácia senzora
1. V časti Konfigurácia zadajte SSID (názov WiFi, siete ku ktorej bude senzor pripojený), heslo k WiFi, alebo bezpečnostný kľúč siete (v systéme Windows).

2. Pre senzory prachových častíc (SDS011) nie je potrebné vykonať ďalšie zmeny.

3. Po stlačení Uložiť a reštartovať sa senzor reštartuje a po pripojení k WiFi sieti už nie je dostupný.


<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Otestujte senzor
Ak ste okrem zadania údajov WiFi siete nespravili žiadne iné zmeny, senzor môžete po cca. 10 minútach "otestovať" na nasledujúcich stránkach . Na týchto stránkach vyhľadajte vaše ChipID (v príklade vyššie 13597771).


 * [Data zo senzora](https://www.madavi.de/sensor/graph.php)
 * [WiFi signál](https://www.madavi.de/sensor/signal.php)
