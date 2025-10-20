const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mysql123@',
  database: 'task_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('✅ Connected to MySQL (task_db)');
});

module.exports = connection;
