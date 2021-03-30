---
title: Sestavite
---
> ⚠️ **POMEMBNA OPOMBA**
Pred sestavljanjem namestite vdelano programsko opremo!
Glejte razdelek __firmware flasher__.


### Mikrofonska enota

Mikrofonska enota temelji na plošči za prekinitev Pesky Products z mikrofonom MEMS ICS-43434. Takšno ploščo lahko najdete na [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).

<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>

##### Ohišje za mikrofonsko enoto
Ohišje je izdelano iz 12,7-milimetrske polistirenske cevi s premerom 0,500". Ta premer omogoča neposredno priključitev večine kalibratorjev na enoto.

Prototip je bil razvit s cevjo [Evergreen št. 236](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

<img src="../docs/dnms/dnms-noise-measuring-microphone-anschluesse.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>

<br>
Prebojno ploščo je treba s pilico prilagoditi premeru cevi. Za zaščito vhoda mikrofona uporabite trak.
<br>

<img src="../docs/dnms/dnms-noise-measuring-microphone-protection.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection-front.jpg" style="width:41%; margin: 2em 0" loading="lazy"/>

Nato spajkajte šest silikonskih kablov. Upoštevajte, s katerim nožičkom je kabel povezan!
<img src="../docs/dnms/dnms-noise-measuring-microphone-with-cable.jpg" style="display: block; width:40%; margin: 2em 0" loading="lazy"/>

Odrežite 115 mm dolg kos cevi.
<br>
Ploščo mikrofona nalepite na prekrižan trak. Kable vstavite v cev in ploščo pritrdite na koncu cevi.
<br>
<img src="../docs/dnms/dnms-noise-measuring-microphone-preparing-housing.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-housing.jpg" style="width:42%; margin: 2em 0" loading="lazy"/>

Z lepilnim trakom zategnite rob cevke.

<img src="../docs/dnms/dnms-noise-measuring-microphone-tube.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>

Zdaj lahko cev napolnite z nekaj smole. Ta korak je obvezen, če se želite izogniti resonanci ter pridobiti umerjene in ponovljive podatke.

Prototip je bil razvit z nekaj [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900), ki ga je izdelalo podjetje Copaltec GmbH.

##### Specifikacije:
* Dielektrična trdnost: 28 kVmm
* Specifični upor naprej: 5,8.1014 ohmcm
* Površinska upornost: 1,3.1016 ohma
* Razmerje mešanja smolnega trdila: 2 : 1
* Čas kuhanja: 20 do 30 min.
* Čas strjevanja: 16 à 30 h
* Končno utrjeno stanje: 10 do 14 dni
* Viskoznost (mešano): 500 à 600 mPa.s
* Trdota po Shoreovi lestvici: D 50 do 55 (ISO 868, DIN 53505).
* Toplotna prevodnost: 0,3 WmK
* Temperature uporabe: - 20 do +130 °C


Tudi [poliuretanska smola UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) podjetja Electrolube bi morala delovati.

Za vsako cevko zadostuje 15 g smole.

<img src="../docs/dnms/dnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy"/>

Ko se smola strdi, odstranite trak. Mikrofonska enota je pripravljena.


#### Ohišje DNMS

Ko sta Teensy (DNMS) in NodeMCU (samostojno ali na tiskanem vezju) ločena: DNMS in airRohr

Potrebujete kos cevi premera 25 mm (na primer cevi za električne aplikacije), priključek, 90-stopinjski lok in kabelsko ovojnico M25 IP68.

Cev mora biti dolga 160 mm. DNMS je videti v. Ohišje mikrofona je ohranjeno s kabelskim ovojem.

Lok preprečuje vdor vode in vlage v ohišje, hkrati pa prepušča kabel.

<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

DNMS je z drugim tiskanim vezjem povezan s kablom RJ12. Če je ta kabel daljši od 250 mm, morate uporabiti podaljšek I²C.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

Ko je vse dobro povezano, dele zlepite skupaj.

Rezultat:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

Tiskano vezje z NodeMCU lahko vstavite v katero koli električno škatlo.


#### Vremenska zaščita

Sama ohišja morajo biti vodotesna. Občutljiv je lahko le vhod za mikrofon. Proizvajalec TDK je objavil nekaj priporočil za tesnjenje mikrofonov InvenSense MEMS s spodnjimi vrati pred vdorom prahu in tekočin, vendar je komponente težko najti in jih nismo preizkusili.

Nujno je treba namestiti zaščito pred vremenskimi vplivi v obliki pene. Po potrebi zadostuje tudi gospodinjska goba. Za to obstaja več razlogov:
* ščiti pred hrupom vetra (ki lahko poveča število decibelov)
* ščiti pred neposrednim uhajanjem vode na mikrofon. Da bi se izognili kondenzaciji na mikrofonu, po namestitvi pokrov potegnite nazaj, da ustvarite majhno votlino.
* ščiti pred sončnim sevanjem. Intenzivna sončna svetloba lahko vpliva na izmerjene vrednosti in skrajša življenjsko dobo mikrofona.

<img src="../docs/dnms/dnms-noise-measuring-microphone-bonette.jpg" style="width:45%; margin: 3em 0" loading="lazy"/>

Ti penasti pokrovi se običajno prodajajo kot "pokrovi za merilne mikrofone". Vendar so dragi. Lahko vzamete tudi običajno kroglico iz pene in s škarjami izrežete luknjo.

If you need more ones [this source](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2
) can be helpful.

#### Lokacija mikrofona

Pomembno je, da mikrofon postavite na čim bolj prosto mesto, kar pomeni na mesto s čim manj površinami, ki odbijajo zvok. Razdalja do odbojnih površin mora biti čim večja. Poskusite mikrofona ne namestiti neposredno na steno hiše, saj stene močno odbijajo zvoke.  V idealnem primeru naj bo razdalja do stene večja od 1 m. Seveda tega ni vedno lahko uresničiti.

Pri razdalji približno 50 cm od konice mikrofona do stene je inducirana napaka še vedno sprejemljiva. Dobra mesta so na primer balkoni ali ograje teras ali majhen jambor na strehi.

Mikrofon lahko postavite tudi neposredno na vogal hiše, da se odboji delno izničijo.

Rešitev je lahko tudi prostostoječi jambor višine vsaj 1 m, vendar je treba paziti na odboje na tleh. To je seveda odvisno od talne obloge.

Prav tako se je treba vedno zavedati, da merimo hrup iz okolice.  Emisijo hrupa iz virov, kot so ceste ali železnice, lahko ocenimo le približno.

Bolj ko se približujete viru, bolj natančno je sklicevanje na vir. Z nadgradnjami vdelane programske opreme bi bilo mogoče pridobiti natančne meritve za določeno vrsto hrupa.


<img src="../docs/dnms/measuring-sensor-on-balcony.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<img src="../docs/dnms/measuring-sensor-on-terasse.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<br>
<img src="../docs/dnms/measuring-sensor-on-wall.jpg" style="width:99%; margin-bottom: 2em;" loading="lazy"/>