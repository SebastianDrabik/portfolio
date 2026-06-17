// js, ts, SQL, Excel...
import { Section } from "#/components/Section.tsx";
import { CommentSpan } from "#/components/ui/comment.tsx";
import { techstack } from "#/data/techstack.tsx";

export function TechStackSection() {
	return (
		<Section tag="tech-stack" title="Narzędzia z jakich korzystam">
			<div className="flex flex-col gap-6">
				{techstack.map((t) => (
					<div key={t.section}>
						<CommentSpan className="uppercase text-sm">{t.section}</CommentSpan>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 pt-2">
							{t.items.map(({ name, icon }) => (
								<div
									key={name}
									className="p-2 px-3 bg-card rounded-sm border-muted border flex items-center gap-2.5"
								>
									<div className="w-8">{icon}</div>
									{name}
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</Section>
	);
}
