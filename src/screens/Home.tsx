import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { initTab } from '../core/initial-tabs';
import ChallengeItem from '../components/home/ChallengeItem';
import MainLayoutContainer from '../layouts/MainLayoutContainer';
import Styled from 'styled-components/native';
import { font, my } from '../common/style';

type ChallengeItemProps = {
	style: any;
};
export default function Home({ navigation }: { navigation: any }) {
	const { onBindTabs } = initTab({ navigation });
	const [tabs, setTabs] = useState([]);

	const goToChallengeDetail = () => navigation.navigate('BeatList');

	React.useLayoutEffect(() => {
		onBindTabs();
	}, [navigation]);
	return (
		<MainLayoutContainer>
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
						navigation={{ navigation }}
						style={{
							marginBottom: 20,
						}}
					/>
				))}
			</View>
		</MainLayoutContainer>
	);
}

Home.defaultProps = {
	navigation: {},
};
