const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: 'AboutMe'
  },
  paragraphs: [{
    type: String,
    required: true
  }],
  image: {
    type: String,
    required: true,
    default: '/images/me.jpg'
  },
  resumeUrl: {
    type: String,
    required: true,
    default: '/src/pdf/cv.pdf'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('About', aboutSchema);