const path = require('path');

module.exports = function override(config, env) {
  config.entry = path.resolve(__dirname, 'src/index.tsx');
  config.output.libraryTarget = 'umd';
  config.output.library = 'reactApp';
  delete config.optimization;
  return config;
};