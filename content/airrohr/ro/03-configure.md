---
title: Configurați
---
### Obține ID-ul unic al stației
1. Conectați stația la un cablu USB pentru a alimenta senzorul.

2. Stația va încerca să se conecteze la rețeaua WiFi configurată. Pentru o nouă configurare, conexiunea va eșua și stația va crea o rețea WiFi cu numele `Particulate Matter ID` , `Feinstaubsensor-ID` sau `airRohr-ID`. ID-ul este **ChipID** (de exemplu, 13597771). **Vă rugăm să notați acest număr, deoarece veți avea nevoie de el pentru înregistrare**.

3. Conectați-vă la rețeaua WiFi creată de stație pe computer sau pe smartphone. Așteptați până când se stabilește conexiunea.<br>*Android*: Dacă conexiunea se deconectează imediat, este posibil să trebuiască să dezactivați opțiunea "Smart network switch" (Comutare inteligentă a rețelei) din "Connections -> WiFi -> Advanced" (Conexiuni -> WiFi -> Avansat).

4. Deschideți browserul și tastați [http://192.168.4.1](http://192.168.4.1).

> ⚠️ **Atenție** Este posibil să fie nevoie de câteva încercări pentru ca NodeMCU să se conecteze la rețeaua WiFi de acasă. Vă rugăm să aveți răbdare și să încercați pașii de mai multe ori până când funcționează. Dacă configurarea senzorului a funcționat, rețeaua WiFi a stației nu va fi disponibilă și pagina de configurare nu va mai fi accesibilă sub acest IP 192.168.4.1

### Configurați stația
1. În pagina "Configuration" (Configurație), introduceți SSID-ul (numele rețelei WiFi de acasă), cheia de securitate a rețelei (în Windows) sau parola WiFi.

2. Dacă utilizați senzorul de praf fin recomandat (SDS011), nu sunt necesare alte modificări de configurare.

3. Faceți clic pe butonul "Save configuration and restart" (Salvați configurația și reporniți). Stația va reporni și nu va mai fi accesibilă în acest mod atunci când se va conecta la rețeaua WiFi de acasă.

<br>

<img src="..docsairrohr_config_initial.jpg" loading="lazy">

<br>

### Verifică dacă stația este configurată corect
Dacă nu ați făcut alte modificări în etapa anterioară în afară de configurarea rețelei WiFi, senzorul va începe acum să înregistreze și să încarce datele. Puteți verifica dacă totul funcționează corect după aproximativ 10 minute, navigând pe următoarele pagini. Pe aceste pagini căutați ChipID (în exemplul de mai sus, 13597771).

 * [Date senzoriale](https://www.madavi.de/sensor/graph.php)
 * [Date semnal WiFi](https://www.madavi.de/sensor/signal.php)
