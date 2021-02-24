---
title: Assemblaggio
---

> ⚠ **Nota importante**
>
> Prima di procedere con l'assemblaggio installa il firmware!

### NodeMCU V3

Questa parte delle istruzioni si riferisce alla scheda NodeMCU V3.
Questa versione si riconosce facilmente nel disegno dai connettori
`VU` e `GND`:

<img src="../docs/airrohr/airrohr-wiring-sds011-bme280.jpg" style="width:40%; margin-top: 3em" loading="lazy"/>
<small>Copyright: roman-minyaylov, MIT License</small>

A lavoro finito dovresti avere una cosa del genere:

<img src="../docs/airrohr/nodemcu-v3-bme280.jpeg" style="margin-top: 1em" loading="lazy"/>

### Cablaggio dell'SDS011

I pin del sensore SDS011 sono più piccoli del normale.  Puoi rendere
più stabile l'incastro facendo un po' di pressione sulla parte
metallica del connettore Dupont con la punta di un cacciavite prima di
connetterlo.

Assicurati che i cavi si inseriscano bene nei pin, perché lo spazio
fra i pin è troppo ampio ed i cavi potrebbero inavvertitamente
inserirsi nel mezzo.

I pin sono numerati da destra a sinistra.

```bash
SDS011 Pin 1 -> Pin D1 / GPIO5
SDS011 Pin 2 -> Pin D2 / GPIO4
SDS011 Pin 3 -> GND
SDS011 Pin 4 -> non usato
SDS011 Pin 5 -> VU (NodeMCU v3) / VIN (NodeMCU v1,v2)
SDS011 Pin 6 -> non usato
SDS011 Pin 7 -> non usato
```
### Saldatura dei pin per BME280

Se il BME280 non ha i pin già saldati, occorre saldarli con un
saldatore a stagno.

Metti i pin sulla scheda BME280.  Salda i pin dal rovescio della
scheda. Gli spazi fra i pin sono piccoli, sii paziente e presta
attenzione.

Un trucco per saldare a stagno. Appoggia la punta del saldatore sul
pin, scaldarlo un po' e poi applica lo stagno sul pin, senza toccare
il saldatore direttamente.

<img src="../docs/airrohr/solder-a-bme-280.jpeg" style="width:49%; padding-right: 0.5em" class="items-center" loading="lazy"/>
<img src="../docs/airrohr/solder-bme-280.jpeg" style="width:49%;" loading="lazy"/>

### Cablaggio per BME280

I pin sono numerati da sinistra a destra.

```bash
VIN -> Pin 3V3 (3.3V)
GND->  GND/G
SDA -> PIN D3
SCL -> Pin D4
```

### Mettere tutto assieme

#### Lega NodeMCU e SDS011

Usa una fascetta per legare la scheda NodeMCU ed il sensore SDS011 in
modo che l'antenna wireless sia dal lato opposto al sensore.

<img src="../docs/airrohr/tie-air-quality-sensor-together.jpeg" loading="lazy"/>

#### Connetti il tubicino flessibile

* Connetti il tubicino flessibile al sensore SDS011
* Usa la fascetta per legare (senza stringerla del tutto) il sensore
  BME280 al tubicino
* Collega il cavo micro-USB per l'alimentazione
* Tieni il sensore SDS011 con la ventola in basso e la scheda NodeMCU
  in alto

<img src="../docs/airrohr/sds011-with-tube.jpeg" style="width:49%; padding-right: 0.5em" loading="lazy"/>
<img src="../docs/airrohr/bme280-tied-to-tube.jpeg" style="width:49%;" loading="lazy"/>

#### Inserisci il sensore nel tubo

* Metti il sensore in un tubo, dovrebbe incastrarsi facilmente
* Il cavo micro-USB ed il tubo flessibile dovrebbero sporgere dall'altra
  estremità del tubo

<img src="../docs/airrohr/sds011-jammed-into-tube.jpeg" loading="lazy"/>

#### Chiusura finale

* Chiudi assieme i due tubi
* Prendi la misura e taglia il tubicino flessibile in modo che non
  sporga dal tubo una volta in posizione definitiva
* Posiziona il sensore BME280 sul tubicino flessibile al limite del
  bordo del tubo
* Stringi la fascetta posizionata al punto precedente per legare il
  BME280 al tubicino
* Opzionale: copri le estremità dei tubi con un telo da zanzariera

<img src="../docs/airrohr/position-bme280.jpeg" loading="lazy"/>
