---
title: Αντιμετώπιση προβλημάτων
---

### Προβλήματα μετάδοσης;
Εισάγετε τα ακόλουθα στο πρόγραμμα περιήγησης με τα δικά σας δεδομένα:
`https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1&var-chipID=esp8266-[ID]`

Το [ID] μπορεί επίσης να αναζητηθεί στο πεδίο εισαγωγής στην επάνω αριστερή γωνία [https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1](https://api-rrd.madavi.de/grafana/d/BYsfp-xGz/dnms?orgId=1)

* Έχει καταχωρηθεί ο αισθητήρας μέσω [https://devices.sensor.community/](https://devices.sensor.community/) και είναι ο αισθητήρας ορατός στο χάρτη;
  * Το επίπεδο σήματος WLAN ήταν αδύναμο στο παρελθόν;
    Εδώ είναι το αρχείο καταγραφής σήματος από την πλευρά του διακομιστή: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`



### Προβλήματα με το καλώδιο USB;
* Ελέγξτε την παροχή ρεύματος: Καλώδιο USB
* Επανεκκίνηση (αποσυνδέστε την παροχή ρεύματος, π.χ. τραβήξτε το βύσμα USB)
* Είναι εντάξει η διαμόρφωση WLAN (ο αισθητήρας συνδέεται στο διαμορφωμένο WLAN) Εάν όχι:
  * Ανοίγει ο αισθητήρας ένα AP (στα πρώτα 2-7 λεπτά μετά την επανεκκίνηση);
  * Αναζητήστε το δίκτυο WLAN `airrohr-[ID]`. Υπομονή, μπορεί να χρειαστούν 1-2 λεπτά μετά την εκκίνηση.
* Ελέγξτε στο δικό σας δρομολογητή αν ο αισθητήρας είναι συνδεδεμένος στο δίκτυο, τότε θυμηθείτε την IP
  * εναλλακτικά χρησιμοποιήστε το "Discovery" στο [flashtool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher//)
  * Αν ναι: συνδεθείτε στον αισθητήρα μέσω IP με ένα πρόγραμμα περιήγησης `http://[ip-του-αισθητήρα]/` , θα πρέπει να εμφανιστεί η διεπαφή
  * Αν όχι: το ESP έχει προβλήματα, π.χ. ανεπαρκής παροχή ρεύματος, βρόχος επανεκκίνησης ή κάτι παρόμοιο
* Συνδέστε USB σε υπολογιστή και δείτε το αρχείο καταγραφής
  * Παρακολουθήστε το κείμενο στη σειριακή διεπαφή με πρόγραμμα σειριακού τερματικού (Ρυθμίσεις: baud 9600, 8N1)
    * Linux: screen, minicom, cutecom: MacOS: οθόνη, minicom, ...
    * πιθανόν να απαιτούνται ακόμη κατάλληλοι οδηγοί usb2serial, βλέπε [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
  * Εκεί θα πρέπει να μπορείτε να δείτε τι κάνει ο αισθητήρας (μηνύματα εκκίνησης, σύνδεση WLAN ή AP, μέτρηση - μόνο μετά από 3 λεπτά)

### Προβλήματα ηλεκτρονικών;
* Αφαιρέστε τα ηλεκτρονικά του αισθητήρα από το περίβλημα και παρατηρήστε
* Ελέγξτε/αντικαταστήστε ξανά το τροφοδοτικό
  * Το ESP αναβοσβήνει λίγο μετά την επανεκκίνηση;
  * Teensy: αναβοσβήνει η κόκκινη λυχνία LED μετά την επανεκκίνηση;
  * Ελέγξτε/αντικαταστήστε ξανά τα καλώδια προς τους αισθητήρες.

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
