---
title: Assembleer
---
> ⚠️ **BELANGRIJKE OPMERKING**
Installeer de firmware alvorens te monteren!
Zie __firmware flasher__ sectie.


### Microfoon unit

De microfoon unit is gebaseerd op het Pesky Products breakout board met een MEMS microfoon ICS-43434. Je kunt zo'n board vinden op de [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).

De microfoon unit is gebaseerd op het Pesky Products breakout board met een MEMS microfoon ICS-43434. Je kunt zo'n board vinden op de [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).


##### Behuizing voor de microfoon
De behuizing is gemaakt van een polystyreenbuis van .500" (12,7 mm). Deze diameter maakt het mogelijk de meeste kalibratoren rechtstreeks op het toestel aan te sluiten.

Het prototype is ontwikkeld met de [Evergreen No. 236 tubing](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

Het prototype is ontwikkeld met de [Evergreen No. 236 tubing](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).
<br>
Het breakout board moet met een vijl worden aangepast aan de diameter van de buis. Gebruik wat tape om de microfooningang te beschermen.
<br>

<br>
<br>

Soldeer dan de zes siliconen kabels. Let op met welke pin de kabel is verbonden!

Soldeer dan de zes siliconen kabels. Let op met welke pin de kabel is verbonden!
Knip een stuk buis van 115 mm lang af.
<br>
Plak het microfoonbordje op wat gekruiste tape. Steek de kabels in de slang en bevestig het bord aan het uiteinde van de slang.
<br>
<br>
<br>

Maak het uiteinde van de buis dicht met de tape.

Maak het uiteinde van de buis dicht met de tape.

Nu kunt u de buis vullen met wat hars. Deze stap is verplicht om resonantie te vermijden en gekalibreerde en reproduceerbare gegevens te verkrijgen.

Het prototype werd ontwikkeld met enkele [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900) geproduceerd door Copaltec GmbH.

##### Specificaties:
* Diëlektrische sterkte: 28 kVmm
* Specifieke voorwaartse weerstand: 5,8.1014 ohmcm
* Oppervlakte weerstand: 1,3.1016 ohm
* Mengverhouding harsverharder: 2 : 1
* Kooktijd: 20 tot 30 min.
* Uithardingstijd: 16 à 30 uur
* Geharde toestand: 10 tot 14 dagen
* Viscositeit (gemengd): 500 à 600 mPa.s
* Shore hardheid: D 50 tot 55 (ISO 868, DIN 53505)
* Warmtegeleidingscoëfficiënt: 0,3 WmK
* Toepassingstemperaturen: - 20 tot +130 °C


De [polyurethaanhars UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) van Electrolube zou ook moeten werken.

Voor elk slangetje zou 15 g hars voldoende moeten zijn.

<img src="..docsdnmsdnms-ruis-meet-microfoon-binnen-buis.jpg" style="display:block; margin: 2em 0" loading="lazy">

Als de hars is uitgehard, verwijdert u de tape. Uw microfoon is klaar.



### DNMS Behuizing

Wanneer de Teensy (DNMS) en de NodeMCU (standalone of op PCB) gescheiden zijn: DNMS en airRohr

U hebt een stuk buis met een diameter van 25 mm nodig (bijvoorbeeld buis voor elektrische toepassingen), een connector, een 90°-boog en een M25 IP68-kabelschroefverbinding.

De buis zelf moet 160 mm lang zijn. De DNMS ziet er plaats in. De microfoonbehuizing wordt onderhouden door de wartel.

De boog voorkomt dat water en vocht de behuizing binnendringen, terwijl de kabel wordt doorgelaten.

<img src="..docsdnmsdnms-geluidsmeting-huis.jpg" style="margin: 1em 0" loading="lazy">

De DNMS is verbonden met de tweede PCB via een RJ12 kabel. Als deze kabel langer is dan 250 mm, moet u een I²C-verlengkabel gebruiken.

<img src="..docsdnmsdnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy">

Nadat alles goed is aangesloten, worden de onderdelen aan elkaar gelijmd.

Resultaat:

<img src="..docsdnmsdnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy">

De printplaat waarop de NodeMCU is gemonteerd, kan in elk soort schakelkast worden geplaatst.


### Weersbescherming

De behuizingen zelf moeten waterdicht zijn. Alleen de microfooningang zou gevoelig kunnen zijn. TDK, de fabrikant, heeft enkele aanbevelingen gepubliceerd voor het afdichten van InvenSense bottom-port MEMS microfoons tegen het binnendringen van stof en vloeistoffen, maar de onderdelen zijn moeilijk te vinden en werden niet getest.

Het is absoluut noodzakelijk een bescherming tegen weersinvloeden aan te brengen in de vorm van een schuimlaag. Indien nodig is zelfs een huishoudspons voldoende. Daar zijn verschillende redenen voor:
* het beschermt tegen windgeruis (dat de metingen in decibels kan doen toenemen)
* het beschermt tegen directe waterlekkage op de microfoon. Om condensatie op de microfoon te voorkomen, trekt u het deksel na het installeren een slag terug om een kleine holte te creëren.
* het beschermt tegen zonnestraling. Intens zonlicht kan de meetwaarden beïnvloeden en de levensduur van de microfoon verkorten.

* het beschermt tegen zonnestraling. Intens zonlicht kan de meetwaarden beïnvloeden en de levensduur van de microfoon verkorten.

Die schuimstof hoezen worden normaal verkocht als 'hoezen voor meet microfoons'. Maar ze zijn duur. Je kunt ook een gewone schuimbal nemen en er met een schaar een gat in knippen.

If you need more ones [this source](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2) can be helpful.

### Plaats van de microfoon

Het is belangrijk de microfoon in een zo "vrij" mogelijk gebied te plaatsen, d.w.z. op een plaats met zo weinig mogelijk geluidsweerkaatsende oppervlakken. De afstand tot reflecterende oppervlakken moet zo groot mogelijk zijn. Probeer de microfoon niet direct op de muur van een huis te monteren, omdat muren geluid sterk weerkaatsen.  De afstand tot de muur moet idealiter meer dan 1 m bedragen. Dit is natuurlijk niet altijd gemakkelijk te realiseren.

Met een afstand van ongeveer 50 cm van het uiteinde van de microfoon tot de muur is de geïnduceerde fout nog redelijk. Goede plaatsen zijn bijvoorbeeld balkons of reling van terrassen, of een kleine mast op het dak.

U kunt ook proberen de microfoon direct op de hoek van het huis te plaatsen, zodat de reflecties elkaar gedeeltelijk opheffen.

Een vrijstaande mast van ten minste 1 m hoogte zou ook een oplossing kunnen zijn, maar dan moet je oppassen voor reflecties op de grond. Dat hangt natuurlijk af van de vloerbedekking.

Het is ook belangrijk altijd te beseffen dat wij omgevingslawaai meten.  Wij kunnen slechts een benadering maken van de geluidsemissie van bronnen zoals wegen of spoorwegen.

Hoe dichter je echter bij de bron komt, hoe nauwkeuriger de referentie naar de bron wordt. Upgrades van de firmware zouden dan in staat moeten zijn om nauwkeurige metingen te verkrijgen voor een geïdentificeerd type ruis.

Hoe dichter je echter bij de bron komt, hoe nauwkeuriger de referentie naar de bron wordt. Upgrades van de firmware zouden dan in staat moeten zijn om nauwkeurige metingen te verkrijgen voor een geïdentificeerd type ruis.
Hoe dichter je echter bij de bron komt, hoe nauwkeuriger de referentie naar de bron wordt. Upgrades van de firmware zouden dan in staat moeten zijn om nauwkeurige metingen te verkrijgen voor een geïdentificeerd type ruis.
<br>
<br>
