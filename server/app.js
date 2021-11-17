const express = require('express');
const cors = require('cors');
const app = express();
const Result = require("./model/results")

app.use(express.json())
app.use(cors());

app.get('/', (req, res) => res.send('Hello There!'))

app.get('/:results', (req, res) => res.send(Result.search(req.params.results)))


module.exports = app;