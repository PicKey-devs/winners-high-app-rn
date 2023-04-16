import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { initTab } from '../core/initial-tabs';
import { ToggleItem } from '../components/ToggleItem';
import MainLayoutContainer from '../layouts/MainLayoutContainer';

export default function Home({ navigation }: { navigation: any }) {
	const { onBindTabs } = initTab({ navigation });
	const [tabs, setTabs] = useState([]);
	React.useLayoutEffect(() => {
		onBindTabs();
	}, [navigation]);
	return (
		<MainLayoutContainer>
			<View>
				<Text>Home Page</Text>
			</View>
		</MainLayoutContainer>
	);
}
