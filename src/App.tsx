import { NavigationContainer } from '@react-navigation/native';
import { IndexTabs } from './navigations/IndexTabs';
import React from 'react';
export default function App() {
	return (
		<NavigationContainer>
			<IndexTabs
				style={{
					backgroundColor: '#fff',
				}}
			/>
		</NavigationContainer>
	);
}
