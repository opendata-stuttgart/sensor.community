---
title: Introduktion
---
---
  <div class="max-w-screen-xl mx-auto pb-5">
    <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
    <div class="flex items-center">
          <span class="p-2 rounded-lg bg-indigo-500">
            <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5. 436 13.683A4.001 4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" >
            <svg>
          <span>
        <div class="flex-wrap flex">
          <p class="pt-1 text-indigo-700 font-medium">
              Noise er i betaversion. Send spørgsmål til<p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium understregning text-white hover:text-yellow-600">
                Noise@Sensor.Community<a>
        <div>
    <div>
  <div>
<div>


> 🚧 Byg din gør-det-selv-sensor, og bliv en del af det verdensomspændende opendata- og civictech-netværk. <br> Med DNMS (Digital Noise Measuring Sensor) kan du selv måle støjforurening.

 <img src="..docsdnmsdnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy">


Se den oprindelige vejledning og tidligere versioner af støjsensoren på [Helmut Bitters Github] (https://github.comhbitterDNMStreemasterManual).

<br>

Dette arkiv indeholder forskellige opsætninger til at bygge sensoren med forskellige typer printkort og PCB'er.
Dette arkiv indeholder forskellige opsætninger til at bygge sensoren med forskellige typer printkort og PCB'er.
 <br>
 <br>
 Der findes to forskellige former for opsætninger:
 Der findes to forskellige former for opsætninger:
* en opsætning, hvor NodeMCU'en med nogle sensorer (PM, temperatur osv.) og DNMS er adskilt. PCB'erne hedder AIRROHR V1.4 og DNMS - T4 V1.4
* en kombineret version af NodeMCU og DNMS på samme PCB: DNMS - T4+NodeMCU V1.4
* en kombineret version af NodeMCU og DNMS på samme PCB: DNMS - T4+NodeMCU V1.4
 Her beskrives kun den variant, hvor NODEMCU og DNMS er adskilt. Tag et kig på Helmut's Github for at se de andre varianter!
 Her beskrives kun den variant, hvor NODEMCU og DNMS er adskilt. Tag et kig på Helmut's Github for at se de andre varianter!
  I dette tilfælde kan forbindelsen mellem NodeMCU'en og DNMS være op til 10 m lang. Dette er vigtigt, fordi du skal finde den rigtige position for DNMS for at opnå nøjagtige støjmålinger.

#### Indkøbsliste

##### Enkelte komponenter
* [NodeMCU ESP8266 CPUWLAN](https://www.aliexpress.comwholesale?groupsort=1&amp;SortType=price_asc&amp;SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 udviklingskort] (https://www.pjrc.comstoreteensy40.html). Andre sælgere: EXPTECH](https://www.exp-tech.deplattformenteensy9596teensy-4.0-development-board), [Antratek](https://www.antratek.deteensy-4-0), [PIMORONI](https://shop.pimoroni.comproductsteensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.comproductsonehorseics43434-i2s-digital-microphone)
* ultrafleksible silikonekabler med en diameter på 0,15 mm² (AWG 26) i 6 forskellige farver
<br>
DNMS-sensoren (Digital Noise Measuring Sensor) kan kombineres med en airRohr PM-sensor:

* SPS30-fjernstøvsensor] (https://www.sparkfun.comproducts15103). Andre sælgere: Andre sælgere: [TME](https://www.tme.eudedetailssps30gassensorensensirion1-101638-10?brutto=1), [SOS electronic](https://www.soselectronic.deproductssensirionsps30-2-304234). Den sædvanlige [SDS011 PM-sensor](https://de.aliexpress.comwholesale?catId=0&amp;initiative_id=AS_20200813122806&amp;SearchText=sds011) kan også anvendes.
* [BME280 6-PIN Version, temperatur og fugtighed] (https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040440&amp;SearchText=bme280+-5V++3.3V). Andre sælgere: [Nettigo](https://nettigo.euproductsmodule-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.debauelementesensoren-modulefeuchtigkeitbme680-breakout-board-4in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-luftdruck-und-luftg-252-t)
* [Kabel](http://www.aliexpress.comwholesale?groupsort=1&amp;SortType=price_asc&amp;SearchText=Dupont+kabel+20cm+kvinde-hunke)
* [USB-kabel f.eks.: flad 2m Micro-USB] (https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040708&amp;SearchText=micro+usb+flad+kablet+kabel+2m)
* [Strømforsyning USB] (https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040834&amp;SearchText=single+micro+usb+eu+strømforsyning)
* [Kabelremme] (https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040852&amp;SearchText=cable+remme)

PCB'erne og vejrbeskyttelsen vil blive beskrevet nedenfor.

<br>

🙌 Fedt, du har besluttet at købe delene online!
Desværre kan leveringen tage fra dage op til tre uger.
Indtil da kan du nyde dit liv️.
