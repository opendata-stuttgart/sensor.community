---
title: Surinkite
---

> ⚠️ **SVARBI PASTABA**
Prieš surinkdami įdiekite programinę įrangą!
Žr. __firmware flasher__ skyrių.

#### NodeMCU v3
Pastaba: mūsų instrukcijos taikomos 3 "NodeMCU" versijai. Tai galima atpažinti pagal jungtis VU ir G (žr. brėžinį).

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em" loading="lazy"/>
<small>Copyright: roman-minyaylov, MIT licencija</small>


<img src="../docs/airrohr/nodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy"/>

##### Kai baigsite, jis turėtų atrodyti taip.


#### SDS011 laidų prijungimas
Kaiščiai sunumeruoti iš dešinės į kairę, todėl jungdami įsitikinkite, kad kabeliai yra ant kaiščių, nes dauguma "Dupont" kabelių taip pat telpa tarp kaiščių.
```bash
SDS011 Pin 1 -> Pin D1 / GPIO5
SDS011 Pin 2 -> Pin D2 / GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> unused
SDS011 Pin 5 -> VU (NodeMCU v3) / VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> unused
SDS011 Pin 7 -> unused
```

<br>

💡 Galite rasti [jutiklių, kuriuos palaiko mūsų programinė įranga, sąrašą](https://github.com/opendata-stuttgart/sensors-software/blob/master/airrohr-firmware/Readme.md)

#### Lituokite kartu BME280
<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center" loading="lazy"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;" loading="lazy"/>

Prijunkite kaiščių antraštę prie BME280 plokštės. Prilituokite ją iš galinės pusės. Tarpai tarp kaiščių labai maži, todėl būkite kantrūs ir atsargūs.

Gudrybė - pridėkite lituoklio antgalį prie kaiščio, šiek tiek jį pašildykite ir lengvai užtepkite lydmetalį.



#### BME280 laidų prijungimas
Kaiščiai sunumeruoti iš kairės į dešinę.
```bash
VIN -> Pin 3V3 (3.3V)
GND->  GND/G
SDA -> PIN D3
SCL -> Pin D4
```

#### Viską susieti

##### Susiekite NodeMCU ir SDS011
<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg" loading="lazy"/>
NodeMCU (ESP8266) ir SDS011 jutiklį sujunkite kabeliu taip, kad "Wifi" antena būtų nukreipta nuo jutiklio.

##### Prijunkite lankstų vamzdelį
<img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em" loading="lazy"/>
<img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;" loading="lazy"/>

* prijunkite lankstų vamzdelį prie SDS011 jutiklio
* Prie vamzdžio pritvirtinkite BME280 temperatūros jutiklį kitu kabelio kaklaraiščiu.
* USB laidą iškiškite pro vamzdelį. Sumontuokite SDS011 taip, kad NodeMCU būtų nukreiptas į viršų, o ventiliatorius - į apačią.
* USB laidą iškiškite pro vamzdelį. Sumontuokite SDS011 taip, kad NodeMCU būtų nukreiptas į viršų, o ventiliatorius - į apačią.
 ##### Įstumkite jutiklį į vamzdį
* Įstumkite detales į vamzdį, kad jos įstrigtų viduje.
* USB laidas, lankstus vamzdelis ir BME280 turi žiūrėti iš vamzdžio galo
* Kitą vamzdį užmaukite ant pirmojo.

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg" loading="lazy"/>

##### Apdaila
* Padėkite temperatūros jutiklį ant lankstaus vamzdžio taip, kad jis būtų ant vamzdžio krašto.
* Nupjaukite lankstų vamzdį vamzdžio gale
* Pasirinktinai: atvirus vamzdelio galus galite uždengti smulkiu tinkleliu. Taip oras cirkuliuos, bet vabzdžiai liks lauke.
* Pasirinktinai: atvirus vamzdelio galus galite uždengti smulkiu tinkleliu. Taip oras cirkuliuos, bet vabzdžiai liks lauke.

<img src="../docs/airrohr/position-bme280.jpeg" loading="lazy"/>

#### Vieta
Ideali vieta būtų nuo 1,5 iki 3,5 metro virš gatvės ir gerai vėdinama. Tačiau tai neįmanoma padaryti visiems žmonėms, todėl registruojantis prašoma pateikti tokią informaciją kaip aukštis virš žemės ir padėtis gatvės atžvilgiu.

