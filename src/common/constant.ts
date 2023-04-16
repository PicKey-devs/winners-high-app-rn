import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
export class Constant {
	public static readonly BASE_URL = 'localhost:3000';
}

export class TabNavigationOptions {
	public static readonly screenOptions: BottomTabNavigationOptions = {
		tabBarLabelPosition: 'beside-icon',
		tabBarLabelStyle: {
			fontWeight: '700',
			fontSize: 15,
		},
		tabBarIconStyle: { display: 'none' },
	};
	public static readonly tabBarOptions = {
		tabBarActiveBackgroundColor: '#538EF4',
		tabBarInactiveBackgroundColor: '#fff',
		tabBarActiveTintColor: '#fff',
		tabBarInactiveTintColor: '#538EF4',
	};
}
