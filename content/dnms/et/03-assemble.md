---
title: Koosta
---
> ⚠️ **OLULINE MÄRKUS**
Enne kokkupanekut paigaldage püsivara!
Vt __firmware flasher__ lõik.

### Mikrofoniüksus

Mikrofoniüksus põhineb Pesky Products Breakout-plaadil koos MEMS-mikrofoniga ICS-43434. Sellist tahvlit saab osta [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).

<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>


##### Mikrofoniüksuse korpus
Korpus on valmistatud .500" (12,7 mm) polüstüreenist torudest. See läbimõõt võimaldab ühendada otse enamiku kalibraatoreid seadme külge.

Prototüüp töötati välja [Evergreen nr. 236 toruga](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

<img src="../docs/dnms/dnms-noise-measuring-microphone-anschluesse.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>

<br>
Läbimurdeplaat tuleb faili abil kohandada torude läbimõõdule. Mikrofoni sisselaskeava kaitsmiseks kasutage teipi.
<br>

<img src="../docs/dnms/dnms-noise-measuring-microphone-protection.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection-front.jpg" style="width:41%; margin: 2em 0" loading="lazy"/>

Seejärel joota kuus silikoonkaablit. Pange tähele, millise viiguga on kaabel ühendatud!

<img src="../docs/dnms/dnms-noise-measuring-microphone-with-cable.jpg" style="display: block; width:40%; margin: 2em 0" loading="lazy"/>
Lõika 115 mm pikkune toru tükk.
<br>
Kleepige mikrofoniplaat mõnele ristatud teibile. Pange kaablid torusse ja kinnitage plaat toru otsa.
<br>
<img src="../docs/dnms/dnms-noise-measuring-microphone-preparing-housing.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-housing.jpg" style="width:42%; margin: 2em 0" loading="lazy"/>

Tehke toru otsad teibiga tihedaks.

<img src="../docs/dnms/dnms-noise-measuring-microphone-tube.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>

Nüüd saate toru vaiguga täita. See samm on kohustuslik, et vältida resonantsi ning saada kalibreeritud ja reprodutseeritavaid andmeid.

Prototüüp on välja töötatud mõne [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900), mida toodab Copaltec GmbH.

##### Spetsifikatsioonid
* Dielektriline tugevus: 28 kV/mm
* Spetsiifiline läbivoolutakistus: 5,8.1014 ohm/cm.
* Pinnatakistus: 1,3,1016 oomi
* Segamissuhe vaik/kõrvendi: 2 : 1
* Pannuaeg: 20 kuni 30 min.
* Kõvenemisaeg: 16 kuni 30 tundi
* Lõplik kõvenemine: 10 kuni 14 päeva
* Viskoossus (segatud): 500 kuni 600 mPa.s
* Shore kõvadus: D 50 kuni 55 (ISO 868, DIN 53505).
* Soojusjuhtivus: 0,3 W/mK
* Kasutustemperatuurid: - 20 kuni +130 °C


Electrolube'i valmistatud [polüuretaanvaik UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) peaks samuti toimima.

Iga toru jaoks peaks piisama 15 g vaigust.

<img src="../docs/dnms/dnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy"/>

Kui vaik on kõvenenud, eemaldage teip. Teie mikrofoniüksus on valmis.

### DNMS eluase

Kui Teensy (DNMS) ja NodeMCU (eraldiseisev või trükkplaadil) on eraldatud: DNMS ja airRohr

Vaja on tükk 25 mm läbimõõduga torusid (näiteks torusid elektriliste rakenduste jaoks), pistikut, 90° kaarti ja M25 IP68 kaablifiltrit.

Toru ise peaks olema 160 mm pikk. DNMS paistab kohale. Mikrofoni korpuse hoiab kaablifiltri abil.

Vibu takistab vee ja niiskuse sisenemist korpusesse, lastes samal ajal kaabli läbi.

<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

DNMS on ühendatud teise trükkplaadiga RJ12 kaabli abil. Kui see kaabel on pikem kui 250 mm, tuleb kasutada I²C-pikendust.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

Kui kõik on korralikult ühendatud, liimitakse osad kokku.

Tulemus:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

NodeMCU-d kandva trükkplaadi võib paigutada mis tahes elektrikasti.


### Ilmastikukaitse

Korpused ise peaksid olema veekindlad. Ainult mikrofoni sisselaskeava võiks olla tundlik. Tootja TDK on avaldanud mõned soovitused InvenSense'i alumiste portidega MEMS-mikrofonide tihendamiseks tolmu ja vedeliku sissetungi eest, kuid komponente on raske leida ja neid ei ole testitud.

Ilmastikukaitse paigaldamine vahtkatte näol on hädavajalik. Vajadusel piisab isegi kodusest käsnast. Selleks on mitu põhjust:
* see kaitseb tuulemüra eest (mis võib suurendada detsibellide mõõtmist).
* see kaitseb mikrofoni otsese vee lekke eest. Mikrofoni kondenseerumise vältimiseks tõmmake kate pärast selle paigaldamist veidi tagasi, et tekiks väike tühimik.
* see kaitseb päikesekiirguse eest. Intensiivne päikesekiirgus võib mõjutada mõõteväärtusi ja vähendada mikrofoni kasutusiga.

<img src="../docs/dnms/dnms-noise-measuring-microphone-bonette.jpg" style="width:45%; margin: 3em 0" loading="lazy"/>

Neid vahtkummist katteid müüakse tavaliselt kui "mõõtmismikrofonide katteid". Aga need on kallid. Võid võtta ka tavalise vahtpalli ja lõigata kääridega augu sisse.

If you need more ones [this source](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2
) võib olla abiks.

### Mikrofoni asukoht

Oluline on paigutada mikrofon võimalikult "vabale" kohale, see tähendab võimalikult väheste heli peegeldavate pindadega kohta. Kaugus peegeldavatest pindadest peaks olema võimalikult suur. Püüdke mitte paigaldada mikrofoni otse maja seinale, sest seinad peegeldavad helisid tugevasti.  Ideaalis peaks vahemaa seinast olema üle 1 m. Muidugi ei ole seda alati lihtne realiseerida.

Kui mikrofoni otsa ja seina vaheline kaugus on umbes 50 cm, on indutseeritud viga veel mõistlik. Head kohad on näiteks rõdud või terrassipiirded või väike mast katusel.

Samuti võite proovida paigutada mikrofoni otse majanurka, et peegeldused osaliselt üksteist neutraliseeriksid.

Vabalt seisev, vähemalt 1 m kõrgune mast võib samuti olla lahendus, kuid siis tuleb jälgida peegeldusi maapinnal. See sõltub muidugi põrandakattest.

Samuti tuleb alati arvestada, et me mõõdame ümbritsevat müra.  Me saame teha ainult ligikaudse hinnangu selliste müraallikate nagu maantee või raudtee müraemissioonile.

Kuid mida lähemale allikale jõuate, seda täpsemaks muutub viide allikale. Firmware uuendamine peaks siis võimaldama saada täpsed mõõtmised tuvastatud tüüpi müra kohta.

<img src="../docs/dnms/measuring-sensor-on-balcony.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<img src="../docs/dnms/measuring-sensor-on-terasse.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<br>
<img src="../docs/dnms/measuring-sensor-on-wall.jpg" style="width:99%; margin-bottom: 2em;" loading="lazy"/>
