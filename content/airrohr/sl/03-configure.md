---
title: Konfiguracija spletne strani
---
#### Pridobite edinstven ID postaje
1. Postajo povežite s kablom USB, da se senzor napaja.

2. Postaja se bo poskušala povezati z nastavljenim omrežjem WiFi. Pri novi nastavitvi povezava ne bo uspešna in postaja bo ustvarila omrežje WiFi z imenom `Particulate Matter ID` , `Feinstaubsensor-ID` ali `airRohr-ID`. ID je **ChipID** (na primer 13597771). **To številko si zapišite, saj jo boste potrebovali za registracijo**.

3. V računalniku ali pametnem telefonu se povežite z omrežjem WiFi, ki ga je ustvarila postaja. Počakajte, da se vzpostavi povezava.<br>*Android*: Če se povezava takoj prekine, boste morda morali deaktivirati možnost "Smart network switch" (Pametni preklop omrežja) v razdelku "Connections -> WiFi -> Advanced" (Povezave -> WiFi -> Napredno).

4. Odprite brskalnik in vnesite [http://192.168.4.1](http://192.168.4.1).

> ⚠️ **Pozorilo** Morda bo potrebno nekaj poskusov, da se NodeMCU poveže z domačim omrežjem WiFi. Bodite potrpežljivi in večkrat poskusite z navedenimi koraki, dokler ne bo delovalo. Če je konfiguracija senzorja delovala, omrežje WiFi postaje ne bo na voljo in stran za konfiguracijo ne bo več dostopna pod tem IP 192.168.4.1

#### Konfiguracija postaje
1. Na strani "Konfiguracija" vnesite SSID (ime domačega omrežja WiFi), varnostni ključ omrežja (v operacijskem sistemu Windows) ali geslo WiFi.

2. Če uporabljate priporočeni senzor za droben prah (SDS011), nadaljnje spremembe konfiguracije niso potrebne.

3. Kliknite gumb "Shrani konfiguracijo in ponovno zaženite". Postaja se bo ponovno zagnala in ne bo več dostopna na ta način, ko se bo povezala z domačim omrežjem WiFi.

<br>

<img src="..docsairrohr_config_initial.jpg" loading="lazy">

<br>

#### Preverite, ali je postaja pravilno konfigurirana
Če v prejšnjem koraku niste izvedli drugih sprememb razen konfiguracije omrežja WiFi, bo senzor zdaj začel snemati in prenašati podatke. Po približno 10 minutah lahko preverite, ali vse deluje pravilno, tako da se pomaknete na naslednje strani. Na teh straneh poiščite ChipID (v zgornjem primeru 13597771).

 * [Podatki senzorja](https://www.madavi.desensorgraph.php)
 * [Podatki o signalu WiFi](https://www.madavi.desensorsignal.php)
