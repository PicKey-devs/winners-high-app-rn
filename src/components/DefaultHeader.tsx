import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function DefaultHeader() {
	return (
		<View className="flex-row">
			<Text
				style={{
					fontSize: 22,
				}}
				className="text-3xl font-bold font-montserrat"
			>
				WINNERSHIGH
			</Text>
			<View className="flex items-center justify-center flex-row w-fit">
				<TouchableOpacity
					className="mr-4 flex flex-row"
					onPress={() => alert('Right Menu Clicked')}
				>
					<View>
						<FontAwesome5 name="bell" size={24} color="black" />
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					className="mr-4 flex flex-row"
					onPress={() => alert('Right Menu Clicked')}
				>
					<View>
						<Ionicons name="search" size={24} color="black" />
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					className="mr-4 flex flex-row"
					onPress={() => alert('Right Menu Clicked')}
				>
					<View>
						<Ionicons name="menu" size={24} color="black" />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}
