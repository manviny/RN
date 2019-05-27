### [Header.js ( componente funcional, CONST )](https://github.com/manviny/RN/blob/master/ejemplos/Redux/src/components/Header.js)
- Los componentes funcionales son sencillos y devuelven datos estáticos  
- Ejemplo de componente reusable
```js  
 <Header headerText={'Albums!'} />
 ```
 
 ### [AlbumList ( componente de tipo clase, CLASS )](https://github.com/manviny/RN/blob/master/ejemplos/Redux/src/components/AlbumList.js)
- Los componentes basados en clases devuelven datos que pueden ser dinámicos y sabe cuando se renderiza el mismo.  
- **componentWillMount**: es una función que se llamará cada vez que el componente se renderice en la pantalla.
- capturar datos a traves de 'https' de forma asíncrona mediante **axios** y presentarlo en pantalla
  - npm install --save axios 
  - import axios from 'axios'
  - inicializamos el **estado** con un array vacio de elmentos __state = { albums:[]}__
  - actualizamos el **estado** en la respuesta de axios __this.setState({ albums: response.data })__
  - renderizamos cada álbum llamando al componente [AlbumDetail.ls](https://github.com/manviny/RN/blob/master/ejemplos/Redux/src/components/AlbumDetail.js)
  
### [Card, componente contenedor con estilo](https://github.com/manviny/RN/blob/master/ejemplos/Redux/src/components/Card.js)
- Usamos este componente a modo de contenedor de otros componentes
- Este pasara a los componentes que contiene como propiedades
```js
 //  {props.children}  ==  <Text>Hola</Text> 

const Card = (props) => {
  return(
    <View style={styles.containerStyle}>
      {props.children}    // <===
    </View>
  );
  
}

return(
   <Card>
     <Text>Hola</Text>    // <===
   </Card> 

  
```
