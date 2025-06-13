import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Skills = () => {
  const [skillsData, setSkillsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const response = await axios.get('/api/skills');
        setSkillsData(response.data);
      } catch (error) {
        console.error('Error fetching skills data:', error);
        // Fallback data
        setSkillsData({
          title: "Skills",
          categories: [
            {
              title: "What I'm Good At:",
              skills: [
                { name: "Javascript", image: "/images/javascript.png" },
                { name: "Angular Js", image: "/images/Ang.webp" },
                { name: "Node Js", image: "/images/node.png" },
                { name: "Express Js", image: "/images/ex.png" },
                { name: "Mongo DB", image: "/images/mongo-db.png" }
              ]
            },
            {
              title: "What I know Well:",
              skills: [
                { name: "Photoshop", image: "/images/ps.png" },
                { name: "Illustrator", image: "/images/ai.png" },
                { name: "Figma", image: "/images/figma.png" },
                { name: "Adobe XD", image: "/images/xd.png" },
                { name: "InDesign", image: "/images/id.png" }
              ]
            },
            {
              title: "What I'm Learning:",
              skills: [
                { name: "Typescript", image: "/images/ts.png" },
                { name: "Nest JS", image: "/images/nestjs.png" },
                { name: "Python DJ", image: "/images/dj.png" }
              ]
            }
          ]
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSkillsData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="skills-section-container" id="skills">
      <div className="skills-section">
        <div className="section-heading aos-init aos-animate" data-aos="fade-up">
          <h2 className="section-heading-article" tabIndex="0" aria-label="skills heading">
            {skillsData?.title || "Skills"}
          </h2>
        </div>

        {skillsData?.categories?.map((category, categoryIndex) => (
          <div key={categoryIndex} className="frontend-dev-section">
            <h3 
              className="frontend-dev-heading aos-init aos-animate" 
              data-aos="fade-up" 
              tabIndex="0" 
              aria-label={`Skills category: ${category.title}`}
            >
              {category.title}
            </h3>
            <ul className="tech-stack-wrapper">
              {category.skills?.map((skill, skillIndex) => (
                <li 
                  key={skillIndex} 
                  className="tech-stack-box aos-init aos-animate" 
                  data-aos="fade-up"
                >
                  <img 
                    src={skill.image} 
                    alt={`${skill.name} skill`} 
                    className="tech-stack-logo"
                  />
                  <span className="tooltip">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;