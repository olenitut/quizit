const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  rightAnswer: Number,
  test: { type: mongoose.Schema.ObjectId, ref: "Test" },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
