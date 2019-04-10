import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

export default class AxiosComponent extends React.Component {
  // 1.- initialize a list
  state = { name: "", lon: "" };

  componentWillMount() {
    axios
      .get( 
        'http://api.openweathermap.org/data/2.5/weather?q=Denia,es&APPID=**************************'
      )
      // 2.- actualize list, our data is in response.data
      .then(
        response => 
        {
          this.setState({ lon: response.data.coord.lon });
          this.setState({ name: response.data.name })
        }
      );
  }

  // 3.- Function to render each element (key is better to be an id instead of title)
  renderList() {

		return(
      <View>
        <Text>{this.state.name}</Text>
        <Text>{this.state.lon}</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Text> {this.renderList()}</Text>
      </View>
    );
  }
}
