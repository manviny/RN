import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

export default class AxiosComponent extends React.Component 

	// class level property
	// 1.- initialize a list
	state = { itemsList: [] };

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			// 2.- actualize list
			.then(response => this.setState({ itemsList: response.data }));
	}
	
	// 3.- key is better to be an id instead of title
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

