import { ComponentProps } from 'react';
import { Pressable, Button as NativeButton, Text } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Props
	extends Pick<ComponentProps<typeof NativeButton>, 'title' | 'onPress'> {
	variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
	size?: 'large' | 'medium' | 'small';
	radius?: 0 | 8 | 10;
	fontSize?: 16 | 18 | 20;
	textClassName?: string;
}

export default function Button({
	title,
	onPress,
	variant = 'primary',
	size = 'medium',
	radius = 0,
	fontSize = 16,
	textClassName,
	...props
}: Props) {
	return (
		<Pressable
			onPress={onPress}
			style={{
				borderRadius: radius,
			}}
			className={twMerge(
				`
			justify-center items-center
			${
				{
					primary: 'bg-primary',
					secondary: 'bg-secondary',
					tertiary: 'bg-grey-#929292',
					quaternary: 'bg-white',
				}[variant]
			}
			${
				{
					large: 'h-16',
					medium: 'h-[60px]',
					small: 'h-[50px]',
				}[size]
			}
			`,
				textClassName,
			)}
		>
			<Text
				className={`
				font-700
				${
					{
						primary: 'text-white',
						secondary: 'text-primary',
						tertiary: 'text-white',
						quaternary: 'text-grey-#929292',
					}[variant]
				}
				`}
				style={{ fontSize }}
				{...props}
			>
				{title}
			</Text>
		</Pressable>
	);
}
