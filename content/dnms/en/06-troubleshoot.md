---
title: Troubleshoot
---

### Transmitting problems?
Enter the following in the browser with your own data:
`https://www.madavi.de/sensor/graph.php?sensor=esp8266-[ID]-[sensor type]`

The [ID] can also be searched for in the text on the page [https://www.madavi.de/sensor/graph.php](https://www.madavi.de/sensor/graph.php)

* Is the sensor registered via [https://devices.sensor.community/](https://devices.sensor.community/) and is the sensor visible on the map?
    * Was the WLAN signal level weak in the past?
        here is the signal log server-side: `https://www.madavi.de/sensor/signal.php?sensor=esp8266-[ID]`
        


### USB cable problems?
* Check power supply: USB cable
* Reboot (disconnect power supply, e.g. pull USB plug)
* Is the WLAN Config OK (the sensor connects to the configured WLAN) If not:
    * does the sensor open an AP (in the first 2-7 minutes after a reboot)?
    * Look for `airrohr-[ID]` WLAN network. Patience, it may take 1-2 minutes after boot.
* Check on your own router if the sensor is logged into the network, then remember the IP 
    * alternatively use "Discovery" in the [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
    * If yes: connect to the sensor via IP with a browser `http://[ip-of-the-sensor]/` , the interface should appear 
    * If no: the ESP has problems, e.g. power supply insufficient, reboot loop or similar
* Connect USB to a computer and view the log 
    * Track text on serial interface with serial terminal program (Settings: baud 9600, 8N1)
        * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, ...
        * possibly suitable usb2serial drivers are still necessary, see [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)                                                                                                                                                                                                                                                                                                                      
    * There you should be able to see what the sensor is doing (boot messages, WLAN connection or AP, measurement - only after 3 minutes)

### Electronics problems?
* Remove sensor electronics from the housing and observe
* Check/replace power supply again
    * does ESP flash shortly after reboot?
    * Teensy: red LED flashing after reboot?
    * check/replace the cables to the sensors again
