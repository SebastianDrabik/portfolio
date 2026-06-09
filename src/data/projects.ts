import seis_thumbnail from "#/assets/SEIS_thumbnail.jpg";

export type Project = {
	id: number;
	title: string;
	description: string;
	github_url: string;
	tech_stack: string[];
	image: string;
	note: string;
	status: "in-progress" | "done";
};

export const projects: Project[] = [
	{
		id: 1,
		title: "SEIS",
		description:
			"Zero-knowledge age verification system built for HackCarpathia 2026. Uses token splitting and privacy-by-design architecture so identity is verified without exposing personal data.",
		github_url: "https://github.com/KacperBronka/SEIS",
		tech_stack: ["Go", "PostgreSQL", "Docker"],
		image: seis_thumbnail,
		note: "HACKCARPATHIA 2026",
		status: "done",
	},
	{
		id: 2,
		title: "SEIS",
		description: "Single Endpoint ID Service",
		github_url: "https://github.com/KacperBronka/SEIS",
		tech_stack: ["Go", "PostgreSQL", "Docker"],
		image: "/images/projects/seis.png",
		note: "HACKCARPATHIA 2026",
		status: "done",
	},
	{
		id: 3,
		title: "SEIS",
		description: "Single Endpoint ID Service",
		github_url: "https://github.com/KacperBronka/SEIS",
		tech_stack: ["Go", "PostgreSQL", "Docker"],
		image: "/images/projects/seis.png",
		note: "HACKCARPATHIA 2026",
		status: "done",
	},
	{
		id: 4,
		title: "SEIS",
		description: "Single Endpoint ID Service",
		github_url: "https://github.com/KacperBronka/SEIS",
		tech_stack: ["Go", "PostgreSQL", "Docker"],
		image: "/images/projects/seis.png",
		note: "HACKCARPATHIA 2026",
		status: "done",
	},
	{
		id: 5,
		title: "SEIS",
		description: "Single Endpoint ID Service",
		github_url: "https://github.com/KacperBronka/SEIS",
		tech_stack: ["Go", "PostgreSQL", "Docker"],
		image: "/images/projects/seis.png",
		note: "HACKCARPATHIA 2026",
		status: "done",
	},
];

export const featuredProjects: Project[] = projects.slice(0, 4);
