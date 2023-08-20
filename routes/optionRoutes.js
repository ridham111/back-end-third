const express = require('express');
const router = express.Router();
const Option = require('../models/option');
const optionController = require('../conrollers/optionController');
// Route to add an option to a question
router.post('/:questionId/add_option', async (req, res) => {
  try {
    const { questionId } = req.params;
    const { option } = req.body;
    const newOption = new Option({ questionId, option, votes: 0 });
    await newOption.save();
    res.status(201).json(newOption);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.delete('/:id/delete',optionController.deleteOption);

router.post('/:id/add_vote',optionController.add_vote);
// ... Add more routes as needed (e.g., delete an option, view options, etc.)

module.exports = router;
