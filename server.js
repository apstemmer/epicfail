"use strict";

let express = require('express');
let app = express();
let mysql = require('mysql');
let connection = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : 'mongoose',
  database  : 'users'
});

connection.connect(err => {
  if(!err){
    console.log("Connected to database");
  } else {
    console.log("Error connecting to DB" + err);
  }
})

app.use(express.static('build'));

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(3000,()=>{
  console.log('just opened a connection');
});
