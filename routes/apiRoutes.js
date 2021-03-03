// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

const path = require('path');
const router = require('express').Router();
const fs = require('fs');
// ROUTING

// => HTML GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content

router.get('/api/notes', (req, res) => {
    let noteData = fs.readFileSync(path.join(__dirname, '../Develop/db/db.json'), "utf-8");
    noteData = JSON.parse(noteData);    
    res.json(noteData);
});

router.post('/api/notes', (req, res) => {
    console.log(req.body);
    let userInput = req.body;
    let noteData = fs.readFileSync(path.join(__dirname, '../Develop/db/db.json'), "utf-8");
    noteData = JSON.parse(noteData);    
    noteData.push(userInput);
    noteData = JSON.stringify(noteData);
    fs.writeFileSync(path.join(__dirname, '../Develop/db/db.json'), noteData, "utf-8");
    noteData = JSON.parse(noteData);    
    res.json(noteData);
});

// router.delete('/api/notes', (req, res) => {
    
// });

module.exports = router;


