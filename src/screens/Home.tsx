import React from 'react';
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { initTab } from '../core/initial-tabs';

export default function Home({ navigation }: { navigation: any }) {
	const { onBindTabs } = initTab({ navigation });
	React.useLayoutEffect(() => {
		onBindTabs();
	}, [navigation]);
	return (
		<View>
			<Text>Home Page</Text>
		</View>
	);
}
