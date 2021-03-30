---
title: Konfigurácia stránky
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
                Hluk je v beta verzii. Otázky posielajte na adresu<p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community<a>
          <div>
           <div>
      <div>
    <div>
  <div>
  <div>
### Získajte ID
1. Pripojte stanicu pomocou kábla USB, aby sa senzor napájal

2. Stanica sa pokúsi pripojiť ku konfigurovanému prístupovému bodu WiFi. Ak sa to nepodarí, snímač otvorí prístupový bod s názvom `Particulate Matter ID` , `Feinstaubsensor-ID` alebo `airRohr-ID`. ID je **ChipID** (napríklad 13597771). **Poznamenajte si toto číslo, pretože ho potrebujete na registráciu**.

3. Pripojte sa k vytvorenému prístupovému bodu. Počkajte, kým sa vytvorí spojenie.<br>*Android*: Ak sa pripojenie okamžite odpojí, možno budete musieť deaktivovať možnosť "Inteligentné prepínanie siete" v časti "Pripojenia -> WiFi -> Rozšírené".

4. Otvorte prehliadač a zadajte [http://192.168.4.1](http://192.168.4.1)

> ⚠️ **Upozornenie** Pripojenie jednotky NodeMCU k domácej sieti WiFi môže trvať niekoľko pokusov. Nebuďte netrpezliví a skúšajte, kým sa to nepodarí. Snímač je možné konfigurovať aj prostredníctvom smartfónu. Ak konfigurácia snímača fungovala, stránka konfigurácie už nie je prístupná pod touto IP 192.168.4.1

### Konfigurácia stanice
1. V časti "Konfigurácia" zadajte SSID (názov vašej domácej siete WiFi), bezpečnostný kľúč siete (v systéme Windows) alebo heslo WiFi.

2. Pre snímače hluku (DNMS) podľa tejto príručky nie sú potrebné žiadne ďalšie zmeny

3. Po stlačení tlačidla Uložiť sa snímač reštartuje a po pripojení k sieti WLAN už nie je prístupný týmto spôsobom.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>
<br>

### Otestujte stanicu
Ak neboli vykonané žiadne iné zmeny okrem zadania údajov siete WiFi, snímač sa môže "otestovať" na nasledujúcich stránkach približne po 10 minútach. Na týchto stránkach musíte vyhľadať ChipID (v uvedenom príklade 13597771).

 * [Údaje zo snímača](www.madavi.de/sensor/graph.php)
 * [WLAN-Signal](www.madavi.de/sensor/signal.php)
 * [WLAN-Signal](www.madavi.de/sensor/signal.php)



