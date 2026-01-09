import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Photo } from './components/Photo';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Testimonials } from './components/Testimonials';
import { Profiles } from './components/Profiles';
import { Contact } from './components/Contact';

export default function App() {
  // Set dark mode permanently on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Hero />
      <Photo />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Testimonials />
      <Profiles />
      <Contact />
    </div>
  );
}
