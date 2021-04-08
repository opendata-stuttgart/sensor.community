---
title: Troubleshoot
---

### Pārraides problēmas?
Ievadiet pārlūkprogrammā šādus datus:
`https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1&var-chipID=esp8266-[ID]`

[ID] var meklēt arī ievades laukā augšējā kreisajā stūrī [https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1](https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1).

* Vai sensors ir reģistrēts, izmantojot [https://devices.sensor.community/](https://devices.sensor.community/), un vai sensors ir redzams kartē?
    * Vai WLAN signāla līmenis iepriekš ir bijis vājš?
      Šeit ir servera puses signāla žurnāls: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`.



### USB kabeļa problēmas?
* Pārbaudiet barošanas avotu: USB kabelis
* Pārstartējiet (atvienojiet strāvas padevi, piemēram, izvelciet USB kontaktdakšu).
* Vai WLAN konfigurācija ir kārtībā (sensors savienojas ar konfigurēto WLAN) Ja nav:
    * vai sensors atver AP (pirmajās 2-7 minūtēs pēc restartēšanas)?
    * meklējiet `airrohr-[ID]` WLAN tīklu. Pacietība, tas var aizņemt 1-2 minūtes pēc palaišanas.
* Pārbaudiet savā maršrutētājā, vai sensors ir pieteicies tīklā, tad atcerieties IP.
    * alternatīvi izmantojiet "Discovery" [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher//).
    * Ja jā: izveidojiet savienojumu ar sensoru, izmantojot IP, izmantojot pārlūkprogrammu `http://[ip-sensora]/` , jāparādās saskarnei.
    * Ja nē: ESP ir problēmas, piemēram, nepietiekams barošanas avots, restartēšanas cilpa vai tamlīdzīgi.
* Savienojiet USB ar datoru un apskatiet žurnālu.
    * Sekojiet tekstam sērijas interfeisā, izmantojot sērijas termināļa programmu (iestatījumi: sods 9600, 8N1).
        * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, ...
        * Iespējams, vēl ir nepieciešami piemēroti usb2serial draiveri, skatīt [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen).
    * tur vajadzētu būt iespējai redzēt, ko sensors dara (boot ziņojumi, WLAN savienojums vai AP, mērījumi - tikai pēc 3 minūtēm).

### Elektronikas problēmas?
* Izņemiet sensora elektroniku no korpusa un novērojiet.
* Vēlreiz pārbaudiet/nomainiet barošanas avotu
    * Vai ESP mirgo īsi pēc restartēšanas?
    * Teensy: sarkanais LED mirgo pēc pārstartēšanas?
    * vēlreiz pārbaudiet/ nomainiet kabeļus pie sensoriem.

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
                Trokšņi ir beta versijā. Sūtiet jautājumus uz</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>