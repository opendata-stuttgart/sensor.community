---
title: Driver e Firmware
---

Il firmware è preparato dal nostro progetto, ed è rilasciato con una
licenza di software libero: [GNU GPL
3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).

Per avere un sensore funzionante devi solo installare i driver sul tuo
PC, e poi installare il firmware sulla scheda NodeMCU.

È probabile che il tuo sistema operativo richieda dei driver per la
comunicazione seriale su USB per interagire con la scheda NodeMCU.

Il circuito sulla scheda NodeMCU per la versione V3 è chiamato CH341,
per la versione V2 è chiamato CP2102.  Guarda con attenzione la tua
scheda per trovare la versione esatta.

Poi scarica i driver corrispondenti, seguendo le istruzioni qui sotto.

### Windows

[comment]: # (Total insanity: duplicate section titles lead to a crash)

#### Driver NodeMCU V3-CH341

* Scarica per [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10
  dovrebbe scaricarli automaticamente

Apri la directory CH341SER e clicca due volte sul setup dell'applicazione.

[comment]: # (Total insanity: duplicate section titles lead to a crash)

#### Driver NodeMCU V2-CP2102

* Scarica per [Windows
  10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) -
  Windows 10 dovrebbe scaricarli automaticamente
* Scarica per [Windows
  7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) -
  versione a 32 bit

Apri la directory CP210x e clicca due volte sull'applicazione CP210xVCPInstaller_x64 (o x86).

### MacOS

[comment]: # (Total insanity: duplicate section titles lead to a crash)

#### Driver NodeMCU V3 (CH341)

* Scarica [NodeMCU V3](http://www.wch.cn/downloads/file/178.html).
* Scompatta CH341SER e clicca due volte sul setup dell'applicazione.
* Riavvia il tuo computer.

[comment]: # (Total insanity: duplicate section titles lead to a crash)

#### Driver NodeMCU V2 (CP2102)

* Scarica [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip).
* Scompatta CP210x e clicca due volte sull'applicazione CP210xVCPInstaller_x64 (o x86).


### Linux

Non servono driver da installare.  La scheda NodeMCU è riconosciuta
automaticamente.  Per conferma, dando il comando:

``` shell
sudo dmesg
```

dovresti vedere qualcosa di simile a:

``` shell
usb 3-1: New USB device found, idVendor=0403, idProduct=6001, bcdDevice= 6.00
usb 3-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
usb 3-1: Product: FT232R USB UART
usb 3-1: Manufacturer: FTDI
usb 3-1: SerialNumber: XXXXXXXX
usbcore: registered new interface driver usbserial_generic
usbserial: USB Serial support registered for generic
usbcore: registered new interface driver ftdi_sio
usbserial: USB Serial support registered for FTDI USB Serial Device
ftdi_sio 3-1:1.0: FTDI USB Serial Device converter detected
usb 3-1: Detected FT232RL
usb 3-1: FTDI USB Serial Device converter now attached to ttyUSB0
```

### Installazione Firmware

#### Con interfaccia grafica

`airRohr Flashing Tool` supporta diversi sistemi operativi: Windows, MacOS e Linux.

* Scarica [airRohr Flashing
  Tool](http://firmware.sensor.community/airrohr/flashing-tool/)

Connetti la scheda NodeMCU al tuo computer con un cavo micro-USB
(meglio se più corto di un metro, altrimenti l'installazione potrebbe
fallire).

Seleziona il file del firmware chiamato `latest_it.bin` (`it` sta per
italiano), e clicca "Carica" (Upload).

Attendi fino alla fine del processo.

#### Alternativa da linea di comando

Per le persone esperte, è possibile evitare di scaricare decine di MB
di software con interfaccia grafica, ed installare il tutto in poche
decine di secondi con i seguenti comandi da terminale:

``` shell
# get esp firmware in home
cd
wget http://firmware.sensor.community/airrohr/update/latest_en.bin
wget http://firmware.sensor.community/airrohr/update/latest_en.bin.md5
wget http://firmware.sensor.community/airrohr/update/latest_it.bin
wget http://firmware.sensor.community/airrohr/update/latest_it.bin.md5

# check the firmware (unfortunately the md5sum is not in the standard, easy to --check format)
md5sum latest_it.bin | cut -d ' ' -f 1 | xargs -I X egrep -q '^X$' latest_it.bin.md5 && echo OK || echo KO

# unsecure shortcut to write to the esp* device
sudo chmod 777 /dev/ttyUSB0

# install esptool with pip
mkdir -p .virtualenvs
python3 -m venv .virtualenvs/esptool
.virtualenvs/esptool/bin/pip install esptool
# show the help page
.virtualenvs/esptool/bin/esptool.py --help

# flash the esp* device
.virtualenvs/esptool/bin/esptool.py --port /dev/ttyUSB0 erase_flash
.virtualenvs/esptool/bin/esptool.py --port /dev/ttyUSB0 --baud 460800 write_flash --flash_size=detect -fm dio 0 latest_it.bin
```

Il risultato dovrebbe essere qualcosa di simile a:

``` shell
$ .virtualenvs/esptool/bin/esptool.py --port /dev/ttyUSB0 erase_flash
esptool.py v2.8
Serial port /dev/ttyUSB0
Connecting....
Detecting chip type... ESP8266
Chip is ESP8266EX
Features: WiFi
Crystal is 26MHz
MAC: XX:XX:XX:XX:XX:XX
Uploading stub...
Running stub...
Stub running...
Erasing flash (this may take a while)...
Chip erase completed successfully in 7.5s
Hard resetting via RTS pin...

$ .virtualenvs/esptool/bin/esptool.py --port /dev/ttyUSB0 --baud 460800 write_flash --flash_size=detect -fm dio 0 latest_it.bin
esptool.py v2.8
Serial port /dev/ttyUSB0
Connecting....
Detecting chip type... ESP8266
Chip is ESP8266EX
Features: WiFi
Crystal is 26MHz
MAC: XX:XX:XX:XX:XX:XX
Uploading stub...
Running stub...
Stub running...
Changing baud rate to 460800
Changed.
Configuring flash size...
Auto-detected Flash size: 4MB
Compressed 522784 bytes to 365381...
Wrote 522784 bytes (365381 compressed) at 0x00000000 in 8.2 seconds (effective 510.0 kbit/s)...
Hash of data verified.

Leaving...
Hard resetting via RTS pin...
```

### Controllo installazione firmware

È consigliabile controllare subito che il firmware sia installato
correttamente.

* Fare una scansione delle reti wireless
* Si dovrebbe trovare una rete wireless dal nome `airRohr-XXYYZZ`,
  dove XXYYZZ è il codice ChipID della scheda
* Collegarsi alla rete wireless dal nome `airRohr-XXYYZZ`
* Aprire un browser all'indirizzo: http://192.168.4.1/
* Si dovrebbe vedere un modulo di configurazione da completare in un
  successivo momento
* Chiudere il browser, staccare il cavo micro-USB e proseguire oltre

Questo controllo conferma che la scheda NodeMCU è funzionante.  Se nei
passi successivi la scheda non si dovesse accendere o la rete non
risultasse visibile sarà chiaro che la causa del problema è da
ricercare nel collegamento dei sensori.

### Controllo da linea di comando

``` shell
$  .virtualenvs/esptool/bin/esptool.py --port /dev/ttyUSB0 --after hard_reset chip_id
# [output removed]
# [Note that "Chip ID" is the hex version of the decimal ID: XXYYZZ]
$ picocom --quiet --baud 9600 /dev/ttyUSB0
...
output debug text to displays...
Starting WiFiManager
AP ID: airRohr-XXYYZZ
Password:
scan for wifi networks...
AP Password is:
Starting Webserver... (IP unset)
```

Premi `C-a C-x` per uscire da picocom.
