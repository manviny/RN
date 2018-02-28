// AIzaSyAdpoN5sw1LuKHEieUxrQ2T2ZvZt4-QDZs

// https://en.wikipedi .org/w/api.php?action=query&prop=coordinates%7Cpageimages%7Cpageterms&colimit=50&piprop=thumbnail&pithumbsize=144&pilimit=50&wbptterms=description&generator=geosearch&ggscoord=38.5390562%7C-0.12902059999998983&ggsradius=10000&ggslimit=50&format=json

// create-react-native-app p24
// yarn run ios
// npm install --save axios

import React from 'react';
import {  Text, View } from 'react-native';
import Header from './src/components/Header';
import LitsList from './src/components/LitsList';


export default class App extends React.Component {
  

  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText={'Albums'} />
        <LitsList />
      </View>
    );
  }
}


##Enlaces interesantes
[A declarative library for application development using cloud services with JavaScript](https://github.com/aws/aws-amplify)
