import {createFileRoute} from '@tanstack/react-router'
import {Hero} from "#/components/Hero.tsx";
import {AboutSection} from "#/components/AboutSection.tsx";
import {ContactSection} from "#/components/ContactSection.tsx";
import {ProjectsSection} from "#/components/ProjectsSection.tsx";

export const Route = createFileRoute('/')({component: Home})

function Home() {
    return (
        <>
            <Hero/>
            <AboutSection/>
            <ProjectsSection />
            <ContactSection />
        </>
    )
}
