import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);
  const [lightMode, setLightMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleLightMode = () => {
    setLightMode(!lightMode);
    document.body.classList.toggle('light-mode');
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    const audio = document.getElementById('audioPlayer');
    if (audio) {
      if (soundEnabled) {
        audio.pause();
      } else {
        audio.play();
      }
    }
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <div className="App">
        <audio loop id="audioPlayer" style={{ display: 'none' }}>
          <source src="/src/m4a/tune.m4a" type="audio/mp3" />
        </audio>
        
        <CustomCursor />
        <Header />
        
        <main>
          <Hero 
            lightMode={lightMode}
            soundEnabled={soundEnabled}
            toggleLightMode={toggleLightMode}
            toggleSound={toggleSound}
          />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;