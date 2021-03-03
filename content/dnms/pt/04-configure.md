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
                O Noise está em beta. Envie perguntas para</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>
    
### Obtenha o ID
1. Conecte a estação com um cabo USB para ligar o sensor

2. A estação tenta se conectar ao ponto de acesso WiFi configurado. Se isso não funcionar, o sensor abre um ponto de acesso com o nome `Particulate Matter ID`,` Feinstaubsensor-ID` ou `airRohr-ID`. O ID é o **ChipID** (por exemplo 13597771). **Anote esse número, pois você precisa dele para o registro**

3. Conecte-se ao ponto de acesso criado. Aguarde até que a conexão seja estabelecida. <br>*Android*: Se a conexão for desconectada imediatamente, pode ser necessário desativar a opção 'Mudança de rede inteligente' em 'Conexões -> WiFi -> Avançado'

4. Abra seu navegador e digite [http://192.168.4.1/](http://192.168.4.1/)

> ⚠️ **Por favor note**  Pode demorar algumas tentativas para o NodeMCU se conectar à rede WiFi doméstica. Por favor, não fique impaciente e tente até que funcione. O sensor também pode ser configurado por meio de um smartphone. Se a configuração do sensor funcionou, a página de configuração não está mais acessível neste IP 192.168.4.1

### Configure a estação
1. Em 'Configure', insira o SSID (nome da sua rede WiFi doméstica), a chave de segurança da rede (no Windows) ou a senha WiFi.

2. Para sensores de ruído (DNMS) de acordo com este manual, nenhuma alteração adicional é necessária

3. Após clicar em `save`, o sensor será reiniciado e não estará mais acessível quando for conectado à WLAN.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Teste a estação
Se nenhuma alteração tiver sido feita além de inserir os dados da rede WiFi, o sensor pode ser 'testado' nas páginas a seguir após cerca de 10 minutos. Nessas páginas, você deve pesquisar o ChipID (no exemplo acima, o 13597771).

 * [Sensordaten](www.madavi.de/sensor/graph.php) 
 * [WLAN-Signal](www.madavi.de/sensor/signal.php) 
        


 
