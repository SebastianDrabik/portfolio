import { Section } from "#/components/Section.tsx";
import { Timeline } from "#/components/ui/timeline.tsx";
import { timeline as timelineData } from "#/data/timeline.tsx";

export function CareerSection() {
	return (
		<Section title={"My timeline"} tag={"career"}>
			<Timeline items={timelineData}></Timeline>
		</Section>
	);
}
