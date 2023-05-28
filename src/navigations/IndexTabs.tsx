import React from 'react';
import { HomeStacks } from './HomeStacks';
import { MyStacks } from './MyStacks';
import { View, Text } from 'react-native';
import { ChallengeDetail, Home, Sign } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const IndexStack = createStackNavigator();

export const IndexStacks = () => {
	const screenTabsEvent = ({ navigation, route, event }: any) => {
		const currentScreen = route.state?.routes?.[route.state.index].name;
		console.log(navigation, route);

		switch (currentScreen) {
			case 'ChallengeDetail':
				console.log('ChallengeDetail');
				event.preventDefault();
				break;
			default:
				break;
		}
	};

	return (
		<IndexStack.Navigator
			initialRouteName="List"
			screenOptions={{
				headerShown: false,
			}}
		>
			<IndexStack.Screen name="List" component={HomeStacks} />
			<IndexStack.Screen name="My" component={MyStacks} />
			<IndexStack.Screen name="Home" component={Home} />
			<IndexStack.Screen name="ChallengeDetail" component={ChallengeDetail} />
			<IndexStack.Screen name="Sign" component={Sign} />
		</IndexStack.Navigator>
	);
};
