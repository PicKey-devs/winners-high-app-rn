import React from 'react';
import {
	createBottomTabNavigator,
	BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { HomeStacks } from './HomeStacks';
import { MyStacks } from './MyStacks';

const IndexTab = createBottomTabNavigator();

export const IndexTabs = () => {
	return (
		<IndexTab.Navigator
			initialRouteName="List"
			screenOptions={{
				headerShown: false,
			}}
		>
			<IndexTab.Screen name="List" component={HomeStacks} />
			<IndexTab.Screen name="My" component={MyStacks} />
		</IndexTab.Navigator>
	);
};
