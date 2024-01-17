## Reacr Router 

## insalación 
ejecutar el comando npm para instalar React Router dentro del proyecto 
```` s
npm i react-router-dom ```

### Implementación
1. Importar React Router en `main.jsx` para que se encuentre disponible en cualquier parte de la aplicación.
Para ello, importamos el componente 
`import { BrowserRouter } from 'react-router-dom`

2. Modificar el componente `<App />` y envolverlo con los componentes `<BrowserRouter> </ BrowserRouter>` quedando de la siguiente manera:
```javascript
import { BrowserRouter } from 'react-router-dom'

<BrowserRouter>
    <App />
</BrowserRouter>
```

3. Crear componentes `Inicio.jsx`, `SobreNosotros.jsx`, `Contacto.jsx` 
4. Necesitamos importar la funcionalidades que emplearemos `Route` y `Routes` dentro del archivo `App.jsx`

5. Modificamos `APP.jsx` para implementar Routes y Route
6. Para evitar etiquetas de anclaje <a></a>, vamos a ocupar una funcionalidad de react router llamada `{link}`