---
title: Налаштуйте
---
### Отримайте унікальний ідентифікатор станції
1. Підключіть станцію до кабелю USB, щоб увімкнути датчик.

2. Станція спробує підключитися до налаштованої мережі WiFi. Для нового налаштування з'єднання не вдасться, і станція створить мережу Wi-Fi з назвою `Particulate Matter ID`,` Feinstaubsensor-ID` або `airRohr-ID`. Ідентифікатор - **ChipID** (наприклад, 13597771). **Зверніть увагу на цей номер, оскільки він вам знадобиться для реєстрації**

3. Підключіться до мережі WiFi, створеної станцією, на вашому комп’ютері або смартфоні. Зачекайте, поки з’єднання буде встановлено. <br> * Android *: Якщо з’єднання негайно від’єднується, можливо, вам доведеться деактивувати опцію «Розумний комутатор мережі» під «З’єднання -> WiFi -> Додатково».

4. Відкрийте браузер і введіть[http://192.168.4.1/](http://192.168.4.1/).

⚠️ ** Зверніть увагу ** Для підключення NodeMCU до домашньої мережі Wi-Fi може знадобитися кілька спроб. Будьте терплячі та спробуйте кілька разів, поки це не спрацює. Якщо конфігурація датчика спрацювала, мережа Wi-Fi станції буде недоступною, і сторінка конфігурації більше не буде доступною за цим IP 192.168.4.1

### Налаштуйте станцію
1. На сторінці "Конфігурація" введіть SSID (ім'я вашої домашньої мережі WiFi), ключ безпеки мережі (під Windows) або пароль WiFi.

2. Якщо ви використовуєте рекомендований датчик тонкого пилу (SDS011), подальші зміни конфігурації не потрібні.

3. Натисніть кнопку «Зберегти конфігурацію та перезапустити». Станція перезапуститься і більше не буде доступною таким чином, коли вона підключиться до вашої домашньої мережі WiFi.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Verify the station is correctly configured
If you made no other changes in the previous step other than WiFi network configuration, the sensor will now start recording and uploading the data. You can verify that everyting is working correctly after about 10 minutes by navigating to the following pages. On these pages search for the ChipID (in the example above the 13597771).

 * [Sensor data](https://www.madavi.de/sensor/graph.php)
 * [WiFi signal data](https://www.madavi.de/sensor/signal.php)
