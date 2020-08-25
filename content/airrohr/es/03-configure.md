---
title: Configurar
---
### Obtener la identificación única de la estación
1. Conecte la estación a un cable USB para encender el sensor.

2. La estación intentará conectarse a la red WiFi configurada. Para una nueva configuración, la conexión fallará y la estación creará una red WiFi con el nombre "Particulate Matter ID", "Feinstaubsensor-ID" o "airRohr-ID". El ID es el **ChipID** (por ejemplo 13597771). **Por favor, anote este número, ya que lo necesitará para el registro**

3. Conéctese a la red WiFi creada por la estación en su ordenador o smartphone. Espere hasta que se establezca la conexión.<br>*Androide*: Si la conexión se desconecta inmediatamente, es posible que tenga que desactivar la opción 'Conmutador de red inteligente' en 'Conexiones -> WiFi -> Avanzado'.

4. Abra su navegador y escriba [http://192.168.4.1/](http://192.168.4.1/).

> ⚠️ **Por favor, note** Puede tomar algunos intentos para que el NodeMCU se conecte a la red WiFi de su casa. Por favor, sea paciente y pruebe los pasos varias veces hasta que funcione. Si la configuración del sensor ha funcionado, la red WiFi de la estación no estará disponible y la página de configuración ya no será accesible bajo esta IP 192.168.4.1

### Configure la estación
1. En la página de "Configuración" introduzca su SSID (nombre de su red WiFi doméstica), la clave de seguridad de la red (en Windows) o la contraseña de WiFi.

2. Si utiliza el sensor de polvo fino recomendado (SDS011), no es necesario realizar más cambios en la configuración.

3. Haga clic en el botón "Guardar configuración y reiniciar". La estación se reiniciará y ya no será accesible de esta manera cuando se conecte a la red WiFi de su casa.

<br>

![](../docs/airrohr/airrohr_config_initial.png)
<br>

### Verificar que la estación está correctamente configurada
Si no ha hecho ningún otro cambio en el paso anterior, aparte de la configuración de la red WiFi, el sensor empezará ahora a grabar y a cargar los datos. Puedes verificar que todo funciona correctamente después de unos 10 minutos navegando a las siguientes páginas. En estas páginas busca el ChipID (en el ejemplo anterior el 13597771).

 * [Datos del sensor](http://www.madavi.de/sensor/graph.php)
 * [Datos de la señal WiFi](http://www.madavi.de/sensor/signal.php)
