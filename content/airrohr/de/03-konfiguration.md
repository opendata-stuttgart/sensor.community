---
title: Konfiguration
---
### Abrufen der ID
1. Schließe die Station mit einem USB-Kabel an, um den Sensor mit Strom zu versorgen.

2. Die Station versucht, eine Verbindung mit dem konfigurierten WiFi herzustellen. Falls dies nicht funktioniert, öffnet der Sensor einen Access Point mit dem Namen `Particulate Matter ID` , `Feinstaubsensor-ID` oder `airRohr-ID`. Die ID ist die **chipID** (zum Beispiel 13597771). **Bitte notiere dir diese Nummer, da diese für die Registrierung benötigt wird.**

3. Verbinde dich mit dem erstellten Adhoc-WiFi. Warte, bis die Verbindung hergestellt ist.<br>*Android*: Wenn die Verbindung sofort abbricht, schau unter 'Verbindungen -> WiFi -> Erweitert' und deaktiviere die Option 'Smart Network Switch'.

4. Öffne deinen Browser und gebe [http://192.168.4.1/](http://192.168.4.1/) ein.

> ⚠️ **Bitte beachten** Es kann einige Versuche dauern, bis die NodeMCU eine Verbindung mit deinem WLAN herstellen kann. Bitte werde nicht ungeduldig und versuche es, bis es funktioniert. Der Sensor kann auch über ein Smartphone konfiguriert werden. Wenn die Konfiguration des Sensors funktioniert hat, ist die Konfigurationsseite unter dieser IP 192.168.4.1 nicht mehr zugänglich.

### Konfiguriere die Station
1. Gib unter 'Konfigurieren' deine SSID (Name deines WiFi-Heimnetzwerks) und den Netzwerksicherheitsschlüssel (unter Windows) bzw. das WiFi-Passwort ein.

2. Für Feinstaubsensoren (SDS011) sind gemäß dieser Anleitung keine weiteren Änderungen erforderlich

3. Nachdem du auf Speichern gedrückt hast, startet der Sensor neu und ist auf diese Weise nicht mehr erreichbar, wenn er sich mit dem WLAN verbindet.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Testen Sie die Station
Wenn außer der Eingabe der Daten des WiFi-Netzwerks keine Änderungen vorgenommen wurden, kann der Sensor nach etwa 10 Minuten auf den folgenden Seiten "getestet" werden. Auf diesen Seiten muss nach der chipID gesucht werden (im obigen Beispiel die 13597771).

 * [Sensordaten](https://www.madavi.de/sensor/graph.php) 
 * [WLAN-Signal](https://www.madavi.de/sensor/signal.php) 
        

