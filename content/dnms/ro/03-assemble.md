---
title: Asamblați
---
> ⚠️ **NOTA IMPORTANTĂ**
Înainte de asamblare, instalați firmware-ul!
A se vedea secțiunea __firmware flasher__.


### Unitatea de microfon

Unitatea de microfon se bazează pe o placă de descompunere Pesky Products cu un microfon MEMS ICS-43434. Puteți găsi o astfel de placă pe [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).

Unitatea de microfon se bazează pe o placă de descompunere Pesky Products cu un microfon MEMS ICS-43434. Puteți găsi o astfel de placă pe [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).


##### Carcasă pentru unitatea de microfon
Carcasa este fabricată cu un tub de polistiren de 12,7 mm (0,500"). Acest diametru permite conectarea directă a majorității calibratoarelor la unitate.

Prototipul a fost dezvoltat cu [tubulatura Evergreen nr. 236] (https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

Prototipul a fost dezvoltat cu [tubulatura Evergreen nr. 236] (https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).
<br>
Placa de conectare trebuie adaptată la diametrul tubului cu ajutorul unui fișier. Folosiți niște bandă adezivă pentru a proteja intrarea microfonului.
<br>

<br>
<br>

Apoi lipiți cele șase cabluri de silicon. Rețineți cu ce pin este conectat cablul!

Apoi lipiți cele șase cabluri de silicon. Rețineți cu ce pin este conectat cablul!
Tăiați o bucată de tub de 115 mm lungime.
<br>
Lipiți placa de microfon pe o bandă încrucișată. Puneți cablurile în tubulatură și fixați placa la extremitatea tubulaturii.
<br>
<br>
<br>

Strângeți extremitatea tubului cu bandă adezivă.

Strângeți extremitatea tubului cu bandă adezivă.

Acum puteți umple tubul cu puțină rășină. Acest pas este obligatoriu pentru a evita rezonanța și a obține date calibrate și reproductibile.

Prototipul a fost dezvoltat cu niște [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900) produs de Copaltec GmbH.

##### Specificații:
* Rezistența dielectrică: 28 kVmm
* Rezistență specifică la înaintare: 5,8.1014 ohmcm
* Rezistența de suprafață: 1,3.1016 ohm
* Raportul de amestecare a rășinosului: 2 : 1
* Timp de preparare: 20 până la 30 min.
* Timp de întărire: 16 la 30 h
* Stare finală de întărire: 10 până la 14 zile
* Vâscozitate (amestec): 500 la 600 mPa.s
* Duritate Shore: D 50 până la 55 (ISO 868, DIN 53505)
* Conductivitate termică: 0,3 WmK
* Temperaturi de aplicare: - 20 până la +130 °C


Ar trebui să funcționeze și [rășina poliuretanică UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) produsă de Electrolube.

Pentru fiecare tubulatură ar trebui să fie suficiente 15 g de rășină.

<img src="..docsdnmsdnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy">

Când rășina s-a întărit, îndepărtați banda. Unitatea de microfon este gata.



### DNMS Housing

Atunci când Teensy (DNMS) și NodeMCU (independent sau pe PCB) sunt separate: DNMS și airRohr

Aveți nevoie de o bucată de tub cu diametrul de 25 mm (de exemplu, tubulatură pentru aplicații electrice), un conector, un arc de 90° și un racord de cablu M25 IP68.

Tubul în sine trebuie să aibă o lungime de 160 mm. DNMS arată locul în. Carcasa microfonului este menținută de presetupa de cablu.

Arcul împiedică pătrunderea apei și a umidității în carcasă, permițând în același timp trecerea cablului.

<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

DNMS este conectat la cel de-al doilea PCB printr-un cablu RJ12. Dacă acest cablu este mai lung de 250 mm, trebuie să folosiți o extensie I²C.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

După ce totul este bine conectat, piesele sunt lipite împreună.

Rezultat:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

Placa de circuit imprimat pe care se află NodeMCU poate fi montată în orice tip de cutie electrică.


### Protecție împotriva intemperiilor

Carcasele în sine ar trebui să fie impermeabile. Doar intrarea microfonului ar putea fi sensibilă. TDK, producătorul, a publicat câteva recomandări pentru etanșarea microfoanelor MEMS InvenSense cu port inferior împotriva pătrunderii prafului și a lichidelor, dar componentele sunt greu de găsit și nu au fost testate.

Este absolut necesar să se instaleze o protecție împotriva intemperiilor sub forma unui capac de spumă. Dacă este necesar, chiar și un burete de uz casnic este suficient. Există mai multe motive pentru acest lucru:
* protejează împotriva zgomotului produs de vânt (care poate crește măsurătorile de decibeli)
* protejează împotriva scurgerilor directe de apă pe microfon. Pentru a evita formarea condensului pe microfon trageți capacul înapoi o bătaie după ce l-ați instalat pentru a crea o mică cavitate.
* protejează împotriva radiațiilor solare. Lumina solară intensă poate influența valorile măsurate și reduce durata de viață a microfonului.

* protejează împotriva radiațiilor solare. Lumina solară intensă poate influența valorile măsurate și reduce durata de viață a microfonului.

Aceste huse din spumă sunt vândute în mod normal ca "huse pentru microfon de măsurare". Dar sunt scumpe. De asemenea, puteți lua o minge de spumă normală și să faceți o gaură cu foarfeca.

If you need more ones [this source](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2
) can be helpful.

### Locul de amplasare a microfonului

Este important să plasați microfonul într-o zonă cât mai "liberă" posibil, adică într-o locație cu cât mai puține suprafețe care reflectă sunetul. Distanța față de suprafețele reflectante trebuie să fie cât mai mare posibil. Încercați să nu montați microfonul direct pe peretele unei case, deoarece pereții reflectă puternic sunetele.  Distanța față de perete ar trebui să fie, în mod ideal, mai mare de 1 m. Desigur, acest lucru nu este întotdeauna ușor de realizat.

La o distanță de aproximativ 50 cm între vârful microfonului și perete, eroarea indusă este încă rezonabilă. Locuri bune sunt, de exemplu, balcoanele sau balustradele terasei, sau un mic catarg pe acoperiș.

De asemenea, puteți încerca să plasați microfonul direct pe colțul casei pentru ca reflexiile să se anuleze parțial.

Un stâlp independent cu o înălțime de cel puțin 1 m ar putea fi, de asemenea, o soluție, dar atunci trebuie să aveți grijă la reflexiile de pe sol. Acest lucru depinde, bineînțeles, de acoperirea podelei.

De asemenea, este important să fim întotdeauna conștienți de faptul că măsurăm zgomotul ambiental.  Putem face doar o aproximare a zgomotului emis de surse cum ar fi drumurile sau căile ferate.

Cu toate acestea, cu cât te apropii mai mult de sursă, cu atât mai precisă devine referința la sursă. Actualizările firmware-ului ar trebui să permită obținerea unor măsurători precise pentru un tip de zgomot identificat.

Cu toate acestea, cu cât te apropii mai mult de sursă, cu atât mai precisă devine referința la sursă. Actualizările firmware-ului ar trebui să permită obținerea unor măsurători precise pentru un tip de zgomot identificat.
Cu toate acestea, cu cât te apropii mai mult de sursă, cu atât mai precisă devine referința la sursă. Actualizările firmware-ului ar trebui să permită obținerea unor măsurători precise pentru un tip de zgomot identificat.
<br>
<br>
