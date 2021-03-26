---
title: Saml
---

> ⚠️ **VIGTIG BEMÆRKNING**
Før montering installeres firmwaren!
Se afsnittet __firmware flasher__.

#### NodeMCU v3
Bemærk: Vores instruktioner henviser til version 3 af NodeMCU. Dette kan genkendes ved forbindelserne VU og G (se tegning).

Bemærk: Vores instruktioner henviser til version 3 af NodeMCU. Dette kan genkendes ved forbindelserne VU og G (se tegning).
<small>Copyright: roman-minyaylov, MIT-licens<small>


<img src="..docsairrohrnodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy">

##### Når du er færdig, skal det se sådan her ud


#### Tilslut SDS011 til SDS011
Stifterne er nummereret fra HØJRE til VENSTRE, sørg for, at kablerne sidder på stifterne, når du tilslutter dem, da de fleste Dupont-kabler også passer ind mellem stifterne.
````bash
SDS011 Pin 1 -> Pin D1 GPIO5
SDS011 Pin 2 -> Pin D2 GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> ubrugt
SDS011 Pin 5 -> VU (NodeMCU v3) VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> ubrugt
SDS011 Pin 7 -> ubrugt
```

<br>

💡 Du kan finde en liste over [sensorer, der understøttes af vores firmware] (https://github.comopendata-stuttgartsensors-softwareblobmasterairrohr-firmwareReadme.md)



### Lodder BME280 sammen
### Lodder BME280 sammen
### Lodder BME280 sammen

Forbind pin-headeren med BME280-kortet. Lod den fra bagsiden. Hullerne mellem stifterne er meget små, så vær tålmodig og forsigtig.

Tricket er at sætte loddekolbens spids mod stiften, varme den en smule op og derefter påføre loddet let.



#### Tilslutning af BME280
Pins er nummereret fra VENSTRE til HØJRE.
````bash
VIN -> Pin 3V3 (3,3V)
GND-> GNDG
SDA -> PIN D3
SCL -> Pin D4
```

### Bind det hele sammen

 ##### Binder NodeMCU og SDS011 sammen
<img src="..docsairrohrtie-air-quality-sensor-together.jpeg" loading="lazy">
Brug et kabelbånd til at forbinde NodeMCU'en (ESP8266) og SDS011-sensoren, så Wifi-antennen peger væk fra sensoren

 ##### Connect fleksibelt rør
 ##### Connect fleksibelt rør
 ##### Connect fleksibelt rør

* Tilslut den fleksible slange til SDS011-sensoren
* Brug et andet kabelbånd til at fastgøre BME280-temperatursensoren til røret
* Før USB-kablet gennem røret. Monter SDS011 med NodeMCU'en vendt mod toppen og blæseren vendt mod bunden.
* Før USB-kablet gennem røret. Monter SDS011 med NodeMCU'en vendt mod toppen og blæseren vendt mod bunden.
 ##### Skub sensoren ind i røret
* Skub delene ind i røret, så de sidder fast i røret
* USB-kabel, fleksibelt rør og BME280 skal kigge ud af rørets ende
* Skub det andet rør på det første.

<img src="..docsairrohrsds011-jammed-into-tube.jpeg" loading="lazy">

##### Efterbehandling
* Placer temperaturføleren på det fleksible rør, så den er på kanten af røret.
* Skær det fleksible rør af i enden af røret
* Valgfrit: Du kan dække de åbne ender af røret med et fint net. Så kan luften cirkulere, men insekterne bliver udenfor.
* Valgfrit: Du kan dække de åbne ender af røret med et fint net. Så kan luften cirkulere, men insekterne bliver udenfor.
<img src="..docsairrohrposition-bme280.jpeg" loading="lazy">

#### Placering
Det ideelle sted ville være 1,5 til 3,5 meter over gaden og godt ventileret. Dette kan dog ikke lade sig gøre for alle mennesker, og derfor anmodes der om oplysninger som højde over jorden og beliggenhed i forhold til gaden ved registreringen.

