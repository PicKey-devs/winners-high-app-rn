import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { TabNav } from './navigations/Tabs';
import { useFonts } from 'expo-font';
import React from 'react';
export default function App() {
	let [fontsLoaded] = useFonts({
		'noto-sans-kr-regular': require('../assets/fonts/NotoSansKR-Regular.otf'),
		'noto-sans-kr-medium': require('../assets/fonts/NotoSansKR-Medium.otf'),
		'noto-sans-kr-bold': require('../assets/fonts/NotoSansKR-Bold.otf'),
		'montserrat-bold': require('../assets/fonts/Montserrat-Bold.ttf'),
	});

	if (!fontsLoaded) {
		return <StatusBar />;
	}

	return (
		<NavigationContainer>
			<TabNav />
		</NavigationContainer>
	);
}
