---
title: Assemble
---

> ⚠️ **IMPORTANT NOTE**
Before assembling install the firmware!
See import [firmware section](docs#Install_the_firmware).

### NodeMCU v3
Note: Our instructions refer to version 3 of the NodeMCU. This can be recognized by the connections VU and G (see drawing). The versions have RSV at these ports. In these versions, the VIN ports can be used instead of VU and GND instead of G next to the MicroUSB port.

<img src="../docs/airrohr-wiring-sds011-bme280.jpg" style="width:50%;"/>
<small>Copyright: roman-minyaylov, MIT License</small>

<img src="../docs/nodemcu-v3-bme280.jpeg" style="margin-top: 5rem"/>
When you done, this is how it should look like.


#### Wire the SDS011
Pins are numbered from RIGHT to LEFT, make sure when connecting that the cables are sitting on the pins, as most Dupont cables also fit inbetween the pins.
```bash
SDS011 Pin 1 -> Pin D1 / GPIO5
SDS011 Pin 2 -> Pin D2 / GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> unused
SDS011 Pin 5 -> VU (NodeMCU v3) / VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> unused
SDS011 Pin 7 -> unused
```

#### Solder together BME280
<img src="../docs/solder-a-bme-280.jpeg"/>

Connect the pin header with the BME280 board. Solder it from the backside. The gaps between the pins are very small so be patient and careful.  

The trick is to put the soldering iron tip to the pin, warm it up a little, and then lightly apply the solder.  

<img src="../docs/solder-bme-280.jpeg"/>


#### Wire the BME280
Pins are numbered from LEFT to RIGHT.
```bash
VIN -> Pin 3V3 (3.3V)
GND->  GND/G
SDA -> PIN D3
SCL -> Pin D4
```

### Tie everything together
<img src="../docs/tie-air-quality-sensor- together.jpeg"/>

* Use a cable tie to link the NodeMCU (ESP8266) and the SDS011 sensor so that the Wifi antenna points away from the sensor
* connect the flexible tube to the SDS011 sensor
* Use another cable tie to attach the BME280 temperature sensor to the tube

<img src="../docs/bme280-tied-to-tube.jpeg"/>

* Pass the USB cable through the tube. Mount the SDS011 so that the PCB of the SDS011 is facing to the top and the fan is facing to the bottom
* Push the parts into the tube so that the sensor is jammed in the tube

<img src="../docs/sds011-jammed-into-tube.jpeg"/>

* The USB cable with the BME280 should look out of the tube's end
* Push the other pipe onto the first one. Make sure that no cables are pinched.
* Position the temperature sensor on the flexible hose so that it on the edge of the tube
* Cut off the flexible hose at the end of the pipe
* Optional you can cover the open ends of the tube with a fine mesh, that the air can circulate but insects similar stay outside
* Position the temperature sensor at the end, so it still sits inside the pipe. You can cut the flexible tube.
 
<img src="../docs/position-bme280.jpeg"/>
