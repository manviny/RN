#  Init new App

- react-native init myProject


# Run App
- start Android emulator (AVD Manager)
  - in  terminal __one__: 
     - **cd .../myProject && react-native start**
  - in terminal __two__:
     - **cd .../myProject && react-native run-android**
- start on IOS Emulator
  - in  terminal __one__, run: **cd .../myProject && react-native start** if necessary
  - in terminal: **cd .../myProject && react-native run-ios --simulator="iPhone 5s"**


### Si hemos descargado desde Github en vez de crear nuevo proyecto desde 0:
- yarn start
- cd ios
- pod install

### SI hay problemas con Xcode
- cd ios
- pod install
- abrir .xcworkspace en vez de xcodeproj

# Install Amplify (+0.60)
Sin no tenemos amplify instalado:  

- $ npm install -g @aws-amplify/cli
- $ amplify configure .  

Una vez instalado:  

- yarn add aws-amplify aws-amplify-react-native 
- yarn add amazon-cognito-identity-js
- cd ios
- pod install --repo-update . 

Start adding Amplify . 
- amplify init
- amplify add auth
- amplify add storage
- amplify add api
- amplify push

### Auth Example
<details><summary>index.js</summary>
  
```js

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Global config for amplify
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);


AppRegistry.registerComponent(appName, () => App);
```
</details>

 <details><summary>app.js</summary>
  
```js

import { withAuthenticator } from 'aws-amplify-react-native';

export default withAuthenticator(App, { 
    includeGreetings: true ,
    signUpConfig: {
      hiddenDefaults: ['phone_number']
    }
})

```
</details>


# Install Redux
- yarn add redux react-redux
- yarn add redux-thunk

### Redux Example  


 <details><summary>src/store/configureStore.js</summary>
  
```js

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

////////////////////////////////////////////////////////////
/// 1.- IMPORT REDUCERS (reducers produce state)
////////////////////////////////////////////////////////////

import locationReducer from './reducers/location';


/// 2.- ADD REDUCERS
const rootReducer = combineReducers({
	location: locationReducer,

});

let composeEnhancers = compose;

if (__DEV__) {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
	return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};
export default configureStore;

```
</details>

<details><summary>./reducers/location.js</summary>


```js
import { SET_LOCATION } from '../actions/actionTypes';

const initialState = {
	location: {
		coords: {
			speed: 0,
			longitude: 0,
			latitude: 0,
			accuracy: 0,
			heading: 0,
			altitude: 0,
			altitudeAccuracy: 0,
		},
		timestamp: 0
	}
};

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_LOCATION:	 
			return {
				...state,
				location: action.location
			};
		default: 
			return state;
	}

};

export default reducer;
```

</details>

<details><summary>../actions/actionTypes.js</summary>


```js
export const SET_LOCATION = 'SET_LOCATION';
```

</details>


<details><summary>../actions/index.js</summary>


```js
export { getLocation } from './location';
```

</details>




<details><summary>../actions/location.js</summary>


```js
import {SET_LOCATION} from './actionTypes';

import { Platform, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';



export const getLocation = () => {
	return  dispatch => {

      if (Platform.OS === 'android'){
      	console.log("Android")
        request_location_runtime_permission_Android(dispatch);
  
      } else {
      	console.log("ios")
		getGeoocation(dispatch)       
      }

	}; 
};

export const setLocation = location => { console.log("LLEGADO")
	return {
		type: SET_LOCATION,
		location: location
	};
};



export const getGeoocation = (dispatch) => {

	Geolocation.getCurrentPosition(
		(position) => {
			dispatch(setLocation(position)); 
			console.log(position);
		},
		(error) => {
			console.log(error.code, error.message);
		},
		{ 
			enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 
        	// enableHighAccuracy:false,  timeOut: 20000
        }
        );

}

export async function request_location_runtime_permission_Android(dispatch) {

	try {
		const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
			{
				'title': 'ReactNativeCode Location Permission',
				'message': 'ReactNativeCode App needs access to your location '
			}
			)
		if (granted === PermissionsAndroid.RESULTS.GRANTED) {

			console.log("Location Permission Granted.");
			getGeoocation(dispatch)

		}
		else {

			console.log("Location Permission Not Granted");

		}
	} catch (err) {
		console.warn(err)
	}
}
```

</details>

<details><summary>HomeScreen.js</summary>


```js


import { getLocation } from '../store/actions';
import { connect } from 'react-redux';


  componentDidMount() {
    this.props.getLocation()
  }

const mapStateToProps = state => {
  return { 
    userLocation: state.location,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLocation: () => dispatch(getLocation()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
```

</details>



### Install react navigation 
- yarn add react-navigation 
- yarn add react-native-gesture-handler react-native-reanimated   


### Install react geolocation 
- yarn add react-native-geolocation-service  
- [look howto install on IOS and Android](https://github.com/Agontuk/react-native-geolocation-service)


<details><summary>index.js</summary>


```js
    async requestLocationPermission() {
      try {
          const granted = await PermissionsAndroid.request( PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the GPS to access Location")
            Geolocation.getCurrentPosition(
                (position) => {
                    console.log(position);
                },
                (error) => {
                    // See error code charts below.
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );              
          } else {
            console.log("Camera permission denied")
          }
        } catch (err) {
          console.warn(err)
        }
      }
```

</details>



<details><summary>BASE</summary>


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

