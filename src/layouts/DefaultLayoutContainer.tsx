import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { globalStyles } from '../common/style';
import BottomTabs from '../components/BottomTabs';
import Header from '../components/Header';

export default function DefaultLayoutContainer({
	children, // children is a prop
	route,
	navigation,
}: {
	children: any;
	route: any;
	navigation: any;
}) {
	return (
		<SafeAreaView
			style={{
				...globalStyles.BgBase,
				flex: 1,
			}}
		>
			<Header route={route} navigation={navigation} />
			<View style={{ flex: 1 }}>{children}</View>
			<BottomTabs route={route} navigation={navigation} />
		</SafeAreaView>
	);#@@@
}
