## Axios API
1. Revisar el sitio oficial de Axios [https://axios-http.com/es/]
2. Instalar axios desde npm con el comando 
```sh
npm install axios
```
3. Ejecutar el proyecto de React en el navegador con el comando
```sh
npm run dev
```

## Manejando axios
1. En el archivo App.js, importar axios
```javascript
import axios from 'axios'
```
2. Crear la función de tipo async-await para consumir una API
3. indicamos el evento en linea para el primer botton con el tipo de evento y la funcion a ejecutar `onclick ={getUsers}`
4. Crear la funcion `postUser`de tipo async-awit para enviar datos a una API.
5. Indicamos el evento en línea para el segundo botón, con el tipo de evento y la función a ejecutar 
```javascript
<button onClick={postUser}>
```