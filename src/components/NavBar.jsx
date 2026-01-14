import { useEffect, useState } from "react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const closeMenu = () => setIsOpen(false);
  
  const handleNavClick = (targetId) => (e) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    const onScrollBlur = () => {
      if (!navbar) return;
      if (window.scrollY > 100) {
        navbar.classList.add('backdrop-blur-lg', 'bg-dark-secondary/90');
      } else {
        navbar.classList.remove('backdrop-blur-lg', 'bg-dark-secondary/90');
      }
    };

    const onScrollActive = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('text-cyan-custom');
            link.classList.add('text-gray-300');
          });

          const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
          if (activeLink) {
            activeLink.classList.remove('text-gray-300');
            activeLink.classList.add('text-cyan-custom');
          }
        }
      });
    };

    window.addEventListener('scroll', onScrollBlur);
    window.addEventListener('scroll', onScrollActive);
    return () => {
      window.removeEventListener('scroll', onScrollBlur);
      window.removeEventListener('scroll', onScrollActive);
    };
  }, []);
  return (
    <nav className="sticky top-10 w-4/5 z-50 hover-glow transition-all duration-300 mx-auto rounded-lg glass-effect backdrop-blur-xl shadow-lg px-4 py-3 border-b border-white/10" id="navbar">
      <div className="relative flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold gradient-text">
            Portfólio
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" onClick={handleNavClick('home')} className="nav-link text-gray-300 hover:text-cyan-custom transition-colors duration-300">Start</a>
          <a href="#about" onClick={handleNavClick('about')} className="nav-link text-gray-300 hover:text-cyan-custom transition-colors duration-300">About</a>
          <a href="#certificates" onClick={handleNavClick('certificates')} className="nav-link text-gray-300 hover:text-cyan-custom transition-colors duration-300">Certificates</a>
          <a href="#projects" onClick={handleNavClick('projects')} className="nav-link text-gray-300 hover:text-cyan-custom transition-colors duration-300">Projects</a>
          <a href="#contact" onClick={handleNavClick('contact')} className="nav-link text-gray-300 hover:text-cyan-custom transition-colors duration-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 text-gray-300 hover:text-cyan-custom"
          id="mobile-menu-btn"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          ></div>
        )}
        <div className={`md:hidden ${isOpen ? '' : 'hidden'}`} id="mobile-menu">
          {/* Dropdown panel */}
          <div
            className={`absolute right-2 top-full mt-2 z-50 min-w-[220px] rounded-lg border border-white/10 bg-dark-secondary/95 backdrop-blur-xl shadow-xl transform transition duration-200 ease-out ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'}`}
          >
            <div className="flex flex-col py-2">
              <a href="#home" onClick={handleNavClick('home')} className="nav-link px-4 py-2 text-gray-200 hover:text-white hover:bg-white/5 transition-colors">Start</a>
              <a href="#about" onClick={handleNavClick('about')} className="nav-link px-4 py-2 text-gray-200 hover:text-white hover:bg-white/5 transition-colors">About</a>
              <a href="#certificates" onClick={handleNavClick('certificates')} className="nav-link px-4 py-2 text-gray-200 hover:text-white hover:bg-white/5 transition-colors">Certificates</a>
              <a href="#projects" onClick={handleNavClick('projects')} className="nav-link px-4 py-2 text-gray-200 hover:text-white hover:bg-white/5 transition-colors">Projects</a>
              <a href="#contact" onClick={handleNavClick('contact')} className="nav-link px-4 py-2 text-gray-200 hover:text-white hover:bg-white/5 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}