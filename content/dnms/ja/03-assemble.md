---
title: Assemble
---
> ⚠️ **重要なお知らせ**)
組み立て前にファームウェアをインストールしてください
firmware flasher__の項を参照。


### Microphone unit

マイクユニットは、MEMSマイクを搭載したPesky Products社のブレイクアウトボードICS-43434をベースにしています。このようなボードは[Tindie marketplace](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)で購入できます。

<img src="../docs/dnms/dnms-noise-measuring-microphone.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>

##### Housing for the microphone unit
筐体には0.500インチ（12.7mm）のポリスチレン製チューブが使用されています。この直径により、ほとんどの校正器を直接ユニットに接続することができます。

プロトタイプは、[Evergreen No.236 tubing](https://evergreenscalemodels.com/products/236-500-12-7mm-od-white-polystyrene-tubing) で開発されました。

<img src="../docs/dnms/dnms-noise-measuring-microphone-anschluesse.jpg" style="width:40%; margin: 3em 0" loading="lazy"/>

<br>
ブレイクアウトボードは、チューブの直径に合わせてヤスリで削る必要があります。マイクインレットを保護するためにテープを使用してください。
<br>

<img src="../docs/dnms/dnms-noise-measuring-microphone-protection.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-protection-front.jpg" style="width:41%; margin: 2em 0" loading="lazy"/>

その後、6本のシリコンケーブルをハンダ付けします。ケーブルがどのピンに接続されているか注意してください。

<img src="../docs/dnms/dnms-noise-measuring-microphone-with-cable.jpg" style="display: block; width:40%; margin: 2em 0" loading="lazy"/>

長さ115mmのチューブをカットします。
<br>
マイクボードをクロステープで貼り付けます。チューブの中にケーブルを入れ、チューブの先端でボードを固定します。
<br>

<img src="../docs/dnms/dnms-noise-measuring-microphone-preparing-housing.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>
<img src="../docs/dnms/dnms-noise-measuring-microphone-housing.jpg" style="width:42%; margin: 2em 0" loading="lazy"/>

チューブの先端をテープで締めます。

<img src="../docs/dnms/dnms-noise-measuring-microphone-tube.jpg" style="width:40%; margin: 2em 0" loading="lazy"/>

これで、チューブの中に樹脂を入れることができます。共鳴を防ぎ、校正された再現性のあるデータを得るためには、このステップは必須です。

試作品は、Copaltec GmbH社製の「PURe Isolation ST 33」https://www.buerklin.com/en/Polyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33/p/12L5900）を一部使用して開発しました。

##### Specifications
* 誘電率：28kVmm
* 固有の順方向抵抗。5,8.1014 ohmcm
* 表面抵抗値：1,3.1016Ω
* 混合比 レジンハードナー：2：1
* Pot time: 20～30 min.
* 硬化時間：16～30時間
* 最終硬化状態：10～14日
* 粘度（混合）：500～600mPa.s
* ショア硬さ D 50～55 (ISO 868, DIN 53505)
* 熱伝導率：0.3WmK
* アプリケーションの温度。- 20～＋130 °C


エレクトロルーブ社製の[ポリウレタン樹脂 UR5545](https://electrolube.com/wp-content/uploads/2019/11/044-UR5545A-SDS1525.pdf) も使えるはずです。

チューブ1本につき、15gの樹脂があれば十分です。

<img src="../docs/dnms/dnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy"/>

樹脂が固まったらテープを剥がします。マイクユニットの完成です。



### DNMS Housing

Teensy(DNMS)とNodeMCU(スタンドアローン、PCB上)を分離した場合。DNMSとairRohr

必要なものは、直径25mmのチューブ（電気用チューブなど）、コネクタ、90°の弓、M25 IP68ケーブルグランドです。

チューブ自体の長さは160mmが望ましい。DNMSは場所を見る。マイクのハウジングはケーブルグランドで維持されている。

この弓は、水や湿気の侵入を防ぎながら、ケーブルを通します。

<img src="../docs/dnms/dnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy"/>

DNMSはRJ12ケーブルで第2PCBに接続されています。このケーブルが250mmよりも長い場合は、I²Cエクステンションを使用する必要があります。

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy"/>

すべてのパーツがうまくつながった後、パーツを接着していきます。

結果。

<img src="../docs/dnms/dnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy"/>

NodeMCUを搭載したPCBは、どんな種類の電気ボックスにも入れることができます。


### Weather Protection

ハウジング自体が防水であること。マイクのインレットだけが敏感になる可能性があります。製造元であるTDKは、InvenSenseのボトムポートMEMSマイクロフォンを埃や液体の侵入から密閉するための推奨事項を発表しているが、部品の入手が困難であり、テストも行っていない。

そのためには、発泡スチロール製のカバーを取り付ける必要があります。必要であれば、家庭用のスポンジでも十分です。これにはいくつかの理由があります。
* 風切り音からの保護（デシベルの測定値を上げることができる
* マイクに直接水が漏れるのを防ぎます。マイクへの結露を防ぐために、カバーを取り付けた後、カバーを1拍引いて小さな空洞を作ります。
* 太陽の光から保護します。強烈な日差しは測定値に影響を与え、マイクロホンの寿命を縮めます。

<img src="../docs/dnms/dnms-noise-measuring-microphone-bonette.jpg" style="width:45%; margin: 3em 0" loading="lazy"/>

発泡スチロールのカバーは、通常「測定用マイクロフォンのカバー」として販売されている。しかし、それは高価なものです。また、普通の発泡スチロールボールにハサミで穴を開けてもいい。

If you need more ones [this source](https://de.aliexpress.com/item/32357483926.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&spm=a2g0o.store_home.smartJustForYou_148437547.2
) can be helpful.

### Location of the microphone

マイクロホンは、できるだけ音の反射しない場所に設置することが重要です。反射面からの距離はできるだけ大きくしてください。壁は音を強く反射するので、マイクを家の壁に直接取り付けないようにしてください。 壁からの距離は理想的には1m以上必要です。

マイクの先端から壁までの距離が約50cmあれば、誘導誤差はまだ妥当なところです。ベランダやテラスの手すり、屋根の上の小さなマストなどが良いでしょう。

また、家の角に直接マイクを置いてみると、反射音が部分的に相殺されます。

高さ1m以上の独立したマストも考えられますが、その場合は地面への反射を気にしなければなりません。もちろん、床の材質にもよりますが。

また、周囲の騒音を測定していることを常に意識することも重要です。 道路や鉄道などの騒音源から放出される騒音については、概算することしかできません。

しかし、音源に近づけば近づくほど、音源への参照がより正確になります。ファームウェアをアップグレードすることで、特定の種類のノイズを事前に測定できるようになるはずです。

<img src="../docs/dnms/measuring-sensor-on-balcony.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<img src="../docs/dnms/measuring-sensor-on-terasse.jpg" style="width:49%; margin: 1em 0;" loading="lazy"/>
<br>
<img src="../docs/dnms/measuring-sensor-on-wall.jpg" style="width:99%; margin-bottom: 2em;" loading="lazy"/>
