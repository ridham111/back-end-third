const express = require('express');
const router = express.Router();
const Vote = require('../models/vote');
const Option = require('../models/option');

const voteController = require('../conrollers/voteController')
// Route to add a vote to an option
// router.post('/:optionId/add_vote', voteController.addVote);

// router.post('/:optionId/add_vote', async (req, res) => {
//   try {
//     const { optionId } = req.params;
//     const option = await Option.findById(optionId);
//     if (!option) {
//       return res.status(404).json({ error: 'Option not found' });
//     }

//     // Record the vote
//     const newVote = new Vote({ optionId });
//     await newVote.save();

//     // Update the vote count in the option
//     option.votes++;
//     await option.save();

//     res.status(201).json({ message: 'Vote recorded' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

// ... Add more routes as needed (e.g., delete a vote, view votes, etc.)

module.exports = router;
