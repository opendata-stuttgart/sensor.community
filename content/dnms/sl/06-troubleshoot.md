---
title: Odpravljanje težav
---

##### Težave z oddajanjem?
V brskalnik vnesite naslednje podatke:
`https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1&var-chipID=esp8266-[ID]`

[ID] lahko poiščete tudi v vnosnem polju v levem zgornjem kotu [https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1](https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1)

* Ali je senzor registriran prek [https://devices.sensor.community/](https://devices.sensor.community/) in ali je senzor viden na zemljevidu?
  * Ali je bila raven signala WLAN v preteklosti šibka?
    Tukaj je dnevnik signala na strani strežnika: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`



### težave s kablom USB?
* Preverite napajanje: Preverite napajanje kabla USB.
* Ponovni zagon (odklopite napajanje, npr. izvlecite vtič USB)
* Ali je konfiguracija WLAN v redu (senzor se poveže z nastavljenim omrežjem WLAN) Če ni:
  * Ali senzor odpre dostopno točko (v prvih 2-7 minutah po ponovnem zagonu)?
  * Poiščite omrežje WLAN `airrohr-[ID]`. Potrpežljivost, po zagonu lahko traja 1-2 minuti.
* Na svojem usmerjevalniku preverite, ali je senzor prijavljen v omrežje, nato si zapomnite IP
  * alternativno uporabite "Discovery" v [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher//)
  * Če je odgovor pritrdilen: povežite se s senzorjem prek IP z brskalnikom `http://[ip-senzorja]/` , prikazati se mora vmesnik
  * Če ne: ESP ima težave, npr. nezadostno napajanje, zanka ponovnega zagona ali podobno
* Povežite USB z računalnikom in si oglejte dnevnik
  * Spremljajte besedilo na serijskem vmesniku s programom za serijski terminal (nastavitve: baud 9600, 8N1)
    * Linux: screen, minicom, cutecom; Windows: MacOS: screen, minicom, ...
    * po možnosti so še vedno potrebni ustrezni gonilniki usb2serial, glejte [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
  * Tam bi morali imeti možnost videti, kaj senzor počne (zagonska sporočila, povezavo WLAN ali AP, meritve - šele po 3 minutah).

### Težave z elektroniko?
* Odstranite elektroniko senzorja iz ohišja in opazujte
* Ponovno preverite/zamenjajte napajanje
  * Ali ESP utripa kmalu po ponovnem zagonu?
  * Teensy: utripa rdeča dioda LED po ponovnem zagonu?
  * ponovno preverite/zamenjajte kable do senzorjev