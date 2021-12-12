const mongooseSchema = require("mongoose");

const userSchema = new mongooseSchema.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 60,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 80,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1500,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongooseSchema.model("User", userSchema);
