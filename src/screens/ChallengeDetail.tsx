import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function ChallengeDetail({ navigation }: { navigation: any }) {
	navigation.setOptions({
		headerTransparent: true,
		headerTitle: () => <Text>{''}</Text>,
		headerLeft: () => (
			<View className="m-2">
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Ionicons name="chevron-back-outline" size={24} color="black" />
				</TouchableOpacity>
			</View>
		),
	});

	return (
		<SafeAreaView
			style={{
				flex: 1,
			}}
		>
			<ScrollView>
				<View
					style={{
						height: 300,
						backgroundColor: 'tomato',
					}}
				></View>

				<View className="">
					<Text>[루틴] 매일 플래너 쓰기</Text>
					<Text>매일 플래너 기록하고 루틴 만들기</Text>
				</View>
			</ScrollView>
			<View
				style={{
					height: 60,
					width: '100%',
					backgroundColor: 'blue',
				}}
			></View>
		</SafeAreaView>
	);
}
