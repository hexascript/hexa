#!/usr/bin/env node

import yargs from "yargs/yargs"
import { hideBin } from "yargs/helpers"
import fs from "fs"
import paths from "path"
import  {ncp } from "ncp"

const argv = yargs(hideBin(process.argv)).argv
ncp.limit = 16

exports.main = function() {
  var project_dir = paths.join(paths.dirname(fs.realpathSync(__filename)), '../')
  fs.mkdir(process.cwd() + '/' + argv.create, (error) => {
    if (error) {
      console.log(error)
    } else {
      fs.mkdir(process.cwd() + '/' + argv.create + '/src', (error) => {
        if (error) {
          console.log(error)
        } else {
          fs.writeFile(argv.create + "/android.json", `{
              "applicationId": "com.example.app",
              "appName": "Example Project",
			  "versionCode": "1.0",
			  "versionName": "1.0",
			  "minSdkVersion": "23.0",
			  "targetSdkVersion": "33.0"
}`, (err) => {
            if (err) console.log(err)
            console.log("[+] Created Android Settings File.")
          })
          fs.writeFile(argv.create + "/windows.json", "{}", (err) => {
            if (err) console.log(err)
            console.log("[+] Created Windows Settings File.")
          })
          ncp(project_dir + '/src', argv.create + '/src',
            function(err) {
              if (err) {
                return console.error(err)
              }
              console.log('[+] Successfully create new project.')
            })
        }
      })
    }
  })
}
