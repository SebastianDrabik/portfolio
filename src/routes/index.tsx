import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "#/components/Hero.tsx";
import { AboutSection } from "#/components/AboutSection.tsx";
import { ContactSection } from "#/components/ContactSection.tsx";
import { ProjectsSection } from "#/components/ProjectsSection.tsx";
import { TechStackSection } from "#/components/TechStackSection.tsx";
import { CareerSection } from "#/components/CareerSection.tsx";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	// TODO: Fix snapping

	return (
		<>
			<Hero />
			<div className="flex flex-col gap-20 py-20 snap-center">
				<AboutSection />
				<ProjectsSection />
				<TechStackSection />
				<CareerSection />
				<ContactSection />
			</div>
		</>
	);
}
