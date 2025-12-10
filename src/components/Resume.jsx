import { useEffect } from "react";

export default function Resume() {
    useEffect(() => {
        // ------- Efeito Parallax -------
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll(".animate-float");

            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        };

        window.addEventListener("scroll", handleScroll);


        // ------- Efeito de typing nas barras -------
        const skillItems = document.querySelectorAll(".skill-item");

        const options = {
            threshold: 0.5,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const progress = entry.target.querySelector(".progress");
                    if (progress) {
                    const target = progress.dataset.width || progress.getAttribute("data-width") || "0%";

                    // garante transição suave
                    progress.style.transition = "width 1.6s cubic-bezier(.2,.8,.2,1)";
                    
                    // usa rAF pra garantir que a transição seja aplicada
                    requestAnimationFrame(() => {
                        progress.style.width = target;
                    });
                    }
                    // se quiser só animar uma vez
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        skillItems.forEach((item) => {
            const progress = item.querySelector(".progress");

            if (progress) progress.style.width = "0%"; // estado inicial
            observer.observe(item);
        });

        return () => observer.disconnect();
}, []);
    
    return (
        <section id="resume" className="section-padding ">
            <div className="container mx-auto px-6">
                <div className="mt-12">
                    <h3 className="text-2xl font-bold mb-8 text-purple-custom flex items-center">
                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Skills
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
                        <div className="space-y-3">
                            
                            <div className="skill-item">
                                <div className="flex justify-between mb-2">
                                    <span className="text-white">JavaScript/TypeScript</span>
                                    <span className="text-teal-custom">15%</span>
                                </div>
                                <div className="w-full bg-dark-accent/20 rounded-full h-2 overflow-hidden">
                                    <div className="progress h-2 rounded-full bg-linear-to-r from-teal-custom to-cyan-custom" data-width="15%" style={{width: "0%"}}></div>
                                </div>
                            </div>

                            <div className="skill-item">
                                <div className="flex justify-between mb-2">
                                    <span className="text-white">HTML/CSS</span>
                                    <span className="text-cyan-custom">80%</span>
                                </div>
                                <div className="w-full bg-dark-accent/20 rounded-full h-2 overflow-hidden">
                                    <div className="progress h-2 rounded-full bg-linear-to-r from-teal-custom to-cyan-custom" data-width="80%" style={{width: "0%"}}></div>
                                </div>
                            </div>

                            <div className="skill-item">
                                <div className="flex justify-between mb-2">
                                    <span className="text-white">TailwindCSS</span>
                                    <span className="text-teal-custom">40%</span>
                                </div>
                                <div className="w-full bg-dark-accent/20 rounded-full h-2 overflow-hidden">
                                    <div className="progress h-2 rounded-full bg-linear-to-r from-teal-custom to-cyan-custom" data-width="40%" style={{width: "0%"}}></div>
                                </div>
                            </div>
                            
                            <div className="skill-item">
                                <div className="flex justify-between mb-2">
                                    <span className="text-white">UI/UX Design</span>
                                    <span className="text-cyan-custom">80%</span>
                                </div>
                                <div className="w-full bg-dark-accent/20 rounded-full h-2 overflow-hidden">
                                    <div className="progress h-2 rounded-full bg-linear-to-r from-teal-custom to-cyan-custom" data-width="80%" style={{width: "0%"}}></div>
                                </div>
                            </div>
                            
                            <div className="skill-item">
                                <div className="flex justify-between mb-2">
                                    <span className="text-white">React</span>
                                    <span className="text-teal-custom">20%</span>
                                </div>
                                <div className="w-full bg-dark-accent/20 rounded-full h-2 overflow-hidden">
                                    <div className="progress h-2 rounded-full bg-linear-to-r from-teal-custom to-cyan-custom" data-width="20%" style={{width: "0%"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 mt-8 justify-items-center">
                            <div title="JavaScript">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-14 h-14" alt="JavaScript"/>
                            </div>
                            <div title="TypeScript">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-14 h-14" alt="TypeScript"/>
                            </div>
                            <div title="HTML5">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-14 h-14" alt="HTML5"/>
                            </div>
                            <div title="CSS3">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-14 h-14" alt="CSS3"/>
                            </div>
                            <div title="React">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-14 h-14" alt="React"/>
                            </div>
                            <div title="TailwindCSS">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" className="w-14 h-14" alt="TailwindCSS"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}