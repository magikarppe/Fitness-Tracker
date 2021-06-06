const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [{
      type: {
        type: String,
        required: true
      },

      name: {
        type: String,
        required: true
      },

      duration: {
        type: Number,
        required: true
      },

      weight: Number,
  
      reps: Number,

      sets: Number,
        
      distance: Number,
    },
    {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  }],
});

// add dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function () {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;