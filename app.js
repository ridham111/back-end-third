const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/db');
const questionRoutes = require('./routes/questionRoutes');
const optionRoutes = require('./routes/optionRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Mount API routes
app.use('/questions', questionRoutes);
app.use('/options', optionRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
