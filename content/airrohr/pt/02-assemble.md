---
title: Assemble
---

> ⚠️ **NOTA IMPORTANTE**
Antes de montar, instale o firmware!
Veja a seção __firmware flasher__.

### NodeMCU v3
Nota: Nossas instruções referem-se à versão 3 do NodeMCU. Isso pode ser reconhecido pelas conexões VU e G (veja o desenho). 

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em" loading="lazy"/>
<small>Copyright: roman-minyaylov, MIT License</small>


<img src="../docs/airrohr/nodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy"/>

##### Quando você estiver pronto, assim que deve ser feito:


### Conecte o SDS011
Os pinos são numerados da DIREITA à ESQUERDA, certifique-se de que ao conectar os cabos estejam assentados nos pinos, já que a maioria dos cabos Dupont também se encaixam entre os pinos.
```bash
SDS011 Pino 1 -> Pin D1 / GPIO5
SDS011 Pino 2 -> Pin D2 / GPIO4
SDS011 Pino 3 -> GND
SDS011 Pino 4 -> não usado
SDS011 Pino 5 -> VU (NodeMCU v3) / VIN (NodeMCU v1,v2)
SDS011 Pino 6 -> não usado
SDS011 Pino 7 -> não usado
```

<br>

💡 Você pode encontrar uma lista de [sensores suportados pelo nosso firmware](https://github.com/opendata-stuttgart/sensors-software/blob/master/airrohr-firmware/Readme.md)



### Soldar o BME280
<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center" loading="lazy"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;" loading="lazy"/>

Conecte o cabeçalho do pino com a placa BME280. Solde-o por trás. As lacunas entre os pinos são muito pequenas, então seja paciente e cuidadoso.

O truque é colocar a ponta do ferro de solda no pino, aquecer um pouco e depois aplicar levemente a solda. 



### Conecte o BME280
Os pinos são numerados da ESQUERDA à DIREITA.
```bash
VIN -> Pino 3V3 (3.3V)
GND->  GND/G
SDA -> Pino D3
SCL -> Pino D4
```

### Amarre tudo junto

 ##### Conecte o NodeMCU e o SDS011
<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg" loading="lazy"/>
Use uma braçadeira para conectar o NodeMCU (ESP8266) e o sensor SDS011 para que a antena Wifi aponte para longe do sensor

 ##### Conecte o tubo flexível
 <img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em" loading="lazy"/>
 <img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;" loading="lazy"/>

* conecte o tubo flexível ao sensor SDS011
* Use outra braçadeira para prender o sensor de temperatura BME280 ao tubo
* Passe o cabo USB pelo tubo. Monte o SDS011 com o NodeMCU voltado para cima e o ventilador voltado para baixo
 
 ##### Empurre o sensor para dentro do tubo
* Empurre as peças para dentro do tubo, para que fique preso dentro
* Cabo USB, tubo flexível e BME280 devem ficar virados para fora da extremidade do tubo
* Empurre o outro tubo para o primeiro.

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg" loading="lazy"/>

##### Finalizando
* Posicione o sensor de temperatura no tubo flexível, de forma que fique na borda do tubo.
* Corte o tubo flexível na extremidade do tubo
* Opcional: você pode cobrir as extremidades abertas do tubo com uma malha fina. Então o ar pode circular, mas os insetos não entram
 
<img src="../docs/airrohr/position-bme280.jpeg" loading="lazy"/>

### Colocação
O local ideal seria 1,5 a 3,5 metros acima da rua e bem ventilado. No entanto, isso não pode ser feito para todas as pessoas, pois, portanto, informações como a altura acima do solo e a posição para a rua são solicitadas durante o registro.

