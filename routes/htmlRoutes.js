// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

const path = require('path');
const router = require('express').Router();

// ROUTING

// => HTML GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;