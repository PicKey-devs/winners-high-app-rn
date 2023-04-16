import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { TabNav } from './navigations/Tabs';
import React from 'react';
export default function App() {
	return (
		<NavigationContainer>
			<TabNav />
		</NavigationContainer>
	);
}
