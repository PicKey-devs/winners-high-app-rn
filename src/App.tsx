import { NavigationContainer } from '@react-navigation/native';
import { IndexStacks } from './navigations/IndexTabs';
import React, { useEffect } from 'react';
export default function App() {
	// const navigation = useNavigation();

	// useEffect(() => {
	// 	const unsubscribe = navigation.addListener('state', () => {
	// 		// 화면 전환 이벤트 발생 시 실행될 로직을 작성하세요
	// 		console.log('화면 전환 이벤트 발생');
	// 	});

	// 	return unsubscribe;
	// }, [navigation]);

	return (
		<NavigationContainer>
			<IndexStacks />
		</NavigationContainer>
	);
}
