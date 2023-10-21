import './App.scss';
import Hero from './Components/Hero/Hero';
import Timeline from './Components/Timeline/Timeline';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function App() {
  const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
     
     
      // 

      gsap.fromTo('.span-line-inner', {
        'will-change': 'opacity',
        opacity: 0
    }, 
    {
        ease: 'none',
        opacity: 1,
        stagger: 0.05,
        markers:true,
        scrollTrigger: {
            trigger: '.span-line-inner',
            start: 'top center',
        end: 'bottom 20%',
            scrub: true,
          
        }
    });
      // 
      
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div ref={main} className="App">
    <Hero />
    
    <Timeline />
    <Projects />
    <Skills />
    <Contact />
    </div>
  );
}

export default App;
