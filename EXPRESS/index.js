const { query } = require('express');
const express = require('express'); // Importando o express
const app = express(); // Iniciando o express


//Rotas e Parametros
app.get('/hello/:name/:age', (request, response) => {
  const {name, age} = request.params;

  return response.send(`<h1>Nome: ${name}</h1> <h2>Idade: ${age}</h2>`);
});

// Parametos opcionais
app.get('/app/:name?', (request, response) => {
  const { name } = request.params;
  
  if(name) {
    return response.send(`<h1>${name}</h1>`);
  } else {
    return response.send('<h1>App</h1>');
  }

});


//Query params
app.get('/query', (request, response) => {
  const { name } = request.query;

  if(name) {
    return response.send(`<h1>${name}</h1>`);
  } else {
    return response.send('<h1>No query</h1>');
  }
});

app.listen(4000, (erro) => {
  if(erro) {
    console.log(erro);
  } else {
    console.log("Server running...");
  }
})