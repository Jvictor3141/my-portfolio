import coffeeImg from "../assets/img/site-coffee.png";
import lifesyncImg from "../assets/img/lifesync-site.png";

export default function Projects() {
    return (
        <section id="projects" className="section-padding bg-dark-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Projects</h2>
                    <p className="text-gray-400 text-lg">Some of my personal projects</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="glass-effect rounded-lg overflow-hidden hover-glow transition-all duration-300 transform hover:scale-105 animate-slide-up">
                        <div className="h-48 bg-linear-to-br from-cyan-custom to-blue-custom flex items-center justify-center overflow-hidden">
                            <img src={coffeeImg} alt="The Coffee Jesinghaus" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3">The Coffee Jesinghaus</h3>
                            <p className="text-gray-300 mb-4">
                                A project developed with a focus on minimalist design, soft colors, and a cozy experience, inspired by artisanal coffee shops and tranquil environments.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-cyan-custom/20 text-cyan-custom px-3 py-1 rounded-full text-sm">HTML</span>
                                <span className="bg-blue-custom/20 text-blue-custom px-3 py-1 rounded-full text-sm">CSS</span>
                                <span className="bg-purple-custom/20 text-purple-custom px-3 py-1 rounded-full text-sm">Responsive Design</span>
                            </div>
                            <div className="flex gap-4">
                                <a href="https://my-project-victor.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-custom hover:text-white transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                                    </svg>
                                </a>
                                <a href="https://github.com/Jvictor3141/my_project_victor" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="glass-effect rounded-lg overflow-hidden hover-glow transition-all duration-300 transform hover:scale-105 animate-slide-up" data-delay="200">
                        <div className="h-48 bg-linear-to-br from-blue-custom to-purple-custom flex items-center justify-center">
                            <img src={lifesyncImg} alt="LifeSync" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3">LifeSync</h3>
                            <p className="text-gray-300 mb-4">
                                A personal agenda application to help users manage their tasks and appointments efficiently, featuring a clean interface and intuitive navigation.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-blue-custom/20 text-blue-custom px-3 py-1 rounded-full text-sm">HTML</span>
                                <span className="bg-purple-custom/20 text-purple-custom px-3 py-1 rounded-full text-sm">React</span>
                                <span className="bg-teal-custom/20 text-teal-custom px-3 py-1 rounded-full text-sm">TailwindCSS</span>
                            </div>
                            <div className="flex gap-4">
                                <a href="https://lifesync-project.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-custom hover:text-white transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                                    </svg>
                                </a>
                                <a href="https://github.com/Jvictor3141/lifesync-project" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="glass-effect rounded-lg overflow-hidden hover-glow transition-all duration-300 transform hover:scale-105 animate-slide-up" data-delay="400">
                        <div className="h-48 bg-linear-to-br from-purple-custom to-teal-custom flex items-center justify-center">
                            <div id="project3-animation" className="w-32 h-32"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3">Data Analytics Dashboard</h3>
                            <p className="text-gray-300 mb-4">
                                Dashboard interativo para análise de dados com gráficos dinâmicos, 
                                filtros avançados e relatórios personalizáveis.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-purple-custom/20 text-purple-custom px-3 py-1 rounded-full text-sm">Python</span>
                                <span className="bg-teal-custom/20 text-teal-custom px-3 py-1 rounded-full text-sm">Django</span>
                                <span className="bg-cyan-custom/20 text-cyan-custom px-3 py-1 rounded-full text-sm">D3.js</span>
                            </div>
                            <div className="flex gap-4">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-cyan-custom hover:text-white transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                                    </svg>
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}