import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styled from 'styled-components/native';

const FloatButton = styled.TouchableOpacity``;

export default function DefaultLayoutContainer({
	children, // children is a prop
}: {
	children: any;
}) {
	return (
		<View
			style={{
				backgroundColor: 'blue',
				height: '100%',
			}}
		>
			<SafeAreaView>
				<View
					style={{
						height: 60,
						width: '100%',
						backgroundColor: 'tomato',
					}}
				></View>
			</SafeAreaView>
			<View
				style={{
					flex: 1,
					backgroundColor: 'white',
					paddingRight: 24,
					paddingLeft: 24,
				}}
			>
				{children}
			</View>

			<SafeAreaView>
				<FloatButton
					style={{
						width: 60,
						height: 60,
						borderRadius: 50,
						backgroundColor: '#538EF4',
						position: 'absolute',
						bottom: 74,
						right: 24,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<View>
						<Ionicons name="add" size={32} color="white" />
					</View>
				</FloatButton>
				<View
					style={{
						height: 60,
						width: '100%',
						backgroundColor: 'tomato',
					}}
				>
					<TouchableOpacity>
						<Text>ddsds</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text>ddsds</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</View>
	);
}
