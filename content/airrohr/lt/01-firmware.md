---
title: Vairuotojas ir programinė įranga
---

Mes jau paruošėme programinę įrangą. Jums tereikia įdiegti tvarkykles ir įjungti savo NodeMCU (ESP8266).

Kad galėtumėte bendrauti su savo NodeMCU (ESP8266), jums reikia usb2serial tvarkyklių savo operacinei sistemai.

NodeMCU v3 mikroschemų rinkinys paprastai yra CH341, tiesiog patikrinkite savo NodeMCU (ESP8266) nugarėlę ir raskite techninę informaciją.

Pasirinkite nuorodą, atitinkančią jūsų kompiuterio operacinę sistemą.

### Windows

#### NodeMCU (ESP8266) V2 (CP2102) tvarkyklės "Windows" sistemai
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - "Windows 10" turėtų galėti automatiškai atsisiųsti šiuos
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32 bitų versija - **nepalaiko** 64 bitų versijos OS

#### "NodeMCU" (ESP8266) V3 (CH340/CH341) tvarkyklė, skirta "Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - "Windows 10" turėtų būti galima automatiškai atsisiųsti šiuos

#### Išskleiskite atsisiųstą "Windows" failą
* for NodeMCU (ESP8266) V2: Atidarykite aplanką CP210x ir dukart spustelėkite programą CP210xVCPInstaller_x64 (arba x86)
* NodeMCU (ESP8266) V3: atidarykite aplanką CH341SER ir dukart spustelėkite programą SETUP.

---

### MacOS

#### MacOS tvarkyklės
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

#### Ištraukite atsisiųstą "MacOS" failą
* V2: Išpakuokite aplanką CP210x ir dukart spustelėkite programą CP210xVCPInstaller_x64 (arba x86).
* V3: išpakuokite aplanką CH341SER ir dukart spustelėkite programą SETUP.
* Iš naujo paleiskite "Mac" kompiuterį

---

### Linux
Jokių tvarkyklių diegti nereikia. Mikroschema turėtų būti palaikoma tiesiogiai (galima patikrinti naudojant dmesg)

---
#### Firmware Flasher
Kelių operacinių sistemų palaikymas: "Windows", "MacOS" ir "Linux".

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Šaltinio kodas](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Prijunkite "NodeMCU" prie kompiuterio trumpu micro-USB kabeliu (pasirinkite trumpesnį nei 1 m, kitaip diegimas gali nepavykti). Pasirinkite `latest_en.bin` (arba kitą kalbinę versiją) ir spustelėkite "Upload" (įkelti).
Palaukite, kol procesas bus baigtas. Dabar galime surinkti jutiklį.

#### Linux: Nustatykite leidimus kaip vykdytiną
Po atsisiuntimo gali tekti nustatyti leidimą kaip vykdomąjį. Tai galima padaryti komanda: Atsisiųsti failą: `chmod o+x <atsisiunčiamo failo pavadinimas>``.
<br>
Didelis ačiū [Piotr, iš Lenkijos](https://dropbox.inf.re/), už pagalbą! 🙋♂️

#### MacOS: kaip paleisti nepatikrintą programą
Dešiniuoju pelės mygtuku spustelėkite ir kelis kartus atidarykite programą ir visada patvirtinkite "Open".

Štai trumpas vaizdo įrašas "Youtube" 👉 https://youtu.be/1KZiP94TYjw






