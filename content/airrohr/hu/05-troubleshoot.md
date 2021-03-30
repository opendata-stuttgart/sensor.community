---
title: Hibaelhárítás
---

### Átviteli problémák?
Írja be az alábbiakat a böngészőbe a saját adataival:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

Az [ID] a bal felső sarokban lévő beviteli mezőben is kereshető [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1)

* Az érzékelő regisztrálva van a [https://devices.sensor.community](https://devices.sensor.community)-on keresztül, és az érzékelő látható a térképen?
    * A WLAN jelszintje gyenge volt a múltban?
        itt van a szerver oldali jelzési napló: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`
        itt van a szerver oldali jelzési napló: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`

### USB kábel problémák?
* Ellenőrizze a tápellátást: USB-kábel
* Újraindítás (húzza ki a tápellátást, pl. húzza ki az USB csatlakozót)
* Rendben van-e a WLAN konfiguráció (az érzékelő csatlakozik a konfigurált WLAN-hoz) Ha nem:
    * az érzékelő megnyit egy AP-t (az újraindítás utáni első 2-7 percben)?
    * Keresse meg az `airrohr-[ID]` WLAN hálózatot. Türelem, a rendszerindítás után 1-2 percig is eltarthat.
* Ellenőrizze a saját routerén, hogy az érzékelő be van-e jelentkezve a hálózatba, majd emlékezzen az IP címre.
    * alternatívaként használhatja a "Felfedezés" opciót a [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)
    * Ha igen: csatlakozzon az érzékelőhöz IP-n keresztül egy böngészővel `http://[ip-of-the-sensor]` , a felületnek meg kell jelennie.
    * Ha nem: az ESP-nek problémái vannak, pl. elégtelen tápellátás, újraindítási hurok vagy hasonló.
* Csatlakoztassa az USB-t a számítógéphez és nézze meg a naplót.
    * Szövegkövetés soros interfészen soros terminálprogrammal (Beállítások: baud 9600, 8N1)
        * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, ...
        * esetleg megfelelő usb2serial illesztőprogramokra van még szükség, lásd [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
    * Itt láthatod, hogy mit csinál az érzékelő (boot üzenetek, WLAN kapcsolat vagy AP, mérés - csak 3 perc után).

### Elektronikai problémák?
* Vegye ki az érzékelő elektronikát a házból és figyelje meg
* Ellenőrizze újra a tápegységet
    * az ESP röviddel újraindítás után villog?
    * SDS011: piros LEDfan újraindítás után?
    * ellenőrizze újra az érzékelőkhöz vezető kábeleket
