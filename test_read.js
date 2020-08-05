const csv = require('csv-parser');
const fs = require('fs');

const results = [];

fs.createReadStream('./input-routes.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });

//TODO
/*
  3 - começar a parte do CLI
  4 - testar a aplicação
    4.1 - verificar a cobertura dos testes usando o JEST
  5 - dockerizar a aplicação
  6 - criar o readme
   */
