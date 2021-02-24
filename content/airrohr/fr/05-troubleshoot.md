---
title: Problèmes & difficultés
---

### Problèmes de transmission ?

Entrez l'adresse suivante dans votre navigateur en remplaçant l'`ID` et le type de capteur :
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`


L'`ID` peut également être recherchée dans la liste déroulante sur la page.

* Le détecteur a-t-il été enregistré sur le site [https://devices.sensor.community/](https://devices.sensor.community/) et est-il visible sur la carte ?
* Le signal Wifi était-il faible dernièrement ? 
Ici, un server qui enregistre le niveau de signal Wifi : 

`https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`
<br>
Remplacez `ID` par l'identifiant de la station (ID de la platine NodeMCU).

### Problèmes de câble USB ?
* Vérifiez la prise d'alimentation USB et le câble.
* Redémarrez (débranchez l'alimentation et/ou le câble).
* Le Wifi est-il bien configuré ? (La station se connecte-t-elle au réseau ?) Dans le cas contraire :
    * Le détecteur crée-t-il un point d'accès ?
    * Cherchez un réseau Wifi `airrohr-[ID]`. Patience, il peut apparaître une à cinq minutes après le branchement de la station.
* Vérifiez sur votre box que la station est connectée au réseau Wifi (cf. la liste des appareils connectés) et notez l'adresse IP `192.168.1.<nombre>` (peut varier selon les fournisseurs d'accès).
    * Si oui: connectez-vous au détecteur avec l'IP `192.168.1.<nombre>` à l'aide d'un navigateur. Vous devez accéder à l'interface de configuration.
    * Si non: l'ESP a un problème, par exemple, une alimentation insuffisante, une boucle de redémarrage...
    * Vous pouvez aussi utilisez le bouton "Rechercher" de l'[installateur Airrohr](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/), les détecteurs connectés au réseau local vont s'afficher. Double-cliquez sur une station pour atteindre la page de configuration.
* Connectez la prise USB à un ordinateur pour lire les sorties de la console de deboguage. 
    * Consultez les textes s'affichant sur le terminal du port série de la station (Configuration : 9600 bauds, 8N1).
        * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: ls, screen, minicom...
        * Il faut peut-être installer les pilotes usb2serial nécessaires, voir [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen).
        * Vous pouvez utilisez le moniteur d'activité de l'IDE Arduino.
    * Vous devriez voir dans le terminal ce que le capteur fait (messages de démarrages, connexion au réseau WiFi ou création d'un point d'accès, mesures - après 3 minutes).

### Problèmes électroniques ?
* Retirez la station du boitier de protection (coudes PVC).
* Débranchez et rebranchez l'alimentation USB/la prise USB
    * Voyez-vous un court flash sur la platine ?
    * SDS011: Une diode rouge s'allume-t-elle ? Le ventilateur démarre-t-il ?
    * Vérifiez tous les câbles de connexion.
