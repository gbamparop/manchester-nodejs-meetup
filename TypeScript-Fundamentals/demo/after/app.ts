import express = require('express');

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello from Manchester Node.js meetup!');
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});