#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const FindRoute = require('../useCases/FindRoute/index');

program.command('routes [routes]').action(async (routes) => {
  console.log(process.argv[1]);
  let answers;
  if (!routes) {
    answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'routes',
        message: 'Please enter the route:',
        validate: (value) => (value ? true : 'The field cannot be empty'),
      },
    ]);
  }

  const [origin, destination] = answers.routes.toUpperCase().split('-');

  const data = {
    query: { origin: origin, destination: destination },
  };

  FindRoute.index(data, false);
});

program.parse(process.argv);
