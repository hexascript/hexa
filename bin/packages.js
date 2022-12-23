#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const fs = require("fs");

exports.main = function() {
  var packages = argv.install;
  if(packages.split('.').pop() == "js") {
    fs.readFile("index.html", function(err, buf) {
        var data = buf.toString();
        data = data.replace('<!-- Add Packages here -->', `<script src="public/js/` + argv.install + `"></script>
  <!-- Add Packages here -->`);
        fs.writeFile("index.html", data, (err) => {
        if (err) console.log(err);
        console.log("[+] Successfully Add " + argv.install + " to your project.");
        });
      });  
  }
  if(packages.split('.').pop() == "css") {
    fs.readFile("index.html", function(err, buf) {
        var data = buf.toString();
        data = data.replace('<!-- Add Packages here -->', `<link rel="stylesheet"href="public/css/` + argv.install + `"/>
  <!-- Add Packages here -->`);
        fs.writeFile("index.html", data, (err) => {
        if (err) console.log(err);
        console.log("[+] Successfully Add " + argv.install + " to your project.");
        });
      });  
  }    
}