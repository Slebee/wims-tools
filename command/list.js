'use strict'
const chalk = require('chalk')
const config = require('../templates')
const log = console.log;
module.exports = () => {
    let tpl = config.tpl
    log(chalk.red.bold('Template List :'))
    log('\n')

    for(let name in tpl){
        log(` ${chalk.bold('Name:')}${chalk.green(name)} ${chalk.bold('Version:')}${chalk.yellow(tpl[name].branch)}`)
    }
    log(chalk.cyan('Use command <init> [name] to create module.'))
    log('\n')
    process.exit()
}