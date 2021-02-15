---
title: Troubleshoot
---

### Transmitting problems?
Enter the following in the browser with your own data:
`https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1&var-chipID=esp8266-[ID]`

The [ID] can also be searched for in input field in the upper left corner [https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1](https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1)

* Is the sensor registered via [https://devices.sensor.community/](https://devices.sensor.community/) and is the sensor visible on the map?
    * Was the WLAN signal level weak in the past?
        here is the signal log server-side: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`
        


### USB cable problems?
* Check power supply: USB cable
* Reboot (disconnect power supply, e.g. pull USB plug)
* Is the WLAN Config OK (the sensor connects to the configured WLAN) If not:
    * does the sensor open an AP (in the first 2-7 minutes after a reboot)?
    * Look for `airrohr-[ID]` WLAN network. Patience, it may take 1-2 minutes after boot.
* Check on your own router if the sensor is logged into the network, then remember the IP 
    * alternatively use "Discovery" in the [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
    * If yes: connect to the sensor via IP with a browser `http://[ip-of-the-sensor]/` , the interface should appear 
    * If no: the ESP has problems, e.g. power supply insufficient, reboot loop or similar
* Connect USB to a computer and view the log 
    * Track text on serial interface with serial terminal program (Settings: baud 9600, 8N1)
        * Linux: screen, minicom, cutecom; Windows: Tera Term; MacOS: screen, minicom, ...
        * possibly suitable usb2serial drivers are still necessary, see [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)     
    * There you should be able to see what the sensor is doing (boot messages, WLAN connection or AP, measurement - only after 3 minutes)

### Electronics problems?
* Remove sensor electronics from the housing and observe
* Check/replace power supply again
    * does ESP flash shortly after reboot?
    * Teensy: red LED flashing after reboot?
    * check/replace the cables to the sensors again


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
                Noise is in beta. Send questions to</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>
