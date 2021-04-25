---
title: Draiveris un programmaparatūra
---


Mēs jau esam sagatavojuši programmaparatūru. Jums ir tikai jāinstalē draiveri un jāuzlādē NodeMCU (ESP8266).

Lai sazinātos ar savu NodeMCU (ESP8266), jums ir nepieciešami usb2serial draiveri jūsu operētājsistēmai.

NodeMCU v3 mikroshēmu komplekts parasti ir CH341, vienkārši pārbaudiet sava NodeMCU (ESP8266) aizmugurē, lai atrastu tehnisko informāciju.

Izvēlieties saiti, kas atbilst jūsu datora operētājsistēmai.

### Windows

#### NodeMCU (ESP8266) V2 (CP2102) draiveri operētājsistēmai Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - operētājsistēmai Windows 10 vajadzētu spēt automātiski lejupielādēt šos dokumentus.
* [Windows 7/8/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32 bitu versija - **neatbalsta** 64 bitu versijas OS.

#### NodeMCU (ESP8266) V3 (CH340/CH341) draiveris operētājsistēmai Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - operētājsistēmai Windows 10 vajadzētu spēt automātiski lejupielādēt šos dokumentus.

#### Lejupielādēt lejupielādēto failu operētājsistēmai Windows
* for NodeMCU (ESP8266) V2: Atveriet mapi CP210x un divreiz noklikšķiniet uz programmas CP210xVCPInstaller_x64 (vai x86).
* NodeMCU (ESP8266) V3: atveriet mapi CH341SER un divreiz noklikšķiniet uz programmas SETUP.

---

### MacOS

#### MacOS draiveri
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

#### Izņemiet lejupielādēto MacOS failu.
* V2: Izsaiņojiet mapi CP210x un divreiz noklikšķiniet uz programmas CP210xVCPInstaller_x64 (vai x86).
* V3: Izpako mapi CH341SER un divreiz noklikšķiniet uz programmas SETUP.
* Restartējiet Mac

---

### Linux
Draiveri nav jāinstalē. Mikroshēmai jābūt tieši atbalstāmai (iespējams pārbaudīt ar dmesg).

---
#### Firmware Flasher
Vairāku operētājsistēmu atbalsts: Windows, MacOS un Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Avota kods](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Savienojiet NodeMCU ar datoru, izmantojot īsu micro-USB kabeli (izvēlieties īsāku par 1 metru, pretējā gadījumā instalēšana var neizdoties). Izvēlieties `latest_en.bin` (vai citu valodas versiju) un noklikšķiniet uz "Upload".
Pagaidiet, līdz process ir pabeigts. Tagad varam samontēt sensoru.

#### Linux: Iestatiet atļaujas kā izpildāmo
Pēc lejuplādēšanas jums var būt nepieciešams iestatīt atļaujas kā izpildāmās. To var izdarīt ar komandu: <izsūtāmā faila nosaukums>``: `chmod o+x
<br>
Liels paldies [Piotr, no Polijas](https://dropbox.inf.re/) par palīdzību! 🙋♂️

#### MacOS: kā palaist nepārbaudītu lietotni
Vairākas reizes noklikšķiniet ar peles labo pogu un atveriet lietojumprogrammu, un vienmēr apstipriniet ar "Open".

Šeit ir īss video Youtube vietnē 👉 https://youtu.be/1KZiP94TYjw.




