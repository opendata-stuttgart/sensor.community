---
title: Konfiguration
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
                Noise befindet sich in der Beta-Phase. Sende Fragen an</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>

### Abrufen der ID
1. Schließe die Station mit einem USB-Kabel an, um den Sensor mit Strom zu versorgen.

2. Die Station versucht, eine Verbindung mit dem konfigurierten WiFi herzustellen. Falls dies nicht funktioniert, öffnet der Sensor einen Access Point mit dem Namen `Particulate Matter ID` , `Feinstaubsensor-ID` oder `airRohr-ID`. Die ID ist die **chipID** (zum Beispiel 13597771). **Bitte notiere dir diese Nummer, da diese für die Registrierung benötigt wird.**

3. Verbinde dich mit dem erstellten Adhoc-WiFi. Warte, bis die Verbindung hergestellt ist.<br>*Android*: Wenn die Verbindung sofort abbricht, schau unter 'Verbindungen -> WiFi -> Erweitert' und deaktiviere die Option 'Smart Network Switch'.

4. Öffne deinen Browser und gebe [http://192.168.4.1/](http://192.168.4.1/) ein.

> ⚠️ **Bitte beachten** Es kann einige Versuche dauern, bis die NodeMCU eine Verbindung mit deinem WLAN herstellen kann. Bitte werde nicht ungeduldig und versuche es, bis es funktioniert. Der Sensor kann auch über ein Smartphone konfiguriert werden. Wenn die Konfiguration des Sensors funktioniert hat, ist die Konfigurationsseite unter dieser IP 192.168.4.1 nicht mehr zugänglich.

### Station konfigurieren
1. Gib unter 'Konfigurieren' deine SSID (Name deines WiFi-Heimnetzwerks) und den Netzwerksicherheitsschlüssel (unter Windows) bzw. das WiFi-Passwort ein.

2. Für Lärmsensoren (DNMS) sind gemäß dieser Anleitung keine weiteren Änderungen erforderlich

3. Nachdem du auf Speichern gedrückt hast, startet der Sensor neu und ist auf diese Weise nicht mehr erreichbar, wenn er sich mit dem WLAN verbindet.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Station testen
Wenn außer der Eingabe der Daten des WiFi-Netzwerks keine Änderungen vorgenommen wurden, kann der Sensor nach etwa 10 Minuten auf den folgenden Seiten "getestet" werden. Auf diesen Seiten muss nach der chipID gesucht werden (im obigen Beispiel die 13597771).

* [Sensordaten](https://www.madavi.de/sensor/graph.php)
* [WLAN-Signal](https://www.madavi.de/sensor/signal.php) 
        


 
