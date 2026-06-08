export type Project = {
    title: string,
    description: string,
    github_url: string,
    tech_stack: string[],
    image: string,
    status: 'in-progress' | 'done',
}

export const projects: Project[] = [
    {
        title: "SEIS",
        description: "Single Endpoint ID Service",
        github_url: "https://github.com/KacperBronka/SEIS",
        tech_stack: ["Go", "PostgreSQL", "Docker"],
        image: "/images/projects/seis.png",
        status: 'done'
    },
    {
        title: "SEIS",
        description: "Single Endpoint ID Service",
        github_url: "https://github.com/KacperBronka/SEIS",
        tech_stack: ["Go", "PostgreSQL", "Docker"],
        image: "/images/projects/seis.png",
        status: 'done'
    },
    {
        title: "SEIS",
        description: "Single Endpoint ID Service",
        github_url: "https://github.com/KacperBronka/SEIS",
        tech_stack: ["Go", "PostgreSQL", "Docker"],
        image: "/images/projects/seis.png",
        status: 'done'
    },
    {
        title: "SEIS",
        description: "Single Endpoint ID Service",
        github_url: "https://github.com/KacperBronka/SEIS",
        tech_stack: ["Go", "PostgreSQL", "Docker"],
        image: "/images/projects/seis.png",
        status: 'done'
    },
    {
        title: "SEIS",
        description: "Single Endpoint ID Service",
        github_url: "https://github.com/KacperBronka/SEIS",
        tech_stack: ["Go", "PostgreSQL", "Docker"],
        image: "/images/projects/seis.png",
        status: 'done'
    }
]

export const featuredProjects: Project[] = projects.slice(0,4)