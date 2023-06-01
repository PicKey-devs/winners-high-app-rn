import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { ToggleItem } from '../ToggleItem';
import CategoryList from '../home/CategoryList';

interface BadgeTabFormProps {
	tabs: { label: string; value: number }[];
	children: any;
}

export default function BadgeTabForm({ children }: BadgeTabFormProps) {
	const [selectedTab, setSelectedTab] = useState(1);
	const [tabs, setTabs] = useState([
		{ label: 'All', value: 1 },
		{ label: 'Active', value: 2 },
		{ label: 'Completed', value: 3 },
	]);

	const handleTabChange = (tab: any) => {
		setSelectedTab(tab);
	};

	return (
		<View className="mb-8">
			<CategoryList
				options={tabs}
				selectedCategory={selectedTab}
				setSelectedCategory={setSelectedTab}
			/>
			<View>{children.filter((e: any) => e.props.id == selectedTab)}</View>
		</View>
	);
}

{
}
BadgeTabForm.defaultProps = {
	tabs: [],
};

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
