import React from 'react';
import { View, Text } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export default function Header({
	state,
	descriptors,
	navigation,
	route,
}: any) {
	const currentScreen = getFocusedRouteNameFromRoute(route);
	console.log(currentScreen);
	return (
		<View
			style={{
				backgroundColor: 'blue',
				height: 50,
				flexDirection: 'row',
				justifyContent: 'space-around',
				alignItems: 'center',
			}}
		>
			{(currentScreen === 'Home' && <Text>Home</Text>) ||
				(currentScreen === 'My' && <Text>My</Text>) ||
				(currentScreen === 'Sign' && <Text>Sign</Text>) ||
				(currentScreen === 'ChallengeDetail' && <Text>ChallengeDetail</Text>)}
		</View>
	);
}
