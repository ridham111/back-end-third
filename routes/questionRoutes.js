const express = require('express');
const router = express.Router();
const Question = require('../models/question');
const questionController = require('../conrollers/questionController')
// Route to create a question
// router.post('/create', async (req, res) => {
//   try {
//     const { question, options } = req.body;
//     const newQuestion = new Question({ question, options });
//     await newQuestion.save();
//     res.status(201).json(newQuestion);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

router.get('/', questionController.viewAllQuestions);

router.get('/:id',questionController.viewQuestion)

router.post('/create',questionController.createQuestion);

router.post('/:id/options/create', questionController.add_option);

router.delete('/:id/delete', questionController.deleteQuestion);

// ... Add more routes as needed (e.g., get all questions, view a question, etc.)

module.exports = router;
