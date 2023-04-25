import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { TabNav } from './navigations/Tabs';
import { useFonts } from 'expo-font';
import React from 'react';
export default function App() {
	let [fontsLoaded] = useFonts({
		'Edu-SA-Beginner-regular': require('../assets/fonts/NotoSansKR-Regular.otf'),
		'Edu-SA-Beginner-medium': require('../assets/fonts/NotoSansKR-Medium.otf'),
		'Edu-SA-Beginner-bold': require('../assets/fonts/NotoSansKR-Bold.otf'),
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
