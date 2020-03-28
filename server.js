const express = require("express");
const mongoose = require("mongoose");
// const path = require("path");
const seed = require("./Develop/seeders/seed.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./Develop/public"));

// mongo connection

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://user1:password1@ds031952.mlab.com:31952/heroku_bn4kfb36",
  {
    useMongoClient: true
  }
);

// Use api routes
app.use(require("./Develop/Routes/api-routes.js"));
app.use(require("./Develop/Routes/html-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
