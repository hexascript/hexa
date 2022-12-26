#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const fs = require("fs");
const paths = require('path');
const ncp = require('ncp').ncp;
const path = argv.create;
ncp.limit = 16;

exports.main = function() {
  var project_dir = paths.join(paths.dirname(fs.realpathSync(__filename)), '../');
  fs.mkdir(process.cwd() + '\\' + argv.create, (error) => {
    if (error) {
      console.log(error);
    } else {
      fs.mkdir(process.cwd() + '\\' + argv.create + '\\src' , (error) => {
        if (error) {
          console.log(error);
        } else {
            fs.writeFile(argv.create + "\\android.json", `{
              "applicationId": "com.example.app"
}`, (err) => {
              if (err) console.log(err);
              console.log("[+] Created Android Settings File.");
            });
            fs.writeFile(argv.create + "\\windows.json", "{}", (err) => {
              if (err) console.log(err);
              console.log("[+] Created Windows Settings File.");
            });
            ncp(project_dir + '\\src', argv.create + '\\src', 
            function (err) {
            if (err) {
                return console.error(err);
            }
            console.log('[+] Successfully create new project.');
            });
        }
      });
    }
  });
}