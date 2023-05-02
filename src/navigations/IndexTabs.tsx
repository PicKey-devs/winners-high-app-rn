import React from 'react';
import { ChallengeDetail, Home } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
	createBottomTabNavigator,
	BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { HomeStacks } from './HomeStacks';
import { MyStacks } from './MyStacks';

const IndexTab = createBottomTabNavigator();

export const IndexTabs = () => {
	return (
		<IndexTab.Navigator initialRouteName="Home">
			<IndexTab.Screen name="List" component={HomeStacks} />
			<IndexTab.Screen name="My" component={MyStacks} />
		</IndexTab.Navigator>
	);
};
