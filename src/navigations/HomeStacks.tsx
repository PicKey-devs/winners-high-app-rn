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
			navigation.setOptions({
				tabBarStyle: { display: 'none' },
			});
			return;
		}
		navigation.setOptions({
			tabBarStyle: { display: 'flex' },
		});
	}, [navigation, route]);

	return (
		<HomeStack.Navigator initialRouteName="Home">
			<HomeStack.Screen name="Home" component={Home} />
			<HomeStack.Screen name="ChallengeDetail" component={ChallengeDetail} />
			<HomeStack.Screen name="Sign" component={Sign} />
		</HomeStack.Navigator>
	);
};
