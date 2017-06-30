'use strict'
const co = require('co')
const prompt = require('co-prompt')
const config = require('../templates')
const chalk = require('chalk')
const fs = require('fs')
const showList = require('./common/showList')
const log = console.log;
module.exports = () => {
    co(function *() {

        // 分步接收用户输入的参数
        let tplName = yield prompt('Repository name: ')
        let gitUrl = yield prompt('Git https link: ')
        let branch = yield prompt('Branch: ')

        // 避免重复添加
        if (!config.tpl[tplName]) {
            config.tpl[tplName] = {}
            config.tpl[tplName]['url'] = gitUrl.replace(/[\u0000-\u0019]/g, '') // 过滤unicode字符
            config.tpl[tplName]['branch'] = branch
        } else {
            log(chalk.red('Repository has already existed!'))
            process.exit()
        }

        // 把模板信息写入templates.json
        fs.writeFile(__dirname + '/../templates.json', JSON.stringify(config), 'utf-8', (err) => {
            if (err) log(err)
            log(chalk.green('New repository added!\n'))

            showList();

            process.exit()
        })
    })
}