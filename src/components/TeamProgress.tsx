import { Text, View } from 'react-native';
import Progress from './Progress';
import { ProgressProps } from './components.props';

export default function TeamProgress({
	rate,
	targetRate,
}: Omit<ProgressProps, 'textClassName'>) {
	return (
		<View className="flex-row gap-5 items-center">
			<Text className="text-xl font-600">{rate}%</Text>
			<View className="flex-1">
				<View className="relative">
					<Progress
						rate={rate}
						targetRate={targetRate}
						textClassName="border-[2px] border-grey-2 h-[17px]"
					/>
					<Text className="absolute -top-full right-[80%] font-700 text-xs">
						20%
					</Text>
					<Text className="absolute -top-full right-[60%] font-700 text-xs">
						40%
					</Text>
					<Text className="absolute -top-full right-[40%] font-700 text-xs">
						60%
					</Text>
					<Text className="absolute -top-full right-[20%] font-700 text-xs">
						80%
					</Text>

					{/* TODO: top-[calc(100%+10px)]로 안 되는 이유?? */}
					<Text className="absolute top-[calc(17px+10px)] font-700 text-xs text-center w-full text-bluesky">
						목표달성까지 {targetRate - rate}% 남음
					</Text>
				</View>
			</View>
		</View>
	);
}
