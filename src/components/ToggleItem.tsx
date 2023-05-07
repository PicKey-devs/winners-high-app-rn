import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

interface ToggleItemProps {
	label: string;
	value: number | string;
	isSelected: boolean;
	setSelectedCategory: (category: number | string) => void;
}

export const ToggleItem = ({
	label,
	value,
	isSelected,
	setSelectedCategory,
}: ToggleItemProps) => {
	return (
		<TouchableOpacity
			className="flex align-center justify-center mr-3"
			style={{
				...styles.ToggleButton,
				backgroundColor: isSelected ? '#EAF6FF' : '#FFFFFF',
				borderColor: isSelected ? '#538EF4' : '#C4C3C4',
			}}
			onPress={() => setSelectedCategory(value)}
		>
			<Text
				style={{
					...styles.ToggleLabel,
					color: isSelected ? '#000000' : '#929292',
				}}
			>
				{label}
			</Text>
		</TouchableOpacity>
	);
};

ToggleItem.defaultProps = {
	label: '',
	isSelected: false,
};

const styles = StyleSheet.create({
	ToggleButton: {
		width: 'auto',
		borderRadius: 50,
		backgroundColor: '#FFFFFF',
		borderColor: '#C4C3C4',
		borderWidth: 2,
	},
	ToggleLabel: {
		paddingTop: 6,
		paddingBottom: 8,
		paddingLeft: 12,
		paddingRight: 12,
		fontSize: 16,
		fontWeight: 'bold',
	},
});
