import { Text as NativeText, TextProps as NativeTextProps } from 'react-native';

import fonts from '../../assets/fonts';

interface TextProps extends Omit<NativeTextProps, 'className'> {
	fontWeight?: keyof typeof fonts extends `${infer TFontName}-${infer TFontWeight}`
		? TFontWeight
		: never;
	textClassName?: string;
}

export default function Text({
	fontWeight = 'Regular',
	textClassName,
	children,
	...props
}: TextProps) {
	return (
		<NativeText
			style={{
				fontFamily: `NotoSansKR-${fontWeight}`,
			}}
			className={textClassName}
			{...props}
		>
			{children}
		</NativeText>
	);
}
