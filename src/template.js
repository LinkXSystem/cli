const Template = require('./templates');

const path = require('path');
const fs = require('fs');

const CommonUtils = require('./utils/common');
const FileUtils = require('./utils/file');

class TemplateUtils {
  static build(component, template) {
    const [label, type] = template.split('-');

    const folder = process.cwd();
    const r = FileUtils.resolve([folder, `${component}.js`]);

    FileUtils.write(
      r,
      Template[label][type](CommonUtils.toUpperCaseByFirstCharacter(component)),
    );
  }
}

module.exports = TemplateUtils;
