---
title: Troubleshoot
---

### ¿Transmite de manera errónea?
Introduce lo siguiente en el navegador con tus propios datos:
`https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1&var-chipID=esp8266-[ID]`

El [ID] también se puede buscar en el campo de entrada en la esquina superior izquierda [https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1](https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1)

* ¿Se registra el sensor a través de [https://devices.sensor.community/](https://devices.sensor.community/) y es el sensor visible en el mapa?
    * ¿Fue el nivel de la señal WLAN débil en el pasado?
        Aquí está el registro de la señal del lado del servidor: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`
        

### ¿Problemas con el cable USB?
### Check power supply: Cable USB
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
        * Posiblemente los drivers usb2seriales adecuados todavía son necesarios, ver [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)     
    * Allí deberías ser capaz de ver lo que el sensor está haciendo (mensajes de arranque, conexión WLAN o AP, medición - sólo después de 3 minutos)

### ¿Problemas electrónicos?
* Retire los componentes electrónicos del sensor de la carcasa y observe
* Revisar/reemplazar la fuente de alimentación de nuevo
    * ¿el ESP parpadea poco después de reiniciar?
    * Teensy: ¿el LED rojo parpadea después de reiniciar?
    * comprueba/reemplaza los cables de los sensores de nuevo


  <div class="max-w-screen-xl mx-auto pt-5">
      <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
      <div class="flex items-center">
            <span class="p-2 rounded-lg bg-indigo-500">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5. 436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </span>
        <div class="flex flex-wrap">
          <div class="flex-wrap flex">
            <p class="pt-1 text-indigo-700 font-medium">
                El ruido está en beta. Envíe las preguntas a </p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>
