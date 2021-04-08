---
title: Vairuotojas ir programinė įranga
---

Mes jau paruošėme programinę įrangą. Jums tereikia įdiegti tvarkykles ir įjungti "NodeMCU" (ESP8266) ir "Teensy 4.0" plokštes.

Kad galėtumėte bendrauti su savo ESP8266, jums reikia usb2serial tvarkyklių jūsų operacinei sistemai.

NodeMCU v3 mikroschemų rinkinys paprastai yra CH341, tiesiog patikrinkite savo NodeMCU nugarėlę ir rasite techninę informaciją. Pasirinkite nuorodą, atitinkančią jūsų kompiuterio operacinę sistemą.

### Windows

#### V2 modelio (CP2102) tvarkyklės "Windows" sistemai
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - "Windows 10" turėtų galėti juos atsisiųsti automatiškai
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32 bitų versija - **nepalaiko** 64 bitų versijos OS

#### V3 modelio (CH341) tvarkyklė "Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - "Windows 10" turėtų būti galima automatiškai atsisiųsti

#### Ištraukite atsisiųstą "Windows" failą
* V2 versijai: Atidarykite aplanką CP210x ir dukart spustelėkite programą CP210xVCPInstaller_x64 (arba x86).
* V3 atveju: atidarykite aplanką CH341SER ir dukart spustelėkite programą SETUP.

---

### MacOS

##### MacOS tvarkyklės
* [NodeMCU V2] (https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

#### Ištraukite atsisiųstą MacOS failą
* V2: Išpakuokite aplanką CP210x ir dukart spustelėkite programą CP210xVCPInstaller_x64 (arba x86).
* V3: išpakuokite aplanką CH341SER ir dukart spustelėkite programą SETUP.
* Iš naujo paleiskite "Mac" kompiuterį

---

### Linux
Jokių tvarkyklių diegti nereikia. Mikroschema turėtų būti palaikoma tiesiogiai (galima patikrinti naudojant dmesg)

---
### Firmware Flasher NodeMCU
Kelių operacinių sistemų palaikymas: "Windows", "MacOS" ir "Linux".

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Šaltinio kodas](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Prijunkite "NodeMCU" prie kompiuterio trumpu micro-USB kabeliu (pasirinkite trumpesnį nei 1 m, kitaip diegimas gali nepavykti). Pasirinkite `latest_en.bin` (arba kitą kalbinę versiją) ir spustelėkite "Upload" (įkelti).
Palaukite, kol procesas bus baigtas. Dabar galime surinkti jutiklį.
<br>
Didelis ačiū [Piotrui iš Lenkijos](https://dropbox.inf.re/) už pagalbą! 🙋♂️

---
### Firmware Flasher Teensy
[Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/Firmware) galima rasti dviejų rūšių firmware:
* .ino
* .hex

#### Teensy įkroviklis
.hex failą "Teensy" plokštėse galite įkelti naudodami atskirą "Windows", "Mac" ir "Linux" skirtą GUI programinę įrangą [Teensy Loader](https://www.pjrc.com/teensy/loader.html).
Taip pat yra komandinės eilutės versija.

#### Teensyduino
.ino failą galite įkelti į "Teensy" plokštes su "Arduino IDE" plėtiniu [Teensyduino](https://www.pjrc.com/teensy/teensyduino.html).
Jei reikia, galite keisti programinę įrangą tiesiogiai "Arduino IDE" aplinkoje.
