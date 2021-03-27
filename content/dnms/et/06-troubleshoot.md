---
title: Tõrkeotsing
---

### Probleemid ülekandmisel?
Sisestage oma brauserisse järgmised andmed:
`https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1&amp;var-chipID=esp8266-[ID]`

[ID] saab otsida ka lehekülje [https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1](https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1) vasakul pool avatud sisendväljal.

* Kas andur on registreeritud [https://devices.sensor.community](https://devices.sensor.community) kaudu ja kas andur on kaardil nähtav?
* Kas traadita signaal on varem olnud nõrk?
  Siin on serveripoolne signaaliprotokoll: `https://api-rrd.madavi.degrafanadFk6mw1WGzwifi-signal?orgId=1&amp;var-chipID=esp8266-[ID]`.

### Probleemid USB-kaabliga?
* Kontrollige toiteallikat
* Taaskäivitamine (katkestage vooluvõrk, nt tõmmake USB-pistik välja)
* Kas WLANi konfiguratsioon on korras (andur ühendub konfigureeritud WLANiga). Kui mitte:
  * Kas andur avab adhoc wifi (juurdepääsupunkt) esimese 2-7 minuti jooksul pärast taaskäivitamist?
  * Otsi WLAN-võrku `airrohr-[ID]`. Pärast taaskäivitamist võib kuluda paar minutit, kuni see on nähtav.
* Kontrollige oma ruuterist, kas andur on võrgus registreeritud ja märkige IP-aadress.
  * alternatiivselt kasutage [airRohr Flashing Tool](https://github.comopendata-stuttgartairrohr-firmware-flasher) valikut "Search in network".
  * Kui jah: ühendage anduriga brauseri kaudu `http://[ip-your-sensor]`, konfiguratsioon peaks ilmuma.
  * Kui ei: see võib olla tingitud ebapiisavast toiteallikast, taaskäivitusskeemist vms.
* Ühendage NodeMCU USB-kaabli kaudu arvutiga ja vaadake protokolli.
  * Jälgi jadaterminali programmiga (seaded: Baud 9600, 8N1)
    * Linux: ekraan, minicom, cutecom
    * Windows: Tera Term
    * macOS: ekraan, minicom, ...
    * Vajalikud võivad olla sobivad USB-2 jadaprogrammid, vt [https://github.comopendata-stuttgartmetawikiFirmware-einspielen](https://github.comopendata-stuttgartmetawikiFirmware-einspielen)
  * Seal peaksite nägema, mida andur teeb (käivitussõnumid, WLAN-ühendus või juurdepääsupunkt, mõõtmine - alles 3 minuti pärast).

### Probleemid elektroonikaga?
* Eemaldage anduri elektroonika korpusest ja vaadake seda lähemalt.
* Kontrollige uuesti toiteallikaid
    * Kas NodeMCU (ESP8266) vilgub kohe pärast taaskäivitamist?
    * SDS011: punane LEDVentilaator süttib pärast taaskäivitust?
    * Kontrollige uuesti andurite kaablid.

  <div class="max-w-screen-xl mx-auto pb-5">
    <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
    <div class="flex items-center">
          <span class="p-2 rounded-lg bg-indigo-500">
            <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5. 436 13,683A4,001 4,001 0 017 6h1,832c4,1 0 7,625-1,234 9,168-3v14c-1,543-1,766-5,067-3-9,168-3H7a3,988 3,988 0 01-1,564-,317z" >
            </svg>
          </span>
        <div class="flex-wrap flex">
          <p class="pt-1 text-indigo-700 font-medium">
              Müra on beeta-versioonis. Saada küsimused aadressile</p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community</a>
        </div>
    </div>
  </div>
</div>