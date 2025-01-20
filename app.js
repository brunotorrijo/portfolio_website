const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

['about', 'projects', 'skills', 'contact', 'blog', 'resume'].forEach(page => {
    app.get(`/${page}`, (req, res) => {
        res.render(page);
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
