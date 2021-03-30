---
title: Troubleshoot
---

### Problemas de transmissão?
Digite o seguinte endereço no navegador com seus próprios dados:
`https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1&var-chipID=esp8266-[ID]`

O [ID] também pode ser pesquisado no campo de entrada no canto superior esquerdo [https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1](https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1)

* O sensor está registrado via [https://devices.sensor.community/](https://devices.sensor.community/) e está visível no mapa?
    * O nível do sinal WLAN era fraco no passado?
        aqui está o log do sinal do lado do servidor: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`
        


### Problemas com o cabo USB?
* Verifique a fonte de alimentação: cabo USB
* Reinicialize (desconecte a fonte de alimentação, por exemplo, desconecte o plugue USB)
* A configuração de WLAN está LIGADA (o sensor conectado à WLAN configurada)? Se não:
    * o sensor abre um AP (nos primeiros 2-7 minutos após uma reinicialização)?
    * Procure por rede WLAN `airrohr- [ID]`. Paciência, pode demorar 1-2 minutos após a inicialização.
* Verifique em seu próprio roteador se o sensor está conectado à rede e lembre-se do IP 
    * como alternativa, use "Discovery" no [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher//)
    * Se sim: conecte ao sensor via IP com um navegador `http://[ip-do-sensor]/`, a interface deve aparecer
    * Se não: o ESP tem problemas, por exemplo fonte de alimentação insuficiente, loop de reinicialização ou similar
* Conecte o USB a um computador e veja o registro
    * Rastreie o texto na interface serial com o programa do terminal serial (Configurações: baud 9600, 8N1)
        * Linux: tela, minicom, cutecom; Windows: Tera Term; MacOS: tela, minicom, ...
        * drivers usb2serial adequados possivelmente ainda são necessários, consulte [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)     
    * Lá você poderá ver o que o sensor está fazendo (mensagens de inicialização, conexão WLAN ou AP, medição - somente após 3 minutos)

### Problemas eletrônicos?
* Remova os componentes eletrônicos do sensor da caixa e observe
* Verifique/substitua a fonte de alimentação novamente
     * O ESP pisca logo após a reinicialização?
     * Teensy: LED vermelho piscando após a reinicialização?
     * verifique/substitua os cabos dos sensores novamente


  <div class="max-w-screen-xl mx-auto pt-5">
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
                O Noise está na versão beta. Envie perguntas para</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>
