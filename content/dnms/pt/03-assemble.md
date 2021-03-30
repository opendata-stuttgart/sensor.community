---
title: Assemble
---
> ⚠️ **NOTA IMPORTANTE**
Antes de montar, instale o firmware!
Consulte a seção __firmware flasher__.


### Unidade de microfone

A unidade de microfone é baseada na placa breakout Pesky Products com um microfone MEMS ICS-43434. Você pode encontrar essa placa no [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).

<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>


##### Caixa para a unidade de microfone
O invólucro é feito com um tubo de poliestireno de 0,500" (12,7 mm). Este diâmetro permite conectar diretamente a maioria dos calibradores na unidade.

O protótipo foi desenvolvido com o [tubo Evergreen No. 236](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

<img src="../docs/dnms/dnms-noise-measuring-microphone-anschluesse.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>
<br>
A placa de divisão deve ser adaptada ao diâmetro da tubulação com uma lima. Use um pouco de fita para proteger a entrada do microfone.
<br>

<img src="../docs/dnms/dnms-noise-measuring-microphone-protection.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection-front.jpg" style="width:41%; margin: 2em 0" loading="lazy"/>

Em seguida, solde os seis cabos de silicone. Observe com qual pino o cabo está conectado!

<img src="../docs/dnms/dnms-noise-measuring-microphone-with-cable.jpg" style="display: block; width:40%; margin: 2em 0" loading="lazy"/>
Corte um pedaço de tubo de 115 mm de comprimento.
<br>
Cole a placa do microfone em uma fita cruzada. Coloque os cabos na tubulação e prenda a placa na extremidade da tubulação.
<br>
<img src="../docs/dnms/dnms-noise-measuring-microphone-preparing-housing.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-housing.jpg" style="width:42%; margin: 2em 0" loading="lazy"/>

Aperte a extremidade do tubo com a fita.

<img src="../docs/dnms/dnms-noise-measuring-microphone-tube.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>

Agora você pode preencher o tubo com um pouco de resina. Esta etapa é obrigatória para evitar ressonância e obter dados calibrados e reproduzíveis.

O protótipo foi desenvolvido com a resina [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900) produzido pela Copaltec GmbH.

##### Especificações:
* Rigidez dielétrica: 28 kV / mm
* Resistência direta específica: 5,8,1014 ohm / cm
* Resistência de superfície: 1,3,1016 ohm
* Relação de mistura resina/endurecedor: 2: 1
* Tempo de panela: 20 a 30 min.
* Tempo de cura: 16 a 30 h
* Estado final de endurecimento: 10 a 14 dias
* Viscosidade (mista): 500 à 600 mPa.s
* Dureza Shore: D 50 a 55 (ISO 868, DIN 53505)
* Condutividade térmica: 0,3 W / mK
* Temperaturas de aplicação: -20 a +130 ° C


A [resina de poliuretano UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) feita pela Electrolube também deve funcionar.

Para cada tubo, 15 g de resina devem ser suficientes.

<img src="../docs/dnms/dnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy"/>

Quando a resina endurecer, remova a fita. Sua unidade de microfone está pronta.



### DNMS Housing

Quando o Teensy (DNMS) e o NodeMCU (autônomo ou em PCB) são separados: DNMS e airRohr

Você precisa de um pedaço de tubo de 25 mm de diâmetro (por exemplo, tubo para aplicações elétricas), um conector, um arco de 90 ° e um prensa-cabo M25 IP68.

O tubo em si deve ter 160 mm de comprimento. O DNMS parece encaixado. A caixa do microfone é mantida pelo prensa-cabo.

O arco evita que água e umidade entrem na carcaça enquanto deixa o cabo passar.

<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

O DNMS é conectado ao segundo PCB por um cabo RJ12. Se este cabo tiver mais de 250 mm, você deve usar uma extensão I²C.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

Depois que tudo estiver bem conectado, as partes são coladas.

Resultado:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

O PCB que carrega o NodeMCU pode ser colocado em qualquer tipo de caixa elétrica.


### Proteção climática

As próprias caixas devem ser à prova d'água. Apenas a entrada do microfone pode ser sensível. O TDK, fabricante, publicou algumas recomendações para vedar microfones MEMS de porta inferior InvenSense contra a entrada de poeira e líquido, mas os componentes são difíceis de encontrar e não foram testados.

É absolutamente necessário instalar uma proteção contra intempéries em forma de capa de espuma. Se necessário, até uma esponja doméstica é suficiente. Há várias razões para isso:
* protege contra o ruído do vento (que pode aumentar as medições de decibéis)
* protege contra vazamento direto de água no microfone. Para evitar condensação no microfone, puxe a tampa um pouco para trás após instalá-la para criar uma pequena cavidade.
* protege contra a radiação solar. A luz solar intensa pode influenciar os valores medidos e reduzir a vida útil do microfone.

<img src="../docs/dnms/dnms-noise-measuring-microphone-bonette.jpg" style="width:45%; margin: 3em 0" loading="lazy"/>

Essas tampas de espuma são normalmente vendidas como 'tampas para microfones de medição'. Mas elas são caros. Você também pode pegar uma bola de espuma normal e fazer um buraco com a tesoura.

Se você precisar de mais, [esta fonte](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2
) pode ser útil.

### Localização do microfone

É importante colocar o microfone em uma área o mais "livre" possível, ou seja, em um local com o mínimo possível de superfícies refletoras de som. A distância até as superfícies reflexivas deve ser a maior possível. Tente não montar o microfone diretamente na parede de uma casa, porque as paredes refletem os sons fortemente. A distância até a parede deve ser idealmente superior a 1 m. Claro que isso nem sempre é fácil de perceber.

Com uma distância de cerca de 50 cm da ponta do microfone à parede, o erro induzido ainda é razoável. Bons lugares são, por exemplo, varandas ou grades do terraço ou um pequeno mastro no telhado.

Você também pode tentar colocar o microfone diretamente no canto da casa para que as reflexões se cancelem parcialmente. 

Um mastro independente de pelo menos 1 m de altura também pode ser uma solução, mas você deve estar atento aos reflexos no solo. Isso depende do revestimento do piso, é claro.

Também é importante estar sempre ciente de que medimos o ruído ambiente. Podemos apenas fazer uma aproximação da emissão de ruído de fontes como rodovias ou ferrovias.

No entanto, quanto mais perto você chega da fonte, mais precisa se torna a referência à fonte. As atualizações do firmware devem ser capazes de obter medidas prévias para um tipo de ruído identificado.

<img src="../docs/dnms/measuring-sensor-on-balcony.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<img src="../docs/dnms/measuring-sensor-on-terasse.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<br>
<img src="../docs/dnms/measuring-sensor-on-wall.jpg" style="width:99%; margin-bottom: 2em;" loading="lazy"/>
