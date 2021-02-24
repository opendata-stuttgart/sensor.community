---
title: Configurar
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
                El ruido está en beta. Envíe las preguntas a </p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>
    
### Get the ID
1. Conectar la estación con un cable USB para encender el sensor

2. La estación intenta conectarse al punto de acceso WiFi configurado. Si esto no funciona, el sensor abre un punto de acceso con el nombre "Particulate Matter ID", "Feinstaubensor-ID" o "airRohr-ID". El ID es el **ChipID** (por ejemplo 13597771). **Por favor, anota ese número, ya que lo necesitas para el registro**

3. Conectar con el punto de acceso creado. Espere hasta que la conexión se establezca.<br>*Androide*: Si la conexión se desconecta inmediatamente, es posible que tenga que desactivar la opción 'Smart network switch' en 'Conexiones -> WiFi -> Avanzado'.

4. Abra su navegador y escriba [http://192.168.4.1/](http://192.168.4.1/)

> ⚠️ **Por favor note** Puede que tome algunos intentos para que el NodeMCU se conecte a la red WiFi de su casa. Por favor, no se impaciente e intente hasta que funcione. El sensor también puede ser configurado a través de un teléfono inteligente. Si la configuración del sensor ha funcionado, la página de configuración ya no es accesible bajo esta IP 192.168.4.1

### Configurar la estación
1. En 'Configurar' introduzca el SSID (nombre de la red WiFi de su casa), la clave de seguridad de la red (en Windows) o la contraseña de WiFi.

2. Para los sensores de ruido (DNMS) según este manual, no es necesario hacer más cambios

3. Después de pulsar "save", el sensor se reiniciará y ya no será accesible de esta manera cuando se conecte a la WLAN.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Test the station
Si no se han hecho más cambios que introducir los datos de la red WiFi, el sensor puede ser "probado" en las siguientes páginas después de unos 10 minutos. En estas páginas hay que buscar el ChipID (en el ejemplo anterior el 13597771).

 * [Sensordaten](www.madavi.de/sensor/graph.php) 
 * [Señal WLAN](www.madavi.de/sensor/signal.php) 
         
