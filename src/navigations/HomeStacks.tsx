import React from 'react';
import { ChallengeDetail, Home, Sign } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

const HomeStack = createStackNavigator();

export const HomeStacks = ({ navigation, route }: any) => {
	React.useLayoutEffect(() => {
		const routeName = getFocusedRouteNameFromRoute(route);
		if (routeName === 'ChallengeDetail' || routeName === 'Sign') {
			console.log('ChallengeDetail');
			navigation.setOptions({
				tabPress: (e: any) => {
					e.preventDefault();
				},
				tabBarStyle: {},
			});
			return;
		}
		navigation.setOptions({
			tabBarStyle: { display: 'flex' },
		});
	}, [navigation, route]);
	// custom tab bar

	return (
		<HomeStack.Navigator initialRouteName="Home">
			<HomeStack.Screen name="Home" component={Home} tabNav={navigation} />
			<HomeStack.Screen
				name="ChallengeDetail"
				component={ChallengeDetail}
				tabNav={navigation}
			/>
			<HomeStack.Screen name="Sign" component={Sign} tabNav={navigation} />
		</HomeStack.Navigator>
	);
};
