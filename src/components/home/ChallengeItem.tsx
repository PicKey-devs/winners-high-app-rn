import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import ChallengeThumbnail from './ChallengeThumbnail';

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
			<ChallengeInfo>
				<ChallengeThumbnail />
				<View className="flex-1 ml-4 mr-4 flex flex-col justify-around pt-1 pb-1">
					<ChallengeTitle>매일 플래너 쓰기</ChallengeTitle>
					<ChallengeDescription>참여인원 ∙ 4명</ChallengeDescription>
					<ChallengeCreatedAt>개설일 ∙ 2023/03/02</ChallengeCreatedAt>
				</View>
			</ChallengeInfo>
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
				<View className="flex flex-row justify-between items-center">
					<Text>75%</Text>
					<ProgressBar>
						<View
							style={{
								width: '75%',
								height: '100%',
								backgroundColor: '#80F988',
								borderRadius: 10,
							}}
						/>
					</ProgressBar>
				</View>
			</View>
			<Text
				style={{
					fontSize: 15,
					color: '#929292',
					marginTop: 10,
					marginBottom: 4,
				}}
			>
				최근 업데이트
			</Text>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<ChallengeThumbnail size={46} />
				<ChallengeThumbnail size={46} />
				<ChallengeThumbnail size={46} />
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

const ProgressBar = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	height: 16px;
	background-color: #f7f6f8;
	border-radius: 10px;
`;
