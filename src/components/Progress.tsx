import { Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { ReactNode } from 'react';

interface ProgressProps {
	targetPercentage: number;
	percentage: number;
	textClassName?: string;
}

function Progress({
	targetPercentage,
	percentage,
	textClassName,
}: ProgressProps) {
	return (
		<View
			className={twMerge(
				'relative w-full h-[15px] bg-grey-1 rounded-50 overflow-hidden',
				textClassName,
			)}
		>
			<View
				className={`absolute h-full bg-grey-2 rounded-50 
				${targetPercentage === 100 ? '' : 'rounded-r-0'}`}
				style={{
					width: `${targetPercentage}%`,
				}}
			/>
			<View
				className={`absolute h-full bg-primary rounded-50
				${percentage === 100 ? '' : 'rounded-r-0'}`}
				style={{
					width: `${percentage}%`,
				}}
			/>

			<View className="absolute h-full w-[2px] bg-white left-[20%]" />
			<View className="absolute h-full w-[2px] bg-white left-[40%]" />
			<View className="absolute h-full w-[2px] bg-white left-[60%]" />
			<View className="absolute h-full w-[2px] bg-white left-[80%]" />
		</View>
	);
}

interface MemberProgressProps extends Omit<ProgressProps, 'textClassName'> {
	username: string;
	avatar: ReactNode;
}

export function MemberProgress({
	avatar,
	username,
	percentage,
	targetPercentage,
}: MemberProgressProps) {
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

export function TeamProgress({
	percentage,
	targetPercentage,
}: Omit<ProgressProps, 'textClassName'>) {
	return (
		<View className="flex-row gap-5 items-center">
			<Text className="text-xl font-600">{percentage}%</Text>
			<View className="flex-1">
				<View className="relative">
					<Progress
						percentage={percentage}
						targetPercentage={targetPercentage}
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
						목표달성까지 {targetPercentage - percentage}% 남음
					</Text>
				</View>
			</View>
		</View>
	);
}
