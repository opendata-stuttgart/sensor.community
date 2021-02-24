---
title: Configure
---
### Get the unique station ID
1. Connect the station to a USB cable to power up the sensor.

2. The station will attempt to connect to the configured WiFi network. For a new set up, the connection will fail and the station will create a WiFi network with the name `Particulate Matter ID` , `Feinstaubsensor-ID` or `airRohr-ID`. The ID is the **ChipID** (for example 13597771). **Please note this number down, as you will need it for the registration**

3. Connect to the WiFi network created by the station on your computer or smartphone. Wait until the connection is established.<br>*Android*: If the connection disconnects immediately, you may have to deactivate the option 'Smart network switch' under 'Connections -> WiFi -> Advanced'.

4. Open your browser and type in [http://192.168.4.1/](http://192.168.4.1/).

> ⚠️ **Please note**  It may take a few tries for the NodeMCU to connect to the home WiFi network. Please be patient and try the steps several times until it works. If the configuration of the sensor has worked, the station WiFi network will not available and the configuration page will no longer accessible under this IP 192.168.4.1

### Configure the station
1. In the 'Configuration' page enter your SSID (name of your home WiFi network), the network security key (under Windows) or WiFi password.

2. If you are using the recommended fine dust sensor (SDS011), no further configuration changes are necessary.

3. Click 'Save configuration and restart' button. The station will restart and will no longer be accessible in this way when it connects to your home WiFi network.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>

<br>

### Verify the station is correctly configured
If you made no other changes in the previous step other than WiFi network configuration, the sensor will now start recording and uploading the data. You can verify that everyting is working correctly after about 10 minutes by navigating to the following pages. On these pages search for the ChipID (in the example above the 13597771).

 * [Sensor data](https://www.madavi.de/sensor/graph.php)
 * [WiFi signal data](https://www.madavi.de/sensor/signal.php)
