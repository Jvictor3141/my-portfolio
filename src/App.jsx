import { useScrollAnimations } from "./hooks/useScrollAnimations";

import { NavBar } from './components/NavBar.jsx'
import { Apresentation } from './components/Apresentation.jsx'
import { About } from './components/About.jsx'
import Resume from './components/Resume.jsx'
import { Certificates } from './components/Certificates.jsx'
import Projects from './components/Projects.jsx'
import { Contact } from "./components/Contact.jsx";

function App() {

  useScrollAnimations();

  return (
    <>
      <NavBar />
      <Apresentation/>   
      <About />     
      <Resume />     
      <Certificates />      
      <Projects />      
      <Contact />
      <footer className="bg-dark-bg py-8 border-t border-dark-accent">
          <div className="container mx-auto px-6">
              <div className="text-center">
                  <p className="text-gray-400">
                      &copy; 2025 João Victor. All rights reserved.
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                      Developed using HTML, TailwindCSS and JavaScript
                  </p>
              </div>
          </div>
      </footer>
    </>
  )
}

export default App
