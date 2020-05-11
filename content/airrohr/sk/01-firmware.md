---
title: Ovládače a firmvér
---

Nebojte sa nemusíte vedieť programovať. Všetko je pre vás pripravené a naprogramované. Vy už pripravený program, ktorý bude ovládať merač (firmvér), len nainštalujete do modulu NodeMCU (ESP8266).

Aby váš počítač dokázal komunikovať s ESP8266, potrebujete ovládač usb2serial pre váš operačný systém.

ESP8266 môže používať čipset CP2102 (staršia verzia), alebo CH341 (nová verzia). Ak neviete, či máte CH341, alebo CP2102 poriadne si modul z každej strany poobzerajte. Vo väčšine prípadov túto informáciu nájdete na jeho zadnej strane.

Potom vyberte príslušný odkaz, ktorý zodpovedá operačnému systému vášho počítača a čipsetu.

### Windows

##### Ovládač modelu V2 (CP2102) pre Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Systém Windows 10 by mal byť schopný tieto súbory stiahnuť automaticky.
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-bitová verzia - **nepodporuje** 64-bitovú verziu Windowsu.

##### Ovládač modelu V3 (CH341) pre Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Systém Windows 10 by mal byť schopný tieto súbory stiahnuť automaticky.

##### Rozbaľte súbory stiahnuté pre Windows:
* pre V2: otvorte priečinok CP210x a dvojklikom spustite súbor CP210xVCPInstaller_x64 (or x86)
* pre V3: otvorte priečinok CH341SER a dvojklikom spustite súbor SETUP

---

### MacOS

#####  MacOS ovládače
* [NodeMCU V2 CP2102](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3 CH341](http://www.wch.cn/downloads/file/178.html)

#####  Rozbaľte súbory stiahnuté pre MacOS:
* pre V2: Rozbaľte priečinok CP210x a dvojklikom spustite súbor CP210xVCPInstaller_x64 (alebo x86).
* pre V3: Rozbaľte priečinok CH341SER a dvojklikom spustite súbor SETUP.
* Reštartujte váš Mac.

---

### Linux
Nemusíte inštalovať ovládače. Čip by mal byť podporovaný priamo (kontrolu môžete vykonať s dmesg).

---
### Nástroj na inštaláciu firmvéru
Podporuje viaceré operačné systémy: Windows, MacOS a Linux.
V zozname, ktorý sa zobrazí po kliknutí airRohr Flashing Tool, kliknite na link zhodný s vašim operačným systémom.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Zdrojový kód (GitHub)](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)

Pripojte k počítaču modul ESP8266 prostredníctvom micro-USB kábla. Tento kábel by nemal byť dlhší ako jeden meter. Ak bude dlhší, môže dôjsť k zlyhaniu inštalácie.
Pri položke Firmware verzia vyberte zo zoznamu súbor `latest_sk.bin` (alebo iný jazyk, ktorý vám vyhovuje). Stlačte tlačítko Nahrať a počkajte na dokončenie nahrávania.
Teraz môžete pokračovať k samotnému poskladaniu merača.
<br>
Veľká vďaka patrí [Piotrovi z Poľska](https://dropbox.inf.re/), za jeho pomoc! 🙋‍♂️
