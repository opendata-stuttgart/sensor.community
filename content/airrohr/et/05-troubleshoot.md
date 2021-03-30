---
title: Tõrkeotsing
---

### Probleemide edastamine?
Sisestage brauserisse järgmised andmed:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

[ID] saab otsida ka vasakus ülanurgas olevast sisendväljast [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1)

* Kas andur on registreeritud [https://devices.sensor.community](https://devices.sensor.community) kaudu ja kas andur on kaardil nähtav?
    * Kas WLAN-signaali tase oli varem nõrk?
        siin on serveripoolne signaallogi: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`
        siin on serveripoolne signaallogi: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`

### USB-kaabli probleemid?
* Kontrollige toiteallikat: USB-kaabel
* Taaskäivitus (katkestage toide, nt tõmmake USB-pistik)
* Kas WLAN Config on OK (andur ühendub konfigureeritud WLANiga) Kui mitte:
    * kas andur avab AP (esimese 2-7 minuti jooksul pärast taaskäivitust)?
    * Otsi `airrohr-[ID]` WLAN võrku. Kannatlikkus, see võib võtta 1-2 minutit pärast käivitamist.
* Kontrollige oma marsruuteril, kas andur on võrku sisse logitud, siis jätke IP meelde.
    * alternatiivselt kasuta [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/) "Discovery".
    * Kui jah: ühendage anduriga IP kaudu brauseriga `http://[ip-of-the-sensor]` , peaks ilmuma kasutajaliides.
    * Kui ei: ESP-l on probleeme, nt ebapiisav toiteallikas, taaskäivitusskeem vms.
* Ühendage USB arvutiga ja vaadake logi
    * Jälgi teksti jadaliidesel jadaterminali programmiga (seaded: baud 9600, 8N1)
        * Linux: ekraan, minicom, cutecom; Windows: MacOS: ekraan, minicom, ...
        * võimalusel on vaja veel sobivaid usb2serial draivereid, vt [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
    * Seal peaks olema võimalik näha, mida andur teeb (käivitussõnumid, WLAN ühendus või AP, mõõtmine - ainult 3 minuti pärast).

### Elektroonikaprobleemid?
* Eemaldage anduri elektroonika korpusest ja jälgige
* Kontrollige uuesti toiteallikat
    * kas ESP vilgub vahetult pärast taaskäivitust?
    * SDS011: punane LED-fänn põleb pärast taaskäivitust?
    * kontrollige uuesti andurite kaablite asendamist
