const Workout = require("../models/workouts");
const router = require("express").Router();

router.get("/api/workouts", async (req, res) => {
  const allworkouts = await Workout.aggregate([{
    $addFields: {
      totalDuration: { $sum: "$exercises.duration" },
    }
  }]);
  res.json(allworkouts);
});

// range get
router.get("/api/workouts/range", async (req, res) => {
  const allworkouts = await Workout.aggregate([{
    $addFields: {
      totalDuration: { $sum: "$exercises.duration" },
    }
  }]).limit(7);
  res.json(allworkouts);
});


router.post("/api/workouts", async (req, res) => {
  try {
    const newWorkout = await Workout.create(req.body);
    res.json(newWorkout);

  } catch (err) {
    res.status('403')
    res.send(`Failed with: ${err}`)
  }
});

router.put("/api/workouts/:id", async (req, res) => {
  await Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true })
    .then(workout => {
      res.json(workout);
    })
});


module.exports = router;