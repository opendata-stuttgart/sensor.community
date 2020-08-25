---
title: Solución de problemas
---

### ¿Problemas de transmisión?
Introduce lo siguiente en el navegador con tus propios datos:
https://www.madavi.de/sensor/graph.php?sensor=esp8266-[ID]-[tipo_de_sensor]

El [ID] también se puede buscar en el texto de la página [https://www.madavi.de/sensor/graph.php](https://www.madavi.de/sensor/graph.php)

* ¿Se registra el sensor a través de [https://devices.sensor.community/](https://devices.sensor.community/) y es el sensor visible en el mapa?
* ¿Fue el nivel de la señal WLAN débil en el pasado? Aquí está el registro de la señal del lado del servidor: https://www.madavi.de/sensor/signal.php?sensor=esp8266-[ID]        

### ¿Problemas con el cable USB?
* Check power supply: Cable USB
* Reiniciar (desconectar la fuente de alimentación, por ejemplo, tirar del enchufe USB)
* ¿Está la configuración de la WLAN bien (el sensor se conecta a la WLAN configurada) Si no:
    * ¿El sensor abre un AP (en los primeros 2-7 minutos después de un reinicio)?
    * Busca la red WLAN "airrohr-[ID]``. Paciencia, puede tardar 1-2 minutos después del arranque.
* Comprueba en tu propio router si el sensor está conectado a la red, entonces recuerda la IP 
    * alternativamente usa "Discovery" en la [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
    * Si es así: conéctese al sensor a través de IP con un navegador `http://[ip-de-el-sensor]/` , la interfaz debería aparecer 
    * Si no: el ESP tiene problemas, por ejemplo, suministro de energía insuficiente, bucle de reinicio o similar
* Conecta el USB a un ordenador y mira el registro  
    * Pista de texto en la interfaz en serie con el programa de terminal en serie (Ajustes: baud 9600, 8N1)
        * Linux: pantalla, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, ...
        * Posiblemente los drivers usb2seriales adecuados todavía son necesarios, ver  [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)       
    * Allí deberías ser capaz de ver lo que el sensor está haciendo (mensajes de arranque, conexión WLAN o AP, medición - sólo después de 3 minutos)

### ¿Problemas electrónicos?
* Retire los componentes electrónicos del sensor de la carcasa y observe
* Revisar/reemplazar la fuente de alimentación de nuevo
    * ¿el ESP parpadea poco después de reiniciar?
    * SDS011: ¿el LED rojo/ventilador se enciende después del reinicio?
    * compruebe/reemplace los cables de los sensores de nuevo
