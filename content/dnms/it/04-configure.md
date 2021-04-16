---
title: Configura
---

  <div class="max-w-screen-xl mx-auto pb-5">
      <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
      <div class="flex items-center">
            <span class="p-2 rounded-lg bg-indigo-500">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5. 436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </span>
        <div class="flex flex-wrap">
          <div class="flex-wrap flex">
            <p class="pt-1 text-indigo-700 font-medium">
                Noise è in beta. Invia domande a</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>

### Ottenere l'ID
1. Collegare la stazione con un cavo USB per alimentare il sensore

2. La stazione cerca di connettersi al punto di accesso WiFi configurato. Se questo non funziona, il sensore apre un access point con il nome `Particulate Matter ID` , `Feinstaubsensor-ID` o `airRohr-ID`. L'ID è il **ChipID** (per esempio 13597771). **Si prega di annotare questo numero, in quanto è necessario per la registrazione**.

3. Connettiti al punto di accesso creato. Aspetta che la connessione sia stabilita.<br>*Android*: Se la connessione si disconnette immediatamente, potrebbe essere necessario disattivare l'opzione 'Smart network switch' sotto 'Connections -> WiFi -> Advanced'.

4. Apri il tuo browser e digita [http://192.168.4.1/](http://192.168.4.1/)

> ⚠️ **Nota bene** Potrebbero essere necessari alcuni tentativi affinché il NodeMCU si connetta alla rete WiFi di casa. Per favore, non essere impaziente e prova finché non funziona. Il sensore può essere configurato anche tramite uno smartphone. Se la configurazione del sensore ha funzionato, la pagina di configurazione non è più accessibile con questo IP 192.168.4.1

### Configurare la stazione
1. Alla voce 'Configura' inserisci l'SSID (nome della tua rete WiFi domestica), la chiave di sicurezza della rete (sotto Windows) o la password WiFi.

2. Per i sensori di rumore (DNMS) secondo questo manuale, non sono necessarie ulteriori modifiche

3. Dopo aver premuto save, il sensore si riavvia e non è più accessibile in questo modo quando si connette alla WLAN.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Test della stazione
Se non sono state fatte altre modifiche oltre all'inserimento dei dati della rete WiFi, il sensore può essere "testato" nelle pagine seguenti dopo circa 10 minuti. Su queste pagine devi cercare il ChipID (nell'esempio sopra il 13597771).

* [Sensordaten](www.madavi.de/sensor/graph.php)
* [WLAN-Signal](www.madavi.de/sensor/signal.php) 
        


 
