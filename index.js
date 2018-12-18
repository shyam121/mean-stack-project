var express = require('express');
var app = express();
const path=require('path');

app.use(express.static(__dirname+"/client/dist/client"));

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname+"/client/dist/client/index.html"));
});

app.listen(8080,()=>{
console.log("listening on port 8080");
});