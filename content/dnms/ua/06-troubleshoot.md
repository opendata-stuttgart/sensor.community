---
title: Виправлення неполадок
---

### Передача проблем?
Введіть у браузері такі дані, як ваші власні дані:
`https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1&var-chipID=esp8266-[ID]`

[ID] також можна шукати у полі введення у верхньому лівому куті [https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1](https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1)

* Чи зареєстрований датчик через [https://devices.sensor.community/](https://devices.sensor.community/) і чи датчик видно на карті?
    * Чи був рівень сигналу WLAN слабким у минулому?
        ось сигнал журналу сигналів на стороні сервера: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`
        

### Проблеми з кабелем USB?
* Перевірте джерело живлення: USB-кабель
* Перезавантажте (від'єднайте джерело живлення, наприклад, витягніть штекер USB)
* Чи правильно налаштована настройка WLAN (датчик підключається до налаштованої WLAN) Якщо ні:
    * чи відкриває датчик точку доступу (у перші 2-7 хвилин після перезавантаження)?
    * Шукайте мережу WLAN `airrohr-[ID]`. Терпіння, це може зайняти 1-2 хвилини після завантаження.
* Перевірте на власному маршрутизаторі, чи ввійшов датчик у мережу, а потім запам'ятайте IP
    * в якості альтернативи використовуйте "Discovery" у [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
    * Якщо так: підключіться до датчика через IP за допомогою браузера `http://[ip-of-the-sensor]/`, повинен з'явитися інтерфейс
    * Якщо ні: ESP має проблеми, напр. недостатнє живлення, цикл перезавантаження або подібний
* Підключіть USB до комп'ютера та перегляньте журнал
    * Відстеження тексту на послідовному інтерфейсі за допомогою програми послідовного терміналу (Налаштування: бод 9600, 8N1)
        * Linux: екран, minicom, cutecom; Windows: Tera Term; MacOS: екран, minicom, ...
        * можливо, підходящі драйвери usb2serial все ще необхідні, див. einspielen)
    * Там ви зможете побачити, що робить датчик (повідомлення про завантаження, підключення до WLAN або точка доступу, вимірювання - лише через 3 хвилини)

### Проблеми з електронікою?
* Вийміть електроніку датчика з корпусу та спостерігайте
* Перевірте / замініть блок живлення ще раз
    * ESP блимає незабаром після перезавантаження?
    * Teensy: червоний світлодіод блимає після перезавантаження?
    * ще раз перевірити / замінити кабелі до датчиків


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
                Шум знаходиться в бета-версії. Надішліть запитання </p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>
