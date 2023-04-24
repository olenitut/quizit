const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

const app = require("./app");

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("database connected"));

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log("App running...");
});
