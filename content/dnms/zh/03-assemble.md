---
title: 组装
---
>⚠️ **重要提示**。
装配前先安装固件!
请参见__固件刷新器__部分。


∮∮ 麦克风单元

麦克风单元是基于Pesky Products公司的MEMS麦克风ICS-43434突破板。你可以在[Tindie市场](https://www.tindie.comproductsonehorseics43434-i2s-digital-microphone)找到这样的电路板。

麦克风单元是基于Pesky Products公司的MEMS麦克风ICS-43434突破板。你可以在[Tindie市场](https://www.tindie.comproductsonehorseics43434-i2s-digital-microphone)找到这样的电路板。


##### 麦克风单元的外壳
外壳由0.500"（12.7mm）聚苯乙烯管制成。这个直径允许直接插入设备上的大多数校准器。

样机采用[长青236号管](https://evergreenscalemodels.comproducts236-500-12-7mm-od-white-polystyrene-tubing)开发。

样机采用[长青236号管](https://evergreenscalemodels.comproducts236-500-12-7mm-od-white-polystyrene-tubing)开发。
<br>
突破板必须用锉刀适应管子的直径。用一些胶带保护麦克风入口。
<br>

<br>
<br>

然后将六根硅胶线焊接好。注意电缆是用哪个引脚连接的!

然后将六根硅胶线焊接好。注意电缆是用哪个引脚连接的!
剪一段115毫米长的管子。
<br>
将麦克风板贴在一些交叉的胶带上。将电缆放入管子中，并将板子固定在管子的最末端。
<br>
<br>
<br>

使管子的四端用胶带贴紧。

使管子的四端用胶带贴紧。

现在你可以用一些树脂填充管子。这一步是必须的，以避免共振，并获得校准和可重复的数据。

原型是用Copaltec GmbH生产的一些[PURe Isolation ST 33](https://www.buerklin.comenPolyurethane-cast-resin-black-Copaltec-PURe-Isolation-ST-33p12L5900)开发的。

##### 规格。
* 绝缘强度：28千伏毫米
* 特定正向电阻。5.8.1014欧姆cm
* 表面电阻：1.3.1016欧姆。
*树脂硬化剂的混合比例：2：1。
* 锅时间：20至30分钟。
* 固化时间：16至30小时
* 最终硬化状态：10至14天。
* 粘度（混合）：500 à 600 mPa.s。
* 肖氏硬度：D 50至55（ISO 868，DIN 53505）。D 50至55(ISO 868，DIN 53505)
* 热导率：0.3 WmK；
* 应用温度。- 20至+130℃


Electrolube生产的[聚氨酯树脂UR5545](https://electrolube.comwp-contentuploads201911044-UR5545A-SDS1525.pdf)也可以使用。

每根管子用15克树脂就够了。

<img src=".docsdnmsdnms-noise-measuring-microphone-inside-tube.jpg" style="display:block; margin: 2em 0" loading="lazy">。

当树脂硬化后，取下胶带。您的麦克风单元已经准备好了。



### DNMS住房

当Teensy (DNMS)和NodeMCU(独立或PCB上)分离时。DNMS和airRohr

您需要一根直径为25毫米的管子（例如用于电气应用的管子）、一个连接器、一个90°的弓形接头和一个M25 IP68电缆接头。

管子本身的长度应该是160毫米。DNMS看起来地方在。麦克风外壳由电缆压盖维护。

弓可以防止水和湿气进入外壳，同时让电缆通过。

<img src=".docsdnmsdnms-noise-measuring-housing.jpg" style="margin: 1em 0" loading="lazy">。

DNMS 通过 RJ12 电缆连接到第二个 PCB。如果该电缆长度超过250毫米，则必须使用I²C延长线。

<img src=".docsdnmsdnms-noise-measuring-sensor-kit.jpg" style="margin: 1em 0" loading="lazy">。

一切连接好后，将各部件粘合在一起。

结果：

<img src=".docsdnmsdnms-noise-measuring-dn40-result.jpg" style="margin: 1em 0" loading="lazy">。

携带NodeMCU的PCB可以放在任何类型的电箱中。


###天气保护

外壳本身应该是防水的。只有麦克风入口可能是敏感的。制造商TDK公布了一些建议，用于密封InvenSense底口MEMS麦克风，防止灰尘和液体进入，但这些组件很难找到，也没有进行测试。

绝对有必要安装一个泡沫罩形式的天气保护。如有必要，即使是家用海绵也足够了。这有几个原因。
* 它可以防止风噪（可增加分贝测量值）。
* 它可以防止水直接泄漏在麦克风上。为避免麦克风上出现冷凝水，安装后请将盖子向后拉一拍，以形成一个小空腔。
* 它可以防止太阳辐射。强烈的阳光会影响测量值并缩短传声器的寿命。

* 它可以防止太阳辐射。强烈的阳光会影响测量值并缩短传声器的寿命。

这些泡沫覆盖物通常作为 "测量用微型传感器的覆盖物 "出售。但它们很贵。你也可以拿一个普通的泡沫球，用剪刀剪一个洞。

If you need more ones [this source](https://de.aliexpress.comitem32357483926.html?gps-id=pcStoreJustForYou&amp;scm=1007.23125.137358.0&amp;scm_id=1007.23125.137358.0&amp;scm-url=1007.23125.137358.0&amp;pvid=6cc8dfcd-974e-4fde-9dc9-6444c37a9069&amp;spm=a2g0o.store_home.smartJustForYou_148437547.2) can be helpful.

∮∮麦克风的位置

重要的是要将传声器放置在一个尽可能 "自由 "的区域，这意味着在一个尽可能少的声音反射面的位置。与反射面的距离应尽可能大。尽量不要将传声器直接安装在房屋的墙壁上，因为墙壁会强烈反射声音。 与墙壁的距离最好在1米以上，当然这并不总是容易实现。

从传声器的尖端到墙壁的距离约为50厘米，诱导的误差还是合理的。好的地方是例如阳台或露台栏杆，或屋顶上的小桅杆。

你也可以尝试将麦克风直接放在房子的角落，让反射部分相互抵消。

至少1米高的独立桅杆也是一种解决方案，但你必须注意地面上的反光。当然，这取决于地面覆盖物的情况。

同样重要的是，我们要时刻注意，我们测量的是环境噪声。 我们只能对公路或铁路等噪声源的噪声排放进行近似测量。

然而，你越接近源头，对源头的参考就越准确。然后，固件的升级应该能够获得已确定的噪声类型的preceise测量。

然而，你越接近源头，对源头的参考就越准确。然后，固件的升级应该能够获得已确定的噪声类型的preceise测量。
然而，你越接近源头，对源头的参考就越准确。然后，固件的升级应该能够获得已确定的噪声类型的preceise测量。
<br>
<br>
