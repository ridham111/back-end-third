const Option = require("../models/option");

exports.deleteOption = async (req, res) => {
    // Implement the logic to create a question
    const option =await  Option.findById(req.params.id);
    if(option){
      if(option.votes == 0){
        await Option.findByIdAndDelete(req.params.id);
        res.status(200).json({msg:' option deleted successfully  ',option});

      }
      else if(option.votes > 0){
        res.status(200).json({msg:' option has more than one vote you can not delete it ',option});
      }
    }
    else{
      res.status(404).json({msg:"not found Option"});
    }
  };

exports.add_vote = async (req, res) => {
  const option = await Option.findById(req.params.id);
  if(option){
    option.votes=option.votes+1;
    await option.save();
    res.status(200).json({msg:"vote added to the option",option});
  }
  else{
      res.status(404).json({msg:"not found Option"});
  }
};