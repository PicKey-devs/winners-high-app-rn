import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import ChallengeItem from '../components/home/ChallengeItem';
import CategoryList from '../components/home/CategoryList';
import Ionicons from '@expo/vector-icons/Ionicons';
import DefaultLayoutContainer from '../layouts/DefaultLayoutContainer';
import { FontAwesome5 } from '@expo/vector-icons';
import { initTab } from '../core/useTabs';
import { Constant } from '../common/constant';

type ChallengeItemProps = {
	style: any;
};
export default function Home({ navigation, route }: any) {
	const [selectedCategory, setSelectedCategory] = useState('all');
	const { onBindTabs } = initTab();
	React.useLayoutEffect(() => {
		goToSignPage();
		onBindTabs({ route });
	});
	const goToChallengeDetail = () => navigation.navigate('BeatList');
	const goToSignPage = () => navigation.navigate('Sign');
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
			<CategoryList
				options={Constant.CHALLENGE_CATEGORY_LIST}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
			>
				<View className="px-6">
					<View className="flex flex-row align-center my-4 justify-between">
						<Text className="text-bold text-lg font-bold">인증방 리스트</Text>
						<FontAwesome5
							style={{ transform: [{ rotate: '90deg' }] }}
							name="sliders-h"
							size={20}
							color="black"
						/>
					</View>
					{[1, 2, 3].map(() => (
						<ChallengeItem
							goToChallengeDetail={goToChallengeDetail}
							navigation={navigation}
							style={{
								marginBottom: 20,
							}}
						/>
					))}
				</View>
			</ScrollView>
		</DefaultLayoutContainer>
	);
}

Home.defaultProps = {
	navigation: {},
};
