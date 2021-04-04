---
title: PCB'er og kredsløbsdiagrammer
---

Den bedste måde at bygge DNMS på er at bruge et af vores PCB'er.
Der findes nu en hel del PCB-producenter, som kan fremstille printplader for få penge uden minimumsantal. F.eks. [JLCPCB](https://jlcpcb.com/).
Du skal blot downloade vores kredsløbsdiagrammer og/eller Gerber-filer nedenfor, uploade dem på producentens websted og bestille dine PCB'er.

<br>
De sidste versioner af PCB'erne er beskrevet her. Se [Helmut Bitters Github](https://github.com/hbitter/DNMS/tree/master/PCBs) for yderligere oplysninger og for at få adgang til KiCad-filerne.

#### AIRROHR V1.4
<img src="../docs/dnms/airrohr-PCB.jpg" style="display: block; width:40%;margin: 1em 0" loading="lazy"/>
PCB til NodeMCU ESP8266 CPUWLAN med en I2C-busudvidelse til tilslutning af DNMS samt andre sensorer (SDS011, BME280...).


##### Download
* [Kredsløbsdiagram](..docsdnmsairrohr-PCB-circuit-diagram.pdf)
* [Gerber-fil til upload på PCB-producentens websted](../docs/dnms/airrohr-PCB-circuit-diagram-gerber.zip)

---

#### DNMS - T4 V1.4
PCB til DNMS Teensy 4.0, som kan tilsluttes direkte på en NodeMCU ESP8266 eller på AIRROHR PCB'et ovenfor.


##### Download
* [Kredsløbsdiagram](..docsdnmsdnms-noise-measuring-teensy-40-circuit-diagram.pdf)
* [Gerber-fil til upload på PCB-producentens websted](..docsdnmsdnms-noise-measuring-teensy-40-circuit-gerber.zip)

