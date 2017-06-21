const express = require('express')
const bodyParser = require('body-parser')
const app = express();

const apitwitter = require('./routes/apitwitter')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

app.use('/apitwitter', apitwitter)

app.listen(3000, ()=>{
     console.log('alive');
})

module.exports = app;
