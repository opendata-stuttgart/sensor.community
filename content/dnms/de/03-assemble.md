---
title: Aufbau
---
> ⚠️ **WICHTIGE ANMERKUNG**
Installiere vor dem Zusammenbau die Firmware!
Siehe Abschnitt __Firmware-Flasher__.


### Mikrofoneinheit

Die Mikrofoneinheit basiert auf einem Breakout-Board von Pesky Products mit einem MEMS-Mikrofon ICS-43434. Auf dem [Tindie-Marktplatz](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/) kann man solche Boards finden.

<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>


##### Gehäuse für die Mikrofoneinheit
Das Gehäuse ist aus einem .500" (12,7mm) Polystyrolrohr gefertigt. Dieser Durchmesser erlaubt es, die meisten Kalibratoren direkt an das Gerät anzuschließen.

Der Prototyp wurde mit dem [Evergreen-Rohr Nr. 236](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing) entwickelt.

<img src="../docs/dnms/dnms-noise-measuring-microphone-anschluesse.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>

<br>
Die Breakout-Platine muss mit einer Feile an den Durchmesser des Schlauches angepasst werden. Daher etwas Klebeband verwenden, um den Mikrofoneingang zu schützen.
<br>

<img src="../docs/dnms/dnms-noise-measuring-microphone-protection.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection-front.jpg" style="width:41%; margin: 2em 0" loading="lazy"/>

Die sechs Silikonkabel anlöten. Darauf achten, mit welchem Pin das Kabel verbunden ist!

<img src="../docs/dnms/dnms-noise-measuring-microphone-with-cable.jpg" style="display: block; width:40%; margin: 2em 0" loading="lazy"/>
Ein 115 mm langes Stück Schlauch abschneiden.
<br>
Die Mikrofonplatine auf ein Stück gekreuztes Klebeband kleben. Kabel in den Schlauch stecken und Platine am Ende des Schlauchesbefestigen.
<br>
<img src="../docs/dnms/dnms-noise-measuring-microphone-preparing-housing.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-housing.jpg" style="width:42%; margin: 2em 0" loading="lazy"/>

Das Ende des Rohrs mit dem Klebeband abschließen.

<img src="../docs/dnms/dnms-noise-measuring-microphone-tube.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>

Nun das Rohr mit etwas Harz befüllen. Dieser Schritt ist zwingend erforderlich, um Resonanzen zu vermeiden und kalibrierte und reproduzierbare Daten zu erhalten.

Der Prototyp wurde entwickelt mit [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900) der Firma Copaltec GmbH.

##### Spezifikationen:
* Durchschlagsfestigkeit: 28 kV/mm
* Spezifischer Durchlasswiderstand: 5,8.1014 Ohm/cm
* Oberflächenwiderstand: 1,3.1016 ohm
* Mischungsverhältnis Harz/Härter: 2 : 1
* Topfzeit: 20 à 30 Min.
* Aushärtezeit: 16 à 30 h
* Endausgehärteter Zustand: 10 à 14 Tage
* Viskosität (gemischt): 500 à 600 mPa.s
* Shore-Härte: D 50 bis 55 (ISO 868, DIN 53505)
* Wärmeleitfähigkeit: 0,3 W/mK
* Anwendungstemperaturen: - 20 bis +130 °C


Das [Polyurethanharz UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) der Firma Electrolube sollte ebenfalls funktionieren.

Für jeden Schlauch sollten 15 g Harz ausreichen.

<img src="../docs/dnms/dnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy"/>

Wenn das Harz ausgehärtet ist, Klebeband entfernen. 


### DNMS-Gehäuse

Wenn der Teensy (DNMS) und die NodeMCU (freistehend oder auf Platine) getrennt sind: DNMS und airRohr

Benötigt wird ein Stück Schlauch mit 25 mm Durchmesser (z. B. Schlauch für elektrische Anwendungen), einen Stecker, einen 90°-Bogen und eine M25 IP68-Kabelverschraubung.

Der Schlauch sollte 160 mm lang sein. Das Mikrofongehäuse wird durch die Kabelverschraubung gehalten.

Der Bügel verhindert das Eindringen von Wasser und Feuchtigkeit in das Gehäuse, während das Kabel durchgelassen wird.

<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

Das DNMS wird über ein RJ12-Kabel mit der zweiten Platine verbunden. Wenn dieses Kabel länger als 250 mm ist, muss eine I²C-Verlängerung verwendet werden.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

Nachdem alles miteinander verbunden ist, werden die Teile zusammengeklebt.

Ergebnis:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>


### Wetterschutz

Es ist unbedingt ein Wetterschutz in Form einer Schaumstoffabdeckung anzubringen. Notfalls reicht auch ein Haushaltsschwamm aus. Dafür gibt es mehrere Gründe:
* er schützt vor Windgeräuschen (die die Dezibel-Messungen erhöhen können)
* er schützt vor direktem Wasseraustritt am Mikrofon. Um Kondenswasser auf dem Mikrofon zu vermeiden, die Abdeckung nach der Montage bisschen zurückziehen, um einen kleinen Hohlraum zu schaffen.
* er schützt vor Sonneneinstrahlung. Intensive Sonneneinstrahlung kann die Messwerte beeinflussen und die Lebensdauer des Mikrofons verringern.

<img src="../docs/dnms/dnms-noise-measuring-microphone-bonette.jpg" style="width:45%; margin: 3em 0" loading="lazy"/>

Diese Schaumstoffabdeckungen werden normalerweise als "Abdeckungen für Messmikrofone" verkauft. Sind aber teuer. Alternative einen normalen Schaumstoffball nehmen und mit der Schere ein Loch hineinschneiden.

Bestellt werden können diese bei [Aliexpress](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2
).

### Standort des Mikrofons

Es ist wichtig, das Mikrofon in einem möglichst "freien" Bereich zu platzieren, d.h. an einem Ort mit möglichst wenig schallreflektierenden Flächen. Der Abstand zu reflektierenden Flächen sollte so groß wie möglich sein. Das Mikrofon nicht direkt an einer Hauswand montieren, da Wände Schall stark reflektieren. Der Abstand zur Wand sollte idealerweise mehr als 1 m betragen. Dies ist natürlich nicht immer einfach zu realisieren.

Mit einem Abstand von etwa 50 cm von der Mikrofonspitze zur Wand ist der induzierte Fehler noch vertretbar. Gute Plätze sind z.B. Balkone oder Terrassengeländer, oder ein kleiner Mast auf dem Dach.

Das Mikrofon kann direkt an der Hausecke platzieren werden, damit sich die Reflexionen teilweise auslöschen.

Ein freistehender Mast von mindestens 1 m Höhe könnte auch eine Lösung sein, hier muss man auf die Reflexionen am Boden achten. Das hängt natürlich vom Bodenbelag ab.

Es ist auch wichtig, sich immer bewusst zu machen, dass wir Umgebungsgeräusche messen. Wir können nur eine Annäherung an die Geräuschemission von Quellen wie Straßen oder Eisenbahnen vornehmen.

Je näher man jedoch an die Quelle herankommt, desto genauer wird der Bezug zur Quelle. 

<img src="../docs/dnms/measuring-sensor-on-balcony.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<img src="../docs/dnms/measuring-sensor-on-terasse.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<br>
<img src="../docs/dnms/measuring-sensor-on-wall.jpg" style="width:99%; margin-bottom: 2em;" loading="lazy"/>
