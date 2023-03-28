import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, My } from '../screens';
import { MaterialIcons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

export const TabNav = () => {
	return (
		<Tabs.Navigator initialRouteName="Home">
			<Tabs.Screen name="Home" component={Home} />
			<Tabs.Screen name="My" component={My} />
		</Tabs.Navigator>
	);
};
