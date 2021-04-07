---
title: Draiveris un programmaparatūra
---

Mēs jau esam sagatavojuši programmaparatūru. Jums tikai jāinstalē draiveri un jāuzlādē NodeMCU (ESP8266) un Teensy 4.0 plates.
Lai sazinātos ar savu ESP8266, jums ir nepieciešami usb2serial draiveri jūsu operētājsistēmai.
NodeMCU v3 mikroshēmu komplekts parasti ir CH341, vienkārši pārbaudiet sava NodeMCU aizmugurē, lai atrastu tehnisko informāciju. Izvēlieties saiti, kas atbilst jūsu datora operētājsistēmai.

### Windows

#### V2 modeļa (CP2102) draiveri operētājsistēmai Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - operētājsistēmai Windows 10 vajadzētu spēt tos lejupielādēt automātiski.
* [Windows 7/8/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32 bitu versija - **neatbalsta** 64 bitu versijas OS

#### V3 modeļa (CH341) draiveris operētājsistēmai Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - operētājsistēmai Windows 10 vajadzētu spēt tos automātiski lejupielādēt.

#### Lejupielādēt lejupielādēto failu operētājsistēmai Windows
* V2: Atveriet mapi CP210x un divreiz noklikšķiniet uz programmas CP210xVCPInstaller_x64 (vai x86).
* V3: atveriet mapi CH341SER un divreiz noklikšķiniet uz programmas SETUP.

---

### MacOS

##### MacOS draiveri
* [NodeMCU V2] (https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

#### Izraksta lejupielādēto failu MacOS operētājsistēmai
* V2: Izpako mapi CP210x un divreiz noklikšķiniet uz programmas CP210xVCPInstaller_x64 (vai x86).
* V3: Izpako mapi CH341SER un divreiz noklikšķiniet uz programmas SETUP.
* Restartējiet Mac

---

### Linux
Draiveri nav jāinstalē. Mikroshēmai jābūt tieši atbalstāmai (iespējams pārbaudīt ar dmesg).

---
### Firmware Flasher NodeMCU
Vairāku operētājsistēmu atbalsts: Windows, MacOS un Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Avota kods](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Savienojiet NodeMCU ar datoru, izmantojot īsu micro-USB kabeli (izvēlieties īsāku par 1 metru, pretējā gadījumā instalēšana var neizdoties). Izvēlieties `latest_en.bin` (vai citu valodas versiju) un noklikšķiniet uz "Upload".
Pagaidiet, līdz process ir pabeigts. Tagad varam samontēt sensoru.
<br>
Liels paldies [Piotr, no Polijas](https://dropbox.inf.re/) par palīdzību! 🙋♂️

---
### Firmware Flasher Teensy
[Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Firmware) var atrast divu veidu firmware:
* .ino
* .hex

#### Teensy ielādētājs
Jūs varat ielādēt .hex failu Teensy platēs, izmantojot atsevišķu GUI programmatūru [Teensy Loader](https://www.pjrc.com/teensy/loader.html) operētājsistēmām Windows, Mac un Linux.
Pastāv arī komandrindas versija.

#### Teensyduino
Jūs varat ielādēt .ino failu Teensy platēs ar Arduino IDE paplašinājumu [Teensyduino](https://www.pjrc.com/teensy/teensyduino.html).
Ja nepieciešams, varat mainīt programmaparatūru tieši Arduino IDE vidē.