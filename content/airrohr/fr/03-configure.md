---
title: Configuration
---
### Récupérer l'ID
1. Branchez le cable sur une prise USB afin d'alimenter le capteur.

2. La station essaie de se connecter à un point d'accès Wifi. Avant configuration, aucune connection ne doit être possible et le détecteur va produire lui-même un point d'accès avec le nom `Particulate Matter-ID` , `Feinstaubsensor-ID` ou `airRohr-ID`. Le numéro ID est l'**identifiant de la puce** (par exemple 13597771). **Veuillez noter ce numéro. Vous en aurez besoin pour l'enregistrement de la station**.

3. Connectez-vous à ce point d'accès. Attendez que la connexion soit bien établie.<br>*Android*: Si l'appareil se déconnecte immédiatement, vous devez désactiver l'option 'Réseau intelligent' sous 'WiFi -> Plus'.

4. Ouvrez un navigateur et tapez l'adresse [http://192.168.4.1/](http://192.168.4.1/)

### Configure the station
1. Sous 'Configuration', tapez le SSID (le nom de votre réseau Wifi) et le mot de passe.

2. Pour les détecteurs de particules fines (avec capteur SDS011) décrits dans les présentes instructions, aucune autre configuration n'est nécessaire

3. Cliquez sur le bouton 'Enregistrer', la station va redémmarer et se connecter à votre réseau. Elle ne sera plus directement accessible. Vous devriez toutefois pouvoir utiliser une adresse de la forme `airRohr-ID.local` (cf. ci dessus) ou bien passer par une adresse IP locale de la forme `192.168.1.<nombre>` (peut varier selon les fournisseurs d'accès) à récuperer dans la liste des appareils connectés à votre box internet. Le firmware flasher permet également de se connecter aux capteurs présents sur le réseau local (Onglet "Rechercher" puis double-clique). 

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

> ⚠️ **Remarque**  La connexion au réseau local peut prendre un peu de temps. Ne soyez pas impatient et essayez plusieurs fois si besoin. La station peut aussi être configurée à l'aide d'un smartphone. Si la configuration a fonctionné, la page décrite ci-dessus ne sera plus accessible directement avec l'adresse IP 192.168.4.1.

### Tester la station
Si aucun changement particulier n'a été effectué (autre que la saisie du réseau Wifi) lors de la configuration, vous devriez pouvoir consulter les pages test suivantes après environ 10 minutes. Recherchez simplement l'ID de votre station (par exemple 13597771).

 * [Sensordaten](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=) 
 * [WLAN-Signal](https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=) 

Ajoutez l'ID de votre station à l'extrémité de l'adresse URL ou bien cherchez-la dans la liste déroulante.
 
