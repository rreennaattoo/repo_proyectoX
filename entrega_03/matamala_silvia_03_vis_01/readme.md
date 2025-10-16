# ¿Cómo fue el proceso de visualización?
## El proceso de la visualización contaron con los siguientes pasos: 
## 1Organizar la base de datos creada inicialmente para que fuera útil en la visualización deseada. En ella, se mantuvo el registro de las películas chilenas y los festivales tanto nacionales como internacionales en donde fueron estrenadas, junto con el país correspondiente. 
## 2 Luego, se hizo una limpieza de espacios en blanco y se completó el número de películas para quedar a la par con el resto del grupo. Resultó un CSV para poder usarlo en función de las gráficas de Altair. 
## 3 Elegir un gráfico que representara lo que quería comunicar. En este caso fue un mapa de todo el mundo para incluir a los distintos festivales y sus respectivos países, en relación a las películas chilenas estrenadas en tal certamen. 
## 4 Dadas las características del gráfico en Altair, se agregó una variable que no estaba en el CSV original: las coordenadas de cada país. La latitud y longitud fueron agregadas con códigos sugeridos por Google Colab para trabajar desde la misma plataforma y así permitir ubicar geográficamente cada festival en el mapa elegido. 
## 5 Con la base ya lista, se crea el mapa interactivo. Cada punto contiene información interactiva (tooltip) con el nombre de la película, el festival y el país, lo que permite una lectura más dinámica y narrativa del fenómeno. 

# ¿Qué contiene la base de datos?
## La base de datos utilizada contiene los datos de películas chilenas y los festivales internacionales donde fueron presentadas. El proceso fue el siguiente: 
## - Se omitieron las variables de dirección, producción y guión para solo usar las relacionadas al estreno en festivales. 
## - Agregar las variables de las coordenadas de cada país mencionado respecto al festival de cine en donde se estrenó cada película chilena. El CSV fue modificado en Google Colab a través de los códigos ofrecidos por Gemini. 
## - Las variables seleccionadas fueron para poder visualizar de forma concreta un ámbito del cine chileno en el contexto internacional, sin dejar fuera el nacional. Es por eso que se usó un mapa del mundo como un todo. 

# Preguntas que puede responder la visualización: 
## ¿En qué regiones del mundo se exhibe con mayor frecuencia el cine chileno?
## ¿Qué países o continentes concentran los principales festivales donde se muestran películas nacionales?
## ¿Existen zonas del mundo donde el cine chileno tiene menor presencia?

