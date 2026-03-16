const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
  res.status(200).send('Hello world!!',
    'How are you???'
  );
});

app.get('/api/test', (req, res) => {
  res.status(200).send({ message: 'Endpoint de teste'});
});

app.get('/api/test-2', (req, res) => {
  res.status(200).send({ message: 'Endpoint de teste 2'});
});

module.exports = app;