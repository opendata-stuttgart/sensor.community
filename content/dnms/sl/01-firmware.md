---
title: Gonilnik, vdelana programska oprema
---

Vdelano programsko opremo smo že pripravili. Namestiti morate le gonilnike in flashati plošči NodeMCU (ESP8266) in Teensy 4.0.

Za komunikacijo s svojim ESP8266 potrebujete gonilnike usb2serial za svoj operacijski sistem.

Čipovje za enote NodeMCU v3 je običajno CH341, samo preverite zadnjo stran svoje enote NodeMCU, da najdete nekaj tehničnih informacij. Izberite povezavo, ki ustreza operacijskemu sistemu vašega računalnika.

### Windows

##### Gonilniki za model V2 (CP2102) za Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - operacijski sistem Windows 10 bi moral biti sposoben samodejno prenesti te
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-bitna različica - **ne podpirajo** 64-bitne različice OS

##### Gonilnik za model V3 (CH340/CH341) za Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - sistem Windows 10 bi jih moral biti sposoben samodejno prenesti

##### Izvleček prenesene datoteke za Windows
* za V2: Odprite mapo CP210x in dvakrat kliknite na aplikacijo CP210xVCPInstaller_x64 (ali x86)
* za V3: odprite mapo CH341SER in dvakrat kliknite na aplikacijo SETUP.

---

### MacOS

##### Gonilniki za MacOS
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### Izvleček prenesene datoteke za MacOS
* za V2: Razpakirajte mapo CP210x in dvakrat kliknite na aplikacijo CP210xVCPInstaller_x64 (ali x86).
* za V3: Razpakirajte mapo CH341SER in dvakrat kliknite na aplikacijo SETUP.
* Ponovno zaženite računalnik Mac

---

### Linux
Gonilnikov ni treba namestiti. Čip mora biti podprt neposredno (preverite z dmesg)

---
### Firmware Flasher NodeMCU
Podpora za več operacijskih sistemov: Windows, MacOS in Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Izvorna koda](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Napravo NodeMCU povežite z računalnikom s kratkim kablom micro-USB (izberite kabel, krajši od 1 metra, sicer namestitev morda ne bo uspešna). Izberite `latest_en.bin` (ali drugo jezikovno različico) in kliknite "Upload".
Počakajte, da se postopek zaključi. Zdaj lahko sestavimo senzor.
<br>
Velika zahvala gre [Piotru, iz Poljske](https://dropbox.inf.re/), za njegovo pomoč! 🙋♂️

---
### Firmware Flasher Teensy
Na Githubu [Helmuta Bitterja](https://github.com/hbitter/DNMS/tree/master/Firmware) lahko najdete dve vrsti strojne programske opreme:
* .ino
* .hex

##### Teensy Loader
Datoteko .hex v ploščah Teensy lahko flashnete s samostojno programsko opremo [Teensy Loader](https://www.pjrc.com/teensy/loader.html) za Windows, Mac in Linux.
Obstaja tudi različica za ukazno vrstico.

##### Teensyduino
Datoteko .ino lahko v plošče Teensy vklopite z razširitvijo Arduino IDE [Teensyduino](https://www.pjrc.com/teensy/teensyduino.html).
Po potrebi lahko vdelano programsko opremo spreminjate neposredno v Arduino IDE.