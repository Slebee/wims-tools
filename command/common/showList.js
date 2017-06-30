'use strict'
const chalk = require('chalk')

const log = console.log;
module.exports = () => {
    const config = require('../../templates.json');
    let tpl = config.tpl
    log(chalk.cyan.bold('Repositories :\n'));
    for(let name in tpl){
        log(` ${chalk.bold('Repository:')}${chalk.green(name)} ${chalk.bold('Branch:')}${chalk.yellow(tpl[name].branch)}`)
    }
    log('\n')
    log(chalk.cyan('Tips:Use command <init> [name] to create module.\n'))
}