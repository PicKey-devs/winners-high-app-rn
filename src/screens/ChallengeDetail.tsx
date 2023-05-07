import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChallengeTabForm from '../components/challenge/ChallengeTabForm';

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
				/>
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
				<View className="flex flex-row items-center justify-between pl-4 pr-4">
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
					<TouchableOpacity className="flex flex-column items-center">
						<Text
							className="mb-2"
							style={{
								fontSize: 15,
							}}
						>
							월
						</Text>
						<View
							style={{
								height: 35,
								width: 35,
								borderRadius: 50,
								backgroundColor: '#D4D8DA',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<FontAwesome5 name="check" size={14} color="white" />
						</View>
						<Text
							className="mt-1"
							style={{
								fontSize: 15,
							}}
						>
							6
						</Text>
					</TouchableOpacity>
					<TouchableOpacity className="flex flex-column items-center">
						<Text
							className="mb-2"
							style={{
								fontSize: 15,
							}}
						>
							월
						</Text>
						<View
							style={{
								height: 35,
								width: 35,
								borderRadius: 50,
								backgroundColor: '#D4D8DA',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<FontAwesome5 name="check" size={14} color="white" />
						</View>
						<Text
							className="mt-1"
							style={{
								fontSize: 15,
							}}
						>
							6
						</Text>
					</TouchableOpacity>
					<TouchableOpacity className="flex flex-column items-center">
						<Text
							className="mb-2"
							style={{
								fontSize: 15,
							}}
						>
							월
						</Text>
						<View
							style={{
								height: 35,
								width: 35,
								borderRadius: 50,
								backgroundColor: '#D4D8DA',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<FontAwesome5 name="check" size={14} color="white" />
						</View>
						<Text
							className="mt-1"
							style={{
								fontSize: 15,
							}}
						>
							6
						</Text>
					</TouchableOpacity>
					<TouchableOpacity className="flex flex-column items-center">
						<Text
							className="mb-2"
							style={{
								fontSize: 15,
							}}
						>
							월
						</Text>
						<View
							style={{
								height: 35,
								width: 35,
								borderRadius: 50,
								backgroundColor: '#D4D8DA',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<FontAwesome5 name="check" size={14} color="white" />
						</View>
						<Text
							className="mt-1"
							style={{
								fontSize: 15,
							}}
						>
							6
						</Text>
					</TouchableOpacity>
					<TouchableOpacity className="flex flex-column items-center">
						<Text
							className="mb-2"
							style={{
								fontSize: 15,
							}}
						>
							월
						</Text>
						<View
							style={{
								height: 35,
								width: 35,
								borderRadius: 50,
								backgroundColor: '#D4D8DA',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<FontAwesome5 name="check" size={14} color="white" />
						</View>
						<Text
							className="mt-1"
							style={{
								fontSize: 15,
							}}
						>
							6
						</Text>
					</TouchableOpacity>
				</View>
				<View
					className="mb-5 mt-5"
					style={{
						width: '100%',
						height: 10,
						backgroundColor: '#f2f2f2',
					}}
				/>
				<ChallengeTabForm
					tabs={[
						{
							label: '공지사항',
							value: 1,
						},
						{
							label: '인증방법',
							value: 2,
						},
					]}
				>
					<View id="1">
						<Text>공지사항</Text>
					</View>
					<View id="2">
						<Text>인증방법</Text>
					</View>
				</ChallengeTabForm>
				<ChallengeTabForm
					tabs={[
						{
							label: '맴버 리스트',
							value: 1,
						},
						{
							label: '다짐 리스트',
							value: 2,
						},
					]}
				>
					<View id="1">
						<Text>맴버 리스트</Text>
					</View>
					<View id="2">
						<Text>다짐 리스트</Text>
					</View>
				</ChallengeTabForm>
				<ChallengeTabForm
					tabs={[
						{
							label: '나의 인증 현황',
							value: 1,
						},
						{
							label: '전체 인증 현황',
							value: 2,
						},
					]}
				>
					<View id="1">
						<Text>나의 인증 현황</Text>
					</View>
					<View id="2">
						<Text>전체 인증 현황</Text>
					</View>
				</ChallengeTabForm>
			</ScrollView>
			<View
				className="flex items-center justify-center"
				style={{
					height: 60,
					width: '100%',
					backgroundColor: '#538EF4',
				}}
			>
				<Text
					style={{
						fontSize: 20,
						color: 'white',
						fontWeight: 'bold',
					}}
				>
					인증하기
				</Text>
			</View>
		</SafeAreaView>
	);
}

const style1 = StyleSheet.create({});
