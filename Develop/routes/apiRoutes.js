const Workout = require("../models/workouts");
const router = require("express").Router();

router.get("/api/workouts", async (req, res) => {
  const allworkouts = await Workout.find();
  res.json(allworkouts);
});

router.post("/api/workouts", async (req, res) => {
    try{
  const newWorkout = await Workout.create(req.body);
  res.status(201);
  res.send(`Workout with id: ${newWorkout.id} was created!`);
    }catch(err) {
        res.status('403')
        res.send(`Failed with: ${err}`)
    }

});

module.exports = router;