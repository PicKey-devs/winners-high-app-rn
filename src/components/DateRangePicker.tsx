import { Pressable, Text, View } from 'react-native';
import {
	compareAsc,
	eachDayOfInterval,
	endOfMonth,
	format,
	getDay,
	getMonth,
	isBefore,
	isEqual,
	startOfMonth,
} from 'date-fns';

import { useLilius } from 'use-lilius';
import { LeftArrowIcon, RightArrowIcon } from './Icons';
export default function DateRangePicker() {
	const {
		calendar,
		deselect,
		inRange,
		isSelected,
		select,
		selected,
		selectRange,
		viewing,
		viewNextMonth,
		viewPreviousMonth,
	} = useLilius();

	return (
		<View className="w-full gap-4">
			<View className="flex-row justify-between w-full">
				<Text className="font-500 text-lg">
					{format(viewing, 'yyyy년 M월')}
				</Text>

				<View className="flex-row gap-3">
					<Pressable
						className="bg-grey-#f2f2f2 w-7 h-7 rounded-9999 justify-center items-center"
						onPress={viewPreviousMonth}
					>
						<LeftArrowIcon />
					</Pressable>

					<Pressable
						className="bg-grey-#f2f2f2 w-7 h-7 rounded-9999 justify-center items-center"
						onPress={viewNextMonth}
					>
						<RightArrowIcon />
					</Pressable>
				</View>
			</View>

			<View className="bg-grey-#F7F7FE rounded-20 p-6 w-full">
				{calendar.map((month) => (
					<View key={month[0][0].toDateString()} className="gap-y-[20px]">
						<View className="flex-row gap-x-[14px]">
							{month[0].map((day) => {
								const isWeekend = [0, 6].includes(getDay(day));

								return (
									<View key={`${day}`} className="flex-1">
										<Text
											className={`text-md font-700 text-center ${
												isWeekend ? 'text-grey-#929292' : 'text-lightBlack'
											}`}
										>
											{['일', '월', '화', '수', '목', '금', '토'][getDay(day)]}
										</Text>
									</View>
								);
							})}
						</View>

						{month.map((week) => {
							const startDay = week.findIndex((day) => {
								return selected.some((selectedDay) =>
									isEqual(selectedDay, day),
								);
							});
							const endDay = week.findLastIndex((day) => {
								return selected.some(
									(selectedDay) =>
										isEqual(selectedDay, day) &&
										getMonth(viewing) === getMonth(day),
								);
							});

							return (
								<View
									key={`month-${month[0][0].toDateString()}-week-${week[0]}`}
									className="relative flex-row gap-x-[14px]"
								>
									{week.map((day) => {
										const isWeekend = [0, 6].includes(getDay(day));

										if (getMonth(viewing) < getMonth(day)) {
											return <View className="flex-1" />;
										}

										return (
											<Pressable
												key={`${day}`}
												className={`relative w-[30px] h-[30px] justify-center items-center
												${
													isEqual(day, selected[0]) ||
													isEqual(day, selected[selected.length - 1])
														? 'bg-primary rounded-9999'
														: ''
												}
											
												`}
												disabled={isBefore(
													day,
													new Date(
														new Date().getFullYear(),
														new Date().getMonth(),
														new Date().getDate(),
													),
												)}
												onPress={() => {
													const sorted = selected.sort((a, b) =>
														compareAsc(a, b),
													);

													if (sorted.length === 0) {
														select(day);
													} else if (isSelected(day)) {
														if (selected.length === 1) {
															deselect(day);
														} else {
															const range = eachDayOfInterval({
																start: sorted[0],
																end: day,
															});
															const diff = sorted.filter((d) =>
																range
																	.map((a) => a.getTime())
																	.includes(d.getTime()),
															);

															selectRange(diff[0], diff[diff.length - 1], true);
														}
													} else {
														selectRange(sorted[0], day, true);
													}
												}}
											>
												<Text
													className={`text-md font-700 text-center ${
														isWeekend ||
														!inRange(
															day,
															startOfMonth(viewing),
															endOfMonth(viewing),
														)
															? 'text-grey-#929292'
															: 'text-lightBlack'
													}
													${
														isEqual(day, selected[0]) ||
														isEqual(day, selected[selected.length - 1])
															? 'text-white'
															: ''
													}
													`}
												>
													{format(day, 'dd')}
												</Text>
											</Pressable>
										);
									})}
									{startDay !== endDay && (
										<View
											className="absolute -z-10 bg-primary/20 h-full rounded-9999"
											style={{
												left: calculateWeekRangeLeft({
													width: 30,
													gap: 14,
													startDay,
												}),
												width: calculateWeekRangeWidth({
													width: 30,
													gap: 14,
													startDay,
													endDay,
												}),
											}}
										/>
									)}
								</View>
							);
						})}
					</View>
				))}
			</View>
		</View>
	);
}

const calculateWeekRangeLeft = ({
	width,
	gap,
	startDay,
}: {
	width: number;
	gap: number;
	startDay: number;
}) => {
	return (width + gap) * startDay;
};

const calculateWeekRangeWidth = ({
	width,
	gap,
	startDay,
	endDay,
}: {
	width: number;
	gap: number;
	startDay: number;
	endDay: number;
}) => {
	return (endDay - startDay) * (width + gap) + width;
};
