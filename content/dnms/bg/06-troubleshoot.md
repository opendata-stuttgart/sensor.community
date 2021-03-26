---
title: Отстраняване на неизправности
---

### Проблеми с прехвърлянето?
Въведете следното в браузъра си със собствените си данни:
`https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1&amp;var-chipID=esp8266-[ID]`

[ID] може да се търси и в полето за въвеждане, отворено в лявата част на страницата [https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1](https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1).

* Регистриран ли е сензорът чрез [https://devices.sensor.community](https://devices.sensor.community) и видим ли е сензорът на картата?
* Слаб ли е бил безжичният сигнал в миналото?


### Проблеми с USB кабела?
* Проверете захранването
* Рестартиране (изключете захранването, напр. извадете USB щепсела)
* Вредна ли е конфигурацията на WLAN (сензорът се свързва с конфигурираната WLAN). Ако не:
  * Отваря ли сензорът adhoc wifi (точка за достъп) през първите 2-7 минути след рестартиране?
  * Търсене на WLAN мрежата `airrohr-[ID]`. Може да отнеме няколко минути след рестартиране на компютъра, докато това се види.
* Проверете на собствения си маршрутизатор дали сензорът е регистриран в мрежата и запишете IP адреса.
  * алтернативно използвайте "Търсене в мрежата" в [airRohr Flashing Tool](https://github.comopendata-stuttgartairrohr-firmware-flasher)
  * Ако отговорът е "да": Свържете се със сензора чрез браузър `http://[ip-your-sensor]`, конфигурацията трябва да се появи
  * Ако не: това може да се дължи на недостатъчно захранване, цикъл на рестартиране или други подобни.
* Свържете NodeMCU към компютър чрез USB кабел и разгледайте протокола
  * Проследяване с програма за сериен терминал (настройки: Baud 9600, 8N1)
    * Linux: screen, minicom, cutecom
    * Windows: Tera Term

    * Може да са необходими подходящи серийни драйвери за USB-2, вижте [https://github.comopendata-stuttgartmetawikiFirmware-einspielen](https://github.comopendata-stuttgartmetawikiFirmware-einspielen)
  * Там трябва да видите какво прави сензорът (съобщения за зареждане, връзка с WLAN или точка за достъп, измерване - само след 3 минути)

### Проблеми с електрониката?
* Извадете електрониката на сензора от корпуса и я разгледайте отблизо.
* Проверете отново захранването
    * Мига ли NodeMCU(ESP8266) малко след рестартиране?
    * SDS011: червен светодиодВентилаторът светва след рестартиране?
    * Проверете отново кабелите към сензорите.

  <div class="max-w-screen-xl mx-auto pt-5">
      <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
      <div class="flex items-center">
            <span class="p-2 rounded-lg bg-indigo-500">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">

              <svg>
            <span>
        <div class="flex flex-wrap">
          <div class="flex-wrap flex">
            <p class="pt-1 text-indigo-700 font-medium">
                В момента е в бета версия. Изпратете въпросите си на адрес<p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-whover:text-yellow-600">
                  Noise@Sensor.Community<a>
          <div>
           <div>
      <div>
    <div>
  <div>
