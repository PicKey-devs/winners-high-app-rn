import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ChallengeItem from '../components/home/ChallengeItem';
import DefaultLayoutContainer from '../layouts/DefaultLayoutContainer';
import Styled from 'styled-components/native';
import { font, my } from '../common/style';

type ChallengeItemProps = {
	style: any;
};
export default function Home({ navigation }: { navigation: any }) {
	const [tabs, setTabs] = useState([]);

	const goToChallengeDetail = () => navigation.navigate('BeatList');

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
