---
title: Ajuri &amp; laiteohjelma
---

Olemme jo valmistelleet laiteohjelmiston. Sinun tarvitsee vain asentaa ajurit ja flashata NodeMCU (ESP8266).

Jotta voit kommunikoida NodeMCU:n (ESP8266) kanssa, tarvitset usb2serial-ajurit käyttöjärjestelmääsi.

NocdeMCU v3:n piirisarja on yleensä CH341, tarkista NodeMCU:n (ESP8266) takaosasta tekniset tiedot.

Valitse tietokoneen käyttöjärjestelmää vastaava linkki.

### Windows

##### Ohjaimet NodeMCU (ESP8266) V2 (CP2102) - Windowsille
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10:n pitäisi pystyä lataamaan nämä automaattisesti.
* [Windows 788.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-bittinen versio - **ei** tukee 64-bittistä versiota käyttöjärjestelmästä.

##### Ajuri NodeMCU:lle (ESP8266) V3 (CH340/CH341) Windows-käyttöjärjestelmälle
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10:n pitäisi pystyä lataamaan nämä automaattisesti.

##### Pura ladattu tiedosto Windowsille:
* NodeMCU:lle (ESP8266) V2: Avaa kansio CP210x ja kaksoisnapsauta sovellusta CP210xVCPInstaller_x64 (tai x86).
* NodeMCU (ESP8266) V3: avaa kansio CH341SER ja kaksoisnapsauta sovellusta SETUP.

---

### MacOS

##### MacOS -ajurit
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### Pura ladattu tiedosto MacOS:lle.
* V2:lle: Pura kansio CP210x ja kaksoisnapsauta sovellusta CP210xVCPInstaller_x64 (tai x86).
* V3: Pura kansio CH341SER ja kaksoisnapsauta sovellusta SETUP.
* Käynnistä Mac uudelleen

---

### Linux
Ajureita ei tarvitse asentaa. Piirin pitäisi olla suoraan tuettu (todennettavissa dmesg:llä).

---
### Firmware Flasher
Tuki useille käyttöjärjestelmille: Windows, MacOS ja Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Lähdekoodi](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

Liitä NodeMCU tietokoneeseen lyhyellä mikro-USB-kaapelilla (valitse alle 1 metrin pituinen kaapeli, muuten asennus voi epäonnistua). Valitse `latest_en.bin` (tai jokin muu kieliversio) ja napsauta "Upload".
Odota, kunnes prosessi on valmis. Nyt voimme koota anturin.

#### Linux: Aseta käyttöoikeudet suoritettavaksi
Latauksen jälkeen sinun on ehkä asetettava lupa suoritettavaksi. Tämä voidaan tehdä komennolla: `chmod o+x <latauksen tiedostonimi>`.
<br>
Suuret kiitokset [Piotrille, Puolasta](https://dropbox.inf.re), hänen avustaan! 🙋♂️

#### MacOS: miten suorittaa tarkistamaton sovellus?
Napsauta hiiren kakkospainikkeella ja avaa sovellus useita kertoja ja vahvista aina "Avaa".

Tässä on lyhyt video Youtubessa 👉 https://youtu.be1KZiP94TYjw.




