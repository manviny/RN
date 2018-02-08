import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const ItemDetail = (props) => {
	return (
		<Card>
			<CardSection>
				<Text>{props.item.title}</Text>
			</CardSection>
		</Card>	
	);
};

export default ItemDetail;