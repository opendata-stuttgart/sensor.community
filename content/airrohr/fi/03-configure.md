---
title: Määritä
---
### Hanki aseman yksilöllinen tunnus
1. Kytke asema USB-kaapelilla anturin virran kytkemiseksi.

2. Asema yrittää muodostaa yhteyden määritettyyn WiFi-verkkoon. Jos kyseessä on uusi asetus, yhteys epäonnistuu ja asema luo WiFi-verkon nimellä `Particulate Matter ID` , `Feinstaubsensor-ID` tai `airRohr-ID`. ID on **ChipID** (esimerkiksi 13597771). **Kirjoita tämä numero muistiin, sillä tarvitset sitä rekisteröintiä varten**.

3. Muodosta yhteys aseman luomaan WiFi-verkkoon tietokoneella tai älypuhelimella. Odota, kunnes yhteys on muodostettu.<br>*Android*: Jos yhteys katkeaa välittömästi, sinun on ehkä poistettava vaihtoehto 'Älykäs verkonvaihto' käytöstä kohdassa 'Yhteydet -> WiFi -> Lisäasetukset'.

4. Avaa selain ja kirjoita [http://192.168.4.1](http://192.168.4.1).

> ⚠️ **Huomaa** NodeMCU:n yhteyden muodostaminen kodin WiFi-verkkoon voi kestää muutaman kerran. Ole kärsivällinen ja kokeile vaiheita useita kertoja, kunnes se toimii. Jos anturin konfigurointi on toiminut, aseman WiFi-verkko ei ole käytettävissä eikä konfigurointisivulle pääse enää tällä IP-osoitteella 192.168.4.1.

### Aseman konfigurointi
1. Kirjoita "Configuration"-sivulle SSID (koti-Wifi-verkkosi nimi), verkon suojausavain (Windowsissa) tai WiFi-salasana.

2. Jos käytät suositeltua hienopölyanturia (SDS011), muita määritysmuutoksia ei tarvita.

3. Napsauta "Tallenna kokoonpano ja käynnistä uudelleen" -painiketta. Asema käynnistyy uudelleen, eikä siihen pääse enää tällä tavalla käsiksi, kun se muodostaa yhteyden kotisi WiFi-verkkoon.

<br>

<img src="..docsairrohr_config_initial.jpg" loading="lazy">

<br>

### Tarkista, että asema on konfiguroitu oikein.
Jos et tehnyt edellisessä vaiheessa muita muutoksia kuin WiFi-verkon määrityksen, anturi aloittaa nyt tietojen tallentamisen ja lataamisen. Voit tarkistaa, että kaikki toimii oikein noin 10 minuutin kuluttua siirtymällä seuraaville sivuille. Etsi näiltä sivuilta ChipID (yllä olevassa esimerkissä 13597771).

 * [Anturitiedot](https://www.madavi.de/sensor/graph.php)
 * [WiFi-signaalitiedot](https://www.madavi.de/sensor/signal.php)
