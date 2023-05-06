import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
				backgroundColor: '#fff',
			}}
		>
			<ScrollView>
				<View
					style={{
						height: 300,
						backgroundColor: 'tomato',
					}}
				></View>
				<View className="flex flex-col pl-6 pl-6">
					<Text className="text-2xl font-bold pt-6">
						[루틴] 매일 플래너 쓰기
					</Text>
					<Text className="pt-4 pb-6">매일 플래너 기록하고 루틴 만들기</Text>
				</View>
				<View
					style={{
						width: '100%',
						height: 10,
						backgroundColor: '#f2f2f2',
					}}
				></View>
				<View
					className="px-6"
					style={{
						paddingTop: 24,
						paddingBottom: 24,
					}}
				>
					<View className="flex flex-row justify-between">
						<View className="flex flex-row items-center">
							<TouchableOpacity
								onPress={() => navigation.goBack()}
								style={{
									width: 24,
									height: 24,
									borderRadius: 50,
									backgroundColor: '#f2f2f2',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Ionicons name="chevron-back-outline" size={12} color="black" />
							</TouchableOpacity>
							<Text className=""> 2030년 6월 </Text>
							<TouchableOpacity
								onPress={() => navigation.goBack()}
								style={{
									width: 24,
									height: 24,
									borderRadius: 50,
									backgroundColor: '#f2f2f2',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Ionicons
									name="chevron-forward-outline"
									size={12}
									color="black"
								/>
							</TouchableOpacity>
						</View>
						<TouchableOpacity
							onPress={() => navigation.goBack()}
							style={{
								height: 24,
								borderRadius: 50,
								backgroundColor: '#f2f2f2',
								alignItems: 'center',
								justifyContent: 'center',
							}}
							className="pl-3 pr-3"
						>
							<Text
								style={{
									fontSize: 12,
								}}
							>
								WEEK
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View>
					<TouchableOpacity
						className="flex flex-column items-center"
						onPress={() => navigation.goBack()}
					>
						<View
							style={{
								height: 60,
								width: 60,
								borderRadius: 50,
								backgroundColor: '#538EF4',
								alignItems: 'center',
								justifyContent: 'center',
							}}
							className="pl-3 pr-3 pm-3"
						>
							<View
								style={{
									height: 52,
									width: 52,
									borderRadius: 50,
									backgroundColor: '#538EF4',
									alignItems: 'center',
									justifyContent: 'center',
									borderColor: 'white',
									borderWidth: 3,
								}}
							>
								<Text
									className="text-white font-bold"
									style={{
										fontSize: 10,
									}}
								>
									TODAY
								</Text>
							</View>
						</View>
						<Text
							style={{
								marginTop: 4,
								fontSize: 15,
							}}
						>
							3/11 토
						</Text>
					</TouchableOpacity>
					<TouchableOpacity className="flex flex-row items-center">
						<Text>월</Text>
					</TouchableOpacity>
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

const style1 = StyleSheet.create({});
