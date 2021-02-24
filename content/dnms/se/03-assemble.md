---
title: Montera
---
> ⚠️  **VIKTIGT ANMÄRKNING** Installera firmware innan montering! Se avsnittet __firmware flasher__.


### Mikrofonenhet

Mikrofonenheten är baserad på Pesky Products brytkort med en MEMS-mikrofon ICS-43434. Du kan finla en sådan tavla på [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/). 

<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>


##### Hölje för mikrofonenheten
Höljet är tillverkat med en 0,55 "(12,7 mm) polystyrenrör. Denna diameter gör det möjligt att direkt ansluta de flesta kalibratorer på enheten.

Prototypen utvecklades med [Evergreen No. 236 slangar](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

<img src="../docs/dnms/dnms-noise-measuring-microphone-anschluesse.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>
<br>
Brytbrädan måste anpassas till slangens diameter med en fil. Använd lite tejp för att skydda mikrofoninloppet.
<br>

<img src="../docs/dnms/dnms-noise-measuring-microphone-protection.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection-front.jpg" style="width:41%; margin: 2em 0" loading="lazy"/>

Löd sedan de sex silikonkablarna. Observera vilken stift kabeln är ansluten till!

<img src="../docs/dnms/dnms-noise-measuring-microphone-with-cable.jpg" style="display: block; width:40%; margin: 2em 0" loading="lazy"/>
Klipp en 115 mm lång slangbit.
<br>
Stick mikrofonkortet på något korsat tejp. Lägg kablarna i slangen och fäst kortet vid slangens yttersta del.
<br>
<img src="../docs/dnms/dnms-noise-measuring-microphone-preparing-housing.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-housing.jpg" style="width:42%; margin: 2em 0" loading="lazy"/>

Gör rörets ändar täta med tejpen.

<img src="../docs/dnms/dnms-noise-measuring-microphone-tube.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>

Nu kan du fylla röret med lite harts. Detta steg är obligatoriskt för att undvika resonans och erhålla kalibrerade och reproducerbara data.

Prototypen utvecklades med en del [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900) producerad av Copaltec GmbH.

##### Specifikationer:
* Dielektrisk hållfasthet: 28 kV / mm
* Specifikt framåtriktat motstånd: 5,8.1014 ohm / cm
* Ytmotstånd: 1,3.1016 ohm
* Blandningsförhållande harts / härdare: 2: 1
* Pottid: 20 à 30 min.
Härdningstid: 16 à 30 timmar
* Slutligt härdat tillstånd: 10 à 14 dagar
* Viskositet (blandad): 500 till 600 mPa.s
* Strandhårdhet: D 50 till 55 (ISO 868, DIN 53505)
* Värmeledningsförmåga: 0,3 W / mK
* Användningstemperaturer: - 20 till +130° C

[Polyuretanharts UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) tillverkad av Electrolube bör också fungera.

För varje slang bör 15 g harts vara tillräckligt.

<img src="../docs/dnms/dnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy"/>

Ta bort tejpen när hartset har härdat. Din mikrofonenhet är klar.

### DNMS bostäder

När Teensy (DNMS) och NodeMCU (fristående eller på PCB) är åtskilda: DNMS och airRohr

Du behöver en bit med 25 mm diameter slang (till exempel slang för elektriska applikationer), en kontakt, en 90 ° båge och en M25 IP68-kabelförskruvning.

Själva röret ska vara 160 mm långt. DNMS ser ut i. Mikrofonhöljet underhålls av kabelgenomföringen.

Fören förhindrar att vatten och fukt tränger in i huset medan kabeln passerar.

<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

DNMS är ansluten till det andra kretskortet med en RJ12-kabel. Om denna kabel är längre än 250 mm måste du använda en I²C-förlängning.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

När allt är väl anslutet limmas delarna ihop.

Resultat:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

Kretskortet som bär NodeMCU kan placeras i alla slags elektriska lådor.

### Väderskydd

Husen själva ska vara vattentäta. Endast mikrofoninloppet kan vara känsligt. TDK, tillverkaren har publicerat några rekommendationer för tätning av InvenSense bottenport MEMS-mikrofoner från damm och vätskeintrång men komponenterna är svåra att hitta och testades inte.

Det är absolut nödvändigt att installera ett väderskydd i form av ett skumskydd. Vid behov räcker även en hushållssvamp. Det finns flera orsaker till detta:
* det skyddar mot vindbrus (vilket kan öka mätningarna av decibel)
* det skyddar mot direkt vattenläckage på mikrofonen. För att undvika kondens på mikrofonen, dra tillbaka locket ett slag efter installationen för att skapa ett litet hålrum.
* det skyddar mot solstrålning. Intensivt solljus kan påverka de uppmätta värdena och minska mikrofonens livslängd.

<img src="../docs/dnms/dnms-noise-measuring-microphone-bonette.jpg" style="width:45%; margin: 3em 0" loading="lazy"/>

Dessa skumskydd säljs normalt som ”lock för mätmikrofoner”. Men de är dyra. Du kan också ta en vanlig skumkula och klippa ett hål med saxen.

Om du behöver fler [den här källan](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2) kan vara till hjälp.

### Mikrofonens plats

Det är viktigt att placera mikrofonen i ett område så "fritt" som möjligt, det vill säga på en plats med så mindre ljudreflekterande ytor som möjligt. Avståndet till reflekterande ytor ska vara så stort som möjligt. Försök att inte montera mikrofonen direkt på husets vägg, eftersom väggarna reflekterar ljudet starkt. Avståndet till väggen bör helst vara mer än 1 m. Naturligtvis är det inte alltid lätt att förstå.

Med ett avstånd på cirka 50 cm från mikrofonens spets till väggen är det inducerade felet fortfarande rimligt. Bra ställen är till exempel balkonger eller terrassräcken, eller en liten mast på taket.

Du kan också försöka placera mikrofonen direkt på husets hörn för att reflektionerna delvis ska avbryta varandra.

En fristående mast på minst 1 m höjd kan också vara en lösning, men då måste du se upp för reflektioner på marken. Det beror naturligtvis på golvbeläggningen.

Det är också viktigt att alltid vara medveten om att vi mäter omgivningsbuller. Vi kan bara göra en approximation av buller från källor som vägar eller järnvägar.

Ju närmare källan kommer, desto mer exakt blir referensen till källan. Uppgraderingar av firmware bör då kunna få exakta mätningar för en identifierad typ av buller.

<img src="../docs/dnms/measuring-sensor-on-balcony.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<img src="../docs/dnms/measuring-sensor-on-terasse.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<br>
<img src="../docs/dnms/measuring-sensor-on-wall.jpg" style="width:99%; margin-bottom: 2em;" loading="lazy"/>
