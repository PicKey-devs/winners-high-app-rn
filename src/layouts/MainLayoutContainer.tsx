import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styled from 'styled-components/native';

const FloatButton = styled.TouchableOpacity``;

export default function MainLayoutContainer({ children }: { children: any }) {
	return (
		<View
			style={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				padding: 24,
			}}
		>
			{children}

			<FloatButton
				style={{
					width: 60,
					height: 60,
					borderRadius: '50%',
					backgroundColor: '#538EF4',
					position: 'absolute',
					bottom: 24,
					right: 24,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<View>
					<Ionicons name="add" size={32} color="white" />
				</View>
			</FloatButton>
		</View>
	);
}
