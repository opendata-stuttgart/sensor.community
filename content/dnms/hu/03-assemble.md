---
title: Összeállítás
---
> ⚠️ **FONTOS MEGJEGYZÉS**
Összeszerelés előtt telepítse a firmware-t!
Lásd a __firmware flasher__ szakaszt.


### Mikrofon egység

A mikrofon egység a Pesky Products ICS-43434 MEMS mikrofonnal ellátott breakout lapján alapul. Ilyen deszkát a [Tindie piactéren](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/) találsz.

A mikrofon egység a Pesky Products ICS-43434 MEMS mikrofonnal ellátott breakout lapján alapul. Ilyen deszkát a [Tindie piactéren](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/) találsz.


##### A mikrofonegység háza
A ház 12,7 mm-es (500") polisztirol csőből készült. Ez az átmérő lehetővé teszi a legtöbb kalibrátor közvetlen csatlakoztatását a készülékhez.

A prototípust a [236-os számú Evergreen csővel](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing) fejlesztették ki.

A prototípust a [236-os számú Evergreen csővel](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing) fejlesztették ki.
<br>
A kibontó lapot egy reszelővel kell a cső átmérőjéhez igazítani. Használjon némi ragasztószalagot a mikrofon bemenetének védelmére.
<br>

<br>
<br>

Ezután forrasztja be a hat szilikonkábelt. Figyeljük meg, hogy a kábel melyik tűhöz van csatlakoztatva!

Ezután forrasztja be a hat szilikonkábelt. Figyeljük meg, hogy a kábel melyik tűhöz van csatlakoztatva!
Vágjunk le egy 115 mm hosszú csődarabot.
<br>
Ragassza a mikrofonlapot néhány keresztszalagra. Tegye a kábeleket a csőbe, és rögzítse a táblát a cső végére.
<br>
<br>
<br>

A cső végét szorítsa meg a szalaggal.

A cső végét szorítsa meg a szalaggal.

Most már meg lehet tölteni a csövet egy kis gyantával. Ez a lépés kötelező a rezonancia elkerülése és a kalibrált és reprodukálható adatok elérése érdekében.

A prototípust a Copaltec GmbH által gyártott [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900) felhasználásával fejlesztették ki.

##### Specifikációk:
* Dielektromos szilárdság: 28 kVmm
* Specifikus előremenő ellenállás: 5,8.1014 ohmcm
* Felületi ellenállás: 1,3.1016 ohm
* Keverési arány gyanta-keményítő: 2 : 1
* Fazékidő: 20-30 perc.
* Érlelési idő: 16-30 óra
* Véglegesen megkeményedett állapot: 10-14 nap
* Viszkozitás (keverve): 500-600 mPa.s
* Shore keménység: D 50-55 (ISO 868, DIN 53505)
* Hővezető képesség: 0,3 WmK
* Alkalmazási hőmérséklet: - hőmérséklet: 20 és +130 °C között


Az Electrolube által gyártott [UR5545 poliuretángyanta](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) is működhet.

Minden egyes csőhöz 15 g gyanta elegendő kell, hogy legyen.

<img src="..docsdnmsdnms-zajmérés-mikrofon-belső-cső.jpg" style="display:block; margin: 2em 0" loading="lazy">

Amikor a gyanta megszilárdult, távolítsa el a szalagot. A mikrofonegység készen áll.



### DNMS ház

Ha a Teensy (DNMS) és a NodeMCU (önálló vagy NYÁK-on lévő) külön van választva: DNMS és airRohr

Szüksége van egy darab 25 mm átmérőjű csőre (például elektromos alkalmazásokhoz használt cső), egy csatlakozóra, egy 90°-os ívre és egy M25 IP68-as kábelvezetőre.

Magának a csőnek 160 mm hosszúnak kell lennie. A DNMS úgy néz ki, helyezze be. A mikrofonházat a kábelvezető tömítés tartja.

Az ív megakadályozza a víz és a nedvesség bejutását a házba, miközben átengedi a kábelt.

<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

A DNMS egy RJ12-es kábellel kapcsolódik a második NYÁK-hoz. Ha ez a kábel 250 mm-nél hosszabb, akkor I²C hosszabbítót kell használni.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

Miután mindent jól összekapcsoltunk, az alkatrészeket összeragasztjuk.

Eredmény:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

A NodeMCU-t hordozó NYÁK bármilyen elektromos dobozba helyezhető.


### Időjárásvédelem

Maguknak a házaknak vízállónak kell lenniük. Csak a mikrofon bemenete lehet érzékeny. A gyártó TDK közzétett néhány ajánlást az InvenSense alsó portos MEMS-mikrofonok por és folyadék behatolása elleni tömítésére, de az alkatrészeket nehéz megtalálni, és nem teszteltük.

Feltétlenül szükséges az időjárás elleni védelem telepítése habszivacs borítás formájában. Szükség esetén még egy háztartási szivacs is elegendő. Ennek több oka is van:
* véd a szélzaj ellen (ami növelheti a decibeles méréseket)
* véd a mikrofonra történő közvetlen vízszivárgás ellen. A mikrofonra kerülő páralecsapódás elkerülése érdekében a felszerelés után húzza vissza egy ütemet a fedelet, hogy egy kis üreg keletkezzen.
* véd a napsugárzás ellen. Az intenzív napsugárzás befolyásolhatja a mért értékeket és csökkentheti a mikrofon élettartamát.

* véd a napsugárzás ellen. Az intenzív napsugárzás befolyásolhatja a mért értékeket és csökkentheti a mikrofon élettartamát.

Ezeket a habszivacs borításokat általában "mérési mikrofonok borításaként" árulják. De ezek drágák. Egy normál habgolyót is vehetsz, és ollóval vághatsz egy lyukat.

If you need more ones [this source](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2
) can be helpful.

### A mikrofon helye

Fontos, hogy a mikrofont a lehető legkevesebb hangvisszaverő felülettel rendelkező "szabad" helyre helyezze el. A visszaverő felületektől való távolságnak a lehető legnagyobbnak kell lennie. Próbálja meg nem közvetlenül a ház falára szerelni a mikrofont, mert a falak erősen visszaverik a hangokat.  A faltól való távolság ideális esetben több mint 1 m. Természetesen ezt nem mindig könnyű megvalósítani.

A mikrofon hegyétől a falig mért kb. 50 cm-es távolság esetén az indukált hiba még mindig elfogadható. Jó helyek például az erkélyek vagy teraszkorlátok, vagy egy kis árboc a tetőn.

Megpróbálhatja a mikrofont közvetlenül a ház sarkára is elhelyezni, hogy a visszaverődések részben kioltsák egymást.

Egy legalább 1 m magas, szabadon álló árboc is megoldás lehet, de akkor figyelni kell a talajon történő visszaverődésre. Ez természetesen a padlóburkolattól függ.

Az is fontos, hogy mindig tisztában legyünk azzal, hogy környezeti zajokat mérünk.  Az olyan források, mint az utak vagy a vasút, zajkibocsátását csak megközelítőleg tudjuk megbecsülni.

Minél közelebb kerülünk azonban a forráshoz, annál pontosabbá válik a forrásra való hivatkozás. A firmware frissítésével ezután pontos méréseket lehet végezni egy azonosított zajtípusra vonatkozóan.

Minél közelebb kerülünk azonban a forráshoz, annál pontosabbá válik a forrásra való hivatkozás. A firmware frissítésével ezután pontos méréseket lehet végezni egy azonosított zajtípusra vonatkozóan.
Minél közelebb kerülünk azonban a forráshoz, annál pontosabbá válik a forrásra való hivatkozás. A firmware frissítésével ezután pontos méréseket lehet végezni egy azonosított zajtípusra vonatkozóan.
<br>
<br>
