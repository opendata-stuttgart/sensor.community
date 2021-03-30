---
title: A  konfigurálása
---
### Get the unique station ID
1. Az érzékelő bekapcsolásához csatlakoztassa az állomást egy USB-kábelhez.

2. Az állomás megpróbál csatlakozni a konfigurált WiFi hálózathoz. Új beállítás esetén a kapcsolat meghiúsul, és az állomás létrehoz egy WiFi hálózatot a `Particulate Matter ID` , `Feinstaubsensor-ID` vagy `airRohr-ID` névvel. Az ID a **ChipID** (például 13597771). **Kérjük, jegyezze fel ezt a számot, mivel a regisztrációhoz szükség lesz rá**.

3. Csatlakozzon a számítógépén vagy okostelefonján az állomás által létrehozott WiFi hálózathoz. Várjon, amíg a kapcsolat létrejön.<br>*Android*: Ha a kapcsolat azonnal megszakad, akkor lehet, hogy ki kell kapcsolnia az "Intelligens hálózatváltás" opciót a "Kapcsolatok -> WiFi -> Speciális" menüpontban.

4. Nyissa meg a böngészőt, és írja be a [http://192.168.4.1](http://192.168.4.1) szót.

> ⚠️ **Figyelem** Előfordulhat, hogy a NodeMCU-nak néhány próbálkozásba telik, amíg csatlakozik az otthoni WiFi hálózathoz. Kérjük, legyen türelmes, és próbálja meg a lépéseket többször, amíg nem működik. Ha az érzékelő konfigurálása működött, az állomás WiFi hálózata nem lesz elérhető, és a konfigurációs oldal már nem lesz elérhető ezen az IP 192.168.4.1 alatt.

### Az állomás konfigurálása
1. A "Konfiguráció" oldalon adja meg az SSID-t (az otthoni WiFi hálózat neve), a hálózati biztonsági kulcsot (Windows alatt) vagy a WiFi jelszót.

2. Ha az ajánlott finompor-érzékelőt (SDS011) használja, nincs szükség további konfigurációs módosításokra.

3. Kattintson a 'Konfiguráció mentése és újraindítás' gombra. Az állomás újraindul, és többé nem lesz így elérhető, amikor csatlakozik az otthoni WiFi hálózathoz.

<br>

<img src="..docsairrohr_config_initial.jpg" loading="lazy">

<br>

### Ellenőrizze az állomás helyes konfigurálását
Ha az előző lépésben a WiFi hálózat konfigurálásán kívül más változtatást nem végzett, az érzékelő most megkezdi az adatok rögzítését és feltöltését. Körülbelül 10 perc elteltével ellenőrizheti, hogy minden megfelelően működik-e, ha a következő oldalakra navigál. Ezeken az oldalakon keresse meg a ChipID-t (a fenti példában a 13597771).

 * [Érzékelő adatok](https://www.madavi.de/sensor/graph.php)
 * [WiFi jeladatok](https://www.madavi.de/sensor/signal.php)
