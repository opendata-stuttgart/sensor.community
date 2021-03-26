---
title: Kokoa
---

> ⚠️ **TÄRKEÄ HUOMAUTUS**
Ennen kokoonpanoa asenna laiteohjelma!
Katso __firmware flasher__ -osio.

### NodeMCU v3
Huomautus: Ohjeemme viittaavat NodeMCU:n versioon 3. Tämän tunnistaa liitännöistä VU ja G (ks. piirros).

Huomautus: Ohjeemme viittaavat NodeMCU:n versioon 3. Tämän tunnistaa liitännöistä VU ja G (ks. piirros).
<small>Copyright: roman-minyaylov, MIT License<small>


<img src="..docsairrohrnodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy">

##### Kun olet valmis, sen pitäisi näyttää tältä.


### Johdota SDS011

```bash
SDS011 Pin 1 -> Pin D1 GPIO5
SDS011 Pin 2 -> Pin D2 GPIO4
SDS011 Nasta 3 -> GND
SDS011 Nasta 4 -> ei käytössä
SDS011 Pin 5 -> VU (NodeMCU v3) VIN (NodeMCU v1,v2)
SDS011 Nasta 6 -> ei käytössä
SDS011 Nasta 7 -> ei käytössä
```

<br>

💡 Löydät luettelon [firmware-ohjelmistomme tukemista antureista](https://github.comopendata-stuttgartsensors-softwareblobmasterairrohr-firmwareReadme.md).



### Juota BME280 yhteen
### Juota BME280 yhteen
### Juota BME280 yhteen

Kytke nastapääty BME280-levyyn. Juota se takapuolelta. Nastojen välit ovat hyvin pienet, joten ole kärsivällinen ja varovainen.

Temppu on asettaa juotosraudan kärki tappiin, lämmittää sitä hieman ja levittää sitten kevyesti juotetta.



### Johdota BME280
Nastat on numeroitu vasemmalta oikealle.
```bash
VIN -> Pin 3V3 (3.3V)
GND-> GNDG
SDA -> PIN D3
SCL -> Nasta D4
```

### Sido kaikki yhteen

 ##### Sido NodeMCU ja SDS011 yhteen.
<img src="..docsairrohrtie-air-quality-sensor-together.jpeg" loading="lazy">
Yhdistä NodeMCU (ESP8266) ja SDS011-anturi kaapelisidoksella siten, että Wlan-antenni osoittaa poispäin anturista.

 ##### Connect joustava putki
 ##### Connect joustava putki
 ##### Connect joustava putki

* Liitä joustava putki SDS011-anturiin.
* Kiinnitä BME280-lämpötila-anturi putkeen toisella nippusiteellä.
* Vie USB-kaapeli putken läpi. Asenna SDS011 siten, että NodeMCU on ylhäältäpäin ja tuuletin alhaaltapäin.
* Vie USB-kaapeli putken läpi. Asenna SDS011 siten, että NodeMCU on ylhäältäpäin ja tuuletin alhaaltapäin.
 ##### Työnnä anturi putkeen
* Työnnä osat putkeen niin, että ne juuttuvat sisään.
* USB-kaapelin, taipuisan putken ja BME280:n pitäisi näkyä ulos putken päästä
* Työnnä toinen putki ensimmäisen putken päälle.

<img src="..docsairrohrsds011-jammed-into-tube.jpeg" loading="lazy">

##### Viimeistely
* Aseta lämpötila-anturi joustavaan putkeen niin, että se on putken reunalla.
* Katkaise joustava putki putken päästä.
* Valinnainen: voit peittää putken avoimet päät hienolla verkolla. Näin ilma pääsee kiertämään, mutta hyönteiset pysyvät ulkopuolella.
* Valinnainen: voit peittää putken avoimet päät hienolla verkolla. Näin ilma pääsee kiertämään, mutta hyönteiset pysyvät ulkopuolella.
<img src="..docsairrohrposition-bme280.jpeg" loading="lazy">

### Sijoitus
Ihanteellinen paikka olisi 1,5-3,5 metriä kadun yläpuolella ja hyvin tuuletettu. Tätä ei kuitenkaan voida tehdä kaikkien ihmisten kohdalla, joten rekisteröinnin yhteydessä pyydetään tietoja, kuten korkeus maanpinnasta ja sijainti kadulle päin.

