---
title: Configurazione
---

### Trova il ChipID della scheda NodeMCU

1. Connetti la scheda al cavo micro-USB di alimentazione.

2. La scheda NodeMCU, non avendo ancora una configurazione definitiva,
   creerà una rete wireless dal nome `airRohr-XXYYZZ` dove `XXYYZZ`
   rappresenta il ChipID in formato decimale.

   **Annota questo numero, sarà necessario per la registrazione
   successiva**

3. Connetti il tuo PC alla rete wireless `airRohr-XXYYZZ`.

   > ⚠ **Nota** Se stai usando un dispositivo *Android* che presenta
   > problemi, prova a disattivare nel menu `Connessioni -> WiFi -> Avanzate`
   > l'opzione `Network switch intelligente`

4. Apri il tuo browser all'indirizzo IP
   [http://192.168.4.1/](http://192.168.4.1/)

   > ⚠ **Nota** La scheda non sarà più raggiungibile all'indirizzo IP
   > 192.168.4.1 dopo il salvataggio di una configurazione di rete
   > funzionante.  Se la configurazione caricata non è corretta (per
   > esempio a causa di password sbagliata) dopo alcuni minuti la
   > scheda ripristinerà questa configurazione iniziale e sarà
   > disponibile per un nuovo tentativo.

### Configurazione della scheda NodeMCU

1. Nella pagina di "Configurazione" inserisci il SSID (nome della rete
   wireless) e la chiave (password) della rete.

2. Se stai usando i sensori con la configurazione suggerita in questa
   guida, non sono necessarie ulteriori configurazioni.

3. Clicca il pulsante "Salva configurazione e riavvia". La scheda
   disattiverà la rete `airRohr-XXYYZZ` e non sarà più disponibile
   all'IP 192.168.4.1.

   > ⚠ **Nota** Puoi trovare l'indirizzo della scheda all'interno
   > della tua rete consultando la lista dei dispositivi connessi al
   > tuo access point o facendo uno scansione dei dispositivi nella
   > rete o con la funzionalità "Discovery" di
   > airrohr-firmware-flasher (vedi oltre nella sezione "Risoluzione
   > dei Problemi").

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>

### Verifica della configurazione

Se hai seguito correttamente i passi al punto precedente la scheda
NodeMCU inizierà a registrare dati e a caricarli.

Puoi verificare che tutto sia configurato correttamente dopo circa una
decina di minuti.

Connettiti alle seguenti pagine e cerca il tuo ChipID.

 * [Dati del sensore](https://www.madavi.de/sensor/graph.php)
 * [Dati del segnale wireless](https://www.madavi.de/sensor/signal.php)
