---
title: Configure
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
                 噪声正在测试中。发送问题到</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>

### 获取ID
1. 用USB线连接管理平台，为传感器供电。

2. 监测站尝试连接到配置的WiFi接入点。如果不成功，传感器将打开一个名为 "颗粒物ID"、"Feinstaubsensor-ID "或 "airRohr-ID "的接入点。这个ID就是**芯片ID**（例如13597771）。**请记下这个数字，因为您需要它来进行登记**。

3. 连接到创建的接入点。等到连接建立后，<br>*安卓*。如果连接立即断开，您可能需要停用 "连接->WiFi->高级 "下的 "智能网络开关 "选项。

4. 打开浏览器，输入[http://192.168.4.1/](http://192.168.4.1/)。

>⚠️ **请注意**NodeMCU可能需要尝试几次才能连接到家庭WiFi网络。请不要不耐烦，尝试直到成功为止。也可以通过智能手机对传感器进行配置。如果传感器的配置已经成功，那么在这个IP 192.168.4.1下，配置页面已经无法访问了

### Configure the station
1. 在 "配置 "下输入SSID（家庭WiFi网络名称）、网络安全密钥（Windows下）或WiFi密码。

2. 根据本手册，对于噪音传感器（DNMS），无需进一步更改。

3. 点击保存后，传感器将重新启动，当它连接到WLAN时，不再以这种方式访问。

<br>

<img src="../docs/airrohr_config_initial.jpg" loading="lazy"/>

<br>

### Test the station
如果除了输入WiFi网络数据外，没有其他变化，那么大约10分钟后，传感器可以在以下页面上进行 "测试"。在这些页面上，你必须搜索芯片ID（在上面的例子中是13597771）。

* [Sensordaten](www.madavi.de/sensor/graph.php)
* [无线局域网信号](www.madavi.de/sensor/signal.php) 



