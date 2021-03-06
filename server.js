// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
const express = require('express');

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
const path = require('path');

// Tells node that we are creating an "express" server
const app = express();
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));
app.use(apiRoutes);
app.use(htmlRoutes);

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
})