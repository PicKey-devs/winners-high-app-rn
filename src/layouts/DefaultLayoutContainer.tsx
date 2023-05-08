import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { globalStyles } from '../common/style';

export default function DefaultLayoutContainer({
	children, // children is a prop
}: {
	children: any;
}) {
	return (
		<SafeAreaView
			style={{
				...globalStyles.BgBase,
			}}
		>
			{children}
		</SafeAreaView>
	);
}
