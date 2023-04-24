const mongoose = reqire("mongoose");

const testSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A test should have a name"],
  },
  questions: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Question",
    },
  ],
});

testSchema.pre(/^find/, function (next) {
  this.populate({
    path: "questions",
    select: "-__v",
  });

  next();
});

const Test = mongoose.model("Test", testSchema);

module.exports = Test;
