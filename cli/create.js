#!/usr/bin/env node
import fs from "fs"
import paths from "path"
import { ncp } from "ncp"
ncp.limit = 16

exports.main = function (name) {
  const project_dir = paths.join(paths.dirname(fs.realpathSync(__filename)), '../');
  fs.mkdir(`${process.cwd()}/${name}`, (error) => {
    if (error) {
      console.log(error)
    } else {
      fs.mkdir(`${process.cwd()}/${name}/src`, (error) => {
        if (error) {
          console.log(error)
        } else {
          fs.writeFile(`${name}/project.json`, `{
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
        },
        "linux": {
          "width": "600",
          "height": "600"
        }
}`, (err) => {
            if (err) console.log(err)
            console.log("[+] Add project.json.")
          })
          ncp(`${project_dir}/src`, `${name}/src`,
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