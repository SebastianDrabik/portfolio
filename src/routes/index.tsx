import {createFileRoute} from '@tanstack/react-router'
import {Hero} from "#/components/Hero.tsx";
import {About} from "#/components/About.tsx";

export const Route = createFileRoute('/')({component: Home})

function Home() {
    return (
        <>
            <Hero/>
            <About/>
        </>
    )
}
