import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './HeroSection';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor); // Clean up on unmount
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
