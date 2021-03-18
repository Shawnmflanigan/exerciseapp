// schema
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// create schema
const exerciseSchema = new Schema({
    day: {
        type: Date,
        trim: true,
        required: true,
        default: Date.now,
    },

    exercises:  [{
    name: {
        type: String,
        trim: true,
        required: true,
        validate: [({ length }) => length <= 50, "name is too long"],
    },

    type: {
        type: String,
        trim: true,
        required: true
    },

    duration: {
        type: Number,
        required: true,
    },

    weight: {
        type: Number,
        required: true,
    },
    
    reps: {
        type: Number,
        required: true,
    },

    sets: {
        type: Number,
        required: true,
    },
    
    distance: {
        type: Number,
    },

    },
],
});

const Workout = mongoose.model('workouts', exerciseSchema);

module.exports = Workout;
