###  Init new App

- react-native init myProject


<details><summary>### Run App</summary>
- start Android emulator (AVD Manager)
  - in  terminal __one__: 
     - **cd .../myProject && react-native start**
  - in terminal __two__:
     - **cd .../myProject && react-native run-android**
- start on IOS Emulator
  - in  terminal __one__, run: **cd .../myProject && react-native start** if necessary
  - in terminal: **cd .../myProject && react-native run-ios --simulator="iPhone 5s"**
</details>

### Si hemos descargado desde Github en vez de crear nuevo proyecto desde 0:
- yarn 
- cd ios
- pod install

### SI hay problemas con Xcode
- cd ios
- pod install
- abrir .xcworkspace en vez de xcodeproj


### Install Redux
- npm install --save  redux react-redux
- yarn add redux react-redux
- yarn add redux-thunk


### Install react navigation 
- npm install --save react-navigation 
- yarn add react-navigation 
- yarn add react-native-gesture-handler react-native-reanimated   


### Install react geolocation 
- yarn add react-native-geolocation-service  
POD: pod 'react-native-geolocation', path: '../node_modules/@react-native-community/geolocation'  


## Install Amplify (+0.60)
Sin no tenemos amplify instalado:  

- $ npm install -g @aws-amplify/cli
- $ amplify configure .  

Una vez instalado:  

- yarn add aws-amplify​
- yarn add aws-amplify-react-native  
- yarn add amazon-cognito-identity-js
- cd ios
- pod install --repo-update . 

Start adding Amplify . 
- amplify init
- amplify add auth
- amplify add storage
- amplify add api
- amplify push


<details><summary>index.js</summary>


```js
print("hello world!")
```

</details>



#### [yarn](https://yarnpkg.com/en/docs/usage)
- yarn init


