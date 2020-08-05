const csv = require('csv-parser');
const fs = require('fs');
const CreateRoute = require('./src/useCases/CreateRoute/CreateRoute');
//const CreateDijkstrasAlgorithm = require('./src/useCases/CreateDijkstras/CreateDijkstrasAlgorithm');

const results = [];

fs.createReadStream('./input-routes.csv')
  .pipe(csv(['origin', 'destination', 'cost']))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    CreateRoute.file(results);
  });

//TODO
/*
  1 - criar a rota para criação dos nós - passando o arquivo no request
  2 - criar a rota de consulta 
  3 - começar a parte do CLI
  4 - testar a aplicação
    4.1 - verificar a cobertura dos testes usando o JEST
  5 - dockerizar a aplicação
  6 - criar o readme
   */
