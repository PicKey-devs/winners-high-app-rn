import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import ChallengeItem from '../components/home/ChallengeItem';
import CategoryList from '../components/home/CategoryList';
import Ionicons from '@expo/vector-icons/Ionicons';
import DefaultLayoutContainer from '../layouts/DefaultLayoutContainer';
import { FontAwesome5 } from '@expo/vector-icons';
import UserProfile from '../components/UserProfile';

export default function My({ navigation }: any) {
	navigation.setOptions({
		headerTitle: (props: any) => (
			<Text
				{...props}
				style={{
					fontSize: 22,
				}}
				className="text-3xl font-bold font-montserrat"
			>
				WINNERSHIGH
			</Text>
		),
		headerTitleAlign: 'left',
		headerRight: () => (
			<View className="flex items-center justify-center flex-row w-fit">
				<TouchableOpacity
					className="mr-4 flex flex-row"
					onPress={() => alert('Right Menu Clicked')}
				>
					<View>
						<FontAwesome5 name="bell" size={24} color="black" />
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					className="mr-4 flex flex-row"
					onPress={() => alert('Right Menu Clicked')}
				>
					<View>
						<Ionicons name="search" size={24} color="black" />
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					className="mr-4 flex flex-row"
					onPress={() => alert('Right Menu Clicked')}
				>
					<View>
						<Ionicons name="menu" size={24} color="black" />
					</View>
				</TouchableOpacity>
			</View>
		),
	});
	return (
		<DefaultLayoutContainer>
			<View className="flex flex-row items-center justify-center">
				<UserProfile size={80} />
				<View>
					<Text>닉네임을 등록해주세요.</Text>
					<Text>상태메시지를 입력해주세요.</Text>
				</View>
			</View>
			<View className="flex items-center justify-center">
				<Text>인증 현황</Text>
				<View className="flex flex-row items-center justify-center">
					<View>
						<Text>0</Text>
						<Text>참여중</Text>
					</View>
					<View>
						<Text>0</Text>
						<Text>완료</Text>
					</View>
					<View>
						<Text>0</Text>
						<Text>개설</Text>
					</View>
				</View>
			</View>
		</DefaultLayoutContainer>
	);
}
