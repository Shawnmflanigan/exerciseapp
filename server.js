const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const app = express();

app.use(logger("dev"));
app.use(logger("tiny"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(apiRoutes);
app.use(htmlRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false});


mongoose.connection.on("error", (err) =>
  console.log(`error in mongoose connection: ${err.message}`)
);

mongoose.connection.once("open", () => {
  console.log("mongoose connected!");
  app.listen(PORT, (err) => console.log(`http://localhost/${PORT}`));
});

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });