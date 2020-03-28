const db = require("../models");
const router = require("express").Router();

// todo get all workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(data => res.json(data))
    .catch(err => {
      res.send(err);
    });
});

//todo Update existing workout
router.put("/api/workouts/:id", (req, res) => {
  console.log(req);
  db.Workout.findByIdAndUpdate(req.params.id)
    .then(data => res.json(data))
    .catch(err => {
      res.send(err);
    });
});
// module.exports = app => {
//   app.get("/api/workouts", (req, res) => {
//     db.Workout.find({}).then(data => res.json(data))
//   })
// }

// router.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "develop/public/index.html"));
// });

module.exports = router;
