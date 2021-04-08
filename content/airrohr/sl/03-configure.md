---
title: Konfiguracija spletne strani
---

### Pridobite edinstveni ID postaje
1. Postajo povežite s kablom USB, da se senzor napaja.

2. Postaja se bo poskušala povezati z nastavljenim omrežjem WiFi. Pri novi nastavitvi povezava ne bo uspešna in postaja bo ustvarila omrežje WiFi z imenom `Particulate Matter ID` , `Feinstaubsensor-ID` ali `airRohr-ID`. ID je **ChipID** (na primer 13597771). **To številko si zapišite, saj jo boste potrebovali za registracijo**.

3. V računalniku ali pametnem telefonu se povežite z omrežjem WiFi, ki ga je ustvarila postaja. Počakajte, da se vzpostavi povezava.<br>*Android*: Če se povezava takoj prekine, boste morda morali deaktivirati možnost "Smart network switch" (Pametni preklop omrežja) v razdelku "Connections -> WiFi -> Advanced" (Povezave -> WiFi -> Napredno).

4. Odprite brskalnik in vtipkajte [http://192.168.4.1/](http://192.168.4.1/).

> ⚠️ **Upoštevajte** Morda bo potrebnih nekaj poskusov, da se bo naprava NodeMCU povezala z domačim omrežjem WiFi. Bodite potrpežljivi in večkrat poskusite z navedenimi koraki, dokler ne bo delovalo. Če je konfiguracija senzorja delovala, omrežje WiFi postaje ne bo na voljo in stran za konfiguracijo ne bo več dostopna pod tem IP 192.168.4.1

#### Konfiguracija postaje
1. Na strani "Konfiguracija" vnesite SSID (ime domačega omrežja WiFi), varnostni ključ omrežja (v sistemu Windows) ali geslo WiFi.

2. Če uporabljate priporočeni senzor za fini prah (SDS011), nadaljnje spremembe konfiguracije niso potrebne.

3. Kliknite gumb "Save configuration and restart" (Shrani konfiguracijo in ponovno zaženite). Postaja se bo ponovno zagnala in ne bo več dostopna na ta način, ko se bo povezala z domačim omrežjem WiFi.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>

<br>

### Preverite, ali je postaja pravilno konfigurirana
Če v prejšnjem koraku niste izvedli drugih sprememb razen konfiguracije omrežja WiFi, bo senzor zdaj začel snemati in prenašati podatke. Ali vse deluje pravilno, lahko preverite po približno 10 minutah tako, da se pomaknete na naslednje strani. Na teh straneh poiščite ChipID (v zgornjem primeru 13597771).

* [Sensor data](https://www.madavi.de/sensor/graph.php)
* [Podatki o signalu WiFi](https://www.madavi.de/sensor/signal.php)