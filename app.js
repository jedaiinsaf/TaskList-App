// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const taskRoutes = require('./routes/tasks');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Mount Routes
app.use('/', taskRoutes);

const PORT = 5500;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
