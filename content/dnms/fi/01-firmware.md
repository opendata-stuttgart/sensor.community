---
title: Ajuri &amp; laiteohjelma
---

Olemme jo valmistelleet laiteohjelmiston. Sinun tarvitsee vain asentaa ajurit ja flashata NodeMCU (ESP8266) ja Teensy 4.0 -levyt.

Jotta voit kommunikoida ESP8266:n kanssa, tarvitset usb2serial-ajurit käyttöjärjestelmääsi.

NocdeMCU v3:n piirisarja on yleensä CH341, tarkista NodeMCU:n takaa tekniset tiedot. Valitse linkki, joka vastaa tietokoneesi käyttöjärjestelmää.

### Windows

##### Ohjaimet mallille V2 (CP2102) Windowsille
* [Windows 10](https://www.silabs.comdocumentspublicsoftwareCP210x_Universal_Windows_Driver.zip) - Windows 10:n pitäisi pystyä lataamaan nämä automaattisesti.
* [Windows 788.1](https://www.silabs.comdocumentspublicsoftwareCP210x_Windows_Drivers.zip) - 32-bittinen versio - **ei** tukee 64-bittistä versiota käyttöjärjestelmästä.

##### Ohjain mallille V3 (CH341) Windowsissa
* [Windows](http://www.wch.cndownloadsfile5.html) - Windows 10:n pitäisi pystyä lataamaan nämä automaattisesti.

##### Pura ladattu tiedosto Windowsille:
* V2:lle: Avaa kansio CP210x ja kaksoisnapsauta sovellusta CP210xVCPInstaller_x64 (tai x86).
* V3: avaa kansio CH341SER ja kaksoisnapsauta sovellusta SETUP.

---

### MacOS

##### MacOS -ajurit
* [NodeMCU V2](https://www.silabs.comdocumentspublicsoftwareMac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cndownloadsfile178.html)

##### Pura ladattu tiedosto MacOS:lle.
* V2:lle: Pura kansio CP210x ja kaksoisnapsauta sovellusta CP210xVCPInstaller_x64 (tai x86).
* V3: Pura kansio CH341SER ja kaksoisnapsauta sovellusta SETUP.
* Käynnistä Mac uudelleen

---

### Linux
Ajureita ei tarvitse asentaa. Piirin pitäisi olla suoraan tuettu (todennettavissa dmesg:llä).

---
### Firmware Flasher NodeMCU
Tuki useille käyttöjärjestelmille: Windows, MacOS ja Linux.

* [airRohr Flashing Tool](http://firmware.sensor.communityairrohrflashing-tool)
* [Lähdekoodi](https://github.comopendata-stuttgartairrohr-firmware-flasher)

Liitä NodeMCU tietokoneeseen lyhyellä mikro-USB-kaapelilla (valitse alle 1 metrin pituinen kaapeli, muuten asennus voi epäonnistua). Valitse `latest_en.bin` (tai jokin muu kieliversio) ja napsauta "Upload".
Odota, kunnes prosessi on valmis. Nyt voimme koota anturin.
<br>
Suuret kiitokset [Piotrille, Puolasta](https://dropbox.inf.re), hänen avustaan! 🙋♂️

---
### Firmware Flasher Teensy
[Helmut Bitterin Githubissa](https://github.comhbitterDNMStreemasterFirmware) on kaksi erilaista firmwarea:
* .ino
* .hex

##### Teensy Loader
Voit flashata .hex-tiedoston Teensy-levyihin itsenäisellä GUI-ohjelmistolla [Teensy Loader](https://www.pjrc.comteensyloader.html) Windows-, Mac- ja Linux-käyttöjärjestelmille.
Myös komentoriviversio on olemassa.

##### Teensyduino
Voit flashata .ino-tiedoston Teensy-levyissä, joissa on Arduino IDE:n pääte [Teensyduino](https://www.pjrc.comteensyteensyduino.html).
Tarvittaessa voit muokata laiteohjelmistoa suoraan Arduino IDE:ssä.
