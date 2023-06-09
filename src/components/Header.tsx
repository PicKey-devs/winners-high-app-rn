import React from 'react';
import { View, Text } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export default function Header({ state, descriptors, navigation, route }: any) {
	const currentScreen = getFocusedRouteNameFromRoute(route);
	return (
		<View
			style={{
				backgroundColor: 'blue',
				height: 60,
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
