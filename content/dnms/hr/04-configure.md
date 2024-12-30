---
title: Configure
---

  <div class="max-w-screen-xl mx-auto pb-5">
      <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
      <div class="flex items-center">
            <span class="p-2 rounded-lg bg-indigo-500">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </span>
        <div class="flex flex-wrap">
          <div class="flex-wrap flex">
            <p class="pt-1 text-indigo-700 font-medium">
                Noise is in beta. Send questions to</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>
    
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

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Test the station
If no changes have been made other than entering the WiFi network data, the sensor can be 'tested' on the following pages after about 10 minutes. On these pages you have to search for the ChipID (in the example above the 13597771).

 * [Sensordaten](www.madavi.de/sensor/graph.php) 
 * [WLAN-Signal](www.madavi.de/sensor/signal.php) 
        


 
