
const express = require('express')
const app = express()
const connectDB = require('./knexfile')

const PORT = process.env.PORT || 4500;

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})


// endpoint to retrieve data from database and return it in JSON format
app.get('/data', (req, res) => {
  const sql = 'SELECT user_id, name, age, phone FROM yourtable';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json({
      status_code: 200,
      data: result
    });
  });
});;

  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
