---
title: Hibaelhárítás
---

### Átviteli problémák?
Írja be az alábbiakat a böngészőbe a saját adataival:
`https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1&var-chipID=esp8266-[ID]`

Az [ID] a bal felső sarokban lévő beviteli mezőben is kereshető [https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1](https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1)

* Az érzékelő regisztrálva van a [https://devices.sensor.community/](https://devices.sensor.community/) segítségével, és az érzékelő látható a térképen?
  * A WLAN jelszintje gyenge volt a múltban?
    Itt van a szerveroldali jelnapló: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`



### USB kábel problémák?
* Ellenőrizze a tápellátást: USB-kábel
* Újraindítás (húzza ki a tápellátást, pl. húzza ki az USB-dugót).
* Rendben van-e a WLAN konfiguráció (az érzékelő csatlakozik a konfigurált WLAN-hoz) Ha nem:
  * Az érzékelő megnyit egy AP-t (az újraindítást követő első 2-7 percben)?
  * Keresse meg az `airrohr-[ID]` WLAN hálózatot. Türelem, a rendszerindítás után 1-2 percig is eltarthat.
* Ellenőrizze a saját routerén, hogy az érzékelő be van-e jelentkezve a hálózatba, majd jegyezze meg az IP-t.
  * alternatívaként használd a [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher//) "Discovery"-t.
  * Ha igen: csatlakozzon az érzékelőhöz IP-n keresztül egy böngészővel `http://[ip-of-the-sensor]/` , a felületnek meg kell jelennie.
  * Ha nem: az ESP-nek problémái vannak, pl. elégtelen tápellátás, újraindítási hurok vagy hasonló.
* Csatlakoztassa az USB-t a számítógéphez, és nézze meg a naplót.
  * Kövesse a szöveget a soros interfészen soros terminálprogrammal (beállítások: baud 9600, 8N1).
    * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, ...
    * esetleg még megfelelő usb2serial illesztőprogramok szükségesek, lásd [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
  * Ott kellene látni, hogy mit csinál az érzékelő (boot üzenetek, WLAN kapcsolat vagy AP, mérés - csak 3 perc után).

### Elektronikai problémák?
* Vegye ki a szenzor elektronikáját a házból és figyelje meg
* Ellenőrizze/cserélje újra a tápegységet
  * Az ESP röviddel újraindítás után villog?
  * Teensy: piros LED villog az újraindítás után?
  * Ellenőrizze/cserélje újra az érzékelőkhöz vezető kábeleket.

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
                A zaj béta verzióban van. Kérdéseket a</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>