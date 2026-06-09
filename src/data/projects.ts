import newHero_thumbnail from "#/assets/newHero_thumbnail.png";
import newHero2_thumbnail from "#/assets/newHero2_thumbnail.png";
import seis_thumbnail from "#/assets/SEIS_thumbnail.jpg";
import tfp_thumbnail from "#/assets/TFP_thumbnail.png";

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
		tech_stack: ["TypeScript", "MySQL", "Docker", "OCI", "Python", "C#"],
		image: seis_thumbnail,
		note: "HACKCARPATHIA 2026 | category winner",
		status: "done",
	},
	{
		id: 2,
		title: "new Hero( );",
		description: "Single Endpoint ID Service",
		github_url: "https://github.com/KacperBronka/SEIS",
		tech_stack: ["Go", "PostgreSQL", "Docker"],
		image: newHero_thumbnail,
		note: "HACKCARPATHIA 2026",
		status: "done",
	},
	{
		id: 3,
		title: "new Hero 2",
		description: "Single Endpoint ID Service",
		github_url: "https://github.com/KacperBronka/SEIS",
		tech_stack: ["Go", "PostgreSQL", "Docker"],
		image: newHero2_thumbnail,
		note: "HACKCARPATHIA 2026",
		status: "done",
	},
	{
		id: 4,
		title: "The Final Parsec",
		description: "Single Endpoint ID Service",
		github_url: "https://github.com/KacperBronka/SEIS",
		tech_stack: ["Go", "PostgreSQL", "Docker"],
		image: tfp_thumbnail,
		note: "HACKCARPATHIA 2026",
		status: "done",
	},
	{
		id: 5,
		title: "AI4Youth",
		description: "Single Endpoint ID Service",
		github_url: "https://github.com/KacperBronka/SEIS",
		tech_stack: ["Python", "ComputerVision"],
		image: "/images/projects/seis.png",
		note: "HACKCARPATHIA 2026",
		status: "done",
	},
];

export const featuredProjects: Project[] = projects.slice(0, 4);
