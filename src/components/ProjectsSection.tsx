import { Section } from "./Section";
import { featuredProjects, type Project } from "#/data/projects.ts";
import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MdArrowOutward } from "react-icons/md";
import { ButtonWithIcon } from "#/components/ButtonWithIcon.tsx";

function ProjectCard({ project }: { project: Project }) {
	// TODO: add dialog with project info

	return (
		<Card className="relative mx-auto w-full pt-0">
			<div className="absolute inset-0 z-30 aspect-video bg-black/35" />
			<img
				src={project.image}
				alt={project.title}
				className="relative z-20 aspect-video w-full object-cover"
			/>
			<CardHeader>
				{project.status !== "done" && (
					<CardAction>
						<Badge variant="secondary">{project.status}</Badge>
					</CardAction>
				)}
				<CardTitle>
					<p className="text-primary">{project.title}</p>
					<p className="text-muted-foreground text-sm">{project.note}</p>
				</CardTitle>
				<CardDescription>{project.description}</CardDescription>
			</CardHeader>
			<CardFooter>
				<ButtonWithIcon icon={MdArrowOutward} className="w-full">
					Explore
				</ButtonWithIcon>
			</CardFooter>
		</Card>
	);
}

export function ProjectsSection() {
	return (
		<Section title={"Chosen projects"} tag={"projects"} bgMode={"secondary"}>
			<div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
				{featuredProjects.map((project) => (
					<ProjectCard project={project} key={project.id} />
				))}
			</div>
		</Section>
	);
}
