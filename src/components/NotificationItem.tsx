import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserProfile from './UserProfile';

interface UserProfileProps {
	userId?: number;
	userThumbnail?: string;
	userName?: string;
}

export default function NotificationItem() {
	return (
		<View className="flex flex-column align-center px-6">
			<View className="flex flex-row align-center justify-between mb-4">
				<UserProfile size={30} isMaster={true} userName={'위너스하이'} />
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<Text
						style={{
							color: '#929292',
						}}
					>
						등록일
					</Text>
					<Text
						className="ml-3"
						style={{
							color: '#C4C3C4',
						}}
					>
						2023년 3월 3일
					</Text>
				</View>
			</View>
			<View style={styles.notificationContents}>
				<Text>내용</Text>
			</View>
		</View>
	);
}

NotificationItem.defaultProps = {
	userId: 0,
	userThumbnail: '',
	userName: '',
};
const styles = StyleSheet.create({
	notificationContents: {
		width: '100%',
		height: 100,
		backgroundColor: '#F5F5F5',
		borderRadius: 20,
		paddingTop: 18,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 18,
	},
});
