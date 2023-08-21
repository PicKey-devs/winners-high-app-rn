import { Pressable } from 'react-native';
import { CheckboxIcon } from './Icons';

export default function Checkbox({
	checked,
	onChange,
}: {
	checked: boolean;
	onChange: (checked: boolean) => void;
}) {
	return (
		<Pressable onPress={() => onChange(!checked)}>
			<CheckboxIcon color={checked ? '#538EF4' : '#929292'} />
		</Pressable>
	);
}
