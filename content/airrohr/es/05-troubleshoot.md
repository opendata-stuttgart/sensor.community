---
title: Troubleshoot
---

### ¿Transmite de manera errónea?
Ingrese lo siguiente en el navegador con sus propios datos:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

[ID] también se puede buscar en el campo de entrada en la esquina superior izquierda de la página: [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1)

* ¿Está el sensor registrado en [https://devices.sensor.community/](https://devices.sensor.community/) y es el sensor visible en el mapa?
* ¿Ha estado la señal WLAN en un nivel bajo en el pasado?
    Aquí está el servidor de registro de la señal: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`

### ¿Problemas con el cable USB?
* Verifique la fuente de alimentación: cable USB 
* Reiniciar (desconecte la fuente de alimentación, por ejemplo, tire del enchufe USB)
* ¿Está bien configurada la red WLAN? (el sensor se conecta a la WLAN configurada). De lo contrario:
    * ¿El sensor abre un AP (en los primeros 2-7 minutos después de un reinicio)?
    * Busca la red WLAN “airrohr-[ID]”. Paciencia, puede tardar 1-2 minutos antes del reinicio.
* Verifique en su propio rooter si el sensor está conectado a la red, luego recuerde la IP
* Comprueba en tu propio router si el sensor está conectado a la red, entonces recuerda la IP 
    * De forma alternativa, usa “Discovery” en el [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
    * Si es así: conéctalo al sensor mediante la IP con un navegador “http://[ip-of-the-sensor]/” , la interfaz debería aparecer
    * Si no es así: el ESP tiene problemas. Puede ser un problema, por ejemplo de insuficiencia en el suministrador de energía. Reinicia.
* Conecta el USB a un ordenador y comprueba el registro 
    * Rastrea el texto en la interfaz serial con el programa de terminal serial (Configuración: baudios 9600, 8N1)
        * Linux: pantalla, minicom, cutecom; Windows: Tera Term; MacOS: pantalla, minicom, ...
        * Posiblemente sean necesarios los drivers usb2serial, echa un vistazo a [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)       
    * Ahí deberías poder ver qué está haciendo el sensor (mensajes de arranque, conexión WLAN o AP, medición, solo después de 3 minutos)

### ¿Problemas electrónicos?
* Retira la electrónica del sensor de la carcasa y observe.
* Comprueba/cambia el suministrador de energía de nuevo.
    * ¿Emite un pequeño flash el ESP después de reiniciar?
    * SDS011: LED roja/ventilador encendido después de reiniciar
    * Reinicia (desconecta el suministrador de energía)
