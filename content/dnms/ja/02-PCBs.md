---
title: PCBs and circuit diagrams
---

DNMSを作るには、当社のプリント基板を使うのが一番です。
今では、最低数量なしで数ドルで回路基板を製造してくれるPCBメーカーがかなり多くなっています。例えば、[JLCPCB](https://jlcpcb.com/) などです。
以下の回路図やガーバーファイルをダウンロードし、メーカーのウェブサイトにアップロードして、PCBを注文してください。


<br>
PCBの最後のバージョンは、ここで説明されています。詳しい情報やKiCadファイルへのアクセスは [Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/PCBs) を参照してください。

### エアロア v1.4
<img src="../docs/dnms/airrohr-PCB.jpg" style="display: block; width:40%;margin: 1em 0" loading="lazy"/>。
NodeMCU ESP8266 CPU/WLAN用のPCBで、DNMSや他のセンサー(SDS011, BME280...)を接続するためのI2C Bus拡張機能を備えています。

##### ダウンロード
* [回路図](../docs/dnms/airrohr-PCB-circuit-diagram.pdf)
* [PCBメーカーのウェブサイトにアップロードするガーバーファイル](../docs/dnms/airrohr-PCB-circuit-diagram-gerber.zip)

---
### DNMS - T4 V1.4
<img src="../docs/dnms/dnms-noise-measuring-teensy-4.jpg" style="display: block;width:40%; margin: 1em 0" loading="lazy"/>。
DNMS Teensy 4.0用のPCBで、NodeMCU ESP8266に直接接続したり、上記のAIRROHR用PCBに接続することができます。

#####  ダウンロード
* [回路図](../docs/dnms/dnms-noise-measuring-teensy-40-circuit-diagram.pdf)
* プリント基板メーカーのサイトにアップロードするガーバーファイル](../docs/dnms/dnms-noise-measuring-teensy-40-circuit-gerber.zip))

