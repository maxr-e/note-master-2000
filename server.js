const express = require('express');
const uuid = require('uuid');
const path = require('path');
const noteData = require('./Develop/routes/notes.js')
const db = require('./db.json')
const app = express()

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log(`${req.method} has been received`)
    res.json(notes);
});

app.post('/', (req, res) => {
    console.log(`${req.method} has been received`)
    res.send();
  });