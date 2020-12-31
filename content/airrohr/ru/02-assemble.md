---
title: Сборка
---

> ⚠️ **Важное замечание**
До того, как приступать к сборке и подсоединять сенсоры нужно прошить и проверить процессор ESP8266!

### Подключение сенсора частиц SDS011

С сенсором SDS011 идет провод, подключенный к USB плате. Его можно использовать для подключения к контроллеру ESP8266 после небольшой доработки.

1. Отсоедините контакт от USB платы (сама USB плата более не понадобится):

![step_01](../docs/airrohr/sds_01.png)

2. Надавите острым предметом на выступающую часть разъема и немного потяните за провод. 
**Внимание!** Не вырывайте провод из разъема слишком сильно! Он должен выходить легко.

![step_02](../docs/airrohr/sds_02.png)

3. Высвободившийся из центра провод вставьте в крайний разъем так, чтобы он надежно зафиксировался.

![step_03](../docs/airrohr/sds_03.png)

4. При помощи острого ножа сделайте разрез посередине.

![step_04](../docs/airrohr/sds_04.png)

5. После разреза должно образоваться два разъема. Зачистите оба места среза чтобы получить ровную поверхность (может мешать присоединению других разъемов).

![step_05](../docs/airrohr/sds_05.png)

6. Подсоедините разъемы сенсора SDS011 к процессору ESP8266 так, чтобы пластмассовые выступы на разъемах смотрели друг на друга (внутрь платы):

7. Сами разъем надо установить во 2 и 3 контакты пропустив первый (нумерация с противоположной стороны от разъема USB)

Еще раз проверьте ваше подключение по схеме. Неправильное подключение питания датчика (переполюсовка) приводит к необратимым последствиям). Убедитесь, что 5V с датчика приходит на VU контроллера, а GND (ground - земля) соединена с контактом G на плате контроллера:

Для более надежной фиксации контактов на контроллере можно воспользоваться хомутом или термоклеем.

Pins are numbered from RIGHT to LEFT, make sure when connecting the cables are sitting on the pins, as most Dupont cables also fit inbetween the pins.
```bash
SDS011 Pin 1 -> Pin D1 / GPIO5
SDS011 Pin 2 -> Pin D2 / GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> unused
SDS011 Pin 5 -> VU (NodeMCU v3) / VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> unused
SDS011 Pin 7 -> unused
```

### Подсоединение сенсора BME280

Датчик BME280 обычно поставляется отдельно от контактных ножек и их необходимо припаять. Если вы не умеете это делать, то можно обратится в ремонт бытовой техники или мобильных телефонов, где вам, возможно, все сделают прямо при вас за несколько минут за небольшую плату.

Отделите четыре провода и подсоедините их параллельно друг к другу контактами (в середине разъема) вовнутрь как показано на фото ниже:


<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;">

Connect the pin header with the BME280 board. Solder it from the backside. The gaps between the pins are very small so be patient and careful.  

The trick is to put the soldering iron tip to the pin, warm it up a little, and then lightly apply the solder.  



### Wire the BME280
Pins are numbered from LEFT to RIGHT.
```bash
VIN -> Pin 3V3 (3.3V)
GND->  GND/G
SDA -> PIN D3
SCL -> Pin D4
```

### Tie everything together

 ##### Tie NodeMCU and SDS011 together
<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg"/>
Use a cable tie to link the NodeMCU (ESP8266) and the SDS011 sensor so that the Wifi antenna points away from the sensor

 ##### Connect flexible tube
 <img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em"/>
 <img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;">
 
* connect the flexible tube to the SDS011 sensor
* Use another cable tie to attach the BME280 temperature sensor to the tube
* Pass the USB cable through the tube. Mount the SDS011 with the NodeMCU facing to the top and the fan facing to the bottom

 
 ##### Push in sensor into the pipe
* Push the parts into the tube, so it's jammed inside
* USB cable, flexible tube and BME280 should look out of the tube's end
* Push the other pipe onto the first one.

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg"/>

 ##### Finishing
* Position the temperature sensor on the flexible tube, so that it's on the edge of the pipe.
* Cut off the flexible tube at the end of the pipe
* Optional: you can cover the open ends of the tube with a fine mesh. So air can circulate but insects stay outside
 
<img src="../docs/airrohr/position-bme280.jpeg"/>
