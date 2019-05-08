# App básica con flexBox

## App básica centrada horizontal y verticalmente.
## Arreglamos tamaño de inputs
## Imagen de fondo


 
## Crear botones y componentes básicos

```javascript
import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
 
export default class App extends React.Component {
 render() {
  return (
   <View style={styles.container}>
       <Text>Logeate</Text>
       <Button title="Login" />
       <TextInput placeholder="email" />
       <TextInput placeholder="Password" />
       <TextInput placeholder="confirmar password" />
       <Button title="enviar" onPress={this.login} />
   </View>
  );
 }
}
 
const styles = StyleSheet.create({
 container: {
  borderColor: "red",
  borderWidth: 1,
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
 },
});
```

## Arreglamos tamaño de los inputs
Se puede dar un tamaño del 80% a cada input, pero poniéndolos en un View lo hacemos mas reusable   

```javascript
import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, ImageBackground } from 'react-native';
 
import backgroundImage from "./assets/wheater.jpg";
 
export default class App extends React.Component {
render() {
return (
<View style={styles.container}>
<Text>Logeate</Text>
<Button title="Login" />
<View style={styles.inputContainer}>
<TextInput placeholder="email" style={styles.input} />
<TextInput placeholder="Password" style={styles.input} />
<TextInput placeholder="confirmar password" style={styles.input} />
</View>
<Button title="enviar" onPress={this.login} />
</View>
);
}
}
 
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
},
inputContainer: {
width: "80%"
},
input: {
width: "100%",
borderWidth: 1,
borderColor: "#bbb",
padding: 5,
margin: 8,
},
 
});
``` 

 
## Imagen de fondo

```javascript
import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, ImageBackground } from 'react-native';
 
import backgroundImage from "./assets/wheater.jpg";
 
export default class App extends React.Component {
render() {
return (
<ImageBackground source={require('./assets/wheater.jpg')} imageStyle={{resizeMode: 'cover'}} style={styles.backgroundImage}>
<View style={styles.container}>
<Text>Logeate</Text>
<Button title="Login" />
<View style={styles.inputContainer}>
<TextInput placeholder="email" style={styles.input} />
<TextInput placeholder="Password" style={styles.input} />
<TextInput placeholder="confirmar password" style={styles.input} />
</View>
<Button title="enviar" onPress={this.login} />
</View>
</ImageBackground>
);
}
}
 
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
},
inputContainer: {
width: "80%"
},
input: {
width: "100%",
borderWidth: 1,
borderColor: "#bbb",
padding: 5,
margin: 8,
backgroundColor: "transparent"
},
backgroundImage: {
width: "100%",
height: "100%",
},
 
});
``` 
