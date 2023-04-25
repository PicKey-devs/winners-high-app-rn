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
					}}
				>
					WINNERSHIGH
				</Text>
			),
			headerTitleAlign: 'left',
			headerStyle: {},
			headerRight: () => (
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<TouchableOpacity
						onPress={() => alert('Right Menu Clicked')}
						style={{ marginRight: 10, display: 'flex', flexDirection: 'row' }}
					>
						<View>
							<FontAwesome5 name="bell" size={24} color="black" />
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => alert('Right Menu Clicked')}
						style={{ marginRight: 10, display: 'flex', flexDirection: 'row' }}
					>
						<View>
							<Ionicons name="search" size={32} color="black" />
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => alert('Right Menu Clicked')}
						style={{ marginRight: 10, display: 'flex', flexDirection: 'row' }}
					>
						<View>
							<Ionicons name="menu" size={32} color="black" />
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
