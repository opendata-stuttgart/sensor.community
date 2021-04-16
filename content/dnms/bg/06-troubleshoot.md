---
title: Отстраняване на неизправности
---

### Проблеми с предаването?
Въведете следното в браузъра с вашите собствени данни:
`https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1&var-chipID=esp8266-[ID]`

Идентификаторът [ID] може да бъде търсен и в полето за въвеждане в горния ляв ъгъл [https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1](https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1)

* Регистриран ли е сензорът чрез [https://devices.sensor.community/](https://devices.sensor.community/) и вижда ли се сензорът на картата?
  * Слабо ли е било нивото на сигнала на WLAN в миналото?
    Ето дневника на сигнала от страна на сървъра: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`

### Проблеми с USB кабела?
* Проверете захранването: USB кабел
* Рестартирайте системата (изключете захранването, напр. издърпайте USB щепсела)
* Дали конфигурацията на WLAN е наред (сензорът се свързва с конфигурираната WLAN) Ако не:
  * Отваря ли сензорът AP (през първите 2-7 минути след рестартиране)?
  * Потърсете WLAN мрежа `airrohr-[ID]`. Търпение, може да отнеме 1-2 минути след зареждането на системата.
* Проверете на собствения си маршрутизатор дали сензорът е влязъл в мрежата, след което запомнете IP
  * алтернативно използвайте "Discovery" (Откриване) в [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher//)
  * Ако да: свържете се със сензора чрез IP с браузър `http://[ip-of-the-sensor]/` , интерфейсът трябва да се появи
  * Ако не: ESP има проблеми, напр. недостатъчно захранване, цикъл на рестартиране или други подобни.
* Свържете USB към компютър и прегледайте дневника
  * Проследяване на текста на серийния интерфейс с програма за сериен терминал (Настройки: бод 9600, 8N1)
    * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, ...
    * Все още са необходими подходящи драйвери за usb2serial, вижте [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
  * Там трябва да можете да видите какво прави сензорът (съобщения за зареждане, връзка с WLAN или AP, измерване - само след 3 минути)

### Проблеми с електрониката?
* Извадете електрониката на сензора от корпуса и наблюдавайте
* Проверете/подменете отново захранването
  * Мига ли ESP скоро след рестартиране?
  * Teensy: червен светодиод мига след рестартиране?
  * Проверете/подменете отново кабелите към сензорите


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
                Шумът е в бета версия. Изпращайте въпроси на</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>
