import React from 'react';
import { View, ScrollView } from 'react-native';
import { ToggleItem } from '../ToggleItem';
import { globalStyles } from '../../common/style';

interface CategoryListProps {
	options: { label: string; value: number | string }[];
	selectedCategory: number | string;
	setSelectedCategory: (category: number | string) => void;
}
export default function CategoryList({
	options,
	selectedCategory,
	setSelectedCategory,
}: CategoryListProps) {
	return (
		<ScrollView
			className="flex flex-row px-6 py-4"
			style={globalStyles.BgWhite}
			showsHorizontalScrollIndicator={false}
			horizontal={true}
		>
			{options.map((option, index) => (
				<ToggleItem
					key={index}
					value={option.value}
					label={option.label}
					isSelected={selectedCategory === option.value}
					setSelectedCategory={setSelectedCategory}
				/>
			))}
		</ScrollView>
	);
}

CategoryList.defaultProps = {
	options: [],
};
