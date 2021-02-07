---
title: Assemble
---
> ⚠️ **WAŻNA UWAGA**
Przed montażem należy zainstalować firmware!
Patrz sekcja __ migacza firmware__.


### Microphone unit

Moduł mikrofonowy oparty jest na płycie Pesky Products breakoutboard z mikrofonem MEMS ICS-43434. Płytę taką można dopracować w [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/). 

<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>


##### Obudowa modułu mikrofonu
Obudowa wykonana jest z rurki styropianowej .500" (12,7 mm). Średnica ta pozwala na bezpośrednie podłączenie większości kalibratorów do urządzenia.

Prototyp został opracowany przy użyciu [Evergreen nr 236 rurki] (https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

<img src="../docs/dnms/dnms-noise-measuring-microphone-anschluesse.jpg" style="width:40%; marginale: 3em 0" loading="lazy"/>
<br>
Płytka łamiąca musi być dostosowana do średnicy rurki za pomocą pilnika. Do ochrony wlotu mikrofonu należy użyć trochę taśmy.
<br>

<img src="../docs/dnms/dnms-noise-measuring-microphone-protection.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection-front.jpg" style="width:41%; marginale: 2em 0" loading="lazy"/>

Następnie przylutować sześć silikonowych kabli. Zwróć uwagę, z którym stykiem kabel jest połączony!

<img src="../docs/dnms/dnms-noise-measuring-microphone-with-cable.jpg" style="display: block; width:40%; margin: 2em 0" loading="lazy"/>
Odciąć kawałek rury o długości 115 mm.
<br>
Przykleić płytkę mikrofonu na jakiejś skrzyżowanej taśmie. Umieścić kable w rurce i zamocować płytkę na końcu rurki.
<br>
<img src="../docs/dnms/dnms-noise-measuring-microphone-preparing-housing.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-housing.jpg" style="width:42%; marginale: 2em 0" loading="lazy"/>

Zacisnąć koniec rury taśmą.

<img src="../docs/dnms/dnms-noise-measuring-microphone-tube.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>

Teraz możesz wypełnić rurę żywicą. Ten krok jest obowiązkowy w celu uniknięcia rezonansu i uzyskania skalibrowanych i odtwarzalnych danych.

Prototyp został opracowany przy użyciu niektórych materiałów [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900) produkowanych przez Copaltec GmbH.

##### Specyfikacje:
* Wytrzymałość dielektryczna: 28 kV/mm
* Szczególny opór do przodu: 5,8.1014 ohm/cm
* Opór powierzchniowy: 1,3.1016 om
* Proporcja mieszania żywica/ utwardzacz: 2 : 1
* Czas garnkowy: 20 do 30 min.
* Czas utwardzania: 16 do 30 h
* Ostatecznie utwardzony stan: 10 do 14 dni
* Lepkość (mieszana): 500 do 600 mPa.s
* Twardość brzegowa: D 50 do 55 (ISO 868, DIN 53505)
* Przewodność cieplna: 0,3 W/mK
* Temperatury stosowania: - 20 do +130 °C


Powinna działać również [żywica poliuretanowa UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) wyprodukowana przez Electrolube.

Na każdą rurkę powinno wystarczyć 15 g żywicy.

<img src="../docs/dnms/dnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy"/>

Po stwardnieniu żywicy należy usunąć taśmę. Jednostka mikrofonowa jest gotowa.



### DNMS Obudowa

Po rozdzieleniu Teensy (DNMS) i NodeMCU (samodzielnego lub na PCB): DNMS i airRohr

Potrzebny jest kawałek rury o średnicy 25 mm (na przykład rury do zastosowań elektrycznych), złącze, łuk 90° i dławnica kablowa M25 IP68.

Sama rurka powinna mieć długość 160 mm. DNMS wygląda w środku. Obudowa mikrofonu jest utrzymywana przez dławnicę kablową.

Dławik zapobiega przedostawaniu się wody i wilgoci do wnętrza obudowy podczas przepuszczania kabla.

<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

DNMS jest podłączony do drugiej płytki drukowanej za pomocą kabla RJ12. Jeśli kabel ten jest dłuższy niż 250 mm, należy użyć przedłużacza I²C.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

Gdy wszystko jest już dobrze połączone, części są sklejane razem.

Rezultat:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

Płytka drukowana zawierająca NodeMCU może być umieszczona w dowolnym rodzaju skrzynki elektrycznej.

### Weather protection

Same obudowy powinny być wodoszczelne. Tylko wlot mikrofonu może być czuły. TDK, producent opublikował kilka zaleceń dotyczących uszczelniania dolnego wlotu mikrofonów InvenSense MEMS od kurzu i cieczy, ale komponenty są trudne do znalezienia i nie zostały przetestowane.

Bezwzględnie konieczne jest zainstalowanie zabezpieczenia pogodowego w postaci piankowej osłony. W razie potrzeby wystarczy nawet gąbka domowa. Jest ku temu kilka powodów:
* chroni ona przed hałasem wiatru (co może zwiększyć pomiary decybeli)
* chroni przed bezpośrednim wyciekiem wody z mikrofonu. Aby uniknąć kondensacji pary wodnej na mikrofonie, po zainstalowaniu należy odciągnąć pokrywę do tyłu, aby utworzyć małą szczelinę.
* chroni ona przed promieniowaniem słonecznym. Intensywne promieniowanie słoneczne może wpływać na mierzone wartości i skrócić żywotność mikrofonu.

<img src="../docs/dnms/dnms-noise-measuring-microphone-bonette.jpg" style="width:45%; margin: 3em 0" loading="lazy"/>

Te piankowe osłony są zwykle sprzedawane jako "osłony do mikrofonów pomiarowych". Ale są one drogie. Można też wziąć normalną piankową kulkę i wyciąć w niej otwór nożyczkami.

If you need more ones [this source](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2) can be helpful.

### Location of the microphone 

Ważne jest, aby umieścić mikrofon w miejscu możliwie jak najbardziej "wolnym", to znaczy w miejscu o jak najmniejszej ilości powierzchni odbijających dźwięk. Odległość od powierzchni odbijających dźwięk powinna być tak duża, jak to tylko możliwe. Staraj się nie montować mikrofonu bezpośrednio na ścianie domu, ponieważ ściany mocno odbijają dźwięki.  Odległość od ściany powinna być idealnie większa niż 1 m. Oczywiście nie zawsze jest to łatwe do zrealizowania. 

Przy odległości około 50 cm od końcówki mikrofonu do ściany, wywołany błąd jest nadal uzasadniony. Dobrymi miejscami są np. balkony lub barierki tarasowe, czy mały maszt na dachu. 

Można również spróbować umieścić mikrofon bezpośrednio w rogu domu, aby odbicia częściowo się wzajemnie zniwelowały.

Wolnostojący maszt o wysokości co najmniej 1 m może być również rozwiązaniem, ale wtedy trzeba uważać na odbicia na ziemi. Zależy to oczywiście od pokrycia podłogi.

Ważne jest również, aby zawsze mieć świadomość, że mierzymy hałas otoczenia.  Możemy dokonać jedynie przybliżonego pomiaru emisji hałasu ze źródeł takich jak drogi lub linie kolejowe. 

Jednak im bliżej źródła, tym dokładniejsze staje się odniesienie do źródła. Aktualizacje oprogramowania sprzętowego powinny wtedy umożliwiać wstępne pomiary dla określonego rodzaju hałasu.

<img src="../docs/dnms/measuring-sensor-on-balcony.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<img src="../docs/dnms/measuring-sensor-on-terasse.jpg" style="width:49%; margines: 1em 0;" loading="lazy"/>
<br>
<img src="../docs/dnms/measuring-sensor-on-wall.jpg" style="width:99%; margin-bottom: 2em;" loading="lazy"/>
