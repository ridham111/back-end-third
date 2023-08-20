const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Ridham:WiHCHo67LbhQmUAn@cluster0.sh7pu.mongodb.net/polling_System?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true ,  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));
