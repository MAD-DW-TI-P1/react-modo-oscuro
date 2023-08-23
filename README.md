<img src="https://jorgebenitezlopez.com/github/react.png">

# ¿Cómo hacer el modo oscuro de una web usando el useState y el useContext?

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). (Sería mejor con Vite)

## Scripts

`npx create-react-app my-app`

`cd my-app`

`npm start`

## Pasos

Cambio los colores ya que viene oscuro por defecto. En App.css

Para ir rápido cojo lo iconos de la página de [React](https://es.react.dev/reference/react/useContext). Están en SVG. Para hacerlo: Inspeccionar elementos, seleccionar el button. Limpio el código, me quedo con lo que interesa e igualo tamaño

Les puedo añadir un evento para ir probando `onClick={() => alert('sun')}` y `onClick={() => alert('dark')}`

Creo la clase .dark-mode en el css

`.dark-mode { background-color: #fff; filter: invert(1) hue-rotate(180deg);}`

- Invertir colores: [Invertir](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert)
- Gira el círculo cromático: [Hue](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate)

Compruebo lo que pasa cuando pongo como clase el dark-mode manualmente. Todo se invierte ¿no?

La idea es hacer el cambio dinámicamente a través de la actualización del estado

Importamos el useState en el componente: `import {useState} from 'react';`

Defino el estado dentro del componente: `const [theme, setTheme] = useState('light');`. Lo creo y le doy un valor por defecto. Lo importante del estado es que cuando se cambia renderiza el componente.

En los eventos onClick de los botones cambio el tema con una función flecha anónima: `() => setTheme('sun')` y `() => setTheme('dark')`

y el className del componente superior le añado la clase de forma dinámica (Dos formas de hacerlo): `<div className={"App " + theme + '-mode'}>` o con template string como está en el código ;)

Para hacer que un botón se oculte dependiendo del modo añado clase .hidden en el css como `display:none` y esta clase en los botones (también de forma dinámica: `className={theme === "sun" ? "show": "hidden"}` (Operador ternario)

Podría decir que ya está... pero invierte todo incluido las imágenes.

Para solucionarlos creo una clase auxiliar: `.aux-dark-mode {filter: invert(1) hue-rotate(180deg);}` 

y la pongo como variable en las imágenes: `<img src={logo} className={theme === "dark" ? "App-logo aux-dark-mode": "App-logo"} alt="logo" />`

Voy a crear más componentes para las redes sociales. En este caso utilizo [Icon Finder](https://www.iconfinder.com/search?q=networks). Modifico el XML y el CSS a camelCase para que funcione.

Vale, ya está, cambia todo de color pero ¿Cómo puede pasar el theme a componentes inferiores para evitar que se inviertan las imágenes?

1. A través de props (Información que no cambia). Ver el ejemplo en el código. (Descomenta y prueba). Esta solución tienen problemas, hay que pasar los props a los componetes descendientes. [¿Te suena la pirámide de la muerte?](https://jsepulveda.co/media/posts/4/0_iiecmuTLPBqbxd5V.jpeg) y el ¿prop drilling?

2. A través de [useContext](https://es.react.dev/reference/react/useContext)

Creo un Contexto `import {createContext} from 'react'; export const ThemeContext = createContext();`

Info: createContext es una función que crea un contexto. Un contexto es esencialmente un contenedor para compartir datos que puedes pasar a través de componentes sin tener que pasar explícitamente las props. La función createContext devuelve un objeto con un componente Provider y un hook useContext.

Que importo desde los componentes que lo vayan a utilizar `import { ThemeContext } from './ThemeContext';`

Envolvemos el componente principal para que sus decendientes puedan acceder a el provider del ThemeContext `<ThemeContext.Provider>`

Info: El componente Provider es proporcionado por el contexto creado y envuelve los componentes que deben acceder a los datos compartidos. A través del Provider, los datos del contexto se hacen disponibles a los componentes secundarios.

Al Theme (Que es el valor del estado) lo meto como valor al provider `<ThemeContext.Provider value={theme}>` 

En los componentes que quieran acceder al contexto importo el contexto: `const theme = useContext(ThemeContext);` 

y para utilizarlo: `import { ThemeContext } from '../ThemeContext'; import { useContext } from 'react';` 

## TODO

Que se guarde en el local storage

Hacerlo con Typescript: https://www.youtube.com/watch?v=xrkWAzLF9Uo




