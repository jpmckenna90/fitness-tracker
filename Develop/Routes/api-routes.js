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
  db.Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then(data => res.json(data))
    .catch(err => {
      res.send(err);
    });
});

// todo Create new workout
router.post("/api/workouts/", (req, res) => {
  db.Workout.create(req.body)
    .then(data => res.json(data))
    .catch(err => {
      res.send(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then(data => res.json(data))
    .catch(err => {
      res.send(err);
    });
});



module.exports = router;
