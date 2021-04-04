---
title: Risoluzione dei problemi
---

### Problemi di trasferimento?
Inserisci il seguente nel tuo browser con i tuoi dati:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

L'[ID] può anche essere cercato nel campo di input aperto sul lato sinistro della pagina [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1).

* Il sensore è registrato tramite [https://devices.sensor.community](https://devices.sensor.community) ed è visibile sulla mappa?
* Il segnale wireless è stato debole in passato?
  Ecco il protocollo di segnalazione lato server: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`.

### Problemi con il cavo USB?
* Controllare l'alimentazione
* Riavvio (scollegare l'alimentazione, ad esempio estrarre la spina USB)
* La configurazione WLAN è OK (il sensore si collega alla WLAN configurata). In caso contrario:
  * Il sensore apre un wifi adhoc (access point) nei primi 2-7 minuti dopo un riavvio?
  * Cerca la rete WLAN `airrohr-[ID]`. Potrebbero essere necessari alcuni minuti dopo un riavvio prima che questo sia visibile.

  * in alternativa usare "Cerca nella rete" in [airRohr Flashing Tool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
  * Se sì: connettersi al sensore tramite un browser `http://[ip-your-sensor]`, la configurazione dovrebbe apparire
  * Se no: potrebbe essere dovuto a un'alimentazione insufficiente, un loop di riavvio o simili.
* Collegare il NodeMCU a un computer tramite un cavo USB e guardare il protocollo
  * Traccia con un programma di terminale seriale (impostazioni: Baud 9600, 8N1)
    * Linux: schermo, minicom, cutecom
    * Windows: Tera Term
    * macOS: schermo, minicom, ...
    * possono essere necessari dei driver seriali USB-2 adatti, vedere [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
  * Lì dovresti vedere cosa sta facendo il sensore (messaggi di avvio, connessione WLAN o punto di accesso, misurazione - solo dopo 3 minuti)

### Problemi con l'elettronica?
* Rimuovere l'elettronica del sensore dall'alloggiamento e guardarla da vicino.
* Controllare di nuovo l'alimentazione
    * Il NodeMCU (ESP8266) lampeggia poco dopo il riavvio?
    * SDS011: il LEDFan rosso si accende dopo il riavvio?


  <div class="max-w-screen-xl mx-auto pt-5">
      <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
      <div class="flex items-center">
            <span class="p-2 rounded-lg bg-indigo-500">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">

              <svg>
            <span>
        <div class="flex flex-wrap">
          <div class="flex-wrap flex">
            <p class="pt-1 text-indigo-700 font-medium">
                Noise è attualmente in beta. Inviate le vostre domande a<p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community<a>
          <div>
           <div>
      <div>
    <div>
  <div>
