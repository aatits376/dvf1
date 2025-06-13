const express = require('express');
const router = express.Router();
const About = require('../models/About');

// GET /api/about
router.get('/', async (req, res) => {
  try {
    let about = await About.findOne();
    
    if (!about) {
      // Create default about data if none exists
      about = new About({
        title: "AboutMe",
        paragraphs: [
          "Hi, I'm Dharmu Bhusal from Bharatpur-1, Chitwan. A web developer and digital visual artist, passionate about creating unique digital experiences that exist on the internet.",
          "I blend creativity with technology to craft compelling online worlds that captivate and inspire.",
          "In my free time, I enjoy exploring graphic design, photography, and experimenting with new digital art techniques to push the boundaries of my creativity."
        ],
        image: "/images/me.jpg",
        resumeUrl: "/src/pdf/cv.pdf"
      });
      await about.save();
    }
    
    res.json(about);
  } catch (error) {
    console.error('Error fetching about data:', error);
    res.status(500).json({ message: 'Error fetching about data' });
  }
});

// PUT /api/about (for updating about data)
router.put('/', async (req, res) => {
  try {
    const { title, paragraphs, image, resumeUrl } = req.body;
    
    let about = await About.findOne();
    
    if (!about) {
      about = new About({ title, paragraphs, image, resumeUrl });
    } else {
      about.title = title || about.title;
      about.paragraphs = paragraphs || about.paragraphs;
      about.image = image || about.image;
      about.resumeUrl = resumeUrl || about.resumeUrl;
    }
    
    await about.save();
    res.json(about);
  } catch (error) {
    console.error('Error updating about data:', error);
    res.status(500).json({ message: 'Error updating about data' });
  }
});

module.exports = router;