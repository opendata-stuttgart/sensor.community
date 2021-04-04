---
title: Saml
---
> ⚠️ **VIGTIG BEMÆRKNING**
Før montering installeres firmwaren!
Se afsnittet __firmware flasher__.


#### Mikrofonenhed

Mikrofonenheden er baseret på Pesky Products breakout board med en MEMS-mikrofon ICS-43434. Du kan finde et sådant board på [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).

Mikrofonenheden er baseret på Pesky Products breakout board med en MEMS-mikrofon ICS-43434. Du kan finde et sådant board på [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).


##### Hus til mikrofonenheden
Huset er fremstillet af 12,7 mm (.500") polystyrenrør. Denne diameter gør det muligt at tilslutte de fleste kalibratorer direkte til enheden.

Prototypen blev udviklet med [Evergreen No. 236 slange](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

Prototypen blev udviklet med [Evergreen No. 236 slange](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).
<br>
Breakoutkortet skal tilpasses til slangens diameter med en fil. Brug noget tape til at beskytte mikrofonindgangen.
<br>

<br>
<br>

Lodde derefter de seks silikonekabler. Bemærk, hvilken pin kablet er forbundet med!

Lodde derefter de seks silikonekabler. Bemærk, hvilken pin kablet er forbundet med!
Skær et 115 mm langt stykke slange af.
<br>
Sæt mikrofonpladen fast på noget krydset tape. Sæt kablerne i slangen og fastgør tavlen ved slangens yderste ende.
<br>
<br>
<br>

Sørg for, at rørets yderste del er tæt med tape.

Sørg for, at rørets yderste del er tæt med tape.

Nu kan du fylde røret med noget harpiks. Dette trin er obligatorisk for at undgå resonans og opnå kalibrerede og reproducerbare data.

Prototypen blev udviklet med [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900) produceret af Copaltec GmbH.

##### Specifikationer:
* Dielektrisk styrke: 28 kVmm
* Specifik fremadrettet modstand: 5,8.1014 ohmcm
* Overflademodstand: 1,3.1016 ohm
* Blandingsforhold resinhardener: 2 : 1
* Grydetid: 20 til 30 minutter.
* Hærdningstid: 16 til 30 timer
* Final hardened state: 10 to 14 days
* Viskositet (blandet): 500 à 600 mPa.s
* Shore-hårdhed: D 50 til 55 (ISO 868, DIN 53505)
* Varmeledningsevne: 0,3 WmK
* Anvendelsestemperaturer: - 20 til +130 °C


[polyurethanharpiks UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) fra Electrolube burde også fungere.

For hver slange bør 15 g harpiks være tilstrækkeligt til hver slange.

<img src="..docsdnmsdnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy">

Når harpiksen er hærdet, fjernes tapen. Din mikrofonenhed er klar.



#### DNMS-hus

Når Teensy (DNMS) og NodeMCU'en (standalone eller på PCB) er adskilt: DNMS og airRohr

Du skal bruge et stykke slange med en diameter på 25 mm (f.eks. slange til elektriske applikationer), et stik, en 90° bue og en M25 IP68 kabelforskruning.

Selve røret skal være 160 mm langt. DNMS ser ud til at være placeret i. Mikrofonhuset fastholdes af kabelforskruningen.

Buen forhindrer vand og fugt i at trænge ind i huset, mens kablet kan passere.

<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

DNMS er forbundet til det andet PCB med et RJ12-kabel. Hvis dette kabel er længere end 250 mm, skal du bruge en I²C-forlænger.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

Når alt er godt forbundet, limes delene sammen.

Resultat:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

PCB'et med NodeMCU'en kan placeres i en hvilken som helst elektrisk boks.


### Vejrbeskyttelse

Selve husene skal være vandtætte. Kun mikrofonindgangen kan være følsom. TDK, producenten, har offentliggjort nogle anbefalinger til forsegling af InvenSense MEMS-mikrofoner med bundport mod støv og væskeindtrængning, men komponenterne er svære at finde og blev ikke testet.

Det er absolut nødvendigt at installere en vejrbeskyttelse i form af et skumdække. Om nødvendigt er selv en husholdningssvamp tilstrækkelig. Der er flere grunde til dette:
* det beskytter mod vindstøj (som kan øge decibelmålingerne)
* den beskytter mod direkte vandlækage på mikrofonen. For at undgå kondensvand på mikrofonen skal du trække dækslet et stykke tilbage efter montering for at skabe et lille hulrum.
* det beskytter mod solstråling. Intensivt sollys kan påvirke de målte værdier og reducere mikrofonens levetid.

* det beskytter mod solstråling. Intensivt sollys kan påvirke de målte værdier og reducere mikrofonens levetid.

Disse skumdæksler sælges normalt som "dæksler til målemikrofoner". Men de er dyre. Du kan også tage en normal skumkugle og klippe et hul med en saks.

If you need more ones [this source](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2
) can be helpful.

### Mikrofonens placering

Det er vigtigt at placere mikrofonen i et område, der er så "frit" som muligt, dvs. et sted med så få lydreflekterende overflader som muligt. Afstanden til reflekterende overflader bør være så stor som muligt. Prøv ikke at montere mikrofonen direkte på en husmur, da vægge reflekterer lyden kraftigt.  Afstanden til væggen bør ideelt set være mere end 1 m. Dette er naturligvis ikke altid let at realisere.

Med en afstand på ca. 50 cm fra mikrofonens spids til væggen er den inducerede fejl stadig rimelig. Gode steder er f.eks. balkoner eller terrassegelænder eller en lille mast på taget.

Du kan også prøve at placere mikrofonen direkte på et hjørne af huset, så refleksionerne delvist ophæver hinanden.

En fritstående mast på mindst 1 m højde kan også være en løsning, men så skal du være opmærksom på refleksioner på jorden. Det afhænger naturligvis af gulvbelægningen.

Det er også vigtigt at være opmærksom på, at vi altid måler den omgivende støj.  Vi kan kun lave en tilnærmelse af støjemissionen fra kilder som f.eks. veje eller jernbaner.

Men jo tættere man kommer på kilden, jo mere præcis bliver henvisningen til kilden. Opgraderinger af firmwaren bør derefter kunne give præcise målinger for en identificeret type støj.

Men jo tættere man kommer på kilden, jo mere præcis bliver henvisningen til kilden. Opgraderinger af firmwaren bør derefter kunne give præcise målinger for en identificeret type støj.
Men jo tættere man kommer på kilden, jo mere præcis bliver henvisningen til kilden. Opgraderinger af firmwaren bør derefter kunne give præcise målinger for en identificeret type støj.
<br>
<br>
