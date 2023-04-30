const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "PLese, provide the question"],
    unique: [true, "There should be no repeated questions"],
  },
  options: { type: [String], required: [true, "Provide answers"] },
  correctAnswer: {
    type: Number,
    required: [true, "Please, provide the right answer"],
  },
  test: { type: mongoose.Schema.ObjectId, ref: "Test" },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
