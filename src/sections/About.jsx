export const About = () =>{
    return(
        <section id="about" className="py-32 relative overflow-hidden"> 
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                            About Me
                        </span>
                    </div>

                    <h2>
                        Building the future,
                    </h2>
                </div>
                </div>
            </div>
        </section>

    )
}