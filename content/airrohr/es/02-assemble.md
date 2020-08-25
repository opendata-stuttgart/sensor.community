---
title: Ensamblar
---

> ⚠️ **NOTA IMPORTANTE**
¡Antes de montarlo, instale el firmware!
Vea la sección __firmware flasher__.

### NodeMCU v3
Nota: Nuestras instrucciones se refieren a la versión 3 del NodeMCU. Esto se puede reconocer por las conexiones VU y G (ver dibujo).  

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em"/>
<small>Copyright: roman-minyaylov, MIT License</small>


<img src="../docs/airrohr/nodemcu-v3-bme280.jpeg" style="margin-top: 1em"/>

##### Cuando termines, así es como debería verse

### Cablear el SDS011
Los pines están numerados de DERECHA a IZQUIERDA, asegúrate de que al conectarlos los cables se asienten sobre los pines, ya que la mayoría de los cables Dupont también encajan entre los pines.

```bash
SDS011 Pin 1 -> Pin D1 / GPIO5
SDS011 Pin 2 -> Pin D2 / GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> unused
SDS011 Pin 5 -> VU (NodeMCU v3) / VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> unused
SDS011 Pin 7 -> unused
```

### Soldar juntos BME280
<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;">

Conecta la cabecera del pin con el tablero BME280. Suéldalo por la parte trasera. Los espacios entre los pines son muy pequeños, así que ten paciencia y cuidado.    
El truco es poner la punta del soldador en el alfiler, calentarlo un poco, y luego aplicar ligeramente la soldadura.  

### Cablear el BME280 
Los alfileres están numerados de izquierda a derecha.
```bash
VIN -> Pin 3V3 (3.3V)
GND->  GND/G
SDA -> PIN D3
SCL -> Pin D4
```

### Ata todo junto

 ##### Corbata NodeMCU y SDS011 juntos
<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg"/>
Usa un cable para unir el NodeMCU (ESP8266) y el sensor SDS011 para que la antena Wifi apunte lejos del sensor

 ##### Conecta el tubo flexible
 <img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em"/>
 <img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;">
 
* Conecta el tubo flexible al sensor SDS011
* Usa otra atadura de cable para fijar el sensor de temperatura del BME280 al tubo
* Pasa el cable USB a través del tubo. Montar el SDS011 con el NodeMCU mirando hacia arriba y el ventilador mirando hacia abajo
 
 ##### Empujar el sensor en la tubería
* El cable USB, el tubo flexible y el BME280 deberían mirar por el extremo del tubo *
* Empuja el otro tubo en el primero.

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg"/>

 ##### Finalizando
* Coloca el sensor de temperatura en el tubo flexible, de modo que esté en el borde del tubo.
* Corta el tubo flexible en el extremo del tubo
* Opcional: puedes cubrir los extremos abiertos del tubo con una malla fina. Así que el aire puede circular pero los insectos se quedan fuera
  
<img src="../docs/airrohr/position-bme280.jpeg"/>
