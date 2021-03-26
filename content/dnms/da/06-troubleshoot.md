---
title: Fejlfinding
---

#### Problemer med at overføre?
Indtast følgende i din browser med dine egne data:
`https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1&amp;var-chipID=esp8266-[ID]`

Der kan også søges efter [ID] i det indtastningsfelt, der er åbnet i venstre side af siden [https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1](https://api-rrd.madavi.degrafanadGUaL5aZMzpm-sensors?orgId=1).

* Er sensoren registreret via [https://devices.sensor.community](https://devices.sensor.community), og er sensoren synlig på kortet?
* Har det trådløse signal tidligere været svagt?
  Her er signalprotokollen på serversiden: `https://api-rrd.madavi.degrafanadFk6mw1WGzwifi-signal?orgId=1&amp;var-chipID=esp8266-[ID]`.

#### Problemer med USB-kablet?
* Kontroller strømforsyningen
* Genstart (afbryd strømforsyningen, f.eks. ved at trække USB-stikket ud)
* Er WLAN-konfigurationen OK (sensoren opretter forbindelse til det konfigurerede WLAN). Hvis ikke:
  * Åbner sensoren et adhoc wifi (adgangspunkt) i de første 2-7 minutter efter en genstart?
  * Søg efter WLAN-netværket `airrohr-[ID]`. Det kan tage et par minutter efter en genstart, før dette er synligt.
* Kontroller på din egen router, om sensoren er registreret i netværket, og noter IP-adressen.
  * Alternativt kan du bruge "Søg i netværk" i [airRohr Flashing Tool] (https://github.comopendata-stuttgartairrohr-firmware-flasher)
  * Hvis ja: Opret forbindelse til sensoren via en browser `http://[ip-your-sensor]`, og konfigurationen bør vises
  * Hvis nej: Det kan skyldes utilstrækkelig strømforsyning, genstartsløjfe eller lignende.
* Tilslut NodeMCU'en til en computer via et USB-kabel og se på protokollen
  * Spor med et serielt terminalprogram (indstillinger: Baud 9600, 8N1)
    * Linux: skærm, minicom, cutecom
    * Windows: Tera Term
    * macOS: skærm, minicom, ...
    * Det kan være nødvendigt med passende USB-2 serielle drivere, se [https://github.comopendata-stuttgartmetawikiFirmware-einspielen](https://github.comopendata-stuttgartmetawikiFirmware-einspielen)
  * Der skal du se, hvad sensoren gør (opstartmeddelelser, WLAN-forbindelse eller adgangspunkt, måling - først efter 3 minutter)

#### Problemer med elektronikken?
* Fjern sensorelektronikken fra huset, og se nærmere på den.
* Kontroller strømforsyningen igen
    * Blinker NodeMCU'en (ESP8266) kort tid efter genstart?
    * SDS011: rød LEDFan lyser op efter genstart?
    * Kontroller igen kablerne til sensorerne.

  <div class="max-w-screen-xl mx-auto pt-5">
      <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
      <div class="flex items-center">
            <span class="p-2 rounded-lg bg-indigo-500">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5. 436 13.683A4.001 4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" >
              <svg>
            <span>
        <div class="flex flex-wrap">
          <div class="flex-wrap flex">
            <p class="pt-1 text-indigo-700 font-medium">
                Noise er i øjeblikket i betaversion. Send dine spørgsmål til<p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium understregning text-white hover:text-yellow-600">
                  Noise@Sensor.Community<a>
          <div>
           <div>
      <div>
    <div>
  <div>
