'use strict'
const exec = require('child_process').exec
const co = require('co')
const prompt = require('co-prompt')
const config = require('../templates')
const chalk = require('chalk')

module.exports = name => {
    co(function *() {
        // 设置默认仓库
        let tplName = 'wims-module-template'
        let projectName = name
        let gitUrl
        let branch

        if (!config.tpl[tplName]) {
            console.log(chalk.red('\n × Template does not exit!'))
            process.exit()
        }
        gitUrl = config.tpl[tplName].url
        branch = config.tpl[tplName].branch

        // git命令，远程拉取项目并自定义项目名
        let cmdStr = `git clone ${gitUrl} ${projectName} && cd ${projectName} && git checkout ${branch}`

        console.log(chalk.white('\n Start generating...'))

        exec(cmdStr, (error, stdout, stderr) => {
            if (error) {
                console.log(error)
                process.exit()
            }
            console.log(chalk.green('\n √ Generation completed!'))
            console.log(`\n open ${projectName} and start your work \n`)
            process.exit()
        })
    })
}