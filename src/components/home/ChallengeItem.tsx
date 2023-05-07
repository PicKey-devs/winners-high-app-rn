import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import ChallengeThumbnail from './ChallengeThumbnail';
import BadgeLabel from '../BadgeLabel';
import ProgressBar from '../ProgressBar';
import { FontAwesome5 } from '@expo/vector-icons';

type ChallengeItemProps = {
	style: any;
	goToChallengeDetail: any;
	navigation: any;
};

export default function ChallengeItem({
	style,
	goToChallengeDetail,
	navigation,
}: ChallengeItemProps) {
	return (
		<Container
			style={style}
			onPress={() => {
				navigation.navigate('ChallengeDetail');
			}}
		>
			<View className="flex flex-row">
				<ChallengeThumbnail />
				<View className="flex-1 ml-4 mr-4 flex flex-col justify-around pt-1 pb-1">
					<View className="flex flex-row flex align-center">
						<BadgeLabel label={'루틴'} />
						<Text className="ml-2 text-lg">매일 플래너 쓰기</Text>
					</View>
					<ChallengeDescription>참여인원 ∙ 4명</ChallengeDescription>
					<View className="flex flex-row flex align-center">
						<Text>방장</Text>
						<Text>방장</Text>
					</View>
					<View className="flex flex-row flex align-center">
						<Text>방장</Text>
						<Text>방장</Text>
					</View>
				</View>
			</View>
			<View>
				<View className="flex flex-row justify-between items-center mb-2 mt-4">
					<Text
						style={{
							fontSize: 15,
							color: '#929292',
						}}
					>
						팀 인증률
					</Text>
				</View>
				<View className="flex flex-row justify-between items-center w-full">
					<Text
						className="mr-6 font-bold"
						style={{
							fontSize: 22,
						}}
					>
						75%
					</Text>
					<ProgressBar />
				</View>
			</View>
			<View>
				<View className="flex flex-row justify-between items-center mb-2 mt-4">
					<Text
						style={{
							fontSize: 15,
							color: '#929292',
						}}
					>
						나의 인증률
					</Text>
				</View>
				<View className="flex flex-row justify-between items-center w-full">
					<Text
						className="mr-6 font-bold"
						style={{
							fontSize: 22,
						}}
					>
						75%
					</Text>
					<ProgressBar />
				</View>
			</View>
		</Container>
	);
}

const Container = styled.TouchableOpacity`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border-radius: 10px;
	background-color: white;
`;

const ChallengeInfo = styled.View`
	display: flex;
	flex-direction: row;
`;

const ChallengeTitle = styled.Text`
	font-size: 20px;
	font-weight: 500;
`;

const ChallengeDescription = styled.Text`
	font-size: 15px;
	font-weight: 500;
	color: #929292;
`;

const ChallengeCreatedAt = styled.Text`
	font-size: 15px;
	font-weight: 500;
	color: #929292;
`;
