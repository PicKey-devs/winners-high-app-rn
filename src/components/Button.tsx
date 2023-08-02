import { ComponentProps } from 'react';
import { Pressable, Button as NativeButton, Text } from 'react-native';

interface Props
	extends Pick<ComponentProps<typeof NativeButton>, 'title' | 'onPress'> {
	variant?: 'primary' | 'secondary' | 'tertiary';
	size?: 'large' | 'medium' | 'small';
	radius?: 0 | 8 | 10;
	fontSize?: 16 | 18 | 20;
}

function Button({
	title,
	onPress,
	variant = 'primary',
	size = 'medium',
	radius = 0,
	fontSize = 16,
	...props
}: Props) {
	return (
		<Pressable
			onPress={onPress}
			style={{
				borderRadius: radius,
			}}
			className={`
			justify-center items-center
			${
				{
					primary: 'bg-primary',
					secondary: 'bg-secondary',
					tertiary: 'bg-grey-5',
				}[variant]
			}
			${
				{
					large: 'h-16',
					medium: 'h-[60px]',
					small: 'h-[50px]',
				}[size]
			}
			`}
		>
			<Text
				className={`
				font-700
				${
					{
						primary: 'text-white',
						secondary: 'text-primary',
						tertiary: 'text-white',
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

export default Button;
