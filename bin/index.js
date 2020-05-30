#!/usr/bin/env node

const { program } = require('commander');

const Cli = require('../src');

program
  .command('new <component> <template>')
  .description('create the template file')
  .action((component, template) => {
    Cli.template(component, template);
  });

program.parse(process.argv);
