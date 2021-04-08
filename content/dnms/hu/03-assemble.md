---
title: Összeállítás
---
> ⚠️ **FONTOS MEGJEGYZÉS**
Összeszerelés előtt telepítse a firmware-t!
Lásd a __firmware flasher__ szakaszt.

### Mikrofon egység

A mikrofonegység a Pesky Products ICS-43434 MEMS-mikrofonnal ellátott breakout lapján alapul. Ilyen lapot a [Tindie piactéren](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/) találsz.

<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>


##### A mikrofonegység háza
A ház 12,7 mm-es (0,500") polisztirol csőből készül. Ez az átmérő lehetővé teszi a legtöbb kalibrátor közvetlen csatlakoztatását az egységre.

A prototípust az [Evergreen No. 236 csővel](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing) fejlesztettük ki.

<img src="../docs/dnms/dnms-noise-measuring-microphone-anschluesse.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>

<br>
A breakout lapot egy reszelővel kell a cső átmérőjéhez igazítani. A mikrofon bemenetének védelmére használjunk ragasztószalagot.
<br>

<img src="../docs/dnms/dnms-zajmérés-mikrofon-védelem.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection-front.jpg" style="width:41%; margin: 2em 0" loading="lazy"/>

Ezután forrasztja be a hat szilikonkábelt. Figyeljük meg, hogy a kábel melyik tűre van csatlakoztatva!

<img src="../docs/dnms/dnms-zajmérés-mikrofon-kábellel.jpg" style="display: block; width:40%; margin: 2em 0" loading="lazy"/>
Vágjunk le egy 115 mm hosszú csődarabot.
<br>
Ragasszuk a mikrofonlapot néhány keresztszalagra. Tegyük a kábeleket a csőbe, és rögzítsük a táblát a cső végére.
<br>
<img src="../docs/dnms/dnms-zajmérés-mikrofon-előkészítő-ház.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src=".../docs/dnms/dnms-noise-measuring-microphone-housing.jpg" style="width:42%; margin: 2em 0" loading="lazy"/>

A cső végét a szalaggal szorítsa meg.

<img src="../docs/dnms/dnms-noise-measuring-microphone-tube.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>

Most már meg lehet tölteni a csövet némi gyantával. Ez a lépés kötelező a rezonancia elkerülése és a kalibrált és reprodukálható adatok elérése érdekében.

A prototípust a Copaltec GmbH által gyártott némi [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900) gyantával fejlesztettük ki.

##### Műszaki adatok
* Dielektromos szilárdság: 28 kV/mm
* Fajlagos előremenő ellenállás: 5,8.1014 ohm/cm
* Felületi ellenállás: 1,3.1016 ohm
* Keverési arány gyanta/keményítő: 2 : 1
* Pot time: 20 à 30 perc.
* Keményedési idő: 16 à 30 óra
* Végső keményedési állapot: 10 à 14 nap
* Viszkozitás (keverve): 500 à 600 mPa.s
* Shore keménység: D 50-55 (ISO 868, DIN 53505)
* Hővezető képesség: 0,3 W/mK
* Alkalmazási hőmérsékletek: - 20 és +130 °C között


Az Electrolube által gyártott [UR5545 poliuretángyanta](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) is működhet.

Minden egyes csőhöz 15 g gyanta elegendő kell, hogy legyen.

<img src="../docs/dnms/dnms-zajmérés-mikrofon-belső-cső.jpg" style="display:block; margin: 2em 0" loading="lazy"/>

Amikor a gyanta megszilárdult, távolítsa el a szalagot. A mikrofonegység készen áll.



### DNMS ház

Amikor a Teensy (DNMS) és a NodeMCU (önállóan vagy NYÁK-on) külön van választva: DNMS és airRohr

Szüksége van egy darab 25 mm átmérőjű csőre (például elektromos alkalmazásokhoz használt cső), egy csatlakozóra, egy 90°-os ívre és egy M25 IP68-as kábelvezetőre.

Magának a csőnek 160 mm hosszúnak kell lennie. A DNMS úgy néz ki, hogy helye van. A mikrofonházat a kábelvezető tömítés tartja.

Az ív megakadályozza a víz és a nedvesség bejutását a házba, miközben átengedi a kábelt.

<img src="../docs/dnms/dnms-zajmérés-ház.jpg" style="margin: 1em 0" loading="lazy"/>

A DNMS egy RJ12-es kábellel csatlakozik a második NYÁK-hoz. Ha ez a kábel 250 mm-nél hosszabb, akkor I²C-hosszabbítót kell használni.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

Miután mindent jól összekötöttünk, az alkatrészeket összeragasztjuk.

Az eredmény:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

A NodeMCU-t hordozó NYÁK bármilyen elektromos dobozba helyezhető.


### Időjárás elleni védelem

Maguknak a házaknak vízállónak kell lenniük. Csak a mikrofonbemenet lehet érzékeny. A gyártó TDK közzétett néhány ajánlást az InvenSense alsó portos MEMS-mikrofonok por és folyadék behatolása elleni tömítésére, de az alkatrészek nehezen fellelhetőek, és nem teszteltük.

Feltétlenül szükséges az időjárás elleni védelem felszerelése egy habszivacs borítás formájában. Szükség esetén akár egy háztartási szivacs is elegendő. Ennek több oka is van:
* véd a szélzaj ellen (amely növelheti a decibeles méréseket).
* véd a mikrofonra közvetlenül bejutó víz ellen. A mikrofonra kerülő páralecsapódás elkerülése érdekében a felszerelés után húzza vissza egy ütemet a burkolatot, hogy egy kis üreg keletkezzen.
* véd a napsugárzás ellen. Az intenzív napsugárzás befolyásolhatja a mért értékeket és csökkentheti a mikrofon élettartamát.

<img src="../docs/dnms/dnms-zajmérés-mikrofon-bonett.jpg" style="width:45%; margin: 3em 0" loading="lazy"/>

Ezeket a habszivacs borításokat általában "mérőmikrofonok borításaként" árulják. De ezek drágák. Egy normál habgolyót is vehetsz, és az ollóval vághatsz egy lyukat.

If you need more ones [this source](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2
) hasznos lehet.

### A mikrofon helye

Fontos, hogy a mikrofont a lehető legjobban "szabad" helyre helyezzük, ez azt jelenti, hogy olyan helyre, ahol minél kevesebb hangvisszaverő felület van. A fényvisszaverő felületektől a lehető legnagyobb távolságot kell tartani. Próbálja meg nem közvetlenül a ház falára szerelni a mikrofont, mert a falak erősen visszaverik a hangokat.  A faltól való távolság ideális esetben több mint 1 m. Természetesen ezt nem mindig könnyű megvalósítani.

A mikrofon hegyének a faltól való kb. 50 cm-es távolsága esetén az indukált hiba még elfogadható. Jó helyek például az erkélyek vagy teraszkorlátok, vagy egy kis árboc a tetőn.

Megpróbálhatja a mikrofont közvetlenül a ház sarkára is elhelyezni, hogy a visszaverődések részben kioltsák egymást.

Egy legalább 1 m magas, szabadon álló árboc is megoldás lehet, de akkor figyelnie kell a talajon történő visszaverődésekre. Ez persze a padlóburkolattól függ.

Az is fontos, hogy mindig tisztában legyünk azzal, hogy környezeti zajt mérünk.  Az olyan források zajkibocsátását, mint az utak vagy a vasút, csak megközelítőleg tudjuk megbecsülni.

Minél közelebb kerülünk azonban a forráshoz, annál pontosabbá válik a forráshoz való viszonyítás. A firmware frissítésével ezután pontos méréseket lehet végezni az azonosított zajtípusra vonatkozóan.

<img src="../docs/dnms/measuring-sensor-on-balcony.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<img src="../docs/dnms/measuring-sensor-on-terasse.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<br>
<img src="../docs/dnms/measuring-sensor-on-wall.jpg" style="width:99%; margin-bottom: 2em;" loading="lazy"/>
