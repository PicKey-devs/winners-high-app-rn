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
	percentage,
	targetPercentage,
}: Props) {
	return (
		<View className="flex-row gap-[10px]">
			<View>{avatar}</View>
			<View className="flex-1">
				{/* TODO: font size 하드코딩 제거 */}
				<Text className="font-500 text-lightBlack text-[18px]">{username}</Text>
				<View className="flex-row gap-4 items-center">
					<View className="flex-1">
						<Progress
							percentage={percentage}
							targetPercentage={targetPercentage}
						/>
					</View>
					<Text className="text-xl font-600">{percentage}%</Text>
				</View>
			</View>
		</View>
	);
}
