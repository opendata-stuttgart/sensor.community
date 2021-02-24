---
title: Assemble
---

> ⚠️ **NOTA IMPORTANTE**
Antes de la conexión, instala el firmware. Echa un vistazo a la sección firmware flasher.

### NodeMCU v3
Nota: Nuestras instrucciones hacen referencia a la versión 3 del NodeMCU. Puede ser reconocido por las conexiones VU y G (ver el dibujo). 

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em" loading="lazy"/>
<small>Copyright: roman-minyaylov, MIT License</small>

<img src="../docs/airrohr/nodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy"/>

##### Cuando lo termines, así es como debe mostrarse:

### Cablear el SDS011
Los pins están numerados de DERECHA a IZQUIERDA, asegúrate al conectar los cables que están situados en los pins, ya que la mayoría de los cables Dupont encajan entre los pines.

```bash
SDS011 Pin 1 -> Pin D1 / GPIO5
SDS011 Pin 2 -> Pin D2 / GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> unused
SDS011 Pin 5 -> VU (NodeMCU v3) / VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> unused
SDS011 Pin 7 -> unused
```

### Soldar el BME280
<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center" loading="lazy"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;" loading="lazy"/>

Conecta la cabeza del pin con el puerto BME280. Suéldalo desde la parte trasera. Los huecos entre los pins son muy pequeños, ten paciencia y cuidado. 
El truco está en soldar la punta de hierro al pin, calentarlo un poco y, entonces soldarlo con cuidado.  

### Cablear el BME280
Los pins están numerados de IZQUIERDA a DERECHA
```bash
VIN -> Pin 3V3 (3.3V)
GND->  GND/G
SDA -> PIN D3
SCL -> Pin D4
```

### Átalo todo junto

##### Ata el NodeMCU y el SDS011 juntos
<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg" loading="lazy"/>
Usa un cable para conectar el NodeMCU (ESP8266) y el sensor SDS011 sensor para que la antena de Wifi emita desde el sensor.

##### Conecta el tubo flexible 
 <img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em" loading="lazy"/>
 <img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;" loading="lazy"/>
 
* Conecta el tubo flexible al sensor SDS011
* Use otro cable conector para enganchar el sensor de temperatura BME280 al tubo
* Pasa el cable USB a través del tubo. Monta el SDS011 con el NodeMCU hacia la parte de arriba y el ventilador hacia la parte de abajo
 
 ##### Pulsa el sensor en el tubo
* Aprieta las partes en el tubo, así estará junto dentro. 
* El cable USB, el tubo flexible y el BME280 deben salir al final del tubo.
* Aprieta el otro cable dentro del primero.

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg" loading="lazy"/>

 ##### Para acabar
* Coloca el sensor de temperatura en el tubo flexible, así estará en el borde del cable.
* Corta el tubo flexible y el final del cable.
* Opcional: puedes cubrir las salidas del tuvo con una fina malla. Así el aire puede circular y los insectos no pueden entrar.
  
<img src="../docs/airrohr/position-bme280.jpeg" loading="lazy"/>
