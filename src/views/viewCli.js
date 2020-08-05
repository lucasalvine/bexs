#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');

program.command('routes [routes]').action(async (routes) => {
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

  const data = [];
  data.push({
    route: answers.routes.split('-'),
  });

  console.log(`? Best route: `, data);
});

program.parse(process.argv);
