import React from 'react';
import { View, Text } from 'react-native';

const ItemDetail = (props) => {
	return (
		<View>
			<Text>{props.item.title}</Text>
		</View>	
	);
};

export default ItemDetail;