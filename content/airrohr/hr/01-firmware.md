---
title: Driver & firmware
---

Već smo pripremili firmware. Trebate samo instalirati upravljačke programe i uprogramirati svoj NodeMCU (ESP8266). 

Za komunikaciju s vašim NodeMCU (ESP8266) potrebni su vam usb2serial upravljački programi za vaš operativni sustav. 

Čipset za NodeMCU v3 obično je CH341, samo provjerite stražnju stranu vašeg NodeMCU (ESP8266) da biste pronašli neke tehničke informacije. 

Odaberite poveznicu koja odgovara operativnom sustavu vašeg računala.

### Windows

##### Upravljački programi za NodeMCU (ESP8266) V2 (CP2102) za Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 bi trebao moći automatski preuzeti ove upravljački programe
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-bitna verzija - **ne** podržava 64-bitnu verziju OS-a

##### Upravljački programi za NodeMCU (ESP8266) V3 (CH340/CH341) za Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 bi trebao moći automatski preuzeti ove upravljački programe

##### Otpakirajte preuzetu datoteku za Windows
* za NodeMCU (ESP8266) V2: otvorite mapu CP210x i dvaput kliknite na aplikaciju CP210xVCPInstaller_x64 (ili x86)
* za NodeMCU (ESP8266) V3: otvorite mapu CH341SER i dvaput kliknite na aplikaciju SETUP.

---

### MacOS

##### MacOS upravljački programi
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html) 

#####  Otpakirajte preuzetu datoteku za MacOS
* za V2: otvorite mapu CP210x i dvaput kliknite na aplikaciju CP210xVCPInstaller_x64 (or x86)
* za V3: otvorite mapu CH341SER i dvaput kliknite na aplikaciju SETUP.
* u slučaju poruke "No boards found": ponovno pokrenite Mac 

---

### Linux
Nije potrebno instalirati upravljačke programe. Čip bi trebao biti izravno podržan (provjerljivo pomoću dmesg)

---
### Programiranje Firmware-a
Podrška za više operativnih sustava: Windows, MacOS and Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Izvorni kod](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)

povežite NodeMCU s računalom kratkim mikro-USB kabelom (odaberite jedan kraći od 1 metra, inače instalacija možda neće uspjeti). Odaberite `latest_en.bin` (ili inačicu na nekom drugom jeziku) i kliknite "Učitaj".
Pričekajte da se proces završi. Sada možemo sastaviti senzor.

#### Linux: Postavite dozvolu izvršavanja programa
Nakon preuzimanja možda ćete morati postaviti dozvolu na izvršnu datoteku. To se može učiniti naredbom: `chmod o+x <download filename>` 
<br>
Ako vidite poruku o pogrešci *"nije moguće spojiti na port /ttyUSB0"*, morate se dodati u *dialout* grupu: `sudo usermod -a -G dialout $USER` zatim se odjavite i ponovno prijavite.
<br>
Veliko hvala [Piotr, from Poland](https://dropbox.inf.re/), za tu pomoćnu informaciju 🙋‍♂️ 

#### MacOS: kako pokrenuti neprovjerenu aplikaciju
Kliknite desnom tipkom i otvorite aplikaciju nekoliko puta i uvijek potvrdite s "Otvori".

Evo kratkog videa na Youtubeu 👉 https://youtu.be/1KZiP94TYjw




