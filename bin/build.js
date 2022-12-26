#!/usr/bin/env node

const yargs = require('yargs/yargs')
const {
  hideBin
} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const fs = require("fs")
const ncp = require('ncp').ncp;
const paths = require('path');
ncp.limit = 16;

exports.main = function() {
  var project_dir = paths.join(paths.dirname(fs.realpathSync(__filename)), '../');
  if (argv.build == "android") {
    fs.rmSync(process.cwd() + '\\android', { recursive: true, force: true });
    fs.mkdir(process.cwd() + '\\android', (error) => {
      if (error) {
        console.log(error);
      } else {
        ncp(project_dir + '\\android', '\android',
          function(err) {
            if (err) {
              return console.error(err);
            }
            console.log('[+] Successfully create android project.');
            ncp(process.cwd() + '\\src', process.cwd() + '\\android\\app\\src\\main\\assets',
              function(err) {
                if (err) {
                  return console.error(err);
                }
                console.log('[+] Successfully generate assets file.');
                fs.readFile('android.json', (err, data) => {
                  if (err) throw err;
                  let settings = JSON.parse(data);
                  fs.readFile(process.cwd() + "\\android\\app\\src\\main\\AndroidManifest.xml", function(err, buf) {
                    var data = buf.toString();
                    data = data.replace('{{APP_ID}}', settings.applicationId)
                      .replace('{{versionCode}}', settings.versionCode)
                      .replace('{{versionName}}', settings.versionName)
                      .replace('{{minSdkVersion}}', settings.minSdkVersion)
                      .replace('{{targetSdkVersion}}', settings.targetSdkVersion);
                    fs.writeFile(process.cwd() + "\\android\\app\\src\\main\\AndroidManifest.xml", data, (err) => {
                      if (err) console.log(err);
                      console.log("[+] Create AndroidManifest.xml to your project.");
                      var path_setting = settings.applicationId.replaceAll(".", "\\");
                      fs.mkdirSync(process.cwd() + "\\android\\app\\src\\main\\java\\" + path_setting, {
                        recursive: true
                      });
                      fs.readFile(project_dir + "\\java\\MainActivity.java", function(err, buf) {
                        var data = buf.toString();
                        data = data.replace('{{APP_ID}}', settings.applicationId);
                        fs.writeFile(process.cwd() + "\\android\\app\\src\\main\\java\\" + path_setting + "\\MainActivity.java", data, (err) => {
                          if (err) console.log(err);
                          console.log("[+] Create MainActivity.java to your project.");
                        });
                      });
                      fs.readFile(project_dir + "\\java\\strings.xml", function(err, buf) {
                        var data = buf.toString();
                        data = data.replace('{{APP_NAME}}', settings.appName);
                        fs.writeFile(process.cwd() + "\\android\\app\\src\\main\\res\\values\\strings.xml", data, (err) => {
                          if (err) console.log(err);
                          console.log("[+] App Name: " + settings.appName);
                          console.log("[+] Application ID: " + settings.applicationId);
                        });
                      });
                    });
                  });
                });
              });
          });
      }
    });
  }
}