---
title: Εισαγωγή
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
             Ο θόρυβος είναι σε beta. Στείλτε ερωτήσεις στο</p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community</a>
        </div>
         </div>
    </div>
  </div>
</div>


> 🚧 Κατασκευάστε τον DIY αισθητήρα σας και γίνετε μέρος του παγκόσμιου δικτύου opendata & civictech. <br> Με τον DNMS (Ψηφιακός αισθητήρας μέτρησης θορύβου) μπορείτε να μετρήσετε μόνοι σας τη ρύπανση από θόρυβο.

<img src="../docs/dnms/dnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy"/>


Δείτε τις αρχικές οδηγίες και τις προηγούμενες εκδόσεις του αισθητήρα θορύβου στο [Github του Helmut Bitter](https://github.com/hbitter/DNMS/tree/master/Manual).

<br>

Αυτό το αποθετήριο περιέχει διαφορετικές ρυθμίσεις για την κατασκευή του αισθητήρα με διαφορετικά είδη πλακέτας και PCB.

<br>

Υπάρχουν δύο διαφορετικά είδη ρυθμίσεων:

* μια ρύθμιση όπου το NodeMCU με ορισμένους αισθητήρες (PM, θερμοκρασία κ.λπ.) και το DNMS είναι χωριστά. Οι πλακέτες ονομάζονται AIRROHR V1.4 και DNMS - T4 V1.4.
* μια συνδυασμένη έκδοση του NodeMCU και του DNMS στην ίδια πλακέτα: DNMS - T4+NodeMCU V1.4

Εδώ περιγράφεται μόνο η παραλλαγή όπου το NODEMCU και το DNMS είναι χωριστά. Ρίξτε μια ματιά στο Github του Helmut για τις άλλες παραλλαγές!

Σε αυτή την περίπτωση, η σύνδεση μεταξύ του NodeMCU και του DNMS μπορεί να έχει μήκος έως και 10m. Αυτό είναι σημαντικό επειδή πρέπει να βρείτε τη σωστή θέση για το DNMS για να λάβετε ακριβείς μετρήσεις θορύβου.

### Κατάλογος αγορών

##### Μεμονωμένα εξαρτήματα
* [NodeMCU ESP8266 CPU/WLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [αναπτυξιακή πλακέτα Teensy 4.0](https://www.pjrc.com/store/teensy40.html). Άλλοι πωλητές: [EXPTECH](https://www.exp-tech.de/plattformen/teensy/9596/teensy-4.0-development-board), [Antratek](https://www.antratek.de/teensy-4-0), [PIMORONI](https://shop.pimoroni.com/products/teensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.com/products/onehorse/ics43434-i2s-digital-microphone/)
* εξαιρετικά εύκαμπτα καλώδια σιλικόνης με διάμετρο 0,15mm² (AWG 26) σε 6 διαφορετικά χρώματα
  <br>
  Ο αισθητήρας DNMS (ψηφιακός αισθητήρας μέτρησης θορύβου) μπορεί να συνδυαστεί με έναν αισθητήρα airRohr PM-Sensor:

* [αισθητήρα λεπτής σκόνης SPS30](https://www.sparkfun.com/products/15103). Άλλοι πωλητές: [TME](https://www.tme.eu/de/details/sps30/gassensoren/sensirion/1-101638-10/?brutto=1), [SOS electronic](https://www.soselectronic.de/products/sensirion/sps30-2-304234). Μπορεί επίσης να χρησιμοποιηθεί ο συνήθης [SDS011 PM sensor](https://de.aliexpress.com/wholesale?catId=0&initiative_id=AS_20200813122806&SearchText=sds011).
* [BME280 6-PIN έκδοση, θερμοκρασία και υγρασία](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V). Άλλοι πωλητές: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/sensoren-module/feuchtigkeit/gy-bme280-breakout-board-3in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-und-luftdruck?c=92)
* [Καλώδιο](http://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=Dupont+καλώδιο+20cm+γυναίκα-θηλυκό)
* [Καλώδιο USB π.χ.: Micro-USB επίπεδη 2m](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040708&SearchText=micro+usb+πλακέ+καλώδιο+2m)
* [Τροφοδοτικό USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [ιμάντες καλωδίου](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040852&SearchText=cable+ιμάντες)

Οι πλακέτες και η προστασία από τις καιρικές συνθήκες θα περιγραφούν παρακάτω.

<br>

🙌 Υπέροχα, αποφασίσατε να αγοράσετε τα εξαρτήματα online!
Δυστυχώς, η παράδοση μπορεί να διαρκέσει από ημέρες έως και τρεις εβδομάδες.
Μέχρι τότε απολαύστε τη ζωή σας️.

