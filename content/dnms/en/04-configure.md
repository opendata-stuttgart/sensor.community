---
title: Configure
---
### Get the ID
1. Connect the station with an USB cable to power up the sensor

2. The station tries to connect to the configured WiFi access point. If this does not work, the sensor opens an access point with the name `Particulate Matter ID` , `Feinstaubsensor-ID` or `airRohr-ID`. The ID is the **ChipID** (for example 13597771). **Please note that number down, as you need it for the registration**

3. Connect to the created access point. Wait until the connection is established.<br>*Android*: If the connection disconnects immediately, you may have to deactivate the option 'Smart network switch' under 'Connections -> WiFi -> Advanced'

4. Open your browser and type in [http://192.168.4.1/](http://192.168.4.1/)

> ⚠️ **Please note**  It may take a few tries for the NodeMCU to connect to the home WiFi network. Please do not get impatient and try until it works. The sensor can also be configured via a smartphone. If the configuration of the sensor has worked, the configuration page is no longer accessible under this IP 192.168.4.1

### Configure the station
1. Under 'Configure' enter SSID (name of your home WiFi network), the network security key (under Windows) or WiFi password.

2. For noise sensors (DNMS) according to this manual, no further changes are necessary

3. After hitting save, the sensor will restart and is no longer accessible this way when it connects to the WLAN.

<br>

![](../docs/dnms/airrohr_config_initial.png)
<br>

### Test the station
If no changes have been made other than entering the WiFi network data, the sensor can be 'tested' on the following pages after about 10 minutes. On these pages you have to search for the ChipID (in the example above the 13597771).

 * [Sensordaten](www.madavi.de/sensor/graph.php) 
 * [WLAN-Signal](www.madavi.de/sensor/signal.php) 
        


 
