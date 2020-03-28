const express = require("express");
const mongoose = require("mongoose");
// const path = require("path");
const seed = require("./Develop/seeders/seed.js")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./develop/public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Use api routes
app.use(require("./Develop/Routes/api-routes.js"))
app.use(require("./Develop/Routes/html-routes.js"))

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`)
})