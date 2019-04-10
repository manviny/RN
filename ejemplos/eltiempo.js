import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

export default class AxiosComponent extends React.Component {

	// 1.- initialize a list
	state = { lugar:"", temperatura:"" };

	componentWillMount() {
		axios.get('http://api.openweathermap.org/data/2.5/weather?q=Denia,es&APPID=**********************')
			// 2.- actualize list, our data is in response.data
			.then(response => {
        console.log(response.data);
        this.setState({ lugar: response.data.name });
        this.setState({ temperatura: response.data.main.temp }); 
      }
      );
	}
	
	// 3.- Function to render each element (key is better to be an id instead of title)
	renderList() {
      return (
        <View>
          <Text>lugar: {this.state.lugar}</Text>
          <Text>temperatura: {this.state.temperatura}</Text>  
        </View>
      );
	}

	render() {	
		return (
		  <View>
		    {this.renderList()}
		  </View>	
		);
	}
}
