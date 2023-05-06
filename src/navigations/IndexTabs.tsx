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
				tabBarIconStyle: { display: 'none' },
				headerShown: false,
				tabBarActiveBackgroundColor: '#538EF4',
				tabBarInactiveBackgroundColor: '#fff',
				tabBarActiveTintColor: '#fff',
				tabBarInactiveTintColor: '#538EF4',
				tabBarLabelPosition: 'beside-icon',
				tabBarLabelStyle: {
					fontWeight: '700',
					fontSize: 20,
					paddingRight: 20,
				},
			}}
		>
			<IndexTab.Screen name="List" component={HomeStacks} />
			<IndexTab.Screen name="My" component={MyStacks} />
		</IndexTab.Navigator>
	);
};
