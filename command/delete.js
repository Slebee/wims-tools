'use strict'
const co = require('co')
const prompt = require('co-prompt')
const config = require('../templates')
const chalk = require('chalk')
const fs = require('fs')
const showList = require('./common/showList')
module.exports = () => {
    co(function *() {
        // 接收用户输入的参数
        let tplName = yield prompt('Repository name: ')

        // 删除对应的模板
        if (config.tpl[tplName]) {
            delete config.tpl[tplName];
            //config.tpl[tplName] = undefined
        } else {
            console.log(chalk.red('Repository does not exist!'))
            process.exit()
        }

        // 写入template.json
        fs.writeFile(__dirname + '/../templates.json', JSON.stringify(config),     'utf-8', (err) => {
            if (err) console.log(err)
            console.log(chalk.green('Repository deleted!'))

            showList();

            process.exit()
        })
    })
}