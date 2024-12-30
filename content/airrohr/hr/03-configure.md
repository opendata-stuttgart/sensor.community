---
title: Podešavanje
---
### Potražite jedinstveni ID uređaja
1. Spojite uređaj preko USB kabela na napajanje.

2. Mjerna stanica će se pokušati spojiti na konfiguriranu WiFi mrežu. Kod početnog podešavanja, veza neće uspjeti i stanica će pokrenuti vlastitu WiFi mrežu s imenom `Particulate Matter ID` , `Feinstaubsensor-ID` ili `airRohr-ID`. ID je **ChipID** (primjerice 13597771). **Zabilježite si ovaj broj jer će vam biti potreban kod registracije**

3. Spojite se na WiFi mrežu koju je kreirala stanica putem vašeg računalu ili pametnog telefona. Zadana lozinka za ovu mrežu je 'airrohrcfg'. Pričekajte dok se veza ne uspostavi.<br>*Android*: Ako se veza odmah prekine, možda ćete morati deaktivirati opciju 'Smart network switch' pod 'Connections -> WiFi -> Advanced'.

4. Otvorite preglednik i upišite [http://192.168.4.1/](http://192.168.4.1/).

> ⚠️ **Napomena** Može biti potrebno nekoliko pokušaja da se NodeMCU poveže s kućnom WiFi mrežom. Budite strpljivi i isprobajte navedene korake nekoliko puta dok ne uspijete. Ako je podešavanje senzora uspjelo, WiFi mreža stanice i konfiguracijska stranica više neće biti dostupna pod ovim IP-om 192.168.4.1

### Podesite stanicu
1. Na stranici 'Configuration' unesite svoj SSID (naziv vaše kućne WiFi mreže), mrežni sigurnosni ključ (u sustavu Windows) ili WiFi lozinku.

2. Ako koristite preporučeni senzor sitnih čestica (SDS011), nisu potrebne daljnje promjene konfiguracije.

3. Pritisnite gumb 'Save configuration and restart". Stanica će se ponovno pokrenuti i više neće biti dostupna na ovaj način kada se poveže s vašom kućnom WiFi mrežom.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>

<br>

### Provjerite je li stanica ispravno podešena
Ako u prethodnom koraku osim konfiguracije WiFi mreže niste napravili nikakve druge promjene, senzor će sada početi snimati i učitavati podatke. Možete provjeriti radi li sve ispravno nakon otprilike 10 minuta odlaskom na sljedeće stranice. Na ovim stranicama potražite ChipID (u primjeru iznad 13597771).

 * [Sensor data](https://www.madavi.de/sensor/graph.php)
 * [WiFi signal data](https://www.madavi.de/sensor/signal.php)
