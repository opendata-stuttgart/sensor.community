---
title: Configurar
---
### Obtenha o ID único da estação
1. Conecte a estação a um cabo USB para ligar o sensor.

2. A estação tentará se conectar à rede WiFi configurada. Para uma nova configuração, a conexão falhará e a estação criará uma rede WiFi com o nome `Particulate Matter ID`,` Feinstaubsensor-ID` ou `airRohr-ID`. O ID é o **ChipID** (por exemplo 13597771). **Por favor, anote este número, pois você precisará dele para o registro**

3. Conecte-se à rede WiFi criada pela estação em seu computador ou smartphone. Aguarde até que a conexão seja estabelecida. <br>*Android*: Se a conexão for desconectada imediatamente, pode ser necessário desativar a opção 'Smart network switch' em 'Connections -> WiFi -> Advanced'.

4. Abra seu navegador e digite [http://192.168.4.1/](http://192.168.4.1/).

> ⚠️ **Observe** Pode demorar algumas tentativas para o NodeMCU se conectar à rede WiFi doméstica. Seja paciente e tente as etapas várias vezes até que funcione. Se a configuração do sensor funcionou, a rede WiFi da estação não estará disponível e a página de configuração não estará mais acessível neste IP 192.168.4.1

### Configure a estação
1. Na página 'Configuration', digite o seu SSID (nome da sua rede WiFi doméstica), a chave de segurança da rede (no Windows) ou a senha WiFi.

2. Se você estiver usando o sensor de poeira fina recomendado (SDS011), nenhuma alteração de configuração adicional é necessária.

3. Clique no botão 'Save configuration and restart'. A estação irá reiniciar e não estará mais acessível quando se conectar à sua rede WiFi doméstica.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>

<br>

### Verifique se a estação está configurada corretamente
Se você não fez nenhuma outra alteração na etapa anterior além da configuração da rede WiFi, o sensor agora começará a gravar e enviar os dados. Você pode verificar se tudo está funcionando corretamente após cerca de 10 minutos, navegando para as páginas a seguir. Nessas páginas, procure o ChipID (no exemplo acima, o 13597771).

 * [Sensor data](https://www.madavi.de/sensor/graph.php)
 * [WiFi signal data](https://www.madavi.de/sensor/signal.php)
