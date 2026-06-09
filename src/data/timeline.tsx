export type SimpleDate = {
	month?: number;
	year: number;
};

export type TimelineEvent = {
	id: number;
	name: string;
	description: React.ReactNode;
	info: string[];
	time_period: {
		start: SimpleDate;
		end?: SimpleDate | "now";
	};
};

export const timeline: TimelineEvent[] = [
	{
		id: 2,
		name: "Praktyki zawodowe",
		description: <>Miesięczne praktyki zawodowe w ramach nauki w technikum</>,
		info: ["InfoSoftware Polska"],
		time_period: {
			start: {
				month: 7,
				year: 2023,
			},
		},
	},
	{
		id: 4,
		name: "Erasmus+",
		description: (
			<>
				Miesięczne praktyki zawodowe w ramach programu Erasmus+ w firmie
				Edugep(Setúbal, Portugalia)
			</>
		),
		info: ["Edugep", "Portugalia"],
		time_period: {
			start: {
				month: 7,
				year: 2024,
			},
		},
	},
	{
		id: 3,
		name: "Praktyki zawodowe",
		description: <>Miesięczne praktyki zawodowe w ramach nauki w technikum</>,
		info: ["InfoSoftware Polska"],
		time_period: {
			start: {
				month: 10,
				year: 2025,
			},
		},
	},
	{
		id: 1,
		name: "Szkoła średnia - Technik Programista",
		description: (
			<>
				Tytuł technika programisty wraz z uzyskanymi kwalifikacjami:
				<ul className="list-disc pl-5">
					<li>
						INF.04 - <span className="text-foreground">99%</span>
					</li>
					<li>
						INF.03 - <span className="text-foreground">100%</span>
					</li>
				</ul>
			</>
		),
		info: ["Technikum nr.5 w Krośnie"],
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
