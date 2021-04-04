---
title: Zostavte stránku
---
> ⚠️ **DÔLEŽITÁ POZNÁMKA**
Pred montážou nainštalujte firmvér!
Pozri časť __firmware flasher__.


### Mikrofónová jednotka

Mikrofónová jednotka je založená na rozbočovacej doske Pesky Products s mikrofónom MEMS ICS-43434. Takúto dosku môžete nájsť na [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).

Mikrofónová jednotka je založená na rozbočovacej doske Pesky Products s mikrofónom MEMS ICS-43434. Takúto dosku môžete nájsť na [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).


##### Puzdro pre jednotku mikrofónu
Kryt je vyrobený z polystyrénovej rúrky s priemerom 12,7 mm (0,500"). Tento priemer umožňuje priamo pripojiť väčšinu kalibrátorov na jednotku.

Prototyp bol vyvinutý s rúrkou [Evergreen No. 236](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

Prototyp bol vyvinutý s rúrkou [Evergreen No. 236](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).
<br>
Rozbočovaciu dosku je potrebné prispôsobiť priemeru rúrky pomocou pilníka. Na ochranu vstupu mikrofónu použite pásku.
<br>

<br>
<br>

Potom spájkujte šesť silikónových káblov. Všimnite si, s ktorým kolíkom je kábel spojený!

Potom spájkujte šesť silikónových káblov. Všimnite si, s ktorým kolíkom je kábel spojený!
Odrežte 115 mm dlhý kus rúrky.
<br>
Prilepte mikrofónovú dosku na prekríženú pásku. Vložte káble do hadičky a pripevnite dosku na konci hadičky.
<br>
<br>
<br>

Koniec rúrky utiahnite páskou.

Koniec rúrky utiahnite páskou.

Teraz môžete rúrku naplniť živicou. Tento krok je povinný, aby sa zabránilo rezonancii a získali sa kalibrované a reprodukovateľné údaje.

Prototyp bol vyvinutý s niektorými [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900) vyrobenými spoločnosťou Copaltec GmbH.

##### Špecifikácie:
* Dielektrická pevnosť: 28 kVmm
* Špecifický odpor vpredu: 5,8.1014 ohmcm
* Povrchový odpor: 1,3.1016 ohmov
* Miešací pomer živice a tvrdidla: 2 : 1
* Čas varenia: 20 až 30 minút.
* Čas vytvrdzovania: 16 až 30 h
* Konečný vytvrdnutý stav: 10 až 14 dní
* Viskozita (zmiešaná): 500 à 600 mPa.s
* Tvrdosť podľa Shorea: D 50 až 55 (ISO 868, DIN 53505)
* Tepelná vodivosť: 0,3 WmK
* Teploty aplikácie: - 20 až +130 °C


Mala by fungovať aj [polyuretánová živica UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) od spoločnosti Electrolube.

Na každú hadičku by malo stačiť 15 g živice.

<img src="..docsdnmsdnms-meranie-šumu-mikrofón-vnútornej-trubice.jpg" style="display:block; margin: 2em 0" loading="lazy">

Po vytvrdnutí živice pásku odstráňte. Mikrofónová jednotka je pripravená.



### DNMS Housing

Keď sú Teensy (DNMS) a NodeMCU (samostatne alebo na PCB) oddelené: DNMS a airRohr

Potrebujete kus rúrky s priemerom 25 mm (napríklad rúrky pre elektrické aplikácie), konektor, 90° oblúk a káblovú priechodku M25 IP68.

Samotná rúrka by mala byť dlhá 160 mm. DNMS vyzerá, že miesto v. Puzdro mikrofónu sa udržiava pomocou káblovej vývodky.

Oblúk zabraňuje vnikaniu vody a vlhkosti do puzdra a zároveň prepúšťa kábel.

<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

DNMS je pripojený k druhej doske plošných spojov pomocou kábla RJ12. Ak je tento kábel dlhší ako 250 mm, musíte použiť predĺženie I²C.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

Keď je všetko dobre spojené, diely sa zlepia.

Výsledok:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

DPS s jednotkou NodeMCU možno umiestniť do ľubovoľnej elektrickej skrinky.


### Ochrana pred poveternostnými vplyvmi

Samotné kryty by mali byť vodotesné. Citlivý by mohol byť len vstup mikrofónu. Výrobca TDK zverejnil niekoľko odporúčaní na utesnenie mikrofónov InvenSense MEMS so spodným portom pred vniknutím prachu a kvapaliny, ale komponenty sa ťažko hľadajú a neboli testované.

Je bezpodmienečne nutné nainštalovať ochranu proti poveternostným vplyvom vo forme penového krytu. V prípade potreby postačí aj domáca špongia. Existuje na to niekoľko dôvodov:
* chráni pred hlukom vetra (ktorý môže zvýšiť namerané decibely)
* chráni pred priamym únikom vody na mikrofón. Aby ste zabránili kondenzácii vody na mikrofóne, po inštalácii kryt o kúsok stiahnite, aby sa vytvorila malá dutina.
* chráni pred slnečným žiarením. Intenzívne slnečné žiarenie môže ovplyvniť namerané hodnoty a znížiť životnosť mikrofónu.

* chráni pred slnečným žiarením. Intenzívne slnečné žiarenie môže ovplyvniť namerané hodnoty a znížiť životnosť mikrofónu.

Tieto penové kryty sa bežne predávajú ako "kryty na meracie mikrofóny". Sú však drahé. Môžete tiež vziať normálnu penovú guľôčku a vystrihnúť do nej otvor nožnicami.

If you need more ones [this source](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2
) can be helpful.

### Umiestnenie mikrofónu

Je dôležité umiestniť mikrofón na čo najvoľnejšie miesto, to znamená na miesto s čo najmenším počtom povrchov odrážajúcich zvuk. Vzdialenosť od odrazových plôch by mala byť čo najväčšia. Snažte sa nemontovať mikrofón priamo na stenu domu, pretože steny silno odrážajú zvuky.  Vzdialenosť od steny by mala byť v ideálnom prípade väčšia ako 1 m. Samozrejme, nie je to vždy jednoduché zrealizovať.

Pri vzdialenosti približne 50 cm od hrotu mikrofónu k stene je indukovaná chyba stále primeraná. Vhodnými miestami sú napríklad balkóny alebo zábradlia terás, prípadne malý stožiar na streche.

Môžete tiež skúsiť umiestniť mikrofón priamo na roh domu, aby sa odrazy čiastočne vyrušili.

Riešením by mohol byť aj voľne stojaci stožiar s výškou aspoň 1 m, ale potom si musíte dať pozor na odrazy od zeme. To samozrejme závisí od podlahovej krytiny.

Je tiež dôležité mať vždy na pamäti, že meriame hluk okolia.  Emisie hluku zo zdrojov, ako sú cesty alebo železnice, môžeme len približne odhadnúť.

Čím bližšie ste k zdroju, tým je odkaz na zdroj presnejší. Aktualizáciou firmvéru by potom malo byť možné získať presné merania pre identifikovaný typ šumu.

Čím bližšie ste k zdroju, tým je odkaz na zdroj presnejší. Aktualizáciou firmvéru by potom malo byť možné získať presné merania pre identifikovaný typ šumu.
Čím bližšie ste k zdroju, tým je odkaz na zdroj presnejší. Aktualizáciou firmvéru by potom malo byť možné získať presné merania pre identifikovaný typ šumu.
<br>
<br>
