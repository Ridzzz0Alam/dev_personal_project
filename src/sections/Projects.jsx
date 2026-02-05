import { ArrowUpRight, Github } from "lucide-react";
import {AnimatedBorderButton} from "@/components/AnimatedBorderButton"

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
            <div>
                <div>
                    <div>
                        {/* Section Header */}
                        <div>
                            <span>
                                Featured Work
                            </span>
                            <h2>
                                Projects that
                                <span>
                                    {" "}
                                    make an impact.
                                </span>
                            </h2>
                            <p>
                                A selection of my recent work, from complex web applications to
                                innovative tools that solve real-world problems
                            </p>
                        </div>

                        {/* Projects Grid */}
                    </div>
                </div>  

                
                {/* View All CTA */}
                <div>
                    <AnimatedBorderButton>
                        View All Projects
                        <ArrowUpRight className="w-5 h-5"/>
                    </AnimatedBorderButton>
                </div>
            </div>      
        </section>
    );
};