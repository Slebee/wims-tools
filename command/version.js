'use strict'
const chalk = require('chalk')
const version = require('../package.json').version
module.exports = () => chalk.cyan(`${version}`)