const Path = require('path')
const Fs = require('fs')
const Yaml = require('yaml')
const WebpackPwaManifest = require('webpack-pwa-manifest')

const siteConfigStr = Fs.readFileSync(Path.resolve('config.yaml'), 'utf8')
const siteConfig = Yaml.parse(siteConfigStr)
const site = Path.resolve('themes/site')
const context = Path.join(site, 'static', 'js')

module.exports = webpackConfig()

function webpackConfig () {
  return env => {
    const config = {
      context,
      entry: ['./main.js'],
      output: {
        path: Path.join(site, 'assets', 'js'),
        filename: '[name].js'
      },
      module: {
        rules: [
          {
            loader: 'babel-loader',
            test: /\.jsx?/
          }
        ]
      },
      plugins: [
        new WebpackPwaManifest({
          fingerprints: false,
          name: siteConfig.title,
          short_name: 'Jon Jaques',
          theme_color: siteConfig.params.ThemeColor,
          description: siteConfig.params.description,
          background_color: siteConfig.params.ThemeColor,
          crossorigin: null, //can be null, use-credentials or anonymous
          // icons: [
          //   {
          //     src: Path.resolve('src/assets/icon.png'),
          //     sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
          //   },
          //   {
          //     src: Path.resolve('src/assets/large-icon.png'),
          //     size: '1024x1024' // you can also use the specifications pattern
          //   }
          // ]
        })
      ]
    }

    return config
  }
}