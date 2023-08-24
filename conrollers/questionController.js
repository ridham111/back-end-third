// const question = require('../models/question');
// controllers/questionController.js
const Question = require('../models/question');
const Option = require('../models/option');

exports.createQuestion = async (req, res) => {
  try {
        const { question, options } = req.body;
        const newQuestion = new Question({question});
        options.forEach(async  (element) => {
          const option = new Option({ option:element.option, question: newQuestion._id });
          newQuestion.option.push(option._id);
        await option.save(); 
        });        
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
  const questionId = req.params.id;
  try{
    const question = await Question.findById(questionId);
    if(question){
      const options = await Option.find({'question':req.params.id})
      console.log(options);
      flag = true;
      id='';
      options.forEach(element => {
        if(options.votes>0){
          flag = false;
        }
      });
      if(flag){
        const element = await Question.findByIdAndDelete(req.params.id);
        await Question.save();
        res.status(200).json({msg:'Option deleted Successfully',element});
      }else{
        res.status(200).json({msg:"question  has more than one votes options so can't deleted",element});
      }
    }
    else{
      res.status(404).json({msg:"Question not found"});
    }
  }
  catch(err){
    console.log(err);
  }
};

exports.add_option = async(req, res) => {

  const questionId = req.params.id;

  const question = await Question.findById(questionId);

if (question) {
  // Add the new option to the options array
  const option = new Option({ option:req.body.option, question: req.params.id });

  question.option.push(req.body);
  // Save the updated question
  await question.save();
  await option.save();
  res.status(201).json({msg:'New option added successfully',option});

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
