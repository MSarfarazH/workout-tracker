const mongoose = require('mongoose');
const schema = mongoose.schema

const workoutSchema = new Schema({
    day: {
        type: Date
    },

    exercise: [{
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
    }]
})