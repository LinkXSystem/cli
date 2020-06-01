const Template = require('./template');
const Init = require('./init');

class Cli {
  static init() {
    Init.init();
  }

  static docs() {
    console.warn('unimplemented feature!');
  }

  static template(component, template) {
    Template.build(component, template);
  }
}

module.exports = Cli;
