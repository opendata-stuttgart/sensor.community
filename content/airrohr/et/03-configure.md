---
title: Konfigureeri
---
### Get the unique station ID
1. Anduri sisselülitamiseks ühendage jaam USB-kaabliga.

2. Jaam üritab luua ühendust konfigureeritud WiFi-võrguga. Uue seadistuse puhul ühendus ebaõnnestub ja jaam loob WiFi võrgu nimega `Particulate Matter ID` , `Feinstaubsensor-ID` või `airRohr-ID`. ID on **ChipID** (näiteks 13597771). **Palun märkige see number üles, sest seda on vaja registreerimiseks**.

3. Ühendage oma arvutis või nutitelefonis jaama loodud WiFi-võrku. Oodake, kuni ühendus on loodud.<br>*Android*: Kui ühendus katkeb kohe, peate võib-olla deaktiveerima valiku 'Smart network switch' (nutikas võrguvahetus) jaotises 'Connections -> WiFi -> Advanced' (Ühendused -> WiFi -> Täiustatud).

4. Avage brauser ja sisestage [http://192.168.4.1](http://192.168.4.1).

> ⚠️ **Pöörake tähelepanu** NodeMCU ühendamine koduse WiFi-võrguga võib võtta paar katset. Palun olge kannatlik ja proovige samme mitu korda, kuni see toimib. Kui anduri konfigureerimine on toiminud, ei ole jaama WiFi võrk enam saadaval ja konfiguratsioonileht ei ole enam kättesaadav selle IP 192.168.4.1 all.

### Jaama konfigureerimine
1. Sisestage lehel "Configuration" oma SSID (koduse WiFi võrgu nimi), võrgu turvavõti (Windowsis) või WiFi parool.

2. Kui te kasutate soovitatud peentolmuandurit (SDS011), ei ole edasised konfiguratsioonimuudatused vajalikud.

3. Vajutage nupule "Save configuration and restart". Jaam taaskäivitub ja ei ole enam sellisel viisil kättesaadav, kui see ühendub teie koduse WiFi-võrguga.

<br>

<img src="..docsairrohr_config_initial.jpg" loading="lazy">

<br>

### Kontrollige, kas jaam on õigesti konfigureeritud.
Kui te ei teinud eelmises etapis muid muudatusi peale WiFi võrgu seadistamise, hakkab andur nüüd andmeid salvestama ja üles laadima. Et kõik töötab õigesti, saate kontrollida umbes 10 minuti pärast, kui navigeerite järgmistele lehekülgedele. Otsige nendel lehekülgedel ChipID (ülaltoodud näites 13597771).

 * [Anduri andmed](https://www.madavi.de/sensor/graph.php)
 * [WiFi signaali andmed](https://www.madavi.de/sensor/signal.php)
