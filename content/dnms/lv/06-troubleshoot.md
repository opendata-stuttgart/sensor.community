---
title: Problēmu novēršana
---

#### Problēmas ar pārsūtīšanu?
Ievadiet pārlūkprogrammā šādus datus ar saviem datiem:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

[ID] var meklēt arī ievades laukā, kas atvērts lapas kreisajā pusē [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1).

* Vai sensors ir reģistrēts, izmantojot [https://devices.sensor.community](https://devices.sensor.community), un vai sensors ir redzams kartē?
* Vai iepriekš bezvadu signāls ir bijis vājš?
  Šeit ir servera puses signāla protokols: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`.

#### Problēmas ar USB kabeli?
* Pārbaudiet barošanas avotu
* Restartēšana (atvienojiet strāvas padevi, piemēram, izvelciet USB kontaktdakšu).
* Vai WLAN konfigurācija ir kārtībā (sensors savienojas ar konfigurēto WLAN). Ja nē:
  * Vai sensors atver adhoc wifi (piekļuves punktu) pirmajās 2-7 minūtēs pēc restartēšanas?
  * Meklējiet WLAN tīklu `airrohr-[ID]`. Var paiet dažas minūtes pēc restartēšanas, līdz tas būs redzams.
* Pārbaudiet savā maršrutētājā, vai sensors ir reģistrēts tīklā, un atzīmējiet IP adresi.
  * alternatīvi izmantojiet "Meklēt tīklā" [airRohr Flashing Tool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/).
  * Ja jā: Savienojieties ar sensoru, izmantojot pārlūkprogrammu `http://[ip-your-sensor]`, jāparādās konfigurācijai.
  * Ja nē: tas varētu būt saistīts ar nepietiekamu strāvas padevi, restartēšanas cilpu vai tamlīdzīgi.
* Savienojiet NodeMCU ar datoru, izmantojot USB kabeli, un apskatiet protokolu.
  * Sekošana ar sērijas termināļa programmu (iestatījumi: Baud 9600, 8N1)
    * Linux: screen, minicom, cutecom
    * Windows: Tera Term
    * macOS: ekrāns, minicom, ...
    * var būt nepieciešami piemēroti USB-2 sērijas draiveri, skatīt [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen).
  * Tur redzēsiet, ko sensors dara (palaišanas ziņojumus, WLAN savienojumu vai piekļuves punktu, mērījumus - tikai pēc 3 minūtēm).

#### Problēmas ar elektroniku?
* Izņemiet sensora elektroniku no korpusa un aplūkojiet to tuvāk.
* Vēlreiz pārbaudiet barošanas avotu
    * Vai NodeMCU(ESP8266) mirgo īsi pēc restartēšanas?
    * SDS011: sarkanais LEDFan iedegas pēc restartēšanas?
    * Pārbaudiet sensoru kabeļus.

  <div class="max-w-screen-xl mx-auto pb-5">
    <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
    <div class="flex items-center">
          <span class="p-2 rounded-lg bg-indigo-500">
            <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5. 436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" >
            </svg>
          </span>
        <div class="flex-wrap flex">
          <p class="pt-1 text-indigo-700 font-medium">
              Trokšņi ir beta versijā. Sūtiet jautājumus uz<p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-whover:text-yellow-600">
                Noise@Sensor.Community</a>
        </div>
    </div>
  </div>
</div>