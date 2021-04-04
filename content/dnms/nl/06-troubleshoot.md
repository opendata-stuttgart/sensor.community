---
title: Problemen oplossen
---

### Problemen met de overdracht?
Voer het volgende in uw browser in met uw eigen gegevens:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

De [ID] kan ook worden opgezocht in het aan de linkerkant van de pagina geopende invoerveld [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1).

* Is de sensor geregistreerd via [https://devices.sensor.community](https://devices.sensor.community) en is de sensor zichtbaar op de kaart?
* Is het draadloze signaal in het verleden zwak geweest?
  Hier is het server-side signaal protocol: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`.

### Problemen met de USB-kabel?
* Controleer de stroomvoorziening
* Opnieuw opstarten (stroomtoevoer verbreken, bijv. USB-stekker uittrekken)
* Is de WLAN configuratie OK (de sensor maakt verbinding met het geconfigureerde WLAN). Zo niet:
  * Opent de sensor een adhoc wifi (toegangspunt), in de eerste 2-7 minuten na een herstart?
  * Zoek het WLAN netwerk `airrohr-[ID]`. Na een herstart kan het een paar minuten duren voordat dit zichtbaar is.
* Controleer op uw eigen router of de sensor in het netwerk is geregistreerd en noteer het IP-adres.
  * gebruik als alternatief "Zoeken in netwerk" in de [airRohr Flashing Tool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
  * Zo ja: Maak verbinding met de sensor via een browser `http://[ip-your-sensor]`, de configuratie zou moeten verschijnen
  * Zo nee: dan kan het te wijten zijn aan onvoldoende stroomtoevoer, herstartlus of iets dergelijks.
* Sluit de NodeMCU aan op een computer via een USB-kabel en kijk naar het protocol
  * Traceren met een serieel terminalprogramma (instellingen: Baud 9600, 8N1)
    * Linux: scherm, minicom, cutecom
    * Windows: Tera Term
    * macOS: scherm, minicom, ...
    * geschikte USB-2 seriële stuurprogramma's kunnen nodig zijn, zie [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
  * Daar moet u zien wat de sensor aan het doen is (opstartberichten, WLAN-verbinding of toegangspunt, meting - pas na 3 minuten)

### Problemen met de elektronica?
* Verwijder de sensorelektronica uit de behuizing en bekijk ze van dichtbij.
* Controleer de stroomtoevoer opnieuw
    * Flitst de NodeMCU(ESP8266) kort na het herstarten?
    * SDS011: rode LEDFan brandt na reboot?
    * Controleer de kabels naar de sensoren opnieuw.

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
                Ruis is in beta. Vragen kunt u sturen naa</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>
