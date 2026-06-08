import {createFileRoute} from '@tanstack/react-router'
import {Hero} from "#/components/Hero.tsx";
import {AboutSection} from "#/components/AboutSection.tsx";
import {ContactSection} from "#/components/ContactSection.tsx";
import {ProjectsSection} from "#/components/ProjectsSection.tsx";
import {TechStackSection} from "#/components/TechStackSection.tsx";

export const Route = createFileRoute('/')({component: Home})

function Home() {
    return (
        <>
            <Hero/>
            <div className="flex flex-col gap-20 py-20">
                <AboutSection/>
                <ProjectsSection />
                <TechStackSection />
                <ContactSection />
            </div>

        </>
    )
}
