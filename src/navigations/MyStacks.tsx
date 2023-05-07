import React from 'react';
import { My } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export const MyStacks = () => {
	return (
		<HomeStack.Navigator initialRouteName="My">
			<HomeStack.Screen name="My" component={My} />
			
		</HomeStack.Navigator>
	);
};
