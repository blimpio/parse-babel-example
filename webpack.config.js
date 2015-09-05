var path = require('path');

module.exports = {
  entry: './src/main.js',
  output: { path: './cloud/', filename: 'main.js' },
  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      loader: 'babel-loader?optional=runtime&stage=0'
    }]
  }
};
