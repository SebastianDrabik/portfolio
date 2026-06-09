import type { SimpleDate, TimelineEvent } from "#/data/timeline.tsx";

const monthYearFormatter = new Intl.DateTimeFormat(["pl-PL", "en-US"], {
	month: "short",
	year: "numeric",
});

const formatDate = (date: SimpleDate): string => {
	if (date.month) {
		const jsDate = new Date(date.year, date.month - 1, 1);
		return monthYearFormatter.format(jsDate);
	}
	return `${date.year}`;
};

export function Time({
	period,
	className,
}: {
	period: TimelineEvent["time_period"];
	className?: string;
}) {
	const startStr = formatDate(period.start);

	let endStr = "";
	if (period.end === "now") {
		endStr = "Present";
	} else if (period.end) {
		endStr = formatDate(period.end);
	}

	return (
		<time className={className}>
			{startStr}
			{endStr ? ` – ${endStr}` : ""}
		</time>
	);
}

export function Timeline({ items }: { items: TimelineEvent[] }) {
	return (
		<ol className="relative border-s border-primary">
			{items.map((item) => (
				<li className="mb-10 ms-4" key={item.id}>
					<div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -inset-s-1.5"></div>

					<Time
						className="text-sm font-normal leading-none text-primary"
						period={item.time_period}
					/>
					<h3 className="text-lg font-semibold text-heading mt-1 text-foreground">
						{item.name}
					</h3>
					<h4 className="text-sm mb-2 text-gray-400">
						{item.info.join(" • ")}
					</h4>
					<div className="mb-3.5 text-base font-normal text-body">
						{item.description}
					</div>
				</li>
			))}
		</ol>
	);
}
