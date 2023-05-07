import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

interface UserProfileProps {
	userId: number;
	userThumbnail: string;
	userName: string;
}

export default function UserProfile({}) {
	return (
		<View className="flex flex-row items-center">
			<View style={styles.userThumbnail}>
				<FontAwesome5 name="user-alt" size={16} color="white" />
				<View style={styles.userMaster}>
					<FontAwesome5 name="crown" size={8} color="white" />
				</View>
			</View>
			<Text className=" text-md ml-2">{'위너스하이'}</Text>
		</View>
	);
}

UserProfile.defaultProps = {
	userId: 0,
	userThumbnail: '',
	userName: 'test user',
};

const styles = StyleSheet.create({
	userThumbnail: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: '#C4C3C4',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},

	userMaster: {
		position: 'absolute',
		right: 0,
		bottom: 0,
		width: 13,
		height: 13,
		borderRadius: 6.5,
		backgroundColor: '#538EF4',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
