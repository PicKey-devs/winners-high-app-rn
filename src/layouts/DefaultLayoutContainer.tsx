import React from 'react';
import { View } from 'react-native';
import { globalStyles } from '../common/style';

export default function DefaultLayoutContainer({
	children, // children is a prop
}: {
	children: any;
}) {
	return (
		<View
			style={{
				...globalStyles.BgBase,
			}}
		>
			{children}
		</View>
	);
}
