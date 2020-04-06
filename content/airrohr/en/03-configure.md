---
title: Configure
---
#### Get the ID
1. Connect the station with the power cable

2. The station tries to connect to the configured WLAN access point. If this does not work, the sensor opens an access point with the name Particulate matter or airRohr. The ID referes to the **ChipID** (for example 13597771). **Please note that number down, as you need it for the registration**

3. The station tries to connect to the configured WLAN access point (default is "Freifunk-Disabled"). If this does not work, the sensor opens an access point with the name `Feinstaubsensor-ID` or `airRohr-ID`. THe ID is the **ChipID** (for example 13597771). **Please note that number down, as you need it for the registration**

4. Connect to this just created access point. Wait briefly until the connection is established. *Android*: If the connection is immediately disconnected, you may have to deactivate the option 'Smart network switch' under 'Connections WLAN Advanced'.

5. Open your browser and type in [http://192.168.4.1/](http://192.168.4.1/).
<br>

#### Configure the station

> ⚠️ **Please note**  It may take a few tries for the NodeMCU to connect to the home WLAN. Please do not get impatient and try until it works. The chip can also be configured via a smartphone. If the configuration of the sensor has worked, the configuration page is no longer accessible under this IP 192.168.4.1

1. Under 'Configure' enter the SSID (name of the home WLAN) and the network security key (under Windows) or the WLAN password of the home WLAN, save

2. For fine dust sensors according to this manual, no further changes are necessary

3. After saving, the sensor is restarted and is no longer accessible this way when it connects to the WLAN

<br>

![](../docs/airrohr_config_initial.png)
<br>

#### Test the station
If no changes have been made other than entering the WLAN data, the sensor can be 'tested' on the following pages after about 10 minutes. On these pages you have to search for the ChipID (in the example above the 13597771).

 * [Sensordaten](www.madavi.de/sensor/graph.php) 
 * [WLAN-Signal](www.madavi.de/sensor/signal.php) 
        


 
