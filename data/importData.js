const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Question = require("../models/questionModel");
const Test = require("../models/testModel");
const USer = require("../models/userModel");

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection successful!"));

// READ JSON FILE
const tests = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, "utf-8"));
const questions = JSON.parse(
  fs.readFileSync(`${__dirname}/reviews.json`, "utf-8")
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Test.create(tests);
    await Question.create(questions);
    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Test.deleteMany();
    await Question.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
