#!/usr/bin/env node

import yargs from "yargs/yargs"
import { hideBin } from "yargs/helpers"
import fs from "fs"
import paths from "path"
import { ncp } from "ncp"
import shell from "shelljs"
const argv = yargs(hideBin(process.argv)).argv
ncp.limit = 16

export function main() {
  const project_dir = paths.join(paths.dirname(fs.realpathSync(__filename)), '../');
  fs.rmSync(`${process.cwd()}/windows`, { recursive: true, force: true })
  fs.mkdir(`${process.cwd()}/windows`, (error) => {
    if (error) {
      console.log(error)
    } else {
      ncp(`${project_dir}/windows`, `${process.cwd()}/windows`,
        err => {
          if (err) {
            return console.error(err)
          }
          console.log('[+] Successfully create Windows project.')
          ncp(`${process.cwd()}/src`, `${process.cwd()}/windows`,
            err => {
              if (err) {
                return console.error(err)
              }
              console.log('[+] Successfully generate assets file.')
              fs.readFile('project.json', (err, data) => {
                if (err) throw err
                let settings = JSON.parse(data)
                fs.readFile(`${process.cwd()}/windows/main.js`, (err, buf) => {
                  let data = buf.toString();
                  data = data.replace('{{width}}', settings.windows.width)
                    .replace('{{height}}', settings.windows.height)
                  fs.writeFile(`${process.cwd()}/windows/main.js`, data, (err) => {
                    if (err) console.log(err)
                    console.log("[+] Create main.js to your project.")
                    console.log("[+] Compiling to windows executable.")
                    shell.cd("windows")
                    if (!shell.which('electron-packager')) {
                      shell.exec("npm install -g electron-packager")
                      shell.exec("npm install")
                      shell.exec("electron-packager . app --platform win32 --arch x64 --out '../dist/windows/'")
                      shell.exit(1);
                    }else{
                      shell.exec("npm install")
                      shell.exec("electron-packager . app --platform win32 --arch x64 --overwrite --out '../dist/windows/'")
                    }
                  })
                })
              })
            })
        })
    }
  })
}