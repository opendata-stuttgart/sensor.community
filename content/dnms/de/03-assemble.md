---
title: Assemble
---
> ⚠️ **IMPORTANT NOTE**
Before assembling install the firmware!
See __firmware flasher__ section.


### Microphone unit

The microphone unit is based on Pesky Products breakout board with a MEMS microphone ICS-43434. You can fin such board at the [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/). 

<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>


##### Housing for the microphone unit
The housing is made with a .500" (12.7mm) polystyrene tubing. This diameter permits to plug directly most of the calibrators on the unit.

The prototype was developed with the [Evergreen No. 236 tubing](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

<img src="../docs/dnms/dnms-noise-measuring-microphone-anschluesse.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>
<br>
The breakout board has to be adapted to the diameter of the tubing with a file. Use some tape to protect the microphone inlet.
<br>

<img src="../docs/dnms/dnms-noise-measuring-microphone-protection.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection-front.jpg" style="width:41%; margin: 2em 0" loading="lazy"/>

Then solder the six silicone cables. Note which pin the cable is connected with!

<img src="../docs/dnms/dnms-noise-measuring-microphone-with-cable.jpg" style="display: block; width:40%; margin: 2em 0" loading="lazy"/>
Cut a 115 mm long piece of tubing.
<br>
Stick the microphone board on some crossed tape. Put the cables in the tubing and fasten the board at the extremity of the tubing.
<br>
<img src="../docs/dnms/dnms-noise-measuring-microphone-preparing-housing.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-housing.jpg" style="width:42%; margin: 2em 0" loading="lazy"/>

Make the extremity of the tube tight with the tape.

<img src="../docs/dnms/dnms-noise-measuring-microphone-tube.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>

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

<img src="../docs/dnms/dnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy"/>

When the resin has hardened remove the tape. Your microphone unit is ready.



### DNMS Housing

When the Teensy (DNMS) and the NodeMCU (standalone or on PCB) are separated: DNMS and airRohr

You need a piece of 25 mm diameter tubing (for example tubing for electrical applications), a connector, a 90° bow and a M25 IP68 cable gland.

The tube itself should be 160 mm long. The DNMS looks place in. The microphone housing is maintained by the cable gland.

The bow prevents water and humidity to enter the housing while letting the cable pass.

<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

The DNMS is connected to the second PCB by a RJ12 cable. If this cable is longer than 250 mm, you must use an I²C extension.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

After everything is well connected, the parts are glued together.

Result:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

The PCB carrying the NodeMCU can be put in any kind of electrical box.


### Weather protection

The housings themselves should be waterproof. Only the microphone inlet could be sensitive. TDK, the manufacturer has published some recommendations for sealing InvenSense bottom-port MEMS microphones from dust and liquid ingress but the components are difficult to find and were not tested.

It is absolutely necessary to install a weather protection in the form of a foam cover. If necessary, even a household sponge is sufficient. There are several reasons for this:
* it protects against wind noise (which can increase the decibels measurements)
* it protects against direct water leakage on the microphone. To avoid condensation on the microphone pull back the cover a beat after installing it in order to create a small cavity.
* it protects against solar radiation. Intense sunlight can influence the measured values and reduce the life of the microphone.

<img src="../docs/dnms/dnms-noise-measuring-microphone-bonette.jpg" style="width:45%; margin: 3em 0" loading="lazy"/>

Those foam covers are normaly sold as ‘covers for measurement microfons’. But they are expensive. You can also take a normal foam ball and cut a hole with the scissors.

If you need more ones [this source](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2) can be helpful.

### Location of the microphone 

It is important to place the microphone in an area as "free" as possible, this means in a location with as less sound reflecting surfaces as possible. The distance to reflective surfaces should be as great as possible. Try not to mount the microphone directly on the wall of a house, because walls reflect sounds strongly.  The distance to the wall should ideally be more than 1 m. Of course this is not always easy to realize. 

With a distance of about 50 cm from the tip of the microphone to the wall, the induced error is still reasonable. Good places are for example balconies or terrace railings, or a small mast on the roof. 

You can also try to place the microphone directly on the corner of the house for the reflections to partially cancel each other.

A free-standing mast of at least 1 m height could also be a solution but then you have to watch out for reflections on the ground. That depends on the floor covering, of course.

It is also important to always be aware that we measure ambient noise.  We can only make an approximation of the noise emission of sources such as roads or railways. 

However, the closer you get to the source, the more accurate the reference to the source becomes. Upgrades of the firmware should then be able to get preceise measurements for an identified type of noise.

<img src="../docs/dnms/measuring-sensor-on-balcony.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<img src="../docs/dnms/measuring-sensor-on-terasse.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<br>
<img src="../docs/dnms/measuring-sensor-on-wall.jpg" style="width:99%; margin-bottom: 2em;" loading="lazy"/>
