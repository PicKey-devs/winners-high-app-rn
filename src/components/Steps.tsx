import { Text, View } from 'react-native';

export default function Steps({
	total,
	active,
}: {
	total: number;
	active: number;
}) {
	if (total < 1) {
		throw new Error('total은 1 이상이어야 합니다.');
	}
	if (active < 1 || active > total) {
		throw new Error(`active는 1 이상 ${total} 이하여야 합니다.`);
	}

	const steps = Array.from({ length: total }, (_, index) => index + 1);

	return (
		<View className="flex-row gap-3">
			{steps.map((step) => (
				<View
					key={step}
					className={`w-7 h-7 border border-primary rounded-9999 relative
                    ${active == step ? 'bg-primary' : ''}`}
				>
					<Text
						className={`text-primary text-md font-500 text-center ${
							active === step ? 'text-white' : ''
						}`}
					>
						{step}
					</Text>
					{total !== step && (
						<View className="absolute top-1/2 -translate-y-1/2 left-full w-[calc(12px+2px)] h-[1.5px] bg-primary" />
					)}
				</View>
			))}
		</View>
	);
}
