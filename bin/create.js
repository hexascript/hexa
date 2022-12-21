#!/usr/bin/env node

const yargs = require('yargs/yargs')
const {
  hideBin
} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const fs = require("fs");
const paths = require('path');

const path = argv.create;
exports.main = function() {
  fs.access(path, (error) => {
    if (error) {
      fs.mkdir(path, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("[+] Successfully created new project.");
          var project_dir = paths.join(paths.dirname(fs.realpathSync(__filename)), '../src/');
          fs.copyFile(project_dir + 'app.js', path + '\\app.js', (err) => {
            if (err) throw err;
            console.log('[+] Created ' + path + '\\app.js');
          });
          fs.copyFile(project_dir + 'app.config.js', path + '\\app.config.js', (err) => {
            if (err) throw err;
            console.log('[+] Created ' + path + '\\app.config.js');
          });
          fs.copyFile(project_dir + 'mellow.js', path + '\\mellow.js', (err) => {
            if (err) throw err;
            console.log('[+] Created ' + path + '\\mellow.js');
          });
          fs.copyFile(project_dir + 'index.html', path + '\\index.html', (err) => {
            if (err) throw err;
            console.log('[+] Created ' + path + '\\index.html');
          });
          fs.mkdir(path + '\\views', (error) => {
            if (error) {
              console.log(error);
            } else {
              fs.copyFile(project_dir + 'views\\home.mellow', path + '\\views\\home.mellow', (err) => {
                if (err) throw err;
                console.log('[+] Created ' + path + '\\views\\home.mellow');
              });
            }
          });
          fs.mkdir(path + '\\public', (error) => {
            if (error) {
              console.log(error);
            } else {
              fs.mkdir(path + '\\public\\css', (error) => {
                if (error) {
                  console.log(error);
                } else {
                  fs.copyFile(project_dir + 'public\\css\\animate.min.css', path + '\\public\\css\\animate.min.css', (err) => {
                    if (err) throw err;
                    console.log('[+] Created ' + path + '\\public\\css\\animate.min.css');
                  });
                  fs.copyFile(project_dir + 'public\\css\\loader.css', path + '\\public\\css\\loader.css', (err) => {
                    if (err) throw err;
                    console.log('[+] Created ' + path + '\\public\\css\\loader.css');
                  });
                }
              });
              fs.mkdir(path + '\\public\\js', (error) => {
                if (error) {
                  console.log(error);
                } else {
                  fs.copyFile(project_dir + 'public\\js\\alpine.js', path + '\\public\\js\\alpine.js', (err) => {
                    if (err) throw err;
                    console.log('[+] Created ' + path + '\\public\\js\\alpine.js');
                  });
                  fs.copyFile(project_dir + 'public\\js\\tailwind.js', path + '\\public\\js\\tailwind.js', (err) => {
                    if (err) throw err;
                    console.log('[+] Created ' + path + '\\public\\js\\tailwind.js');
                  });
                }
              });
            }
          });
        }
      });
    } else {
      console.log("[-] Given project already exists.");
    }
  });
}