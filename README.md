### React Native
  - [Crear componente básico ( componente basado en Función )](https://github.com/manviny/RN#crear-componente-básico)
  - [Dar estilo a un componente](https://github.com/manviny/RN/blob/master/README.md#dar-estilo-a-un-componente)
  - [Hacer un componente reusable](https://github.com/manviny/RN/blob/master/README.md#hacer-un-componente-reusable)
  - [Leer contenido desde una fuente externa ( componente basado en Clase )](https://github.com/manviny/RN/blob/master/README.md#leer-contenido-desde-una-fuente-externa-componente-basado-en-una-clase)

### ESTILOS
  - [Flexbox en ReactNative (facebook)](https://facebook.github.io/react-native/docs/flexbox)
  - [Listado de propiedades para crear un diseño](https://facebook.github.io/react-native/docs/layout-props#alignitems)
  - [Ejemplos de estilo (tutorialspoint)](https://www.tutorialspoint.com/react_native/react_native_text.htm)

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
  componentWillMount() {
    axios.get('https://s3.amazonaws.com/mny-1x2/jornada_42')
    .then( response => console.log(response) );
  }
}

render() {
  return (
    <View>
      <Text>Hola</Text>
    </View>
  )
}
```

https://s3.amazonaws.com/mny-1x2/jornada_42


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

