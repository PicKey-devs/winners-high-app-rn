import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
	Image,
} from 'react-native';
import DefaultLayoutContainer from '../layouts/DefaultLayoutContainer';

export default function Sign({ navigation }: any) {
	return (
		<DefaultLayoutContainer>
			<View>
				<View></View>
				<View className="px-6">
					<TouchableOpacity
						className="mb-4"
						style={{ ...styles.SignButton, ...styles.kakao }}
					>
						<Image
							style={{
								width: 20,
								height: 20,
							}}
							source={require('../../assets/icons/icon-apple-logo@3.png')}
						/>
						<Text>Sign</Text>
					</TouchableOpacity>
					<TouchableOpacity
						className="mb-4"
						style={{ ...styles.SignButton, ...styles.naver }}
					>
						<Image
							style={{
								width: 20,
								height: 20,
							}}
							source={require('../../assets/icons/icon-apple-logo@3.png')}
						/>
						<Text>Sign</Text>
					</TouchableOpacity>
					<TouchableOpacity
						className="mb-4"
						style={{ ...styles.SignButton, ...styles.apple }}
					>
						<Image
							style={{
								width: 20,
								height: 20,
							}}
							source={require('../../assets/icons/icon-apple-logo@3.png')}
						/>
						<Text>Sign</Text>
					</TouchableOpacity>
					<TouchableOpacity
						className="mb-4"
						style={{ ...styles.SignButton, ...styles.email }}
					>
						<Image
							style={{
								width: 20,
								height: 20,
							}}
							source={require('../../assets/icons/')}
						/>
						<Text>Sign</Text>
					</TouchableOpacity>
				</View>
			</View>
		</DefaultLayoutContainer>
	);
}

const styles = StyleSheet.create({
	SignButton: {
		width: '100%',
		height: 50,
		borderRadius: 20,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},

	kakao: {
		backgroundColor: '#FAE64C',
	},

	naver: {
		backgroundColor: '#5AC466',
	},

	email: {
		backgroundColor: '#538EF4',
	},

	apple: {
		backgroundColor: '#000000',
	},
});
