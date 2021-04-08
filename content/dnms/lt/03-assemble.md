---
title: Surinkite
---
> ⚠️ **SVARBI PASTABA**
Prieš surinkdami įdiekite programinę įrangą!
Žr. skyrių __įsidiegti programinę įrangą__.


### Mikrofono blokas

Mikrofono blokas pagrįstas "Pesky Products" pertraukimo plokšte su MEMS mikrofonu ICS-43434. Tokią plokštę galite rasti [Tindie marketplace] (https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).

<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>


#### Mikrofono bloko korpusas
Korpusas pagamintas iš 0,500" (12,7 mm) polistireninio vamzdžio. Toks skersmuo leidžia prie įrenginio tiesiogiai prijungti daugumą kalibratorių.

Prototipas sukurtas naudojant [Evergreen Nr. 236 vamzdelį] (https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

<img src="../docs/dnms/dnms-noise-measuring-microphone-anschluesse.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>

<br>
Išardymo plokštę reikia pritaikyti prie vamzdžio skersmens naudojant failą. Mikrofono įvadui apsaugoti naudokite lipnią juostą.
<br>

<img src="../docs/dnms/dnms-noise-measuring-microphone-protection.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection-front.jpg" style="width:41%; margin: 2em 0" loading="lazy"/>

Tada sulituokite šešis silikoninius kabelius. Atkreipkite dėmesį, prie kurio kaiščio prijungtas kabelis!

<img src="../docs/dnms/dnms-noise-measuring-microphone-with-cable.jpg" style="display: block; width:40%; margin: 2em 0" loading="lazy"/>
Nupjaukite 115 mm ilgio vamzdžio gabalą.
<br>.
Priklijuokite mikrofono plokštę ant šiek tiek sukryžiuotos juostos. Į vamzdelį įkiškite laidus ir pritvirtinkite plokštę prie vamzdžio galo.
<br>.
<img src="../docs/dnms/dnms-noise-measuring-microphone-preparing-housing.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-housing.jpg" style="width:42%; margin: 2em 0" loading="lazy"/>

Vamzdelio galą sutvirtinkite lipnia juosta.

<img src="../docs/dnms/dnms-noise-measuring-microphone-tube.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>

Dabar galite užpildyti vamzdelį derva. Šis žingsnis yra privalomas, kad būtų išvengta rezonanso ir gauti kalibruoti bei atkuriami duomenys.

Prototipas buvo sukurtas naudojant tam tikrą [PURe Isolation ST 33] (https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900), kurią pagamino "Copaltec GmbH".

#### Specifikacijos
* Dielektrinis stipris: 28 kV/mm
* Specifinė tiesioginė varža: 5,8.1014 omų/cm
* Paviršiaus varža: 1,3.1016 omų
* Dervos ir kietiklio maišymo santykis: 2 : 1
* Puodo gaminimo laikas: 20 à 30 min.
* kietėjimo trukmė: 16 à 30 val.
* Galutinė sukietėjusi būsena: 10 à 14 dienų
* Klampa (sumaišyta): 500 à 600 mPa.s
* kietumas pagal Šoro skalę: D 50-55 (ISO 868, DIN 53505)
* Šilumos laidumas: 0,3 W/mK
* Naudojimo temperatūra: - Nuo 20 iki +130 °C

Turėtų tikti ir "Electrolube" [poliuretano derva UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf).

Kiekvienam vamzdeliui turėtų pakakti 15 g dervos.

<img src="../docs/dnms/dnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy"/>

Kai derva sukietės, nuimkite juostą. Jūsų mikrofono įrenginys paruoštas.


### DNMS korpusas

Kai "Teensy" (DNMS) ir "NodeMCU" (atskiras arba ant spausdintinės plokštės) yra atskirti: DNMS ir airRohr

Jums reikia 25 mm skersmens vamzdžio gabalo (pvz., elektros reikmėms skirto vamzdžio), jungties, 90° lankelio ir M25 IP68 kabelio įvorės.

Pats vamzdelis turėtų būti 160 mm ilgio. DNMS atrodo vietoje. Mikrofono korpusą palaiko kabelio įvorė.

Lankelis neleidžia vandeniui ir drėgmei patekti į korpusą, kartu praleidžia kabelį.

<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

DNMS prie antrosios spausdintinės plokštės prijungiamas RJ12 kabeliu. Jei šis kabelis ilgesnis nei 250 mm, turite naudoti I²C prailgintuvą.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

Viską gerai sujungus, dalys suklijuojamos.

Rezultatas:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

Plokštę su "NodeMCU" galima įdėti į bet kokią elektros dėžutę.

### Apsauga nuo oro sąlygų

Patys korpusai turi būti atsparūs vandeniui. Jautrus galėtų būti tik mikrofono įvadas. Gamintojas TDK paskelbė keletą rekomendacijų, kaip "InvenSense" apatinio prievado MEMS mikrofonus sandarinti nuo dulkių ir skysčių patekimo, tačiau komponentų sunku rasti ir jie nebuvo išbandyti.

Būtinai reikia įrengti apsaugą nuo oro sąlygų - putplasčio dangtelį. Jei reikia, pakanka net buitinės kempinės. Tam yra kelios priežastys:
* ji apsaugo nuo vėjo keliamo triukšmo (kuris gali padidinti decibelų skaičių)
* apsaugo nuo tiesioginio vandens pratekėjimo ant mikrofono. Kad ant mikrofono nesusidarytų kondensatas, sumontavę dangtelį šiek tiek patraukite atgal, kad susidarytų nedidelė ertmė.
* apsaugo nuo saulės spinduliuotės. Intensyvūs saulės spinduliai gali turėti įtakos matuojamoms vertėms ir sutrumpinti mikrofono tarnavimo laiką.

<img src="../docs/dnms/dnms-noise-measuring-microphone-bonette.jpg" style="width:45%; margin: 3em 0" loading="lazy"/>

Tie putplasčio dangteliai paprastai parduodami kaip "matavimo mikrofonų dangteliai". Tačiau jie yra brangūs. Taip pat galite paimti įprastą putplasčio rutuliuką ir žirklėmis iškirpti skylę.

If you need more ones [this source](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2
) gali būti naudingas.

### Mikrofono vieta

Svarbu, kad mikrofonas būtų kuo "laisvesnėje" vietoje, t. y. tokioje vietoje, kur yra kuo mažiau garsą atspindinčių paviršių. Atstumas iki garsą atspindinčių paviršių turėtų būti kuo didesnis. Stenkitės nemontuoti mikrofono tiesiai ant namo sienos, nes sienos stipriai atspindi garsus.  Idealiu atveju atstumas iki sienos turėtų būti didesnis nei 1 m. Žinoma, tai ne visada lengva įgyvendinti.

Kai atstumas nuo mikrofono galo iki sienos yra apie 50 cm, sukeliama paklaida vis dar yra priimtina. Geros vietos yra, pavyzdžiui, balkonai ar terasų turėklai arba nedidelis stiebas ant stogo.

Taip pat galite pabandyti pastatyti mikrofoną tiesiai ant namo kampo, kad atspindžiai iš dalies panaikintų vienas kitą.

Laisvai pastatomas bent 1 m aukščio stiebas taip pat galėtų būti išeitis, tačiau tuomet reikia saugotis atspindžių nuo žemės. Tai, žinoma, priklauso nuo grindų dangos.

Taip pat svarbu visada žinoti, kad matuojame aplinkos triukšmą.  Galime tik apytiksliai įvertinti tokių šaltinių, kaip keliai ar geležinkeliai, skleidžiamą triukšmą.

Tačiau kuo arčiau šaltinio, tuo tikslesnė tampa nuoroda į šaltinį. Atnaujinus programinę įrangą turėtų būti galima gauti tikslius nustatyto tipo triukšmo matavimus.

<img src="../docs/dnms/measuring-sensor-on-balcony.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<img src="../docs/dnms/measuring-sensor-on-terasse.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<br>
<img src="../docs/dnms/measuring-sensor-on-wall.jpg" style="width:99%; margin-bottom: 2em;" loading="lazy"/>

