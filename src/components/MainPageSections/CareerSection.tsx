import { Section } from "#/components/Section.tsx";
import { Timeline } from "#/components/ui/timeline.tsx";
import { timeline as timelineData } from "#/data/timeline.tsx";

export function CareerSection() {
	return (
		<Section title={"Kariera"} tag={"career"}>
			<div className="md:w-2/3">
				<Timeline items={timelineData}></Timeline>
			</div>
		</Section>
	);
}
