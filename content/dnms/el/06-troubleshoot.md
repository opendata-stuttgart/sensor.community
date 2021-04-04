---
title: Αντιμετώπιση προβλημάτων
---

### Προβλήματα στη μεταφορά;
Εισάγετε τα ακόλουθα στο πρόγραμμα περιήγησής σας με τα δικά σας δεδομένα:
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

Το [ID] μπορεί επίσης να αναζητηθεί στο πεδίο εισαγωγής που είναι ανοικτό στην αριστερή πλευρά της σελίδας [https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1).

* Έχει καταχωρηθεί ο αισθητήρας μέσω [https://devices.sensor.community](https://devices.sensor.community) και είναι ο αισθητήρας ορατός στο χάρτη;
* Το ασύρματο σήμα ήταν αδύναμο στο παρελθόν;
  Ακολουθεί το πρωτόκολλο σήματος από την πλευρά του διακομιστή: `https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`.

### Προβλήματα με το καλώδιο USB;
* Ελέγξτε την παροχή ρεύματος
* Επανεκκίνηση (αποσυνδέστε την παροχή ρεύματος, π.χ. βγάλτε το βύσμα USB)
* Είναι εντάξει η διαμόρφωση του WLAN (ο αισθητήρας συνδέεται στο διαμορφωμένο WLAN). Εάν όχι:
  * Ανοίγει ο αισθητήρας ένα adhoc wifi (σημείο πρόσβασης) στα πρώτα 2-7 λεπτά μετά την επανεκκίνηση;
  * Αναζήτηση για το δίκτυο WLAN `airrohr-[ID]`. Μπορεί να χρειαστούν μερικά λεπτά μετά την επανεκκίνηση μέχρι να γίνει ορατό.
* Ελέγξτε στο δικό σας δρομολογητή αν ο αισθητήρας είναι εγγεγραμμένος στο δίκτυο και σημειώστε τη διεύθυνση IP.
  * εναλλακτικά χρησιμοποιήστε την "Αναζήτηση στο δίκτυο" στο [airRohr Flashing Tool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher/)
  * Αν ναι: Συνδεθείτε στον αισθητήρα μέσω ενός προγράμματος περιήγησης `http://[ip-your-sensor]`, θα πρέπει να εμφανιστεί η ρύθμιση παραμέτρων.
  * Αν όχι: θα μπορούσε να οφείλεται σε ανεπαρκή παροχή ρεύματος, βρόχο επανεκκίνησης ή κάτι παρόμοιο.
* Συνδέστε το NodeMCU σε έναν υπολογιστή μέσω ενός καλωδίου USB και δείτε το πρωτόκολλο
  * Παρακολούθηση με ένα σειριακό τερματικό πρόγραμμα (ρυθμίσεις: Baud 9600, 8N1)
    * Linux: οθόνη, minicom, cutecom
    * Windows: Tera Term
    * macOS: οθόνη, minicom, ...
    * Μπορεί να χρειαστούν κατάλληλοι σειριακοί οδηγοί USB-2, βλ. [https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
  * Εκεί θα πρέπει να δείτε τι κάνει ο αισθητήρας (μηνύματα εκκίνησης, σύνδεση WLAN ή σημείο πρόσβασης, μέτρηση - μόνο μετά από 3 λεπτά)

### Προβλήματα με τα ηλεκτρονικά;
* Αφαιρέστε τα ηλεκτρονικά στοιχεία του αισθητήρα από το περίβλημα και εξετάστε τα προσεκτικά.
* Ελέγξτε ξανά την παροχή ρεύματος
    * Το NodeMCU (ESP8266) αναβοσβήνει λίγο μετά την επανεκκίνηση;
    * SDS011: κόκκινο LEDΟ ανεμιστήρας ανάβει μετά την επανεκκίνηση;
    * Ελέγξτε ξανά τα καλώδια προς τους αισθητήρες.

  <div class="max-w-screen-xl mx-auto pb-5">
      <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
      <div class="flex items-center">
            <span class="p-2 rounded-lg bg-indigo-500">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5. 436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" >
              </svg>
            </span>
        <div class="flex flex-wrap">
          <div class="flex-wrap flex">
            <p class="pt-1 text-indigo-700 font-medium">
                Ο θόρυβος είναι σε beta. Στείλτε ερωτήσεις στο<p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>
  </div>