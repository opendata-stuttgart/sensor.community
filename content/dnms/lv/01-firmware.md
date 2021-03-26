
title: 
---

Mēs jau esam sagatavojuši programmaparatūru. Jums ir tikai jāinstalē draiveri un jāuzlādē NodeMCU (ESP8266) un Teensy 4.0 plates.

Lai sazinātos ar ESP8266, ir nepieciešami usb2serial draiveri jūsu operētājsistēmai.

NocdeMCU v3 mikroshēmu komplekts parasti ir CH341, vienkārši pārbaudiet savu NodeMCU aizmugurē, lai atrastu tehnisko informāciju. Izvēlieties saiti, kas atbilst jūsu datora operētājsistēmai.

#### Windows

##### Drivers for model V2 (CP2102) for Windows
* [Windows 10](https://www.silabs.comdocumentspublicsoftwareCP210x_Universal_Windows_Driver.zip) - operētājsistēmai Windows 10 vajadzētu spēt automātiski lejupielādēt šos dokumentus.
* [Windows 788.1](https://www.silabs.comdocumentspublicsoftwareCP210x_Windows_Drivers.zip) - 32 bitu versija - **neatbalsta** 64 bitu versiju OS

##### Draiveris modelim V3 (CH341) operētājsistēmai Windows
* [Windows](http://www.wch.cndownloadsfile5.html) - operētājsistēmai Windows 10 vajadzētu spēt automātiski lejupielādēt šos dokumentus.

##### Izņemiet lejupielādēto failu operētājsistēmai Windows:
* V2: Atveriet mapi CP210x un divreiz noklikšķiniet uz programmas CP210xVCPInstaller_x64 (vai x86).
* V3: atveriet mapi CH341SER un divreiz noklikšķiniet uz programmas SETUP.

---

#### MacOS

##### MacOS draiveri
* [NodeMCU V2](https://www.silabs.comdocumentspublicsoftwareMac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cndownloadsfile178.html)

##### Izņemiet lejupielādēto MacOS failu.
* V2: Atinstalējiet mapi CP210x un divreiz noklikšķiniet uz programmas CP210xVCPInstaller_x64 (vai x86).
* attiecībā uz V3: Izņemiet mapi CH341SER un divreiz noklikšķiniet uz programmas SETUP.
* Restartējiet Mac

---

#### Linux
Draiveri nav jāinstalē. Mikroshēmai jābūt tieši atbalstītai (iespējams pārbaudīt ar dmesg).

---
#### Firmware Flasher NodeMCU
Vairāku operētājsistēmu atbalsts: Windows, MacOS un Linux.

* [airRohr Flashing Tool](http://firmware.sensor.communityairrohrflashing-tool)
* [Avota kods](https://github.comopendata-stuttgartairrohr-firmware-flasher)

Savienojiet NodeMCU ar datoru, izmantojot īsu micro-USB kabeli (izvēlieties īsāku par 1 metru, pretējā gadījumā instalācija var neizdoties). Izvēlieties `latest_en.bin` (vai citu valodas versiju) un noklikšķiniet uz "Augšupielādēt".
Pagaidiet, līdz process ir pabeigts. Tagad varam samontēt sensoru.
<br>
Liels paldies [Piotr, no Polijas](https://dropbox.inf.re) par palīdzību! 🙋♂️

---
#### Firmware Flasher Teensy
[Helmut Bitter's Github](https://github.comhbitterDNMStreemasterFirmware) var atrast divu veidu programmaparatūru:
* .ino
* .hex

##### Teensy ielādētājs
Jūs varat ielādēt .hex failu Teensy platēs, izmantojot autonomo GUI programmatūru [Teensy Loader](https://www.pjrc.comteensyloader.html) operētājsistēmām Windows, Mac un Linux.
Pastāv arī komandrindas versija.

##### Teensyduino
.ino failu var ielādēt Teensy platēs ar Arduino IDE paplašinājumu [Teensyduino](https://www.pjrc.comteensyteensyduino.html).
Ja nepieciešams, varat pārveidot programmaparatūru tieši Arduino IDE.
