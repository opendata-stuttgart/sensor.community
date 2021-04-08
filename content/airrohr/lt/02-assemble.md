---
title: Surinkite
---

> ⚠️ **SVARBI PASTABA**
Prieš surinkdami įdiekite programinę įrangą!
Žr. skyrių __įsidiegti programinę įrangą__.

### NodeMCU v3
Pastaba: mūsų instrukcijos taikomos "NodeMCU" 3 versijai. Ją galima atpažinti pagal jungtis VU ir G (žr. brėžinį).

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em" loading="lazy"/>
<small>Copyright: roman-minyaylov, MIT licencija</small>


<img src="../docs/airrohr/nodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy"/>

##### Kai baigsite, turėtų atrodyti štai kaip


### Prijunkite SDS011
Kaiščiai sunumeruoti iš dešinės į kairę, jungdami įsitikinkite, kad kabeliai sėdi ant kaiščių, nes dauguma "Dupont" kabelių taip pat telpa tarp kaiščių.
```bash
SDS011 Pin 1 -> Pin D1 / GPIO5
SDS011 Pin 2 -> Pin D2 / GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> nenaudojamas
SDS011 Pin 5 -> VU (NodeMCU v3) / VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> nenaudojamas
SDS011 Pin 7 -> nenaudojamas
```

<br>

💡 Galite rasti [jutiklių, kuriuos palaiko mūsų programinė įranga, sąrašą] (https://github.com/opendata-stuttgart/sensors-software/blob/master/airrohr-firmware/Readme.md)


### Prilituokite BME280
<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center" loading="lazy"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;" loading="lazy"/>

Sujunkite kaiščių antraštę su BME280 plokšte. Prilituokite ją iš galinės pusės. Tarpai tarp kaiščių labai maži, todėl būkite kantrūs ir atsargūs.  

Gudrybė - pridėkite lituoklio galiuką prie kaiščio, šiek tiek jį pašildykite ir tada lengvai užtepkite lydmetalį.  


### BME280 laidų prijungimas
Kaiščiai sunumeruoti iš kairės į dešinę.
```bash
VIN -> kaištis 3V3 (3,3 V)
GND-> GND/G
SDA -> PIN D3
SCL -> D4 kaištis
```

### Viską suriškite

#### Sujunkite NodeMCU ir SDS011
<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg" loading="lazy"/>
Kabeliu suriškite "NodeMCU" (ESP8266) ir jutiklį SDS011 taip, kad "Wifi" antena būtų nukreipta nuo jutiklio.

#### Prijunkite lankstų vamzdelį
<img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em" loading="lazy"/>
<img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;" loading="lazy"/>

* prijunkite lankstų vamzdelį prie SDS011 jutiklio
* kitu kabelio kaklaraiščiu pritvirtinkite temperatūros jutiklį BME280 prie vamzdelio
* USB kabelį perkiškite per vamzdelį. Sumontuokite SDS011 taip, kad NodeMCU būtų nukreiptas į viršų, o ventiliatorius - į apačią.
 
#### Įstumkite jutiklį į vamzdį
* Įstumkite dalis į vamzdį taip, kad jos būtų įstrigusios viduje
* USB kabelis, lankstus vamzdelis ir BME280 turi žiūrėti iš vamzdžio galo
* Kitą vamzdį įstumkite į pirmąjį.

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg" loading="lazy"/>

#### Apdailos darbai
* Padėkite temperatūros jutiklį ant lankstaus vamzdžio taip, kad jis būtų ant vamzdžio krašto.
* Nupjaukite lankstųjį vamzdį vamzdžio gale
* Pasirinktinai: atvirus vamzdžio galus galite uždengti smulkiu tinkleliu. Taip oras galės cirkuliuoti, bet vabzdžiai liks lauke.
 
<img src="../docs/airrohr/position-bme280.jpeg" loading="lazy"/>

### Vieta 
Ideali vieta būtų 1,5-3,5 m virš gatvės ir gerai vėdinama. Tačiau to neįmanoma padaryti visiems žmonėms, nes todėl registruojantis prašoma pateikti tokią informaciją, kaip aukštis virš žemės ir padėtis gatvės atžvilgiu.

