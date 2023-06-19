import { NavigationContainer } from '@react-navigation/native';
import { IndexStacks } from './navigations/IndexTabs';
import React, { useEffect } from 'react';
export default function App() {
	return (
		<NavigationContainer>
			<IndexStacks />
		</NavigationContainer>
	);
}
