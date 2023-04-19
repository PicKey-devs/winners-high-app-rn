import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { initTab } from '../core/initial-tabs';
import ChallengeItem from '../components/home/ChallengeItem';
import MainLayoutContainer from '../layouts/MainLayoutContainer';
import Styled from 'styled-components/native';

export default function Home({ navigation }: { navigation: any }) {
	const { onBindTabs } = initTab({ navigation });
	const [tabs, setTabs] = useState([]);
	React.useLayoutEffect(() => {
		onBindTabs();
	}, [navigation]);
	return (
		<MainLayoutContainer>
			<View>
				<ScreenTitle>
					<Text>인증방 리스트</Text>
					<View>
						<Text>=</Text>
					</View>
				</ScreenTitle>
				{[1, 2, 3].map(() => (
					<ChallengeItem
						style={{
							marginBottom: 20,
						}}
					/>
				))}
			</View>
		</MainLayoutContainer>
	);
}

const ScreenTitle = Styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	font-size: 20px;
	font-weight: bold;
`;
