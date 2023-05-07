import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ProgressBarProps {
	rate: number;
}

export default function ProgressBar({ rate }: ProgressBarProps) {
	return (
		<View style={styles.ProgressBarWrapper}>
			<View
				style={{
					...styles.ProgressBarRate,
					width: `${rate}%`,
				}}
			/>
			{[1, 2, 3, 4].map((i) => {
				return (
					<View
						style={{
							...styles.ProgressBarDivider,
							left: `${i * 20}%`,
						}}
					/>
				);
			})}
		</View>
	);
}

ProgressBar.defaultProps = {
	rate: 50,
};

const styles = StyleSheet.create({
	ProgressBarWrapper: {
		flex: 1,
		width: '100%',
		height: 15,
		backgroundColor: '#F7F6F8',
		borderRadius: 50,
	},
	ProgressBarRate: {
		height: '100%',
		backgroundColor: '#80F988',
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
});
