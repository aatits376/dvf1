const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const skillCategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  skills: [skillSchema]
});

const skillsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: 'Skills'
  },
  categories: [skillCategorySchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Skills', skillsSchema);