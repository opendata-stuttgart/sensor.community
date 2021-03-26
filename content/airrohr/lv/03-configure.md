---
title: Konfigurēt
---
#### Iegūstiet unikālo stacijas ID
1. Savienojiet staciju ar USB kabeli, lai ieslēgtu sensoru.

2. Stacija mēģinās izveidot savienojumu ar konfigurēto WiFi tīklu. Jaunas konfigurācijas gadījumā savienojums neizdosies, un stacija izveidos WiFi tīklu ar nosaukumu `Particulate Matter ID` , `Feinstaubsensor-ID` vai `airRohr-ID`. ID ir **ChipID** (piemēram, 13597771). **Pierakstiet šo numuru, jo tas būs nepieciešams reģistrācijai**.

3. Savienojieties ar stacijas izveidoto WiFi tīklu datorā vai viedtālrunī. Pagaidiet, līdz izveidojas savienojums.<br>*Android*: Ja savienojums nekavējoties pārtrūkst, iespējams, ir jādeaktivizē opcija "Smart network switch" (Viedā tīkla pārslēgšana) sadaļā "Connections -> WiFi -> Advanced" (Savienojumi -> WiFi -> Uzlabotie).

4. Atveriet pārlūkprogrammu un ievadiet [http://192.168.4.1](http://192.168.4.1).

> ⚠️ ** Lūdzu, ņemiet vērā** Lai NodeMCU izveidotu savienojumu ar mājas WiFi tīklu, var būt nepieciešami vairāki mēģinājumi. Lūdzu, esiet pacietīgi un izmēģiniet darbības vairākas reizes, līdz tas darbojas. Ja sensora konfigurācija ir izdevusies, stacijas WiFi tīkls nebūs pieejams un konfigurācijas lapa vairs nebūs pieejama ar šo IP 192.168.4.1.

#### Stacijas konfigurēšana
1. Lapā "Konfigurēšana" ievadiet SSID (mājas WiFi tīkla nosaukumu), tīkla drošības atslēgu (operētājsistēmā Windows) vai WiFi paroli.

2. Ja izmantojat ieteikto smalko putekļu sensoru (SDS011), papildu konfigurācijas izmaiņas nav nepieciešamas.

3. Noklikšķiniet uz pogas "Saglabāt konfigurāciju un restartēt". Stacija tiks restartēta un vairs nebūs pieejama šādā veidā, kad tā pieslēgsies jūsu mājas WiFi tīklam.

<br>

<img src="..docsairrohr_config_initial.jpg" loading="lazy">

<br>

#### Pārbaudiet, vai stacija ir pareizi konfigurēta
Ja iepriekšējā solī neveicat citas izmaiņas, izņemot WiFi tīkla konfigurāciju, sensors tagad sāks ierakstīt un augšupielādēt datus. Aptuveni pēc 10 minūtēm varat pārbaudīt, vai viss darbojas pareizi, pārejot uz turpmākajām lapām. Šajās lapās meklējiet ChipID (iepriekš minētajā piemērā - 13597771).

 * [Sensoru dati](https://www.madavi.desensorgraph.php)
 * [WiFi signāla dati](https://www.madavi.desensorsignal.php)
