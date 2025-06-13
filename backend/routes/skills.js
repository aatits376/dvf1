const express = require('express');
const router = express.Router();
const Skills = require('../models/Skills');

// GET /api/skills
router.get('/', async (req, res) => {
  try {
    let skills = await Skills.findOne();
    
    if (!skills) {
      // Create default skills data if none exists
      skills = new Skills({
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
      await skills.save();
    }
    
    res.json(skills);
  } catch (error) {
    console.error('Error fetching skills data:', error);
    res.status(500).json({ message: 'Error fetching skills data' });
  }
});

// PUT /api/skills (for updating skills data)
router.put('/', async (req, res) => {
  try {
    const { title, categories } = req.body;
    
    let skills = await Skills.findOne();
    
    if (!skills) {
      skills = new Skills({ title, categories });
    } else {
      skills.title = title || skills.title;
      skills.categories = categories || skills.categories;
    }
    
    await skills.save();
    res.json(skills);
  } catch (error) {
    console.error('Error updating skills data:', error);
    res.status(500).json({ message: 'Error updating skills data' });
  }
});

module.exports = router;