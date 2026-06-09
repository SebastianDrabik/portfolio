import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "#/components/MainPageSections/Hero.tsx";
import { AboutSection } from "#/components/MainPageSections/AboutSection.tsx";
import { ContactSection } from "#/components/MainPageSections/ContactSection.tsx";
import { ProjectsSection } from "#/components/MainPageSections/ProjectsSection.tsx";
import { TechStackSection } from "#/components/MainPageSections/TechStackSection.tsx";
import { CareerSection } from "#/components/MainPageSections/CareerSection.tsx";

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
