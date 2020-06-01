const FileUtils = require('./utils/file');

const { structure } = require('./constants/structure');

class Init {
  static init(directory, root) {
    const caches = directory || structure;
    const project = root || process.cwd();

    for (let i = 0; i < caches.length; i += 1) {
      let { name, preset, children } = caches[i];
      let t = FileUtils.resolve([project, name]);
      const status = FileUtils.isDirExit(t, true);

      if (status) {
        if (preset) {
          FileUtils.write(FileUtils.resolve([t, preset]), new String());
        }

        if (children) Init.init(children, t);
      }
    }
  }
}

module.exports = Init;
