import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

export default class AxiosComponent extends React.Component 

	// 1.- initialize a list
	state = { itemsList: [] };

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			// 2.- actualize list, our data is in response.data
			.then(response => this.setState({ itemsList: response.data }));
	}
	
	// 3.- Function to render each element (key is better to be an id instead of title)
	renderList() {
		return this.state.itemsList.map( item => 
			<Text key={item.title}>{item.title}</Text> 
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

