export function Apresentation() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center">
                <div className="mb-8">
                    <div id="hero-animation" className="w-64 h-64 mx-auto mb-8"></div>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" data-delay="0">
                    Hi, I'm <span className="gradient-text">João Victor</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up" data-delay="150">
                    Front-end web Developer & UI/UX Designer
                </p>
                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up" data-delay="300">
                    Creating amazing digital experiences with clean code and innovative design
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" data-delay="450">
                    <a href="#projects" className="bg-linear-45 from-cyan-custom to-blue-custom text-white px-8 py-3 rounded-full hover:shadow-lg hover-glow transition-all duration-300 transform hover:scale-105">
                        See My Work
                    </a>
                    <a href="#contact" className="border-2 border-cyan-custom text-cyan-custom px-8 py-3 rounded-full hover:bg-cyan-custom hover:text-white transition-all duration-300 transform hover:scale-105">
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-custom/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-custom/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-blue-custom/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  )
}