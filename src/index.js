const Template = require('./template');

class Cli {
  static template(component, template) {
    Template.build(component, template);
  }
}

module.exports = Cli;
