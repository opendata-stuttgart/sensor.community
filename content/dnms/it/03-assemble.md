---
title: Montare
---
> ⚠️ **NOTA IMPORTANTE**
Prima del montaggio installare il firmware!
Vedere la sezione __firmware flasher__.


### Unità microfonica

L'unità microfono è basata sulla scheda di breakout Pesky Products con un microfono MEMS ICS-43434. Potete trovare tale scheda sul [Tindie marketplace](https://www.tindie.<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>L'unità microfono è basata sulla scheda di breakout Pesky Products con un microfono MEMS ICS-43434. Potete trovare tale scheda sul [Tindie marketplace](https://www.tindie.<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>
##### Alloggiamento per l'unità microfono
L'alloggiamento è fatto con un tubo di polistirolo da .500" (12,7 mm). Questo diametro permette di inserire direttamente la maggior parte dei calibratori sull'unità.

Il prototipo è stato sviluppato con il [tubo Evergreen No. 236](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).

Il prototipo è stato sviluppato con il [tubo Evergreen No. 236](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing).
<br>
La scheda di breakout deve essere adattata al diametro del tubo con una lima. Usate del nastro adesivo per proteggere l'ingresso del microfono.
<br>

<br>
<br>

Poi saldare i sei cavi di silicone. Notate con quale pin è collegato il cavo!

Poi saldare i sei cavi di silicone. Notate con quale pin è collegato il cavo!
Tagliare un pezzo di tubo lungo 115 mm.
<br>
Attacca la scheda del microfono su del nastro adesivo incrociato. Mettete i cavi nel tubo e fissate la scheda all'estremità del tubo.
<br>
<br>
<br>

Stringere l'estremità del tubo con il nastro adesivo.

Stringere l'estremità del tubo con il nastro adesivo.

Ora si può riempire il tubo con della resina. Questo passo è obbligatorio per evitare la risonanza e ottenere dati calibrati e riproducibili.

Il prototipo è stato sviluppato con del [PURe Isolation ST 33](https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900) prodotto da Copaltec GmbH.

##### Specifiche:
* Rigidità dielettrica: 28 kVmm
* Resistenza specifica in avanti: 5,8.1014 ohmcm
* Resistenza di superficie: 1,3.1016 ohm
* Rapporto di miscelazione resina-idratante: 2 : 1
* Tempo di cottura: da 20 a 30 minuti.
* Tempo di indurimento: da 16 a 30 ore
* Stato finale indurito: da 10 a 14 giorni
* Viscosità (mista): 500 à 600 mPa.s
* Durezza Shore: D 50 a 55 (ISO 868, DIN 53505)
* Conduttività termica: 0,3 WmK
* Temperature di applicazione: - da 20 a +130 °C


Anche la [resina poliuretanica UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) prodotta da Electrolube dovrebbe funzionare.

Per ogni tubo 15 g di resina dovrebbero essere sufficienti.

<img src="..docsdnmsdnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy">

Quando la resina si è indurita, rimuovere il nastro. La vostra unità microfonica è pronta.



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
* protegge dal rumore del vento (che può aumentare le misurazioni in decibel)
* protegge contro le perdite d'acqua dirette sul microfono. Per evitare la condensa sul microfono, tirare indietro il coperchio un po' dopo averlo installato per creare una piccola cavità.
* protegge dalle radiazioni solari. La luce solare intensa può influenzare i valori misurati e ridurre la durata del microfono.

* protegge dalle radiazioni solari. La luce solare intensa può influenzare i valori misurati e ridurre la durata del microfono.

Queste coperture in schiuma sono normalmente vendute come 'coperture per microfoni di misura'. Ma sono costose. Si può anche prendere una normale palla di schiuma e fare un buco con le forbici.

If you need more ones [this source](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2
) can be helpful.

### Posizione del microfono

È importante posizionare il microfono in un'area il più possibile "libera", questo significa in un luogo con meno superfici riflettenti del suono possibile. La distanza dalle superfici riflettenti dovrebbe essere la più grande possibile. Cerca di non montare il microfono direttamente sul muro di una casa, perché i muri riflettono fortemente i suoni.  La distanza dal muro dovrebbe idealmente essere più di 1 m. Naturalmente questo non è sempre facile da realizzare.

Con una distanza di circa 50 cm dalla punta del microfono al muro, l'errore indotto è ancora ragionevole. Buoni posti sono per esempio balconi o ringhiere di terrazze, o un piccolo albero sul tetto.

Puoi anche provare a posizionare il microfono direttamente sull'angolo della casa affinché le riflessioni si annullino parzialmente.

Un albero indipendente di almeno 1 m di altezza potrebbe anche essere una soluzione, ma poi bisogna fare attenzione ai riflessi sul terreno. Questo dipende dal rivestimento del pavimento, naturalmente.

È anche importante essere sempre consapevoli che noi misuriamo il rumore ambientale.  Possiamo solo fare un'approssimazione dell'emissione di rumore di fonti come strade o ferrovie.

Tuttavia, più ci si avvicina alla sorgente, più il riferimento alla sorgente diventa preciso. Gli aggiornamenti del firmware dovrebbero quindi essere in grado di ottenere misure precise per un tipo di rumore identificato.

Tuttavia, più ci si avvicina alla sorgente, più il riferimento alla sorgente diventa preciso. Gli aggiornamenti del firmware dovrebbero quindi essere in grado di ottenere misure precise per un tipo di rumore identificato.
Tuttavia, più ci si avvicina alla sorgente, più il riferimento alla sorgente diventa preciso. Gli aggiornamenti del firmware dovrebbero quindi essere in grado di ottenere misure precise per un tipo di rumore identificato.
<br>
<br>
