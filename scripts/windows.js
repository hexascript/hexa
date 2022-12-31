#!/usr/bin/env node

import yargs from "yargs/yargs"
import { hideBin } from "yargs/helpers"
import fs from "fs"
import paths from "path"
import { ncp } from "ncp"

const argv = yargs(hideBin(process.argv)).argv
ncp.limit = 16

exports.main = function() {
  var project_dir = paths.join(paths.dirname(fs.realpathSync(__filename)), '../')
  fs.rmSync(process.cwd() + '/windows', { recursive: true, force: true })
  fs.mkdir(process.cwd() + '/windows', (error) => {
    if (error) {
      console.log(error)
    } else {
      ncp(project_dir + '/windows', process.cwd() + '/windows',
        function(err) {
          if (err) {
            return console.error(err)
          }
          console.log('[+] Successfully create Windows project.')
          ncp(process.cwd() + '/src', process.cwd() + '/windows',
            function(err) {
              if (err) {
                return console.error(err)
              }
              console.log('[+] Successfully generate assets file.')
              fs.readFile('project.json', (err, data) => {
                if (err) throw err
                let settings = JSON.parse(data)
                fs.readFile(process.cwd() + "/windows/main.js", function(err, buf) {
                  var data = buf.toString()
                  data = data.replace('{{width}}', settings.windows.width)
                    .replace('{{height}}', settings.windows.height)
                  fs.writeFile(process.cwd() + "/windows/main.js", data, (err) => {
                    if (err) console.log(err)
                    console.log("[+] Create main.js to your project.")
                  })
                })
              })
            })
        })
    }
  })
}