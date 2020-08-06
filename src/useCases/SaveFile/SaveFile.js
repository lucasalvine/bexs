#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');

program
  .command('file [todo]')
  .description('Insert a file:')
  .action(() => {
    const file = process.argv[3];
    fs.copyFile(file, './input-routes.csv', (err) => {
      if (err) throw err;
      console.log('File saved');
    });
  });

program.parse(process.argv);
