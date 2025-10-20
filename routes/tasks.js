// routes/tasks.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// READ - Show all tasks
router.get('/', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) throw err;
    res.render('index', { tasks: results }); // or res.json(results) if API only
  });
});

// CREATE - Show form
router.get('/add', (req, res) => {
  res.render('add'); // or use API if frontend is React/etc.
});

// CREATE - Add task
router.post('/add', (req, res) => {
  const { title, description } = req.body;
  db.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

// UPDATE - Show form
router.get('/edit/:id', (req, res) => {
  db.query('SELECT * FROM tasks WHERE id = ?', [req.params.id], (err, results) => {
    if (err) throw err;
    res.render('edit', { task: results[0] });
  });
});

// UPDATE - Save edits
router.post('/edit/:id', (req, res) => {
  const { title, description, status } = req.body;
  db.query(
    'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?',
    [title, description, status, req.params.id],
    (err) => {
      if (err) throw err;
      res.redirect('/');
    }
  );
});

// DELETE
router.get('/delete/:id', (req, res) => {
  db.query('DELETE FROM tasks WHERE id = ?', [req.params.id], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

module.exports = router;
