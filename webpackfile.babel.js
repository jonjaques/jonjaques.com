const Path = require('path')

const site = Path.resolve('themes/site')
const context = Path.join(site, 'static', 'js')

module.exports = env => {
  const config = {
    context,
    entry: ['./main.js'],
    output: {
      path: Path.join(site, 'assets', 'js'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {loader: 'babel-loader', test: /\.jsx?/}
      ]
    }
  }

  return config
}