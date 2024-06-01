const Mentors = require('../models/mentors.model');

async function create(mentorData) {
  return await Mentors.create(mentorData);
}

async function getAll() {
  return await Mentors.find();
}

async function getById(id) {
  return await Mentors.findById(id);
}

async function deleteById(id) {
  return await Mentors.findByIdAndDelete(id);
}

async function updateById(id, newMentorData) {
  return await Mentors.findByIdAndUpdate(id, newMentorData, { new: true });
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updateById,
};