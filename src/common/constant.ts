import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
export class Constant {
	public static readonly BASE_URL = 'localhost:3000';
	public static readonly CHALLENGE_CATEGORY_LIST = [
		{
			label: '전체',
			value: 'all',
		},
		{
			label: '루틴',
			value: 'routine',
		},
		{
			label: '운동',
			value: 'exercise',
		},
		{
			label: '식습관',
			value: 'food',
		},
		{
			label: '공부',
			value: 'study',
		},
		{
			label: '취미',
			value: 'hobby',
		},
	];
}
