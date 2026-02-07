import { Github, Linkedin, Twitter } from "lucide-react"

const socialLinks = [
    {icon: Github, href: "#", label: "GitHub"},
    {icon: Linkedin, href: "#", label: "Linkedin"},
    {icon: Twitter, href: "#", label: "Twitter"},
];

const footerLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#contact", label: "Contact"},
]

export const Footer = () =>{
    return(
        <footer>
            <div className="py-12 border-t border-border">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & COpyright */}
                    <div className="text-center md:text-left">
                        <a href="#" className="text-xl font-bold tracking-light">
                            PM<span className="text-primary">.</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}