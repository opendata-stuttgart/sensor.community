---
title: Introduzione
---

[comment]: # (Questa divisione in file rispecchia l'originale inglese)
[comment]: # (Non ho trovato sintassi per collegare sezioni da file diversi)

Costruisci il tuo sensore `airRohr` fai da te e diventa parte della
rete globale che produce dati aperti con tecnologie civiche.

Con `airRohr` puoi misurare l'inquinamento in autonomia. Con software
libero [licenza GNU GPL
3.0](https://www.gnu.org/licenses/gpl-3.0.en.html), caricando i dati
con licenza [Database Contents License (DbCL)
v1.0](https://opendatacommons.org/licenses/dbcl/1-0/) su
[sensor.community](https://sensor.community/).

<br />

Per l'installazione, oltre ad i componenti sono necessari:

* un PC
* un saldatore a stagno, opzionale (serve solo se si compra un sensore
  BME280 senza pin saldati)

La prima volta l'installazione di norma si completa in un'oretta.

<br />

Per il funzionamento quotidiano sono necessari:

* una connessione wireless ad internet sempre attiva (ti consigliamo
  di creare una rete apposita per il dispositivo se il tuo access
  point lo permette)
* una presa di corrente elettrica a 220 V

<img src="../docs/airrohr/particulate-matter-air-quality-sensor-kit.jpeg" loading="lazy"/>
<small>I principali componenti del kit</small>

### Lista della spesa

#### Componenti in kit

Il kit completo è venduto in Europa solo da un e-commerce polacco:

* [Kit pre configurato in
  inglese](https://nettigo.eu/products/luftdaten-org-pl-kit-sds011-bme280)

#### Componenti singoli

I singoli componenti sono ordinabili da vari e-commerce, di norma in
lingua inglese: per una lista con riferimenti aggiornati consulta la
[versione inglese di questa
guida](https://sensor.community/en/sensors/airrohr#Shopping_list).  Di
norma servono:

<br />

* 1 x scheda NodeMCU ESP8266 V3 (o V2)
* 1 x sensore SDS011 di particolato (polveri sottili) PM2.5 e PM10
* 1 x sensore BME280 temperatura, umidità e pressione atmosferica
* 8 x cavi Dupont femmina-femmina 40cm (per collegamento scheda e
  sensori)
* 1 x cavo micro-USB (da meno di 1m, per installazione software)
* 1 x cavo micro-USB (possibilmente piatto, da 2m o più, per
  alimentazione)
* 1 x caricabatterie USB 5V 2 A (per alimentazione)
* 2 x fascette piccole (per collegare scheda e sensori)
* 1 x tubicino flessibile, possibilmente non trasparente, diametro 6
  mm, lunghezza circa 20 cm, per aspirare l'aria da misurare (si trova
  in negozi per il fai da te)
* 2 x giunzioni tubo a 90 gradi (meglio con guarnizione), diametro
    interno 75 mm, per il riparo dalle intemperie (si trovano nei
    negozi di materiale per edilizia)
* 2 x fascette grandi, opzionali (per esempio per collegare tubi ad un
  palo di sostegno)
* 1 x rete anti-zanzare, opzionale (per proteggere le estremità
  dall'ingresso di insetti)

<br />

Se decidi di comprare i pezzi online, la spedizione potrebbe
richiedere diversi giorni o settimane.

#### Chiedi ai laboratori locali

Puoi anche provare a contattare un laboratorio locale (local lab)
vicino a dove vivi, che potrebbe avere dei kit disponibili o darti
indicazioni aggiornate.  Cerca nella [mappa centrata
sull'Italia](https://maps.sensor.community/?selection=PM25&nooverlay=true#6/42.430/11.000).
