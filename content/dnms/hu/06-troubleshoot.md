---
title: Hibaelhárítás
---

### Problémák az átutalással?
Írja be az alábbiakat a böngészőjébe a saját adataival:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

Az [ID] az oldal bal oldalán megnyitott [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1) beviteli mezőben is kereshető.

* Az érzékelő regisztrálva van a [https://devices.sensor.community](https://devices.sensor.community)-on keresztül, és az érzékelő látható a térképen?
* A vezeték nélküli jel gyenge volt a múltban?
  Íme a szerveroldali jelzési protokoll: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`.

### Problémák az USB-kábellel?
* Ellenőrizze a tápegységet
* Újraindítás (húzza ki a tápellátást, pl. húzza ki az USB csatlakozót)
* Rendben van-e a WLAN-konfiguráció (az érzékelő csatlakozik a konfigurált WLAN-hoz). Ha nem:
  * Az érzékelő az újraindítás utáni első 2-7 percben adhoc wifit (hozzáférési pontot) nyit?
  * Keresse meg a WLAN hálózatot `airrohr-[ID]`. Az újraindítás után néhány percig eltarthat, amíg ez láthatóvá válik.
* Ellenőrizze a saját routerén, hogy az érzékelő regisztrálva van-e a hálózatban, és jegyezze fel az IP-címet.
  * alternatívaként használhatja a [airRohr Flashing Tool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/) "Keresés a hálózatban" opcióját.
  * Ha igen: Csatlakozzon az érzékelőhöz egy böngészőn keresztül `http://[ip-az-érzékelője]`, a konfigurációnak meg kell jelennie.
  * Ha nem: ez lehet az elégtelen tápellátás, újraindítási hurok vagy hasonló hiba.
* Csatlakoztassa a NodeMCU-t egy USB-kábelen keresztül egy számítógéphez, és nézze meg a protokollt.
  * Pálya egy soros terminál programmal (beállítások: Baud 9600, 8N1)
    * Linux: képernyő, minicom, cutecom
    * Windows: Tera Term
    * macOS: képernyő, minicom, ...
    * megfelelő USB-2 soros illesztőprogramokra lehet szükség, lásd [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
  * Itt láthatja, hogy mit csinál az érzékelő (boot üzenetek, WLAN kapcsolat vagy hozzáférési pont, mérés - csak 3 perc múlva).

### Problémák az elektronikával?
* Vegye ki az érzékelő elektronikáját a házból, és nézze meg alaposan.
* Ellenőrizze újra a tápegységet
    * A NodeMCU (ESP8266) röviddel az újraindítás után villog?
    * SDS011: piros LEDFan világít újraindítás után?
    * Ellenőrizze újra az érzékelőkhöz vezető kábeleket.

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
