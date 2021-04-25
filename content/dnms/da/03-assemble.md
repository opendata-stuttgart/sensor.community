---
title: Saml
---

> ⚠️ **VIGTIG NOTE**
Installer firmwaren, før du samler den!
Se afsnittet __firmware flasher__.

### Mikrofonenhed

Mikrofonenheden er baseret på Pesky Products breakout board med en MEMS-mikrofon ICS-43434. Du kan finde et sådant board på [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).

<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>

#### Hus til mikrofonenheden
Huset er fremstillet med en .500" (12,7 mm) polystyrenrør. Denne diameter gør det muligt at tilslutte de fleste kalibratorer direkte til enheden.

Prototypen blev udviklet med [Evergreen No. 236-slange](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

<img src="../docs/dnms/dnms-noise-measuring-microphone-anschluesse.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>

<br>
Breakoutkortet skal tilpasses til slangens diameter med en fil. Brug noget tape for at beskytte mikrofonindgangen.
<br>

<img src="../docs/dnms/dnms-noise-measuring-microphone-protection.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection-front.jpg" style="width:41%; margin: 2em 0" loading="lazy"/>

Lodder derefter de seks silikonekabler. Bemærk, hvilken pin kablet er forbundet med!

<img src="../docs/dnms/dnms-noise-measuring-microphone-with-cable.jpg" style="display: block; width:40%; margin: 2em 0" loading="lazy"/>
Skær et 115 mm langt stykke slange af.
<br>
Sæt mikrofonpladen fast på noget krydset tape. Sæt kablerne i slangen og fastgør tavlen ved slangens yderste ende.
<br>
<img src="../docs/dnms/dnms-noise-measuring-microphone-preparing-housing.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-housing.jpg" style="width:42%; margin: 2em 0" loading="lazy"/>

Sørg for, at rørets yderste ende er tæt med tapen.

<img src="../docs/dnms/dnms-noise-measuring-microphone-tube.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>

Nu kan du fylde røret med noget harpiks. Dette trin er obligatorisk for at undgå resonans og opnå kalibrerede og reproducerbare data.

Prototypen blev udviklet med noget [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900) produceret af Copaltec GmbH.

#### Specifikationer
* Dielektrisk styrke: 28 kV/mm
* Specifik fremadrettet modstand: 5,8.1014 ohm/cm
* Overflademodstand: 1,3.1016 ohm
* Blandingsforhold harpiks/hærder: 2 : 1
* Grydetid: 20 à 30 min.
* Hærdningstid: 16 à 30 timer
* Endelig hærdet tilstand: 10 à 14 dage
* Viskositet (blandet): 500 à 600 mPa.s
* Shore-hårdhed: D 50 til 55 (ISO 868, DIN 53505)
* Varmeledningsevne: 0,3 W/mK
* Anvendelsestemperaturer: - 20 til +130 °C

[polyurethanharpiks UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) fra Electrolube burde også fungere.

For hver slange er 15 g harpiks nok til hver slange.

<img src="../docs/dnms/dnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy"/>

Når harpiksen er hærdet, fjernes tapen. Din mikrofonenhed er klar.


### DNMS-hus

Når Teensy (DNMS) og NodeMCU'en (standalone eller på PCB) er adskilt: DNMS og airRohr

Du skal bruge et stykke slange med en diameter på 25 mm (f.eks. slange til elektriske applikationer), et stik, en 90°-bue og en M25 IP68-kabelforskruning.

Selve røret skal være 160 mm langt. DNMS ser plads i. Mikrofonhuset fastholdes af kabelforskruningen.

Buen forhindrer vand og fugt i at trænge ind i huset, mens den lader kablet passere.

<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

DNMS er forbundet til det andet printkort med et RJ12-kabel. Hvis dette kabel er længere end 250 mm, skal du bruge en I²C-forlænger.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

Når alt er godt forbundet, limes delene sammen.

Resultatet:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

PCB'et med NodeMCU'en kan sættes i en hvilken som helst elektrisk boks.


### Vejrbeskyttelse

Selve kabinettet skal være vandtæt. Kun mikrofonindgangen kan være følsom. TDK, producenten, har offentliggjort nogle anbefalinger til forsegling af InvenSense MEMS-mikrofoner med bundport mod indtrængen af støv og væske, men komponenterne er svære at finde og blev ikke testet.

Det er absolut nødvendigt at installere en vejrbeskyttelse i form af et skumdæksel. Om nødvendigt er selv en husholdningssvamp tilstrækkelig. Der er flere grunde til dette:
* det beskytter mod vindstøj (som kan øge decibelmålingerne)
* det beskytter mod direkte vandlækage på mikrofonen. For at undgå kondensvand på mikrofonen skal man trække dækslet et stykke tilbage efter montering for at skabe et lille hulrum.
* beskytter mod solstråling. Intensivt sollys kan påvirke de målte værdier og reducere mikrofonens levetid.

<img src="../docs/dnms/dnms-noise-measuring-microphone-bonette.jpg" style="width:45%; margin: 3em 0" loading="lazy"/>


Disse skumdæksler sælges normalt som "dæksler til målemikrofoner". Men de er dyre. Du kan også tage en normal skumkugle og klippe et hul med saksen.

If you need more ones [this source](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2
) kan være nyttig.

### Placering af mikrofonen

Det er vigtigt at placere mikrofonen i et område så "frit" som muligt, dvs. et sted med så få lydreflekterende overflader som muligt. Afstanden til reflekterende overflader bør være så stor som muligt. Prøv ikke at montere mikrofonen direkte på en husmur, da vægge reflekterer lyden kraftigt.  Afstanden til væggen bør ideelt set være mere end 1 m. Dette er naturligvis ikke altid let at realisere.

Med en afstand på ca. 50 cm fra mikrofonens spids til væggen er den inducerede fejl stadig rimelig. Gode steder er f.eks. altaner eller terrassegelænder eller en lille mast på taget.

Du kan også prøve at placere mikrofonen direkte på et hjørne af huset, så refleksionerne delvist ophæver hinanden.

En fritstående mast på mindst 1 m højde kan også være en løsning, men så skal du passe på refleksioner på jorden. Det afhænger naturligvis af gulvbelægningen.

Det er også vigtigt altid at være opmærksom på, at vi måler den omgivende støj.  Vi kan kun lave en tilnærmelse af støjemissionen fra kilder som f.eks. veje eller jernbaner.

Men jo tættere man kommer på kilden, jo mere præcis bliver referencen til kilden. Opgraderinger af firmwaren bør derefter kunne give præcise målinger for en identificeret type støj.

<img src="../docs/dnms/measuring-sensor-on-balcony.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<img src="../docs/dnms/measuring-sensor-on-terasse.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<br>
<img src="../docs/dnms/measuring-sensor-on-wall.jpg" style="width:99%; margin-bottom: 2em;" loading="lazy"/>
