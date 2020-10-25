---
title: Driver & firmware
---

Przygotowaliśmy już firmware. Wystarczy zainstalować sterowniki i błysnąć płytkami NodeMCU (ESP8266) i Teensy 4.0. 

Do komunikacji z ESP8266 potrzebne są sterowniki usb2serial dla Twojego systemu operacyjnego. 

Chipset dla NocdeMCUs v3 jest zazwyczaj CH341, wystarczy sprawdzić z tyłu NodeMCU, aby znaleźć kilka informacji technicznych. Wybierz łącze, które odpowiada systemowi operacyjnemu twojego komputera.

### Windows

##### Sterowniki dla modelu V2 (CP2102) dla Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 powinien mieć możliwość automatycznego pobrania ich
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - wersja 32-bitowa - **nie** obsługująca 64-bitową wersję OS

##### Sterownik dla modelu V3 (CH341) dla Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 powinien mieć możliwość automatycznego pobrania ich

##### Rozpakuj pobrany plik dla systemu Windows:
* dla V2: Otwórz folder CP210x i kliknij dwukrotnie na aplikację CP210xVCPInstaller_x64 (lub x86).
* dla V3: otwórz folder CH341SER i kliknij dwukrotnie na SETUP aplikacji.

---

### MacOS

##### Sterowniki MacOS
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html) 

##### Wyodrębnienie pobranego pliku dla systemu MacOS.
* dla V2: Rozpakuj folder CP210x i kliknij dwukrotnie na aplikację CP210xVCPInstaller_x64 (lub x86).
* dla V3: Rozpakuj folder CH341SER i kliknij dwukrotnie na SETUP aplikacji.
* Zrestartuj komputer Mac

---

### Linux
Nie ma potrzeby instalowania sterowników. Chip powinien być obsługiwany bezpośrednio (weryfikowalny za pomocą dmesg)

---
### Firmware Flasher NodeMCU
Wsparcie dla wielu systemów operacyjnych: Windows, MacOS i Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Kod źródłowy](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)

Podłącz NodeMCU do komputera za pomocą krótkiego kabla micro-USB (wybierz jeden krótszy niż 1 m, w przeciwnym razie instalacja może się nie powieść). Wybierz `latest_en.bin` (lub inną wersję językową) i kliknij "Upload".
Poczekaj, aż proces zostanie zakończony. Teraz możemy zmontować czujnik.
<br>
Wielkie podziękowania dla [Piotra, z Polski](https://dropbox.inf.re/), za jego pomoc! 🙋♂️ 

---
### Firmware Flasher Teensy
W [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Firmware) można znaleźć dwa rodzaje firmware'u: 
* .ino
* .hex

##### Teensy Loader
Plik .hex w płytkach Teensy można błyskać za pomocą samodzielnego oprogramowania GUI [Teensy Loader](https://www.pjrc.com/teensy/loader.html) dla systemów Windows, Mac i Linux.
Istnieje również wersja z wiersza poleceń.

##### Teensyduino
Możesz migać plik .ino na tablicach Teensy z rozszerzeniem Arduino IDE [Teensyduino](https://www.pjrc.com/teensy/teensyduino.html).
W razie potrzeby, możesz zmodyfikować firmware bezpośrednio w Arduino IDE.