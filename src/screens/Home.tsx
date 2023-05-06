import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import ChallengeItem from '../components/home/ChallengeItem';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { initTab } from '../core/useTabs';

type ChallengeItemProps = {
	style: any;
};
export default function Home({ navigation, route }: any) {
	const [tabs, setTabs] = useState([]);

	const { onBindTabs } = initTab();
	React.useLayoutEffect(() => {
		onBindTabs({ route });
	});
	const goToChallengeDetail = () => navigation.navigate('BeatList');
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
		<ScrollView
			showsVerticalScrollIndicator={false}
			showsHorizontalScrollIndicator={false}
		>
			<View>
				<View>
					<Text className="text-red-600">인증방 리스트</Text>
					<View>
						<Text>=</Text>
					</View>
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
	);
}

Home.defaultProps = {
	navigation: {},
};
