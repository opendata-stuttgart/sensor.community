---
title: montēt
---
> ⚠️ **SVARĪGA PIEZĪME**
Pirms montāžas instalējiet programmaparatūru!
Skatiet __firmware flasher__ sadaļu.


### Mikrofonu bloks

Mikrofona bloka pamatā ir Pesky Products atdalīšanas plate ar MEMS mikrofonu ICS-43434. Šādu plati var atrast [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).

<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>

##### Mikrofona bloka korpuss
Korpuss ir izgatavots no 0,500" (12,7 mm) polistirola caurules. Šāds diametrs ļauj tieši pieslēgt lielāko daļu kalibrēšanas ierīci.

Prototips tika izstrādāts ar [Evergreen Nr. 236 caurulīti] (https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

<img src="../docs/dnms/dnms-noise-measuring-microphone-anschluesse.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>

<br>
Izvadplate ir jāpielāgo caurules diametram, izmantojot failu. Izmantojiet kādu lentu, lai aizsargātu mikrofona ieeju.
<br>

<img src="../docs/dnms/dnms-noise-measuring-microphone-protection.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection-front.jpg" style="width:41%; margin: 2em 0" loading="lazy"/>

Tad pielodējiet sešus silikona kabeļus. Pievērsiet uzmanību, ar kuru kontaktspraudni kabelis ir savienots!

<img src="../docs/dnms/dnms-noise-measuring-microphone-with-cable.jpg" style="display: block; width:40%; margin: 2em 0" loading="lazy"/>

Nogrieziet 115 mm garu caurules gabalu.
<br>
Uzlīmējiet mikrofona plati uz šķērsgrieztas lentes. Ievietojiet kabeļus caurulītē un piestipriniet plati caurules galā.
<br>

<img src="../docs/dnms/dnms-noise-measuring-microphone-preparing-housing.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-housing.jpg" style="width:42%; margin: 2em 0" loading="lazy"/>


Caurulītes galu nostipriniet ar lentu.

<img src="../docs/dnms/dnms-noise-measuring-microphone-tube.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>

Tagad varat piepildīt caurulīti ar sveķiem. Šis solis ir obligāts, lai izvairītos no rezonanses un iegūtu kalibrētus un reproducējamus datus.

Prototips tika izstrādāts, izmantojot dažus [PURe Isolation ST 33] (https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900), ko ražo Copaltec GmbH.

##### Specifikācijas
* Dielektriskā izturība: 28 kV/mm
* Īpatnējā tiešā pretestība: 5,8.1014 omu/cm.
* Virsmas pretestība: 1,3.1016 omu
* Sveķu un cietinātāja sajaukšanas attiecība: 2 : 1
* Katla gatavošanas laiks: 20 à 30 min.
* Cietēšanas laiks: 16 à 30 h
* Galīgais sacietējušais stāvoklis: 10 à 14 dienas
* Viskozitāte (sajaukta): 500 à 600 mPa.s
* cietība pēc Šora: D 50 līdz 55 (ISO 868, DIN 53505).
* Siltumvadītspēja: 0,3 W/mK
* Lietošanas temperatūra: * Ūdensnecaurlaidība: - 20 līdz +130 °C


Derētu izmantot arī [poliuretāna sveķus UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf), ko ražo Electrolube.

Katrai caurulei pietiek ar 15 g sveķu.

<img src="../docs/dnms/dnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy"/>

Kad sveķi ir sacietējuši, noņemiet lenti. Jūsu mikrofona ierīce ir gatava.



### DNMS korpuss

Kad Teensy (DNMS) un NodeMCU (atsevišķs vai uz PCB) ir atdalīti: DNMS un airRohr

Jums ir nepieciešams 25 mm diametra caurules gabals (piemēram, elektrotehnikas lietojumiem paredzēta caurule), savienotājs, 90° līkums un M25 IP68 kabeļa ieliktnis.

Caurulei jābūt 160 mm garai. DNMS izskatās vietā. Mikrofona korpusu uztur kabeļa blīvslēgs.

Loks novērš ūdens un mitruma iekļūšanu korpusā, vienlaikus ļaujot kabeli caur to iet.

<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

DNMS ir savienots ar otru PCB ar RJ12 kabeli. Ja šis kabelis ir garāks par 250 mm, jāizmanto I²C pagarinātājs.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

Kad viss ir labi savienots, detaļas tiek salīmētas kopā.

Rezultāts:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

PCB ar NodeMCU var ievietot jebkura veida elektriskā kastē.

### Laika apstākļu aizsardzība

Pašiem korpusiem jābūt ūdensnecaurlaidīgiem. Jutīgs varētu būt tikai mikrofona ieplūdes savienojums. Ražotājs TDK ir publicējis dažus ieteikumus InvenSense MEMS mikrofonu ar apakšējo portu blīvēšanai pret putekļu un šķidrumu iekļūšanu, taču sastāvdaļas ir grūti atrast, un tās netika pārbaudītas.

Noteikti ir jāuzstāda aizsardzība pret laikapstākļiem putuplasta apvalka veidā. Nepieciešamības gadījumā pietiek pat ar sadzīves sūkli. Tam ir vairāki iemesli:
* tas pasargā no vēja radītā trokšņa (kas var palielināt decibelu mērījumus).
* tas aizsargā pret tiešu ūdens noplūdi uz mikrofona. Lai izvairītos no kondensāta veidošanās uz mikrofona, pēc uzstādīšanas atvelciet vāciņu, lai izveidotu nelielu dobumu.
* tas aizsargā pret saules starojumu. Intensīvi saules stari var ietekmēt izmērītās vērtības un samazināt mikrofona kalpošanas laiku.

<img src="../docs/dnms/dnms-noise-measuring-microphone-bonette.jpg" style="width:45%; margin: 3em 0" loading="lazy"/>

Šie putuplasta vāciņi parasti tiek pārdoti kā "vāciņi mērīšanas mikrofoniem". Bet tie ir dārgi. Var arī paņemt parastu putuplasta bumbiņu un ar šķērēm izgriezt caurumu.

If you need more ones [this source](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2
) var noderēt.

### Mikrofona atrašanās vieta

Ir svarīgi novietot mikrofonu pēc iespējas "brīvākā" vietā, tas nozīmē vietā, kur ir pēc iespējas mazāk skaņu atstarojošu virsmu. Attālumam līdz atstarojošām virsmām jābūt pēc iespējas lielākam. Mēģiniet neuzstādīt mikrofonu tieši pie mājas sienas, jo sienas spēcīgi atstaro skaņas.  Ideālā gadījumā attālumam līdz sienai vajadzētu būt lielākam par 1 m. Protams, to ne vienmēr ir viegli realizēt.

Ja attālums no mikrofona gala līdz sienai ir aptuveni 50 cm, inducētā kļūda joprojām ir pieņemama. Labas vietas ir, piemēram, balkoni vai terases margas, vai neliels masts uz jumta.

Var arī mēģināt novietot mikrofonu tieši uz mājas stūra, lai atspulgi daļēji savstarpēji izkliedētu viens otru.

Risinājums varētu būt arī vismaz 1 m augsts brīvi stāvošs masts, taču tad jāuzmanās no atspīdumiem no zemes. Tas, protams, ir atkarīgs no grīdas seguma.

Svarīgi ir arī vienmēr apzināties, ka mēs mēra apkārtējās vides troksni.  Mēs varam tikai aptuveni novērtēt trokšņa emisiju no tādiem avotiem kā ceļi vai dzelzceļš.

Tomēr, jo tuvāk avotam, jo precīzāka kļūst atsauce uz avotu. Programmatūras atjauninājumiem būtu jāspēj iegūt precīzus mērījumus identificētajam trokšņa veidam.

<img src="../docs/dnms/measuring-sensor-on-balcony.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<img src="../docs/dnms/measuring-sensor-on-terasse.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<br>
<img src="../docs/dnms/measuring-sensor-on-wall.jpg" style="width:99%; margin-bottom: 2em;" loading="lazy"/>