import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

interface UserProfileProps {
	size: number;
	borderWidth?: number;
	userId: number;
	userThumbnail: string;
	userName?: string;
	isMaster?: boolean;
}

export default function UserProfile({
	size,
	borderWidth,
	userId,
	userThumbnail,
	userName,
	isMaster,
}: UserProfileProps) {
	return (
		<View className="flex flex-row items-center">
			<View
				style={{
					...styles.userThumbnail,
					width: size,
					height: size,
					borderRadius: size / 2,
				}}
			>
				<FontAwesome5
					name="user-alt"
					size={size ? size / 2 : 16}
					color="white"
				/>
				{isMaster && (
					<View
						style={{
							...styles.userMaster,
							borderRadius: size / 2,
						}}
					>
						<FontAwesome5
							name="crown"
							size={size ? size / 4 : 8}
							color="white"
						/>
					</View>
				)}
			</View>
			{userName && <Text className=" text-md ml-2">{userName}</Text>}
		</View>
	);
}

UserProfile.defaultProps = {
	userId: 0,
	userThumbnail: '',
	userName: '',
	size: 30,
	borderWidth: 0,
	isMaster: false,
};

const styles = StyleSheet.create({
	userThumbnail: {
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
		backgroundColor: '#538EF4',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
