---
title: Sestavení
---
> ⚠️ **DŮLEŽITÉ UPOZORNĚNÍ**
Před sestavením nahrajte firmware!
Viz. sekce __Nástroj na instalaci firmware__


### Mikrofonní jednotka

Mikrofonní jednotka je založena na desce od Pesky Products s mikrofonem MEMS ICS-43434. Tuto desku můžete najít na [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).

<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>


##### Pouzdro pro mikrofonní jednotku
Pouzdro je vyrobeno z polystyrenové trubice o průměru 12,7 mm. Tento průměr umožňuje přímo připojit všechny kabely k jednotce.

Prototyp byl vyvinut s [Evergreen No. 236 trubkou](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

<img src="../docs/dnms/dnms-noise-measuring-microphone-anschluesse.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>
<br>
Deska s mikrofonem musí být přizpůsobena průměru trubky pilníkem. K ochraně vstupu do mikrofonu použijte pásku.
<br>

<img src="../docs/dnms/dnms-noise-measuring-microphone-protection.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection-front.jpg" style="width:41%; margin: 2em 0" loading="lazy"/>

Pak připájejte šest silikonových kabelů. Poznamenejte si, ke kterému pinu je kabel připojen!

<img src="../docs/dnms/dnms-noise-measuring-microphone-with-cable.jpg" style="display: block; width:40%; margin: 2em 0" loading="lazy"/>
Odřízněte 115 mm dlouhý kus polystyrenové trubičky.
<br>
Nalepte desku mikrofonu na zkříženou lepící pásku. Vložte kabely do hadičky a připevněte desku na její konec. Zkontrolujte, že je deska přilepena k pásce dokonale, ať pod ní neproteče pryskyřice do mikrofonu.
<br>
<img src="../docs/dnms/dnms-noise-measuring-microphone-preparing-housing.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-housing.jpg" style="width:42%; margin: 2em 0" loading="lazy"/>

Konec trubice dobře utěsněte lepící páskou.

<img src="../docs/dnms/dnms-noise-measuring-microphone-tube.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>

Nyní můžete trubičku naplnit trochou pryskyřice. Tento krok je nutný, aby se zabránilo rezonanci a tím pádem byla data kalibrovaná a reprodukovatelná.

Prototyp byl vyvinut za pomocí pryskyřice [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900) od firmy Copaltec.

##### Specifikace:
* Dielektrická pevnost: 28 kV/mm
* Specifický  odpor: 5,8 1014 ohm/cm
* Povrchový odpor: 1,3.1016 ohm
* Poměr míchání pryskyřice/tvrdidlo: 2: 1
* Doba přípravy: 20 až 30 min.
* Doba vytvrzení: 16 až 30 h
* Konečný vytvrzený stav: 10 až 14 dní
* Viskozita (smíšená): 500 až 600 mPa.s
* Tvrdost: D 50 až 55 (ISO 868, DIN 53505)
* Tepelná vodivost: 0,3 W/mK
* Aplikační teploty: - 20 až +130 °C


[Polyurethanová pryskyřice UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) od Electrolube by měla být též v pořádku.

Pro každou trubičku by mělo stačit 15 g pryskyřice.

<img src="../docs/dnms/dnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy"/>

Po vytvrzení pryskyřice odstraňte pásku. Vaše mikrofonní jednotka je připravena.



### Pouzdro pro DNMS

Když jsou Teensy (DNMS) a NodeMCU (samostatně nebo na PCB) odděleny: DNMS a airRohr

Potřebujete kus trubice o průměru 25 mm (například trubice pro elektrické vedení), konektor, koleno 90° a kabelovou průchodku M25 IP68.

Samotná trubka by měla být 160 mm dlouhá. V ní je uložen DNMS. Mikrofonní jednotka je zajištěna průchodkou.

Průchodka brání průniku vody a vlhkosti do pouzdra, zatímco kabely volně prochází.

<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

DNMS je připojen k druhé PCB kabelem RJ12. Pokud je tento kabel delší než 250 mm, musíte použít prodloužení I²C.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

Poté, co je vše dobře propojeno, jsou díly slepeny dohromady.

Výsledek:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

PCB obsahující NodeMCU lze umístit do jakékoli krabičky na elektroniku.


### Ochrana proti počasí

Všechna pouzdra a krabičky by měly být vodotěsné. Citlivý může být pouze vstup mikrofonu. Výrobce TDK zveřejnil některá doporučení pro utěsnění mikrofonů MEMS se spodním portem InvenSense od vnikání prachu a kapalin, ale díly je těžké je najít a nebyly testovány.

Je naprosto nezbytné ochránit mokrofon proti povětrnostním vlivům ve formě nějakého pěnového krytu. V případě potřeby stačí i houbička pro domácnost. Existuje pro to několik důvodů:
* chrání před hlukem větru (vítr může zvýšit naměřené hodnoty decibelů)
* chrání před přímým vnikem vody do mikrofonu. Abyste zabránili kondenzaci, po osazení stáhněte kryt, a vytvořte malou dutinu.
* chrání před slunečním zářením. Intenzivní sluneční světlo může ovlivnit naměřené hodnoty a snížit životnost mikrofonu.

<img src="../docs/dnms/dnms-noise-measuring-microphone-bonette.jpg" style="width:45%; margin: 3em 0" loading="lazy"/>

Tyto pěnové kryty se běžně prodávají jako „kryty pro měřicí mikrofony“. Ale jsou drahé. Můžete si také vzít normální pěnovou kouli a nůžkami otvor vystřihnout.

Pokud potřebujete další [tento odkaz](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2) by se mohl hodit.

### Umístění mikrofonu

Je důležité umístit mikrofon na místo, které je „volné“, jak jen je to možné, místo s co nejmenšími plochami odrážejícími zvuk. Vzdálenost od reflexních povrchů by měla být co největší. Snažte se nepřipojovat mikrofon přímo na stěnu domu, protože stěny silně odrážejí zvuky. Vzdálenost od stěny by měla být v ideálním případě větší než 1 m. Samozřejmě to není vždy snadno realizovatelné.

Při vzdálenosti asi 50 cm od špičky mikrofonu ke stěně je indukovaná chyba stále přiměřená. Dobrými místy jsou například balkony nebo terasové zábradlí nebo malý stožár na střeše.

Můžete také zkusit umístit mikrofon přímo na rohu domu, aby se odrazy vzájemně částečně rušily.

Řešením může být také volně stojící stožár o výšce nejméně 1 m, ale musíte si dávat pozor na odrazy na zemi. Samozřejmě záleží na podlahové krytině.

Je také důležité si vždy uvědomit, že měříme okolní hluk. Můžeme udělat pouze přibližnou emisi hluku ze zdrojů, jako jsou silnice nebo železnice.

Čím blíže se však ke zdroji dostanete, tím přesnější je odkaz na zdroj. Upgrady firmwaru by pak měly být schopny získat přesná měření pro identifikovaný typ šumu.

<img src="../docs/dnms/measuring-sensor-on-balcony.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<img src="../docs/dnms/measuring-sensor-on-terasse.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<br>
<img src="../docs/dnms/measuring-sensor-on-wall.jpg" style="width:99%; margin-bottom: 2em;" loading="lazy"/>
