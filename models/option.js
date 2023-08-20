// models/option.js

const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  option: String,
  votes: {
    type: Number,
    default: 0, // Set the default value to 0
  },
  question:
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Question'
    }
});

const Option = mongoose.model('Option', optionSchema);

module.exports = Option;
