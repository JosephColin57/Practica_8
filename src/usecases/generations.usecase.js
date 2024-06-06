const createError = require("http-errors");
const Generations = require("../models/generations.model");

async function create(generation) {
  const generationExist = await Generations.findOne({
    number: generation.number,
    program: generation.program,
  });

  if (generationExist) {
    throw createError(409, "Generation already exists");
  }

  return Generations.create(generation);
}

async function getAll() {
  return await Generations.find();
}

async function getById(id) {
  return await Generations.findById(id);
}

async function deleteById(id) {
  return await Generations.findByIdAndDelete(id);
}

async function updateById(id, generation) {
  return await Generations.findByIdAndUpdate(id, generation, { new: true });
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updateById,
};
