const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: { type: String, required: [true, "PLese, provide the question"] },
  options: { type: [String], required: [true, "Provide answers"] },
  rightAnswer: {
    type: Number,
    required: [true, "Please, provide the right answer"],
  },
  test: { type: mongoose.Schema.ObjectId, ref: "Test" },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
