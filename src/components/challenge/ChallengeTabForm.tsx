import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function ChallengeTabForm() {
	const [selectedTab, setSelectedTab] = useState(0);
	const [tabs, setTabs] = useState([
		{
			label: '공지사항',
			value: 1,
		},
		{
			label: '인증방법',
			value: 2,
		},
	]);

	const handleTabChange = (tab: any) => {
		setSelectedTab(tab);
	};

	return (
		<View className="flex flex-row">
			{tabs.map((tab, idx) => {
				return (
					<View
						style={styles.tabButton}
						className="flex flex-1 flex-column align-center justify-center"
						key={`tab-selector-${tab}-${idx}`}
					>
						<Pressable
							onPress={() => handleTabChange(tab.value)}
							className="h-full flex flex-row align-center justify-center"
						>
							<Text
								style={{
									fontWeight: selectedTab === tab.value ? 'bold' : 'normal',
									fontSize: 20,
								}}
							>
								{tab.label}
							</Text>
						</Pressable>
						<View
							style={{
								width: '80%',
								height: 4,
								backgroundColor:
									selectedTab === tab.value ? '#538EF4' : 'white',
							}}
						/>
					</View>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	tabButton: {
		display: 'flex',
		height: 54,
		justifyContent: 'center',
		alignItems: 'center',
	},
	tabLabel: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		verticalAlign: 'center',
	},
});
