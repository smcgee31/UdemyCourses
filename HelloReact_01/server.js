const express = require('express');

// Create app
var app = express();

app.use(express.static('public'));

// Start server
app.listen(3000, function () {
  console.log('Express server started on port 3000');
});