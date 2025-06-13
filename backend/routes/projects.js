const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET /api/projects
router.get('/', async (req, res) => {
  try {
    let projects = await Project.find().sort({ order: 1, createdAt: -1 });
    
    if (projects.length === 0) {
      // Create default projects data if none exists
      const defaultProjects = [
        {
          id: "project-box1",
          faviconSrc: "/images/favicons/RPS.png",
          faviconAlt: "RPS website favicon",
          heading: "Royal Photo Studio",
          description: "Royal Photography: Your ultimate destination for capturing timeless memories. Experience professional photography services that bring your special moments to life with creativity and precision. From stunning portraits to event coverage, Royal Photography ensures every shot tells a story. Let us preserve your cherished memories with artistry and care.",
          liveLink: "https://royalphotostudio.com.np",
          previewSrc: "/images/projects/RPS.jpg",
          previewAlt: "RPS website preview image",
          order: 1
        },
        {
          id: "project-box2",
          faviconSrc: "/images/favicons/BKP.png",
          faviconAlt: "BKP website favicon",
          heading: "Bhusal Kirana Pasal",
          description: "Bhusal Kirana Pasal: Your online destination for fresh and quality groceries. Shop a wide range of products from the comfort of your home and enjoy fast, reliable delivery. With Bhusal Kirana Pasal, stocking your kitchen with essentials has never been easier or more convenient.",
          liveLink: "https://bhusalkirana.com.np",
          previewSrc: "/images/projects/BKP.jpg",
          previewAlt: "BKP website preview image",
          order: 2
        },
        {
          id: "project-box3",
          faviconSrc: "/images/favicons/BSSU.png",
          faviconAlt: "BSSU website favicon",
          heading: "Bhusal Sabun Surf Udhyog",
          description: "Bhusal Sabun Surf Udhyog: Redefining hygiene and cleanliness with our expertly crafted soaps, detergents, toiletries, and disinfectants. Committed to quality and innovation, we produce products designed to deliver superior cleaning and care.",
          liveLink: "https://bbhusal.com.np",
          previewSrc: "/images/projects/bssu.jpg",
          previewAlt: "BSSU website preview image",
          order: 3
        },
        {
          id: "project-box4",
          faviconSrc: "/images/favicons/AGF.png",
          faviconAlt: "AGF website favicon",
          heading: "Aama Gai Firm",
          description: "Aama Gai Firm: Your source for fresh, pure, and high-quality milk and dairy products. At Aama Gai Firm, we take pride in our healthy cows and sustainable farming practices, ensuring every product is rich in nutrition and taste.",
          liveLink: "https://aamagaifirm.com.np",
          previewSrc: "/images/projects/AGF.jpg",
          previewAlt: "AGF website preview image",
          order: 4
        },
        {
          id: "project-box5",
          faviconSrc: "/images/favicons/DY.png",
          faviconAlt: "Bhusal Tours website favicon",
          heading: "Bhusal Tours",
          description: "Bhusal Tours: Your gateway to seamless travel experiences. Book bus tickets online effortlessly and explore the world with confidence and convenience. Whether you're commuting or planning an adventure, Bhusal Tours transforms your journey into a hassle-free and enjoyable experience.",
          githubLink: "https://github.com/Dharmub376/Dy_Frontend",
          liveLink: "https://dy-frontend.vercel.app",
          previewSrc: "/images/projects/DY.jpg",
          previewAlt: "Bhusal Tours website preview image",
          order: 5
        }
      ];

      await Project.insertMany(defaultProjects);
      projects = await Project.find().sort({ order: 1, createdAt: -1 });
    }
    
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Error fetching projects' });
  }
});

// GET /api/projects/:id
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findOne({ id: req.params.id });
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ message: 'Error fetching project' });
  }
});

// POST /api/projects (for creating new projects)
router.post('/', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ message: 'Error creating project' });
  }
});

// PUT /api/projects/:id (for updating projects)
router.put('/:id', async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json(project);
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ message: 'Error updating project' });
  }
});

// DELETE /api/projects/:id (for deleting projects)
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ id: req.params.id });
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ message: 'Error deleting project' });
  }
});

module.exports = router;