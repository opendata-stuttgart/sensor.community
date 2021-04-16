---
title: Risoluzione dei problemi
---

### Problemi di trasmissione?
Inserisci il seguente nel browser con i tuoi dati:
`https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1&var-chipID=esp8266-[ID]`

L'[ID] può anche essere cercato nel campo di input in alto a sinistra [https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1](https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1)

* Il sensore è registrato tramite [https://devices.sensor.community/](https://devices.sensor.community/) ed è visibile sulla mappa?
  * Il livello del segnale WLAN era debole in passato?
    Ecco il log del segnale lato server: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`



### Problemi con il cavo USB?
* Controllare l'alimentazione: Cavo USB
* Riavviare (scollegare l'alimentazione, per esempio tirando la spina USB)
* La configurazione WLAN è OK (il sensore si connette alla WLAN configurata) Se no:
  * il sensore apre un AP (nei primi 2-7 minuti dopo un riavvio)?
  * Cerca la rete WLAN `airrohr-[ID]`. Pazienza, potrebbero volerci 1-2 minuti dopo il boot.
* Controlla sul tuo router se il sensore è connesso alla rete, poi ricorda l'IP
  * in alternativa usare "Discovery" nel [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher//)
  * Se sì: connettersi al sensore via IP con un browser `http://[ip-del-sensore]/` , l'interfaccia dovrebbe apparire
  * Se no: l'ESP ha problemi, per esempio alimentazione insufficiente, ciclo di riavvio o simili
* Collegare l'USB a un computer e visualizzare il log
  * Tracciare il testo sull'interfaccia seriale con un programma di terminale seriale (Impostazioni: baud 9600, 8N1)
    * Linux: schermo, minicom, cutecom; Windows: Tera Term; MacOS: schermo, minicom, ...
    * eventualmente sono ancora necessari dei driver usb2serial adatti, vedi [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
  * Lì dovresti essere in grado di vedere cosa sta facendo il sensore (messaggi di avvio, connessione WLAN o AP, misurazione - solo dopo 3 minuti)

### Problemi con l'elettronica?
* Rimuovere l'elettronica del sensore dall'alloggiamento e osservare
* Controllare/sostituire di nuovo l'alimentazione
  * L'ESP lampeggia poco dopo il riavvio?
  * Teensy: il LED rosso lampeggia dopo il riavvio?
  * controllare/sostituire di nuovo i cavi dei sensori

  <div class="max-w-screen-xl mx-auto pt-5">
      <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
      <div class="flex items-center">
            <span class="p-2 rounded-lg bg-indigo-500">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </span>
        <div class="flex flex-wrap">
          <div class="flex-wrap flex">
            <p class="pt-1 text-indigo-700 font-medium">
                Noise è attualmente in beta. Inviate le vostre domande a</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>
