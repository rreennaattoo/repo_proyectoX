# ¿Cómo fue el proceso de visualización?
## El proceso de la visualización fue estructurada de la siguiente forma: 
## 1 Corregir errores: reordenar la base de datos con algunas películas que había asignado erróneamente en otras casillas. Luego, comprobar que todas tuviesen los datos que debían 
## 2 Determinar: Con los datos ya ordenados, configure posibles hipótesis y las puse a prueba en base al análisis de los mismos. El hallazgo fue que las mujeres son menos representadas en el cine
## 3 Buscar un gráfico: Con una hipótesis en base a mi base de datos, busqué en Altair un gráfico que me permitiera mostrar ese hallazgo de la mejor manera posible
## 4 Determinar’: Como mi hipótesis y visualización no necesitaba del título de las películas para probarse, determiné sacar esa columna y dejar el resto de información. Con eso generé un nuevo CSV y fui a Google Colab para armar el gráfico
## Final: Se crea el gráfico y se va corrigiendo según indica Gemini en la misma aplicación de Google Colab. Luego se transforma en formato JPG y HTML

# ¿Qué contiene la base de datos?
## La base de datos contiene los nombres y género de los actores protagonistas y secundarios de las películas chilenas de los últimos 15 años. 
## - se omitió el nombre de las películas, pues no es relevante para la construcción del gráfico
## - observación: a pesar de que los nombres de los actores tampoco es utilizada, se dejaron para que no generar confusiones cuando tratando los datos

# Preguntas a responder con la visualización
## ¿Quién aparece más como protagonista en películas chilenas?
## ¿Quién aparece más como actor secundario en películas chilenas?
## ¿Quién se representa más en el cine?
## ¿Si una película tiene una actriz protagonista es más probable que su actor secundario también sea mujer?
