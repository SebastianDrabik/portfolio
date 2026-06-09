type SimpleDate = {
	month?: number;
	year: number;
};

type TimelineItem = {
	name: string;
	description: string;
	time_period: {
		start: SimpleDate;
		end?: SimpleDate | "now";
	};
};

export const timeline: TimelineItem[] = [
	{
		name: "Technikum",
		description: "Technikum nr. 5 w Krośnie",
		time_period: {
			start: {
				month: 9,
				year: 2021,
			},
			end: {
				month: 4,
				year: 2026,
			},
		},
	},
];
