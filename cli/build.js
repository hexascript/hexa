#!/usr/bin/env node
import fs from "fs"
import paths from "path"
import { ncp } from "ncp"
import shell from "shelljs"
var project_dir = paths.join(paths.dirname(fs.realpathSync(__filename)), '../');
ncp.limit = 16

exports.android = function () {
  fs.rmSync(`${process.cwd()}/android`, { recursive: true, force: true })
  fs.mkdir(`${process.cwd()}/android`, (error) => {
    if (error) {
      console.log(error)
    } else {
      ncp(`${project_dir}/android`, `${process.cwd()}/android`,
        err => {
          if (err) {
            return console.error(err)
          }
          console.log('[+] Successfully create android project.')
          ncp(`${process.cwd()}/src`, `${process.cwd()}/android/app/src/main/assets`,
            err => {
              if (err) {
                return console.error(err)
              }
              console.log('[+] Successfully generate assets file.')
              fs.readFile('project.json', (err, data) => {
                if (err) throw err
                let settings = JSON.parse(data)
                fs.readFile(`${process.cwd()}/android/app/src/main/AndroidManifest.xml`, (err, buf) => {
                  let data = buf.toString();
                  data = data.replace('{{APP_ID}}', settings.android.applicationId)
                    .replace('{{versionCode}}', settings.android.versionCode)
                    .replace('{{versionName}}', settings.android.versionName)
                    .replace('{{minSdkVersion}}', settings.android.minSdkVersion)
                    .replace('{{targetSdkVersion}}', settings.android.targetSdkVersion)
                  fs.writeFile(`${process.cwd()}/android/app/src/main/AndroidManifest.xml`, data, (err) => {
                    if (err) console.log(err)
                    console.log("[+] Create AndroidManifest.xml to your project.")
                    const path_setting = settings.android.applicationId.replaceAll(".", "/");
                    fs.mkdirSync(`${process.cwd()}/android/app/src/main/java/${path_setting}`, {
                      recursive: true
                    })
                    fs.readFile(`${project_dir}/java/MainActivity.java`, (err, buf) => {
                      let data = buf.toString();
                      data = data.replace('{{APP_ID}}', settings.android.applicationId)
                      fs.writeFile(`${process.cwd()}/android/app/src/main/java/${path_setting}/MainActivity.java`, data, (err) => {
                        if (err) console.log(err)
                        console.log("[+] Create MainActivity.java to your project.")
                      })
                    })
                    const data = `<resources>
                        <string name="app_name">${settings.android.appName}</string>
                    </resources>`;
                    fs.writeFile(`${process.cwd()}/android/app/src/main/res/values/strings.xml`, data, (err) => {
                      if (err) console.log(err)
                      console.log(`[+] App Name: ${settings.android.appName}`)
                      console.log(`[+] App ID: ${settings.android.applicationId}`)
                    })
                  })
                })
              })
            })
        })
    }
  })
}

exports.windows = function() {
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
                    } else {
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