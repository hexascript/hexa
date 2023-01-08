#!/usr/bin/env node
import yargs from "yargs/yargs"
import { hideBin } from "yargs/helpers"
import fs from "fs"
import paths from "path"
import { ncp } from "ncp"
const argv = yargs(hideBin(process.argv)).argv
ncp.limit = 16

export function main() {
  const project_dir = paths.join(paths.dirname(fs.realpathSync(__filename)), '../');
  fs.mkdir(`${process.cwd()}/${argv.create}`, (error) => {
    if (error) {
      console.log(error)
    } else {
      fs.mkdir(`${process.cwd()}/${argv.create}/src`, (error) => {
        if (error) {
          console.log(error)
        } else {
          fs.writeFile(`${argv.create}/project.json`, `{
          "android" : {
              "applicationId": "com.example.app",
              "appName": "Example Project",
			  "versionCode": "1.0",
			  "versionName": "1.0",
			  "minSdkVersion": "23.0",
			  "targetSdkVersion": "33.0"
        },
        "windows": {
          "width": "600",
          "height": "600"
        }
}`, (err) => {
            if (err) console.log(err)
            console.log("[+] Add project.json.")
          })
          ncp(`${project_dir}/src`, `${argv.create}/src`,
            err => {
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