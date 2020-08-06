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
  4 - testar a aplicação
    4.1 - verificar a cobertura dos testes usando o JEST
  5 -   
  6 - criar o readme
   */
