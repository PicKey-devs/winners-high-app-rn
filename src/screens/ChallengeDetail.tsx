import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import BadgeTabForm from '../components/challenge/BadgeTabForm';
import ChallengeThumbnail from '../components/home/ChallengeThumbnail';
import BadgeLabel from '../components/BadgeLabel';
import NotificationItem from '../components/NotificationItem';
import CertificationStatus from '../components/CertificationStatus';
import DefaultLayoutContainer from '../layouts/DefaultLayoutContainer';

export default function ChallengeDetail({
	navigation,
	route,
}: {
	navigation: any;
	route: any;
}) {
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
		<DefaultLayoutContainer navigation={navigation} route={route}>
			<ScrollView>
				<View
					style={{
						height: 300,
						backgroundColor: 'tomato',
					}}
				></View>
				<View className="flex flex-col pl-6 pl-6">
					<View className="flex flex-row  pt-6">
						<BadgeLabel label={'루틴'} />
						<Text className="text-xl font-bold ml-3">매일 플래너 쓰기</Text>
					</View>
					<Text className="pt-4 pb-6 text-lg">
						매일 플래너 기록하고 루틴 만들기
					</Text>
				</View>
				<View
					className="flex flex-row px-6 justify-between py-6"
					style={{
						backgroundColor: '#F7F7FE',
					}}
				>
					{[1, 2, 3, 4].map((e) => {
						return <ChallengeThumbnail size={60} />;
					})}
					<View style={styles.RoundButton}>
						<Text style={styles.RoundButtonLabel}>HISTORY</Text>
					</View>
				</View>
				<View className="px-6 py-6">
					<View className="flex flex-row align-center mb-1">
						<View style={{ width: 20 }}>
							<FontAwesome5 name="user-alt" size={20} />
						</View>
						<Text style={{ width: 90 }} className="text-md ml-4">
							참여인원
						</Text>
						<Text className="text-md">4명</Text>
					</View>
					<View className="flex flex-row mb-1">
						<View style={{ width: 20 }}>
							<FontAwesome5 name="crown" size={16} />
						</View>
						<Text style={{ width: 90 }} className="text-md  ml-4">
							방장
						</Text>
						<Text className="text-md">위너스하이</Text>
					</View>
					<View className="flex flex-row mb-1">
						<View style={{ width: 20 }}>
							<FontAwesome5 name="calendar-alt" size={20} />
						</View>
						<Text style={{ width: 90 }} className="text-md ml-4">
							미션기간
						</Text>
						<Text className="text-md">23.03.03 ~ 23.09.03 (90일 남음)</Text>
					</View>
					<View className="flex flex-row">
						<View style={{ width: 20 }}>
							<FontAwesome5
								name="medal"
								size={20}
								style={{
									transform: [{ rotate: '180deg' }],
								}}
							/>
						</View>
						<Text style={{ width: 90 }} className="text-md ml-4">
							목표달성률
						</Text>
						<Text className="text-md">팀 100% , 개인 80%</Text>
					</View>
				</View>
				<View
					className="my-5"
					style={{
						width: '100%',
						height: 10,
						backgroundColor: '#f2f2f2',
					}}
				/>
				<BadgeTabForm>
					<View id="1">
						<NotificationItem />
					</View>
					<View id="2">
						<CertificationStatus />
					</View>
					<View id="3">
						<Text>3</Text>
					</View>
				</BadgeTabForm>
			</ScrollView>
		</DefaultLayoutContainer>
	);
}

const styles = StyleSheet.create({
	RoundButton: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: '#538EF4',
		justifyContent: 'center',
		alignItems: 'center',
	},
	RoundButtonLabel: {
		fontSize: 10,
		lineHeight: 22,
		color: '#fff',
		fontWeight: 'bold',
	},
});
