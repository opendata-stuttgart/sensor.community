---
title: PCBs and circuit diagrams
---

DNMSを作るには、当社のプリント基板を使うのが一番です。
今では、最低数量なしで数十ドルで回路基板を製造できるPCBメーカーがかなり多くなっています。例えば、[JLCPCB](https://jlcpcb.com/)などです。
下記の回路図やガーバーファイルをダウンロードし、メーカーのウェブサイトにアップロードするだけで、プリント基板を注文することができます。

<br>
ここでは、PCBの最終バージョンについて説明します。詳細な情報やKiCadファイルへのアクセスは[Helmut Bitter's Github](https://github.com/hbitter/DNMS/tree/master/PCBs)を参照してください。

### airrohr v1.4
<img src="../docs/dnms/airrohr-PCB.jpg" style="display: block; width:40%;margin: 1em 0" loading="lazy"/>
NodeMCU ESP8266 CPUWLAN用のPCBで、DNMSや他のセンサー（SDS011, BME280...）を接続するためのI2Cバス拡張機能を備えています。


##### Download
* [回路図](../docs/dnms/airrohr-PCB-circuit-diagram.pdf)
* [PCBメーカーのウェブサイトにアップロードするガーバーファイル](../docs/dnms/airrohr-PCB-circuit-diagram-gerber.zip)

---

### dnms - T4 v1.4
DNMS Teensy 4.0用のPCBで、NodeMCU ESP8266や上記のAIRROHR PCBに直接接続することができます。


##### Download
* [回路図](...docsdnmsdnms-noise-measuring-teensy-40-circuit-diagram.pdf)
* プリント基板メーカーのサイトにアップロードするガーバーファイル](..docsdnmsdnms-noise-measuring-teensy-40-circuit-gerber.zip)

