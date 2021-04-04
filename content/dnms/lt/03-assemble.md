---
title: Surinkite
---
> ⚠️ **SVARBI PASTABA**
Prieš surinkdami įdiekite programinę įrangą!
Žr. __firmware flasher__ skyrių.


#### Mikrofono įrenginys

Mikrofono blokas yra pagrįstas "Pesky Products" pertraukimo plokšte su MEMS mikrofonu ICS-43434. Tokią plokštę galite rasti [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).

Mikrofono blokas yra pagrįstas "Pesky Products" pertraukimo plokšte su MEMS mikrofonu ICS-43434. Tokią plokštę galite rasti [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).


##### Mikrofono bloko korpusas
Korpusas pagamintas iš 0,500" (12,7 mm) polistireninio vamzdžio. Toks skersmuo leidžia tiesiogiai prijungti daugumą kalibratorių prie įrenginio.

Prototipas buvo sukurtas naudojant [Evergreen Nr. 236 vamzdį](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

Prototipas buvo sukurtas naudojant [Evergreen Nr. 236 vamzdį](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).
<br>
Išardymo plokštę reikia pritaikyti prie vamzdžio skersmens naudojant pjūklelį. Mikrofono įvadui apsaugoti naudokite lipnią juostą.
<br>

<br>
<br>

Tada sulituokite šešis silikoninius kabelius. Atkreipkite dėmesį, prie kurio kontakto prijungtas kabelis!

Tada sulituokite šešis silikoninius kabelius. Atkreipkite dėmesį, prie kurio kontakto prijungtas kabelis!
Nupjaukite 115 mm ilgio vamzdžio gabalą.
<br>
Mikrofono plokštę priklijuokite ant sukryžiuotos juostos. Kabelius įkiškite į vamzdelį ir pritvirtinkite plokštę prie vamzdžio galo.
<br>
<br>
<br>

Vamzdelio galą užklijuokite lipnia juosta.

Vamzdelio galą užklijuokite lipnia juosta.

Dabar galite užpildyti vamzdelį derva. Šis žingsnis yra privalomas, kad būtų išvengta rezonanso ir gauti kalibruoti bei atkuriami duomenys.

Prototipas buvo sukurtas naudojant "Copaltec GmbH" pagamintą [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900).

##### Specifikacijos:
* Dielektrinis stipris: 28 kVmm
* Specifinis pasipriešinimas pirmyn: 5,8.1014 omcm
* Paviršiaus varža: 1,3.1016 omų
* Maišymo santykis tarp dervos ir kietiklio: 2 : 1
* Puodo virimo laikas: 20-30 min.
* Kietėjimo laikas: 16 à 30 val.
* Galutinė sukietėjusi būsena: 10-14 dienų
* Klampa (sumaišyta): 500 à 600 mPa.s
* Šoro kietumas: D 50-55 (ISO 868, DIN 53505).
* Šilumos laidumas: 0,3 WmK
* Taikymo temperatūra: - Nuo 20 iki +130 °C


Turėtų tikti ir "Electrolube" [poliuretano derva UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf).

Kiekvienam vamzdeliui turėtų pakakti 15 g dervos.

<img src="...docsdnmsdnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy">

Kai derva sukietės, nuimkite juostą. Mikrofono įrenginys paruoštas.



#### DNMS korpusas

Kai "Teensy" (DNMS) ir "NodeMCU" (atskiras arba PCB) yra atskirti: DNMS ir airRohr

Jums reikia 25 mm skersmens vamzdžio gabalo (pvz., elektrinio vamzdžio), jungties, 90° lanko ir M25 IP68 kabelio įvorės.

Vamzdelis turi būti 160 mm ilgio. DNMS atrodo vietoje. Mikrofono korpusą palaiko kabelio įvorė.

Lankas neleidžia vandeniui ir drėgmei patekti į korpusą, o kabelį praleidžia.

<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

DNMS prie antrosios spausdintinės plokštės prijungtas RJ12 kabeliu. Jei šis kabelis ilgesnis nei 250 mm, reikia naudoti I²C prailgintuvą.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

Viską gerai sujungus, dalys suklijuojamos.

Rezultatas:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

Plokštę su "NodeMCU" galima įdėti į bet kokią elektros dėžutę.


#### Apsauga nuo oro sąlygų

Patys korpusai turėtų būti atsparūs vandeniui. Jautrus galėtų būti tik mikrofono įvadas. Gamintojas TDK paskelbė keletą rekomendacijų, kaip "InvenSense" apatinio prievado MEMS mikrofonus sandarinti nuo dulkių ir skysčių patekimo, tačiau komponentų sunku rasti ir jie nebuvo išbandyti.

Būtinai reikia įrengti apsaugą nuo oro sąlygų - putplasčio dangą. Jei reikia, pakanka net buitinės kempinės. Tam yra kelios priežastys:
* apsaugo nuo vėjo keliamo triukšmo (kuris gali padidinti decibelų skaičių)
* jis apsaugo nuo tiesioginio vandens nutekėjimo ant mikrofono. Kad ant mikrofono nesusidarytų kondensato, po montavimo šiek tiek atitraukite dangtelį, kad susidarytų nedidelė ertmė.
* apsaugo nuo saulės spinduliuotės. Intensyvūs saulės spinduliai gali turėti įtakos matuojamoms vertėms ir sutrumpinti mikrofono tarnavimo laiką.

* apsaugo nuo saulės spinduliuotės. Intensyvūs saulės spinduliai gali turėti įtakos matuojamoms vertėms ir sutrumpinti mikrofono tarnavimo laiką.

Šie putplasčio dangteliai paprastai parduodami kaip "matavimo mikrofonų dangteliai". Tačiau jie yra brangūs. Taip pat galite paimti įprastą putplasčio rutuliuką ir žirklėmis iškirpti skylę.

If you need more ones [this source](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2
) can be helpful.

#### Mikrofono vieta

Svarbu, kad mikrofonas būtų kuo laisvesnėje vietoje, t. y. tokioje, kurioje yra kuo mažiau garsą atspindinčių paviršių. Atstumas iki garsą atspindinčių paviršių turėtų būti kuo didesnis. Stenkitės nemontuoti mikrofono tiesiai ant namo sienos, nes sienos stipriai atspindi garsus.  Idealiu atveju atstumas iki sienos turėtų būti didesnis nei 1 m. Žinoma, tai ne visada lengva įgyvendinti.

Kai atstumas nuo mikrofono galo iki sienos yra apie 50 cm, sukelta paklaida vis dar yra pagrįsta. Geros vietos yra, pavyzdžiui, balkonai, terasų turėklai arba nedidelis stiebas ant stogo.

Taip pat galite pabandyti pastatyti mikrofoną tiesiai ant namo kampo, kad atspindžiai iš dalies panaikintų vienas kitą.

Laisvai pastatomas bent 1 m aukščio stiebas taip pat galėtų būti sprendimas, tačiau tuomet reikia saugotis atspindžių ant žemės. Tai, žinoma, priklauso nuo grindų dangos.

Taip pat svarbu visada žinoti, kad matuojame aplinkos triukšmą.  Galime tik apytiksliai įvertinti tokių šaltinių, kaip keliai ar geležinkeliai, skleidžiamą triukšmą.

Tačiau kuo arčiau šaltinio, tuo tikslesnė tampa nuoroda į šaltinį. Atnaujinus programinę įrangą turėtų būti galima gauti tikslius nustatyto tipo triukšmo matavimus.

Tačiau kuo arčiau šaltinio, tuo tikslesnė tampa nuoroda į šaltinį. Atnaujinus programinę įrangą turėtų būti galima gauti tikslius nustatyto tipo triukšmo matavimus.
Tačiau kuo arčiau šaltinio, tuo tikslesnė tampa nuoroda į šaltinį. Atnaujinus programinę įrangą turėtų būti galima gauti tikslius nustatyto tipo triukšmo matavimus.
<br>
<br>
