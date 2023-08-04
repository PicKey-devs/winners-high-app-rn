import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';

export default function Progress({
	targetRate,
	rate,
	className,
}: {
	targetRate: number;
	rate: number;
	className?: string;
}) {
	return (
		<View>
			<View
				className={twMerge(
					'relative w-full h-[15px] bg-grey-1 rounded-50 overflow-hidden',
					className,
				)}
			>
				<View
					className={`absolute h-full bg-grey-2 rounded-50 
				${targetRate === 100 ? '' : 'rounded-r-0'}`}
					style={{
						width: `${targetRate}%`,
					}}
				/>
				<View
					className={`absolute h-full bg-primary rounded-50
				${targetRate === 100 ? '' : 'rounded-r-0'}`}
					style={{
						width: `${rate}%`,
					}}
				/>

				<View className="absolute h-full w-[2px] bg-white left-[20%]" />
				<View className="absolute h-full w-[2px] bg-white left-[40%]" />
				<View className="absolute h-full w-[2px] bg-white left-[60%]" />
				<View className="absolute h-full w-[2px] bg-white left-[80%]" />
			</View>
		</View>
	);
}
