// schema
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// create schema
const exerciseSchema = new Schema({
    day: {
        type: Date,
        trim: true,
        required: true,
    },

    name: {
        type: String,
        trim: true,
        required: true,
        validate: [({ length }) => length <= 50, "name is too long, ADIDAS!!!"],
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
        required: true,
    }
});


const exercises = mongoose.model('exercises', ChoresSchema);

module.exports = exercises;
