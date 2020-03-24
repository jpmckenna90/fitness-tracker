const express = require("express");
const mongoose = require("mongoose");
// Require model! 

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json);

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Use api routes
app.use(require("./Develop/Routes/api-routes.js"))

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`)
})