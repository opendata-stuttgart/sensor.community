---
title: Odpravljanje težav
---

### Težave pri prenosu?
V brskalnik vnesite naslednje podatke:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

[ID] lahko poiščete tudi v vnosnem polju, odprtem na levi strani strani [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1).

* Ali je senzor registriran prek [https://devices.sensor.community](https://devices.sensor.community) in ali je senzor viden na zemljevidu?
* Ali je bil brezžični signal v preteklosti šibek?
  Tukaj je protokol signala na strani strežnika: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`.

### Težave s kablom USB?
* Preverite napajanje
* Ponovni zagon (odklopite napajanje, npr. izvlecite vtič USB)
* Ali je konfiguracija omrežja WLAN v redu (senzor se poveže z nastavljenim omrežjem WLAN). Če ne:
  * Ali senzor v prvih 2-7 minutah po ponovnem zagonu odpre adhoc wifi (dostopno točko)?
  * Poiščite omrežje WLAN `airrohr-[ID]`. Po ponovnem zagonu lahko traja nekaj minut, preden je to vidno.
* Na svojem usmerjevalniku preverite, ali je senzor registriran v omrežju, in zabeležite naslov IP.
  * lahko uporabite tudi "Iskanje v omrežju" v orodju [airRohr Flashing Tool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
  * Če je odgovor pritrdilen: Povežite se s senzorjem prek brskalnika `http://[ip-your-sensor]`, prikazana bo konfiguracija.
  * Če ne: to je lahko posledica nezadostnega napajanja, zanke ponovnega zagona in podobno.
* Povežite NodeMCU z računalnikom prek kabla USB in si oglejte protokol
  * Sledenje s programom za serijski terminal (nastavitve: Baud 9600, 8N1)
    * Linux: zaslon, minicom, cutecom
    * Operacijski sistem Windows: Tera Term
    * MacOS: zaslon, minicom, ...
    * morda bodo potrebni ustrezni zaporedni gonilniki USB-2, glejte [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen).
  * Tam si lahko ogledate, kaj senzor počne (zagonska sporočila, povezava WLAN ali dostopna točka, meritve - šele po 3 minutah).

#### Težave z elektroniko?
* Odstranite elektroniko senzorja iz ohišja in si jo natančno oglejte.
* Ponovno preverite napajanje
    * Ali NodeMCU (ESP8266) utripa kmalu po ponovnem zagonu?
    * SDS011: rdeča dioda LEDFan se prižge po ponovnem zagonu?
    * Ponovno preverite kable do senzorjev.

  <div class="max-w-screen-xl mx-auto pb-5">
    <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
    <div class="flex items-center">
          <span class="p-2 rounded-lg bg-indigo-500">
                          <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
          </span>
        <div class="flex-wrap flex">
          <p class="pt-1 text-indigo-700 font-medium">
              Hrup je v beta različici. Vprašanja pošljite na<p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community</a>
        </div>
    </div>
  </div>
</div>
