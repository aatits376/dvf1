import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('/api/about');
        setAboutData(response.data);
      } catch (error) {
        console.error('Error fetching about data:', error);
        // Fallback data
        setAboutData({
          title: "AboutMe",
          paragraphs: [
            "Hi, I'm Dharmu Bhusal from Bharatpur-1, Chitwan. A web developer and digital visual artist, passionate about creating unique digital experiences that exist on the internet.",
            "I blend creativity with technology to craft compelling online worlds that captivate and inspire.",
            "In my free time, I enjoy exploring graphic design, photography, and experimenting with new digital art techniques to push the boundaries of my creativity."
          ],
          image: "/images/me.jpg",
          resumeUrl: "/src/pdf/cv.pdf"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  const openResume = () => {
    if (aboutData?.resumeUrl) {
      window.open(aboutData.resumeUrl, "_blank");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="about-section-container" id="about" data-aos="fade-up">
      <div className="about-section">
        <div className="section-heading">
          <h2 className="section-heading-article" tabIndex="0" aria-label="About me heading">
            {aboutData?.title || "AboutMe"}
          </h2>
        </div>

        <div className="info-dp-section">
          <div className="about-info">
            {aboutData?.paragraphs?.map((paragraph, index) => (
              <React.Fragment key={index}>
                <p tabIndex="0">{paragraph}</p>
                {index < aboutData.paragraphs.length - 1 && <br />}
              </React.Fragment>
            ))}
            
            <button className="resume-btn" id="resume-btn" onClick={openResume}>
              <div className="sign">
                <svg viewBox="0 0 640 512">
                  <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
                </svg>
              </div>
              <div className="text">Resume</div>
            </button>
          </div>

          <div className="dp" data-aos="fade-up">
            <img 
              src={aboutData?.image || "/images/me.jpg"} 
              alt="Dharmu Bhusal" 
              tabIndex="0" 
              aria-label="image of Dharmu" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;