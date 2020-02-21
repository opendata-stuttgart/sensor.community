---
title: Configure the particulare matter sensor
---
### Configure

Connect the station with the power cable

The station tries to connect to the configured WLAN access point. If this does not work, the sensor opens an access point with the name Particulate matter or airRohr. The ID referes to the **ChipID** (in the example below the 13597771). Please note that number down, as we need it later 

The station tries to connect to the configured WLAN access point (default is "Freifunk-Disabled"). If this does not work, the sensor opens an access point with the name Feinstaubsensor-ID or airRohr-ID. Where ID is the **ChipID** (decimal, in the example below 13597771).
Note down ID, it is needed for the registration of the sensor!

Connect to this just created access point. Wait briefly until the connection is established.

Android: If the connection is immediately disconnected, you may have to deactivate the option 'Smart network switch' under 'Connections WLAN Advanced'.

Open your browser and type in http://192.168.4.1/. 

> ⚠️ **Please note**  It may take a few tries for the NodeMCU to connect to the home WLAN. Please do not get impatient and try until it works. The chip can also be configured via a smartphone. If the configuration of the sensor has worked, the configuration page is no longer accessible under this IP 192.168.4.1

Under 'Configure' enter the SSID (name of the home WLAN) and the network security key (under Windows) or the WLAN password of the home WLAN, save

For fine dust sensors according to this manual, no further changes are necessary

After saving, the sensor is restarted and is no longer accessible this way when it connects to the WLAN

If no changes have been made other than entering the WLAN data, the sensor can be 'tested' on the following pages after about 10 minutes. On these pages you have to search for the ChipID (in the example above the 13597771).

 Sensordaten: www.madavi.de/sensor/graph.php WLAN-Signal: www.madavi.de/sensor/signal.php
 
![](/airrohr_config_initial.png)
 
### Last steps

Unter [devices.sensor.community](https://devices.sensor.community/) können Sensoren durch die Benutzer selbst eingetragen werden. Damit der Sensor Teil des Netzwerkes wird, brauchen wir noch einige Angaben.
Registriere dich, falls noch nicht geschehen, und logge dich ein, dann füge einen Sensor hinzu und fülle das Formular aus.

deine ID des ESP8266 (NodeMCU) –> kommt als Nummer im WLAN (Feinstaubsensor-…) oder auf der Konfigurationsseite oben

deine Emailadresse (wird nicht veröffentlicht)

deine Adresse: Strasse mit Hausnummer, PLZ und Ort und die Standortkoordinaten (werden nur gerundet herausgegeben)

die Umgebung der Station – z. B. Höhe über Grund, Strassenseite, hohes Verkehrsaufkommen, freies Feld oder ähnliches

Startseite -> (Login) - Sensoren -> Sensor registrieren
