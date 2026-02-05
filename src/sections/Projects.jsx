import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Fintech Dashboard",
    description:
      "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
    image: "/projects/project1.png",
    tags: ["React", "Typescript", "NodeJS"],
    link: "#",
    github: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
    image: "/projects/project2.png",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "AI Writing Assistant",
    description:
      "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
    image: "/projects/project3.png",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Management Tool",
    description:
      "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
    image: "/projects/project4.png",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
  },
];

export const Projects = () =>{
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg Glows */}
            <div >
                <div >
                    <div className="container mx-auto px-6 relative z-10">
                        {/* Section Header */}
                        <div className="text-center mx-auto max-w-3xl mb-16">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                                Featured Work
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                                Projects that
                                <span className="font-serif italic font-normal text-white">
                                    {" "}
                                    make an impact.
                                </span>
                            </h2>
                            <p>
                                A Selection of my recent work, from complex web aplications to
                                innovative tools that solve real-world problems.
                            </p>
                        </div>

                        {/* Projects Grid */}
                        <div>
                            {projects.map((project,idx) => (
                                <div
                                    key={idx}
                                    className="group class rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                                    style={{animationDelay: `${(idx+1)*100}ms` }}
                                > 
                                {/* Image */}
                                <div className="relative overflow-hidden aspect-video">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transfrom duration-700 group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute inset-0 
                                        bg-gradient-0-to-t from-card via-card/50 
                                        to-transparent opacity-60"
                                    />
                                    {/* Overlay Links */}
                                    <div>
                                        <div>
                                            <a 
                                                href={project.link}
                                                className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                            >
                                                <ArrowUpRight className="w-5 h-5"/>
                                            </a>
                                            <a 
                                                href={project.link}
                                                className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                            >
                                                <Github className="w-5 h-5"/>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 space-y-4">
                                        <div className="flex items-start justify-between">
                                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};