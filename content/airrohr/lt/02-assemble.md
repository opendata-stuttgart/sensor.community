---
title: Surinkite
---

> ⚠️ **SVARBI PASTABA**
Prieš surinkdami įdiekite programinę įrangą!
Žr. __firmware flasher__ skyrių.

#### NodeMCU v3
Pastaba: mūsų instrukcijos taikomos 3 "NodeMCU" versijai. Tai galima atpažinti pagal jungtis VU ir G (žr. brėžinį).

Pastaba: mūsų instrukcijos taikomos 3 "NodeMCU" versijai. Tai galima atpažinti pagal jungtis VU ir G (žr. brėžinį).
<small>Copyright: roman-minyaylov, MIT licencija<small>


<img src="...docsairrohrnodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy">

##### Kai baigsite, jis turėtų atrodyti taip.


#### SDS011 laidų prijungimas
Kaiščiai sunumeruoti iš dešinės į kairę, todėl jungdami įsitikinkite, kad kabeliai yra ant kaiščių, nes dauguma "Dupont" kabelių taip pat telpa tarp kaiščių.
````bash
SDS011 Pin 1 -> Pin D1 GPIO5
SDS011 Pin 2 -> Pin D2 GPIO4
SDS011 Pin 3 -> GND
SDS011 4 kaištis -> nenaudojamas
SDS011 Pin 5 -> VU (NodeMCU v3) VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> nenaudojamas
SDS011 7 kaištis -> nenaudojamas
```

<br>

💡 Galite rasti [jutiklių, kuriuos palaiko mūsų programinė įranga, sąrašą](https://github.comopendata-stuttgartsensors-softwareblobmasterairrohr-firmwareReadme.md)



#### Lituokite kartu BME280
#### Lituokite kartu BME280
#### Lituokite kartu BME280

Prijunkite kaiščių antraštę prie BME280 plokštės. Prilituokite ją iš galinės pusės. Tarpai tarp kaiščių labai maži, todėl būkite kantrūs ir atsargūs.

Gudrybė - pridėkite lituoklio antgalį prie kaiščio, šiek tiek jį pašildykite ir lengvai užtepkite lydmetalį.



#### BME280 laidų prijungimas
Kaiščiai sunumeruoti iš kairės į dešinę.
````bash
VIN -> kaištis 3V3 (3,3 V)
GND-> GNDG
SDA -> PIN D3
SCL -> D4 kaištis
```

#### Viską susieti

 ##### Susiekite NodeMCU ir SDS011
<img src="...docsairrohrtie-air-quality-sensor-together.jpeg" loading="lazy">
NodeMCU (ESP8266) ir SDS011 jutiklį sujunkite kabeliu taip, kad "Wifi" antena būtų nukreipta nuo jutiklio.

 ##### Prijunkite lankstų vamzdelį
 ##### Prijunkite lankstų vamzdelį
 ##### Prijunkite lankstų vamzdelį

* prijunkite lankstų vamzdelį prie SDS011 jutiklio
* Prie vamzdžio pritvirtinkite BME280 temperatūros jutiklį kitu kabelio kaklaraiščiu.
* USB laidą iškiškite pro vamzdelį. Sumontuokite SDS011 taip, kad NodeMCU būtų nukreiptas į viršų, o ventiliatorius - į apačią.
* USB laidą iškiškite pro vamzdelį. Sumontuokite SDS011 taip, kad NodeMCU būtų nukreiptas į viršų, o ventiliatorius - į apačią.
 ##### Įstumkite jutiklį į vamzdį
* Įstumkite detales į vamzdį, kad jos įstrigtų viduje.
* USB laidas, lankstus vamzdelis ir BME280 turi žiūrėti iš vamzdžio galo
* Kitą vamzdį užmaukite ant pirmojo.

<img src="...docsairrohrsds011-jammed-into-tube.jpeg" loading="lazy">

##### Apdaila
* Padėkite temperatūros jutiklį ant lankstaus vamzdžio taip, kad jis būtų ant vamzdžio krašto.
* Nupjaukite lankstų vamzdį vamzdžio gale
* Pasirinktinai: atvirus vamzdelio galus galite uždengti smulkiu tinkleliu. Taip oras cirkuliuos, bet vabzdžiai liks lauke.
* Pasirinktinai: atvirus vamzdelio galus galite uždengti smulkiu tinkleliu. Taip oras cirkuliuos, bet vabzdžiai liks lauke.
<img src="...docsairrohrposition-bme280.jpeg" loading="lazy">

#### Vieta
Ideali vieta būtų nuo 1,5 iki 3,5 metro virš gatvės ir gerai vėdinama. Tačiau tai neįmanoma padaryti visiems žmonėms, todėl registruojantis prašoma pateikti tokią informaciją kaip aukštis virš žemės ir padėtis gatvės atžvilgiu.

