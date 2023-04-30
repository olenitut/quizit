const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A test should have a name"],
    unique: [true, "A test should be unique"],
  },
});

testSchema.virtual("questions", {
  ref: "Question",
  foreignField: "test",
  localField: "_id",
});

const Test = mongoose.model("Test", testSchema);

module.exports = Test;
