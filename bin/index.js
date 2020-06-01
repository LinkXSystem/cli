#!/usr/bin/env node

const { program } = require('commander');

const Cli = require('../src');

program
  .command('init')
  .description('initialize the project structure')
  .action(() => {
    Cli.init();
  });

program
  .command('doc <document>')
  .description('create the document file')
  .action((document) => {
    Cli.docs();
  });

program
  .command('new <component> <template>')
  .description('create the template file')
  .action((component, template) => {
    Cli.template(component, template);
  });

program
  .command('script <filename>')
  .description('create the template file')
  .action((filename) => {
    console.warn('unimplemented feature!');
  });

program
  .command('test <template>')
  .description('create the template file')
  .action((template) => {
    console.warn('unimplemented feature!', template);
  });

program.parse(process.argv);
