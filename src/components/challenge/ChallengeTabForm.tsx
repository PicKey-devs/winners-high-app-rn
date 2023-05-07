import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function ChallengeTabForm({ children, tabs }: any) {
	const [selectedTab, setSelectedTab] = useState(1);

	const handleTabChange = (tab: any) => {
		setSelectedTab(tab);
	};

	useEffect(() => {
		console.log(
			'ChallengeTabForm',
			children.filter((e: any) => {
				console.log(e.props.id, selectedTab);
				return e.props.id == selectedTab;
			}),
		);
	}, []);

	return (
		<View>
			<View className="flex flex-row">
				{tabs.map((tab, idx) => {
					return (
						<View
							style={styles.tabButton}
							className="flex flex-1 flex-column align-center justify-center"
						>
							<View
								className="flex flex-1 flex-column align-center justify-center"
								key={`tab-selector-${tab}-${idx}`}
							>
								<Pressable
									onPress={() => handleTabChange(tab.value)}
									className=" flex flex-row align-center justify-center"
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
							</View>
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
			<View>{children.filter((e: any) => e.props.id == selectedTab)}</View>
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
