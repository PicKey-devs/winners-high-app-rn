import { NavigationContainer } from '@react-navigation/native';
import { IndexStacks } from './navigations/IndexTabs';
import React, { useEffect } from 'react';
import { View } from 'react-native';
export default function App() {
	return (
		<NavigationContainer>
			<IndexStacks />
		</NavigationContainer>
	);
}
