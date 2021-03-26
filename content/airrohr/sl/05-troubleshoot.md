---
title: Odpravljanje težav
---

#### Težave z oddajanjem?
V brskalnik vnesite naslednje podatke:
`https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1&amp;var-chipID=esp8266-[ID]`

[ID] lahko poiščete tudi v vnosnem polju v zgornjem levem kotu [https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1](https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1).

* Ali je senzor registriran prek [https://devices.sensor.community](https://devices.sensor.community) in ali je senzor viden na zemljevidu?
    * Ali je bil signal omrežja WLAN v preteklosti šibek?
        tukaj je dnevnik signala na strani strežnika: `https://api-rrd.madavi.degrafanadFk6mw1WGzwifi-signal?orgId=1&amp;var-chipID=esp8266-[ID]`
        tukaj je dnevnik signala na strani strežnika: `https://api-rrd.madavi.degrafanadFk6mw1WGzwifi-signal?orgId=1&amp;var-chipID=esp8266-[ID]`

### Težave s kablom USB?
* Preverite napajanje: Kabel USB
* Ponovni zagon (odklopite napajanje, npr. izvlecite vtič USB)
* Ali je konfiguracija WLAN v redu (senzor se poveže z nastavljenim omrežjem WLAN) Če ni:
    * senzor odpre AP (v prvih 2-7 minutah po ponovnem zagonu)?
    * Poiščite `airrohr-[ID]` omrežje WLAN. Po zagonu lahko traja 1-2 minuti.
* Na svojem usmerjevalniku preverite, ali je senzor prijavljen v omrežje, in si zapomnite naslov IP.
    * alternativno uporabite "Discovery" v [flashtool](https://github.comopendata-stuttgartairrohr-firmware-flasher)
    * Če je odgovor pritrdilen: povežite se s senzorjem prek IP z brskalnikom `http://[ip-senzorja]` , prikazati se mora vmesnik
    * Če ne: ESP ima težave, npr. nezadostno napajanje, zanka ponovnega zagona in podobno.
* Povežite USB z računalnikom in si oglejte dnevnik
    * Sledenje besedilu na serijskem vmesniku s programom za serijski terminal (Nastavitve: baud 9600, 8N1)
        * Linux: screen, minicom, cutecom; Windows: MacOS: screen, minicom, ...
        * še vedno so potrebni ustrezni gonilniki usb2serial, glejte [https://github.comopendata-stuttgartmetawikiFirmware-einspielen](https://github.comopendata-stuttgartmetawikiFirmware-einspielen)
    * Tam bi morali videti, kaj senzor počne (zagonska sporočila, povezava WLAN ali AP, meritve - šele po 3 minutah).

#### Težave z elektroniko?
* Odstranite elektroniko senzorja iz ohišja in opazujte
* Ponovno preverite in zamenjajte napajalnik
    * ESP utripa kmalu po ponovnem zagonu?
    * SDS011: rdeči LEDfan se prižge po ponovnem zagonu?
    * ponovno preverite in zamenjajte kable do senzorjev
