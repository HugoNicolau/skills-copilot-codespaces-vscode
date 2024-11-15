// Create web server
// 1. Load express
// 2. Create an instance of express
// 3. Create a route to handle GET requests to /comments
// 4. Create a route to handle POST requests to /comments
// 5. Create a route to handle DELETE requests to /comments
// 6. Start the server

// Load express
const express = require('express');
// Create an instance of express
const app = express();
// Load body-parser
const bodyParser = require('body-parser');
// Load comments
const comments = require('./comments.js');

// Use bodyParser
app.use(bodyParser.json());

// Create a route to handle GET requests to /comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// Create a route to handle POST requests to /comments
app.post('/comments', (req, res) => {
  const { comment } = req.body;
  comments.addComment(comment);
  res.status(201).json(comment);
});

// Create a route to handle DELETE requests to /comments
app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments.deleteComment(id);
  res.status(200).json(id);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});