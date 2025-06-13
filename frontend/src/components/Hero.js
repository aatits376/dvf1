import React from 'react';

const Hero = ({ lightMode, soundEnabled, toggleLightMode, toggleSound }) => {
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

  const openResume = () => {
    window.open('/src/pdf/cv.pdf', '_blank');
  };

  const JelloText = ({ text, className = "" }) => {
    return (
      <div className={className}>
        {text.split('').map((char, index) => (
          char === ' ' ? (
            <span key={index}>&nbsp;</span>
          ) : (
            <p key={index} className="jello">{char}</p>
          )
        ))}
      </div>
    );
  };

  return (
    <section className="landing-page-container" id="home">
      <div className="blob"></div>
      
      <div className="text-content">
        <article id="hello-friend" data-aos="fade-up" data-aos-delay="0">
          <p className="jello">
            <img src="/images/hii.gif" width="80px" alt="" />
          </p>
        </article>
        
        <article id="hello-friend" data-aos="fade-up" data-aos-delay="0">
          <JelloText text="Hi I'm" />
        </article>
        
        <article id="name" data-aos="fade-up" data-aos-delay="200">
          <JelloText text="Dharmu Bhusal " />
          <p className="jello">
            <img src="/images/flag.gif" width="24px" style={{transform: 'scaleX(-1)'}} alt="" />
          </p>
        </article>

        <article id="work" data-aos="fade-up" data-aos-delay="400">
          <div><JelloText text="Developer" /></div>
          <div><JelloText text="by" /></div>
          <div><JelloText text="code," /></div>
          <div><JelloText text="Designer" /></div>
          <div><JelloText text="by" /></div>
          <div><JelloText text="Heart!" /></div>
        </article>

        <p id="info-para" data-aos="fade-up" data-aos-delay="600">
          I'm a Web Developer with a passion for Digital Concept Arts and Frontend Design. <br /> 
          I love creating fun, interactive web UIs, collaborating on innovative products, and prioritizing clean structures, 
          thoughtful design, and seamless user interactions to enhance experiences.
        </p>
        
        <div className="contact-btn-div" data-aos="fade-up" data-aos-delay="800">
          <a href="mailto:dharmub376@gmail.com" tabIndex="-1">
            <button className="letsTalkBtn">
              <p className="letsTalkBtn-text">Let's Talk!</p>
              <span className="letsTalkBtn-BG"></span>
            </button>
          </a>
          
          <div className={`setting-container ${settingsOpen ? 'settingactivate' : ''}`} id="setting-container">
            <input type="checkbox" id="switchforsetting" onChange={toggleSettings} />
            <label 
              htmlFor="switchforsetting" 
              className="needtobeinvert" 
              id="labelforsetting" 
              tabIndex="0" 
              aria-label="settings for sound and appearance"
            ></label>

            <div className={`visualmodetogglebuttoncontainer ${settingsOpen ? 'visualmodeshow' : ''}`} id="visualmodetogglebuttoncontainer">
              <input type="checkbox" id="switchforvisualmode" onChange={toggleLightMode} />
              <label 
                htmlFor="switchforvisualmode" 
                id="labelforvisualmode" 
                tabIndex="0" 
                aria-label="switch appearance"
              ></label>
            </div>

            <div className={`soundtogglebuttoncontainer ${settingsOpen ? 'soundmodeshow' : ''}`} id="soundtogglebuttoncontainer">
              <input type="checkbox" id="switchforsound" onChange={toggleSound} />
              <label 
                htmlFor="switchforsound" 
                id="labelforsound" 
                tabIndex="0" 
                aria-label="switch sound" 
                className="needtobeinvert"
              ></label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;