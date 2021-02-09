---
title: Configurar
---
### Consigue la estación ID
1. Conecta la estación a un cable USB para cargar el sensor.

2. La estación intentará conectarse a la red WiFi configurada. Para una nueva configuración, la conexión fallará y la estación creará una red WiFi con el nombre Particulate Matter ID, Feinstaubsensor-ID o airRohr-ID. El ID es el ChipID (por ejemplo, 13597771). **Anote este número, ya que lo necesitará para el registro**

3. Conecta a la red Wifi creada por la estación (Hotspot) con tu ordenador o móvil. Espera hasta que se establezca la conexión. <br>Android: Si la conexión se acaba inmediatamente, podrías tener desactivada la opción "Smart network switch" en "Connections -> WiFi -> Advanced".

4. Abre tu navegador y tecla la url siguiente [http://192.168.4.1/](http://192.168.4.1/).

> ⚠️ **Tome nota**  Tenga en cuenta que el NodeMCU puede necesitar varios intentes para conectarse a la red WiFi doméstica. Tenga paciencia y realice los pasos varias veces hasta que funcione. Si la configuración del sensor funciona, la red WiFi de la estación no estará disponible y la página de configuración ya no será accesible bajo esta IP 192.168.4.1

### Configurar la estación
1. En la página de 'Configuración' ingrese su SSID (el nombre de la red WiFi de su hogar), la clave de seguridad de la red (en Windows) o la contraseña de WiFi.

2. Si está utilizando el sensor recomendado (SDS011), no es necesario realizar más cambios de configuración.

3. Haga clic en el botón 'Guardar configuración y reiniciar'. La estación se reiniciará y ya no será accesible de esta manera cuando se conecte a la red WiFi de su hogar.

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>
<br>

### Verifica que la estación está correctamente configurada
Si no realizó ningún otro cambio en el paso anterior que no sea la configuración de la red WiFi, el sensor comenzará a grabar y cargar los datos. Puede verificar que todo funciona correctamente después de aproximadamente 10 minutos dirigiéndote a las siguientes páginas. En estas páginas, busque el ChipID (en el ejemplo anterior 13597771).

 * [Sensor data](https://www.madavi.de/sensor/graph.php)
 * [WiFi signal data](https://www.madavi.de/sensor/signal.php)
