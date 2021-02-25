---
title: Assemble
---

> ⚠️ **WAŻNA UWAGA**
Przed montażem należy zainstalować firmware!
Patrz sekcja __ migacza firmware__.

### NodeMCU v3
Uwaga: Nasze instrukcje odnoszą się do wersji 3 NodeMCU. Można to rozpoznać po połączeniach VU i G (patrz rysunek). 

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em" loading="lazy"/>
<small>Prawa autorskie: Roman-minyaylov, Licencja MIT</small>


<img src="../docs/airrohr/nodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy"/>

##### Kiedy skończysz, tak to powinno wyglądać.


### Podłączyć SDS011
Piny są numerowane od PRAWEGO do LEWEGO, upewnij się, że podczas podłączania kabli siedzą na nich, ponieważ większość kabli firmy Dupont również mieści się pomiędzy pinami.

```bash
SDS011 Pin 1 -> Pin D1 / GPIO5
SDS011 Pin 2 -> Pin D2 / GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> nieużywany
SDS011 Pin 5 -> VU (NodeMCU v3) / VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> nieużywany
SDS011 Pin 7 -> nieużywany
```

### Zlutuj razem BME280
<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center" loading="lazy"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;" loading="lazy"/>

Połącz nagłówek pinów z płytką BME280. Przylutuj go od tyłu. Szczeliny pomiędzy pinami są bardzo małe, więc należy być cierpliwym i ostrożnym.  

Sztuczka polega na przylutowaniu końcówki lutownicy do bolca, podgrzaniu go trochę, a następnie lekkim nałożeniu lutu.  



### Podłączyć BME280
Sworznie są numerowane od LEWEGO do PRAWEGO.

```bash
VIN -> Pin 3V3 (3.3V)
GND-> GND/G
SDA -> PIN D3
SCL -> Pin D4
```

### Związać wszystko razem

 ##### Wiązanie NodeMCU i SDS011 razem
<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg" loading="lazy"/>
Do połączenia NodeMCU (ESP8266) z czujnikiem SDS011 należy użyć opaski kablowej, tak aby antena Wifi była skierowana z dala od czujnika.

 ##### Podłączenie rury elastycznej
 <img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em" loading="lazy"/>
 <img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;" loading="lazy"/>

* podłącz elastyczną rurkę do czujnika SDS011
* Użyj innej opaski kablowej do przymocowania czujnika temperatury BME280 do rurki
* Przepuść kabel USB przez tubę. Zamontować SDS011 z modułem NodeMCU skierowanym do góry i wentylatorem skierowanym do dołu.

 
 ##### Wsuń czujnik do rury
* Wepchnij części do rury, żeby się zacięły w środku
* Kabel USB, giętka rurka i BME280 powinny wychodzić z końca rurki
* Wepchnij drugą rurę na pierwszą.

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg" loading="lazy"/>

 ##### Wykończenie
* Umieść czujnik temperatury na rurze elastycznej, tak aby znajdował się na jej krawędzi.
* Odetnij rurę elastyczną na końcu rury
* Opcjonalnie: można zakryć otwarte końce rurki delikatną siatką. Tak więc powietrze może cyrkulować, ale owady pozostają na zewnątrz
 
<img src="../docs/airrohr/position-bme280.jpeg" loading="lazy"/>
