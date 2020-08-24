const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello there!')
});

app.get('/alien', (req,res) => {
  const a=req.query.id
  const b=req.query.name
  res.send('Welcome back aliens ' + a + " " + b)
})

app.get('/alien/:id', (req,res) => {
  const id = req.params.id
  res.send('hello disha ' + id)
})
app.listen(9000, (req, res) => {
  console.log('Running...')
});
