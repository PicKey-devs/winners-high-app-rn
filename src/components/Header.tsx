import React, { useEffect, useState, useMemo } from 'react';
import { View, Text } from 'react-native';
import DefaultHeader from './DefaultHeader';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export default function Header({ state, descriptors, navigation, route }: any) {
	const [screen, setScreen] = useState(route.name || '');

	useEffect(() => {
		const unsubscribe = navigation.addListener('state', () => {
			setScreen(route.name);
		});
	});

	const defaultHeader = () => <Text>Home</Text>;

	const headerSwitch = useMemo(() => {
		switch (screen) {
			case 'Home':
				return <DefaultHeader />;
			case 'My':
				return <Text>My</Text>;
			case 'ChallengeDetail':
				return <Text>ChallengeDetail</Text>;
			default:
				return <></>;
		}
	}, [screen]);

	return (
		<View
			style={{
				height: 60,
				flexDirection: 'row',
				justifyContent: 'space-around',
				alignItems: 'center',
			}}
		>
			{headerSwitch}
		</View>
	);
}
