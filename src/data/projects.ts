import newHero_thumbnail from "#/assets/newHero_thumbnail.png";
import newHero2_thumbnail from "#/assets/newHero2_thumbnail.png";
import seis_thumbnail from "#/assets/SEIS_thumbnail.jpg";
import tfp_thumbnail from "#/assets/TFP_thumbnail.png";

export type Project = {
	id: number;
	title: string;
	description: string;
	url: string;
	tech_stack: string[];
	image: string;
	notes: string[];
	status: "in-progress" | "done";
};

export const projects: Project[] = [
	{
		id: 1,
		title: "SEIS",
		description: "Bezpieczny system weryfikacji wieku w internecie.",
		url: "https://github.com/KacperBronka/SEIS",
		tech_stack: ["TypeScript", "MySQL", "Docker", "OCI", "Python", "C#"],
		image: seis_thumbnail,
		notes: ["HackCarpathia 2026", "zwycięzca kategorii cybersecurity"],
		status: "done",
	},
	{
		id: 3,
		title: "new Hero 2",
		description:
			"Fabularna gra 2D, będąca kontynuacją serii new Hero( ). W tej części gracz uczy się o zagrożeniach w sieci oraz metodach przeciwdziałania im.",
		url: "",
		tech_stack: ["C#", "Unity", "Blender"],
		image: newHero2_thumbnail,
		notes: ["CyberMoc Bezpieczny Internet 2025", "Wyróżnienie"],
		status: "done",
	},
	{
		id: 4,
		title: "The Final Parsec",
		description:
			"Fabularna gra 3D opowiadająca historię odkrywania kosmosu przez człowieka.",
		url: "https://thefinalparsec.github.io/",
		tech_stack: ["C#", "Unity", "Blender"],
		image: tfp_thumbnail,
		notes: ["GEEK 2025/26", "Zwycięzca w województwie"],
		status: "done",
	},
	{
		id: 2,
		title: "new Hero( );",
		description:
			"Fabularna gra 2D. Głównym celem gracza jest pokonywanie kolejnych wrogów za pomocą kodu C++.",
		url: "https://newhero-project.web.app/",
		tech_stack: ["C#", "Unity", "Blender"],
		image: newHero_thumbnail,
		notes: ["GEEK 2022/23", "2 miejsce w kraju"],
		status: "done",
	},
	{
		id: 5,
		title: "MediaIntellgence",
		description: "Single Endpoint ID Service",
		url: "https://github.com/KacperBronka/SEIS",
		tech_stack: ["Python", "ComputerVision"],
		image: "/images/projects/seis.png",
		notes: ["Intel AI4Youth 2022"],
		status: "done",
	},
];

export const featuredProjects: Project[] = projects.slice(0, 4);
