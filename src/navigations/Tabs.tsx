import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, My, ChallengeDetail } from '../screens';
import { MaterialIcons } from '@expo/vector-icons';
import { TabNavigationOptions } from '../common/constant';
import { HomeStacks } from './HomeStacks';
const Tabs = createBottomTabNavigator();

export const TabNav = () => {
	return (
		<Tabs.Navigator
			initialRouteName="HomeStacks"
			screenOptions={TabNavigationOptions.screenOptions}
			tabBarOptions={TabNavigationOptions.tabBarOptions}
		>
			<Tabs.Screen name="HomeStacks" component={HomeStacks} />
		</Tabs.Navigator>
	);
};
