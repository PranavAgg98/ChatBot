const express = require('express');
const app = express();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


app.get('/', function (req, res) {
n=getRandomInt(40);
s=n.toString();

 return res.send(s);
 });

app.listen(process.env.PORT || 8080);