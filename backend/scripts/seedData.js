const mongoose = require('mongoose');
const About = require('../models/About');
const Skills = require('../models/Skills');
const Project = require('../models/Project');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/dharmu-portfolio';

const seedData = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Clear existing data
    await About.deleteMany({});
    await Skills.deleteMany({});
    await Project.deleteMany({});

    // Seed About data
    const aboutData = new About({
      title: "AboutMe",
      paragraphs: [
        "Hi, I'm Dharmu Bhusal from Bharatpur-1, Chitwan. A web developer and digital visual artist, passionate about creating unique digital experiences that exist on the internet.",
        "I blend creativity with technology to craft compelling online worlds that captivate and inspire.",
        "In my free time, I enjoy exploring graphic design, photography, and experimenting with new digital art techniques to push the boundaries of my creativity."
      ],
      image: "/images/me.jpg",
      resumeUrl: "/src/pdf/cv.pdf"
    });

    await aboutData.save();
    console.log('About data seeded');

    // Seed Skills data
    const skillsData = new Skills({
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

    await skillsData.save();
    console.log('Skills data seeded');

    // Seed Projects data
    const projectsData = [
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
        description: "Bhusal Sabun Surf Udhyog: Redefining hygiene and cleanliness with our expertly crafted soaps, detergents, toiletries, and disinfectants. Committed to quality and innovation, we produce products designed to deliver superior cleaning and care. Whether for home or commercial use, Bhusal Sabun Surf Udhyog offers reliable solutions that prioritize your health and hygiene. Trust us to keep your surroundings fresh, clean, and safe every day.",
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
        description: "Aama Gai Firm: Your source for fresh, pure, and high-quality milk and dairy products. At Aama Gai Firm, we take pride in our healthy cows and sustainable farming practices, ensuring every product is rich in nutrition and taste. From farm to table, we deliver freshness you can trust. Choose Aama Gai Firm for all your dairy needs and experience the wholesome goodness of nature in every sip and bite.",
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
      },
      {
        id: "project-box6",
        faviconSrc: "/images/favicons/CSITHUB.png",
        faviconAlt: "Csithub website favicon",
        heading: "CSIT Hub",
        description: "CSITHub: Your ultimate resource for Computer Science and Information Technology studies. Share and access notes, questions, books, and practical topics with ease. Elevate your learning experience and stay ahead in your courses with CSITHub, where knowledge meets convenience.",
        githubLink: "https://github.com/Dharmub376/CSIT-Hub",
        liveLink: "https://csithub.netlify.app",
        previewSrc: "/images/projects/CSITHUB.jpg",
        previewAlt: "Csithub website preview image",
        order: 6
      }
    ];

    await Project.insertMany(projectsData);
    console.log('Projects data seeded');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();