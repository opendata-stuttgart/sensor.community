---
title: Risoluzione dei problemi
---

### Problemi di trasmissione dati?

* [ID] può essere cercato anche nel campo di immissione nell'angolo superiore sinistro di questa pagina:
  [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1)
  e controlla se il segnare wireless è stato debole in passato
* Controlla che il dispositivo sia visibile sulla
  [mappa](https://maps.sensor.community)
* Controlla la registrazione su
  [https://devices.sensor.community/](https://devices.sensor.community/)

### Problemi di cavo micro-USB?

* Controlla l'alimentatore ed il cavo (per esempio caricando un
  telefono cellulare)
* Riavvia la scheda NodeMCU, disconnettendo e riconnettendo il cavo
* Se il sensore è raggiungibile nella tua rete wireless, controlla la
  configurazione collegandoti al suo IP
* Se non conosci l'IP, cerca il dispositivo nella tua rete con la
  funzionalità "Discovery" di
  [airrohr-firmware-flasher](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
* Se il dispositivo non è raggiungibile nella tua rete wireless, cerca
  la rete `airrohr-XXYYZZ` dopo 2/3 minuti dal riavvio e ripeti la
  configurazione
* Se il dispositivo non è collegato alla tua rete wireless ed il tuo
  PC non vede la rete `airrohr-XXYYZZ` probabilmente l'alimentatore
  USB non fornisce energia sufficiente o ci sono problemi di cablaggio
  o di corruzione del software (in questo caso prova a reinstallare il
  firmware).
* (Avanzato) connetti il cavo micro-USB ad un computer e controlla i
  messaggi di log.
    * Devi aver installato i driver (come da punti precedenti per
      installare il firmware) ed usare un emulatore di terminale (baud
      9600, 8N1), per esempio:
        * Windows: Tera Term
        * MacOS: screen, minicom, ...
        * Linux: picocom, screen, minicom, cutecom, ...
    * L'emulatore di terminale ti mostrerà cosa sta facendo il
      dispositivo dopo circa 2/3 minuti.
    * Vedi anche la sezione "Controllo da linea di comando".

### Problemi elettronici?

* Rimuovi l'elettronica dai tubi e controlla i cavi.
* Controlla o cambia il trasformatore USB.
* Sulla scheda NodeMCU:
    * si deve illuminare brevemente un led al riavvio
* Sul sensore SDS011:
    * si deve illuminare un led rosso al riavvio
    * si deve accendere la ventolina al riavvio
* Controlla o cambia i cavi una seconda volta.

---

<br />

> Nota: traduzione ed integrazioni a cura di
> [CambiamoLaStrada](https://maps.sensor.community/?selection=PM25&nooverlay=true#16/46.0700/11.1130)
