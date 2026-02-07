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
    const currentYear = new Date().getFullYear();
    return(
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & COpyright */}
                    <div className="text-center md:text-left">
                        <a href="#" className="text-xl font-bold tracking-light">
                            PM<span className="text-primary">.</span>
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                            © {currentYear} Ridwan Alam. All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    )
}