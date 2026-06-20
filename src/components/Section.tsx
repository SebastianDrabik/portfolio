import {ClientOnly} from "@tanstack/react-router";
import {useSectionNumber} from "#/components/SectionProvider.tsx";

export function Section({
	tag,
	children,
	bgMode = "default",
}: {
	tag: string;
	children?: React.ReactNode;
	bgMode?: "default" | "secondary";
}) {
	// TODO: secondary color
	const num = useSectionNumber()

	return (
		<section className={bgMode === "secondary" ? "bg-" : ""}>
			<div className="max-w-7xl mx-auto px-2">
				<h2 className="relative select-none font-zen-dots uppercase tracking-wider my-24">
					<ClientOnly>
						<span className="absolute text-white/15 -top-3.5 left-0 text-xl">{String(num).padStart(2, '0')}</span>
					</ClientOnly>
					<span className="text-6xl md:text-8xl text-white/20">{tag}</span>
				</h2>
				<div className="text-muted-foreground px-1 md:px-3">{children}</div>
			</div>
		</section>
	);
}
