---
title: Assemble
---

> ⚠️ **IMPORTANT NOTE**
Before assembling install the firmware!
See __firmware flasher__ section.

### NodeMCU (ESP8266) v3
Note: Our instructions refer to version 3 of the NodeMCU (ESP8266). This can be recognized by the connections VU and G (see drawing). 

<img src="../docs/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em"/>
<small>Copyright: roman-minyaylov, MIT License</small>


<img src="../docs/nodemcu-v3-bme280.jpeg" style="margin-top: 1em"/>

##### When you are done, this is how it should look like


### Wire the SDS011
Pins are numbered from RIGHT to LEFT, make sure when connecting the cables are sitting on the pins, as most Dupont cables also fit inbetween the pins.
```bash
SDS011 Pin 1 -> Pin D1 / GPIO5
SDS011 Pin 2 -> Pin D2 / GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> unused
SDS011 Pin 5 -> VU (NodeMCU (ESP8266) v3) / VIN (NodeMCU (ESP8266) v1,v2)
SDS011 Pin 6 -> unused
SDS011 Pin 7 -> unused
```

### Solder together BME280
<img src="../docs/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center"/>
<img src="../docs/solder-bme-280.jpeg" style="width:49%;">

Connect the pin header with the BME280 board. Solder it from the backside. The gaps between the pins are very small so be patient and careful.  

The trick is to put the soldering iron tip to the pin, warm it up a little, and then lightly apply the solder.  



### Wire the BME280
Pins are numbered from LEFT to RIGHT.
```bash
VIN -> Pin 3V3 (3.3V)
GND->  GND/G
SDA -> PIN D3
SCL -> Pin D4
```

### Tie everything together

 ##### Tie NodeMCU (ESP8266) and SDS011 together
<img src="../docs/tie-air-quality-sensor-together.jpeg"/>
Use a cable tie to link the NodeMCU (ESP8266) and the SDS011 sensor so that the Wifi antenna points away from the sensor

 ##### Connect flexible tube
 <img src="../docs/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em"/>
 <img src="../docs/bme280-tied-to-tube.jpeg" style="width:49%;">
 
* connect the flexible tube to the SDS011 sensor
* Use another cable tie to attach the BME280 temperature sensor to the tube
* Pass the USB cable through the tube. Mount the SDS011 with the NodeMCU facing to the top and the fan facing to the bottom

 ##### Push in sensor into the pipe
* Push the parts into the tube, so it's jammed inside
* USB cable, flexible tube and BME280 should look out of the tube's end
* Push the other pipe onto the first one.

<img src="../docs/sds011-jammed-into-tube.jpeg"/>

 ##### Finishing
* Position the temperature sensor on the flexible tube, so that it's on the edge of the pipe.
* Cut off the flexible tube at the end of the pipe
* Optional: you can cover the open ends of the tube with a fine mesh. So air can circulate but insects stay outside
 
<img src="../docs/position-bme280.jpeg"/>
