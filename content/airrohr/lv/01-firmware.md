---
title: Draiveris un programmaparatūra
---

Mēs jau esam sagatavojuši programmaparatūru. Jums ir tikai jāinstalē draiveri un jāuzlādē NodeMCU (ESP8266).

Lai sazinātos ar savu NodeMCU (ESP8266), ir nepieciešami usb2serial draiveri jūsu operētājsistēmai.

NocdeMCU v3 mikroshēmu komplekts parasti ir CH341, vienkārši pārbaudiet savu NodeMCU (ESP8266) aizmugurē, lai atrastu tehnisko informāciju.

Izvēlieties saiti, kas atbilst jūsu datora operētājsistēmai.

#### Windows

##### Draiveri NodeMCU (ESP8266) V2 (CP2102) priekš Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - operētājsistēmai Windows 10 vajadzētu spēt automātiski lejupielādēt šos dokumentus.
* [Windows 788.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32 bitu versija - **neatbalsta** 64 bitu versiju OS

##### NodeMCU (ESP8266) V3 (CH341) draiveris operētājsistēmai Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - operētājsistēmai Windows 10 vajadzētu spēt automātiski lejupielādēt šos dokumentus.

##### Izņemiet lejupielādēto failu operētājsistēmai Windows:
* NodeMCU (ESP8266) V2: Atveriet mapi CP210x un divreiz noklikšķiniet uz programmas CP210xVCPInstaller_x64 (vai x86).
* NodeMCU (ESP8266) V3: atveriet mapi CH341SER un divreiz noklikšķiniet uz programmas SETUP.

---

#### MacOS

##### MacOS draiveri
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### Izņemiet lejupielādēto MacOS failu.
* V2: Atinstalējiet mapi CP210x un divreiz noklikšķiniet uz programmas CP210xVCPInstaller_x64 (vai x86).
* attiecībā uz V3: Izņemiet mapi CH341SER un divreiz noklikšķiniet uz programmas SETUP.
* Restartējiet Mac

---

#### Linux
Draiveri nav jāinstalē. Mikroshēmai jābūt tieši atbalstītai (iespējams pārbaudīt ar dmesg).

---
#### Firmware Flasher
Vairāku operētājsistēmu atbalsts: Windows, MacOS un Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Avota kods](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)

Savienojiet NodeMCU ar datoru, izmantojot īsu micro-USB kabeli (izvēlieties īsāku par 1 metru, pretējā gadījumā instalācija var neizdoties). Izvēlieties `latest_en.bin` (vai citu valodas versiju) un noklikšķiniet uz "Augšupielādēt".
Pagaidiet, līdz process ir pabeigts. Tagad varam samontēt sensoru.

#### Linux: Iestatiet atļaujas kā izpildāmo
Pēc lejupielādes, iespējams, būs jāiestata izpildāmā atļauja. To var izdarīt ar komandu: <izsūtāmā faila nosaukums>` `chmod o+x
<br>
Liels paldies [Piotr, no Polijas](https://dropbox.inf.re) par palīdzību! 🙋♂️

#### MacOS: kā palaist nepārbaudītu programmu
Vairākas reizes noklikšķiniet ar peles labo pogu un atveriet programmu, un vienmēr apstipriniet ar "Atvērt".

Šeit ir īss video Youtube vietnē 👉 https://youtu.be1KZiP94TYjw.




