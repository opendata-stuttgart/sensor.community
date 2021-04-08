---
title: Tõrkeotsing
---

---
pealkiri:
---

### Probleemide edastamine?
Sisestage brauseris oma andmetega järgmine:
`https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1&var-chipID=esp8266-[ID]`

[ID] saab otsida ka vasakus ülanurgas olevast sisendväljast [https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1](https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1)

* Kas andur on registreeritud [https://devices.sensor.community/](https://devices.sensor.community/) kaudu ja kas andur on kaardil nähtav?
  * Kas WLAN-signaali tase oli varem nõrk?
    siin on serveripoolne signaalilogi: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`



### USB-kaabli probleemid?
* Kontrollige toiteallikat: USB-kaabel
* Taaskäivitage (ühendage toiteallikas lahti, nt tõmmake USB-pistik välja).
* Kas WLAN Config on OK (andur ühendub konfigureeritud WLANiga) Kui ei ole:
  * kas andur avab AP (esimese 2-7 minuti jooksul pärast taaskäivitust)?
  * Otsige `airrohr-[ID]` WLAN-võrku. Kannatlikkus, see võib võtta 1-2 minutit pärast alglaadimist.
* Kontrollige oma ruuteril, kas andur on võrku sisse logitud, siis mäletage IP-d.
  * alternatiivselt kasuta [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher//) "Discovery".
  * Kui jah: ühendage anduriga IP kaudu brauseriga `http://[ip-of-the-sensor]/` , peaks ilmuma liides.
  * Kui ei: ESP-l on probleeme, nt ebapiisav toiteallikas, taaskäivitusskeem vms.
* Ühendage USB-ühendus arvutiga ja vaadake logi.
  * Jälgige teksti jadaliidesel jadaterminali programmiga (seaded: baud 9600, 8N1).
    * Linux: ekraan, minicom, cutecom; Windows: Tera Term; MacOS: ekraan, minicom, ...
    * Võimalik, et on vaja veel sobivaid usb2serial draivereid, vt [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
  * seal peaks olema võimalik näha, mida sensor teeb (boot-teated, WLAN-ühendus või AP, mõõtmine - alles 3 minuti pärast)

### Elektroonikaprobleemid?
* Eemaldage anduri elektroonika korpusest ja jälgige
* Kontrollige/asendage uuesti toiteallikat
  * Kas ESP vilgub vahetult pärast taaskäivitamist?
  * Teensy: punane LED vilgub pärast taaskäivitust?
  * kontrollige/asendage uuesti andurite kaablid.




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
                Müra on beeta-versioonis. Saada küsimused aadressile</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>
