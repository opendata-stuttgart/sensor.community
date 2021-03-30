---
title: Juhi ja püsivara
---

Me juba valmistasime ette püsivara. Teil tuleb vaid paigaldada draiverid ja flashida oma NodeMCU (ESP8266).

NodeMCU-ga (ESP8266) suhtlemiseks vajate oma operatsioonisüsteemi usb2serial draiverit.

NocdeMCU v3 kiibistik on tavaliselt CH341, vaadake oma NodeMCU (ESP8266) tagaküljelt, et leida tehnilist teavet.

Valige link, mis vastab teie arvuti operatsioonisüsteemile.

### Windows

##### NodeMCU (ESP8266) V2 (CP2102) draiverid Windowsile
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 peaks olema võimeline neid automaatselt alla laadima.
* [Windows 788.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-bitine versioon - **ei toeta** 64-bitise versiooni operatsioonisüsteemi

##### Driver for NodeMCU (ESP8266) V3 (CH341) for Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 peaks olema võimeline neid automaatselt alla laadima.

##### Laaditud faili väljavõte Windowsi jaoks:
* NodeMCU (ESP8266) V2: Avage kaust CP210x ja tehke topeltklõps rakendusel CP210xVCPInstaller_x64 (või x86).
* NodeMCU (ESP8266) V3 puhul: avage kaust CH341SER ja tehke topeltklõps rakendusel SETUP.

---

### MacOS

##### MacOS draiverid
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### Laaditud faili ekstraheerimine MacOS-i jaoks.
* V2 jaoks: Paki kaust CP210x välja ja tee topeltklõps rakendusel CP210xVCPInstaller_x64 (või x86).
* V3 puhul: Paki lahti kaust CH341SER ja tee topeltklõps rakendusel SETUP.
* Taaskäivitage oma Mac

---

### Linux
Juhtseadmeid ei ole vaja paigaldada. Kiip peaks olema otse toetatud (kontrollitav dmesg abil).

---
### Firmware Flasher
Mitme operatsioonisüsteemi tugi: Windows, MacOS ja Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [lähtekood](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)

Ühendage NodeMCU arvutiga lühikese micro-USB-kaabli abil (valige lühike kaabel, mis on lühem kui 1 meeter, muidu võib paigaldus ebaõnnestuda). Valige `latest_en.bin` (või mõni muu keeleversioon) ja klõpsake nuppu "Upload".
Oodake, kuni protsess on lõppenud. Nüüd saame me anduri kokku panna.

#### Linux: Seadistage õigused käivitatavaks
Pärast allalaadimist peate võib-olla seadma loa käivitatavaks. Seda saab teha käsuga: `chmod o+x <laadimise failinimi>`.
<br>
Suur tänu [Piotrile, Poolast](https://dropbox.inf.re), tema abi eest! 🙋♂️

#### MacOS: kuidas käivitada kontrollimata rakendust
Tehke paremklõps ja avage rakendus mitu korda ning kinnitage alati "Ava".

Siin on lühike video Youtube'is 👉 https://youtu.be1KZiP94TYjw.




