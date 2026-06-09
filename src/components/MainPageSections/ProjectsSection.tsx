import { Section } from "../Section.tsx";
import { featuredProjects, type Project } from "#/data/projects.ts";
import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "#/components/ui/card.tsx";
import { Badge } from "#/components/ui/badge.tsx";
import { MdArrowOutward } from "react-icons/md";
import { ButtonWithIcon } from "#/components/ButtonWithIcon.tsx";

function ProjectCard({ project }: { project: Project }) {
	// TODO: add dialog with project info

	return (
		<Card className="relative mx-auto w-full pt-0 overflow-hidden">
			<div className="absolute inset-0 z-30 aspect-video" />
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
					<h3 className="text-primary text-xl">{project.title}</h3>
					<p className="text-muted-foreground text-sm">
						{project.notes.join(" • ")}
					</p>
				</CardTitle>
				<CardDescription>
					<p className="h-16 overflow-hidden text-ellipsis">
						{project.description}
					</p>
					<div className="flex flex-wrap mt-1">
						{project.tech_stack.map((t) => (
							<Badge
								variant="outline"
								key={Math.random().toString()}
								className="mt-2 mr-2"
							>
								{t}
							</Badge>
						))}
					</div>
				</CardDescription>
			</CardHeader>
			<CardFooter>
				<ButtonWithIcon
					icon={MdArrowOutward}
					className="w-full"
					onClick={() => window.open(project.url, "_blank")}
				>
					Dowiedz się więcej
				</ButtonWithIcon>
			</CardFooter>
		</Card>
	);
}

export function ProjectsSection() {
	return (
		<Section title={"Wybrane projekty"} tag={"projects"} bgMode={"secondary"}>
			<div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
				{featuredProjects.map((project) => (
					<ProjectCard project={project} key={project.id} />
				))}
			</div>
		</Section>
	);
}
