---
title: Troubleshoot
---

### Problemy z transmisją?
Wprowadź poniższe dane w przeglądarce z własnymi danymi:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

[ID] można również wyszukać w polu wprowadzania w lewym górnym rogu tej strony [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1)

* Czy czujnik jest zarejestrowany przez [https://devices.sensor.community/](https://devices.sensor.community/) i czy jest on widoczny na mapie?
* Czy w przeszłości poziom sygnału WLAN był słaby?
    Tutaj znajduje się serwer logów sygnałowych: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`
        

### Problemy z kablami USB?
* Sprawdzić zasilanie: Kabel USB
* Reboot (odłączyć zasilanie, np. wyciągnąć wtyczkę USB)
* Czy WLAN Config OK (czujnik łączy się z skonfigurowaną siecią WLAN) Jeśli nie:
    * czy czujnik otwiera AP (w ciągu pierwszych 2-7 minut po restarcie)?
    * Poszukaj `airrohr-[ID]` sieci WLAN. Cierpliwości, może to potrwać 1-2 minuty po uruchomieniu.
* Sprawdź na własnym routerze, czy czujnik jest zalogowany do sieci, a następnie zapamiętaj IP 
    * alternatywnie użyć "Discovery" w [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
    * Jeśli tak: połączyć się z czujnikiem przez IP za pomocą przeglądarki `http://[ip-of-the-sensor]/` , powinien pojawić się interfejs 
    * Jeśli nie: ESP ma problemy, np. niewystarczające zasilanie, pętla restartu lub podobne.
* Podłączyć USB do komputera i przejrzeć dziennik 
    * Tekst ścieżki na interfejsie szeregowym z programem terminala szeregowego (Ustawienia: baud 9600, 8N1)
        * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: ekran, minicom, ...
        * ewentualnie odpowiednie sterowniki usb2serialne są nadal potrzebne, patrz [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)                                                                                                                                                                                                                                                                                                                      
    * Tam powinno być widać, co robi czujnik (komunikaty startowe, połączenie WLAN lub AP, pomiar - dopiero po 3 minutach)

### Problemy z elektroniką?
* Wyjmij elektronikę czujnika z obudowy i obserwuj
* Sprawdź/wymień ponownie zasilanie
    * czy ESP miga krótko po restarcie?
    * SDS011: czerwona dioda LED/wentylator włącza się po restarcie?
    * sprawdź/wymień kable do czujników ponownie
