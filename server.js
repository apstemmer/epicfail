"use strict";

let express = require('express');
let app = express();

app.use(express.static('build'));

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(3000,()=>{
  console.log('just opened a connection');
});
