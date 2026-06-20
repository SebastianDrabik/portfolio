import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "#/components/MainPageSections/Hero.tsx";
import { AboutSection } from "#/components/MainPageSections/AboutSection.tsx";
import { ContactSection } from "#/components/MainPageSections/ContactSection.tsx";
import { ProjectsSection } from "#/components/MainPageSections/ProjectsSection.tsx";
import { TechStackSection } from "#/components/MainPageSections/TechStackSection.tsx";
import { CareerSection } from "#/components/MainPageSections/CareerSection.tsx";
import {SectionProvider} from "#/components/SectionProvider.tsx";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	// TODO: Fix snapping

	return (
		<>
			<Hero />
			<div className="flex flex-col py-20 gap-10 snap-center">
				<SectionProvider>
					<AboutSection />
					<ProjectsSection />
					<TechStackSection />
					<CareerSection />
					<ContactSection />
				</SectionProvider>
			</div>
		</>
	);
}
