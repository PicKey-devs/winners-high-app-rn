import React from 'react';
import { View, Text } from 'react-native';
import { ChallengeDetail, Home, Sign } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

const IndexStack = createStackNavigator();

export const IndexStacks = () => {
	const screenTabsEvent = ({ navigation, route, event }: any) => {
		const currentScreen = route.state?.routes?.[route.state.index].name;

		switch (currentScreen) {
			case 'ChallengeDetail':
				console.log('ChallengeDetail');
				event.preventDefault();
				break;
			default:
				break;
		}
	};

	// 스크린 변경될대마다 실행
	React.useLayoutEffect(() => {
		console.log('IndexStacks');
	}, []);

	return (
		<IndexStack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
			}}
		>
			<IndexStack.Screen name="Home" component={Home} />
			<IndexStack.Screen name="ChallengeDetail" component={ChallengeDetail} />
			<IndexStack.Screen name="Sign" component={Sign} />
		</IndexStack.Navigator>
	);
};
