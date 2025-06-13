import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback data - using the original projects data
        setProjects([
          {
            id: "project-box1",
            faviconSrc: "/images/favicons/RPS.png",
            faviconAlt: "RPS website favicon",
            heading: "Royal Photo Studio",
            description: "Royal Photography: Your ultimate destination for capturing timeless memories. Experience professional photography services that bring your special moments to life with creativity and precision.",
            liveLink: "https://royalphotostudio.com.np",
            previewSrc: "/images/projects/RPS.jpg",
            previewAlt: "RPS website preview image"
          },
          {
            id: "project-box2",
            faviconSrc: "/images/favicons/BKP.png",
            faviconAlt: "BKP website favicon",
            heading: "Bhusal Kirana Pasal",
            description: "Bhusal Kirana Pasal: Your online destination for fresh and quality groceries. Shop a wide range of products from the comfort of your home and enjoy fast, reliable delivery.",
            liveLink: "https://bhusalkirana.com.np",
            previewSrc: "/images/projects/BKP.jpg",
            previewAlt: "BKP website preview image"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="projects-section-container" id="projects">
      <div className="projects-section-div">
        <div className="section-heading" data-aos="fade-up">
          <h2 className="section-heading-article" tabIndex="0" aria-label="My projects starts from here">
            Projects
          </h2>
        </div>
        <div className="project-boxes-div">
          {projects.map((project, index) => (
            <div key={project.id || index} className="project-box-wrapper" data-aos="fade-up">
              <div className={`project-box ${project.id}`} id={project.id}>
                <div className="info-div">
                  <img
                    src={project.faviconSrc}
                    alt={project.faviconAlt}
                    className="faviconforProject"
                  />
                  <article className="ProjectHeading">{project.heading}</article>
                  <p className="ProjectDescription">{project.description}</p>
                  <div className="project-buttons">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-redirect"
                        aria-label={`Visit ${project.heading} on GitHub`}
                      >
                        <img src="/images/github.png" alt="github redirect button" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta"
                        aria-label={`Visit ${project.heading} Live`}
                      >
                        <span>Live view</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                          <path d="M1,5 L11,5"></path>
                          <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <div className="image-div">
                  <img src={project.previewSrc} alt={project.previewAlt} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;