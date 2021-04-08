---
title: A  konfigurálása
---

  <div class="max-w-screen-xl mx-auto pt-5">
      <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
      <div class="flex items-center">
            <span class="p-2 rounded-lg bg-indigo-500">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </span>
        <div class="flex flex-wrap">
          <div class="flex-wrap flex">
            <p class="pt-1 text-indigo-700 font-medium">
                A zaj béta verzióban van. Kérdéseket a</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>

### Get the ID
1. Csatlakoztassa az állomást egy USB-kábellel az érzékelő bekapcsolásához.

2. Az állomás megpróbál csatlakozni a konfigurált WiFi hozzáférési ponthoz. Ha ez nem működik, az érzékelő megnyit egy hozzáférési pontot a `Particulate Matter ID` , `Feinstaubsensor-ID` vagy `airRohr-ID` névvel. Az ID a **ChipID** (például 13597771). **Kérjük, jegyezze fel ezt a számot, mivel a regisztrációhoz szüksége van rá**.

3. Csatlakozzon a létrehozott hozzáférési ponthoz. Várjon, amíg a kapcsolat létrejön.<br>*Android*: Ha a kapcsolat azonnal megszakad, akkor lehet, hogy ki kell kapcsolnia az 'Intelligens hálózatváltás' opciót a 'Kapcsolatok -> WiFi -> Speciális' alatt.

4. Nyissa meg a böngészőt, és írja be a [http://192.168.4.1/](http://192.168.4.1/)

> ⚠️ **Figyelem** Előfordulhat, hogy a NodeMCU-nak néhány próbálkozásra van szüksége ahhoz, hogy csatlakozzon az otthoni WiFi hálózathoz. Kérjük, ne legyen türelmetlen és próbálkozzon, amíg nem működik. Az érzékelő okostelefonon keresztül is konfigurálható. Ha az érzékelő konfigurálása működött, a konfigurációs oldal már nem érhető el ezen az IP 192.168.4.1 alatt.

### Az állomás konfigurálása
1. A "Configure" (Konfigurálás) alatt adja meg az SSID-t (az otthoni WiFi hálózat neve), a hálózati biztonsági kulcsot (Windows alatt) vagy a WiFi jelszót.

2. A zajérzékelők (DNMS) esetében a jelen kézikönyv szerint nincs szükség további módosításokra.

3. A mentés megnyomása után az érzékelő újraindul, és a WLAN-hoz való csatlakozáskor már nem érhető el így.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Az állomás tesztelése
Ha a WiFi hálózat adatainak megadásán kívül nem történt más változtatás, akkor az érzékelőt a következő oldalakon kb. 10 perc elteltével "tesztelheti". Ezeken az oldalakon meg kell keresni a ChipID-t (a fenti példában a 13597771-et).

* [Sensordaten](www.madavi.de/sensor/graph.php)
* [WLAN-jel](www.madavi.de/sensor/signal.php) 
        


 



