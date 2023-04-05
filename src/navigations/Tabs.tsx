import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, My } from '../screens';
import { MaterialIcons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

export const TabNav = () => {
	return (
		<Tabs.Navigator
			initialRouteName="Home"
			screenOptions={{
				tabBarLabelPosition: 'beside-icon',
				tabBarLabelStyle: {
					fontWeight: '700',
					fontSize: 15,
				},
				tabBarIconStyle: { display: 'none' },
			}}
			tabBarOptions={{
				activeTintColor: '#fff',
				inactiveTintColor: '#538EF4',
				activeBackgroundColor: '#538EF4',
				inactiveBackgroundColor: '#fff',
			}}
		>
			<Tabs.Screen name="Home" component={Home} />
			<Tabs.Screen name="My" component={My} />
		</Tabs.Navigator>
	);
};
