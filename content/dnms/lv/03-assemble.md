---
title: Salikt
---
> ⚠️ **SVARĪGA PIEZĪME**
Pirms montāžas instalējiet programmaparatūru!
Skatiet __firmware flasher__ sadaļu.


### Mikrofonu bloks

Mikrofona bloka pamatā ir Pesky Products breakout plate ar MEMS mikrofonu ICS-43434. Šādu plati var atrast [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).

Mikrofona bloka pamatā ir Pesky Products breakout plate ar MEMS mikrofonu ICS-43434. Šādu plati var atrast [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).


##### Mikrofona bloka korpuss
Korpuss ir izgatavots no 0,500" (12,7 mm) polistirola caurules. Šis diametrs ļauj tieši pievienot lielāko daļu kalibrēšanas ierīču.

Prototips tika izstrādāts, izmantojot [Evergreen Nr. 236 caurules](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

Prototips tika izstrādāts, izmantojot [Evergreen Nr. 236 caurules](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).
<br>
Izvadplāksne ir jāpielāgo caurules diametram ar faila palīdzību. Izmantojiet lentu, lai aizsargātu mikrofona ieeju.
<br>

<br>
<br>

Pēc tam pielodējiet sešus silikona kabeļus. Ievērojiet, ar kuru kontakttīkla tapu kabelis ir savienots!

Pēc tam pielodējiet sešus silikona kabeļus. Ievērojiet, ar kuru kontakttīkla tapu kabelis ir savienots!
Nogrieziet 115 mm garu caurules gabalu.
<br>
Uzlīmējiet mikrofonu plati uz šķērsgrieztas lentes. Ievietojiet kabeļus caurulītē un piestipriniet plati caurules galā.
<br>
<br>
<br>

Caurulītes galu nostipriniet ar lentu.

Caurulītes galu nostipriniet ar lentu.

Tagad varat piepildīt caurulīti ar sveķiem. Šis solis ir obligāts, lai izvairītos no rezonanses un iegūtu kalibrētus un reproducējamus datus.

Prototips tika izstrādāts, izmantojot dažus [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900), ko ražo Copaltec GmbH.

##### Specifikācijas:
* Dielektriskā izturība: 28 kVmm
* Specifiskā pretestība uz priekšu: 5,8.1014 ohmcm: 5,8.1014 ohmcm
* Virsmas pretestība: 1,3.1016 omu
* Sajaukšanas attiecība sveķu cietinātājs: 2 : 1
* Katla gatavošanas laiks: 20 līdz 30 min.
* Konservēšanas laiks: 16 à 30 h
* Galīgais sacietējušais stāvoklis: 10 līdz 14 dienas
* Viskozitāte (sajaukta): 500 à 600 mPa.s
* Šora cietība: D 50 līdz 55 (ISO 868, DIN 53505).
* Siltumvadītspēja: 0,3 WmK
* Lietošanas temperatūra: - 20 līdz +130 °C


Vajadzētu darboties arī [poliuretāna sveķiem UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf), ko ražo Electrolube.

Katrai caurulei pietiek ar 15 g sveķu.

<img src="..docsdnmsdnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy">

Kad sveķi ir sacietējuši, noņemiet lenti. Mikrofona ierīce ir gatava.



#### DNMS korpuss

Ja Teensy (DNMS) un NodeMCU (atsevišķs vai uz PCB) ir atdalīti: DNMS un airRohr

Nepieciešams 25 mm diametra caurules gabals (piemēram, elektrotehnikai paredzēta caurule), savienotājs, 90° līkums un M25 IP68 kabeļa ieliktnis.

Caurulei jābūt 160 mm garai. DNMS izskatās vieta. Mikrofona korpuss tiek saglabāts ar kabeļa ieliktni.

Loks novērš ūdens un mitruma iekļūšanu korpusā, tajā pašā laikā ļaujot kabeli izvadīt.

<img src="..docsdnmsdnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy">

DNMS ir savienots ar otro PCB ar RJ12 kabeli. Ja šis kabelis ir garāks par 250 mm, jāizmanto I²C pagarinātājs.

<img src="..docsdnmsdnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy">

Kad viss ir labi savienots, detaļas tiek salīmētas kopā.

Rezultāts:

<img src="..docsdnmsdnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy">

PCB ar NodeMCU var ievietot jebkura veida elektriskā kastē.


#### Laika apstākļu aizsardzība

Pašiem korpusiem jābūt ūdensizturīgiem. Jutīgs varētu būt tikai mikrofona ieplūdes savienojums. Ražotājs TDK ir publicējis dažus ieteikumus InvenSense MEMS mikrofonu ar apakšējo portu blīvēšanai pret putekļu un šķidrumu iekļūšanu, taču sastāvdaļas ir grūti atrast, un tās netika pārbaudītas.

Noteikti ir jāuzstāda putuplasta pārklājums, kas aizsargā pret laikapstākļiem. Ja nepieciešams, pietiek pat ar sadzīves sūkli. Tam ir vairāki iemesli:
* tas pasargā no vēja trokšņa (kas var palielināt decibelu mērījumus).
* tas aizsargā mikrofonu no tiešas ūdens noplūdes. Lai izvairītos no kondensāta veidošanās uz mikrofona, pēc uzstādīšanas atvelciet vāciņu, lai izveidotu nelielu dobumu.
* tas aizsargā pret saules starojumu. Intensīvi saules stari var ietekmēt izmērītās vērtības un saīsināt mikrofona kalpošanas laiku.

* tas aizsargā pret saules starojumu. Intensīvi saules stari var ietekmēt izmērītās vērtības un saīsināt mikrofona kalpošanas laiku.

Šos putuplasta vāciņus parasti pārdod kā "vāciņus mērīšanas mikrofoniem". Bet tie ir dārgi. Var arī paņemt parastu putuplasta bumbiņu un ar šķērēm izgriezt caurumu.

If you need more ones [this source](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2) can be helpful.

#### Mikrofona atrašanās vieta

Ir svarīgi novietot mikrofonu pēc iespējas "brīvākā" vietā, tas nozīmē vietā, kur ir pēc iespējas mazāk skaņu atstarojošu virsmu. Attālumam līdz atstarojošām virsmām jābūt pēc iespējas lielākam. Mēģiniet neuzstādīt mikrofonu tieši pie mājas sienas, jo sienas spēcīgi atstaro skaņas.  Ideālā gadījumā attālumam līdz sienai vajadzētu būt lielākam par 1 m. Protams, to ne vienmēr ir viegli realizēt.

Ja attālums no mikrofona gala līdz sienai ir aptuveni 50 cm, inducētā kļūda joprojām ir pamatota. Labas vietas ir, piemēram, balkoni vai terases margas, vai neliels masts uz jumta.

Varat arī mēģināt novietot mikrofonu tieši uz mājas stūra, lai atstarojumi daļēji izkliedētu viens otru.

Risinājums varētu būt arī vismaz 1 m augsts brīvi stāvošs masts, taču tad jāuzmanās no atspīdumiem uz zemes. Tas, protams, ir atkarīgs no grīdas seguma.

Svarīgi ir arī vienmēr apzināties, ka mēs mēra apkārtējās vides troksni.  Mēs varam tikai aptuveni novērtēt trokšņa emisiju no tādiem avotiem kā ceļi vai dzelzceļš.

Tomēr, jo tuvāk avotam, jo precīzāka kļūst atsauce uz avotu. Programmatūras atjauninājumiem būtu jāspēj iegūt precīzus mērījumus identificētajam trokšņa veidam.

<br>
<br>
