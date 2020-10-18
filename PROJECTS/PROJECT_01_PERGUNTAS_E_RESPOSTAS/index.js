const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get("/", (request, response) => {
  response.render('index', {
    name: 'Francisco',
    age: 23,
  })
});

app.listen(8585, (erro) => {
  if(erro){
    console.log(erro);
  } else{
    console.log('Start service...')
  }
});