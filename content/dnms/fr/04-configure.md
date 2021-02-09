---
title: Configuration
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
                Le sonomètre est en version béta. Envoyez vos questions à</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>

### Récupérer l'ID
1. Branchez le cable sur une prise USB afin d'alimenter le capteur.

2. La station essaie de se connecter à un point d'accès Wifi. Avant configuration, aucune connection ne doit être possible et le détecteur va produire lui-même un point d'accès avec le nom `Particulate Matter-<ID>` , `Feinstaubsensor-<ID>` ou `airRohr-<ID>`. Le numéro ID est l'**identifiant de la puce** (par exemple 13597771). **Veuillez noter ce numéro. Vous en aurez besoin pour l'enregistrement de la station**.

3. Connectez-vous à ce point d'accès. Attendez que la connexion soit bien établie.<br>*Android*: Si l'appareil se déconnecte immédiatement, vous devez désactiver l'option 'Réseau intelligent' sous 'WiFi -> Plus'.

4. Ouvrez un navigateur et tapez l'adresse [http://192.168.4.1/](http://192.168.4.1/)

> ⚠️ **Remarque**   La connexion au réseau local peut prendre un peu de temps. Ne soyez pas impatient et essayez plusieurs fois si besoin. La station peut aussi être configurée à l'aide d'un smartphone. Si la configuration a fonctionné, la page décrite ci-dessus ne sera plus accessible directement avec l'adresse IP 192.168.4.1.

### Configurer la station
1. Sous 'Configuration', tapez le SSID (le nom de votre réseau Wifi) et le mot de passe.

2. Sélectionnez `DNMS` et, le cas échéant, les autres capteurs branchés sur votre station.

3. Pour les sonomètres (DNMS) décrits dans les présentes instructions, aucune autre configuration n'est nécessaire.

3. Cliquez sur le bouton 'Enregistrer', la station va redémmarer et se connecter à votre réseau. Elle ne sera plus directement accessible. Vous devriez toutefois pouvoir utiliser une adresse de la forme `airRohr-<ID>.local` (cf. ci dessus) ou bien passer par une adresse IP locale de la forme `192.168.1.<nombre>` (peut varier selon les fournisseurs d'accès) à récuperer dans la liste des appareils connectés à votre box internet. Le firmware flasher permet également de se connecter aux capteurs présents sur le réseau local (Onglet "Rechercher" puis double-clique). 
<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Tester la station
Si aucun changement particulier n'a été effectué (autre que la saisie du réseau Wifi) lors de la configuration, vous devriez pouvoir consulter les pages test suivantes après environ 10 minutes. Recherchez simplement l'ID de votre station (par exemple 13597771).

 * [Sensordaten](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=) 
 * [WLAN-Signal](https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=) 
        

Ajoutez l'ID de votre station à l'extrémité de l'adresse URL ou bien cherchez là dans laliste déroulante.

 
