const Koders = require("../models/koders.model");
const encrypt = require("../lib/encrypt");
const createError = require("http-errors");

async function create(koderData) {
  const koderFound = await Koders.findOne({ email: koderData.email });

  if (koderFound) {
    // throw new Error("Email already in use");
    throw createError(409, "Email already in use");
  }

  koderData.password = await encrypt.encrypt(koderData.password);

  const newKoder = await Koders.create(koderData);
  return newKoder;
}

async function getAll() {
  const allKoders = await Koders.find();
  return allKoders;
}

async function getById(id) {
  const koder = await Koders.findById(id);
  return koder;
}

async function deleteById(id) {
  const koderDelete = await Koders.findByIdAndDelete(id);
  return koderDelete;
}

async function updateById(id, newKoderData) {
  const updateKoder = await Koders.findByIdAndUpdate(id, newKoderData, {
    new: true,
  });
  return updateKoder;
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updateById,
};
