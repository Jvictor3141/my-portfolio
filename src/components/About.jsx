export function About() {
    return (
        <section id="about" className="section-padding bg-dark-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About me</h2>
                    <p className="text-gray-400 text-lg">Get to know a little about my story</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="animate-slide-in-left" data-delay="0">
                        <div id="about-animation" className="w-full h-80 mb-6"></div>
                    </div>
                    
                    <div className="animate-slide-in-right" data-delay="150">
                        <h3 className="text-2xl font-bold mb-6 text-cyan-custom">Developer Passionate About Technology</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Frontend Developer passionate about building modern, responsive, and user-friendly web applications. I focus on React, TailwindCSS, and clean code practices, always aiming to deliver interfaces that combine performance, accessibility, and great user experience.
                        </p>
                        <p className="text-gray-300 mb-8 leading-relaxed animate-slide-up" data-delay="300">
                            With a problem-solving mindset and a constant drive to learn, I enjoy turning ideas into interactive solutions that bring value to both users and businesses. My goal is to keep improving as a developer while creating digital products that make a real impact.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}