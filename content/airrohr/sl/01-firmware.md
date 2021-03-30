---
title: Gonilnik in vdelana programska oprema
---

Vdelano programsko opremo smo že pripravili. Namestiti morate le gonilnike in flashniti svoj NodeMCU (ESP8266).

Za komunikacijo s svojim NodeMCU (ESP8266) potrebujete gonilnike usb2serial za svoj operacijski sistem.

Čipovski nabor za enote NocdeMCU v3 je običajno CH341, če želite poiskati nekaj tehničnih informacij, preverite zadnjo stran enote NodeMCU (ESP8266).

Izberite povezavo, ki ustreza operacijskemu sistemu vašega računalnika.

### Windows

##### Gonilniki za NodeMCU (ESP8266) V2 (CP2102) za Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - operacijski sistem Windows 10 bi moral biti sposoben samodejno prenesti te
* [Windows 788.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-bitna različica - **ne podpira** 64-bitne različice OS

##### Gonilnik za NodeMCU (ESP8266) V3 (CH341) za Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - operacijski sistem Windows 10 bi moral biti sposoben samodejno prenesti te

##### Izvleček prenesene datoteke za Windows:
* za NodeMCU (ESP8266) V2: Odprite mapo CP210x in dvakrat kliknite na aplikacijo CP210xVCPInstaller_x64 (ali x86)
* za NodeMCU (ESP8266) V3: odprite mapo CH341SER in dvakrat kliknite aplikacijo SETUP.

---

### MacOS

##### Gonilniki za MacOS
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### Izvleček prenesene datoteke za MacOS.
* za V2: Razpakirajte mapo CP210x in dvakrat kliknite na aplikacijo CP210xVCPInstaller_x64 (ali x86)
* za V3: Razpakirajte mapo CH341SER in dvakrat kliknite na aplikacijo SETUP.
* Ponovni zagon računalnika Mac

---

### Linux
Gonilnikov ni treba namestiti. Čip mora biti podprt neposredno (preveri se z dmesg)

---
#### Firmware Flasher
Podpora za več operacijskih sistemov: Windows, MacOS in Linux.

* [AirRohr Flashing Tool] (http://firmware.sensor.community/airrohr/flashing-tool/)
* [Izvorna koda](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Povežite NodeMCU z računalnikom s kratkim kablom micro-USB (izberite kabel, ki je krajši od 1 metra, sicer namestitev morda ne bo uspešna). Izberite `latest_en.bin` (ali drugo jezikovno različico) in kliknite "Upload".
Počakajte, da se postopek konča. Zdaj lahko sestavimo senzor.

#### Linux: Nastavitev dovoljenj kot izvršljivega
Po prenosu boste morda morali dovoljenje nastaviti na izvedljivo. To lahko storite z ukazom: `chmod o+x <naslov datoteke za prenos>`
<br>
Velika zahvala gre [Piotru iz Poljske](https://dropbox.inf.re) za pomoč! 🙋♂️

#### MacOS: kako zagnati nepreverjeno aplikacijo
Z desno tipko miške večkrat kliknite in odprite aplikacijo ter jo vedno potrdite z "Odpri".

Tukaj je kratek video na YouTubu 👉 https://youtu.be1KZiP94TYjw




