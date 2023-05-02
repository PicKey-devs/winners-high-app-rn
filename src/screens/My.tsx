import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
} from 'react-native';
import DefaultLayoutContainer from '../layouts/DefaultLayoutContainer';

export default function My({ navigation }: any) {
	return (
		<DefaultLayoutContainer>
			<View>
				<Text>My Page</Text>
			</View>
		</DefaultLayoutContainer>
	);
}
