---
title: Problēmu novēršana
---

### Pārraides problēmas?
Ievadiet pārlūkprogrammā šādus datus:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

[ID] var meklēt arī ievades laukā augšējā kreisajā stūrī [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1).

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
    * SDS011: sarkanais LED/ ventilators ieslēdzas pēc pārstartēšanas?
    * vēlreiz pārbaudiet/nomainiet kabeļus pie sensoriem.
