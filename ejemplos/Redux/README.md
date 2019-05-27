### [Header.js ( componente funcional, CONST )](https://github.com/manviny/RN/blob/master/ejemplos/Redux/src/components/Header.js)
- Los componentes funcionales son sencillos y devuelven datos estáticos  
- Ejemplo de componente reusable
```js  
 <Header headerText='Albums!' />
 ```
 
 ### [AbumList ( componente de tipo clase, CLASS )](https://github.com/manviny/RN/blob/master/ejemplos/Redux/src/components/AlbumList.js)
- Los componentes basados en clases devuelven datos que pueden ser dinámicos y sabe cuando se renderiza el mismo.  
- **componentWillMount**: es una función que se llamará cada vez que el componente se renderice en la pantalla.
- capturar datos a traves de 'https' de forma asíncrona mediante **axios** y presentarlo en pantalla
  - npm install --save axios 
  - import axios from 'axios'
  - inicializamos el **estado** con un array vacio de elmentos __state = { albums:[]}__
  - actualizamos el **estado** en la respuesta de axios __this.setState({ albums: response.data })__
  - renderizamos cada álbum llamando al componente __ <AlbumDetail key={album.title} album={album} />
__
  
