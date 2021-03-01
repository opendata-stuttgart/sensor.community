---
title: Troubleshoot
---

### Problemas de transmissão?
Digite o seguinte no navegador com seus próprios dados:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

O [ID] também pode ser pesquisado no campo de entrada no canto superior esquerdo da página: [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1)

* O sensor está registrado via [https://devices.sensor.community/](https://devices.sensor.community/) e o sensor está visível no mapa?
    * O nível do sinal WLAN era fraco no passado?
        aqui está o log do sinal do lado do servidor: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`
        

### Problemas com o cabo USB?
* Verifique a fonte de alimentação: cabo USB
* Reinicialize (desconecte a fonte de alimentação, por exemplo, desconecte o plugue USB)
* A configuração de WLAN está LIGADA (o sensor conectado à WLAN configurada)? Se não:
    * o sensor abre um AP (nos primeiros 2-7 minutos após uma reinicialização)?
    * Procure por rede WLAN `airrohr-[ID]`. Tenha paciência, pode demorar 1-2 minutos após a inicialização.
* Verifique em seu próprio roteador se o sensor está conectado à rede e lembre-se do IP
    * como alternativa, use "Discovery" no [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
    * Se sim: conecte-se ao sensor via IP com um navegador `http://[ip-do-sensor]/` , a interface deve aparecer
    * Se não: o ESP tem problemas, por exemplo fonte de alimentação insuficiente, loop de reinicialização ou similar
* Conecte o USB a um computador e veja o registro 
    * Rastreie o texto na interface serial com o programa de terminal serial (Configurações: baud 9600, 8N1)
        * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, ...
        * os drivers adequados usb2serial possivelmente  ainda são necessários, consulte [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)                                                                                                                                                                                                                                                                                                                      
    * Lá você deve ser capaz de ver o que o sensor está fazendo (mensagens de inicialização, conexão WLAN ou AP, medição - somente após 3 minutos)

### Problemas eletrônicos?
* Remova os componentes eletrônicos do sensor da caixa e observe
* Verifique/substitua a fonte de alimentação novamente
    * o ESP pisca logo após a reinicialização?
    * SDS011: LED vermelho/ventilador ligado após a reinicialização?
    * verifique/substitua os cabos dos sensores novamente
