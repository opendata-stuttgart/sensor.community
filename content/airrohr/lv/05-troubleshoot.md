---
title: Problēmu novēršana
---

#### Pārraides problēmas?
Ievadiet pārlūkprogrammā šādus datus ar saviem datiem:
`https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1&amp;var-chipID=esp8266-[ID]`

[ID] var meklēt arī ievades laukā augšējā kreisajā stūrī [https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1](https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1).

* Vai sensors ir reģistrēts, izmantojot [https://devices.sensor.community](https://devices.sensor.community), un vai sensors ir redzams kartē?
    * Vai WLAN signāla līmenis iepriekš bija vājš?
        šeit ir signāla žurnāls servera pusē: `https://api-rrd.madavi.degrafanadFk6mw1WGzwifi-signal?orgId=1&amp;var-chipID=esp8266-[ID]`
        šeit ir signāla žurnāls servera pusē: `https://api-rrd.madavi.degrafanadFk6mw1WGzwifi-signal?orgId=1&amp;var-chipID=esp8266-[ID]`

#### USB kabeļa problēmas?
* Pārbaudiet strāvas padevi: USB kabelis
* Pārstartēšana (atvienojiet strāvas padevi, piemēram, izvelciet USB kontaktdakšu).
* Vai WLAN konfigurācija ir kārtībā (sensors savienojas ar konfigurēto WLAN) Ja nav:
    * vai sensors atver AP (pirmajās 2-7 minūtēs pēc restartēšanas)?
    * Meklējiet `airrohr-[ID]` WLAN tīklu. Pacietība, tas var aizņemt 1-2 minūtes pēc starta.
* Pārbaudiet savā maršrutētājā, vai sensors ir pieslēgts tīklam, un tad atcerieties IP adresi.
    * kā alternatīvu var izmantot "Discovery" [flashtool](https://github.comopendata-stuttgartairrohr-firmware-flasher)
    * Ja jā: izveidojiet savienojumu ar sensoru, izmantojot IP, izmantojot pārlūkprogrammu `http://[ip-of-the-sensor]` , jāparādās saskarnei.
    * Ja nē: ESP ir problēmas, piemēram, nepietiekams barošanas avots, restartēšanas cilpa vai tamlīdzīgi.
* Savienojiet USB ar datoru un skatiet žurnālu
    * Sekot tekstu sērijas interfeisā ar sērijas termināļa programmu (iestatījumi: sods 9600, 8N1)
        * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, ...
        * iespējams, joprojām ir nepieciešami piemēroti usb2serial draiveri, skatīt [https://github.comopendata-stuttgartmetawikiFirmware-einspielen](https://github.comopendata-stuttgartmetawikiFirmware-einspielen).
    * Tur vajadzētu būt iespējai redzēt, ko sensors dara (boot ziņojumi, WLAN savienojums vai AP, mērījumi - tikai pēc 3 minūtēm).

#### Elektronikas problēmas?
* Izņemiet sensora elektroniku no korpusa un novērojiet.
* Atkārtoti pārbaudiet un nomainiet barošanas avotu
    * vai ESP mirgo neilgi pēc restartēšanas?
    * SDS011: sarkanais LEDfāns ieslēdzas pēc restartēšanas?
    * vēlreiz pārbaudiet un nomainiet kabeļus uz sensoriem
