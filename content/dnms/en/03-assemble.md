---
title: Assemble
---

> ⚠️ **IMPORTANT NOTE**
Before assembling install the firmware!
See __firmware flasher__ section.


##### There are two different ways to build the noise sensor:
* DNMS – Teensy separated from the NodeMCU (standalone or on a PCB)
* DNMS – Teensy and NodeMCU on the same PCB 

The common part is the microphone unit.

### Microphone unit

The microphone unit is based on Pesky Products breakout board with a MEMS microphone ICS-43434. You can fin such board at the [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/). 

<img src="../docs/dnms/dnms-noise-measuring-microphone.png" style="width:40%; margin-top: 3em"/>


##### Housing for the microphone unit
The housing is made with a .500" (12.7mm) polystyrene tubing. This diameter permits to plug directly most of the calibrators on the unit.

The prototype was developed with the [Evergreen No. 236 tubing](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

<img src="../docs/dnms/dnms-noise-measuring-microphone-anschluesse.png" style="width:40%; margin-top: 3em"/>

The breakout board has to be adapted to the diameter of the tubing with a file. Use some tape to protect the microphone inlet.

<img src="../docs/dnms/dnms-noise-measuring-microphone-protection.png" style="width:40%; margin-top: 3em"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection-front.png" style="width:40%; margin-top: 3em"/>

Then solder the six silicone cables. Note which pin the cable is connected with!

<img src="../docs/dnms/dnms-noise-measuring-microphone-with-cable.png" style="width:40%; margin-top: 3em"/>

Cut a 115 mm long piece of tubing.

##### Housing for the microphone unit

Stick the microphone board on some crossed tape. Put the cables in the tubing and fasten the board at the extremity of the tubing.

<img src="../docs/dnms/dnms-noise-measuring-microphone-preparing-housing.png" style="width:40%; margin-top: 3em"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-housing.png" style="width:40%; margin-top: 3em"/>

Make the extremity of the tube tight with the tape.

<img src="../docs/dnms/dnms-noise-measuring-microphone-tube.png" style="width:40%; margin-top: 3em"/>

Now you can fill the tube with some resin. This step is mandatory to avoid resonance and obtain calibrated and reproductible data.

The prototype was developed with some [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900) produced by Copaltec GmbH.

##### Specifications:
* Dielectric strength: 28 kV/mm
* Specific forward resistance: 5,8.1014 ohm/cm
* Surface resistance: 1,3.1016 ohm
* Mixing ratio resin/hardener: 2 : 1
* Pot time: 20 à 30 min.
* Curing time: 16 à 30 h
* Final hardened state: 10 à 14 days
* Viscosity (mixed): 500 à 600 mPa.s
* Shore hardness: D 50 to 55 (ISO 868, DIN 53505)
* Thermal conductivity: 0,3 W/mK
* Application temperatures: - 20 to +130 °C


The [polyurethane resin UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) made by Electrolube should work too.

For each tubing 15 g of resin should be sufficient.


<img src="../docs/dnms/dnms-noise-measuring-microphone-inside-tube.png" style="display:block; margin-top: 3em"/>
When the resin has hardened remove the tape. Your microphone unit is ready.



### DNMS Housing

Depending on the PCBs you have chosen, there are two kinds of housing.


##### Housing 1

When the Teensy (DNMS) and the NodeMCU (standalone or on PCB) are separated : DNMS - T3.6 V1.2 / DNMS - T4 V1.2 + AIRROHR V1.2

You need a piece of 25 mm diameter tubing (for example tubing for electrical applications), a connector, a 90° bow and a M25 IP68 cable gland.

<img src="../docs/dnms/dnms-noise-measuring-microphone-inside-tube.png" style="width:40%; margin-top: 3em"/>

The tube itself should be 160 mm long. The DNMS looks place in. The microphone housing is maintained by the cable gland.

The bow prevents water and humidity to enter the housing while letting the cable pass.

<img src="../docs/dnms/dnms-noise-measuring-housing.png" style="margin-top: 3em"/>


The DNMS is connected to the second PCB by a RJ12 cable. If this cable is longer than 250 mm, you must use an I²C extension.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin-top: 3em"/>

After everything is well connected, the parts are glued together.

Result:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.png" style="margin-top: 3em"/>

The PCB carrying the NodeMCU can be put in any kind of electrical box.


##### Housing 2

When the Teensy and the NodeMCU are on the same PCB: DNMS - T3.6+NodeMCU V1.0 / DNMS - T4+NodeMCU V1.2

The PCB is 36 mm wide. PVC pipes for sanitary application are used.
The size DN40 fits the noise sensor alone.
The size DN50 fits the noise sensor combined with a fine dust sensor and a a thermometer/barometer/hygrometer BME280.
Beyond these sized a resonance effect can appear and influences the measurements.

<img src="../docs/dnms/dnms-noise-measuring-and-particulate-matter-sensor-kit-sps030.png" style="margin-top: 3em"/>

##### The housing is made of four parts:
* a 150 mm or 200 mm long piece of DN40 or DN50 pipe
* a DN40 or DN50 67° or 87° bow
* a DN40 or DN50 plug
* a M20 IP68 cable gland

<img src="../docs/dnms/dnms-noise-measuring-housing-dn40-vs-dn50.png" style="margin: 1em 0"/>

Most of the parts should have some build in gaskets. You should be able to assemble almost everything together without glue. The plug has to be perforated in order to glue the cable gland on. This gland will sustain the microphone.

Put the SPS30 fine dust sensor and the BME280 in the bow. The DNMS PCB is in the straight pipe.

<img src="../docs/dnms/dnms-noise-measuring-housing-teensy-and-sps30.png" style="margin: 1em 0"/>

Use some double-sided tape and/or some cable clamps to secure the parts positions.

<img src="../docs/dnms/dnms-particulate-matter-sps030-inside-housing.png" style="display: block; margin-top: 2em; margin-bottom: 2em"/>


<br>
Result:

<img src="../docs/dnms/dnms-noise-measuring-dn50-result.png" style="display: block"/>


### Weather protection

The housings themselves should be waterproof. Only the microphone inlet could be sensitive. TDK, the manufacturer has published some [recommendations for sealing InvenSense bottom-port MEMS microphones from dust and liquid ingress](https://invensense.tdk.com/download-pdf/an-1124-recommendations-for-sealing-invensense-bottom-port-mems-microphones-from-dust-and-liquid-ingress/) but the components are difficult to find and were not tested.

You can add a skew cut piece of tube on the microphone tubing. 5 mm are enough to avoid to change the measurement of the sensitive microphone (the calibrators reported a 1 dB decrease in this case).

<img src="../docs/dnms/dnms-noise-measuring-microphone-protection.jpg" style="width:45%; margin-top: 3em; margin-right: 3px"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-bonette.jpg" style="width:45%; margin-top: 3em"/>

Actually two of the nine prototypes has stood storm and rain for months.

A windscreen could be necessary for heavy exposure to wind.

