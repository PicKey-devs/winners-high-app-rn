import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { ChallengeDetail, Home, Sign } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
const IndexStack = createStackNavigator();

export const IndexStacks = () => {
	return (
		<IndexStack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
			}}
		>
			<IndexStack.Screen name="Home" component={Home} />
			<IndexStack.Screen name="ChallengeDetail" component={ChallengeDetail} />
			<IndexStack.Screen name="Sign" component={Sign} />
		</IndexStack.Navigator>
	);
};
