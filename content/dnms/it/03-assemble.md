---
title: Assemblare
---
> ⚠️ **NOTA IMPORTANTE**
Prima di assemblare installare il firmware!
Vedere la sezione __firmware flasher__.


### Unità microfonica

L'unità microfonica è basata sulla breakout board di Pesky Products con un microfono MEMS ICS-43434. Puoi trovare tale scheda sul [Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/).

<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>


##### Alloggiamento per l'unità microfono
L'alloggiamento è realizzato con un tubo di polistirolo da .500" (12,7mm). Questo diametro permette di inserire direttamente la maggior parte dei calibratori sull'unità.

Il prototipo è stato sviluppato con il [tubo Evergreen No. 236](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

<img src="../docs/dnms/dnms-noise-measuring-microphone-anschluesse.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>

<br>
La scheda di breakout deve essere adattata al diametro del tubo con una lima. Usate del nastro adesivo per proteggere l'ingresso del microfono.
<br>

<img src="../docs/dnms/dnms-noise-measuring-microphone-protection.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection-front.jpg" style="width:41%; margin: 2em 0" loading="lazy"/>

Poi saldare i sei cavi in silicone. Notate con quale pin è collegato il cavo!

<img src="../docs/dnms/dnms-noise-measuring-microphone-with-cable.jpg" style="display: block; width:40%; margin: 2em 0" loading="lazy"/>
Tagliare un pezzo di tubo lungo 115 mm.
<br>
Incollate la scheda del microfono su del nastro adesivo incrociato. Mettete i cavi nel tubo e fissate la scheda all'estremità del tubo.
<br>
<img src="../docs/dnms/dnms-noise-measuring-microphone-preparing-housing.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-housing.jpg" style="width:42%; margin: 2em 0" loading="lazy"/>

Stringere l'estremità del tubo con il nastro adesivo.

<img src="../docs/dnms/dnms-noise-measuring-microphone-tube.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>

Ora puoi riempire il tubo con della resina. Questo passo è obbligatorio per evitare la risonanza e ottenere dati calibrati e riproducibili.

Il prototipo è stato sviluppato con della [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900) prodotta dalla Copaltec GmbH.

##### Specifiche
* Rigidità dielettrica: 28 kV/mm
* Resistenza specifica in avanti: 5,8.1014 ohm/cm
* Resistenza di superficie: 1,3.1016 ohm
* Rapporto di miscelazione resina/indurente: 2 : 1
* Tempo di cottura: 20 à 30 min.
* Tempo di indurimento: 16 à 30 h
* Stato finale indurito: 10 à 14 giorni
* Viscosità (misto): 500 a 600 mPa.s
* Durezza Shore: D 50 a 55 (ISO 868, DIN 53505)
* Conducibilità termica: 0,3 W/mK
* Temperature di applicazione: - 20 a +130 °C



Anche la [resina poliuretanica UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) prodotta da Electrolube dovrebbe funzionare.

Per ogni tubo 15 g di resina dovrebbero essere sufficienti.

<img src="../docs/dnms/dnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy"/>

Quando la resina si è indurita, rimuovere il nastro. Il vostro microfono è pronto.


### Alloggiamento DNMS

Quando il Teensy (DNMS) e il NodeMCU (standalone o su PCB) sono separati: DNMS e airRohr

Avete bisogno di un pezzo di tubo di 25 mm di diametro (per esempio un tubo per applicazioni elettriche), un connettore, un arco di 90° e un pressacavo M25 IP68.

Il tubo stesso dovrebbe essere lungo 160 mm. Il DNMS sembra posto in. L'alloggiamento del microfono è mantenuto dal pressacavo.

L'arco impedisce all'acqua e all'umidità di entrare nella custodia mentre lascia passare il cavo.

<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

Il DNMS è collegato al secondo PCB con un cavo RJ12. Se questo cavo è più lungo di 250 mm, è necessario utilizzare una prolunga I²C.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

Dopo che tutto è ben collegato, le parti vengono incollate insieme.

Risultato:

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

Il PCB che porta il NodeMCU può essere messo in qualsiasi tipo di scatola elettrica.


### Protezione dalle intemperie

Le custodie stesse dovrebbero essere impermeabili. Solo l'ingresso del microfono potrebbe essere sensibile. TDK, il produttore ha pubblicato alcune raccomandazioni per sigillare i microfoni MEMS InvenSense bottom-port dall'ingresso di polvere e liquidi, ma i componenti sono difficili da trovare e non sono stati testati.

È assolutamente necessario installare una protezione dalle intemperie sotto forma di una copertura di schiuma. Se necessario, anche una spugna domestica è sufficiente. Ci sono diverse ragioni per questo:
* protegge dal rumore del vento (che può aumentare le misure di decibel)
* protegge dalla fuoriuscita diretta di acqua sul microfono. Per evitare la condensa sul microfono, tirate indietro il coperchio un po' dopo averlo installato, in modo da creare una piccola cavità.
* Protegge dalle radiazioni solari. La luce solare intensa può influenzare i valori misurati e ridurre la durata del microfono.

<img src="../docs/dnms/dnms-noise-measuring-microphone-bonette.jpg" style="width:45%; margin: 3em 0" loading="lazy"/>

Queste coperture in schiuma sono normalmente vendute come 'coperture per microfoni di misura'. Ma sono costose. Puoi anche prendere una normale palla di schiuma e fare un buco con le forbici.

If you need more ones [this source](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2
) può essere utile.

### Posizione del microfono

È importante posizionare il microfono in un'area il più possibile "libera", cioè in un luogo con il minor numero possibile di superfici che riflettono il suono. La distanza dalle superfici riflettenti dovrebbe essere la maggiore possibile. Cerca di non montare il microfono direttamente sul muro di una casa, perché i muri riflettono fortemente i suoni.  La distanza dal muro dovrebbe idealmente essere più di 1 m. Naturalmente questo non è sempre facile da realizzare.

Con una distanza di circa 50 cm dalla punta del microfono al muro, l'errore indotto è ancora ragionevole. Buoni posti sono per esempio balconi o ringhiere di terrazze, o un piccolo albero sul tetto.

Puoi anche provare a posizionare il microfono direttamente sull'angolo della casa affinché le riflessioni si annullino parzialmente.

Anche un'asta indipendente di almeno 1 m di altezza potrebbe essere una soluzione, ma poi devi fare attenzione alle riflessioni sul terreno. Questo dipende dal rivestimento del pavimento, naturalmente.

È anche importante essere sempre consapevoli che noi misuriamo il rumore ambientale.  Possiamo solo fare un'approssimazione dell'emissione di rumore di fonti come strade o ferrovie.

Tuttavia, più ci si avvicina alla sorgente, più il riferimento alla sorgente diventa preciso. Gli aggiornamenti del firmware dovrebbero quindi essere in grado di ottenere misure precise per un tipo di rumore identificato.

<img src="../docs/dnms/measuring-sensor-on-balcony.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<img src="../docs/dnms/measuring-sensor-on-terasse.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<br>
<img src="../docs/dnms/measuring-sensor-on-wall.jpg" style="width:99%; margin-bottom: 2em;" loading="lazy"/>
