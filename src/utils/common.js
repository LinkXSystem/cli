function toUpperCaseByFirstCharacter(target) {
  return target.substring(0, 1).toUpperCase() + target.substring(1);
}

module.exports = {
  toUpperCaseByFirstCharacter,
};
