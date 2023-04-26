import React from 'react';
import { ChallengeDetail } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export const Stacks = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
			// screenOptions={({ navigation, route }) => ({
			// 	headerLeft: (props) => {
			// 		return (
			// 			<>
			// 				<Text>Menu</Text>
			// 				{props.canGoBack && <HeaderBackButton {...props} />}
			// 			</>
			// 		);
			// 	},
			// })}
			>
				<Stack.Screen name="ChallengeDetail" component={ChallengeDetail} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
