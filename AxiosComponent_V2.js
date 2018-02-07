// this version call a function component ( ItemDetail ) to render part of it 
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import ItemDetail from './ItemDetail';

class AxiosComponent extends Component {
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
			<ItemDetail key={item.title} item={item} /> 
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

export default AxiosComponent;