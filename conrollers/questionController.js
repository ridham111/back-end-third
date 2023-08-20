// const question = require('../models/question');
// controllers/questionController.js
const Question = require('../models/question');
const Option = require('../models/option');

exports.createQuestion = async (req, res) => {
  try {
        const { question, options } = req.body;
        arr_of_option = [];
        const newQuestion = new Question({question});
        options.forEach(async  (element) => {
          const option = new Option({ option:element.option, question: newQuestion._id });
          newQuestion.options.push(option._id);
          arr_of_option.push(option._id);
        await option.save(); 
        });
        console.log(arr_of_option);
        
        await newQuestion.save();
        res.status(201).json(newQuestion);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      }};

exports.createOption = async (req, res) => {
  // Implement the logic to add an option to a specific question
};

exports.deleteQuestion = async (req, res) => {
  // Implement the logic to delete a question
};

exports.add_option = async(req, res) => {

  const questionId = req.params.id;

  const question = await Question.findById(questionId);

if (question) {
  // Add the new option to the options array
  question.options.push(req.body);

  // Save the updated question
  await question.save();
  res.status(201).json({msg:'New option added successfully',question});

  console.log('New option added successfully');
} else {
  console.log('Question not found');
}
}

exports.viewQuestion = async (req, res) => {
  try {
    const questionId = req.params.id;
    const question = await Question.findById(questionId);
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    res.status(200).json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Controller function to view all questions
exports.viewAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
// ... (other controller functions)

// Controller function to add a vote to an option
exports.addVote = async (req, res) => {
  try {
    const { optionId } = req.params;
    const data = req.body;
    const option = await Question.findById(optionId);
    console.log(data);
    
    if (!option) {
      return res.status(404).json({ error: 'Option not found' });
    }

    // Record the vote
    for(const ele of option.options){
      if(ele._id == data.vote_id){
        ele.votes++;
        console.log(ele);
        await option.save();
        return res.status(201).json({ message: 'Vote recorded' ,option});
        
      }

      }
        res.status(404).json({ error: 'option not found' });
    console.log(option,'////////////');

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
