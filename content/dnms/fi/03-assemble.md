---
title: Kokoa
---
> ⚠️ **TÄRKEÄ HUOMAUTUS**
Ennen kokoonpanoa asenna laiteohjelma!
Katso __firmware flasher__ -osio.


### Mikrofoniyksikkö

Mikrofoniyksikkö perustuu Pesky Productsin irrotuslevyyn, jossa on MEMS-mikrofoni ICS-43434. Voit ostaa tällaisen levyn [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).

Mikrofoniyksikkö perustuu Pesky Productsin irrotuslevyyn, jossa on MEMS-mikrofoni ICS-43434. Voit ostaa tällaisen levyn [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).


##### Mikrofoniyksikön kotelo
Kotelo on valmistettu .500" (12,7 mm) polystyreeniputkesta. Tämän halkaisijan ansiosta useimmat kalibraattorit voidaan liittää suoraan laitteeseen.

Prototyyppi kehitettiin [Evergreen No. 236 -putkella] (https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

Prototyyppi kehitettiin [Evergreen No. 236 -putkella] (https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).
<br>
Kytkentälevy on sovitettava putken halkaisijaan viilalla. Käytä teippiä mikrofonin sisääntulon suojaamiseksi.
<br>

<br>
<br>

Juota sitten kuusi silikonikaapelia. Huomioi, mihin nastaan kaapeli on kytketty!

Juota sitten kuusi silikonikaapelia. Huomioi, mihin nastaan kaapeli on kytketty!
Leikkaa 115 mm pitkä putkenpätkä.
<br>
Kiinnitä mikrofonilevy ristikkäiseen teippiin. Laita kaapelit letkuun ja kiinnitä levy letkun päähän.
<br>
<br>
<br>

Tiivistä putken ääriosa teipillä.

Tiivistä putken ääriosa teipillä.

Nyt voit täyttää putken hartsilla. Tämä vaihe on pakollinen resonanssin välttämiseksi ja kalibroitujen ja toistettavien tietojen saamiseksi.

Prototyyppi kehitettiin käyttäen Copaltec GmbH:n valmistamaa [PURe Isolation ST 33] (https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900).

##### Tekniset tiedot:
* Läpilyöntilujuus: 28 kVmm
* Erityinen etuvastus: 5,8.1014 ohmcm
* Pintavastus: 1,3.1016 ohmia
* Sekoitussuhde hartsin ja kovettimen välillä: 2 : 1
* Padassaoloaika: 20-30 min.
* Kovettumisaika: 16 à 30 h
* Lopullinen kovettunut tila: 10-14 päivää.
* Viskositeetti (sekoitettuna): 500 à 600 mPa.s
* Shore-kovuus: D 50-55 (ISO 868, DIN 53505).
* Lämmönjohtavuus: 0,3 WmK
* Sovelluslämpötilat: - lämpötilat: 20 - +130 °C


Electroluben valmistaman [polyuretaanihartsin UR5545] (https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) pitäisi myös toimia.

Kutakin letkua kohden pitäisi riittää 15 g hartsia.

<img src="..docsdnmsdnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy">

Kun hartsi on kovettunut, poista teippi. Mikrofoniyksikkösi on valmis.



### DNMS-kotelo

Kun Teensy (DNMS) ja NodeMCU (itsenäinen tai piirilevyllä) erotetaan toisistaan: DNMS ja airRohr

Tarvitset halkaisijaltaan 25 mm:n putken (esimerkiksi sähkösovelluksissa käytettävän putken), liittimen, 90°:n kaaren ja M25 IP68-kaapeliläpiviennin.

Itse putken pituuden on oltava 160 mm. DNMS näyttää paikka. Mikrofonikotelo pysyy kiinni kaapeliläpiviennillä.

Jousi estää veden ja kosteuden pääsyn koteloon ja päästää kaapelin läpi.

<img src="..docsdnmsdnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy">

DNMS on liitetty toiseen piirilevyyn RJ12-kaapelilla. Jos tämä kaapeli on yli 250 mm pitkä, on käytettävä I²C-jatkojohtoa.

<img src="..docsdnmsdnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy">

Kun kaikki on liitetty hyvin yhteen, osat liimataan yhteen.

Tulos:

<img src="..docsdnmsdnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy">

NodeMCU:n sisältävä piirilevy voidaan sijoittaa mihin tahansa sähkökoteloon.


### Sääsuojaus

Itse koteloiden on oltava vedenpitäviä. Ainoastaan mikrofonin sisääntulo voisi olla herkkä. Valmistaja TDK on julkaissut joitakin suosituksia InvenSensensen ala-aukkoisten MEMS-mikrofonien tiivistämiseksi pölyn ja nesteen sisäänpääsyä vastaan, mutta komponentteja on vaikea löytää eikä niitä ole testattu.

On ehdottoman välttämätöntä asentaa sääsuoja vaahtomuovin muodossa. Tarvittaessa jopa kotitaloussieni riittää. Tähän on useita syitä:
* se suojaa tuulen melulta (joka voi lisätä desibelimittauksia).
* se suojaa mikrofonin suoralta vesivuodolta. Jotta mikrofoniin ei pääsisi kondenssivettä, vedä kansi asennuksen jälkeen hieman taaksepäin, jotta syntyy pieni ontelo.
* se suojaa auringon säteilyltä. Voimakas auringonvalo voi vaikuttaa mitattuihin arvoihin ja lyhentää mikrofonin käyttöikää.

* se suojaa auringon säteilyltä. Voimakas auringonvalo voi vaikuttaa mitattuihin arvoihin ja lyhentää mikrofonin käyttöikää.

Näitä vaahtomuovisuojia myydään tavallisesti nimellä "mittausmikrofonien suojukset". Mutta ne ovat kalliita. Voit myös ottaa tavallisen vaahtomuovipallon ja leikata siihen reiän saksilla.

If you need more ones [this source](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2
) can be helpful.

### Mikrofonin sijainti

On tärkeää sijoittaa mikrofoni mahdollisimman "vapaalle" alueelle, eli paikkaan, jossa on mahdollisimman vähän ääntä heijastavia pintoja. Etäisyyden heijastaviin pintoihin tulisi olla mahdollisimman suuri. Yritä olla asentamatta mikrofonia suoraan talon seinään, koska seinät heijastavat ääniä voimakkaasti.  Etäisyyden seinään tulisi mieluiten olla yli 1 m. Tätä ei tietenkään ole aina helppo toteuttaa.

Kun mikrofonin kärjen ja seinän välinen etäisyys on noin 50 cm, indusoitu virhe on vielä kohtuullinen. Hyviä paikkoja ovat esimerkiksi parvekkeet tai terassikaiteet tai pieni masto katolla.

Voit myös yrittää sijoittaa mikrofonin suoraan talon kulmaan, jotta heijastukset kumoavat osittain toisensa.

Vapaasti seisova, vähintään 1 metrin korkuinen masto voisi myös olla ratkaisu, mutta silloin on varottava heijastuksia maasta. Se riippuu tietenkin lattianpäällysteestä.

On myös tärkeää olla aina tietoinen siitä, että mittaamme ympäristön melua.  Voimme vain likimääräisesti arvioida melulähteiden, kuten teiden tai rautateiden, melupäästöjä.

Mitä lähemmäs lähdettä kuitenkin mennään, sitä tarkemmaksi viittaus lähteeseen tulee. Laiteohjelmiston päivityksillä pitäisi sitten pystyä saamaan tarkat mittaukset tunnistetulle melutyypille.

Mitä lähemmäs lähdettä kuitenkin mennään, sitä tarkemmaksi viittaus lähteeseen tulee. Laiteohjelmiston päivityksillä pitäisi sitten pystyä saamaan tarkat mittaukset tunnistetulle melutyypille.
Mitä lähemmäs lähdettä kuitenkin mennään, sitä tarkemmaksi viittaus lähteeseen tulee. Laiteohjelmiston päivityksillä pitäisi sitten pystyä saamaan tarkat mittaukset tunnistetulle melutyypille.
<br>
<br>
