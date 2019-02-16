const Fs = require('fs')
const Path = require('path')
const Url = require('url')
const Yaml = require('yaml')

const siteConfigStr = Fs.readFileSync(Path.resolve('config.yaml'), 'utf8')
const siteConfig = Yaml.parse(siteConfigStr)
const baseUrl = Url.parse(siteConfig.baseURL)

Fs.writeFileSync(Path.resolve('public', 'CNAME'), baseUrl.host)