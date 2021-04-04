---
title: Määritä
---

  <div class="max-w-screen-xl mx-auto pb-5">
      <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
      <div class="flex items-center">
            <span class="p-2 rounded-lg bg-indigo-500">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5. 436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" >
              <svg>
            <span>
        <div class="flex flex-wrap">
          <div class="flex-wrap flex">
            <p class="pt-1 text-indigo-700 font-medium">
                Noise on beta-versiossa. Lähetä kysymyksiä osoitteeseen<p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community<a>
          <div>
           <div>
      <div>
    <div>
  <div>
  <div>
### Get the ID
1. Kytke asema USB-kaapelilla anturin virran kytkemiseksi.

2. Asema yrittää muodostaa yhteyden määritettyyn WiFi-yhteyspisteeseen. Jos tämä ei onnistu, anturi avaa yhteyspisteen nimellä `Particulate Matter ID` , `Feinstaubsensor-ID` tai `airRohr-ID`. ID on **ChipID** (esimerkiksi 13597771). **Kirjoita tämä numero muistiin, sillä tarvitset sitä rekisteröintiä varten**.

3. Muodosta yhteys luotuun yhteyspisteeseen. Odota, kunnes yhteys on muodostettu.<br>*Android*: Jos yhteys katkeaa välittömästi, sinun on ehkä poistettava 'Älykäs verkonvaihto' -vaihtoehto käytöstä kohdassa 'Yhteydet -> WiFi -> Lisäasetukset'.

4. Avaa selain ja kirjoita [http://192.168.4.1](http://192.168.4.1).

> ⚠️ **Huomaa** NodeMCU:n yhteyden muodostaminen kodin WiFi-verkkoon voi kestää muutaman kerran. Älä ole kärsimätön ja yritä, kunnes se toimii. Anturi voidaan konfiguroida myös älypuhelimen kautta. Jos anturin konfigurointi on toiminut, konfigurointisivu ei ole enää käytettävissä tällä IP-osoitteella 192.168.4.1

### Aseman konfigurointi
1. Kirjoita kohtaan "Configure" (Määritä) SSID (kodin WiFi-verkon nimi), verkon suojausavain (Windowsissa) tai WiFi-salasana.

2. Tämän käsikirjan mukaisten meluantureiden (DNMS) osalta ei tarvita muita muutoksia.

3. Tallennuksen jälkeen anturi käynnistyy uudelleen, eikä sitä voi enää käyttää tällä tavoin, kun se muodostaa yhteyden WLANiin.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>
<br>

### Testaa asema
Jos mitään muita muutoksia ei ole tehty kuin WiFi-verkkotietojen syöttäminen, anturi voidaan "testata" seuraavilla sivuilla noin 10 minuutin kuluttua. Näillä sivuilla on etsittävä ChipID (yllä olevassa esimerkissä 13597771).

 * [Anturitiedot](www.madavi.de/sensor/graph.php)
 * [WLAN-signaali](www.madavi.de/sensor/signal.php)
 * [WLAN-signaali](www.madavi.de/sensor/signal.php)



