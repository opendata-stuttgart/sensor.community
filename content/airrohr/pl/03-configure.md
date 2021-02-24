---
title: Configure
---
# # Get the unique station ID
1. 1. Podłączyć stację do kabla USB w celu zasilenia czujnika.

2. Stacja spróbuje podłączyć się do skonfigurowanej sieci WiFi. W przypadku nowej konfiguracji połączenie nie powiedzie się i stacja utworzy sieć WiFi o nazwie `Particulate Matter ID` , `Feinstaubsensor-ID` lub `airRohr-ID`. ID to **ChipID** (na przykład 13597771). **Proszę zanotować ten numer w dół, ponieważ będzie on potrzebny do rejestracji**

3. Połącz się z siecią WiFi utworzoną przez stację na komputerze lub smartfonie. Poczekaj, aż połączenie zostanie nawiązane.<br>*Android*: Jeśli połączenie zostanie natychmiast rozłączone, być może trzeba będzie wyłączyć opcję "Przełącznik sieci inteligentnej" w zakładce "Połączenia -> WiFi -> Zaawansowane".

4. Otwórz przeglądarkę i wpisz w polu [http://192.168.4.1/](http://192.168.4.1/).

> ⚠️ **Proszę zwrócić uwagę** Może się zdarzyć, że NodeMCU podejmie kilka prób połączenia z domową siecią WiFi. Bądź cierpliwy i spróbuj wykonać te kroki kilka razy, aż zadziałają. Jeśli konfiguracja czujnika zadziałała, sieć WiFi stacji nie będzie dostępna i strona konfiguracyjna nie będzie już dostępna pod tym adresem IP 192.168.4.1.

### Skonfiguruj stację
1. Na stronie "Konfiguracja" wpisz identyfikator SSID (nazwę domowej sieci WiFi), klucz bezpieczeństwa sieci (pod Windows) lub hasło WiFi.

2. Jeżeli używasz zalecanego czujnika drobnego pyłu (SDS011), dalsze zmiany konfiguracji nie są konieczne.

3. 3. Kliknąć przycisk "Zapisz konfigurację i uruchom ponownie". Stacja uruchomi się ponownie i nie będzie już dostępna w ten sposób po podłączeniu do domowej sieci WiFi.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Sprawdź, czy stacja jest prawidłowo skonfigurowana
Jeżeli w poprzednim kroku nie dokonano żadnych innych zmian poza konfiguracją sieci WiFi, czujnik rozpocznie teraz rejestrowanie i przesyłanie danych. Po około 10 minutach można sprawdzić, czy wszystkie dane działają prawidłowo, przechodząc do kolejnych stron. Na tych stronach wyszukaj ChipID (w przykładzie powyżej 13597771).

 * [Dane z czujników](https://www.madavi.de/sensor/graph.php)
 * [Dane dotyczące sygnału WiFi](https://www.madavi.de/sensor/signal.php)
