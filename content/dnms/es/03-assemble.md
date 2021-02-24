---
title: Assemble
---
> ⚠️ **NOTA IMPORTANTE**
¡Antes de montarlo, instale el firmware!
Vea la sección __firmware flasher__.


### Unidad de micrófono

La unidad de micrófono se basa en el tablero de escape de Pesky Products con un micrófono MEMS ICS-43434. Puedes encontrar dicha placa en el [mercado de la hojalata](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/). 

<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>


##### Carcasa de la unidad de micrófono
La carcasa está hecha con un tubo de poliestireno de 12,7 mm. Este diámetro permite enchufar directamente la mayoría de los calibradores de la unidad.

El prototipo fue desarrollado con el [tubo Evergreen No. 236](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

<img src="../docs/dnms/dnms-noise-measuring-microphone-anschluesse.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>
<br>
La tabla de escape tiene que ser adaptada al diámetro del tubo con una lima. Use un poco de cinta adhesiva para proteger la entrada del micrófono.
<br>

<img src="../docs/dnms/dnms-noise-measuring-microphone-protection.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection-front.jpg" style="width:41%; margin: 2em 0" loading="lazy"/>

Luego soldar los seis cables de silicona. ¡Anote con qué clavija está conectado el cable!

<img src="../docs/dnms/dnms-noise-measuring-microphone-with-cable.jpg" style="display: block; width:40%; margin: 2em 0" loading="lazy"/>
Corta un tubo de 115 mm de largo.
<br>
Pega la tabla del micrófono en alguna cinta cruzada. Ponga los cables en el tubo y fije la tabla en el extremo del tubo.
<br>
<img src="../docs/dnms/dnms-noise-measuring-microphone-preparing-housing.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-housing.jpg" style="width:42%; margin: 2em 0" loading="lazy"/>

Apriete la extremidad del tubo con la cinta.

<img src="../docs/dnms/dnms-noise-measuring-microphone-tube.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>

Ahora puedes llenar el tubo con algo de resina. Este paso es obligatorio para evitar la resonancia y obtener datos calibrados y reproducibles.

El prototipo fue desarrollado con algo de [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900) producido por Copaltec GmbH.

##### Especificaciones:
* Fuerza dieléctrica: 28 kV/mm
* Resistencia específica hacia adelante: 5,8.1014 ohm/cm
* Resistencia de la superficie: 1,3.1016 ohm
* Relación de mezcla resina/endurecedor: 2 : 1
* Tiempo de cocción: 20 a 30 min.
* Tiempo de curado: 16 a 30 h
* Estado final de endurecimiento: 10 a 14 días
* Viscosidad (mixta): 500 a 600 mPa.s
* Dureza Shore: D 50 a 55 (ISO 868, DIN 53505)
* Conductividad térmica: 0,3 W/mK
* Temperaturas de aplicación: - 20 a +130 °C


La [resina de poliuretano UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) hecha por Electrolube debería funcionar también.

Por cada tubo, 15 g de resina deberían ser suficientes.

<img src="../docs/dnms/dnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy"/>

Cuando la resina se haya endurecido, retire la cinta. Su unidad de micrófono está lista.



### DNMS Housing

Cuando el Teensy (DNMS) y el NodeMCU (autónomo o en PCB) se separan: DNMS y airRohr

Necesitas un trozo de tubo de 25 mm de diámetro (por ejemplo, tubo para aplicaciones eléctricas), un conector, un arco de 90° y un prensaestopas M25 IP68.

El tubo en sí mismo debe tener 160 mm de longitud. El DNMS parece estar colocado en. La carcasa del micrófono se mantiene gracias al prensaestopas.

El arco evita que el agua y la humedad entren en la carcasa mientras deja pasar el cable.

<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

El DNMS está conectado al segundo PCB por un cable RJ12. Si este cable es más largo de 250 mm, debe utilizar una extensión I²C.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

Después de que todo esté bien conectado, las partes se pegan entre sí.

Resultado:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

El PCB que lleva el NodeMCU puede ser puesto en cualquier tipo de caja eléctrica.


### Weather protection

Las viviendas en sí mismas deben ser impermeables. Sólo la entrada del micrófono podría ser sensible. TDK, el fabricante ha publicado algunas recomendaciones para sellar los micrófonos MEMS de puerto inferior de InvenSense contra la entrada de polvo y líquido, pero los componentes son difíciles de encontrar y no fueron probados.

Es absolutamente necesario instalar una protección contra el clima en forma de una cubierta de espuma. Si es necesario, incluso una esponja doméstica es suficiente. Hay varias razones para ello:
* protege contra el ruido del viento (que puede aumentar las mediciones de decibelios)
* protege contra la fuga directa de agua en el micrófono. Para evitar la condensación en el micrófono, tire de la cubierta un poco después de instalarla para crear una pequeña cavidad.
* protege contra la radiación solar. La luz solar intensa puede influir en los valores medidos y reducir la vida del micrófono
