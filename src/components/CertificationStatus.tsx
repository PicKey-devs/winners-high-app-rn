import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CertificationStatusProps {
	rate: number;
	totalRate: number;
}

export default function CertificationStatus({
	rate,
	totalRate,
}: CertificationStatusProps) {
	return (
		<View className="px-6">
			<Text className="text-md font-bold">팀 인증률</Text>
			<View className="flex flex-row items-end ">
				<View
					className="mr-6"
					style={{
						display: 'flex',
						alignSelf: 'flex-end',
					}}
				>
					<Text
						className="font-bold"
						style={{
							fontSize: 22,
							lineHeight: 0,
						}}
					>{`${rate}%`}</Text>
				</View>
				<View className="w-full flex flex-1">
					<View className="flex flex-row ">
						<Text
							style={{
								position: 'absolute',
								left: `${rate}%`,
							}}
						>
							50%
						</Text>
						<Text
							style={{
								position: 'absolute',
								left: `${totalRate}%`,
							}}
						>
							80%
						</Text>
						<Text>100%</Text>
					</View>
					<View style={styles.ProgressBarWrapper}>
						<View
							style={{
								...styles.ProgressBarTotalRate,
								width: `${totalRate}%`,
							}}
						/>
						<View
							style={{
								...styles.ProgressBarRate,
								width: `${rate}%`,
							}}
						/>
						{[1, 2, 3, 4].map((i) => {
							return (
								<View
									key={i}
									style={{
										...styles.ProgressBarDivider,
										left: `${i * 20}%`,
									}}
								/>
							);
						})}
					</View>
				</View>
			</View>
		</View>
	);
}

CertificationStatus.defaultProps = {
	rate: 50,
	totalRate: 80,
};

const styles = StyleSheet.create({
	ProgressBarWrapper: {
		flex: 1,
		width: '100%',
		height: 15,
		backgroundColor: '#F7F6F8',
		borderRadius: 50,
		borderColor: '#C4C3C4',
		borderWidth: 2,
	},
	ProgressBarRate: {
		height: '100%',
		position: 'absolute',
		backgroundColor: '#80F988',
		borderRadius: 50,
		borderBottomRightRadius: 0,
		borderTopRightRadius: 0,
	},
	ProgressBarTotalRate: {
		position: 'absolute',
		height: '100%',
		backgroundColor: '#C4C3C4',
		borderRadius: 50,
		borderBottomRightRadius: 0,
		borderTopRightRadius: 0,
	},
	ProgressBarDivider: {
		position: 'absolute',
		left: 30,
		width: 2,
		height: '100%',
		backgroundColor: '#fff',
	},

	ProcessBarRateText: {
		position: 'absolute',

		color: '#fff',
		fontSize: 10,
		fontWeight: 'bold',
	},

	ProcessBarTotalRateText: {
		position: 'absolute',
		left: 0,
		top: 0,
		color: '#fff',
		fontSize: 10,
		fontWeight: 'bold',
	},
});
