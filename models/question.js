const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  option:[
    {
      type:Object,
      ref:'Option'
    }
  ]
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
