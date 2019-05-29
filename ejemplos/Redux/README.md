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
### [CardSection, otro componente contenedor](https://github.com/manviny/RN/blob/master/ejemplos/Redux/src/components/CardSection.js)
```js
    <Card>
      <CardSection>
       <Text>
```
### [AlbumDetail](https://github.com/manviny/RN/blob/master/ejemplos/Redux/src/components/AlbumDetail.js)
- las imagenes necesitan dimensines para que se puedan visualizar
- si queremos una imagen con altura fija y que se adapte el ancho al contenedor:
```js
    height: 300,
    flex: 1,
    width: null
 ```
 ### [ScrollView](https://github.com/manviny/RN/blob/master/ejemplos/Redux/src/components/AlbumList.js)
 Debemos ponerle al padre contenedor del ScrollView flex:1 para que este funcione
 ```js
 // AlbumList.js
 // 1.- hacemos el import
 import { ScrollView } from 'react-native';
 ...   
 // 2.- usamos el ScrollView
    <ScrollView>
      { this.renderAlbums() }
    </ScrollView>
 // App.js   
 // 3.-En el padre debemos poner estilo flex:1   
  <View style={{flex:1}}>
   
    <AlbumList />
  </View>     
 ...

 
 ```

### [Button (style propio)](https://github.com/manviny/RN/blob/master/ejemplos/Redux/src/components/Button.js)
En este ejemplo vemos como crear un botón totalmente configurable o bien podemos usar el [botón definido por react-native](https://facebook.github.io/react-native/docs/button)

### [Abrir web desde botón](https://github.com/manviny/RN/blob/master/ejemplos/Redux/src/components/Button.js)
Al hacer clic en el botón debemos pasarle la url.
```js
// Button.js
<TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>

// AlbumDetail.js
import { Linking } from 'react-native';
...
<ButtonMe onPress={() => Linking.openURL(url)} />
```

### [Añadir iconos](https://github.com/oblador/react-native-vector-icons#web-with-webpack)
```js
import Icon from 'react-native-vector-icons/FontAwesome';
...
  <Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
    onPress={this.loginWithFacebook}
  >
  <Icon
     name="ios-arrow-back"
     color="#fff"
     size={25}
   />  
```


