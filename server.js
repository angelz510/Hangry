const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

// Init DB
const db = require('./models');

// Init Routes
const routes = require('./routes');

// Middleware
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

/////////////////////////////// ROUTES 

// View Routes
app.use('/', routes.views);

// API Routes
app.use('/api/v1', routes.api)

// API Error 404
app.use('/api/*', (req, res) => {
    res.status(404).json({status: 404, error: 'Error 404: Resource not found'});
  });
  
// HTML Error 404
app.use('*', (req, res) => {
  res.send('<h2>Error 404: Not Found</h2>');
});

//----------START SERVER
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
