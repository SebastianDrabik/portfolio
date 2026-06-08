import {Section} from "./Section"
import {featuredProjects, type Project} from "#/data/projects.ts";
import { MdArrowOutward } from "react-icons/md";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {Button} from "#/components/ui/button.tsx";

function ProjectCard({project}: { project: Project }) {
    // TODO: add dialog with project info

    return <Card>
        <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>
                <Button variant="outline" size='icon-lg'>
                    <MdArrowOutward />
                </Button>
            </CardAction>
        </CardHeader>
        <CardContent>
            <p>{project.description}</p>
        </CardContent>
        <CardFooter>
            <div className='flex gap-2 flex-wrap'>
                {project.tech_stack.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
            </div>
        </CardFooter>
    </Card>
}

export function ProjectsSection(){
    return <Section title={'Chosen projects'} tag={'projects'} bgMode={"secondary"}>
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
            {featuredProjects.map((project, index) =>
                <ProjectCard project={project} key={index} />

            )}
        </div>
    </Section>
}
