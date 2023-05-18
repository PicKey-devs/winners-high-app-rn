import React from 'react';
import { View, Text } from 'react-native';

const Tabs = ({ state, descriptors, navigation, route }: any) => {
	console.log(route);
	//get current screen name

	switch (state.routeNames[state.index]) {
		case 'Home':
			return (
				<View>
					<Text>Home</Text>
				</View>
			);
		case 'My':
			return (
				<View>
					<Text>My</Text>
				</View>
			);
		default:
			return (
				<View>
					<Text>dddd</Text>
				</View>
			);
	}
};

export default function BottomTabs(props: any) {
	return (
		<View>
			<Tabs {...props} />
		</View>
	);
}
