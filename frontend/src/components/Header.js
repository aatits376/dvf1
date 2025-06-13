import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup animation
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    // Handle scroll for active section
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.classList.toggle('stopscrolling');
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.classList.remove('stopscrolling');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  return (
    <>
      <header>
        <div className="navbar" id="navbar">
          <div className={`hey ${showPopup ? 'popup' : ''}`}>राधे राधे 🌸</div>
          <div className="logo" tabIndex="0" aria-label="Dharmu Bhusal logo">
            <div className="logo-top">
              <img src="/images/dharmu.png" alt="animation-head" id="nav-avatar" />
              <div className="face">
                <div className="eye left-eye">
                  <div className="pupil"></div>
                </div>
                <div className="eye right-eye">
                  <div className="pupil"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-tabs" id="navbar-tabs">
            <ul className="navbar-tabs-ul">
              <li className={`home ${activeSection === 'home' ? 'activeThistab' : ''}`} data-aos="fade-down" data-aos-delay="100">
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} tabIndex="0" aria-label="Home menu button">
                  Home
                </a>
              </li>
              <li className={`about ${activeSection === 'about' ? 'activeThistab' : ''}`} data-aos="fade-down" data-aos-delay="300">
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} aria-label="about menu button">
                  AboutMe
                </a>
              </li>
              <li className={`skills ${activeSection === 'skills' ? 'activeThistab' : ''}`} data-aos="fade-down" data-aos-delay="500">
                <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} aria-label="skills menu button">
                  Skills
                </a>
              </li>
              <li className={`projects ${activeSection === 'projects' ? 'activeThistab' : ''}`} data-aos="fade-down" data-aos-delay="700">
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} aria-label="projects menu button">
                  Projects
                </a>
              </li>
              <li className={`contact ${activeSection === 'contact-section' ? 'activeThistab' : ''}`} data-aos="fade-down" data-aos-delay="900">
                <a href="#contact-section" onClick={(e) => { e.preventDefault(); scrollToSection('contact-section'); }} aria-label="contact menu button">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Mobile Hamburger Menu */}
      <div className="hamburger" id="hamburger" data-aos="fade">
        <div className="hamburgerbase">
          <button id="hamburger-button" onClick={toggleMobileMenu} tabIndex="0" aria-label="Menu Button">
            <span className={`burger-bar ${mobileMenuOpen ? 'hamburger-animation1' : ''}`} id="burger-bar1"></span>
            <span className={`burger-bar ${mobileMenuOpen ? 'hamburger-animation2' : ''}`} id="burger-bar2"></span>
            <span className={`burger-bar ${mobileMenuOpen ? 'hamburger-animation3' : ''}`} id="burger-bar3"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobiletogglemenu ${mobileMenuOpen ? 'show-toggle-menu' : ''}`} id="mobiletogglemenu">
        <ul className="mobile-navbar-tabs-ul" id="mobile-ul">
          <li className={`mobile-navbar-tabs-li home ${activeSection === 'home' ? 'activeThismobiletab' : ''}`} onClick={() => scrollToSection('home')}>
            <a href="#home" tabIndex="0" aria-label="Home menu button">Home</a>
          </li>
          <li className={`mobile-navbar-tabs-li about ${activeSection === 'about' ? 'activeThismobiletab' : ''}`} onClick={() => scrollToSection('about')}>
            <a href="#about" tabIndex="0" aria-label="about menu button">AboutMe</a>
          </li>
          <li className={`mobile-navbar-tabs-li skills ${activeSection === 'skills' ? 'activeThismobiletab' : ''}`} onClick={() => scrollToSection('skills')}>
            <a href="#skills" tabIndex="0" aria-label="skills menu button">Skills</a>
          </li>
          <li className={`mobile-navbar-tabs-li projects ${activeSection === 'projects' ? 'activeThismobiletab' : ''}`} onClick={() => scrollToSection('projects')}>
            <a href="#projects" tabIndex="0" aria-label="projects menu button">Projects</a>
          </li>
          <li className={`mobile-navbar-tabs-li contact ${activeSection === 'contact-section' ? 'activeThismobiletab' : ''}`} onClick={() => scrollToSection('contact-section')}>
            <a href="#contact-section" tabIndex="0" aria-label="contact menu button">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;