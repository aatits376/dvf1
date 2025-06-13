const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  faviconSrc: {
    type: String,
    required: true
  },
  faviconAlt: {
    type: String,
    required: true
  },
  heading: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  githubLink: {
    type: String,
    default: null
  },
  liveLink: {
    type: String,
    default: null
  },
  previewSrc: {
    type: String,
    required: true
  },
  previewAlt: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);