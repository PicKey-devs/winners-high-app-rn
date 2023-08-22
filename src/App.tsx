import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { View } from 'react-native';

import { IndexStacks } from './navigations/IndexTabs';
import fonts from '../assets/fonts';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded, fontError] = useFonts(fonts);

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<View className="flex-1" onLayout={onLayoutRootView}>
			<NavigationContainer>
				<IndexStacks />
			</NavigationContainer>
		</View>
	);
}
