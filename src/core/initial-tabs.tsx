import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';

export const initTab = ({ navigation }: any) => {
	const onBindTabs = () => {
		navigation.setOptions({
			headerTitle: (props: any) => (
				<Text
					{...props}
					style={{
						fontSize: 22,
						fontWeight: 'bold',
						fontFamily: 'montserrat',
					}}
				>
					WINNERSHIGH
				</Text>
			),
			headerTitleAlign: 'left',
			headerStyle: {},
			headerRight: () => (
				<View className="flex items-center justify-center flex-row">
					<TouchableOpacity
						className="mr-4 flex flex-row"
						onPress={() => alert('Right Menu Clicked')}
					>
						<View>
							<FontAwesome5 name="bell" size={20} color="black" />
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
			),
		});
	};
	return {
		onBindTabs,
	};
};