### React Native
  - [Componente tipo Función ( crear componente básico )](https://github.com/manviny/RN/blob/master/README.md#crear-componente-b%C3%A1sico-componente-basado-en-una-funcion)
  - [Dar estilo a un componente](https://github.com/manviny/RN/blob/master/README.md#dar-estilo-a-un-componente)
  - [Pasar parámetros al hijo - props ( hacer un componente reusable, por ejemplo un HEADER )](https://github.com/manviny/RN/blob/master/README.md#hacer-un-componente-reusable)
  - [Padre lee parámetros del hijo  ( props.children )](https://github.com/manviny/RN/blob/master/README.md#padre-lee-par%C3%A1metros-del-hijo)  
  - [Leer contenido desde una fuente externa ( componente basado en Clase )](https://github.com/manviny/RN/blob/master/README.md#leer-contenido-desde-una-fuente-externa-componente-basado-en-una-clase)
  - [Pasar componentes como propiedades]()
  - [Pasar parámetros entre diferentes pantallas 1 ](https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/)
  - [Pasar parámetros entre diferentes pantallas 2 ](https://stackoverflow.com/questions/53942539/how-to-pass-data-between-react-native-screens)
  - [Leer Json desde una URL ( con axios )](https://github.com/manviny/RN/blob/master/ejemplos/AxiosComponent.js)
  - [crear app que consuma datos de OpenWeatherMap](https://github.com/manviny/RN/blob/master/ejemplos/eltiempo.js)
  - [Hacer Web Scraping con  Cheerio](https://github.com/manviny/RN/blob/master/ejemplos/Axios_Cheerio.js)
  - [Web scraping ( con axios y cheerio )](https://github.com/manviny/RN/blob/master/ejemplos/Axios_Cheerio.js)
  - Navegación entre pantallas/tabs
  
  
### ESTILOS
  - [Poner imagen de fondo](https://github.com/manviny/RN/blob/master/ejemplos/imagen_fondo.js)
  - [Flexbox en ReactNative (facebook)](https://facebook.github.io/react-native/docs/flexbox)
  - [Listado de propiedades para crear un diseño](https://facebook.github.io/react-native/docs/layout-props#alignitems)
  - [Ejemplos de estilo (tutorialspoint)](https://www.tutorialspoint.com/react_native/react_native_text.htm)
  - [Cheatsheet](https://github.com/vhpoet/react-native-styling-cheat-sheet)
  - [CSS TRICKS](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### COMPONENTES
  - [Componentes de ReactNative](https://facebook.github.io/react-native/docs/components-and-apis)
  - [NativeBase](https://docs.nativebase.io/Components.html#Components)
    - [Añadir Native Base e iconos de Ionicons a React Native](https://github.com/manviny/RN#a%C3%B1adir-native-base-e-iconos-de-ionicons-a-react-native)  
    - [Añadir Tabs de NativeBase a RN](https://github.com/manviny/RN#a%C3%B1adir-tabs-de-nativebase-a-rn)  
  - [React Native Elements](https://react-native-training.github.io/react-native-elements/docs/overview.html)
  
  
## Crear componente básico. Componente basado en una funcion.
**encuentro.js**, debemos crear un fichero nuevo para cada componente.
```js
import React from 'react';
import {Text} from 'react-native';

const Encuentro = () => {
  return <Text>1 X 2</Text>
};

export default Encuentro;
```
#### usar componente
```js
// importamos el componente
import Encuentro from './components/encuentro';
...
// lo usamos de la siguiente forma
<Encuentro />

```
  
## Dar estilo a un componente
```js
import React from 'react';
import {Text} from 'react-native';

const Encuentro = () => {
  return(
    <View>
        <Text style={styles.textStyle}>1 X 2</Text>
    </View>
  )
  // si solo devolvemos un elemento podemos usar la forma corta
  // return <Text style={styles.textStyle}>1 X 2</Text>
  
};

export default Encuentro;

const styles = {
  testStyle: {
    fontSize: 20
  }  
}
```
[más sobre estilos](https://github.com/manviny/RN/blob/master/README.md#estilos)  

## Hacer un componente reusable
Vamos a pasar props del padre App.js al hijo encuentro.js   
encuentro.js
```js
import React from 'react';
import {Text} from 'react-native';

const Encuentro = (props) => {
  return <Text>{props.miTexto}</Text>
};

export default Encuentro;
```
#### usar componente
```js
// importamos el componente
import Encuentro from './components/encuentro';
...
// lo usamos de la siguiente forma
<Encuentro miTexto={'1 X 2'} />

```

## Padre lee parámetros del hijo 
#### hijo
```js
import React from 'react';
import {View, Text} from 'react-native';
import EncuentroContenedor from './encuentroContenedor';

const EncuentroDetalle = (props) => {
  return(
    <EncuentroContenedor>
      <Text>{props.encuentro.local}</Text>
    </EncuentroContenedor>
  );
};

export default EncuentroDetalle;
```
#### padre
```js
import React from 'react';
import {View} from 'react-native';

const EncuentroContenedor = (props) => {
  return(
    <View>
      {props.children}
    </View>
  );
};



export default EncuentroContenedor;
```


## Leer contenido desde una fuente externa. Componente basado en una Clase.

Los componentes de tipo clase son componentes avanzados que tienen métodos de ciclo de vida, como por ejemplo 'componentWillMount'.   
Para poder leer datos mediante 'http' vamos a usar la librería 'axios'

```bash
npm install --save axios
```
```js
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

class MyClass extends Component {

  // Definimos el 'estado' del componente, cada vez que el estado cambia el componente se renderiza de nuevo
  
  // Declaramos un estado inicial para el componente
  state = { encuentros:[] };
  
  
  
  // Se ejecuta justo antes de renderizar el componente
  componentWillMount() {
    axios.get('https://s3.amazonaws.com/mny-1x2/jornada_42')
    .then( response => this.setState( { encuentros: response.data } ) );
  }
  
  // Creamos una funcion para mostrar los datos recibidos
  renderEncuentros() {
    return this.state.encuentros.map( encuentro => 
      <Text key={encuentro.encuentro} >{encuentro.e1}</Text> 
      // Si quisieramos crear un componente para renderizar cada encuentro
      // Creariamos un componente DetalleEncuentro y le pasariamos el valor de cada encuentro
      // <DetalleEncuentro key={encuentro.encuentro}>{encuentro}</DetalleEncuentro>
    );
  }
  
}

render() {
  return (
    <View>
      {this.renderEncuentros()}
    </View>
  )
}
```
DetalleEncuentro.js

```js
import React from 'react';
import {Text} from 'react-native';

const DetalleEncuentro = (props) => {
  return <Text>{props.encuentro.e1}</Text>
};

export default DetalleEncuentro;
```


https://s3.amazonaws.com/mny-1x2/jornada_42  
JSON 
```json
[
  { "encuentro":"1", "e1":"Valencia", "e2":"Barcelona", "res":"0 - 0" },
  { "encuentro":"2", "e1":"Madrid", "e2":"Sevilla", "res":"1 - 0"},
  { "encuentro":"3", "e1":"Villareal", "e2":"Levante", "res":"0 - 2"}
]
```



## Añadir Native Base e iconos de Ionicons a React Native

```js
import * as React from 'react';
import { Button, Container, Content, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';

import {  View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Constants, Font, Expo } from 'expo';
```
## Añadir Tabs de NativeBase a RN  
En este ejemplo además podrás ver como usar los iconos importados

```js
import { Button, Container, Content, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';

...

      <Container> 
       <Header hasTabs/>
      <Tabs>
        <Tab heading={<TabHeading><Text><Ionicons name="md-home" size={25} color={'cyan'} /></Text></TabHeading>}>
          **Tu contenido**
        </Tab>

        <Tab heading={<TabHeading><Text><Ionicons name="logo-game-controller-b" size={25} color={'cyan'} /></Text></TabHeading>}>
          **Tu contenido**
        </Tab>
      </Tabs>

```

### Ejercicios
Definir XML y JSON, diferencias, estructura básica, enlaces, donde se usa, futuro      
Crear la misma estructura en XML y JSON

## first steps (0.54-RC)

* npm install -g create-react-native-app
* create-react-native-app AwesomeProject
* cd AwesomeProject
* npm start
* //Start Android emulator//
* react-native run-android
* yarn run android





create-react-native-app miproject  
yarn run ios  /  react-native run-ios  
npm install --save axios  

##Enlaces interesantes

* [A declarative library for application development using cloud services with JavaScript. The default implementation works with Amazon Web Services (AWS) resources](https://github.com/aws/aws-amplify)
* [AWS Mobile React Native Starter App](https://github.com/awslabs/aws-mobile-react-native-starter)
* [Mobile Hub](https://www.youtube.com/watch?v=VoRFXHHzHMw)





## Mobile Hub Sign-in
* yarn add aws-amplify-react-native
* ( npm run eject )
* react-native link amazon-cognito-identity-js
* yarn run android

## Expo - React Native Authentication with Expo, AWS Amplify, & Cognito
* [32 min Expo - React Native Authentication with Expo, AWS Amplify, & Cognito](https://www.youtube.com/watch?v=5uPNmq8TUoA)
* [Configuring the AWSMobile CLI](https://www.youtube.com/watch?v=MpugaNKtw3k&t=86s&list=PLE9m_QqEHgX2azRbYX-ZyqLiq03YYldw0&index=1)
```bash
|| npm i -g awsmobile-cli

create-react-native-app RNExpoAuthProject
cd RNExpoAuthProject

awsmobile configure  	# access keys   

awsmobile init			# creates mobile hub directory
?  1 = .  2 = default 3 = default 4 = default 5 name = RNExpoAuthProject

awsmobile user-signin enable
awsmobile push
yarn / npm install

# ir a 6'22" para empezar con estilos del formulario
```

