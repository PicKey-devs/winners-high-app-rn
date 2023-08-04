import { Text, View } from 'react-native';

import { ProgressProps } from './components.props';
import Progress from './Progress';
import { ReactNode } from 'react';

interface Props extends Omit<ProgressProps, 'textClassName'> {
	username: string;
	avatar: ReactNode;
}

export default function MemberProgress({
	avatar,
	username,
	rate,
	targetRate,
}: Props) {
	return (
		<View className="flex-row gap-[10px]">
			<View>{avatar}</View>
			<View className="flex-1">
				<Text>{username}</Text>
				<View className="flex-row gap-4 items-center">
					<View className="flex-1">
						<Progress rate={rate} targetRate={targetRate} />
					</View>
					<Text className="text-xl font-600">{rate}%</Text>
				</View>
			</View>
		</View>
	);
}
