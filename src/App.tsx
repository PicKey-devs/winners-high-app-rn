import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { TabNav } from './navigations/Tabs';
import { IndexTabs } from './navigations/IndexTabs';
import { useFonts } from 'expo-font';
import React from 'react';
export default function App() {
	return (
		<NavigationContainer>
			<IndexTabs />
		</NavigationContainer>
	);
}
