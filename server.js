const express = require("express");
const mongoose = require("mongoose");
// const path = require("path");
const seed = require("./Develop/seeders/seed.js")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./Develop/public"));

// mongo connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI);

// Use api routes
app.use(require("./Develop/Routes/api-routes.js"))
app.use(require("./Develop/Routes/html-routes.js"))

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`)
})