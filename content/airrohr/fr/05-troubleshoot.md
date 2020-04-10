---
title: Problèmes & difficultés
---

### Problèmes de transmission ?
Entrez l'adresse suivante dans votre navigateur en remplçant l'ID et le type de capteur :
`https://www.madavi.de/sensor/graph.php?sensor=esp8266-[ID]-[sensor type]`

L'[ID] peut également être recherchée sur la page [https://www.madavi.de/sensor/graph.php](https://www.madavi.de/sensor/graph.php)

* Le détecteur a-t-il été enregistré sur le site [https://devices.sensor.community/](https://devices.sensor.community/) et est-il visible sur la carte ?
    * Le signal Wifi était-il faible dernièrement ?
        Ici, un server qui enregistre le niveau de signal Wifi : `https://www.madavi.de/sensor/signal.php?sensor=esp8266-[ID]`

### Problèmes de câble USB ?
* Vérifiez la prise d'alimentation USB et le câble.
* Redémarrez (débranchez l'alimentation et/ou le câble).
* Le Wifi est-il bien configuré ? (La station se connecte-t-elle au réseau ?) Dans le cas contraire :
    * Le détecteur crée-t-il un point d'accès (dans les 2 à 7 minutes après le redémarrage) ?
    * Cherchez un réseau Wifi `airrohr-[ID]`. Patience, il peut apparaître une à deux minutes après le branchement de la station.
* Vérifiez sur votre box que la station est connectée au réseau Wifi et noter l'adresse IP `192.168.1._ _ _`.
    * Utilisez le bouton "Rechercher" de l'[installateur Airrohr](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
    * Si oui: connectez-vous au détecteur avec l'IP `192.168.1._ _ _` à l'aide d'un navigateur. Vous devez accéderÀ l'interface de configuration.
    * Si non: l'ESP a un problème, par exemple, une alimentation insuffisante, une boucle de redémarrage...
* Connectez la prise USB à un ordinateur pour lire les sorties de la console de deboguage. 
    * Consultez les textes s'affichant sur le terminal du port série de la station (Configuration : 9600 bauds, 8N1)
        * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: ls, screen, minicom, ...
        * Il faut peut-être installer les pilotes usb2serial nécessaires, voir [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)                                                                                                                                                                                                                                                                                                                      
    * There you should be able to see what the sensor is doing (boot messages, WLAN connection or AP, measurement - only after 3 minutes)

### Problèmes électroniques ?
* Retirez la station du boitier de protection (coudes PVC).
* Débranchez et rebranchez l'alimentation USB/la prise USB
    * Voyez-vous un court flash sur la platine ?
    * SDS011: Une diode rouge s'allume-t-elle ? Le ventilateur démarre-t-il ?
    * Vérifiez tous les câbles de connexion.
