const mongoose = require("mongoose")

const modelName = "koder"

const Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+/,
  },
  birthdate: {
    type: Date,
    required: false,
  },
  password : {
    type: String,
    required: true,
  },
  createdAt : {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model(modelName, Schema)

module.exports = model