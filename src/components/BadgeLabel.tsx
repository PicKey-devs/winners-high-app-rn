import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../common/style';

interface BadgeLabelProps {
	label: string;
}

export default function BadgeLabel({ label }: BadgeLabelProps) {
	return (
		<View
			style={{ ...styles.BadgeWrapper, ...globalStyles.BgTheme }}
			className="flex align-center justify-center"
		>
			<Text className="text-sm text-white font-bold">{label}</Text>
		</View>
	);
}

BadgeLabel.defaultProps = {
	label: '',
};

const styles = StyleSheet.create({
	BadgeWrapper: {
		paddingTop: 2,
		paddingBottom: 2,
		paddingLeft: 8,
		paddingRight: 8,
		backgroundColor: '#EAF6FF',
		borderRadius: 5,
	},
});
