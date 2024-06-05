const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  number: {
    type: number,
    required: true,
    min: 1,
    max: 100,
  },
  program: {
    type: string,
    requires: true,
    enum: ["javascript", "python", "ios", "android"],
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("generations", schema);
