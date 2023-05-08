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
	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, [navigation]);

	return (
		<DefaultLayoutContainer>
			<View>
				<View className="mx-16 my-32 flex flex-row justify-center items-center">
					<Image style={styles.MainLogo} />
				</View>
				<View className="px-6">
					<TouchableOpacity
						onPress={() => navigation.navigate('Home')}
						className="mb-4"
						style={{ ...styles.SignButton, ...styles.kakao }}
					>
						<Image
							style={styles.Icon}
							source={require('../../assets/icons/icon_kakao_logo.png')}
						/>
						<Text style={styles.kakao}>카카오로 시작하기</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate('Home')}
						className="mb-4"
						style={{ ...styles.SignButton, ...styles.naver }}
					>
						<Image
							style={styles.Icon}
							source={require('../../assets/icons/icon_naver_logo.png')}
						/>
						<Text style={styles.naver}>네이버로 시작하기</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate('Home')}
						className="mb-4"
						style={{ ...styles.SignButton, ...styles.apple }}
					>
						<Image
							style={styles.Icon}
							source={require('../../assets/icons/icon_apple_logo.png')}
						/>
						<Text style={styles.apple}>Apple로 로그인</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate('Home')}
						className="mb-4"
						style={{ ...styles.SignButton, ...styles.email }}
					>
						<Image
							style={styles.Icon}
							source={require('../../assets/icons/icon_email_logo.png')}
						/>
						<Text style={styles.email}>이메일로 시작하기</Text>
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

	MainLogo: {
		width: 120,
		height: 120,
		resizeMode: 'contain',
		backgroundColor: '#538EF4',
	},

	Icon: {
		position: 'absolute',
		left: 24,
		width: 20,
		height: 20,
		resizeMode: 'contain',
	},

	kakao: {
		backgroundColor: '#FAE64C',
		color: '#262626',
		fontSize: 16,
	},

	naver: {
		backgroundColor: '#5AC466',
		color: '#FFFFFF',
		fontSize: 16,
	},

	email: {
		backgroundColor: '#538EF4',
		color: '#FFFFFF',
		fontSize: 16,
	},

	apple: {
		backgroundColor: '#000000',
		color: '#FFFFFF',
		fontSize: 16,
	},
});
