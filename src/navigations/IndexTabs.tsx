import React from 'react';
import {
	createBottomTabNavigator,
	BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { HomeStacks } from './HomeStacks';
import { MyStacks } from './MyStacks';
import { View, Text } from 'react-native';

const IndexTab = createBottomTabNavigator();

export const IndexTabs = () => {
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

	const screenTabsStyle = () => {};
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
			<IndexTab.Screen
				name="List"
				component={HomeStacks}
				listeners={({ navigation, route }) => ({
					tabPress: (e) => screenTabsEvent({ navigation, route, event: e }),
				})}
			/>
			<IndexTab.Screen
				name="My"
				component={MyStacks}
				listeners={({ navigation, route }) => ({
					tabPress: (e) => screenTabsEvent({ navigation, route, event: e }),
				})}
			/>
		</IndexTab.Navigator>
	);
};
