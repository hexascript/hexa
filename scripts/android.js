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
    fs.rmSync(process.cwd() + '/android', { recursive: true, force: true })
    fs.mkdir(process.cwd() + '/android', (error) => {
      if (error) {
        console.log(error)
      } else {
        ncp(project_dir + '/android', process.cwd() +  '/android',
          function(err) {
            if (err) {
              return console.error(err)
            }
            console.log('[+] Successfully create android project.')
            ncp(process.cwd() + '/src', process.cwd() + '/android/app/src/main/assets',
              function(err) {
                if (err) {
                  return console.error(err)
                }
                console.log('[+] Successfully generate assets file.')
                fs.readFile('project.json', (err, data) => {
                  if (err) throw err
                  let settings = JSON.parse(data)
                  fs.readFile(process.cwd() + "/android/app/src/main/AndroidManifest.xml", function(err, buf) {
                    var data = buf.toString()
                    data = data.replace('{{APP_ID}}', settings.android.applicationId)
                      .replace('{{versionCode}}', settings.android.versionCode)
                      .replace('{{versionName}}', settings.android.versionName)
                      .replace('{{minSdkVersion}}', settings.android.minSdkVersion)
                      .replace('{{targetSdkVersion}}', settings.android.targetSdkVersion)
                    fs.writeFile(process.cwd() + "/android/app/src/main/AndroidManifest.xml", data, (err) => {
                      if (err) console.log(err)
                      console.log("[+] Create AndroidManifest.xml to your project.")
                      var path_setting = settings.android.applicationId.replaceAll(".", "/")
                      fs.mkdirSync(process.cwd() + "/android/app/src/main/java/" + path_setting, {
                        recursive: true
                      })
                      fs.readFile(project_dir + "/java/MainActivity.java", function(err, buf) {
                        var data = buf.toString()
                        data = data.replace('{{APP_ID}}', settings.android.applicationId)
                        fs.writeFile(process.cwd() + "/android/app/src/main/java/" + path_setting + "/MainActivity.java", data, (err) => {
                          if (err) console.log(err)
                          console.log("[+] Create MainActivity.java to your project.")
                        })
                      })
                        var data = `<resources>
                        <string name="app_name">${settings.android.appName}</string>
                    </resources>`
                        fs.writeFile(process.cwd() + "/android/app/src/main/res/values/strings.xml", data, (err) => {
                          if (err) console.log(err)
                          console.log("[+] App Name: " + settings.android.appName)
                          console.log("[+] App ID: " + settings.applicationId)
                        })
                    })
                  })
                })
              })
          })
      }
    })
}
