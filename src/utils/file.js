const path = require('path');
const fs = require('fs');
const os = require('os');
const rimraf = require('rimraf');

function mkdir(target) {
  let status = false;

  try {
    fs.mkdirSync(target);
    status = true;
  } catch (error) {
    console.error(error);
  }

  return status;
}

function append(target, content = '') {
  let status = false;

  try {
    fs.appendFileSync(target, content, {
      encoding: 'utf8',
    });
    status = true;
  } catch (error) {
    console.error(error);
  }

  return status;
}

function isDir(target) {
  let status = false;

  try {
    const stat = fs.statSync(target);
    status = stat.isDirectory();
  } catch (error) {
    console.error(error);
  }

  return status;
}

function isFile(target) {
  let status = false;

  try {
    const stat = fs.statSync(target);
    status = stat.isFile();
  } catch (error) {
    console.error(error);
  }

  return status;
}

function isDirExit(target, auto = false) {
  const status = fs.existsSync(target);

  if (status) return true;

  if (!status && !auto) return false;

  if (!status && auto) {
    return mkdir(target);
  }
}

function isFileExit(target, auto = false) {
  let status = false;

  try {
    fs.statSync(target);
    status = true;
  } catch (error) {
    if (auto) {
      status = append(target);
    }
  }

  return status;
}

function write(target, content) {
  let status = false;

  try {
    fs.writeFileSync(target, content, {
      encoding: 'utf8',
    });
    status = true;
  } catch (error) {
    console.error(error);
  }

  return status;
}

function read(target, encoding) {
  let content = null;

  try {
    content = fs.readFileSync(target, encoding);
  } catch (error) {
    console.error(error);
  }

  return content;
}

const stream = (src, target) =>
  /* eslint-disable no-shadow */
  new Promise((resolve, reject) => {
    try {
      const readable = fs.createReadStream(src);
      const writable = fs.createWriteStream(target);
      readable.pipe(writable);

      writable.on('finish', () => {
        resolve({
          status: 'success',
        });
      });

      writable.on('error', () => {
        /* eslint-disable prefer-promise-reject-errors */
        reject({
          status: 'error',
          readable,
          writable,
        });
        /* eslint-enable prefer-promise-reject-errors */
      });
    } catch (error) {
      reject(error);
    }
  });
/* eslint-enable no-shadow */

function rmdir(target) {
  let status = false;

  try {
    rimraf.sync(target);
    status = true;
  } catch (error) {
    console.error(error);
  }

  return status;
}

function unlink(target) {
  let status = false;

  try {
    fs.unlinkSync(target);
    status = true;
  } catch (error) {
    console.error(error);
  }

  return status;
}

function rename(target, name) {
  let status = false;

  try {
    fs.renameSync(target, name);
    status = true;
  } catch (error) {
    console.error(error);
  }

  return status;
}

function resolve(paths) {
  if (!(paths instanceof Array)) return paths;

  let result = '';

  try {
    result = path.resolve(...paths);
  } catch (error) {
    console.error(error);
  }

  return result;
}

function dirname(target) {
  return path.dirname(target);
}

function basename(target) {
  return path.basename(target);
}

function filename(target) {
  if (typeof target !== 'string')
    throw new Error('You need Checking the parameter of filename!');
  const name = target.split('.')[0];
  return name;
}

function extname(target) {
  return path.extname(target);
}

function compose(paths, character) {
  const symbol = character || os.platform() !== 'win32' ? '/' : '\\';

  const cache = new Set();

  paths.forEach((item) => {
    const layer = item.split(symbol);
    layer.map((child) => cache.add(child));
  });

  return Array.from(cache).join(symbol);
}

module.exports = {
  mkdir,
  isDir,
  isDirExit,
  append,
  isFile,
  isFileExit,
  write,
  read,
  stream,
  rmdir,
  unlink,
  rename,
  resolve,
  dirname,
  basename,
  filename,
  extname,
  compose,
};
